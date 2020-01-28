// export default {

// }

export const baseURL = process.env.NODE_ENV === 'production'
	// ? '/api/'
	// : ''
	? '/http://production.com/'
	: '/http://localhost:8080'