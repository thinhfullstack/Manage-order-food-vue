<template>
    <div class="side_menu">
        <div class="side_menu_box">
            <a href="cart-lunch_p2.html">
                &gt; 注文カレンダーへ
            </a>
        </div>

        <div class="side_menu_box active">
            <a href="cart-lunch_p7.html">
                &gt; 注文履歴・「月次」帳票
            </a>
        </div>

        <div class="side_menu_box">
            <a href="cart-lunch_p6.html">
                &gt; 注文履歴・「日次」帳票
            </a>
        </div>

        <div class="side_menu_box">
            <router-link :to="{name: 'update-profile'}">
                &gt; 管理者情報の管理
            </router-link>
        </div>

        <div class="side_menu_box">
            <a href="cart-lunch_p13.html">
                &gt; 注文者情報の登録
            </a>
        </div>

        <div class="side_menu_box">
            <a href="cart-lunch_p10.html">
                &gt; 注文者情報の管理
            </a>
        </div>

        <div class="side_menu_box">
            <a href="cart-lunch_p1.html">
                &gt; お店に聞いてみる
            </a>
        </div>
    </div>
</template>
