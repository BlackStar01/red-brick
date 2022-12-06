<template>
    <div class="notif" :data-feedback="props.feedback"
        :style="'background-color:' + renderColors(currentfeed, 'bg') + ';color :' + renderColors(currentfeed, 'text')  + ';border-left: 3px solid '">
        <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path :color="color" fill-rule="evenodd" clip-rule="evenodd" :d="props.svg_value" fill="currentColor" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                    fill="currentColor" />
            </svg>
            <slot></slot>
        </span>
    </div>
</template> 
    
<script setup>
import { ref, watchEffect } from 'vue';

const renderColors = (feedback, context) => {
    switch (context) {
        case 'bg':
            if (feedback === 'success') {
                return '#4FCE66';
            }
            else {
                return '#ff9696'
            }
            break;
        case 'text':
            if (feedback === 'success') {
                return '#004b23';
            }
            else {
                return '#dd0426';
            }
            break;
        default:
            return 'red';
    }
}

const props = defineProps({
    svg_value: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    },
})

const currentfeed = ref(props.feedback)
watchEffect(() => {
    alert(currentfeed.value)
})
</script>
    
<style scoped>
.notif {
    border-radius: 4px;
    padding: 15px 5px;
}

span {
    display: flex;
    flex-direction: row;
    align-items: center;
}

svg {
    margin: 0px 10px;
}
</style>