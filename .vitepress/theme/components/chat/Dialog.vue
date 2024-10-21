<script setup lang="ts">
import "./styles/vars.css";
import "./styles/markdown-body.css";
import "./styles/highlight-js.css";

import { onBeforeUnmount, onMounted, ref, computed } from "vue";
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

import MarkdownIt from "markdown-it";
import MarkdownItHighlightjs from "markdown-it-highlightjs";

interface DocumateProps {
  endpoint: string;
  placeholder?: string;
  predefinedQuestions?: string[];
  open?: boolean;
  onClose: () => void;
}

const props = withDefaults(defineProps<DocumateProps>(), {
  endpoint: "",
  placeholder: "Ask a question...",
  predefinedQuestions: () => [],
  open: false,
  onClose: () => {
    console.warn("emit close");
  },
});

const isOpen = ref(props.open);
const query = ref<string>("");
const questions = ref<{ role: string; content: string; id: number }[]>([]);
const loading = ref(false);
const chatContainer = ref<HTMLElement | null>(null);
let selectionMade = ref(false);

let assistantId = 0;
let isCmdPressed = false;

function onSelect(item: string): void {
  selectionMade.value = true;
  startChat(item);
}

// markdown processor
const markdownToHtml = (content: string): string => {
  const markdown = new MarkdownIt().use(MarkdownItHighlightjs);

  try {
    const html = markdown.render(content);
    return html;
  } catch (err) {
    return content;
  }
};

// fetch ChatGPT
async function startChat(question: string) {
  if (!question) {
    return;
  }

  if (!props.endpoint) {
    console.error("Props endpoint is not provide");
    return;
  }

  loading.value = true;

  questions.value.push({ role: "user", content: question, id: ++assistantId });

  try {
    const response = await fetch(props.endpoint, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    loading.value = false;

    await streamToString(response.body, assistantId);
  } catch (err) {
    console.log(err);
  }
}

async function streamToString(body: any, assistantId: number) {
  console.log("Streaming response", body);
  const reader = body.getReader();
  const decoder = new TextDecoder(); // 使用 TextDecoder 解码

  let currentAssistantContent = ""; // 当前正在构建的助手内容

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value, { stream: true });

    // 处理每个数据块
    const lines = chunk.split("\n"); // 假设数据块以换行符分隔
    for (const line of lines) {
      if (line.trim()) {
        // 忽略空行
        try {
          const data = JSON.parse(line); // 解析 JSON 数据
          const content = data.result; // 提取 result 字段
          const assistantIndex = questions.value.findIndex(
            (q) => q.role === "assistant" && q.id === assistantId
          );

          // 如果尚未创建助手的回复条目，先创建一个条目
          if (assistantIndex === -1) {
            currentAssistantContent += content; // 逐步构建助手内容
            questions.value.push({
              role: "assistant",
              content: currentAssistantContent,
              id: assistantId,
            });
          } else {
            // 如果已存在助手条目，则逐步追加到当前助手内容
            currentAssistantContent += content; // 累加当前数据块内容
            questions.value[assistantIndex].content = currentAssistantContent; // 实时更新内容
          }

          // 滚动到最新内容
          if (chatContainer.value) {
            chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
          }
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }
    }
  }
}

const keyEnter = (e: KeyboardEvent) => {
  if (selectionMade.value) {
    selectionMade.value = false;
    query.value = "";
    return;
  }
  e.preventDefault();
  startChat(query.value);
  scrollToBottom();
  query.value = "";
};

const filteredPredefinedQuestions = computed(() =>
  query.value === ""
    ? props.predefinedQuestions
    : props.predefinedQuestions.filter((item) => {
        return item.toLowerCase().includes(query.value);
      })
);

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === "Meta") isCmdPressed = true; // Cmd key on Mac

  if (isCmdPressed && e.key === "/") {
    isOpen.value = true; // Open dialog
  }

  if (e.key === "Escape") {
    isOpen.value = false; // Close dialog
  }
};

