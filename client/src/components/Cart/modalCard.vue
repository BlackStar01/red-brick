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
                <slot name="reduceQuantity"></slot>
                <span> x {{ quantity }} </span>
                <slot name="addQuantity"></slot>
            </div>
        </div>
        <div class="right">
            <p> <strong>{{ computedPrice }}</strong> €</p>
            <slot name="btnDelete"></slot>
        </div>
    </div>
</template>

<script setup>

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
.right p {
    width: 120px;
}
.quantity span {
    margin: 0px 20px;
}
</style>