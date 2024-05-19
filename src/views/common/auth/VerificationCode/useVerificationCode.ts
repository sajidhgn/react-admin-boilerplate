import { useState } from 'react'
import { User } from '@/types'
import { authApi } from '@/components/common'
import { showToast } from '@/utils/helpers'
import { useNavigate } from 'react-router-dom';
import { setCookie } from 'cookies-next';
import { useForm } from 'react-hook-form';

export default function useVerificationCode() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const { reset } = useForm()

    /*
     * handle form submission
     */
    const onSubmit = async (data: any) => {

        const { verification_code }: User = data

        setLoading(true)
        try {
            const res: any = await authApi.verifyCode({ verification_code })
            if (res?.data) {
                showToast(
                    res?.data?.message,
                    res?.data?.success ? "success" : "error",
                );
                if (res?.data?.success == true) {
                    navigate("/reset-password");
                    setCookie("user_id",res?.data?.data?.verificationCode?.id) 
                    reset();
                }
            }
        } finally {
            setLoading(false)
        }
    }

    const resetState = () => {
        setLoading(false);
    };

    return { loading, onSubmit, resetState }
}