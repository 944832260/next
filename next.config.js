// next.config.js
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

/* scss和css共用配置写法 */
// 第一种写法
module.exports = () =>  withSass(withCSS())


// 第二种写法
// module.exports = {
// 	webpack(config, ...ags) {
// 		config = withCSS().webpack(config,...ags)
// 		config = withSass().webpack(config,...ags)
// 		return config
// 	}
// }

//  第三种写法
// const withPlugins = require("next-compose-plugins");
// module.exports = withPlugins([withSass,withCSS], {
//   webpack: (config) => {
//     return config
//   },
// });
