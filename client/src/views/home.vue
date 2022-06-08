<template>
    <div class="home">
        <navbar></navbar>
        <topbar></topbar>
        <content @send_like="handle_like"></content>
    </div>
</template>
    
<script setup>
import { provide, ref } from 'vue';
import content from '../components/content.vue';
import navbar from '../components/navbar.vue';
import topbar from '../components/topbar.vue';
import { check_plural } from '@/services/utils/utils.js'

const count_likes = ref(0)
const words = ref('po')

const handle_like = (e) => {
    /* console.log(e) */
    count_likes.value = e
    words.value = check_plural(count_likes.value, 'po')
}

provide('nbr_likes', count_likes)
provide('mot', words.value)

</script>
    
<style scoped>
</style>