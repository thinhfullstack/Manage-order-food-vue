<template>
    <layout>
        <template #content>
            <div class="container">
                <div class="breadcrumbs">
                パンくずリスト &gt; <a href="">パンくずリスト</a>
                </div>
            </div>

            <main>
                <section>
                <div class="section_header">
                    <h2 class="section_title">ログイン</h2>
                </div>
                <div class="container">

                    <div class="login_frame">
                    <div class="flex_wrap">
                        <div class="login_box">
                        <p>
                            メールアドレス<br>
                            <input type="email"
                                v-on:keyup.enter="login()"
                                v-model="state.loginForm.email"
                                v-bind:class="{'is-invalid': errorLogin.email}"
                                @blur="validateFormLogin()"
                                placeholder="example@example.com"
                            >
                            <span class="invalid-feedback" v-if="errorLogin.email">{{ errorLogin.email }}</span>
                        </p>
                        <p>
                            パスワード<br>
                            <input type="password" 
                                v-on:keyup.enter="login()"
                                v-model="state.loginForm.password"
                                v-bind:class="{'is-invalid': errorLogin.password}"
                                @blur="validateFormLogin()"
                                placeholder="●●●●●●"
                            >
                            <span class="invalid-feedback" v-if="errorLogin.password">{{ errorLogin.password }}</span>
                        </p>
                        <div class="button" @click.prevent="login()">
                            <div>
                            <input type="submit" class="button01" value="ログインする">
                            </div>
                        </div>
                        <div>
                            <label>
                            <input type="checkbox" name="" value="">
                            次回から自動ログイン
                            </label><br>
                            <a href="" class="password_link">
                            パスワードを忘れたお客様はこちら
                            </a>
                        </div>
                        </div>

                        <div class="login_box">
                            <div class="login_flex">
                                <div>
                                <p class="login_headline">３分で簡単登録!</p>
                                <p class="login_text">
                                    はじめての方はこちらから<br>お客様登録をお願いします。
                                </p>
                                <div class="button">
                                    <div>
                                        <a href="" class="button01">
                                            新規登録する
                                        </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
                </section>
            </main>
        </template>
    </layout>
</template>

<script setup>
import layout from '../layout/App.vue';
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import { reactive, ref } from 'vue';
import Swal from 'sweetalert2'

const router = useRouter()
const route = useRoute()

const state = reactive({
    loginForm: {
        email: '',
        password: ''
    }
})

const errorLogin = ref({
    email: '',
    password: ''
})

const isEmail = (value) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
}

const validateFormLogin = () => {
    errorLogin.value.email = ''
    errorLogin.value.password = ''

    if(!state.loginForm.email) {
        errorLogin.value.email = "Email is required"
    } else if(!isEmail(state.loginForm.email)) {
        errorLogin.value.email = "Email must be in the correct format"
    }

    if(!state.loginForm.password) {
        errorLogin.value.password = "Password is required"
    }
}

const login = () => {
    validateFormLogin();
    axios.post(`http://localhost:8000/api/login`, state.loginForm).then(res => {
        if(!res.data.success) {
            alertMessage('error', 'Email or password is required')
            return
        };

        localStorage.setItem('user_info', JSON.stringify({
            user: res.data.user,
            token: res.data.token
        }))

    }).catch(() => {
        alertMessage('error', 'Something went wrong')
    })

    router.push({name: 'home'})
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


</script>

<style scoped>
.is-invalid {
	border-style: solid;
    border-color: rgb(201, 76, 76);
}
.invalid-feedback {
    color: red;
}
</style>