<template>
    <div class="nav">
        <div class="logo">
            <img src="@/assets/logo.png" alt="">
            <span> R E D B R I C K </span>
        </div>
        <div class="navelements">
            <router-link to="/">Toys</router-link>
            <router-link to="/">
                <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 7H7V11H11V7Z" fill="currentColor" />
                        <path d="M11 13H7V17H11V13Z" fill="currentColor" />
                        <path d="M13 13H17V17H13V13Z" fill="currentColor" />
                        <path d="M17 7H13V11H17V7Z" fill="currentColor" />
                    </svg>Catalogue</span>
            </router-link>
            <router-link to="/">Charactères</router-link>
            <router-link to="/">Brand</router-link>
            <div class="flex">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM14.8055 18.4151C17.1228 17.4003 18.7847 15.1667 18.9806 12.525C18.1577 12.9738 17.12 13.3418 15.9371 13.598C15.7882 15.4676 15.3827 17.1371 14.8055 18.4151ZM9.1945 5.58487C7.24725 6.43766 5.76275 8.15106 5.22208 10.244C5.4537 10.4638 5.84813 10.7341 6.44832 11.0008C6.89715 11.2003 7.42053 11.3798 8.00537 11.5297C8.05853 9.20582 8.50349 7.11489 9.1945 5.58487ZM10.1006 13.9108C10.2573 15.3675 10.5852 16.6202 10.9992 17.5517C11.2932 18.2133 11.5916 18.6248 11.8218 18.8439C11.9037 18.9219 11.9629 18.9634 12 18.9848C12.0371 18.9634 12.0963 18.9219 12.1782 18.8439C12.4084 18.6248 12.7068 18.2133 13.0008 17.5517C13.4148 16.6202 13.7427 15.3675 13.8994 13.9108C13.2871 13.9692 12.6516 14 12 14C11.3484 14 10.7129 13.9692 10.1006 13.9108ZM8.06286 13.598C8.21176 15.4676 8.61729 17.1371 9.1945 18.4151C6.8772 17.4003 5.21525 15.1666 5.01939 12.525C5.84231 12.9738 6.88001 13.3418 8.06286 13.598ZM13.9997 11.8896C13.369 11.9609 12.6993 12 12 12C11.3008 12 10.631 11.9609 10.0003 11.8896C10.0135 9.66408 10.4229 7.74504 10.9992 6.44832C11.2932 5.78673 11.5916 5.37516 11.8218 5.15605C11.9037 5.07812 11.9629 5.03659 12 5.01516C12.0371 5.03659 12.0963 5.07812 12.1782 5.15605C12.4084 5.37516 12.7068 5.78673 13.0008 6.44832C13.5771 7.74504 13.9865 9.66408 13.9997 11.8896ZM15.9946 11.5297C15.9415 9.20582 15.4965 7.11489 14.8055 5.58487C16.7528 6.43766 18.2373 8.15107 18.7779 10.244C18.5463 10.4638 18.1519 10.7341 17.5517 11.0008C17.1029 11.2003 16.5795 11.3798 15.9946 11.5297Z"
                        fill="currentColor" />
                </svg>
                <select>
                    <option value="" selected> FRA </option>
                    <option value=""> ENG </option>
                </select>
            </div>

        </div>
        <div class="user">
            <router-link to="/dashboard">
                <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                            fill="currentColor" />
                        <path
                            d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                            fill="currentColor" />
                    </svg> {{getCurrentUser()}} </span>
            </router-link>

        </div>
    </div>
</template>
<script setup>


const getCurrentUser = async () => {

    const response = await fetch('http://localhost:3005/api/user', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cookie: 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjYzMTU5MjkxLCJleHAiOjE2NjMyNDU2OTF9.NdvORxlq7z2HLXePYqCDluugQN-pO8pKEYOJtZ8iGQY; '

    })
    const res = await response.json()
    console.log(res)
    return res

}

</script>
<style scoped>
.nav {
    z-index: 1;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 80px;
    background-color: #eee;
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
    gap: 15px;
}

a>span>svg {
    transform: translateY(-8%);
}

select {
    border: none;
    background: none;
}

.flex svg {
    transform: translateY(20%);
}

.user {
    border-left: 1px solid #ccc;
}
</style>