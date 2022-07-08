<template>
    <div class="root">
        <teleport to="body">
            <!-- v-if="isOpen.visible" -->
            <div class="modal" v-if="isOpen">
                <div>
                    <h2> {{isOpen}} zrzc </h2>
                    <!-- <button @click="isOpen = false"> Close </button> -->
                </div>
            </div>
        </teleport>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue';

const isOpen = inject('modalCart')

</script>

<style scoped>
.root {
    position: relative;
    z-index: 9999;
}
.modal {
    z-index: 9999;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.568);
    overflow-y: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal > div {
    background-color: #fff;
    padding: 50px;
    border-radius: 10px;
}
</style>