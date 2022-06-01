<template>
    <div class="card">
        <img :src="url" :alt="alt">

        <div class="details">
            <small> {{category}} </small>
            <p><strong> {{title}} </strong> </p>
            <p style="color: gray;"> PRICE : </p>
            <div class="prices">
                <span> {{price}} € </span>
                <strike> {{strikeprice}} € </strike>
            </div>
        </div>
        <button>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z"
                    fill="white" />
            </svg>
        </button>
    </div>
</template>
    
<script setup>


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


</script>
    
<style>
.card {
    background-color: white;
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

.prices span {
    font-weight: bold;
    font-size: 1.5em;
}

strike {
    color: gray;
}

button {
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 50%;
    background-color: var(--secondary);
}
</style>