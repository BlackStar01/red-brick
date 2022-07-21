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
                                <h3> RED LOGIN </h3>
                        </div>
                        <forminput class="login_input" :svg_value="inputs.login.email.svg"
                                :placeholder="inputs.login.email.placeholder" :type="inputs.login.email.type">
                        </forminput>
                        <forminput class="login_input" :svg_value="inputs.login.password.svg"
                                :placeholder="inputs.login.password.placeholder" :type="inputs.login.password.type">
                        </forminput>
                        <formbutton :type="'submit'"> Login </formbutton>
                        <small :onclick="forgot"> Forgot my password ? </small>
                        <br><br>
                        <GoogleLogin class="googleLogin" :callback="callback">
                                <formbutton class="btnGoogleLogin" :type="'submit'">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 12C6 15.3137 8.68629 18 12 18C14.6124 18 16.8349 16.3304 17.6586 14H12V10H21.8047V14H21.8C20.8734 18.5645 16.8379 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.445 2 18.4831 3.742 20.2815 6.39318L17.0039 8.68815C15.9296 7.06812 14.0895 6 12 6C8.68629 6 6 8.68629 6 12Z"
                                                        fill="white" />
                                        </svg>
                                        <span>Login with Google</span>
                                </formbutton>
                        </GoogleLogin>

                        <small :onclick="go_register"> I don't have yet an account ! </small>
                </form>
                <button @click="yourLogoutFunction"> logout </button>
        </div>

</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import forminput from '@/components/Form/forminput.vue'
import formbutton from '@/components/Form/formbtn.vue'
import { googleOneTap, decodeCredential } from "vue3-google-login"
import axios from 'axios';
import { check_mail } from '../services/utils/utils';
import { googleLogout } from "vue3-google-login"

const action = ref('login')

const route = useRoute();
const router = useRouter()

/* console.log(`${route.name}`); */

onMounted(() => {
        googleOneTap()
                .then((response) => {
                        // This promise is resolved when user selects an account from the the One Tap prompt
                        console.log("Handle the response", response)
                })
                .catch((error) => {
                        console.log("Handle the error", error)
                })
})

const callback = (response) => {
        const userData = decodeCredential(response.code)
        console.log("Handle the response", userData)
}

const yourLogoutFunction = () => {
        googleLogout()
}

const try_login = async () => {
        let inputs = window.document.getElementsByClassName('login_input');
        const mail = inputs[0].childNodes[1].value
        const password = inputs[1].childNodes[1].value

        if (check_mail(mail)) {
                await axios.post('http://localhost:8000/api/login', {
                        "email": mail,
                        "password": password
                })
                        .then((response) => {
                                console.log(response)
                                localStorage.setItem('current_user', response.data);
                                /* router.push('/') */
                        })
                        .catch((error) => {
                                console.log(error);
                        })
        }
}

const forgot = () => {
        console.log('forgot')
        action.value = 'forgot_password'
}

const go_register = () => {
        action.value = 'register'
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

.googleLogin {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
}
.googleLogin span {
        margin: 0px 15px;
}
.btnGoogleLogin {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
}

small {
        cursor: pointer;
}

small:focus,
small:hover {
        color: var(--secondary);
        text-decoration: underline;
}
</style>