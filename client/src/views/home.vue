<template>
    <div class="home">
        <navbar></navbar>
        <topbar></topbar>
        <modal></modal>
        <content @send_like="handle_like" @send_item="push_in_cart"></content>
    </div>
</template>
    
<script setup>
import modal from '@/components/modal.vue';
import { provide, ref, watchEffect } from 'vue';
import content from '@/components/content.vue';
import navbar from '@/components/navbar.vue';
import topbar from '@/components/topbar.vue';
import { check_plural } from '@/services/utils/utils.js'

const count_likes = ref(0)
const cart_visible_amount = ref(0)
const cart_visible_nbr_products = ref(0)
const words_favorite = ref('Favorite')
const words_cart = ref('Item')

const handle_like = (e) => {
    /* console.log(e) */
    count_likes.value = e
    words_favorite.value = check_plural(e, 'Favorite')
}

const push_in_cart = (e) => {
    if (typeof (e) === 'object') {
        cart_visible_nbr_products.value += 1;
        words_cart.value = check_plural(cart_visible_nbr_products.value, 'Item')
        cart_visible_amount.value += e.price
    }
}

/* Watcheffect to do the change just one time ... increase performance */
watchEffect(() => {
    provide('mot', words_favorite)
    provide('cart_updated', { nbr_items: cart_visible_nbr_products, amount: cart_visible_amount, word: words_cart })
}
);
provide('nbr_likes', count_likes)

</script>
    
<style scoped>
</style>