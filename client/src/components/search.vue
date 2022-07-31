<template>
    <div class="search">
        <div class="icon">
            <svg color="gray" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
                    fill="currentColor" />
            </svg>
        </div>
        <div class="input">
            <input type="search" @keyup="typing" v-model="searched" placeholder="Search a item">
        </div>
    </div>
</template>
    
<script setup>
import { ref } from 'vue';

const searched = ref('')
const typing = () => {
    send_text_typed('searched_word', searched)
}

const send_text_typed = defineEmits('searched_word')
</script>
    
<style scoped>
.search {
    height: 50px;
    border: 1px solid #ccc;
    width: 92%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 9fr;
    background-color: white;
}
.icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: var(--third);   
}
input {
    border-right: none;
    border-top: none;
    border-bottom: none;
    border-left: 1px solid #ccc;
    padding: 10px 30px;
    outline: none;
    width: 100%;
    height: 100%;
    color: gray;
}
</style>