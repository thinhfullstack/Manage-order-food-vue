<template>
    <layout>
        <template #content>
            <div class="container">
                <div class="breadcrumbs">
                    パンくずリスト > <a href="">パンくずリスト</a>
                </div>
            </div>
            <main>
                <form>
                    <section>
                        <div class="section_header">
                            <h2 class="section_title">お客様登録</h2>
                        </div>
                        <div class="container">
                            <div class="form_frame">
                                <div class="form_box">
                                    <div class="form_headline">
                                        商品引渡し先
                                    </div>

                                    <label class="side_label">
                                        <input type="radio" name="destination" value="company" checked>会社
                                    </label>
                                    <label class="side_label">
                                        <input type="radio" name="destination" value="school">学校
                                    </label>
                                    <label class="side_label">
                                        <input type="radio" name="destination" value="home">自宅
                                    </label>
                                </div>
                                <!-- 会社･勤務先フォーム -->
                                <div class="company_form">
                                    <div class="form_box">
                                        <div class="form_headline">
                                        団体名
                                        </div>
                                        <input type="text"
                                            v-model="state.registerForm.organizationName"
                                            v-bind:class="v$.organizationName.$errors == !v$.organizationName.$errors ? 'success' : 'error'"
                                            @blur="v$.$touch()"
                                            name=""
                                            placeholder="株式会社〇〇">
                                            <span class="invalid-feedback" v-for="error of v$.organizationName.$errors" :key="error.$uid">{{ error.$message }}</span>
                                    </div>
                                    <div class="form_box">
                                        <div class="form_headline">
                                        所属（引渡し先）
                                        </div>
                                        <input type="text" 
                                            v-model="state.registerForm.affiliates"
                                            v-bind:class="v$.affiliates.$errors == !v$.affiliates.$errors ? 'success' : 'error'"
                                            @blur="v$.$touch()"
                                            name=""
                                            placeholder="営業部">
                                            <span class="invalid-feedback" v-for="error of v$.affiliates.$errors" :key="error.$uid">{{ error.$message }}</span>
                                    </div>
                                    <div class="form_box">
                                        <div class="form_headline">
                                        管理者名
                                        </div>
                                        <input type="text"
                                            v-model="state.registerForm.name"
                                            v-bind:class="v$.name.$errors == !v$.name.$errors ? 'success' : 'error'"
                                            @blur="v$.$touch()"
                                            name=""
                                            placeholder="山田　太郎">
                                            <span class="invalid-feedback" v-for="error of v$.name.$errors" :key="error.$uid">{{ error.$message }}</span>
                                    </div>
                                <!-- <div class="form_box">
                                    <div class="form_headline">
                                        郵便番号
                                    </div>
                                    <div class="flex_wrap zip_frame">
                                        <div>
                                            <input type="text"
                                                v-model="state.registerForm.zipCode"
                                                v-bind:class="v$.zipCode.$errors == !v$.zipCode.$errors ? 'success' : 'error'"
                                                @blur="v$.$touch()"
                                                name="zip31" maxlength="3" placeholder="000">
                                            <span class="invalid-feedback" v-for="error of v$.zipCode.$errors" :key="error.$uid">{{ error.$message }}</span>
                                        </div>
                                        <div>
                                            <input type="text" 
                                                v-model="state.registerForm.zipCode"
                                                v-bind:class="v$.zipCode.$errors == !v$.zipCode.$errors ? 'success' : 'error'"
                                                @blur="v$.$touch()"
                                                name="zip32" 
                                                maxlength="4" 
                                                onKeyUp="AjaxZip3.zip2addr('zip31','zip32','pref','pref','addr1');" 
                                                placeholder="0000">
                                                <span class="invalid-feedback" v-for="error of v$.zipCode.$errors" :key="error.$uid">{{ error.$message }}</span>
                                        </div>
                                    </div>
                                </div> -->
                                <div class="form_box">
                                    <div class="form_headline">
                                        ご住所
                                    </div>
                                    <div class="pref"></div>
                                    <input type="text" 
                                        v-model="state.registerForm.address"
                                        v-bind:class="v$.address.$errors == !v$.address.$errors ? 'success' : 'error'"
                                        @blur="v$.$touch()"
                                        name="addr1" 
                                        placeholder="〇〇町1-1　〇〇マンション301">
                                        <span class="invalid-feedback" v-for="error of v$.address.$errors" :key="error.$uid">{{ error.$message }}</span>
                                </div>
                                <div class="form_box">
                                    <div class="form_headline">
                                    電話番号
                                    </div>
                                    <input type="text"
                                        v-model="state.registerForm.phone"
                                        v-bind:class="v$.phone.$errors == !v$.phone.$errors ? 'success' : 'error'"
                                        @blur="v$.$touch()"
                                        name="" 
                                        placeholder="000-0000-0000">
                                        <span class="invalid-feedback" v-for="error of v$.phone.$errors" :key="error.$uid">{{ error.$message }}</span>
                                </div>
                                <div class="form_box">
                                    <div class="form_headline">
                                    メールアドレス
                                    </div>
                                    <input type="email"
                                        v-model="state.registerForm.email"
                                        v-bind:class="v$.email.$errors == !v$.email.$errors ? 'success' : 'error'"
                                        @blur="v$.$touch()"
                                        name=""
                                        placeholder="example@example.com">
                                        <span class="invalid-feedback" v-for="error of v$.email.$errors" :key="error.$uid">{{ error.$message }}</span>
                                </div>
                                <div class="form_box">
                                    <div class="form_headline">
                                    パスワード
                                    </div>
                                    <input type="text" 
                                        v-model="state.registerForm.password"
                                        v-bind:class="v$.password.$errors == !v$.password.$errors ? 'success' : 'error'"
                                        @blur="v$.$touch()"
                                        name="" 
                                        placeholder="※半角英数字１５文字以内">
                                        <span class="invalid-feedback" v-for="error of v$.password.$errors" :key="error.$uid">{{ error.$message }}</span>
                                </div>
                                </div>
                                <!-- 学校フォーム -->
                                <div id="school_form">

                                <div class="form_box">
                                    <div class="form_headline">
                                    団体名
                                    </div>
                                    <input type="text" name="" placeholder="〇〇中学校">
                                </div>

                                <div class="form_box">
                                    <div class="form_headline">
                                    所属（学年・クラス）
                                    </div>
                                    <input type="text" name="" placeholder="〇年〇組">
                                </div>

                                <div class="form_box">
                                    <div class="form_headline">
                                    管理者名
                                    </div>
                                    <input type="text" name="" placeholder="山田太郎">
                                </div>

                                <div class="form_box">
                                    <div class="form_headline">
                                        郵便番号
                                    </div>
                                    <div class="flex_wrap zip_frame">
                                        <div>
                                            <input type="text" name="zip31" maxlength="3" placeholder="000">
                                        </div>
                                        <div>
                                            <input type="text" name="zip32" maxlength="4" onKeyUp="AjaxZip3.zip2addr('zip31','zip32','pref','pref','addr1');" placeholder="0000">
                                        </div>
                                    </div>
                                </div>
                                <div class="form_box">
                                    <div class="form_headline">
                                    ご住所
                                    </div>
                                    <div name="pref"></div>
                                    <input type="text" name="addr1" placeholder="〇〇町1-1　〇〇マンション301">
                                </div>
                                <div class="form_box">

                                    <div class="form_headline">
                                    電話番号
                                    </div>
                                    <input type="text" name="" placeholder="00-0000-0000">
                                </div>
                                <div class="form_box">
                                    <div class="form_headline">
                                    メールアドレス
                                    </div>
                                    <input type="email" name="" placeholder="example@example.com">
                                </div>
                                <div class="form_box">
                                    <div class="form_headline">
                                    パスワード
                                    </div>
                                    <input type="text" name="" placeholder="※半角英数字１５文字以内">
                                </div>
                            </div>
                            <!-- 自宅フォーム -->
                                <div id="home_form">
                                    自宅フォームが表示されます
                                </div>
                            </div>
                            <div class="button">
                                <div>
                                    <input type="submit" @click.prevent="handleRegister()" class="button01" name="Submit" value="確認画面へ">
                                </div>
                            </div>
                        </div>
                    </section>
                </form>
            </main>
        </template>
    </layout>
