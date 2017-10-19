/**
 * use diffrent API config in "development" or "production" environment
 * @author lzx
 * @version 2017-6-15
 */

module.exports = (process.env.NODE_ENV === 'development' ? require('./dev.conf') : require('./prod.conf'))
