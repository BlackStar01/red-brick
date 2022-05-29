<template>
       <div class="nav">
        <div class="logo">
            <img src="@/assets/logo.png" alt="">
            <span> R E D  B R I C K </span>
        </div>
        <div class="navelements">
            <router-link to="/"> 
                    <span>
                        <span class="icon">
                            <i class="gg-swap"></i>
                        </span>
                       <span class="text"> Catalogue </span>
                    </span>
            </router-link>
            <router-link to="/"> 
                  <span><i class="gg-swap"></i>Catalogue</span>
            </router-link>
            <select name="" id="">
                <option value="" selected> FRA </option>
                <option value=""> ENG </option>
            </select>
        </div>
    </div>
</template>
    
<script setup>
    
</script>
    
<style scoped>
.nav {
    height: 60px;
    display: grid;
    grid-template-columns: 1fr 4fr;
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
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
}
.icon {
    height: 40px;
    width: 40px;
    display: grid;
    place-items: center;
    border: none;
    border-radius: 50%;
    background-color: var(--secondary);
}
.text {
    transform: translateY(22%);
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

a>span>span>i {
    transform: translate(-0%, 10%);
    color: white;
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