<template>
    <div class="main">
        <div class="filter">
            <range :max="max_price"></range>            
            <p>
                {{ store_cart.items }}
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
                    :title="hide_long_text(product.title)" :price="product.price" :category="product.category" @handle_like="handle_like"
                    @dis_like="remove_like" @item_clicked="add_item(product)">
                </card>
            </div>
        </main>
    </div>
</template>
    
<script setup>

import { onMounted, ref, provide } from 'vue';
import search from './search.vue';
import axios from "axios";
import card from './card.vue';
import range from './Filter/range.vue';
import { check_max_price, hide_long_text } from '../services/utils/utils';
import { useCart } from '@/store/cartStore.js'

const products = ref([])
const nbr_favorites = ref(0)
const max_price = ref(0)
const store_cart = useCart()

const handle_like = () => {
    nbr_favorites.value++
    send_to_home('send_like', nbr_favorites.value)
}

const remove_like = () => {
    nbr_favorites.value--
    send_to_home('send_like', nbr_favorites.value)
}

const add_item = (e) => {
    /* JSON.parse(JSON.stringify(e)) to get de target in a proxy */
    send_to_home('send_item', JSON.parse(JSON.stringify(e)))
    store_cart.add_item({'item': JSON.parse(JSON.stringify(e)), 'number': 1 })
    console.log(store_cart.getItems)
}

const send_to_home = defineEmits('send_like', 'send_item')

onMounted(async () => {
    await axios
        .get('https://fakestoreapi.com/products?limit=30')
        .then(response => {
            products.value = response.data
            max_price.value = check_max_price(products._rawValue)
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