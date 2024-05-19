import { Button, Spinner } from 'react-bootstrap'
import CustomModal from '@/components/admin/components/CustomModal'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useProfile from './useProfile'
import { VerticalForm, FormInput } from '@/components'
import { getCookie } from 'cookies-next'

interface UserData {
	fullname: string
	gender: string
}

interface ProfileTypes {
	show: boolean
	checkLoading: any
	handleClose: ()=> void
}

const ProfileData: React.FC<ProfileTypes> = ({ show, handleClose, checkLoading}) => {
	const loggedInUser = JSON.parse(getCookie("loggedInUser") || "{}");
    const { loading, profile } = useProfile()
    
	if(loading){
		checkLoading(true)
	}

    const schemaResolver = yupResolver(
		yup.object().shape({
			fullname: yup.string().required('Please enter full name'),
			gender: yup.string().required('Please choose gender'),
		})
	)

    return (
        <div>
            <CustomModal
                show={show}
                handleClose={handleClose}
                title="Edit Profile"
                body={
                    <VerticalForm<UserData> 
                    onSubmit={profile} 
                    resolver={schemaResolver}
                    defaultValues={{fullname:loggedInUser?.first_name+" "+loggedInUser?.last_name, email: loggedInUser?.email, password: "", gender: loggedInUser?.gender }}
                    >
					<FormInput
						label="Full Name"
						type="text"
						name="fullname"
						placeholder="Enter your full name"
						containerClass="mb-3"
						required
					/>

					<FormInput
						label="Email address"
						type="text"
						name="email"
						containerClass="mb-3"
						disabled
					/>

					<FormInput
						label="Password"
						type="password"
						name="password"
						placeholder="Enter your password"
						containerClass="mb-3"
					/>
					<FormInput
						label="Gender"
						type="select"
						name="gender"
						containerClass="mb-3"
					>
						<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="other">Other</option>
						</FormInput>
					<div className="mb-0 d-grid text-center">
						<Button
							variant="primary"
							// disabled={loading}
							className="fw-semibold"
							type="submit"
						>
							{loading?<Spinner
								as="span"
								animation="border"
								size="sm"
								role="status"
								aria-hidden="true"
							/> :""}
							Update Profile
						</Button>
					</div>
				</VerticalForm>
                }
            />
        </div>
    )
}

export default ProfileData;