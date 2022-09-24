<template>
    <div class="notfound">
        <div>
            <h3> 4. 0. 4 </h3>
            <p> Something wrong while loading this page </p>
            <small> Vous alllez être redirigés dans 0{{ compt }} {{ expression }} </small>
        </div>
    </div>
</template>
    
<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import { check_plural } from '../services/utils/utils';


const route = useRouter()
let compt = ref(6)
let expression = ref('secondes')

onMounted(() => {
    setInterval(() => {
        compt.value--
        expression.value = check_plural(compt.value, 'seconde')
    }, 1000);
    setTimeout(() => {
        route.push('/')
    }, 7000);
})

</script>

<style scoped>
.notfound {
    display: grid;
    height: 100vh;
    text-align: center;
    place-items: center;
}

h3 {
    font-size: 4em;
    font-weight: bolder;
}

p {
    font-size: 2em;
}
</style>