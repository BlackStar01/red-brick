<template>
    <div class="root">
        <teleport to="body">
            <!-- v-if="isOpen.visible" -->
            <div class="modal" v-if="isOpen">

                <div>
                    <div class="topmodal">
                        <button @click="isOpen = false">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                                    fill="red" />
                            </svg>
                        </button>
                        <div class="cartIcon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="white"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z"
                                    fill="var(--secondary)" />
                            </svg>
                        </div>
                        <div class="details">
                            <h2><strong> MON PANIER </strong></h2>
                            <p style="color: gray;"> À noter qu'aucun article ne sera retourné au delà de 30 jours à
                                compter de la date de liovraison effective. </p>
                            <p style="color: gray;"> Conctactez le <a href="">service client</a> pour toute information
                                supplémentaire</p>
                        </div>
                    </div>
                    <hr>
                    <modalCard v-for="item_in_cart in store_cart.getItems" :image="item_in_cart.item.image"
                        :quantity="item_in_cart.number" :computedPrice="item_in_cart.number * item_in_cart.item.price"
                        @click="deleteItem(item_in_cart)">
                        {{ item_in_cart.item.title }}
                    </modalCard>
                    <!-- <modalCard v-for="item_in_cart in get_items" >
                        {{item_in_cart.item.title}}
                    </modalCard> -->
                    <h2> {{ isOpen }} zrzc </h2>é

                </div>
            </div>
        </teleport>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import modalCard from './modalCard.vue';
import { useCart } from '@/store/cartStore.js'
import { element_index_in_array } from '@/services/utils/utils'
const store_cart = useCart()
const isOpen = inject('modalCart')

const deleteItem = (e) => {
    store_cart.delete_item(element_index_in_array(JSON.parse(JSON.stringify(store_cart)).getItems, e))
}
</script>

<style scoped>
.modal {
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.568);
    overflow-y: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal>div {
    background-color: #fff;
    width: 60%;
    height: 90%;
    padding: 50px;
    border-radius: 10px;
    overflow-y: scroll;
    position: relative;

}

.topmodal {
    display: inline-flex;
    flex-direction: row;
    gap: 25px;
}

button {
    cursor: pointer;
    position: absolute;
    top: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border: 1px solid var(--secondary);
    border-radius: 50%;
    background-color: transparent;
}

.cartIcon {
    flex-basis: 200px;
    width: 120px;
    height: 90px;
    background-color: transparent;
    display: grid;
    place-items: center;
}

.details {
    width: 60%;
}

hr {
    margin: 40px 0px;
    border-top: 0px;
    border-color: var(--fourth);
}
</style>