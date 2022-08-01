<template>
    <div class="main">
        <div class="filter">
            <range :max="max_price"></range>
            <titleFilter> CATEGORIES </titleFilter>
            <categoriesList v-for="categorie in categories" :key="categorie" @click="sort_by_category(categorie)">
                {{ categorie }} </categoriesList>
        </div>
        <main>
            <h1> CATALOG </h1>
            <div class="searcharea">
                <search @searched_word="handle_search"></search>
            </div>
            <div class="products">
                <card v-for="product in filtered_products" :key="product.id" :url="product.image" :alt="product.title"
                    :title="hide_long_text(product.title)" :price="product.price" :category="product.category"
                    @handle_like="handle_like" @dis_like="remove_like" @item_clicked="add_item(product)">
                </card>
            </div>
        </main>
    </div>
</template>
    
<script setup>

import { onMounted, ref } from 'vue';
import search from './search.vue';
import axios from "axios";
import card from './card.vue';
import range from './Filter/range.vue';
import { check_max_price, hide_long_text } from '../services/utils/utils';
import { useCart } from '@/store/cart.store.js'
import { useSort } from '@/store/sort.store.js'
import categoriesList from './Filter/categories.vue'
import titleFilter from './Filter/titleFilter.vue';

const products = ref([])
const initial_products = ref([])
const filtered_products = ref(products)
const nbr_favorites = ref(0)
const max_price = ref(0)
const store_cart = useCart()
const store_categories = useSort()
const categories = ref([])

const sort_by_category = (e) => {
    store_categories.add_or_remove_selected(e)
    if (JSON.parse(JSON.stringify(store_categories.selected_categories)).length !== 0) {         
        filtered_products.value = JSON.parse(JSON.stringify(products.value)).filter(el => {
            const val = e.toLowerCase();
            const title = el.category && el.category.toLowerCase();
            if (val && title.indexOf(val) !== -1) {
                return true
            }
            return false
        })
    }
    else {
        filtered_products.value = initial_products.value
    }
}

const handle_like = () => {
    nbr_favorites.value++
    send_to_home('send_like', nbr_favorites.value)
}

const remove_like = () => {
    nbr_favorites.value--
    send_to_home('send_like', nbr_favorites.value)
}

const handle_search = (e) => {
    /* console.log(e) */
    if (e.value !== '') {         
        filtered_products.value = JSON.parse(JSON.stringify(products.value)).filter(el => {
            const val = e.value.toLowerCase();
            const title = el.title && el.title.toLowerCase();
            if (val && title.indexOf(val) !== -1) {
                return true
            }
            return false
        })
        /* console.log(JSON.parse(JSON.stringify(filtered_products.value))) */
    }
    else {
        filtered_products.value = initial_products.value
    }
}

const add_item = (e) => {
    /* JSON.parse(JSON.stringify(e)) to get de target in a proxy */
    send_to_home('send_item', JSON.parse(JSON.stringify(e)))
    store_cart.add_item({ 'item': JSON.parse(JSON.stringify(e)), 'number': 1 })
    console.log(store_cart.getItems)
}

const send_to_home = defineEmits('send_like', 'send_item')

onMounted(async () => {
    await axios
        .get('https://fakestoreapi.com/products?limit=30')
        .then(response => {
            products.value = response.data
            initial_products.value = products.value
            max_price.value = check_max_price(products._rawValue)
        });
    if (store_categories.getAllCategories.length === 0) {
        await axios
            .get('https://fakestoreapi.com/products/categories')
            .then(response => {
                store_categories.add_all_categories(JSON.parse(JSON.stringify(response.data)))
                categories.value = store_categories.getAllCategories
            })
    }
    else {
        categories.value = store_categories.getAllCategories
    }

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