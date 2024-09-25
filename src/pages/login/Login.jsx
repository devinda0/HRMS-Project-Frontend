import React from 'react'
import axios, { axiosWithCredential } from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import useRefreshToken from '../../hooks/useRefreshToken';

const Login = () => {
    const [formData, setFormData] = React.useState({username: '', password: ''});
    const {setAccessToken, setRole, accessToken} = useAuth();
    const refreshToken = useRefreshToken();


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axiosWithCredential.post('/login', formData)
            .then((res) => {
                console.log(res);
                setAccessToken(res.data.accessToken);
                setRole(res.data.role);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const test2 = () => {
        refreshToken();
    }
    
  return (
    <div>
        <form className='w-full flex flex-col items-center justify-center' action="" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input className=' border border-black' value={formData.name} onChange={handleChange} type="text" name="username" id="username" />
            <label htmlFor="password">password</label>
            <input className=' border border-black' value={formData.password} onChange={handleChange} type="password" name="password" id="password" />
            <button type="submit">Login</button>
        </form>

            <button className=' w-[100px] h-6 border border-red-500' onClick={() => {console.log(accessToken)}}> Test </button>
            <button className=' w-[100px] h-6 border border-red-500' onClick={test2}> Test 2 </button>
    </div>
  )
}

export default Login