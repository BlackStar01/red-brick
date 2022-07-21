<template>
    <button :type="type">
        <slot></slot>
    </button>
</template> 
    
<script setup>
defineProps({
    type: {
        type: String,
        required: true
    },
})
</script>
    
<style scoped>
button {
    padding: 0px 20px;
    border: 0px;
    border-radius: 5px;
    outline: none;
    height: 50px;
    width: 100%;
    color: white;
    background-color: var(--secondary);
    cursor: pointer;
}
</style>