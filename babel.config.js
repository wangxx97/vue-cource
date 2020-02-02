module.exports = {
	presets: [
		'@vue/cli-plugin-babel/preset',
		'@vue/app'
	],
	'plugins': [['import', {
		'libraryName': 'iview',
		'libraryDirectory': 'src/component'
	}]]
}
