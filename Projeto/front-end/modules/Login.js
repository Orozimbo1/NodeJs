import validator from 'validator'

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass)
    }

    init() {
        this.events()
    }

    events() {
        if(!this.form) return
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.validate(e)
        })
    }

    validate(e) {
        const el = e.target
        const inputEmail = el.querySelector('input[name="email"]')
        const inputSenha = el.querySelector('input[name="senha"]')
        let error = false

        // Validação
        // o emai precisa ser válido
        if(!validator.isEmail(inputEmail.value)) {
            alert('Email inválido')
            error = true
        }

        // A senha precisa ter entre 6 à 50 caracteres
        if(inputSenha.value.length < 6 || inputSenha.value.length > 50) {
            alert('A senha precisa ter entre 6 e 50 caracteres.')
            error = true
        }

        if(!error) el.submit()
    }
}