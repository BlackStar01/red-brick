<template>
    <div class="input">
        <div class="svg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path color="gray" fill-rule="evenodd" clip-rule="evenodd"
                    :d="svg_value"
                    fill="currentColor" />
            </svg>
        </div>
        <input :type="type" id="" :placeholder="placeholder">
    </div>
</template> 
    
<script setup>
defineProps({
    svg_value: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    }
})
</script>
    
<style scoped>
.input {
    margin: 10px 0px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
}
input {
    padding: 0px 20px;
    border: 0px;
    border-radius: 5px;
    outline: none;
    height: 50px;
}
.svg {

    padding: 0px 20px;
    display: grid;
    place-items: center;
}
</style>