<script>
import axios from 'axios';

export default {
    data() {
        return {
            // Nome
            nome: '',
            inserimentoNome: false,
            lunghezzaNome: false,
            controlloPresenzaNumeri: false,
            // Email
            email: '',
            controlloChiocciola: false,
            // Messaggio
            messaggio: '',
            controlloMessaggio: false,
            // NewsLetter
            newsletter: false,

        }
    },
    methods: {
        invioForm(evento) {
            // SE il nome non viene compilato
            if (!this.nome) {
                evento.preventDefault();
                this.inserimentoNome = true;
            } else { this.inserimentoNome = false };
            // SE il nome ha meno di 2 caratteri o più di 15
            if (this.nome.length < 2 || this.nome.length >= 15) {
                evento.preventDefault();
                this.lunghezzaNome = true;
            } else { this.lunghezzaNome = false };
            // SE il nome contiene numeri al suo interno
            if (this.nome.includes("1") || this.nome.includes("2") || this.nome.includes("3") || this.nome.includes("4") || this.nome.includes("5") || this.nome.includes("6") || this.nome.includes("7") || this.nome.includes("8") || this.nome.includes("9") || this.nome.includes("0")) {
                evento.preventDefault();
                this.controlloPresenzaNumeri = true;
            } else { this.controlloPresenzaNumeri = false };
            // SE l'email non contiene la chiocciola - E - non contiene 2 chiocciole
            if (!this.email.includes("@") || this.email.includes("@@")) {
                evento.preventDefault();
                this.controlloChiocciola = true;
            } else { this.controlloChiocciola = false };
            // SE il messaggio non contiene almeno 15 caratteri
            if (this.messaggio.length < 15) {
                evento.preventDefault();
                this.controlloMessaggio = true;
            } else { this.controlloMessaggio = false };
            axios.post("http://127.0.0.1:8000/api/user/submit-form", {
                nome: this.nome,
                email: this.email,
                messaggio: this.messaggio,
                newsletter: this.newsletter,
            }).then(response => {
                console.log("dati inviati con successo", response.data);
            }).catch(error => {
                console.log("errore durante l'invio dei dati", error);
            });

        }
    }
}
</script>

<template>
    <form v-on:submit="invioForm">
        <!-- Nome -->
        <div>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" v-model="nome">
            <p v-if="inserimentoNome">Devi inserire il nome</p>
            <p v-if="lunghezzaNome">Il nome deve contenere minimo 2 e massimo 15 caratteri</p>
            <p v-if="controlloPresenzaNumeri">Il nome non può contenere numeri</p>
        </div>
        <!-- Email -->
        <div>
            <label for="email">Email</label>
            <input type="text" id="email" name="email" v-model="email">
            <p v-if="controlloChiocciola">La mail deve contenere una chiocciola</p>
        </div>
        <!-- Messaggio -->
        <div>
            <label for="messaggio">Messaggio</label>
            <textarea name="messaggio" id="messaggio" cols="30" rows="10" v-model="messaggio"></textarea>
            <p v-if="controlloMessaggio">Il messaggio deve contenere almeno 15 caratteri</p>
        </div>
        <!-- Checkbox -->
        <div>
            <label for="newsletter">Iscrivi alla NewsLetter</label>
            <input type="checkbox" v-model="newsletter" id="newsletter" name="newsletter">
        </div>
        <button type="submit">Invia</button>
    </form>
</template>
  
  