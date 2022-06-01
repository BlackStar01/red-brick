<template>
    <div class="main">
        <div class="filter">
            <p> {{ products }} </p>
        </div>
        <main>
            <div class="products">
                <card v-for="product in products" :key="product.id" :url="product.image" :alt="product.title"
                    :title="product.title" :price="product.price" :category="product.category"></card>
            </div>
        </main>
    </div>
</template>
    
<script setup>

import { onMounted, ref, computed } from 'vue';
import axios from "axios";

import card from './card.vue';

const products = ref([])

onMounted(async () => {
    await axios
        .get('https://fakestoreapi.com/products?limit=50')
        .then(response => {
            products.value = response.data
        })
})

</script>
    
<style scoped>
.main {
    z-index: 0;
    margin-top: 140px;
    position: relative;
    display: grid;
}

.filter {
    position: fixed;
    width: 20%;
    height: calc(100vh - 140px);
    background-color: red;
    overflow-x: hidden;
}

main {
    position: absolute;
    margin-left: 20%;
    width: 80%;
}

.products {
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>