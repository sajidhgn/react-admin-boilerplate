import { authApi } from '@/services'
import { useAuthContext } from '@/contexts'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { showToast } from '@/utils/helpers'

export default function useRegister() {
	const [loading, setLoading] = useState(false)

	const navigate = useNavigate()

	const { isAuthenticated } = useAuthContext()
	const { reset } = useForm()

	const register = async ({
		fullname,
		email,
		password,
		gender
	}: {
		fullname: string
		email: string
		password: string
		gender: string
	}) => {
		setLoading(true)
		try {
			const [first_name, last_name] = fullname.split(' ')
			const { data } = await authApi.register({
				first_name,
				last_name,
				email,
				password,
				gender
			})
			if(data){
				showToast(
					data?.message,
					data?.success ? "success" : "error",
				);
				if (data?.success==true) {
					navigate('/login');
					
					reset();
				}
			}
			
		} finally {
			setLoading(false)
		}
	}

	return { loading, register, isAuthenticated }
}
