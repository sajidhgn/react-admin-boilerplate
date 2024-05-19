import { Button, Col, Row, Spinner } from 'react-bootstrap'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useDeposite from './useDeposite'

// Components
import { VerticalForm, FormInput } from '@/components'

interface UserData {
	fullname: string
	email: string
	password: string
	gender: string
}
const Register = () => {
	const { loading, register } = useDeposite()

	/*
	 * form validation schema
	 */
	const schemaResolver = yupResolver(
		yup.object().shape({
			fullname: yup.string().required('Please enter full name'),
			email: yup
				.string()
				.required('Please enter Email')
				.email('Please enter valid Email'),
			password: yup.string().required('Please enter Password'),
			gender: yup.string().required('Please choose gender'),
		})
	)

	return (
		<>
				<VerticalForm<UserData> onSubmit={register} resolver={schemaResolver}>
					
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
						placeholder="Enter your email"
						containerClass="mb-3"
						required
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
						<option defaultValue="selected" value="male">Male</option>
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
							Sign Up
						</Button>
					</div>
				</VerticalForm>
		</>
	)
}

export default Register
