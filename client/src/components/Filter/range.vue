<template>
    <div class="range">
        <div class="values">
            <span> <small> From : </small> {{ minvalue }} </span>
            <span> <small> Up To : </small> {{ maxvalue }} </span>    
        </div>
        <div class="inputs">
            <input  type="range" @mouseup="handle_min" min="0" :max="Math.trunc(max/2)" v-model="minvalue" step="10">
            <input type="range" @mouseup="handle_max" :min="Math.trunc((max/2)+10)" :max="max" v-model="maxvalue" step="10">
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { ref } from 'vue';

defineProps({
    max: {
        type: Number,
        required: true,
    }
})

const minvalue = ref(0)
const maxvalue = ref(0)
const handle_min = () => {
    return minvalue
}
const handle_max = () => {
    return maxvalue
}
</script>

<style scoped>
.range {
    margin: 40px 0px;
    padding: 0px 20px;

}
.values {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
}
.values span {
    text-align: center;
    width: 90%;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 10px 5px;
    background-color: #ccc;
}
small {
    color: gray;
    font-size: 0.8em;
}
.inputs {
    display: flex;
    max-width: 100%;
}
input {
    width: 100%; 
}
</style>