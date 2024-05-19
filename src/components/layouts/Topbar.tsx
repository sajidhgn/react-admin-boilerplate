import { useState } from 'react'
import { Image } from 'react-bootstrap'
import { ThemeSettings, useThemeContext, useAuthContext, authApi } from '@/components/common'
import { Link } from 'react-router-dom'
import logo from '@/assets/images/logo.png'
import logoSm from '@/assets/images/logo-sm.png'
import logoDark from '@/assets/images/logo-dark.png'
import { ProfileDropdown } from '@/components'
import { showToast } from '@/utils/helpers'
import { getCookie } from 'cookies-next'
import CustomSpinner from '@/components/admin/components/CustomSpinner'
import { ProfileOption, TopbarProps } from '@/types'
import ProfileData from '../common/profile'


const Topbar: React.FC<TopbarProps> = () => {
	const loggedInUser = JSON.parse(getCookie("loggedInUser") || "{}");
	const { removeSession, removeSessionUser } = useAuthContext();
	const { settings, updateSettings } = useThemeContext()
	const [loading, setLoading] = useState<boolean>(false);
	const [show, setShow] = useState<boolean>(false);

	const profileMenus: ProfileOption[] = [
		{
			label: 'Edit Profile',
			icon: 'ri-account-circle-line',
			onClick: () =>editProfile()
		},
		{
			label: 'Logout',
			icon: 'ri-logout-box-line',
			onClick: () => logOut()
		}
	]

	const toggleDarkMode = () => {
		if (settings.theme === 'dark') {
			updateSettings({ theme: ThemeSettings.theme.light })
		} else {
			updateSettings({ theme: ThemeSettings.theme.dark })
		}
	}
	
	const logOut = async () => {
		setLoading(true)
		try {
			const res: any = await authApi.logout({ "token": getCookie("token") })
			if (res?.data?.success == true) {
				showToast(
					res?.data?.message,
					res?.data?.success ? "success" : "error",
				);
				removeSessionUser();
				removeSession();
				setLoading(false);
			}
		}
		catch (error) {
			setLoading(false)
			console.log(error);
		}
	}

	const editProfile=()=>{
		setShow(true);
	}
	const handleClose=()=>{
		setShow(false);
	}
	
	const checkSubmitForm=(key:any)=>{
		if(key){
			handleClose();
		}
		
	}
	return (
		<>
			{loading
				? <CustomSpinner /> : ""}
			<div className="navbar-custom">
				<div className="topbar container">
					<div className="d-flex align-items-center gap-1">
						{/* Topbar Brand Logo */}
						<div className="logo-topbar">
							{/* Logo light */}
							<Link to="/" className="logo-light">
								<span className="logo-lg">
									<Image src={logo} alt="logo" />
								</span>
								<span className="logo-sm">
									<Image src={logoSm} alt="small logo" />
								</span>
							</Link>
							{/* Logo Dark */}
							<Link to="/" className="logo-dark">
								<span className="logo-lg">
									<img src={logoDark} alt="dark logo" />
								</span>
								<span className="logo-sm">
									<img src={logoSm} alt="small logo" />
								</span>
							</Link>
						</div>

					</div>
					<ul className="topbar-menu d-flex align-items-center gap-3">

						<li className="d-sm-inline-block">
							<Link to="/">Deposites</Link>
						</li>
						<li className="d-sm-inline-block">
							<Link to="/withdrawals">Withdrawals</Link>
						</li>
						<li className="d-sm-inline-block">
							<strong>12350</strong>
						</li>
						<li className="d-none d-sm-inline-block">
							<div
								className="nav-link"
								id="light-dark-mode"
								onClick={toggleDarkMode}
							>
								<i className="ri-moon-line fs-22" />
							</div>
						</li>
						<li className="dropdown">
							<ProfileDropdown
								menuItems={profileMenus}
								username={loggedInUser?.first_name + " " + loggedInUser?.last_name}

							/>
						</li>
					</ul>
				</div>
			</div>
			<ProfileData checkLoading={checkSubmitForm} show={show} handleClose={handleClose}  />
		</>
	)
}

export default Topbar
