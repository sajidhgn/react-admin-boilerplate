import React from 'react'
import { Route, RouteProps } from 'react-router-dom'

// components
import PrivateRoute from './PrivateRoute'

// lazy load all the views

// auth
const Login = React.lazy(() => import('../views/common/auth/Login'))
const Register = React.lazy(() => import('../views/common/auth/Register'))
const ForgotPassword = React.lazy(() => import('../views/common/auth/ForgotPassword'))
const VerificationCode = React.lazy(() => import('../views/common/auth/VerificationCode'))
const ResetPassword = React.lazy(() => import('../views/common/auth/ResetPassword'))

// // dashboard
const Deposites = React.lazy(() => import('../views/admin/deposites'))
const Withdrawals = React.lazy(() => import('../views/admin/withdrawals'))

// // base ui
const Accordions = React.lazy(() => import('../views/ui/Accordions'))
const Alerts = React.lazy(() => import('../views/ui/Alerts'))
const Avatars = React.lazy(() => import('../views/ui/Avatars'))
const Badges = React.lazy(() => import('../views/ui/Badges'))
const Breadcrumb = React.lazy(() => import('../views/ui/Breadcrumb'))
const Buttons = React.lazy(() => import('../views/ui/Buttons'))
const Cards = React.lazy(() => import('../views/ui/Cards'))
const Carousel = React.lazy(() => import('../views/ui/Carousel'))
const Collapse = React.lazy(() => import('../views/ui/Collapse'))
const Dropdowns = React.lazy(() => import('../views/ui/Dropdowns'))
const EmbedVideo = React.lazy(() => import('../views/ui/EmbedVideo'))
const Grid = React.lazy(() => import('../views/ui/Grid'))
const Links = React.lazy(() => import('../views/ui/Links'))
const ListGroup = React.lazy(() => import('../views/ui/ListGroup'))
const Modals = React.lazy(() => import('../views/ui/Modals'))
const Notifications = React.lazy(() => import('../views/ui/Notifications'))
const Offcanvas = React.lazy(() => import('../views/ui/Offcanvas'))
const Placeholders = React.lazy(() => import('../views/ui/Placeholders'))
const Pagination = React.lazy(() => import('../views/ui/Pagination'))
const Popovers = React.lazy(() => import('../views/ui/Popovers'))
const Progress = React.lazy(() => import('../views/ui/Progress'))
const Spinners = React.lazy(() => import('../views/ui/Spinners'))
const Tabs = React.lazy(() => import('../views/ui/Tabs'))
const Tooltips = React.lazy(() => import('../views/ui/Tooltips'))
const Typography = React.lazy(() => import('../views/ui/Typography'))
const Utilities = React.lazy(() => import('../views/ui/Utilities'))

// // icons
const RemixIcons = React.lazy(() => import('../views/ui/icons/RemixIcons'))
const BootstrapIcons = React.lazy(
	() => import('../views/ui/icons/BootstrapIcons')
)
const MaterialIcons = React.lazy(
	() => import('../views/ui/icons/MaterialIcons')
)

// // forms
const BasicElements = React.lazy(
	() => import('../views/ui/forms/BasicElements')
)
const FormAdvanced = React.lazy(() => import('../views/ui/forms/FormAdvanced'))
const Validation = React.lazy(() => import('../views/ui/forms/Validation'))
const Wizard = React.lazy(() => import('../views/ui/forms/Wizard'))
const FileUploads = React.lazy(() => import('../views/ui/forms/FileUploads'))
const Editors = React.lazy(() => import('../views/ui/forms/Editors'))
const ImageCrop = React.lazy(() => import('../views/ui/forms/ImageCrop'))
const Editable = React.lazy(() => import('../views/ui/forms/Editable'))

// // error
const Error404 = React.lazy(() => import('../views/error/Error404'))
const Error404Alt = React.lazy(() => import('../views/error/Error404Alt'))
const Error500 = React.lazy(() => import('../views/error/Error500'))

export interface RoutesProps {
	path: RouteProps['path']
	name?: string
	element?: RouteProps['element']
	route?: any
	exact?: boolean
	icon?: string
	header?: string
	roles?: string[]
	children?: RoutesProps[]
}

