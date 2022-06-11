<template>

        <div v-if="currentPath === 'register'">
                <div>

                </div>
        </div>
        <div v-if="currentPath === 'forgot_password'">
                <div>

                </div>
        </div>
        <!-- This is the login  -->
        <div v-else>
                <inputWithIcon></inputWithIcon>
                <h1>ehjkn</h1>
        </div>


</template>
<script setup>
import { ref } from 'vue';

import inputWithIcon from '@/components/Form/inputicon.vue'

const currentPath = 'login'
/* const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  console.log(currentPath.value)
}) */

</script>
    
<style>
</style>