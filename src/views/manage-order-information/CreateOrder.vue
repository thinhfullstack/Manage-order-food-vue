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
          <h2 class="section_title">注文者情報の登録</h2>
        </div>


        <div class="column2_container">
          <div class="column2 flex_wrap reverse">
            <div class="main">

        <section>
          <h3 class="section_sub_title">
            管理者アカウントで複数名分の注文ができます
          </h3>

          <form action="cart-lunch_p13_2.html">
          <div class="container">

              <div class="form_frame">

                <!-- フォーム -->
                <div>

              <div class="group_register">

                <div class="group_register_box">
                  <div class="form_box" :key="index" v-for="(group, index) in groups">

                    <div class="form_box">
                      <div class="form_headline">
                        所属（学年・クラス）
                      </div>
                      <select class="group_class" v-model="state.orders.affiliates" :name="'group_class_' + (index + 1)">
                        <option :key="index" v-for="(order, index) in state.orders" :value="order">{{ order }}</option>
                      </select>
                    </div>

                    <div class="form_box">
                      <div class="form_headline">
                        管理者名
                      </div>
                      <input type="text"
                        :name="'group_name_' + (index + 1)"
                        v-model="state.orders.name"
                        v-bind:class="v$.name.$errors == !v$.name.$errors ? 'success' : 'error'"
                        @blur="v$.$touch()"
                        placeholder="山田　太郎">
                        <span class="invalid-feedback" v-for="error of v$.name.$errors" :key="error.$uid">{{ error.$message }}</span>
                    </div>

                  <div class="form_box">
                    <div class="group_btn">
                      <div class="group_delete" @click="handleGroupDelete(index)">-</div>
                      <div class="group_addition" @click="handleGroupAddition()">+</div>
                    </div>
                  </div>
                </div>

              </div>

    
                </div>

              </div>

            </div>

              <div class="button">
                <div>
                  <input type="submit" class="button01" name="Submit" value="確認画面へ">
                </div>
              </div>
          </div>
          </form>

        </section>

            </div>
            <!-- <div id="side" class="side"> -->
              <div>
                <Side />
              </div>
          </div>
        </div>

      </main>
    </template>
  </layout>
</template>

<script setup>
import layout from '../layout/App.vue';
import Side from '../side/Side.vue';
import { reactive, ref, onMounted } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import axios from "axios";
import SwalAlertHelper from '../../utils/SwalAlertHelper';
import useUserStore from '../../store/userStore'

const userStore = useUserStore()
const currentUser = userStore.me()

const groups = ref([
  { 
    class: '', 
    item: '' 
  },
])

const state = reactive({
  orders: {
    affiliates: '',
    name: ''
  }
})

const handleGroupAddition = () => {
  groups.value.push({ class: '', item: '' })
}

const handleGroupDelete = (index) => {
  groups.value.splice(index, 1);
}

const validations = {
    affiliates: {required:helpers.withMessage("Affiliates is required", required), $autoDirty: true},
    name: {required:helpers.withMessage("Admin name is required", required), $autoDirty: true},
}

const v$ = useVuelidate(validations, state.orders)

onMounted(() => {
  getAdminOrder()
})

const getAdminOrder = () => {
  if(currentUser) {
    axios.get(`http://localhost:8000/api/users/${currentUser.user.id}`).then(res => {
      state.orders.affiliates = res.data.affiliates_school
      state.orders.name = res.data.school_name
    }).catch((error) => {
      SwalAlertHelper.messageForm('error', error.message || 'Something went wrong')
    })

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
