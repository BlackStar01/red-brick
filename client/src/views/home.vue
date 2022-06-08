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

const count_likes = ref(0)
const handle_like = (e) => {
    console.log(e)
    count_likes.value = e
}
provide('nbr_likes', count_likes)


</script>
    
<style scoped>
</style>