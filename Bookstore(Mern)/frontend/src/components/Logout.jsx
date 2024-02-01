import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const { signout } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";


    const handleLogout = () => {
        signout().then(() => {
            // Sign-out successful.
            alert('Sign out seccessful');
            navigate(from, { replace: true });
        }).catch((error) => {
            // An error happened.

        });
    }
    return (
        <div className="h-screen flex items-center justify-center">
            <button className='bg-black px-4 py-2 rounded-lg text-white hover:shadow-xl transition-all duration-500' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout