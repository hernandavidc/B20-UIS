<template>
    <div id="login">
        <login-form :user="user" @login="submit"></login-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

import LoginForm from '../components/auth/LoginForm.vue'

export default {
    name: "ViewLogin",
    components: {
        LoginForm
    },
    data(){
        return {
            user: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        ...mapActions('auth', ['signIn']),
        async submit(){
            const validateForm = this.$validator.validateAll();
            if(!validateForm){
                return false
            }

            await this.signIn(this.user).then(() =>{
                this.$router.push('/secret')
            })
        }
    }
}
</script>