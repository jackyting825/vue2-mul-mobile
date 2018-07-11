/**
 *获取url中的参数值
 **/
export function getURLQueryString(name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}
/**
 *改变某个url中的一个查询参数的值
 **/
export function changeURLArg(url, arg, argVal) {
  let pattern = arg + '=([^&]*)'
  let replaceText = arg + '=' + argVal
  if (url.match(pattern)) {
    let tmp = '/(' + arg + '=)([^&]*)/gi'
    let Fn = Function //  一个变量指向Function，防止有些前端编译工具报错
    // tmp = url.replace(eval(tmp), replaceText)
    tmp = url.replace(new Fn('return ' + tmp)(), replaceText)
    return tmp
  } else {
    if (url.match('[\\?]')) {
      return url + '&' + replaceText
    } else {
      return url + '?' + replaceText
    }
  }
}

/**
 * base64编码转图片文件
 * @param {base64值} urlData
 */
export function base64ToImageFile(urlData) {
  let bytes = window.atob(urlData.split(',')[1]) // 去掉url的头，并转换为byte
  // 处理异常,将ascii码小于0的转换为大于0
  let ab = new ArrayBuffer(bytes.length)
  let ia = new Uint8Array(ab)
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i)
  }
  let blob = new Blob([ab], { type: 'image/png' })
  // 转成file的时候在ios的Safari上不能正常工作
  // let file = new File([blob], 'blob.png', { type: 'image/png' })
  return blob
}
