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
                                        <input type="radio" 
                                            v-model="state.profiles.type" 
                                            name="destination" value="1" checked>会社
                                    </label>
                                    <label class="side_label">
                                        <input type="radio" 
                                            v-model="state.profiles.type" 
                                            name="destination" value="2">学校
                                    </label>
                                    <label class="side_label">
                                        <input type="radio" 
                                            name="destination">自宅
                                    </label>
                                </div>
                                <!-- 会社･勤務先フォーム -->
                                <div class="company_form">

                                    <div class="form_box">
                                        <div class="form_headline">
                                            <div v-if="state.profiles.type === '1' || state.profiles.type === ''">団体名</div>
                                            <div v-if="state.profiles.type === '2'">団体名</div>
                                        </div>
                                        <div v-if="state.profiles.type === '1' || state.profiles.type === ''">
                                            <input type="text"
                                                v-model="state.profiles.organization_company"
                                                v-bind:class="v$.organization_company.$errors == !v$.organization_company.$errors ? 'success' : 'error'"
                                                @blur="v$.$touch()"
                                                name=""
                                                :placeholder="state.profiles.type === '1' || state.profiles.type === '' ? '株式会社〇〇' : '〇〇中学校'"
                                            >
                                        </div>
                                            <div v-if="state.profiles.type === '1' || state.profiles.type === ''">
                                                <span class="invalid-feedback" v-for="error of v$.organization_company.$errors" :key="error.$uid">{{ error.$message }}</span>
                                            </div>
                                        <div v-else-if="state.profiles.type === '2'">
                                            <input type="text"
                                                v-model="state.profiles.organization_school"
                                                v-bind:class="v$.organization_school.$errors == !v$.organization_school.$errors ? 'success' : 'error'"
                                                @blur="v$.$touch()"
                                                name=""
                                                :placeholder="state.profiles.type === '1' || state.profiles.type === '' ? '株式会社〇〇' : '〇〇中学校'"
                                            >
                                        </div>
                                            <div v-if="state.profiles.type === '2'">
                                                <span class="invalid-feedback" v-for="error of v$.organization_school.$errors" :key="error.$uid">{{ error.$message }}</span>
                                            </div>
                                    </div>
                                    <div class="form_box">
                                        <div class="form_headline" v-if="state.profiles.type === '1' || state.profiles.type === ''">
                                            所属（引渡し先）
                                        </div>
                                        <div class="form_headline" v-if="state.profiles.type === '2'">
                                            所属（学年・クラス）
                                        </div>
                                        <div v-if="state.profiles.type === '1' || state.profiles.type === ''">
                                            <input type="text" 
                                                v-model="state.profiles.affiliates_company"
                                                v-bind:class="v$.affiliates_company.$errors == !v$.affiliates_company.$errors ? 'success' : 'error'"
                                                @blur="v$.$touch()"
                                                name=""
                                                :placeholder="state.profiles.type === '1' || state.profiles.type === '' ? '営業部' : '〇年〇組'"
                                            >
                                        </div>
                                            <div v-if="state.profiles.type === '1' || state.profiles.type === ''">
                                                <span class="invalid-feedback" v-for="error of v$.affiliates_company.$errors" :key="error.$uid">{{ error.$message }}</span>
                                            </div>
                                        <div v-else-if="state.profiles.type === '2'">
                                            <input type="text" 
                                                v-model="state.profiles.affiliates_school"
                                                v-bind:class="v$.affiliates_school.$errors == !v$.affiliates_school.$errors ? 'success' : 'error'"
                                                @blur="v$.$touch()"
                                                name=""
                                                :placeholder="state.profiles.type === '1' || state.profiles.type === '' ? '営業部' : '〇年〇組'"
                                            >
                                        </div>
                                            <div v-if="state.profiles.type === '2'">
                                                <span class="invalid-feedback" v-for="error of v$.affiliates_school.$errors" :key="error.$uid">{{ error.$message }}</span>
                                            </div>
                                    </div>
                                    <div class="form_box">
                                        <div class="form_headline">
                                        管理者名
                                        </div>
                                        <div v-if="state.profiles.type === '1' || state.profiles.type === ''">
                                            <input type="text"
                                                v-model="state.profiles.company_name"
                                                v-bind:class="v$.company_name.$errors == !v$.company_name.$errors ? 'success' : 'error'"
                                                @blur="v$.$touch()"
                                                name=""
                                                :placeholder="state.profiles.type === '1' || state.profiles.type === '' ? '山田太郎' : '山田　太郎'"
                                            >
                                        </div>
                                            <div v-if="state.profiles.type === '1' || state.profiles.type === ''">
                                                <span class="invalid-feedback" v-for="error of v$.company_name.$errors" :key="error.$uid">{{ error.$message }}</span>
                                            </div>
                                        <div v-else-if="state.profiles.type === '2'">
                                            <input type="text"
                                                v-model="state.profiles.school_name"
                                                v-bind:class="v$.school_name.$errors == !v$.school_name.$errors ? 'success' : 'error'"
                                                @blur="v$.$touch()"
                                                name=""
                                                :placeholder="state.profiles.type === '1' || state.profiles.type === '' ? '山田太郎' : '山田　太郎'"
                                            >
                                        </div>
                                            <div v-if="state.profiles.type === '2'">
                                                <span class="invalid-feedback" v-for="error of v$.school_name.$errors" :key="error.$uid">{{ error.$message }}</span>
                                            </div>
                                    </div>
                                    <div class="form_box">
                                        <div class="form_headline">
                                            郵便番号
                                        </div>
                                        <div class="flex_wrap zip_frame">
                                            <div>
                                                <input type="text"
                                                    v-model="state.profiles.zip_code_1"
                                                    v-bind:class="v$.zip_code_1.$errors == !v$.zip_code_1.$errors ? 'success' : 'error'"
                                                    @blur="v$.$touch()"
                                                    name="zip31" 
                                                    maxlength="3" 
                                                    placeholder="000"
                                                >
                                                    <span class="invalid-feedback" v-for="error of v$.zip_code_1.$errors" :key="error.$uid">{{ error.$message }}</span>
                                            </div>
                                            <div>
                                                <input type="text" 
                                                    v-model="state.profiles.zip_code_2"
                                                    v-bind:class="v$.zip_code_2.$errors == !v$.zip_code_2.$errors ? 'success' : 'error'"
                                                    @blur="v$.$touch()"
                                                    name="zip32" 
                                                    maxlength="4" 
                                                    onKeyUp="AjaxZip3.zip2addr('zip31','zip32','pref','pref','addr1');" 
                                                    placeholder="0000"
                                                >
                                                    <span class="invalid-feedback" v-for="error of v$.zip_code_2.$errors" :key="error.$uid">{{ error.$message }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form_box">
                                        <div class="form_headline">
                                            ご住所
                                        </div>
                                        <div class="pref"></div>
                                        <input type="text" 
                                            v-model="state.profiles.address"
                                            v-bind:class="v$.address.$errors == !v$.address.$errors ? 'success' : 'error'"
                                            @blur="v$.$touch()"
                                            name="addr1" 
                                            placeholder="〇〇町1-1　〇〇マンション301"
                                        >
                                            <span class="invalid-feedback" v-for="error of v$.address.$errors" :key="error.$uid">{{ error.$message }}</span>
                                    </div>
                                    <div class="form_box">
                                        <div class="form_headline">
                                        電話番号
                                        </div>
                                        <input type="text"
                                            v-model="state.profiles.phone"
                                            v-bind:class="v$.phone.$errors == !v$.phone.$errors ? 'success' : 'error'"
                                            @blur="v$.$touch()"
                                            name="" 
                                            placeholder="000-0000-0000"
                                        >
                                            <span class="invalid-feedback" v-for="error of v$.phone.$errors" :key="error.$uid">{{ error.$message }}</span>
                                    </div>
                                    <div class="form_box">
                                        <div class="form_headline">
                                        メールアドレス
                                        </div>
                                        <input type="email"
                                            v-model="state.profiles.email"
                                            v-bind:class="v$.email.$errors == !v$.email.$errors ? 'success' : 'error'"
                                            @blur="v$.$touch()"
                                            name=""
                                            placeholder="example@example.com"
                                        >
                                            <span class="invalid-feedback" v-for="error of v$.email.$errors" :key="error.$uid">{{ error.$message }}</span>
                                    </div>
                                    <div class="form_box">
                                        <div class="form_headline">
                                        パスワード
                                        </div>
                                        <input type="text" 
                                            v-model="state.profiles.password"
                                            v-bind:class="v$.password.$errors == !v$.password.$errors ? 'success' : 'error'"
                                            @blur="v$.$touch()"
                                            name="" 
                                            placeholder="※半角英数字１５文字以内"
                                        >
                                            <span class="invalid-feedback" v-for="error of v$.password.$errors" :key="error.$uid">{{ error.$message }}</span>
                                    </div>

                                </div>
                                <div v-if="state.profiles.type == 3">
                                    <div id="home_form" >
                                        自宅フォームが表示されます
                                    </div>
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
    profiles: {
        type: '',
        id: '',
        organization_company: '',
        organization_school: '',
        affiliates_company: '',
        affiliates_school: '',
        company_name: '',
        school_name: '',
        zip_code_1: '',
        zip_code_2: '',
        address: '',
        phone: '',
        email: '',
        password: '',
    }
})

