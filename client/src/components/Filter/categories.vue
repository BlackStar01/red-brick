<template>
    <div class="categories">
        <input type="checkbox">
        <span for="checkbox"><slot></slot> </span>
    </div>
</template>

<script setup>
/* defineProps({
    check: {
        type: Function,
        required: true
    }
}) */
</script>

<style scoped>
.categories {
    padding: 0px 20px;
}

.categories h4 {
    margin: 10px 0px;
    font-weight: bold;
}

.categories span {
    margin: 0px 15px;
}

input[type='checkbox'] {
    accent-color: var(--secondary);
}
</style>