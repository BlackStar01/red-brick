<template>
    <div class="nav">
        <div class="path">
            <span>
                <span class="iconhome">
                    <i class="gg-home"></i>
                </span>
                <span class="currentpath"> Main page > <strong style="color: gray;"> Catalogue </strong> </span>
            </span>
        </div>
        <div class="navelements">
            <router-link to="/comparaison">
                <span>
                    <span class="icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 13V11.5H10V9.5H16V8L19 10.5L16 13Z" fill="white" />
                            <path d="M8 17V15.5H14V13.5H8V12L5 14.5L8 17Z" fill="white" />
                        </svg>
                    </span>

                    <span class="text"> Compare products </span>
                </span>
            </router-link>
            <router-link to="/">
                <span>
                    <span class="icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z"
                                fill="white" />
                        </svg>
                    </span>
                    <span class="text"> Wish list - {{ nbr_likes }} {{ mot }} </span>
                </span>
            </router-link>
            <router-link to="/">
                <span @click="open">
                    <span class="icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z"
                                fill="white" />
                        </svg>
                    </span>
                    <span class="text" @click="openCart = true"> {{ store_cart.nbr_items }} {{
                    check_plural(store_cart.nbr_items, 'Item') }} ~ {{ store_cart.total_amount() }} € </span>
                </span>
            </router-link>
        </div>
        <modal></modal>
    </div>
</template>
    
<script setup>
/* import axios from 'axios'; */
import { inject, ref, provide } from 'vue';
import modal from './modal.vue';
import { useCart } from '@/store/cart.store.js'
import { check_plural } from '@/services/utils/utils'

/* const get_current_user = async () => {
    await axios.get('http://localhost:8000/api/user')
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        })
} */
/* 
onMounted(() => {
  get_current_user();
}) */

const store_cart = useCart()

const open = () => {
    return true
}
const nbr_likes = inject('nbr_likes')
const mot = inject('mot')
const openCart = ref(false)

const cat = localStorage.getItem('myCat');
//provide('modalCart', {open: openCart.value, nameComponent: 'modalCart'})
provide('dataModalCart', openCart)

</script>
    
<style scoped>
/* .modal {
    background-color: rebeccapurple;
} */

.nav {
    z-index: 1;
    margin-top: 80px;
    background-color: #eee;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    display: grid;
    grid-template-columns: 1fr 4fr;
}

.path {
    display: grid;
    place-items: center;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
}

.path>span {
    display: flex;
    flex-direction: row;
}

.iconhome {
    height: 40px;
    width: 40px;
    display: grid;
    place-items: center;
    border: none;
    border-radius: 50%;
}

img {
    height: 30px;
    width: 30px;
}

.navelements {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
}

.icon {
    height: 40px;
    width: 40px;
    display: grid;
    place-items: center;
    border: none;
    border-radius: 50%;
    background-color: var(--secondary);
}

.text {
    transform: translateY(22%);
}

.currentpath {
    transform: translateY(22%);
    margin-left: 15px;
}

a {
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    text-decoration: none;
    color: inherit;
}

a>span {
    display: flex;
    flex-direction: row;
    gap: 25px;
}

select {
    border: none;
    background: none;
}

.user {
    border-left: 1px solid #ccc;
}
</style>