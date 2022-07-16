<template>
    <div class="card">
        <div class="left">
            <img :src="image" alt="">
        </div>
        <div class="center">
            <p><strong>
                    <slot></slot>
                </strong></p>
            <div class="quantity">
                <button @click="reduceQuantity"> - </button>
                <span> {{ quantity }} </span>
                <button @click="addQuantity"> + </button>
            </div>
        </div>
        <div class="right">
            <p> {{ computedPrice }} €</p>
            <svg @click="deleteItem" class="trashIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z"
                    fill="currentColor" />
                <path d="M9 9H11V17H9V9Z" fill="currentColor" />
                <path d="M13 9H15V17H13V9Z" fill="currentColor" />
            </svg>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    image: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    computedPrice: {
        type: Number,
        required: true
    },
    deleteItem: {
        type: Function,
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
    margin: 10px 0px;
    border: 1px solid #ccc;
    border-radius: 10px;
}

.center {
    padding: 0px 40px;
}

.center p {
    padding-bottom: 10px;
}

.right,
.left {
    display: grid;
    place-items: center;
    text-align: center;
}
.right {
    display: flex;
}
.trashIcon {
    margin: 0px 25px;
}
.trashIcon:hover {
    cursor: pointer;
    color: var(--secondary);
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