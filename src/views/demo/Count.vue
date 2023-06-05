<template>
    <layout>
        <template #content>
            <div>
                <button @click="countStore.downCount">-</button>
                <h1>{{ countStore.count }}</h1>
                <button @click="countStore.upCount">+</button>
            </div>
        </template>
    </layout>
</template>

<script setup>
import layout from '../layout/App.vue'
import useCountStore from '../../store/count'

const countStore = useCountStore()

</script>