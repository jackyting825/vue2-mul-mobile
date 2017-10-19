import mui from 'mui'

// 设置全局beforeSend
mui.ajaxSettings.beforeSend = function (xhr, setting) {
  console.log('beforeSend:::' + JSON.stringify(setting))
}
// 设置全局complete
mui.ajaxSettings.complete = function (xhr, status) {
  console.log('complete:::' + status)
}
// 设置ajax超时时间
mui.ajaxSettings.timeout = 25 * 1000

// 设置全局 ajax 异常
mui.ajaxSettings.error = function (xhr, status) {
  console.log('ajax请求异常, error:::' + xhr + 'status::' + status)
  switch (status) {
    case 'error':
      mui.toast('无法连接到服务器,请稍后重试')
      break
    case 'timeout':
      mui.toast('请求超时,请稍后重试')
      break
    case 'abort':
      mui.toast('似乎已断开与服务器的连接')
      break
    default:
      mui.toast('请求出现异常,请稍后重试')
      break
  }
  if (window.plus) {
    plus.nativeUI.closeWaiting()
  }
}

mui.showWaiting = function () {
  mui.os.plus && plus.nativeUI.showWaiting() // 显示等待框
}

mui.closeWaiting = function () {
  mui.os.plus && plus.nativeUI.closeWaiting() // 关闭等待框
}
/**
 * ajax 方法,基于mui.js
 * @export
 * @param {string} url
 * @param {Object} prams
 * @param {sucCallabck} func
 * @param {post/get} method  get is default
 */
export function ajax (url, prams, func, fail, method) {
  console.log(`sending data to URL => ${url}`)
  mui.ajax({
    url: url,
    type: method === undefined ? 'GET' : 'POST',
    data: prams,
    cache: false,
    dataType: 'json',
    success: function (feedback, status, ajaxObj) {
      func && func(feedback)
    },
    error: function (e, t, w) {
      console.log('status:' + e.status + '\n' + 'statusText:' + e.statusText)
      fail && fail(e)
    },
    beforeSend: function () {
      console.log('beforeSend:::' + JSON.stringify(prams))
    },
    complete: function (e) {
      console.log('complete:::' + e.status)
    }
  })
}

/**
 * 测定当前网络状态(是否在线)
 * @return {boolean}
 * ``` ...   true  在线
 * ``` ...   false 离线
 * ```  默认返回true
 */
export function checkNetWork () {
  if (mui.os.plus) {
    return !(plus.networkinfo.getCurrentType() === plus.networkinfo.CONNECTION_NONE)
  }
  return true
}

