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
                                v-on:keyup.enter="handleLogin()"
                                v-model="state.loginForm.email"
                                v-bind:class="v$.email.$errors == !v$.email.$errors ? 'blue' : 'error'"
                                @blur="v$.$touch()"
                                placeholder="example@example.com"
                            >
                            <span class="invalid-feedback" v-for="error of v$.email.$errors" :key="error.$uid">{{ error.$message }}</span>
                        </p>
                        <p>
                            パスワード<br>
                            <input type="password" 
                                v-on:keyup.enter="handleLogin()"
                                v-model="state.loginForm.password"
                                v-bind:class="v$.email.$errors == !v$.email.$errors ? 'blue' : 'error'"
                                @blur="v$.$touch()"
                                placeholder="●●●●●●"
                            >
                            <span class="invalid-feedback" v-for="error of v$.password.$errors" :key="error.$uid">{{ error.$message }}</span>
                        </p>
                        <div class="button" @click.prevent="handleLogin()">
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
                                        <router-link :to="{name: 'register'}" class="button01">
                                            新規登録する
                                        </router-link>
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
import { reactive } from 'vue';

import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'

import useUserStore from '../../store/userStore'

const userStore = useUserStore()
const route = useRoute()
const router = useRouter()

const state = reactive({
    loginForm: {
        email: '',
        password: ''
    }
})

const validations = {
    email: { required:helpers.withMessage("Email is required", required), email, $autoDirty: true},
    password: { required:helpers.withMessage("Password is required", required), $autoDirty: true}
}

const v$ = useVuelidate(validations, state.loginForm)

const handleLogin = () => {
    v$.value.$touch()
    userStore.login(state.loginForm.email, state.loginForm.password)
    router.push({name: 'home'})
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
.error {
    border: 2px solid red !important;
    border-radius: 3px;
}
.blue {
    border: 2px solid #ccc !important;
    border-radius: 3px;
}
</style>