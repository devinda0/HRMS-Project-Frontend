import { axiosWithCredential } from "../api/axios"
import useAuth from "./useAuth"

const useRefreshToken = () => {
    const { setAccessToken } = useAuth();

    const refreshToken = () => {
        let accessToken;

        axiosWithCredential.get('/refresh_token')
            .then((res) => {
                accessToken = res.data.accessToken;
                setAccessToken(res.data.accessToken);
            })
            .catch((err) => {
                console.log(err);
            })
        
        return accessToken;
    }
    return refreshToken;
}

export default useRefreshToken;