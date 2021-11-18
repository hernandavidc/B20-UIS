<template>
<div id="cart" v-if="cart.length">
    <h1>Cart</h1>
    <b-table striped hover :items="cart" :fields="fields">
        <template #cell(actions)="item">
            <b-button variant="danger" @click="removeProductFromCart(item)">
                <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
            </b-button>
        </template>
    </b-table>
    <b-alert variant="success" show>
        Costo total: Cop. $ {{ totalCost }}
    </b-alert>
</div>
<b-alert variant="info" show v-else> No hay productos en tu carrito </b-alert>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
    name: 'Cart',
    data(){
        return {
            fields: ['title', 'qty', 'price', 'actions']
        }
    },
    computed: {
        ...mapState('cart', ['cart']),
        ...mapGetters('cart', ['totalCost'])
    },
    methods: {
        ...mapMutations('cart', ['removeProduct']),
        removeProductFromCart(row){
            // console.log(product);
            this.removeProduct(row.item)
        }
    }
}
</script>