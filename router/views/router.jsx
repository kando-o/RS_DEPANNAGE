import { Route, Routes } from "react-router-dom"
import MainLayout from "../../src/layout/MainLayout"
import ThankYou from "../../src/components/ThankYou"
import NotFound404 from "../../src/page/NotFound404"

function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />} />
			<Route path="/message-recu" element={<ThankYou />} />
			<Route path="*" element={<NotFound404 />} />
		</Routes>
	)
}

export default AppRouter