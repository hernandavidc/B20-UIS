Vue.component('conditionals', {
    template: `
        <div>
            <h1> Directivas v-if y v-show </h1>
            <button @click="changeStatus"> cambiar estado de la data </button>
            <p v-if="variable"> Tag controlado con v-if </p>
            <p v-show="variable"> Tag controlado con v-show </p>
        </div>
    `,
    data(){
        return {
            variable: true
        }
    },
    methods: {
        changeStatus(){
            this.variable = !this.variable;
        }
    }
})