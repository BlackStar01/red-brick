<template>
    <div class="categories">
        <h4> Categories </h4>
        <div class="category" v-for="categorie in categories" :key="categorie">
            <input type="checkbox" v-on:blur="ggg" v-on:input="handle_model(categorie)">
            <span for="checkbox"> {{categorie}} </span>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
const checked = ref(false)
const handle_model = (e) => {
    console.log(checked)
    get_model('active_model', e)
}
const ggg = (e) => {
    console.log(e.target.value + ' p p p p ')
}
const get_model = defineEmits('active_model')

defineProps({
    categories: {
        type: Array,
        required: true
    }
})

</script>

<style scoped>
.categories {
    margin: 40px 0px;
    padding: 0px 20px;
}
.categories h4 {
    margin: 10px 0px;
    font-weight: bold;
}
.category span {
    margin: 0px 15px;
}
input[type='checkbox'] {
    accent-color: var(--secondary);
}
</style>