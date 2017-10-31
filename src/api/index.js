/**
 * api 接口配置
 * @author lzx
 * @version 2017-6-15
 */

import {
  baseURL,
  imgPath,
  gifPath
} from './config'

// 图片路径
export const imgBaseURL = `${imgPath}`

// 测试网络请求的路径
export const szlngURL = `${baseURL}/hexuan/router`

// 图像内容接口 ====
// 摘要附图链接：参数说明：pn: 公开号
export const getSummaryImg = function(pn) {
  return `${baseURL}/searchfacade/img/getSummaryImg?pn=${pn}`
}

/**
 *  专利附图链接
 * @param {String} an 申请号
 * @param {String} pn 公开号
 * @param {String} pd pd
 * @param {String} pt pt
 * @param {String} fileName 文件名
 */
export const getDescImg = function(an, pn, pd, pt, fileName) {
  return `${gifPath}/imgArchive/descDoc?an=${an}&pn=${pn}&pd=${pd}&pt=${pt}&fileName=${fileName}`
}
