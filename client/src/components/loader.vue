<template>
    <div class="loader"></div>
</template>

<script setup>

</script>

<style scoped>
.loader,
.loader:before,
.loader:after {
    width: 15px;
    /* update this to control the size */
    aspect-ratio: .5;
    display: grid;
    background: radial-gradient(var(--secondary) 68%, #0000 72%) center/100% 50% no-repeat;
    animation: load 1.2s infinite linear calc(var(--_s, 0)*.4s);
    transform: translate(calc(var(--_s, 0)*150%));
}

.loader:before,
.loader:after {
    content: "";
    grid-area: 1/1;
}

.loader:before {
    --_s: -1
}

.loader:after {
    --_s: 1
}

@keyframes load {
    20% {
        background-position: top
    }

    40% {
        background-position: bottom
    }

    60% {
        background-position: center
    }
}
</style>