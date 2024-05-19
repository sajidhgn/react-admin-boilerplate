export type User = {
	email?: string
	password: string
	fullname?: string
	gender?: string
	verification_code?: number
	token?: string
	id?: number
}

export interface ProfileOption {
	label: string
	icon: string
	onClick: () => void
}

export type TopbarProps = {
	topbarDark?: boolean
	toggleMenu?: () => void
	navOpen?: boolean
}