<template>
<div>
    <h1>Componente de contador</h1>
    <button class="btn btn-success w-100 btn-lg"
        @click="increment(1)"
    >
        Incrementar
    </button>
    <div class="alert alert-primary text-center mt-3">
        {{ $store.state.counter }}
    </div>
    <button class="btn btn-danger w-100 btn-lg"
        @click="decrement(1)"
    >
        Decrementar
    </button>
</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    name: "Counter",
    computed: {
        // ...mapState(['counter'])
    },
    created(){
        console.log(this.$store.state);
    },
    methods: {
        ...mapMutations(['increment', 'decrement']),
    }
}
</script>