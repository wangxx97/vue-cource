export const baseURL = process.env.NODE_ENV === 'production'

	? '/http://production.com/'
	// : '/http://localhost:8080'
	// ? '/api/'
	: ''