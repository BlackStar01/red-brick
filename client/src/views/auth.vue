<template>
        <div class="auth">
                <div v-if="action === 'register'" class="register">
                        <div class="top">
                                <img src="@/assets/logo.png" alt="logo" />
                                <h3> RED REGISTER </h3>
                        </div>
                        <forminput class="login_input" :svg_value="inputs.register.firstname.svg"
                                :placeholder="inputs.register.firstname.placeholder"
                                :type="inputs.register.firstname.type">
                        </forminput>
                        <forminput class="register_input" :svg_value="inputs.register.lastname.svg"
                                :placeholder="inputs.register.lastname.placeholder"
                                :type="inputs.register.lastname.type">
                        </forminput>
                        <forminput class="register_input" :svg_value="inputs.register.email.svg"
                                :placeholder="inputs.register.email.placeholder" :type="inputs.register.email.type">
                        </forminput>
                        <forminput class="register_input" :svg_value="inputs.register.telephone.svg"
                                :placeholder="inputs.register.telephone.placeholder"
                                :type="inputs.register.telephone.type">
                        </forminput>
                        <!-- <vue-tel-input v-model="phone"></vue-tel-input> -->
                        <forminput class="register_input" :svg_value="inputs.register.addresse.svg"
                                :placeholder="inputs.register.addresse.placeholder"
                                :type="inputs.register.addresse.type">
                        </forminput>
                        <forminput class="register_input" :svg_value="inputs.register.code.svg"
                                :placeholder="inputs.register.code.placeholder" :type="inputs.register.code.type">
                        </forminput>
                        <forminput class="register_input" :svg_value="inputs.register.complement.svg"
                                :placeholder="inputs.register.complement.placeholder"
                                :type="inputs.register.complement.type">
                        </forminput>
                        <forminput class="register_input" :svg_value="inputs.register.password.svg"
                                :placeholder="inputs.register.password.placeholder"
                                :type="inputs.register.password.type">
                        </forminput>
                        <forminput class="register_input" :svg_value="inputs.register.confirmPassword.svg"
                                :placeholder="inputs.register.confirmPassword.placeholder"
                                :type="inputs.register.confirmPassword.type">
                        </forminput>
                        <formbutton :type="'submit'"> Register </formbutton>
                </div>
                <form v-if="action === 'forgot_password'">
                        <p>forgot</p>
                </form>
                <loader v-if="loading"></loader>
                <!-- This is the login  -->
                <form v-if="action === 'login'" :onsubmit="try_login" class="login">
                        <div class="top">
                                <img src="@/assets/logo.png" alt="logo" />
                                <h3> RED LOGIN </h3>
                        </div>
                        <formfeedback v-if="message !== ''"
                                :svg_value="'M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z'"
                                :feedback="feedback"> {{ message }}
                        </formfeedback>
                        <forminput class="login_input" :svg_value="inputs.login.email.svg"
                                :placeholder="inputs.login.email.placeholder" :type="inputs.login.email.type">
                        </forminput>
                        <forminput class="login_input" :svg_value="inputs.login.password.svg"
                                :placeholder="inputs.login.password.placeholder" :type="inputs.login.password.type">
                        </forminput>
                        <small :onclick="forgot"> Forgot my password ? </small><br><br>
                        <formbutton :type="'submit'"> Login </formbutton>
                        <br><br>
                        <GoogleLogin class="googleLogin" :callback="callback">
                                <formbutton class="btnGoogleLogin" :type="'submit'">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.242"
                                                        fill="white" />
                                        </svg>
                                        <span>Login with Google</span>
                                </formbutton>
                        </GoogleLogin>
                        <small :onclick="() => action = 'register'"> I don't have yet an account ! </small>
                </form>
                <button v-if="action === 'login'" @click="yourLogoutFunction"> logout </button>
                <span v-if="action === ''"></span>
        </div>

</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import forminput from '@/components/Form/forminput.vue'
import formbutton from '@/components/Form/formbtn.vue'
import formfeedback from '@/components/Form/formfeedback.vue';
import loader from '@/components/loader.vue'
import { googleOneTap, decodeCredential } from "vue3-google-login"
import { check_mail } from '../services/utils/utils';
import { googleLogout } from "vue3-google-login"

const action = ref('login')
const phone = ref('')

const route = useRoute();
const router = useRouter()

const feedback = ref('error')
const message = ref('')
const loading = ref(false)

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
        const data_login = { email: inputs[0].childNodes[1].value, password: inputs[1].childNodes[1].value }
        if (check_mail(data_login.email)) {
                const response = await fetch('http://localhost:3005/api/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data_login)
                })
                const is_user = response.status === 201 ? true : false
                if (is_user) {
                        const res = await response.json()
                        message.value = res.message
                        feedback.value = 'success'
                        window.localStorage.setItem('token', res.token);
                        loading.value = true
                        action.value = ''
                        setTimeout(() => {
                               router.push('/') 
                        }, 2000);
                }
                else {
                        
                        message.value = "Failed";
                        feedback.value = 'error';
                }
        }
}

