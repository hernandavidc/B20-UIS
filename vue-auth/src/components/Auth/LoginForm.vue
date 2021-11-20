<template>
    <b-form class="mt-5" @submit.prevent="$emit('login')">
        <b-form-group
            label="Correo"
            description="Nunca compatiremos tu correo con otras personas."
        >
            <b-form-input
                id="email"
                name="email"
                v-model="user.email"
                type="email"
                placeholder="Introduce el email de la cuenta"
                v-validate="'required|email'"
                :state="validateState('email')"
                required
            ></b-form-input>
            <b-form-invalid-feedback>
                {{ errors.first('email') }}
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            label="Contraseña"
        >
            <b-form-input
                id="password"
                name="password"
                v-model="user.password"
                type="password"
                placeholder="Introduce la contraseña de usuario"
                v-validate="'required|min:6'"
                :state="validateState('password')"
                required
            >
            </b-form-input>
            <b-form-invalid-feedback>
                {{ errors.first('password') }}
            </b-form-invalid-feedback>

            <b-button
                class="mt-4"
                variant="primary"
                type="submit"
                :disabled="errors.any() || !user.password"
            > Iniciar sesión </b-button>
        </b-form-group>
    </b-form>
</template>

<script>
import { BForm, BFormGroup, BFormInvalidFeedback, BFormInput, BButton } from 'bootstrap-vue'
import ValidationMixin from '@/mixins/validation'

export default {
    name: "LoginForm",
    components: {
        BForm, BFormGroup, BFormInvalidFeedback, BFormInput, BButton
    },
    mixins: [ ValidationMixin ],
    props:{
        user: {
            type: Object,
            required: true,
        }
    }
}
</script>