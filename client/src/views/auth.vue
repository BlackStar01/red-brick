<template>
        <div class="auth">
                <div v-if="action === 'register'">
                        <div>
                                <p>register</p>
                        </div>
                </div>
                <div v-if="action === 'forgot_password'">
                        <div>
                                <p>forgot</p>
                        </div>
                </div>
                <!-- This is the login  -->
                <form v-if="action === 'login'" :onsubmit="try_login">
                        <div class="top">
                                <img src="@/assets/logo.png" alt="" />
                                <h3> Login just here ...</h3>
                        </div>
                        <forminput :svg_value="inputs.login.email.svg" :placeholder="inputs.login.email.placeholder"
                                :type="inputs.login.email.type"></forminput>
                        <forminput :svg_value="inputs.login.password.svg"
                                :placeholder="inputs.login.password.placeholder" :type="inputs.login.password.type">
                        </forminput>
                        <formbutton :type="'submit'" > Login </formbutton>
                        
                        <small :onclick="forgot"> Forgot my password ? </small>
                </form>
        </div>

</template>
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import forminput from '@/components/Form/forminput.vue'
import formbutton from '@/components/Form/formbtn.vue'
const action = ref('login')

const route = useRoute();
console.log(`${route.name}`);

const try_login = () => {
        console.log("login ...")
}

const forgot = () => {
        console.log('forgot')
        action.value = 'forgot_password'
}

const inputs = ref({
        login: {
                email: {
                        type: 'email',
                        placeholder: 'Mail address',
                        svg: 'M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z'
                },
                password: {
                        type: 'password',
                        placeholder: 'Password',
                        svg: 'M19 7H17C17 4.79086 15.2091 3 13 3C10.7909 3 9 4.79086 9 7V10H18C19.6569 10 21 11.3431 21 13V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V13C3 11.3431 4.34315 10 6 10H7V7C7 3.68629 9.68629 1 13 1C16.3137 1 19 3.68629 19 7ZM18 12H6C5.44772 12 5 12.4477 5 13V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V13C19 12.4477 18.5523 12 18 12Z'
                }
        }
})

</script>
    
<style scoped>
.auth {
        display: grid;
        min-height: 100vh;
        place-items: center;
}

.top {
        text-align: center;
        padding: 40px 0px;
}

.auth img {
        width: 60px;
        height: 60px;
}
small {
        cursor: pointer;
}
small:focus, small:hover {
        color: var(--secondary);
        text-decoration: underline;
}
</style>