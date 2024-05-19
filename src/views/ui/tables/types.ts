export type TableRecord = {
	id: number
	firstName: string
	lastName: string
	username: string
}

export type Employee = {
	id: number
	age: number
	name: string
	company: string
	phone: string
	subRows?: Employee[]
}

export type Deposites = {
	amount: any
	wallet_address_id: number
	transaction_address: string
	image_url: string
	status: any
}

export type Withdrawals = {
	amount: any
	network_id: number
	wallet_address: string
	image_url: string
	email: string
	status: any
}