<template>
    <h4>
        <slot></slot> <span></span>
    </h4>
</template>

<style scoped>
h4 {
    margin: 20px 15px;
    font-weight: bold;
}

span {
    background-color: var(--secondary);
    height: 2px;
    width: 30px;
    display: block;
}
</style>