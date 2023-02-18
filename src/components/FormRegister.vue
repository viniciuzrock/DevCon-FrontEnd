<template>
    <div class="form-register">
        <div class="form-header">
            <div class="msgField">
                <Message :msgData="msgData" :classMessage="classMessage"/>
            </div>
            <div class="loginButton">
                <button>
                    <router-link to="/login">
                        Entrar
                    </router-link>
                </button>
            </div>
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
                    <button type="submit" id="register">
                        <div v-if="request">
                            <spinner-load/>
                        </div>
                        <div>
                            Cadastrar
                        </div>
                    </button>
                    <!-- <button class="btn btn-primary input-group-btn loading">
                        Cadastrar
                    </button> -->
                </div>

            </form>
        </div>
    </div>

</template>
<script>
    import Message from './Message.vue';
    export default{
        components: {
            Message
        },
        name: "FormRegister",
        props: ["user"],
        data() {
            return {
                formName: this.user.name || null,
                formEmail: this.user.email || null,
                formPassword: this.user.password || null,
                formConfirmPassword: this.user.confirmPassword || null,
                msgData: null,
                classMessage: null,
                request:false
            };
        },
        methods: {
            async register(e) {
                e.preventDefault();
                this.request = true
                const formData = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    confirmPassword: this.confirmPassword
                };

                const jsonData = JSON.stringify(formData);
                await fetch("http://localhost:8080/auth/register", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: jsonData
                }).then((resp) => resp.json()).then((data) => {
                    let auth = false;
                    if (data.error) {
                        this.msgData = data.error
                        this.classMessage = "error"
                        this.request = false
                    } else {
                        let auth = true
                        this.msgData = data.msg
                        this.classMessage = "success"
                    }

                    this.$store.commit("authenticate",{
                        token:data.token,
                        userId:data.userId
                    })

                    setTimeout(()=>{
                        this.msgData = null
                        this.request = false
                        if(!data.error){
                            this.$router.push('home')
                        }
                    }, 2000)
                }).catch((err) => {
                    console.log(err);
                });
            }
        },
    }
</script>

<style scoped>
    *{
        color: #162434;
    }

    .form-register{
        width: 50%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 1rem;
        position: relative;
    }
    .form-header{
        display: flex;
        justify-content:end;
        margin-bottom: 3rem;
        width: 100%;
    }
    .msgField{
        width: 80%;
        height: 40px;
        display: flex;
        flex-direction: row;
        padding-left: 20%;
        z-index: 1;
        position: absolute;
        /* transform: translateX(-30%); */
        top: 3%;
        right: 25%;
    }

    .loginButton{
        display: flex;
        justify-content:end;
        font-weight: 600;
    }
    .loginButton button{
        border: none;
        border-radius: 5px;
        cursor: pointer;

    }
    .loginButton button a{
        border: none;
        background-color: #6A27D7;
        padding: 0.7rem 1.2rem;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.5s;
        text-decoration: none;
        font-weight: 500;
        color: #fff;
    }
    .loginButton button a:hover{
        background-color: #4c00ff;
        transition: 0.5s;
    }
    .form-container{
        /* max-width: 650px; */
        margin: 0px 20%;
    }
    #user-form{
        /* width: 100%; */
        /* padding: 2rem 8rem; */
        /* align-items: center; */
    }
    .input-container{
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;
        width: 100%;
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
        /* display: flex; */
        /* justify-content:space-between; */
    }
    .action-container button{
        width: 100%;
        padding: 0.7rem;
        border: none;
        border-radius: 10px;
        margin-top: 2rem;
        cursor: pointer;
    }
    .action-container button div {
        color: #fff;
    }
    #register{
        transition: 0.5s;
        background-color: #6A27D7;
        color: #fff;
        border: #fff;
    }
    #register:hover{
        background-color: #4c00ff;
        transition: 0.5s;
    }
</style>