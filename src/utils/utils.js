/**
 *获取url中的参数值
 **/
export function getURLQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}
/**
 *改变某个url中的一个查询参数的值
 **/
export function changeURLArg(url, arg, argVal) {
  var pattern = arg + '=([^&]*)'
  var replaceText = arg + '=' + argVal
  if (url.match(pattern)) {
    var tmp = '/(' + arg + '=)([^&]*)/gi'
    var Fn = Function //  一个变量指向Function，防止有些前端编译工具报错
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