const validations = {
    organization_company: {required:helpers.withMessage("Organization company is required", required), $autoDirty: true},
    organization_school: {required:helpers.withMessage("Organization school is required", required), $autoDirty: true},
    affiliates_company: {required:helpers.withMessage("Affiliates company is required", required), $autoDirty: true},
    affiliates_school: {required:helpers.withMessage("Affiliates school is required", required), $autoDirty: true},
    company_name: {required:helpers.withMessage("Company name is required", required), $autoDirty: true},
    school_name: {required:helpers.withMessage("School name is required", required), $autoDirty: true},
    zip_code_1: {required:helpers.withMessage("zip code 1 is required", required), numeric, minLength: minLength(3), maxLength: maxLength(3), $autoDirty: true},
    zip_code_2: {required:helpers.withMessage("zip code 2 is required", required), numeric, minLength: minLength(4), maxLength: maxLength(4), $autoDirty: true},
    address: {required:helpers.withMessage("Address is required", required), $autoDirty: true},
    phone: {required:helpers.withMessage("Phone is required", required), numeric, minLength: minLength(10), maxLength: maxLength(10), $autoDirty: true},
    email: { required:helpers.withMessage("Email is required", required), email, $autoDirty: true},
    password: { required:helpers.withMessage("Password is required", required), minLength: minLength(3), maxLength: maxLength(8), $autoDirty: true}
}

const v$ = useVuelidate(validations, state.profiles)

const handleRegister = () => {
    v$.value.$touch()
    if(!state.profiles.id && !v$.value.$errors.length > 0) {
        axios.post(`http://localhost:8000/api/users`, {
            organization_company: state.profiles.organization_company,
            organization_school: state.profiles.organization_school,
            affiliates_company: state.profiles.affiliates_company,
            affiliates_school: state.profiles.affiliates_school,
            company_name: state.profiles.company_name,
            school_name: state.profiles.school_name,
            zip_code_1: state.profiles.zip_code_1,
            zip_code_2: state.profiles.zip_code_2,
            address: state.profiles.address,
            phone: state.profiles.phone,
            email: state.profiles.email,
            password: state.profiles.password
        }).then(res => {
            if(res.data.success) {
                SwalAlertHelper.messageForm('success', 'Register Successful. Please login to continue')
                router.push({name: 'login'})
            }

        }).catch((error) => {
            SwalAlertHelper.messageForm('error', error.message || 'Something went wrong')
        })

    } else {
        console.log('ok');
        SwalAlertHelper.messageForm('error', 'Please enter all information to register')
    }
    
    // state.profiles = ''
    
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