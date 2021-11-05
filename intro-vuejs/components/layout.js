Vue.component('layout', {
    template: `
        <div>
            <h1> Component con slots </h1>
            <header class="header-x">
                <slot name="header"> </slot>
            </header>
            <main>
                <slot> </slot>
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>
    `,
})