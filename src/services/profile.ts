import { HttpClient } from './api'

function ProfileService() {
	return {
		getProfile: (userId:any) => {
			return HttpClient.get(`/admin/user/${userId}`)
		},
		updateProfile: (values:any) => {
			return HttpClient.put(`/admin/user/${values?.id}`, values)
		},
		allUsers: () => {
			return HttpClient.get('/admin/users')
		},
	}
}

export default ProfileService()