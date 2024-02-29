<script setup>
import dayjs from 'dayjs';
import { ref } from 'vue';
import { LikeFilled, LikeOutlined, DislikeFilled, DislikeOutlined } from '@ant-design/icons-vue';
import avatarImg from "../../assets/img/avatarImg.svg";
import { message } from 'ant-design-vue';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

const comments = ref([
    {
        author: 'Leonard',
        avatar: avatarImg,
        content: "Object.assign()可以实现深拷贝？",
        datetime: dayjs(),
        likes: 0,
        dislikes: 0
    }
]);
const submitting = ref(false);
const commentText = ref('');
const replyText = ref("请发表你的评论");

const like = (item) => {
    item.likes += 1;
    item.action = 'liked';
};

const cancelLike = (item) => {
    item.likes -= 1;
    item.action = 'liked';
};

const dislike = (item) => {
    item.dislikes += 1;
    item.action = 'disliked';
};

const cancelDislike = (item) => {
    item.dislikes -= 1;
    item.action = 'disliked';
};

const handleSubmit = () => {
    if (commentText.value === "") {
        message.info('请输入你的评论');
        return;
    }
    submitting.value = true;
    setTimeout(() => {
        submitting.value = false;
        comments.value = [
            {
                author: 'Leonard' + generateRandomNumberString(5),
                avatar: avatarImg,
                content: commentText.value,
                datetime: dayjs(),
                likes: 0,
                dislikes: 0
            },
            ...comments.value,
        ];
        commentText.value = '';
        replyText.value = "请发表你的评论";
    }, 1000);
};

const replyAuthor = (item) => {
    replyText.value = "回复 @" + item.author;
};

const generateRandomNumberString = (length) => {
    let result = '';
    let characters = '0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
</script>

<template>
    <div>
        <a-divider style="height: 1px;"></a-divider>
        <!-- 显示评论 -->
        <a-list v-if="comments.length" :data-source="comments" :header="`${comments.length} 评论`" item-layout="horizontal">
            <template #renderItem="{ item }">
                <a-list-item>
                    <a-comment>
                        <template #actions>
                            <span key="comment-basic-like">
                                <a-tooltip title="赞">
                                    <template v-if="item.action === 'liked'">
                                        <LikeFilled @click="cancelLike(item)" />
                                    </template>
                                    <template v-else>
                                        <LikeOutlined @click="like(item)" />
                                    </template>
                                </a-tooltip>
                                <span style="padding-left: 8px; cursor: auto">
                                    {{ item.likes }}
                                </span>
                            </span>
                            <span key="comment-basic-dislike">
                                <a-tooltip title="踩一下">
                                    <template v-if="item.action === 'disliked'">
                                        <DislikeFilled @click="cancelDislike(item)" />
                                    </template>
                                    <template v-else>
                                        <DislikeOutlined @click="dislike(item)" />
                                    </template>
                                </a-tooltip>
                                <span style="padding-left: 8px; cursor: auto">
                                    {{ item.dislikes }}
                                </span>
                            </span>
                            <span key="comment-basic-reply-to" @click="replyAuthor(item)">回复</span>
                        </template>
                        <template #author><a>{{ item.author }}</a></template>
                        <template #avatar>
                            <a-avatar :src="avatarImg" alt="Michael" />
                        </template>
                        <template #content>
                            <p>
                                {{ item.content }}
                            </p>
                        </template>
                        <template #datetime>
                            <a-tooltip :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
                                <span>{{ item.datetime.fromNow() }}</span>
                            </a-tooltip>
                        </template>
                    </a-comment>
                </a-list-item>
            </template>
        </a-list>
        <!-- 添加评论 -->
        <a-comment>
            <template #avatar>
                <a-avatar :src="avatarImg" alt="Han Solo" />
            </template>
            <template #content>
                <a-form-item>
                    <a-textarea v-model:value="commentText" :rows="4" :placeholder="replyText" show-count
                        :maxlength="200" />
                </a-form-item>
                <a-form-item>
                    <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
                        添加评论
                    </a-button>
                </a-form-item>
            </template>
        </a-comment>
    </div>
</template>