</template>

<script setup>
import layout from '../layout/App.vue'
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core'
import { required, email, numeric, minLength, maxLength, helpers } from '@vuelidate/validators'
import axios from "axios";
import SwalAlertHelper from '../../utils/SwalAlertHelper';

const route = useRoute()
const router = useRouter()

const state = reactive({
    registerForm: {
        organizationName: '',
        affiliates: '',
        name: '',
        address: '',
        phone: '',
        email: '',
        password: ''
    }
})

const validations = {
    organizationName: {required:helpers.withMessage("Organization name is required", required), $autoDirty: true},
    affiliates: {required:helpers.withMessage("Affiliates is required", required), $autoDirty: true},
    name: {required:helpers.withMessage("Admin name is required", required), $autoDirty: true},
    address: {required:helpers.withMessage("Address is required", required), $autoDirty: true},
    phone: {required:helpers.withMessage("Phone is required", required), numeric, minLength: minLength(10), maxLength: maxLength(10), $autoDirty: true},
    email: { required:helpers.withMessage("Email is required", required), email, $autoDirty: true},
    password: { required:helpers.withMessage("Password is required", required), minLength: minLength(3), maxLength: maxLength(8), $autoDirty: true}
}

const v$ = useVuelidate(validations, state.registerForm)

const handleRegister = () => {
    if(v$.value.$touch()) {
        axios.post(`http://localhost:8000/api/users`, state.registerForm).then(res => {
            if(res.data.success) {
                SwalAlertHelper.warningForm('error', 'Please enter all information to register')
                return
            }
        }).catch(() => {
            SwalAlertHelper.warningForm('error', 'Something went wrong')
        })
  
    }

    state.registerForm = ''

    if(state.registerForm) {
        router.push({name: 'login'})
    }
    
}

</script>

<style scoped>
.invalid-feedback {
    color: red;
}
.success {
    border: 2px solid #ccc !important;
    border-radius: 3px;
}
.error {
    border: 2px solid red !important;
    border-radius: 3px;
}
</style>