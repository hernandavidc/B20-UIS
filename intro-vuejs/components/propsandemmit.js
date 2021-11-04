Vue.component('propsandemmit', {
    template: `
        <div>
            <h1> Props y emmitir eventos del padre </h1>
            <p v-for="(option, index) in options" 
                :key="index"
                @click="$emit('save-option', option.id)"
            >
                {{ option.str }}
            </p>
        </div>
    `,
    props: {
        options: {
            type: Array,
            required: true
        }
    }
})