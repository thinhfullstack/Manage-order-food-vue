<template>
    <slot name="header">
        <Header />
    </slot>
    <slot name="content"></slot>
    <slot name="footer">
        <Footer />
    </slot>
</template>
<script setup>
import Header from './partitions/Header.vue'
import Footer from './partitions/Footer.vue'

</script>