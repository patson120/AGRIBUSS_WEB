import { Navigate, Outlet } from 'react-router-dom'
import Signin from './views/Signin.jsx'
import {useState, useContext} from 'react'
// import {isLoggedin} from './components/pages/login.jsx';

const userAuth = () => {
	// const {log} = useContext(isLoggedin)

	const user = true

	return user ;

}

export default function ProtectedRoutes() {
	// const {log} = useContext(isLoggedin)
	// const [login, setLogin] = useState(false)

	return log ? <Outlet/> : <Navigate to="/login"/>
}
