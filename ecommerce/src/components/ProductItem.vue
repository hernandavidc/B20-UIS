<template>
    <b-card
        :title="product.title"
        :img-src="product.image"
        :img-alt="product.title"
        img-top
        class="mb-2"
    >
        <p> COL $. {{ product.price }} </p>
        <b-button block
            variant="danger"
            @click="$emit('clickBtn', product)"
        >
            Agregar al carrito
        </b-button>
    </b-card>
</template>

<script>
export default {
    name: 'ProductItem',
    props:{
        product: {
            type: Object,
            required: true
        }
    }
}
</script>