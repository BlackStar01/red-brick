<template>
    <div class="root">
        <teleport to="body">
            <!-- v-if="isOpen.visible" -->
            <component :is="currentComponent" ></component>
        </teleport>
    </div>
</template>

<script setup>
import { inject } from 'vue';

import modalCart from './Cart/modalCart.vue';
import moreDetails from './moreDetails.vue'

/* Inject to take currentComponent */
//const isOpen = inject('modalCart')

const currentComponent = modalCart;

</script>