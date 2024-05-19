import { Button, Card } from 'react-bootstrap'

interface DepositesHeaderProps {
    handleShow: () => void;
    title: string;
}

const TableHeader: React.FC<DepositesHeaderProps> = ({ handleShow, title }) => {
    return (
        <Card.Header className='d-flex align-items-center justify-content-between'>
            <h4 className="header-title">{title}</h4>
            <Button variant="primary" className='btn-sm' onClick={handleShow}>
                <i className='bi bi-plus'></i> Deposite
            </Button>
        </Card.Header>
    )
}

export default TableHeader