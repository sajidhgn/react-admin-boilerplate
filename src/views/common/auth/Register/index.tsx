import { Button, Col, Row, Spinner } from 'react-bootstrap'
import AuthLayout from '../AuthLayout'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useRegister from './useRegister'

// Components
import { VerticalForm, FormInput, PageBreadcrumb } from '@/components'

interface UserData {
	fullname: string
	email: string
	password: string
	gender: string
}
const BottomLink = () => {
	return (
		<Row>
			<Col xs={12} className="text-center">
				<p className="text-dark-emphasis">
					Already have account?{' '}
					<Link
						to="/login"
						className="text-dark fw-bold ms-1 link-offset-3 text-decoration-underline"
					>
						<b>Log In</b>
					</Link>
				</p>
			</Col>
		</Row>
	)
}
const Register = () => {
	const { loading, register } = useRegister()

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
			<PageBreadcrumb title="Register" />
			<AuthLayout
				authTitle="Sign Up"
				helpText="Enter your email address and password to access account."
				bottomLinks={<BottomLink />}
			>
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
			</AuthLayout>
		</>
	)
}

export default Register
