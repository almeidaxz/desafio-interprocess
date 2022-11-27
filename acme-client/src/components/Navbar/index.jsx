import Logo from '../../assets/acme-logo.png';
import { SignOut } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { clearItems } from '../../utils/storage';

export default function Navbar() {
    const path = window.location.pathname;
    const navigate = useNavigate();

    const handleLogOut = () => {
        clearItems();
        navigate('/');
    }

    return (
        <header className='w-full pt-4 mb-8 fixed'>
            <nav className='max-w-[1024px] m-auto flex items-center justify-between'>
                <img
                    className='w-[200px]'
                    src={Logo}
                    alt="acme's clinic logo"
                />
                <SignOut
                    onClick={handleLogOut}
                    style={path === '/home' ? { display: 'block' } : { display: 'none' }}
                    className='cursor-pointer opacity-70 hover:opacity-100'
                    size={30}
                />
            </nav>
        </header>
    )
}