// dashboards
const dashboardRoutes: RoutesProps = {
	path: '/admin',
	name: 'Dashboards',
	icon: 'home',
	header: 'Navigation',
	children: [
		{
			path: '/',
			name: 'Root',
			element: <Deposites />,
			route: PrivateRoute,
		},
		{
			path: '/withdrawals',
			name: 'Withdrawals',
			element: <Withdrawals />,
			route: PrivateRoute,
		},
	],
}

// pages
const customPagesRoutes = {
	path: '/pages',
	name: 'Pages',
	icon: 'pages',
	header: 'Custom',
	children: [
		{
			path: 'pages/error-404-alt',
			name: 'Error - 404-alt',
			element: <Error404Alt />,
			route: PrivateRoute,
		},
	],
}

// ui
const uiRoutes: RoutesProps = {
	path: '/ui',
	name: 'Components',
	icon: 'pocket',
	header: 'UI Elements',
	children: [
		{
			path: '/ui/base',
			name: 'Base UI',
			children: [
				{
					path: '/ui/accordions',
					name: 'Accordions',
					element: <Accordions />,
					route: PrivateRoute,
				},
				{
					path: '/ui/alerts',
					name: 'Alerts',
					element: <Alerts />,
					route: PrivateRoute,
				},
				{
					path: '/ui/avatars',
					name: 'Avatars',
					element: <Avatars />,
					route: PrivateRoute,
				},
				{
					path: '/ui/badges',
					name: 'Badges',
					element: <Badges />,
					route: PrivateRoute,
				},
				{
					path: '/ui/breadcrumb',
					name: 'Breadcrumb',
					element: <Breadcrumb />,
					route: PrivateRoute,
				},
				{
					path: '/ui/buttons',
					name: 'Buttons',
					element: <Buttons />,
					route: PrivateRoute,
				},
				{
					path: '/ui/cards',
					name: 'Cards',
					element: <Cards />,
					route: PrivateRoute,
				},
				{
					path: '/ui/carousel',
					name: 'Carousel',
					element: <Carousel />,
					route: PrivateRoute,
				},
				{
					path: '/ui/collapse',
					name: 'Collapse',
					element: <Collapse />,
					route: PrivateRoute,
				},
				{
					path: '/ui/dropdowns',
					name: 'Dropdowns',
					element: <Dropdowns />,
					route: PrivateRoute,
				},
				{
					path: '/ui/embed-video',
					name: 'Embed Video',
					element: <EmbedVideo />,
					route: PrivateRoute,
				},
				{
					path: '/ui/grid',
					name: 'Grid',
					element: <Grid />,
					route: PrivateRoute,
				},
				{
					path: '/ui/links',
					name: 'Links',
					element: <Links />,
					route: PrivateRoute,
				},
				{
					path: '/ui/list-group',
					name: 'List Group',
					element: <ListGroup />,
					route: PrivateRoute,
				},
				{
					path: '/ui/modals',
					name: 'Modals',
					element: <Modals />,
					route: PrivateRoute,
				},
				{
					path: '/ui/notifications',
					name: 'Notifications',
					element: <Notifications />,
					route: PrivateRoute,
				},
				{
					path: '/ui/offcanvas',
					name: 'Offcanvas',
					element: <Offcanvas />,
					route: PrivateRoute,
				},
				{
					path: '/ui/placeholders',
					name: 'Placeholders',
					element: <Placeholders />,
					route: PrivateRoute,
				},
				{
					path: '/ui/pagination',
					name: 'Pagination',
					element: <Pagination />,
					route: PrivateRoute,
				},
				{
					path: '/ui/popovers',
					name: 'Popovers',
					element: <Popovers />,
					route: PrivateRoute,
				},
				{
					path: '/ui/progress',
					name: 'Progress',
					element: <Progress />,
					route: PrivateRoute,
				},
				{
					path: '/ui/spinners',
					name: 'Spinners',
					element: <Spinners />,
					route: PrivateRoute,
				},
				{
					path: '/ui/tabs',
					name: 'Tabs',
					element: <Tabs />,
					route: PrivateRoute,
				},
				{
					path: '/ui/tooltips',
					name: 'Tooltips',
					element: <Tooltips />,
					route: PrivateRoute,
				},
				{
					path: '/ui/typography',
					name: 'Typography',
					element: <Typography />,
					route: PrivateRoute,
				},
				{
					path: '/ui/utilities',
					name: 'Utilities',
					element: <Utilities />,
					route: PrivateRoute,
				},
			],
		},
		{
			path: '/ui/icons',
			name: 'Icons',
			children: [
				{
					path: '/ui/icons/remix-icons',
					name: 'Remix Icons',
					element: <RemixIcons />,
					route: PrivateRoute,
				},
				{
					path: '/ui/icons/Bootstrap-icons',
					name: 'Bootstrap Icons',
					element: <BootstrapIcons />,
					route: PrivateRoute,
				},
				{
					path: '/ui/icons/Material-icons',
					name: 'Material Icons',
					element: <MaterialIcons />,
					route: PrivateRoute,
				},
			],
		},
		{
			path: '/ui/forms',
			name: 'Forms',
			children: [
				{
					path: '/ui/forms/basic-elements',
					name: 'Basic Elements',
					element: <BasicElements />,
					route: PrivateRoute,
				},
				{
					path: '/ui/forms/form-advanced',
					name: 'Form Advanced',
					element: <FormAdvanced />,
					route: PrivateRoute,
				},
				{
					path: '/ui/forms/validation',
					name: 'Validation',
					element: <Validation />,
					route: PrivateRoute,
				},
				{
					path: '/ui/forms/wizard',
					name: 'Wizard',
					element: <Wizard />,
					route: PrivateRoute,
				},
				{
					path: '/ui/forms/file-uploads',
					name: 'File Uploads',
					element: <FileUploads />,
					route: PrivateRoute,
				},
				{
					path: '/ui/forms/editors',
					name: 'Editors',
					element: <Editors />,
					route: PrivateRoute,
				},
				{
					path: '/ui/forms/image-crop',
					name: 'Image Crop',
					element: <ImageCrop />,
					route: PrivateRoute,
				},
				{
					path: '/ui/forms/editable',
					name: 'Editable',
					element: <Editable />,
					route: PrivateRoute,
				},
			],
		},
	],
}

