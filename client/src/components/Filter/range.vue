<template>
    <div class="range">
        <div class="values">
            <span> <small> From : </small> {{ minvalue }} € </span>
            <span> <small> Up To : </small> {{ maxvalue }} € </span>
        </div>
        <div class="inputs">
            <input type="range" @mouseup="handle_min" min="0" :max="Math.trunc(max / 2)" v-model="minvalue" step="10">
            <input type="range" @mouseup="handle_max" :min="Math.trunc((max / 2) + 10)" :max="max" v-model="maxvalue"
                step="10">
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


input[type=range] {
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 12.8px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: green;
  border-radius: 25px;
  border: 0px solid #000101;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 12.8px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: var(--secondary);
  border-radius: 25px;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 8px;
  width: 8px;
  border-radius: 7px;
  background: white;
  cursor: pointer;
}


</style>