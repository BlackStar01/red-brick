<template>
    <div>
        <input type="range" min="0" :max="max" step="10">
    </div>
</template>
    
<script setup lang='ts'>
defineProps({
    max: {
        type: Number,
        required: true,
    }
})
</script>
    
<style scoped>
    
</style>