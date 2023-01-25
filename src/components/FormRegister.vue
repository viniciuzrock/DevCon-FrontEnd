<template>
    <div class="form-register">
        <div class="optionsContainer">
            Logomarca
        </div>
        <div class="form-container">
            <form id="user-form" @submit="register($event)">
                <div class="input-container">
                    <label for="name">Nome completo</label>
                    <input type="text" name="name" class="name" v-model="name" placeholder="Nome Exemplo">
                </div>
                <div class="input-container">
                    <label for="email">E-mail</label>
                    <input type="email" name="email" class="email" v-model="email" placeholder="exemplo@gmail.com">
                </div>
                <div class="input-container">
                    <label for="password">Senha</label>
                    <input type="password" name="password" class="password" v-model="password" placeholder="******">
                </div>
                <div class="input-container">
                    <label for="password">Confirme a senha</label>
                    <input type="password" name="confirmPassword" class="confirmPassword" v-model="confirmPassword" placeholder="******">
                </div>
                <div class="action-container">
                    <button type="submit" id="cancel">
                        Cancelar
                    </button>
                    <button type="submit" id="register">
                        Cadastrar
                    </button>
                </div>

            </form>
        </div>
    </div>

</template>
<script>
    export default{
        name:"FormRegister",
        props:["user"],
        data(){
            return{ //null => Qnd for reusar o form para edição, já trazer os dados do usuario
                formName: this.user.name || null,
                formEmail: this.user.email || null,
                formPassword: this.user.password || null,
                formConfirmPassword: this.user.confirmPassword || null,
            }
        },
        methods:{
            async register(e){
                e.preventDefault()

                const formData = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    confirmPassword: this.confirmPassword
                }
                console.log(formData);
                const jsonData = JSON.stringify(formData)

                await fetch("http://localhost:8080/users/register",{
                    method:"POST",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body: jsonData
                }).then((resp)=> resp.json()).then((data)=>{
                    console.log(data);
                }).catch((err)=>{
                    console.log(err);
                })
            }
        }

    }
</script>

<style scoped>
    .form-register{
        margin: auto;
        border-radius: 30;
    }
    .form-container{
        max-width: 550px;
        margin: auto;
    }
    #user-form{
        width: 100%;
        padding: 2rem 8rem;
        align-items: center;
    }
    .input-container{
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;

    }
    .input-container label{
        text-align: start;
        font-size: 15px;
        margin-bottom: 0.5rem;
    }
    .input-container input{
        background-color: #BEBEBE;
        border-radius: 10px;
        border: none;
        height: 40px;
        padding: 10px 10px;
        color: #000000;
    }
    .action-container{
        display: flex;
        justify-content:space-between;
    }
    .action-container button{
        width: 11.5em;
        height: 40px;
        border-radius: 10px;
        margin: 1px;
    }
    #cancel{
        color: #6A27D7;
        background-color: #fff;
        border: solid #6A27D7;
    }
    #register{
        background-color: #6A27D7;
        color: #fff;
        border: #fff;
    }
</style>