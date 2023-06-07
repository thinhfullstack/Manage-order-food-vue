import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from "axios";
import SwalAlertHelper from '../utils/SwalAlertHelper';

const useUserStore = defineStore('userStore', () => {
    const user = ref('')

    const login = (email, password) => {
        axios.post(`http://localhost:8000/api/login`, {
            email: email,
            password: password
        }).then(res => {
            if (!res.data.success) {
                SwalAlertHelper.warningForm('error', 'Email or password is required')
                return 
            }

            let userInfo = {
                user: res.data.user,
                token: res.data.token
            }

            user.value = userInfo

            localStorage.setItem('user_info', JSON.stringify(userInfo))

        }).catch(() => {
            SwalAlertHelper.warningForm('error', 'Something went wrong')
        })
    }

    const logout = () => {
        SwalAlertHelper.warningForm('success', 'Sign out successful')
        return localStorage.removeItem('user_info')
    }

    const me = () => {
        return JSON.parse(localStorage.getItem('user_info'));
    }

    return {
        user ,login, logout, me
    }
})

export default useUserStore