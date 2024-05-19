import { Button, Card, Col, Row } from 'react-bootstrap'

//dummy data
import { employeeRecords } from '@/views/ui/tables/data'

import { Column } from 'react-table'
import { Employee } from '@/views/ui/tables/types'
import CustomModal from '@/components/admin/components/CustomModal'

// components
import { PageSize, Table } from '@/components'
import { useState } from 'react'
import TableHeader from '../components/table/Header'

const columns: ReadonlyArray<Column> = [
	{
		Header: 'Amount',
		accessor: 'id',
		defaultCanSort: true,
	},
	{
		Header: 'Wallet Address Id',
		accessor: 'name',
		defaultCanSort: true,
	},
	{
		Header: 'Transaction Address',
		accessor: 'phone',
		defaultCanSort: false,
	},
	{
		Header: 'Image Url',
		accessor: 'age',
		defaultCanSort: true,
	},
	{
		Header: 'Status',
		accessor: 'company',
		defaultCanSort: false,
	},
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

const DepositesComponent = () => {

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Row>
				<Col>
					<Card className='mt-3'>
						<TableHeader title="Deposites" handleShow={handleShow} />
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
			<CustomModal
				show={show}
				handleClose={handleClose}
				title="Modal title"
				body="I will not close if you click outside me. Do not even try to press escape key."
			/>
		</>
	)
}

export default DepositesComponent
