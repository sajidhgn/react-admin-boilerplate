import { Dropdown } from 'react-bootstrap'
import { ProfileOption } from '@/types'
import { Link } from 'react-router-dom'
import { useToggle } from '@/hooks'

type ProfileDropdownProps = {
	menuItems: Array<ProfileOption>
	username: string,
}
const ProfileDropdown = ({menuItems, username}: ProfileDropdownProps) => {
	const [isOpen, toggleDropdown] = useToggle()

	return (
		<Dropdown show={isOpen} onToggle={toggleDropdown}>
			<Dropdown.Toggle
				className="nav-link dropdown-toggle arrow-none nav-user"
				to="#"
				role="button"
				as={Link}
				onClick={toggleDropdown}
			>
				<span className="d-lg-block d-none">
					<h5 className="my-0 fw-normal d-flex">
						<div className="text-truncate" style={{width: "60px"}}>
						{username}
						</div>
						<i className="ri-arrow-down-s-line d-none d-sm-inline-block align-middle" />
					</h5>
				</span>
			</Dropdown.Toggle>
			<Dropdown.Menu
				align="end"
				className="dropdown-menu-animated profile-dropdown"
			>
				<div onClick={toggleDropdown}>
					<div className=" dropdown-header noti-title">
						<h6 className="text-overflow m-0">Welcome !</h6>
					</div>
					{/* item*/}

					{(menuItems || []).map((item, idx) => {
						return (
							<button key={idx} onClick={item.onClick} className="dropdown-item">
								<i className={`${item.icon} fs-18 align-middle me-1`} />
								<span>{item.label}</span>
							</button>
						)
					})}
				</div>
			</Dropdown.Menu>
		</Dropdown>
	)
}

export default ProfileDropdown
