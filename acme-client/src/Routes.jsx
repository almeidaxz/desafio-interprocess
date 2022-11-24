import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RegisterUser from './pages/RegisterUser';

export default function MainRoutes() {
    return (
        <Routes>
            {/* <Route path='/' element={<Login />} /> */}
            {/* <Route path='/login' element={<Login />} /> */}
            <Route path='/signup' element={<RegisterUser />} />
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
        </Routes>
    )
}