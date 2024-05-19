import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

// All layouts containers
import DefaultLayout from '../components/layouts/Default'
import VerticalLayout from '../components/layouts/Vertical'

import {
	authProtectedFlattenRoutes,
	publicProtectedFlattenRoutes,
} from './index'
import {
	ThemeSettings,
	useAuthContext,
	useThemeContext,
} from '../contexts'
interface IRoutesProps {}

const AllRoutes = (props: IRoutesProps) => {
	const { settings } = useThemeContext()

	const Layout =
		settings.layout.type === ThemeSettings.layout.type.vertical
			? VerticalLayout
			: VerticalLayout
	// const api = new APICore()
	const { isAuthenticated } = useAuthContext()
	return (
		<React.Fragment>
			<Routes>
				<Route>
					{publicProtectedFlattenRoutes.map((route, idx) => (
						 <Route
						 key={idx}
						 path={route.path}
						 element={isAuthenticated ? <Navigate to="/" /> : <DefaultLayout {...props}>{route.element}</DefaultLayout>}
					   />
					))}
				</Route>

				<Route>
					{authProtectedFlattenRoutes.map((route, idx) => (
						 <Route
						 key={idx}
						 path={route.path}
						 element={isAuthenticated ? <Layout {...props}>{route.element}</Layout> : <Navigate to="/login" />}
					   />
					))}
				</Route>
			</Routes>
		</React.Fragment>
	)
}

export default AllRoutes
