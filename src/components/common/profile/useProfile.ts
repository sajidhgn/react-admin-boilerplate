import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { showToast } from '@/utils/helpers'
import { profileApi } from '@/components/common'
import { getCookie } from 'cookies-next'
import { useAuthContext } from '@/components/common'

export default function useProfile() {
    const { saveSessionUser } = useAuthContext()
    const [loading, setLoading] = useState(false)
    const loggedInUser = JSON.parse(getCookie("loggedInUser") || "{}");
    const { reset } = useForm()

    const profile = async ({
        fullname,
        password,
        gender,
    }: {
        fullname: string
        password: string
        gender: string
    }) => {
        setLoading(true)
        try {
            const [first_name, last_name] = fullname.split(' ')

            const updateObject: { id: number, first_name: string; last_name: string; password?: string; gender: string } = {
                first_name,
                last_name,
                id: loggedInUser?.id,
                gender
            }
            if (password) {
                updateObject.password = password
            }
            const { data } = await profileApi.updateProfile(updateObject)
            if (data) {
                showToast(
                    data?.message,
                    data?.success ? "success" : "error",
                );
                if (data?.success == true) {
                    delete data?.data["password"];
                    saveSessionUser(data?.data)
                    reset();
                }
            }

        } finally {
            setLoading(false)
        }
    }

    return { loading, profile }
}
