/**
 * api 接口配置
 * @author lzx
 * @version 2017-6-15
 */

import { baseURL, imgPath, gifPath } from './config'

// 图片路径
export const imgBaseURL = `${imgPath}`

// 修改密码
export const updatePwd = `${baseURL}/sky/information/updatePassword`

// 登录
export const login = `${baseURL}/sky/mobile/login.do`

// 专利列表接口
export const doSearch = `${baseURL}/sky/searchResult/doSearch.do`

// 专利详情接口
export const getPatentDetail = `${baseURL}/sky/patentDetail/mdetail.do`

// IPC检索
export const getIpc = `${baseURL}/sky/ipc/subIpcs.do`

// 首页获取最新专利
export const getNewestPatent = `${baseURL}/sky/warn/getNewestPatent.do`

// 首页推荐文献
export const getLastWarns = `${baseURL}/sky/warn/mLastWarnsIndex.do`

// 根据标题进行 资讯检索
export const searchNoticeByTitle = `${baseURL}/sky/cms/notices/loadNotices.do`
// 资讯页面
export const getMainNotice = `${baseURL}/sky/cms/notices/mNoticesIndex.do`

// 资讯数据接口
export const getNotice = `${baseURL}/sky/cms/notices/list.do`

// 资讯详情接口
export const getNoticeDetail = `${baseURL}/sky/cms/notices/mdetail.do`

// 期刊文献检索接口
export const doJournalSearch = `${baseURL}/sky/journalSearchResult/doSearch.do`

// 期刊文献详情接口
export const getJournalDetail = `${baseURL}/sky/journalDetail/mdetail.do`

// 我的消息
export const loadAllMsg = `${baseURL}/sky/message/mLoadAllMessages.do`

// 消息详情
export const loadAllMessages = `${baseURL}/sky/message/mLoadMessage.do`

// 我的专利收藏列表
export const getMyFav = `${baseURL}/sky/collection/mSearchFavorite.do`

// 我的科技文献收藏列表
export const getMyFavTech = `${baseURL}/sky/collection/mFavoriteJournal.do`

// 获取专利检索历史
export const getSearchHistory = `${baseURL}/sky/shc/mloadsearchhistory.do`

// 获取科技文献检索历史
export const getSearchHistoryTech = `${baseURL}/sky/shc/mloadsearchhistoryJournal.do`

// 推荐资讯
export const loadTopVisit = `${baseURL}/sky/cms/notices/loadTopVisit.do`

// 图像内容接口 ====
// 摘要附图链接：参数说明：pn: 公开号
export const getSummaryImg = function (pn) {
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
export const getDescImg = function (an, pn, pd, pt, fileName) {
  return `${gifPath}/imgArchive/descDoc?an=${an}&pn=${pn}&pd=${pd}&pt=${pt}&fileName=${fileName}`
}

/**
 * 专利原文图像链接
 * @param {number} num 第几张
 * @param {String} an an
 * @param {String} pn pn
 * @param {String} pd pd
 * @param {String} pt pt
 */
export const getPagePdfImg = function (an, pn, pd, pt, num) {
  return `${baseURL}/sky/patentimg/getPagePdfImg.do?num=${num}&an=${an}&pn=${pn}&pd=${pd}&pt=${pt}`
}

// 我的点评专利列表
export const getMyRev = `${baseURL}/sky/patentScore/mloadMyScorePatent.do`
// 我的点评科技文献列表
export const getMyRevTech = `${baseURL}/sky/journalScore/mloadMyScoreJournal.do`
// 我的分享
export const getMyShare = `${baseURL}/sky/recommend/mGetRecommend.do`
// 推荐文献
export const getMyReco = `${baseURL}/sky/warn/mGetLastWarns.do`

// 确认是否已收藏
export const getFavoriteStatus = `${baseURL}/sky/collection/isFavorite.do`

// 添加专利收藏
export const addPatentFavorite = `${baseURL}/sky/collection/addFavouritePatent.do`

// 移除专利收藏
export const removePatentFavorite = `${baseURL}/sky/collection/cancleFavouritePatent.do`

// 添加科技文献收藏
export const addJournalFavorite = `${baseURL}/sky/collection/addFavouriteJournal.do`

// 移除科技文献收藏
export const removeJournalFavorite = `${baseURL}/sky/collection/cancleFavouriteJournal.do`

// ---- 详情页点评 --------------
// 根据ID查找点评列表
export const getPatentScore = `${baseURL}/sky/patentScore/mloadPublicScore.do`

// 添加专利点评
export const updatePatentScore = `${baseURL}/sky/patentScore/mUpdateScore.do`

// 删除专利点评
export const delPatentScore = `${baseURL}/sky/patentScore/mdeleteScore.do`

// 根据 ID 查找点评列表
export const getJournalScore = `${baseURL}/sky/journalScore/mloadPublicScore.do`

// 添加科技文献点评
export const updateJournalScore = `${baseURL}/sky/journalScore/mUpdateScore.do`

// 删除科技文献点评
export const delJournalScore = `${baseURL}/sky/journalScore/mdeleteScore.do`
