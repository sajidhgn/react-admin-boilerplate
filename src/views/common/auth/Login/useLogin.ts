import { authApi, useAuthContext } from '@/components/common'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import type { User } from '@/types'
import { profileApi } from '@/components/common'
import { jwtDecoder, showToast } from '@/utils/helpers'
import { getCookie } from 'cookies-next'

export default function useLogin() {
	const [loading, setLoading] = useState(false)
	const location = useLocation()
	const navigate = useNavigate()

	const { isAuthenticated, saveSession, saveSessionUser } = useAuthContext()
	const { reset } = useForm()

	const redirectUrl = useMemo(
		() =>
			location.state && location.state.from
				? location.state.from.pathname
				: '/',
		[location.state]
	)

	const login = async ({ email, password }: User) => {
		setLoading(true)
		try {
			const {data} = await authApi.login({ email, password })
			if (data) {
				if(data?.data?.token){
					saveSession(data?.data?.token)
					if(getCookie("token")){
						const token = getCookie("token");
						const {id} = await jwtDecoder(token);
						const resp = await profileApi.getProfile(id);
						delete resp?.data?.data["password"];
						saveSessionUser(resp?.data?.data)
						navigate("/");
						reset();
					}
				}
				showToast(
					data?.message,
					data?.success ? "success" : "error",
				);
			}
		} finally {
			setLoading(false)
		}
	}

	return { loading, login, redirectUrl, isAuthenticated }
}