// auth
const authRoutes: RoutesProps[] = [
	{
		path: '/login',
		name: 'Login',
		element: <Login />,
		route: Route,
	},
	{
		path: '/register',
		name: 'Register',
		element: <Register />,
		route: Route,
	},
	{
		path: '/forgot-password',
		name: 'Forgot Password',
		element: <ForgotPassword />,
		route: Route,
	},
	{
		path: '/verification-code',
		name: 'Verify Code',
		element: <VerificationCode />,
		route: Route,
	},
	{
		path: '/reset-password',
		name: 'Reset Password',
		element: <ResetPassword />,
		route: Route,
	}
]

// public routes
const otherPublicRoutes = [
	{
		path: '*',
		name: 'Error - 404',
		element: <Error404 />,
		route: Route,
	},
	{
		path: 'pages/error-404',
		name: 'Error - 404',
		element: <Error404 />,
		route: Route,
	},
	{
		path: 'pages/error-500',
		name: 'Error - 500',
		element: <Error500 />,
		route: Route,
	}
]

// flatten the list of all nested routes
const flattenRoutes = (routes: RoutesProps[]) => {
	let flatRoutes: RoutesProps[] = []

	routes = routes || []
	routes.forEach((item: RoutesProps) => {
		flatRoutes.push(item)
		if (typeof item.children !== 'undefined') {
			flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)]
		}
	})
	return flatRoutes
}

// All routes
const authProtectedRoutes = [dashboardRoutes, customPagesRoutes, uiRoutes]
const publicRoutes = [...authRoutes, ...otherPublicRoutes]

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes])
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes])
export {
	publicRoutes,
	authProtectedRoutes,
	authProtectedFlattenRoutes,
	publicProtectedFlattenRoutes,
}