const forgot = () => {
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
        },
        register: {
                firstname: {
                        type: 'text',
                        placeholder: 'First name',
                        svg: 'M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z'
                },
                lastname: {
                        type: 'text',
                        placeholder: 'Last name',
                        svg: 'M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z'
                },
                email: {
                        type: 'email',
                        placeholder: 'Mail address',
                        svg: 'M16.999,4.975L16.999,4.975C16.999,4.975,16.999,4.975,16.999,4.975c-0.419-0.4-0.979-0.654-1.604-0.654H4.606c-0.584,0-1.104,0.236-1.514,0.593C3.076,4.928,3.05,4.925,3.037,4.943C3.034,4.945,3.035,4.95,3.032,4.953C2.574,5.379,2.276,5.975,2.276,6.649v6.702c0,1.285,1.045,2.329,2.33,2.329h10.79c1.285,0,2.328-1.044,2.328-2.329V6.649C17.724,5.989,17.441,5.399,16.999,4.975z M15.396,5.356c0.098,0,0.183,0.035,0.273,0.055l-5.668,4.735L4.382,5.401c0.075-0.014,0.145-0.045,0.224-0.045H15.396z M16.688,13.351c0,0.712-0.581,1.294-1.293,1.294H4.606c-0.714,0-1.294-0.582-1.294-1.294V6.649c0-0.235,0.081-0.445,0.192-0.636l6.162,5.205c0.096,0.081,0.215,0.122,0.334,0.122c0.118,0,0.235-0.041,0.333-0.12l6.189-5.171c0.099,0.181,0.168,0.38,0.168,0.6V13.351z'
                },
                telephone: {
                        type: 'tel',
                        placeholder: 'Tel number',
                        svg: 'M13.372,1.781H6.628c-0.696,0-1.265,0.569-1.265,1.265v13.91c0,0.695,0.569,1.265,1.265,1.265h6.744c0.695,0,1.265-0.569,1.265-1.265V3.045C14.637,2.35,14.067,1.781,13.372,1.781 M13.794,16.955c0,0.228-0.194,0.421-0.422,0.421H6.628c-0.228,0-0.421-0.193-0.421-0.421v-0.843h7.587V16.955z M13.794,15.269H6.207V4.731h7.587V15.269z M13.794,3.888H6.207V3.045c0-0.228,0.194-0.421,0.421-0.421h6.744c0.228,0,0.422,0.194,0.422,0.421V3.888z'
                },
                addresse: {
                        type: 'text',
                        placeholder: 'Address',
                        svg: 'M15.971,7.708l-4.763-4.712c-0.644-0.644-1.769-0.642-2.41-0.002L3.99,7.755C3.98,7.764,3.972,7.773,3.962,7.783C3.511,8.179,3.253,8.74,3.253,9.338v6.07c0,1.146,0.932,2.078,2.078,2.078h9.338c1.146,0,2.078-0.932,2.078-2.078v-6.07c0-0.529-0.205-1.037-0.57-1.421C16.129,7.83,16.058,7.758,15.971,7.708z M15.68,15.408c0,0.559-0.453,1.012-1.011,1.012h-4.318c0.04-0.076,0.096-0.143,0.096-0.232v-3.311c0-0.295-0.239-0.533-0.533-0.533c-0.295,0-0.534,0.238-0.534,0.533v3.311c0,0.09,0.057,0.156,0.096,0.232H5.331c-0.557,0-1.01-0.453-1.01-1.012v-6.07c0-0.305,0.141-0.591,0.386-0.787c0.039-0.03,0.073-0.066,0.1-0.104L9.55,3.75c0.242-0.239,0.665-0.24,0.906,0.002l4.786,4.735c0.024,0.033,0.053,0.063,0.084,0.09c0.228,0.196,0.354,0.466,0.354,0.76V15.408z'
                },
                code: {
                        type: 'number',
                        placeholder: 'Postal code',
                        svg: 'M10,0.186c-3.427,0-6.204,2.778-6.204,6.204c0,5.471,6.204,6.806,6.204,13.424c0-6.618,6.204-7.953,6.204-13.424C16.204,2.964,13.427,0.186,10,0.186z M10,14.453c-0.66-1.125-1.462-2.076-2.219-2.974C6.36,9.797,5.239,8.469,5.239,6.39C5.239,3.764,7.374,1.63,10,1.63c2.625,0,4.761,2.135,4.761,4.761c0,2.078-1.121,3.407-2.541,5.089C11.462,12.377,10.66,13.328,10,14.453z'
                },
                complement: {
                        type: 'text',
                        placeholder: 'Additional address',
                        svg: 'M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589'

                },
                password: {
                        type: 'password',
                        placeholder: 'Password',
                        svg: 'M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878'
                },
                confirmPassword: {
                        type: 'password',
                        placeholder: 'Confirm password',
                        svg: 'M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878'
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

small:focus,
small:hover {
        color: var(--secondary);
        text-decoration: underline;
}
</style>