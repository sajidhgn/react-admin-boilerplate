import { Button, Col, Row, Spinner } from 'react-bootstrap'
import AuthLayout from '../AuthLayout'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useResetPassword from './useResetPassword'

// Components
import { VerticalForm, FormInput } from '@/components'

interface UserData {
	password: string,
	confirm_password: string
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
const ResetPassword = () => {
	const { loading, resetPassword } = useResetPassword()

	/*
	 * form validation schema
	 */
	const schemaResolver = yupResolver(
		yup.object().shape({
			password: yup.string().required('Please enter Password'),
			confirm_password: yup.string().test({name: "passwords-match",message: "Password must match",test: function (value) {
                return this.parent.password === value;
              }}).required("Confirm Password is required"),
		})
	)

	return (
		<>
			<AuthLayout
				authTitle="Reset Password"
				helpText="Enter reset your password."
				bottomLinks={<BottomLink />}
			>
				<VerticalForm<UserData> onSubmit={resetPassword} resolver={schemaResolver}>

					<FormInput
						label="Password"
						type="password"
						name="password"
						placeholder="Enter new password"
						containerClass="mb-3"
					/>
                    <FormInput
						label="Confirm Password"
						type="password"
						name="confirm_password"
						placeholder="Enter confirm password"
						containerClass="mb-3"
					/>
				
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
							Reset Password
						</Button>
					</div>
				</VerticalForm>
			</AuthLayout>
		</>
	)
}

export default ResetPassword
