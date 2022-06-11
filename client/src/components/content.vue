<template>
    <div class="main">
        <div class="filter">
            <p>
                <!-- {{ products }} -->
            </p>
        </div>
        <main>
            <h1> CATALOG </h1>
            <div class="searcharea">
                <search></search>
            </div>
            <div class="products">
                <card v-for="product in products" :key="product.id" :url="product.image" :alt="product.title"
                    :title="product.title" :price="product.price" :category="product.category" @handle_like="handlelike"
                    @dis_like="remove_like" @empty='remove_like'></card>
            </div>
        </main>
    </div>
</template>
    
<script setup>

import { onMounted, ref } from 'vue';
import search from './search.vue';
import axios from "axios";
import card from './card.vue';

const products = ref([])
const nbr_favorites = ref(0)

const handlelike = () => {

    nbr_favorites.value++
    send_like_to_home('send_like', nbr_favorites.value)
}

const remove_like = () => {
    nbr_favorites.value--
    send_like_to_home('send_like', nbr_favorites.value)
}

const send_like_to_home = defineEmits('send_like')

onMounted(async () => {
    await axios
        .get('https://fakestoreapi.com/products?limit=30')
        .then(response => {
            products.value = response.data
        })
})

</script>
    
<style scoped>
.main {
    z-index: 0;
    margin-top: 140px;
    display: grid;
}

.filter {
    position: fixed;
    width: 20%;
    border-right: 1px solid #ccc;
    height: calc(100vh - 140px);
    overflow-x: hidden;
}

main {
    position: absolute;
    margin-left: 20%;
    width: 80%;
}

main h1 {
    font-weight: bolder;
    margin: 30px 0px;
    margin-left: 50px;
}

.searcharea {
    display: grid;
    grid-template-columns: 2fr 1fr;
}

.products {
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>