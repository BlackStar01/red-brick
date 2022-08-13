<template>
    <div class="dashboard">
        <section class="left">
            <div class="welcome">
                <small> Welcome </small>
                <h3> Vital Warren </h3>
            </div>
            <router-link to="/dashboard/history"> History </router-link>
            <router-link to="/dashboard/security"> Security </router-link>
            <router-link to="/dashboard/adress"> Address </router-link>
            <router-link to="/dashboard/contact"> Contact us </router-link>
            <router-link to="/dashboard/Logout"> Logout </router-link>
        </section>
        <section class="right">
            <div class="right-content">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script setup>

</script>

<style scoped>

.dashboard {
    z-index: 0;
    display: grid;
}
.welcome {
    margin: 50px 0px;
}
.active {
    color: var(--secondary);
}
.left {
    position: fixed;
    width: 20%;
    min-height: 100vh;
    border-right: 1px solid #ccc;
    box-shadow: 1px 3px 5px #ccc;
    height: calc(100vh - 140px);
    overflow-x: hidden;
    text-align: center;
}
.left a {
    text-decoration: none;
    margin: 10px 0px;
    padding: 10px 0px;
    display: block;
}
.right {
    position: absolute;
    margin-left: 20%;
    width: 80%;
}
.right-content {
    width: 80%;
    margin: auto;
    padding: 40px 0px;
}
</style>