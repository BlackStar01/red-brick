<template>
    <div class="card">
        <div class="left">
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="center">
            <p><strong> Nom du produit </strong></p>
            <div class="quantity">
                <button> - </button>
                <span> 5 </span>
                <button> + </button>
            </div>
        </div>
        <div class="right">
            <p> 50, 50 €</p>
        </div>
    </div>
</template>

<script setup>

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
    padding: 10px 20px;
}
</style>