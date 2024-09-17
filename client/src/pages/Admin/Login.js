import { message } from 'antd';
import axios from 'axios';
import React, { useContext } from 'react';
import { HideLoading, ShowLoading } from '../../redux/rootSlice';
import { useDispatch } from 'react-redux';
import { DarkModeContext } from '../../contexts/DarkModeContext';

function Login() {
    const [user, setUser] = React.useState({
        username: "",
        password: ""
    });
    const dispatch = useDispatch();
    const { darkMode } = useContext(DarkModeContext);

    const login = async () => {
        try {
            dispatch(ShowLoading());
            const response = await axios.post('https://mern-portfolio-api-hazel.vercel.app/api/portfolio/admin-login', user);
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                localStorage.setItem("token", JSON.stringify(response.data));
                window.location.href = "/admin";
            } else {
                message.error("Denied! Even the server is confused. Did you forget your own name?");
                console.log(response.data.message);
            }
        } catch (error) {
            message.error("Login failed: Maybe try using some brilliant mind tricks next time?");
            console.log(error);
            dispatch(HideLoading());
        }
    }

    return (
        <div className={`fade-slide-up flex justify-center items-center h-screen ${darkMode ? 'bg-gray-900' : 'bg-primary'}`}>
            <div className={`w-96 flex gap-5 p-5 shadow border-gray-500 flex-col ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
                <h1 className='flex text-2xl justify-center'>Welcome, Aravind</h1>
                <input
                    type="text"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder='Username'
                    className={`border p-2 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
                />
                <input
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder='Password'
                    className={`border p-2 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
                />
                <button
                    className='bg-secondary text-white p-2 rounded'
                    onClick={login}
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
