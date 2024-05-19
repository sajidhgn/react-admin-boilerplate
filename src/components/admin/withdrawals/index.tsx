import { Button, Card, Col, Row } from 'react-bootstrap'

//dummy data
import { employeeRecords } from '@/views/ui/tables/data'

import { Column } from 'react-table'
import { Employee } from '@/views/ui/tables/types'

// components
import { PageSize, Table } from '@/components'

const columns: ReadonlyArray<Column> = [
	{
		Header: 'Amount',
		accessor: 'id',
		defaultCanSort: true,
	},
	{
		Header: 'Network Id',
		accessor: 'name',
		defaultCanSort: true,
	},
	{
		Header: 'Wallet Addresss',
		accessor: 'phone',
		defaultCanSort: false,
	},
	{
		Header: 'Email',
		accessor: 'age',
		defaultCanSort: true,
	},
	{
		Header: 'Image Url',
		accessor: 'company',
		defaultCanSort: false,
	},
	// {
	// 	Header: 'Status',
	// 	accessor: 'company',
	// 	defaultCanSort: false,
	// },
]

const sizePerPageList: PageSize[] = [
	{
		text: '10',
		value: 10,
	},
	{
		text: '25',
		value: 25,
	},
	{
		text: 'All',
		value: employeeRecords.length,
	},
]

const WithdrawalsComponent = () => {
	return (
		<>
			{/* <PageBreadcrumb title="Data Tables" subName="Tables" /> */}
			<Row>
				<Col>
					<Card className='mt-3'>
						<Card.Header className='d-flex align-items-center justify-content-between'>
							<h4 className="header-title">Withdrawals</h4>
							<Button variant="primary" className='btn-sm'>
								<i className='bi bi-plus'></i> Withdrawal
							</Button>
						</Card.Header>
						<Card.Body>
							<Table<Employee>
								columns={columns}
								data={employeeRecords}
								pageSize={10}
								sizePerPageList={sizePerPageList}
								isSortable={true}
								pagination={true}
								isSearchable={true}
							/>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default WithdrawalsComponent
