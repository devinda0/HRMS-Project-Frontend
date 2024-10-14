import React from 'react'
import { axiosWithCredential } from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import useWaitingSpinner from '../../hooks/useWaitingSpinner';

const Login = () => {
    const [formData, setFormData] = React.useState({username: '', password: ''});
    const {setAccessToken, setRole} = useAuth();
    const setWaitingSpinner = useWaitingSpinner();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setWaitingSpinner(true);

        axiosWithCredential.post('/user/login', formData)
            .then((res) => {
                console.log(res.data.accessToken);
                setAccessToken(res.data.accessToken);
                setRole(res.data.role);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setWaitingSpinner(false);
            })
    }
    
  return (
    <div className=' w-full h-[100dvh] flex flex-row justify-center items-center bg-[#9EBAE2]'>
        <div className=' w-1/2 h-full flex flex-col items-center justify-start py-10'>
            <h1 className=' text-[#6750A4] text-5xl font-extrabold mb-5 mt-10'>Jupiter Apparels</h1>
            <h1 className=' text-white text-5xl font-extrabold mb-5'>HRM system</h1>
        </div>
        <div className=' w-1/2 h-full flex flex-col items-center justify-center bg-white rounded-bl-[5rem] px-[4rem] xl:px-[6rem] gap-10'>
            <h1 className=' text-black text-5xl font-bold mb-2 mt-10'>Login</h1>
            <form className=' w-full flex flex-col gap-3' onSubmit={handleSubmit}>
                <div className=' w-full flex flex-col my-2 gap-2'>
                    <label className=' text-xl ' htmlFor="username">Username</label>
                    <input className=' border border-[#6750A4] w-full h-[3.5rem] text-xl px-5 rounded-lg' value={formData.username} onChange={handleChange} type="text" name="username" id="username" />
                </div>
                <div className=' w-full flex flex-col my-2 gap-2'>
                    <label className=' text-xl' htmlFor="password">Password</label>
                    <input className=' border border-[#6750A4] w-full h-[3.5rem] text-xl px-5 rounded-lg' value={formData.password} onChange={handleChange} type="password" name="password" id="password" />
                </div>

                <button className=' w-full h-[3.5rem] bg-[#6750A4] rounded-lg text-white text-2xl my-5 hover:shadow-xl active:translate-y-1 transition-transform duration-150' type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login