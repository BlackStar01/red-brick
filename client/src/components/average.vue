<template>
    <div class="rating">
        <input type="radio" v-model="grade" @click="defineGrade()" value="5" id="5"><label for="5">☆</label>
        <input type="radio" v-model="grade" @click="defineGrade()" value="4" id="4"><label for="4">☆</label>
        <input type="radio" v-model="grade" @click="defineGrade()" value="3" id="3"><label for="3">☆</label>
        <input type="radio" v-model="grade" @click="defineGrade()" value="2" id="2"><label for="2">☆</label>
        <input type="radio" v-model="grade" @click="defineGrade()" value="1" id="1"><label for="1">☆</label>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const grade = ref(0)

const defineGrade = () => {
    setTimeout(() => {
        console.log(grade.value)
    }, 1);
}

</script>

<style scoped>
.rating {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
}

.rating>input {
    display: none;
}

.rating>label {
    position: relative;
    width: 1.1em;
    font-size: 20px;
    color: var(--secondary);
    cursor: pointer;
}

.rating>label::before {
    content: "\2605";
    position: absolute;
    opacity: 0;
}

.rating>label:hover:before,
.rating>label:hover~label:before {
    opacity: 1 !important;
}

.rating>input:checked~label:before {
    opacity: 1;
}

.rating:hover>input:checked~label:before {
    opacity: 0.4;
}
</style>