const scrollToBottom = () => {
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("keyup", (event) => {
    if (event.key === "Meta") isCmdPressed = false; // Cmd key on Mac
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
  window.removeEventListener("keyup", () => {});
});
</script>

<template>
  <TransitionRoot :show="open" as="template" appear>
    <Dialog as="div" class="dialog" @close="onClose">
      <TransitionChild
        as="template"
        class="enter enter-from enter-to leave leave-from leave-to"
      >
        <div class="transition-child-ref"></div>
      </TransitionChild>
      <div class="dialog-container">
        <TransitionChild as="template">
          <DialogPanel class="dialog-panel">
            <Combobox @update:modelValue="onSelect">
              <div class="chat-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="magnifying-glass-icon"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <ComboboxInput
                  class="chat-input"
                  :placeholder="placeholder"
                  aria-autocomplete="false"
                  @change="query = $event.target.value"
                  @keyup.enter="keyEnter"
                  :value="query"
                  autocomplete="off"
                />
              </div>
              <ComboboxOptions
                v-if="props.predefinedQuestions.length > 0 && !questions.length"
                static
                class="combobox-options"
              >
                <li v-if="props.predefinedQuestions.length > 0">
                  <ul class="combobox-options-container">
                    <ComboboxOption
                      v-for="action in filteredPredefinedQuestions"
                      :key="action"
                      :value="action"
                      as="template"
                      v-slot="{ active }"
                    >
                      <li class="combobox-option" :class="{ active }">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="option-icon"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                          />
                        </svg>
                        <span class="combobox-options-name">{{ action }}</span>
                      </li>
                    </ComboboxOption>
                  </ul>
                </li>
              </ComboboxOptions>
              <div
                v-if="
                  props.predefinedQuestions.length === 0 &&
                  questions.length === 0
                "
                class="result-not-found"
              >
                <p class="result-not-found-text">How can I help you today?</p>
              </div>

              <div
                static
                class="combobox-options"
                v-if="questions.length"
                ref="chatContainer"
              >
                <ul class="question-anwser-section">
                  <li
                    class="question-anwser-item"
                    v-for="(q, index) in questions"
                    v-bind:key="index"
                  >
                    <div v-if="q.role === 'user'" class="question-role-user">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="question-role-icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {{ q.content }}
                    </div>
                    <div
                      v-else-if="q.role === 'assistant' && !q.content"
                      class="result-not-found"
                    >
                      <p class="result-not-found-text">
                        We couldn’t find anything with that term. Please try
                        again.
                      </p>
                    </div>
                    <div
                      class="anwser-content"
                      v-else-if="q.role === 'assistant' && q.content"
                    >
                      <svg
                        class="question-role-icon documate-logo"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.79938 23.5375C3.57959 23.516 3.36074 23.4856 3.14338 23.4465C2.98375 23.4179 2.83446 23.3477 2.71056 23.243C2.58666 23.1384 2.49252 23.0029 2.43762 22.8503C2.38272 22.6977 2.36899 22.5334 2.39782 22.3738C2.42665 22.2142 2.49702 22.065 2.60185 21.9412C3.10678 21.346 3.45159 20.6318 3.60369 19.8662C3.632 19.7246 3.57661 19.476 3.29108 19.1978C1.26031 17.2225 0 14.5431 0 11.5769C0 5.38615 5.44985 0.5 12 0.5C18.5502 0.5 24 5.38615 24 11.5769C24 17.7677 18.5502 22.6538 12 22.6538C10.9748 22.6538 9.97785 22.5345 9.02523 22.3105C7.46812 23.289 5.62931 23.7208 3.79938 23.5375ZM12.7957 18.2748C12.7504 18.3232 12.6907 18.3474 12.6165 18.3474C12.5423 18.3474 12.4805 18.3232 12.431 18.2748C12.3857 18.2305 12.3569 18.1721 12.3445 18.0995C12.258 17.4628 12.1632 16.9288 12.0602 16.4976C11.9571 16.0664 11.8212 15.7158 11.6522 15.4457C11.4832 15.1717 11.2587 14.9541 10.9784 14.7929C10.7023 14.6317 10.3459 14.5028 9.90907 14.4061C9.47225 14.3053 8.93448 14.2146 8.29574 14.134C8.21745 14.1259 8.15357 14.0977 8.10412 14.0494C8.05467 14.001 8.02995 13.9406 8.02995 13.868C8.02995 13.7955 8.05467 13.7351 8.10412 13.6867C8.15357 13.6383 8.21745 13.6101 8.29574 13.602C8.9386 13.5335 9.47844 13.4549 9.91525 13.3663C10.3521 13.2736 10.7106 13.1447 10.9908 12.9794C11.271 12.8142 11.4956 12.5925 11.6646 12.3145C11.8376 12.0364 11.9736 11.6798 12.0725 11.2445C12.1756 10.8093 12.2662 10.2713 12.3445 9.63052C12.3569 9.56201 12.3857 9.50559 12.431 9.46126C12.4805 9.4129 12.5423 9.38872 12.6165 9.38872C12.6907 9.38872 12.7504 9.4129 12.7957 9.46126C12.8452 9.50559 12.8761 9.56201 12.8885 9.63052C12.9709 10.2713 13.0615 10.8093 13.1604 11.2445C13.2635 11.6798 13.3994 12.0364 13.5684 12.3145C13.7374 12.5925 13.962 12.8142 14.2422 12.9794C14.5224 13.1447 14.8809 13.2736 15.3178 13.3663C15.7586 13.4549 16.2985 13.5335 16.9372 13.602C17.0155 13.6101 17.0773 13.6383 17.1226 13.6867C17.1721 13.7351 17.1968 13.7955 17.1968 13.868C17.1968 13.9406 17.1721 14.001 17.1226 14.0494C17.0773 14.0977 17.0155 14.1259 16.9372 14.134C16.2985 14.2025 15.7586 14.2831 15.3178 14.3758C14.8809 14.4645 14.5224 14.5914 14.2422 14.7567C13.962 14.9219 13.7374 15.1435 13.5684 15.4216C13.3994 15.6997 13.2635 16.0563 13.1604 16.4915C13.0615 16.9268 12.9709 17.4628 12.8885 18.0995C12.8761 18.1721 12.8452 18.2305 12.7957 18.2748ZM8.77789 11.9578C8.74492 11.9901 8.70371 12.0062 8.65425 12.0062C8.54711 12.0062 8.4853 11.9498 8.46882 11.8369C8.42349 11.4541 8.37404 11.1559 8.32047 10.9423C8.2669 10.7247 8.18448 10.5614 8.07322 10.4526C7.96195 10.3438 7.79094 10.2612 7.56017 10.2048C7.33351 10.1484 7.02239 10.0859 6.62679 10.0174C6.50316 10.0013 6.44135 9.94284 6.44135 9.84209C6.44135 9.74538 6.49492 9.68694 6.60206 9.66679C7.00591 9.59425 7.32115 9.52977 7.5478 9.47335C7.77857 9.4129 7.95164 9.33029 8.06703 9.2255C8.18242 9.1167 8.2669 8.95549 8.32047 8.74191C8.37404 8.52832 8.42349 8.23212 8.46882 7.8533C8.4853 7.74046 8.54711 7.68404 8.65425 7.68404C8.7614 7.68404 8.82116 7.73845 8.83352 7.84725C8.88709 8.23413 8.94066 8.53839 8.99423 8.76004C9.0478 8.97766 9.13022 9.14289 9.24149 9.25573C9.35687 9.36454 9.52788 9.44716 9.75454 9.50358C9.9853 9.55596 10.3026 9.61037 10.7065 9.66679C10.7518 9.67485 10.7889 9.695 10.8177 9.72724C10.8507 9.75545 10.8672 9.79373 10.8672 9.84209C10.8672 9.94284 10.8136 10.0013 10.7065 10.0174C10.3026 10.094 9.98736 10.1625 9.76072 10.2229C9.53406 10.2834 9.36305 10.368 9.24767 10.4768C9.13228 10.5816 9.0478 10.7408 8.99423 10.9544C8.94066 11.1639 8.88709 11.4601 8.83352 11.843C8.82939 11.8873 8.81085 11.9256 8.77789 11.9578ZM11.6213 7.98024C11.6048 8.05278 11.5636 8.08905 11.4977 8.08905C11.4235 8.08905 11.3823 8.05278 11.374 7.98024C11.3163 7.67799 11.2628 7.45635 11.2133 7.3153C11.168 7.17022 11.0712 7.06746 10.9228 7.007C10.7786 6.94655 10.5354 6.88812 10.1934 6.8317C10.1192 6.81558 10.0821 6.77528 10.0821 6.7108C10.0821 6.63826 10.1192 6.59796 10.1934 6.5899C10.5354 6.52945 10.7786 6.47102 10.9228 6.4146C11.0712 6.35415 11.168 6.2534 11.2133 6.11235C11.2628 5.96727 11.3163 5.74159 11.374 5.43531C11.3823 5.36277 11.4235 5.3265 11.4977 5.3265C11.5636 5.3265 11.6048 5.36277 11.6213 5.43531C11.6749 5.74159 11.7264 5.96727 11.7758 6.11235C11.8253 6.2534 11.9221 6.35415 12.0663 6.4146C12.2106 6.47102 12.4537 6.52945 12.7957 6.5899C12.8699 6.59796 12.907 6.63826 12.907 6.7108C12.907 6.77528 12.8699 6.81558 12.7957 6.8317C12.4537 6.88812 12.2106 6.94655 12.0663 7.007C11.9221 7.06746 11.8253 7.17022 11.7758 7.3153C11.7264 7.45635 11.6749 7.67799 11.6213 7.98024Z"
                          fill="currentColor"
                        />
                      </svg>
                      <div
                        class="markdown-body"
                        v-html="markdownToHtml(q.content)"
                      ></div>
                    </div>
                  </li>
                  <li>
                    <div v-show="loading" class="loading">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="loading-spin"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="footer">
                <div class="kbd-wrap">
                  <span class="kbd-text">Type</span>
                  <kbd class="kbd">⌘</kbd>
                  <span class="kbd-text">+</span>
                  <kbd class="kbd">/</kbd>
                  <span class="kbd-text">to open</span>
                  <kbd :class="['kbd', 'esc']">esc</kbd>
                  <span class="kbd-text">to close</span>
                </div>
                <a
                  href="https://github.com/Hiohk"
                  class="powered-by"
                  target="_blank"
                >
                  <span>Powered by</span>
                  <span>hkgroup</span>
                </a>
              </div>
            </Combobox>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style lang="less" scoped>
input {
  outline: none;
}

input:focus {
  outline: none;
}

p {
  margin: 0;
  padding: 0;
}

ul {
  padding: 0;
  margin: 0;
}

.button-placeholder {
  display: none;
}

@media (min-width: 768px) {
  .button-placeholder {
    display: block;
  }
}

.enter {
  transition: opacity 200ms ease-out;
}

.enter-from {
  opacity: 0;
}

.enter-to {
  opacity: 1;
}

.leave {
  transition: opacity 100ms ease-in;
}

.leave-from {
  opacity: 1;
}

.leave-to {
  opacity: 0;
}

.transition-child-ref {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.dialog-container {
  position: fixed;
  z-index: 999999;
  overflow-y: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--dm-mask-bg-color);
  padding: 1rem;

  @media (min-width: 640px) {
    padding: 1.5rem;
  }
  @media (min-width: 768px) {
    padding: 5rem;
  }
}

.dialog-panel {
  margin: 0 auto;
  overflow: hidden;
  border-radius: 0.75rem;
  max-width: 36rem;
  background-color: var(--dm-modal-bg-color);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
}

.magnifying-glass-icon {
  position: absolute;
  top: 0.875rem;
  left: 1rem;
  width: 1.25rem;
  height: 1.25rem;
  color: var(--dm-text-color);
  pointer-events: none;
}

.chat-container {
  position: relative;
}

.chat-input {
  box-sizing: border-box;
  padding-right: 1rem;
  padding-left: 2.75rem;
  border-width: 0;
  width: 100%;
  height: 3rem;
  color: var(--dm-text-color);
  background-color: transparent;
  border-bottom: 1px solid var(--dm-divider-color);

  @media (min-width: 640px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}

.chat-input::placeholder {
  font-size: 1rem;
}

.combobox-options {
  overflow-y: auto;
  padding: 1rem;
  max-height: 20rem;
  scroll-padding-top: 2.5rem;
  scroll-padding-bottom: 2.5rem;
  scroll-padding-bottom: 0.5rem;
  min-height: 5rem;
  list-style: none;
}

.combobox-option {
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
  user-select: none;
}

.combobox-options-container {
  margin-top: 0.5rem;
  margin-left: -1rem;
  margin-right: -1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--dm-text-color);
}

.active {
  color: var(--dm-c-white);
  background-color: var(--dm-highlight-color);
}

.combobox-options-name {
  margin-left: 0.75rem;
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.loading {
  padding: 1rem;
  padding-left: 2.6rem;
  display: flex;
  justify-content: left;
  align-items: center;
}

.loading-spin {
  animation: spin 1s linear infinite;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
}

.option-icon {
  flex: none;
  width: 1.5rem;
  height: 1.5rem;
}

.question-anwser-section {
  list-style: none;
  max-height: 20rem;
  font-size: 0.875rem;
  scroll-padding-top: 0.5rem;
  scroll-padding-bottom: 0.5rem;
  color: var(--dm-text-color);
}

.question-anwser-item {
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
}

.question-role-user {
  display: flex;
  gap: 1.2rem;
}

.question-role-icon {
  display: inline-block;
  flex: none;
  width: 1.5rem;
  height: 1.5rem;
}

.documate-logo {
  width: 1.4rem;
  height: 1.4rem;
}

.result-not-found {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
  text-align: center;

  @media (min-width: 640px) {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }
}

.result-not-found-text {
  margin-top: 0.5rem;
  color: var(--dm-text-color);
  font-size: 0.85rem;
}
.anwser-content {
  display: flex;
  gap: 1.5rem;
}

.markdown-body {
  border-width: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  overflow-wrap: break-word;
  color: var(--dm-text-color);
  list-style: auto;
}

.footer {
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-wrap: wrap;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1rem;
  color: var(--dm-text-color);
  border-top: 1px solid var(--dm-divider-color);
  @media (max-width: 454px) {
    justify-content: center;
  }
}

.kbd-wrap {
  display: flex;
  justify-content: center;
  align-content: center;
}

.kbd-text {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.kbd {
  display: flex;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  border-width: 1px;
  width: 1.25rem;
  height: 1.25rem;
  font-weight: 600;

  @media (min-width: 640px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}

.esc {
  width: 2rem;
}

.powered-by {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--dm-text-color);
  gap: 0.25rem;
  @media (max-width: 768px) {
    margin-top: 0.2rem;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
