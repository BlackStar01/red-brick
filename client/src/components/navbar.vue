<template>
    <div class="nav">
        <div class="logo">
            <img src="@/assets/logo.png" alt="">
            <span> R E D  B R I C K </span>
        </div>
        <div class="navelements">
            <router-link to="/">Toys</router-link>
            <router-link to="/"> 
                  <span><i class="gg-extension"></i> Catalogue</span>
            </router-link>
            <router-link to="/">Charactères</router-link>
            <router-link to="/">Brand</router-link>
            <select name="" id="">
                <option value="" selected> FRA </option>
                <option value=""> ENG </option>
            </select>
        </div>
        <div class="user">
            <router-link to="/"> 
                  <span><i class="gg-user"></i> Vital AGBANOU </span>
            </router-link>
            
        </div>
    </div>
</template>
    
<script setup>
    
</script>
    
<style scoped>
.nav {
    height: 80px;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
}
.logo {
    display: grid;
    place-items: center;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
}
img {
    height: 30px;
    width: 30px;
}
.navelements {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    place-items: center;
}
a {
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    text-decoration: none;
    color: inherit;
}
a>span {
    display: flex;
    flex-direction: row;
    gap: 25px;
}
a>span>i {
    transform: translateY(10%);
}
select {
    border: none;
    background: none;
}
.user {
    border-left: 1px solid #ccc;
}
</style>