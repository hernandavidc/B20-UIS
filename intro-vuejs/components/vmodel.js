Vue.component('vmodel', {
    template: `
        <div>
            <h1> Bindeo de datos | v model </h1>
            <input v-model="name">
            <p> Hola, buenos días {{ name }} </p>
        </div>
    `,
    data(){
        return {
            name: "Hernan"
        }
    }
})