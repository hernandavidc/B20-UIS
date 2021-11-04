Vue.component('methods', {
    template: `
        <div>
            <h1> Methods </h1>
            <p @click="sayHi"> Hacer clic para ejecutar metodo </p>
        </div>
    `,
    data(){
        return {
            name: "Lupe",
            lastname: "De Los Angeles"
        }
    },
    computed: {
        fullName(){
            return `${ this.name } de la casa ${ this.lastname }`
        }
    },
    methods: {
        sayHi(){
            alert(`Hola ${ this.fullName }`);
        }
    }
})