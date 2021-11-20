import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import validatorEs from 'vee-validate/dist/locale/es';

Vue.use(VeeValidate, {
    fieldsBagName: 'veeFields'
});

Validator.localize('es', validatorEs);

Validator.extend('rude_password', {
    getMessage: field => `El campo ${field} no cumple con el criterio de seguridad`,
    validate: value => {
        let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return strongRegex.test(value)
    }
})