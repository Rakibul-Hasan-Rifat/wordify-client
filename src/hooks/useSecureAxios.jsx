import axios from "axios"

const secureAxiosInstance = axios.create({
    baseURL: 'http://localhost:5173'
})

const useSecureAxios = () => {
  return secureAxiosInstance
}

export default useSecureAxios