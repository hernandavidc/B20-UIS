Vue.component('watcher', {
    template: `
        <div>
            <h1> Carga dinamica de componentes</h1>
            <button 
                @click="getUserdata"
            > 
                Solicitar data del sevidor
            </button>
            <p> User actual: {{ user }} </p>
            <p> User anterior: {{ oldUser }} </p>
        </div>
    `,
    data(){
        return {
            user: null,
            oldUser: null
        }
    },
    watch: {
        user(newValue, oldValue){
            this.user = newValue;
            this.oldUser = oldValue;
        }
    },
    methods: {
        async getUserdata(){
            const data = await fetch('https://randomuser.me/api/');
            const json = await data.json();
            const user = json.results[0];
            
            this.user = `${ user.name.title } ${ user.name.first } ${ user.name.last }`
        }
    }

})