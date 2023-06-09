<template>
  <layout>
    <template #content>
      <div class="container">
        <div class="breadcrumbs">
          パンくずリスト > <a href="">パンくずリスト</a>
        </div>
      </div>
      
      <main>

        <div class="section_header">
          <h2 class="section_title">管理者情報の管理</h2>
        </div>

        <div class="column2_container">
          <div class="column2 flex_wrap reverse">
            <div class="main">

        <section>

          <form>
            <div class="container">

              <div class="form_frame">

                <div class="form_box">

                  <div class="form_headline">
                    商品引渡し先
                  </div>
                  <label class="side_label flex-item">
                    <input type="radio" v-model="state.profiles.type" name="destination" value="1" checked>
                      <span v-if="state.profiles.type === '1' || state.profiles.type === '2'">会社</span>
                      <span v-else>学校</span>
                  </label>
                  <!-- <label class="side_label flex-item">
                    <input type="radio" v-model="state.profiles.type" name="destination" value="2">
                      <span v-if="state.profiles.type === '2' || state.profiles.type === '1'">学校</span>
                      <span v-else>会社</span>
                  </label> -->
                  <label class="side_label">
                    <!-- <input type="radio" v-model="state.profiles.type" name="destination" value="2" checked>学校 -->
                  </label>
                  
                  <label class="side_label">
                    <!-- <input type="radio" name="destination" value="home">自宅 -->
                  </label>

                </div>

                <!-- フォーム -->
                <div>
                  <div class="form_box">
                    <div class="form_headline">
                      <div v-if="state.profiles.type === '1' || state.profiles.type === '2'">会社名</div>
                      <div v-else>団体名</div>
                    </div>
                    <div v-if="state.profiles.type === '1' || state.profiles.type === '2'">
                      <input type="text"
                        v-model="state.profiles.organization_company"
                        v-bind:class="v$.organization_company.$errors == !v$.organization_company.$errors ? 'success' : 'error'"
                        @blur="v$.$touch()"
                        name=""
                        :placeholder="state.profiles.type === '1' ? '株式会社〇〇' : '〇〇中学校'"
                      >
                    </div>
                    <div v-else>
                      <input type="text"
                        v-model="state.profiles.organization_school"
                        v-bind:class="v$.organization_school.$errors == !v$.organization_school.$errors ? 'success' : 'error'"
                        @blur="v$.$touch()"
                        name=""
                        :placeholder="state.profiles.type === '' ? '株式会社〇〇' : '〇〇中学校'"
                      >
                    </div>
                    <div v-if="state.profiles.type === '1'">
                      <span class="invalid-feedback" v-for="error of v$.organization_company.$errors" :key="error.$uid">{{ error.$message }}</span>
                    </div>
                    <div v-else>
                      <span class="invalid-feedback" v-for="error of v$.organization_school.$errors" :key="error.$uid">{{ error.$message }}</span>
                    </div>
                  </div>

                  <div class="form_box">
                    <div class="form_headline">
                      <div v-if="state.profiles.type === '1' || state.profiles.type === '2'">管理者名</div>
                      <div v-else>管理者名</div>
                    </div>
                    <div v-if="state.profiles.type === '1' || state.profiles.type === '2'">
                      <input type="text" 
                        v-model="state.profiles.company_name"
                        v-bind:class="v$.company_name.$errors == !v$.company_name.$errors ? 'success' : 'error'"
                        @blur="v$.$touch()"
                        name="" 
                        :placeholder="state.profiles.type === '1' ? '山田　太郎' : '山田太郎'" 
                      >
                    </div>
                    <div v-else>
                      <input type="text" 
                        v-model="state.profiles.school_name"
                        v-bind:class="v$.school_name.$errors == !v$.school_name.$errors ? 'success' : 'error'"
                        @blur="v$.$touch()"
                        name="" 
                        :placeholder="state.profiles.type === '2' ? '山田　太郎' : '山田太郎'"
                      >
                    </div>
                    <div v-if="state.profiles.type === '1'">
                      <span class="invalid-feedback" v-for="error of v$.company_name.$errors" :key="error.$uid">{{ error.$message }}</span>
                    </div>
                    <div v-else>
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
                          onKeyUp="AjaxZip3.zip2addr('zip31','zip32','pref','pref','pref');" 
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
                    <input type="text" name="pref" class="pref_readonly" 
                      readonly 
                      placeholder="〇〇県〇〇市〇〇区" 
                      style="border: none;"
                    >
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
                      FAX 番号（任意）
                    </div>
                    <input type="text" 
                      v-model="state.profiles.fax"
                      v-bind:class="v$.fax.$errors == !v$.fax.$errors ? 'success' : 'error'"
                      @blur="v$.$touch()"
                      name="" 
                      placeholder="00-0000-0000"
                    >
                    <span class="invalid-feedback" v-for="error of v$.fax.$errors" :key="error.$uid">{{ error.$message }}</span>
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
                      現在のパスワード
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
                  
                  <div class="form_box">

                    <div class="form_headline">
                      新しいパスワード
                    </div>
                    <input type="text" 
                      v-model="state.profiles.new_password"
                      v-bind:class="v$.new_password.$errors == !v$.new_password.$errors ? 'success' : 'error'"
                      @blur="v$.$touch()"
                      name="" 
                      placeholder="※パスワードを変更したい場合は新しいパスワードを入力"
                    >
                    <span class="invalid-feedback" v-for="error of v$.new_password.$errors" :key="error.$uid">{{ error.$message }}</span>
                  </div>
                  <div v-if="state.profiles.passwordMatchError">Passwords do not match!</div>
                  
                </div>

              </div>

            </div>

              <div class="section_header">
                <h2 class="section_title">お支払い方法</h2>
              </div>
              <div class="container">

                <div class="form_frame">
                  <div class="form_box">
                    <label>
                      <input type="radio" name="pay" value="" checked>月末支払い（口座振替）
                    </label><br>
                    <span class="pay_span font_16">
                      締日や振替日については別途ご案内
                    </span>
                  </div>
                </div>
              </div>


              <div class="button">
                <div>
                  <input @click.prevent="handleUpdateProfile()" type="submit" class="button01" value="この情報で登録する">
                </div>
              </div>

          </form>

        </section>

            </div>
            <div>
              <Side />
            </div>
            <!-- <div id="side" class="side"></div> -->
          </div>
        </div>

      </main>
    </template>
  </layout>
