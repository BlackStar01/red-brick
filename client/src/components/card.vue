<template>
    <div class="card">
        <img :src="url" :alt="alt">

        <div class="details">
            <div class="subdetails">
                <small> {{ category }} </small>
                <average></average>
            </div>
            <p><strong> {{ title }} </strong> </p>
            <!-- <p style="color: gray;"> PRICE : </p> -->
            <div class="prices">
                <span> {{ price }} € </span>
                <s> {{ strikeprice }} € </s>
            </div>
        </div>

        <svg @click="fillsvg" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path :fill-rule="like" clip-rule="evenodd"
                d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z"
                fill="red" />
        </svg>
        <button class="cart" @click="add_to_cart()">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z"
                    fill="white" />
            </svg>
        </button>
        <button class="compare" @click="add_to_compare()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 13V11.5H10V9.5H16V8L19 10.5L16 13Z" fill="white" />
                            <path d="M8 17V15.5H14V13.5H8V12L5 14.5L8 17Z" fill="white" />
                        </svg>
        </button>
        
    </div>
</template>
    
<script setup>
import { ref } from 'vue';
import average from './average.vue';

defineProps({
    url: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    strikeprice: {
        type: Number,
        default: 0,
    },
})

const like = ref('evenodd')
const fillsvg = () => {
    if (like.value === '' ) {
        like.value = 'evenodd'
        send_something_to_content('dis_like')
    }
    else {
        like.value = ''
        send_something_to_content('handle_like')
    }
}
const add_to_cart = () => {
    send_something_to_content('item_clicked')
}
const send_something_to_content = defineEmits(['handle_like', 'dis_like', 'item_clicked'])

</script>
    
<style scoped>
.card {
    background-color: white;
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 30px;
    margin: 10px;
    position: relative;
}

small {
    color: gray;
}

img {
    width: 100%;
    height: 300px;
    margin-bottom: 10px;
}

.details {
    border-top: 1px solid #ccc;
}
.details strong {
    font-size: 1.1em;
}
.details p {
    width: 60%;
}
.subdetails {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.prices span {
    font-weight: bold;
    font-size: 1.5em;
}

strike {
    color: gray;
}

.cart {
    cursor: pointer;
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 50%;
    background-color: var(--secondary);
}
.compare {
    cursor: pointer;
    position: absolute;
    bottom: 15px;
    right: 75px;
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 50%;
    background-color: var(--secondary);
}


</style>