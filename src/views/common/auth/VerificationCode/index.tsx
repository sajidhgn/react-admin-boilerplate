import { Button, Col, Row, Spinner } from 'react-bootstrap'
import AuthLayout from '../AuthLayout'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useVerificationCode from './useVerificationCode'

// components
import { FormInput, VerticalForm } from '@/components'

const BottomLink = () => {
	return (
		<Row>
			<Col xs={12} className="text-center">
				<p className="text-dark-emphasis">
					Back To{' '}
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
interface UserData {
	verification_code: string
}

const VerificationCode = () => {
	/*
	 * form validation schema
	 */
	const schemaResolver = yupResolver(
		yup.object().shape({
			verification_code: yup
				.string()
				.required('Please enter valid code'),
		})
	)

	/*
	 * handle form submission
	 */
	const { loading, onSubmit } = useVerificationCode()
	return (
		<div>
			<AuthLayout
				authTitle="Verify Code?"
				helpText="Enter your verification code that recieve in email"
				bottomLinks={<BottomLink />}
			>
				<VerticalForm<UserData> onSubmit={onSubmit} resolver={schemaResolver}>
					<FormInput
						label="Verification Code"
						type="number"
						name="verification_code"
						placeholder="Enter verification code"
						containerClass="mb-3"
						required
					/>
					<div className="mb-0 text-start">
						<Button
							variant="soft-primary"
							className="w-100"
							type="submit"
							// disabled={true}
						>
							{loading?<Spinner
								as="span"
								animation="border"
								size="sm"
								role="status"
								aria-hidden="true"
							/> :<i className="ri-loop-left-line me-1 fw-bold" />}
							
							<span className="fw-bold"> Verify Code</span>{' '}
						</Button>
					</div>
				</VerticalForm>
			</AuthLayout>
		</div>
	)
}

export default VerificationCode
