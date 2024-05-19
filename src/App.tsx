import { AuthProvider, ThemeProvider } from './contexts'
import AllRoutes from './routes/Routes'
import { ToastContainer } from "react-toastify";

import './assets/scss/app.scss'
import './assets/scss/icons.scss'


function App() {
	return (
		<ThemeProvider>
			<AuthProvider>
				<AllRoutes />
				<ToastContainer/>
			</AuthProvider>
		</ThemeProvider>
	)
}

export default App