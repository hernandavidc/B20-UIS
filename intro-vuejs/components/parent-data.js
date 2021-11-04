Vue.component('parent-data', {
    template: `
        <div>
            <h1> Acceder data del padre </h1>
            <p> Data de la instancia principal: {{ $parent.dataParent }}</p>
        </div>
    `,
})