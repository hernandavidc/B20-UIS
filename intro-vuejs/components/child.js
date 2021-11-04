Vue.component('child', {
    template: `
        <div>
            <h1> Acceso datos de comp hijo </h1>
        </div>
    `,
    data(){
        return {
            childData: "Info del componente hijo",
            childName: "Felix"
        }
    },
    methods: {
        showName(){
            alert("Saludos ", this.childName);
        }
    }
})