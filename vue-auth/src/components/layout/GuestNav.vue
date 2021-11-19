<template>
    <b-nav tabs>
        <b-nav-item exact to="/">Iniciar sesión</b-nav-item>
        <b-nav-item exact to="/about">Sobre nosotros</b-nav-item>
    </b-nav>
</template>

<script>
import { BNav, BNavItem } from 'bootstrap-vue'

export default {
    name: "GuestNav",
    components:{
        BNav, BNavItem
    }
}
</script>