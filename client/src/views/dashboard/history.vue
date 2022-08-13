<template>
    <div class="history">
        <h3> History </h3>
        <div class="card">
            <div>
                <div class="card-top">
                    <small> Command ordererd the <strong>05/12/10</strong></small>
                    <small> Command n°<strong>1224-57895-563</strong></small>
                </div>
                <div class="card-main">
                    <div class="left">
                        <img src="../../assets/logo.png" alt="">
                        <h4>zrj zjrzlri ozir zorizrizp pzirjzzroj </h4>
                        <small> State : Delivered </small>
                    </div>
                    <div class="right">

                    </div>
                </div>
            </div>
            <div class="actions">
                <button> Rate this item </button>
                <button> Return </button>
                <a href="http://"> Get recipie </a>
            </div>
        </div>
        
    </div>
</template>

<script setup>
</script>

<style scoped>
.history {
    width: 90%;
    margin: auto;
}
h3 {
    padding: 20px 0px;
}
.card {
    margin: 20px 0px;
    padding: 20px 30px;
    border-left: 2px solid var(--secondary);
    background-color: white;
    display: grid;
    grid-template-columns: 60% 30%;
}

.card-top {
    padding-bottom: 20px;
}

.card-top small:nth-child(2) {
    float: inline-end;
}

.left {
    display: flex;
    align-items: center;
    position: relative;
}

.left img {
    margin-right: 40px;
    width: 40px;
}
.left small {
    position: absolute;
    right: 0;
}
.actions {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: center;
}
</style>