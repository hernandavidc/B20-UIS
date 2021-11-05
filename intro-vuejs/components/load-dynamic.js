Vue.component('load-dynamic', {
    template: `
    <div>
        <h1> Carga dinamica de componentes</h1>
        <button v-for="component in components"
            :key="component"
            @click="changeCurrentComp(component)"
        > 
            {{ component }} 
        </button>
        <component :is="currentComp" />
    </div>
    `,
    data(){
        return {
            components: ['comp1', 'comp2', 'comp3'],
            currentComp: 'comp1'
        }
    },
    methods: {
        changeCurrentComp(strComp){
            console.log(strComp);
            this.currentComp = strComp;
        }
    }
})