</template>

<script setup>
import { onMounted, reactive, watchEffect } from 'vue';
import layout from '../layout/App.vue'
import Side from '../side/Side.vue';
import { useRoute, useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core'
import { required, email, numeric, minLength, maxLength, helpers } from '@vuelidate/validators'
import axios from "axios";
import SwalAlertHelper from '../../utils/SwalAlertHelper';
import useUserStore from '../../store/userStore'

const userStore = useUserStore()
const currentUser = userStore.me()

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
    fax: '',
    email: '',
    password: '',
    new_password: '',
    passwordMatchError: false
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
    fax: {required:helpers.withMessage("Fax is required", required), numeric, minLength: minLength(10), maxLength: maxLength(10), $autoDirty: true},
    email: { required:helpers.withMessage("Email is required", required), email, $autoDirty: true},
    password: { required:helpers.withMessage("Password is required", required), minLength: minLength(3), maxLength: maxLength(8), $autoDirty: true},
    new_password: { required:helpers.withMessage("Re-password is required", required), minLength: minLength(3), maxLength: maxLength(8), $autoDirty: true}
}

const v$ = useVuelidate(validations, state.profiles)

watchEffect(() => {
  if (state.profiles.password !== "" && state.profiles.password === state.profiles.new_password) {
    state.profiles.passwordMatchError = false;
  } else {
    state.profiles.passwordMatchError = true;
  }
});

onMounted(() => {
  getUpdateUser()
})

const getUpdateUser = () => {
  if (currentUser) {
    axios.get(`http://localhost:8000/api/users/${currentUser.user.id}`).then(res => {
      state.profiles.organization_company = res.data.organization_company
      state.profiles.organization_school = res.data.organization_school
      state.profiles.company_name = res.data.company_name
      state.profiles.school_name = res.data.school_name
      state.profiles.zip_code_1 = res.data.zip_code_1
      state.profiles.zip_code_2 = res.data.zip_code_2
      state.profiles.address = res.data.address
      state.profiles.phone = res.data.phone
      state.profiles.fax = res.data.fax
      state.profiles.email = res.data.email
      state.profiles.password = res.data.password
      state.profiles.new_password = res.data.new_password

      if(res.data.success) {
        SwalAlertHelper.messageForm('success', 'Account update successful')
        router.push({name: 'home'})
        return
      }
    }).catch((error) => {
      SwalAlertHelper.messageForm('error', error.message || 'Something went wrong')
    })
  }
}

const handleUpdateProfile = () => {
  v$.value.$touch() 
  if(!state.profiles.id || !v$.value.$error) {
      axios.put(`http://localhost:8000/api/users/${currentUser.user.id}`, {
        organization_company: state.profiles.organization_company,
        organization_school: state.profiles.organization_school,
        company_name: state.profiles.company_name,
        school_name: state.profiles.school_name,
        zip_code_1: state.profiles.zip_code_1,
        zip_code_2: state.profiles.zip_code_2,
        address: state.profiles.address,
        phone: state.profiles.phone,
        fax: state.profiles.fax,
        email: state.profiles.email,
        password: state.profiles.password,
        new_password: state.profiles.new_password
    }).then(res => {
      if(res.data.success) {
        SwalAlertHelper.messageForm('success', 'Account update successful')

        // Check email must not match the email of other users
        const currentUserEmail = currentUser.user.id;
        if (state.profiles.email === currentUserEmail) {
          SwalAlertHelper.messageForm('success', 'Email update successful');
          return;
        } else {
          SwalAlertHelper.messageForm('error', 'Email must not match the email of other users');
        }

        // Check old and new passwords must match
        if (state.profiles.passwordMatchError) {
          SwalAlertHelper.messageForm('warning', 'Old and new passwords must match')
          return;
        }
        
        router.push({name: 'home'})

      }
    }).catch((error) => {
      SwalAlertHelper.messageForm('error', error.message || 'Something went wrong')
    })
  } else {
    SwalAlertHelper.messageForm('error', 'Please enter full account information to proceed with the update!')
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
.flex-item {
  display: flex;
}
</style>