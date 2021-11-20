<template>
    <b-nav tabs>
        <b-nav-item exact to="/about">Sobre nosotros</b-nav-item>
        <b-nav-item exact to="/secret">Acceso limitado</b-nav-item>
        <b-nav-item exact to="/secret/users">Lista de usuarios</b-nav-item>
        <b-nav-item @click="signOut">Cerrar sesión</b-nav-item>
    </b-nav>
</template>

<script>
import { BNav, BNavItem } from 'bootstrap-vue'
import { mapMutations } from 'vuex';

export default {
    name: "GuestNav",
    components:{
        BNav, BNavItem
    },
    methods:{
        ...mapMutations('auth', ['logout']),
        signOut(){
            this.logout();
            this.$router.push('/login')
        }
    }
}
</script>