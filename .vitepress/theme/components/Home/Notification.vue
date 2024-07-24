<script setup>
import { h, onMounted } from "vue";
import { notification, Button } from "ant-design-vue";
import { InfoCircleOutlined } from '@ant-design/icons-vue';

onMounted(() => {
  openNotification();
});

const openNotification = () => {
  const key = `open${Date.now()}`;
  notification.open({
    message: "公告",
    description:
      `数据库服务出现了问题，实时访客服务暂时不可用，预计48小时内修复。
       其余功能正常，抱歉给您造成了不好的使用体验！   
       2024-07-24`,
    icon: () => h(InfoCircleOutlined, { style: "color: #FF7875" }),
    btn: () =>
      h(
        Button,
        {
          size: "default",
          onClick: () => notification.close(key),
        },
        {
          default: () => "了解",
        }
      ),
    key,
    placement: "bottomRight",
  });
};
</script>
