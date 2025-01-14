import { ElNotification } from 'element-plus';
import { ElMessage } from 'element-plus';

// 抽取公用的实例 - 操作成功与失败消息提醒内容等
export default function useSubmit() {
  const sexList = [
    { name: '不想说', value: 0 },
    { name: '男', value: 1 },
    { name: '女', value: 2 },
  ];

  // 操作成功消息提醒内容
  const submitOk = (msg, cb) => {
    ElNotification({
      title: '成功',
      message: msg || '操作成功！',
      type: 'success',
      duration: 2000,
      onClose: function () {
        cb && cb();
      },
    });
  };

  // 操作失败消息提醒内容
  const submitFail = (msg) => {
    ElMessage({
      message: msg || '网络异常，请稍后重试！',
      type: 'error',
    });
  };

  return {
    sexList,
    submitOk,
    submitFail,
  };
}
