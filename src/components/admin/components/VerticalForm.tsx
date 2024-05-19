import React from 'react'
import { FieldValues, Resolver, useForm } from 'react-hook-form'

interface VerticalFormProps<TFormValues extends FieldValues> {
	defaultValues?: any
	resolver?: Resolver<TFormValues>
	children?: any
	onSubmit: any
	formClass?: string
}

const VerticalForm = <
	TFormValues extends Record<string, any> = Record<string, any>,
>({
	defaultValues,
	resolver,
	children,
	onSubmit,
	formClass,
}: VerticalFormProps<TFormValues>) => {
	const methods = useForm<TFormValues>({ defaultValues, resolver })

	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
	} = methods

	const onSubmitHandler = async (data: TFormValues) => {
		await onSubmit(data) // Call the onSubmit function passed in props
		// reset(defaultValues) 
	}

	return (
		<form onSubmit={handleSubmit(onSubmitHandler)} className={formClass} noValidate>
			{Array.isArray(children)
				? children.map((child) => {
						return child.props && child.props.name
							? React.createElement(child.type, {
									...{
										...child.props,
										register,
										key: child.props.name,
										errors,
										control,
									},
							  })
							: child
				  })
				: children}
		</form>
	)
}

export default VerticalForm