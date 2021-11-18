<template>
    <div v-if="products.length">
        <h1>Nuestros productos</h1>
        <paginate
            name="products"
            :list="products"
            :per="perPage"
            class="row"
        >
            <b-col cols="4"
                v-for="item in paginated('products')"
                :key="item.id"
                class="d-inline-block"
            >
                <product-item :product="item" @clickBtn="addProductToCart"></product-item>
            </b-col>
        </paginate>
        <paginate-links for="products"
            :classes="{
                'ul': ['pagination', 'justify-content-center'],
                'li': 'page-item',
                'li > a': 'page-link'
            }"
        ></paginate-links>
    </div>
    <b-alert v-else variant="primary" show> No hay productos disponibles en la tienda </b-alert>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

import ProductItem from './ProductItem.vue';

export default {
    name: "ProductsList",
    data(){
        return {
            paginate: ['products'],
            perPage: 6
        }
    },
    components: {
        ProductItem
    },
    computed: {
        ...mapState('products', ['products'])
    },
    created(){
        this.fetchProducts();
    },
    methods: {
        ...mapActions('products', ['fetchProducts']),
        ...mapMutations('cart', ['addProduct']),
        addProductToCart(product){
            this.addProduct(product);
        }
    }
}
</script>