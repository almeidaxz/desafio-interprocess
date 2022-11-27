import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { getItem } from './utils/storage';

export default function MainRoutes() {
    const ProtectedRoutes = ({ redirectTo }) => {
        const isAthenticated = getItem('token');

        return isAthenticated ? <Outlet /> : <Navigate to={redirectTo} />
    }

    const PreventDuplicatedLoginRoutes = ({ redirectTo }) => {
        const isAthenticated = getItem('token');

        return isAthenticated ? <Navigate to={redirectTo} /> : <Outlet />;
    }

    return (
        <Routes>
            <Route element={<PreventDuplicatedLoginRoutes redirectTo='/home' />}>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
            </Route>
            <Route element={<ProtectedRoutes redirectTo='/' />}>
                <Route path='/home' element={<Home />} />
            </Route>
        </Routes>
    )
}