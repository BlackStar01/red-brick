<template>
    <div class="notif" :style="'background-color:' + bg + ';color :' + color + ';border: 1px solid ' + color" >
        <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path :color="color" fill-rule="evenodd" clip-rule="evenodd"
                    :d="svg_value"
                    fill="currentColor" />
                <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
    fill="currentColor"
  />
            </svg>
            <slot></slot>
        </span>
    </div>
</template> 
    
<script setup>
import { ref } from 'vue';

defineProps({
    svg_value: {
        type: String,
        required: true
    },
    bg: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
})
</script>
    
<style scoped>
.notif {
    border-radius: 4px;
    padding: 10px 5px;
}
span {
    display: flex;
    flex-direction: row;
    align-items: center;
}
svg {
    margin: 0px 10px;
}
</style>