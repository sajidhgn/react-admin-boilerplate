import { authApi } from '@/services'
import { useAuthContext } from '@/contexts'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { showToast } from '@/utils/helpers'
import { deleteCookie, getCookie } from 'cookies-next'
import { useForm } from 'react-hook-form'

export default function useResetPassword() {
	const [loading, setLoading] = useState(false)

	const navigate = useNavigate()

	const { isAuthenticated } = useAuthContext()
    const { reset } = useForm()

	const resetPassword = async ({
		password
	}: {
		password: string
	}) => {
		setLoading(true)
		try {
			const res: any = await authApi.resetPassword({
				password,
				id: getCookie("user_id")
			})
			if (res?.data) {
				navigate('/login');
				showToast(
					res?.data?.message,
					res?.data?.success ? "success" : "error",
				);
                if (res?.data?.success == true) {
                    navigate("/login");
                    deleteCookie("user_id") 
                    reset();
                }
			}
		} finally {
			setLoading(false)
		}
	}

	return { loading, resetPassword, isAuthenticated }
}
