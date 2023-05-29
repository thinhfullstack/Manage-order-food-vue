<template>
    <layout>
        <template #content>
            <main class="container">
                <h1>ページ一覧</h1>
                <div>
                    <router-link :to="{name: 'cart-lunch_p5'}" target="_blank">
                        お客様登録(5)
                    </router-link><br>
                    <router-link :to="{name: 'cart-lunch_p5_1'}" target="_blank">
                        お客様登録：確認画面(5_1)
                    </router-link><br>
                    <router-link :to="{name: 'cart-lunch_p5_2'}" target="_blank">
                        お客様登録：完了(5_2)
                    </router-link>
                </div>
                <div>
                    <router-link :to="{name: 'cart-lunch_p10'}" target="_blank">
                        注文者情報の管理(10)
                    </router-link><br>
                    <router-link :to="{name: 'cart-lunch_p13'}" target="_blank">
                        注文者情報の登録(13)
                    </router-link><br>
                    <router-link :to="{name: 'cart-lunch_p13_2'}" target="_blank">
                        注文者情報の管理：確認画面(13_2)
                    </router-link><br>
                    <router-link :to="{name: 'cart-lunch_p13_3'}" target="_blank">
                        注文者情報の管理：完了(13_3)
                    </router-link><br>
                    <router-link :to="{name: 'cart-lunch_p9'}" target="_blank">
                        管理者情報の管理(9)
                    </router-link>
                </div>
                <div>
                    <router-link :to="{name: 'login'}" target="_blank">
                        ログイン画面(4)
                    </router-link>
                </div>
                <div>
                    <router-link :to="{name: 'my-page-top'}" target="_blank">
                        マイページTOP(1)
                    </router-link><br>
                    <router-link :to="{name: 'monthly'}" target="_blank">
                        注文履歴・「月次」帳票(7)
                    </router-link><br>
                    <router-link :to="{name: 'daily'}" target="_blank">
                        注文履歴・「日次」帳票(6)
                    </router-link><br>
                    <router-link :to="{name: 'daily-details'}" target="_blank">
                        注文履歴・「日次」帳票：詳細(6_2)
                    </router-link><br>
                    <router-link :to="{name: 'question'}" target="_blank">
                        お問い合わせ(11)
                    </router-link>
                </div>
                <div>
                    <router-link :to="{name: 'top-order-day'}" target="_blank">
                        カレンダーTOP-注文者：単一日選択用(2)
                    </router-link><br>
                    <router-link :to="{name: 'top-order-multiple-days'}" target="_blank">
                        カレンダーTOP-注文者：複数日選択用(2_2)
                    </router-link><br>
                    <router-link :to="{name: 'top-administrator-day'}" target="_blank">
                        カレンダーTOP-管理者：単一日選択用(2_3)
                    </router-link><br>
                    <router-link :to="{name: 'top-administrator-multiple-days'}" target="_blank">
                        カレンダーTOP-管理者：複数日選択用(2_4)
                    </router-link><br>
                    <router-link :to="{name: 'order-confirm-admin'}" target="_blank">
                        注文内容の確認-管理者：管理者専用(2_3_2)
                    </router-link><br>
                    <router-link :to="{name: 'menu-order'}" target="_blank">
                        注文画面（変更・商品選択入力）(3)
                    </router-link><br>
                    <router-link :to="{name: 'completed-order'}" target="_blank">
                        注文済み：注文画面（変更・商品選択入力）(3_1_2)
                    </router-link><br>
                    <router-link :to="{name: 'payment-confirmation'}" target="_blank">
                        注文画面（お支払い方法選択・注文内容の確認）(3_2)
                    </router-link><br>
                    <router-link :to="{name: 'order-delete'}" target="_blank">
                        注文画面（削除）(3_3)
                    </router-link><br>
                    <router-link :to="{name: 'order-confirmation'}" target="_blank">
                        注文画面（完了）(3_4)
                    </router-link>
                </div>
                <div>
                    <router-link :to="{name: 'notice-list'}" target="_blank">
                        お知らせ（一覧）(8)
                    </router-link><br>
                    <router-link :to="{name: 'notice-details'}" target="_blank">
                        お知らせ（詳細）(8_2)
                    </router-link>
                </div>
                <div>
                    <router-link :to="{name: 'support'}" target="_blank">
                        ヘルプ(12)
                    </router-link>
                </div>
            </main>
        </template>
    </layout>

</template>

<script setup>
import layout from '../layout/App.vue'
</script>

<style scoped>
    main {
        margin-bottom: 20px;
    }
    main > div {
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: dotted 1px #333;
    }
    main > h1 {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 20px;
    }
</style>