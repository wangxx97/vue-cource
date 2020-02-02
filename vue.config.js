const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin' : '/'

module.exports = {
	lintOnSave: false,
	publicPath: BASE_URL,
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src')) /*@代表src*/
			.set('_c', resolve('src/components'))
			.rule('vue')
			.use('iview')
			.loader('iview-loader')
			.options({prefix: false})
	},
	// 打包时不生成.map文件
	productionSourceMap: false,
	devServer: {
		proxy: 'http://localhost:8080'
		// proxy: 'http://localhost:3000'

	}
}
