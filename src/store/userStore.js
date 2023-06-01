import { defineStore } from 'pinia'
import { reactive } from 'vue'
import axios from "axios";
import Swal from 'sweetalert2'

const useUserStore = defineStore('userStore', () => {
    const user = reactive({
        loginForm: {
            email: '',
            password: ''
        }
    })

    const login = () => {
        axios.post(`http://localhost:8000/api/login`, user.loginForm).then(res => {
            if(!res.data.success) {
                alertMessage('error', 'Email or password is required')
                return 
            }

            localStorage.setItem('user_info', JSON.stringify({
                user: res.data.user,
                token: res.data.token
            }))

        }).catch(() => {
            alertMessage('error', 'Something went wrong')
        })

    }

    const me = () => {
        
    }

    const alertMessage = (icon, message) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
    
        Toast.fire({
            icon: icon,
            title: message
        })
    }

    return {
        user ,login, me
    }
})

export default useUserStore