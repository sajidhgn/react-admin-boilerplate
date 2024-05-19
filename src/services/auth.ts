import { HttpClient } from './api'

function AuthService() {
	return {
		login: (values: any) => {
			return HttpClient.post('/auth/login', values)
		},
		logout:(values:any)=>{
			return HttpClient.post(`/auth/logout`, values)
		},
		register: (values: any) => {
			return HttpClient.post('/auth/register', values)
		},
		forgotPassword: (values: any) => {
			return HttpClient.post('/auth/forgot-password', values)
		},
		verifyCode: (values: any) => {
			return HttpClient.post('/auth/verify-code', values)
		},
		resetPassword: (values: any) => {
			return HttpClient.post('/auth/reset-password', values)
		},
	}
}

export default AuthService()