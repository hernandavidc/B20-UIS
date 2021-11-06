<template>
    <div>
        <h1>Resultados</h1>
        <div class="alert alert-success text-center">
            Puntos computados: {{ result }}
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    name: "ShowTotals",
    computed: {
        ...mapState(['counter']),
        result(){
            return ` ${ this.counter * 5 } pts`
        }
    },
    created(){
        console.log(this.$store.state);
    }
}
</script>