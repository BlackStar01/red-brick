<template>
    <div class="card">
        <div class="left">
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="center">
            <p><strong> <slot></slot> </strong></p>
            <div class="quantity">
                <button @click="reduceQuantity"> - </button>
                <span> {{quantity}} </span>
                <button @click="addQuantity"> + </button>
            </div>
        </div>
        <div class="right">
            <p> {{computedPrice}} €</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    quantity: {
        type: Number,
        required: true
    },
    computedPrice: {
        type: String,
        required: true
    }
})

</script>

<style scoped>
img {
    width: 50px;
}
.card {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    padding: 40px;
    background-color: var(--fourth);
    border: 1px solid #ccc;
    border-radius: 10px;
}
.center {
    padding: 0px 40px;
}
.center p {
    padding-bottom: 10px;
}
.right, .left {
    display: grid;
    place-items: center;
    text-align: center;
}
.quantity span {
    margin: 0px 20px;
}
button {
    padding: 8px 15px;
    border: 1px solid var(--secondary);
    color: var(--secondary);
    background-color: transparent;
    cursor: pointer;
}
</style>