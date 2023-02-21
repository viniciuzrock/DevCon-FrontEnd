<template>
    <div class="container">

        <div class="login-container">
            <div class="optionslogin">
                <div>
                    <!-- <img src="../../public/img/logo2.png" alt=""> -->
                </div>
                <div class="msgField">
                    <Message :msgData="msgData" :classMessage="classMessage"/>
                </div>
            </div>
            <div class="form-container">
                <form id="user-form" @submit="login($event)">
                    <div class="input-container">
                        <label for="email">E-mail</label>
                        <input type="email" name="email" class="email" v-model="email" placeholder="exemplo@gmail.com">
                    </div>
                    <div class="input-container">
                        <label for="password">Senha</label>
                        <input type="password" name="password" class="password" v-model="password" placeholder="******">
                    </div>
                    <div class="action-container">
                        <button type="submit" id="register">
                                <div v-if="request">
                                    <spinner-load/>
                                </div>
                                <div>
                                    Entrar
                                </div>
                        </button>
                        <p>Não possui uma conta? <router-link to="/register">Cadastre-se</router-link></p>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import Message from '../components/Message.vue'
    import SliderRegister from '../components/SliderRegister.vue'
    import SpinnerLoad from './SpinnerLoad.vue'
    export default {
        name:"login",
        components: {
            SliderRegister,
                Message,
                SpinnerLoad
        },
        data(){
            return{
                email: null,
                password: null,
                msgData: null,
                classMessage: null,
                request:false
            }
        },
        methods:{
            async login(e){
                e.preventDefault()
                // this.request = true
                const dataLogin = {
                    email: this.email,
                    password: this.password,

                }
                const jsonData = JSON.stringify(dataLogin)

                // const a = await this.$store.dispatch("login", jsonData)
                await fetch("http://localhost:8080/auth/login",{
                    method: "POST",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body: jsonData
                }).then((resp) => resp.json()).then((data)=>{
                    let auth = false
                    this.request = true
                    if(data.error){
                        this.msgData = data.error,
                        this.classMessage = "error"
                        this.request = false
                    } else {
                        auth = true

                        this.msgData = data.msg,
                        this.classMessage = "success"
                        this.$store.commit("authenticate",{
                            token: data.token,
                            userId: data.userId
                        })
                    }

                    setTimeout(()=>{
                        if(!auth){
                            this.msgData = null
                        } else {
                            this.$router.push("home")
                            this.request = false
                        }
                    }, 2000)
                }).catch((err)=>{
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped>
    *{
        color: #162434;
    }
    .container{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #a8c0ff;
        background: -webkit-linear-gradient(to right, #3f2b96, #a8c0ff);
        background: linear-gradient(to right, #3f2b96, #a8c0ff);
    }
    .login-container{
        height: 80vh;
        /* width:36rem; */
        width:40%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 1rem;
        position: relative;
        background-color: #fff;
    }
    /* .form-login{
        margin: 0 auto;
        border-radius: 30px;
        padding: 10px;
    } */
    .form-container{
        /* max-width: 550px; */
        margin: 0px 20%;
    }
    /* #user-form{
        width: 100%;
        padding: 2rem;
        align-items: center;
    } */
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
        display: flex;
        flex-direction: column;
        justify-content:space-between;
    }
    .action-container button div{
        color: #fff;
    }
    .action-container button{
        width: 100%;
        padding: 0.7rem;
        margin-top: 2rem;
        height: 40px;
        border-radius: 10px;
        cursor: pointer;
    }
    #register {
        background-color: #6A27D7;
        color: #fff;
        border: #fff;
        transition: 0.5s;
        position: relative;
    }
    #register:hover{
        background-color: #4c00ff;
        transition: 0.5s;
    }
    .optionsContainer{
        /* background-color: red; */
        padding-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .msgField{
        width: 80%;
        height: 40px;
        display: flex;
        flex-direction: row;
        position: absolute;
        justify-content: center;
        top: 3%;
        right: 10%;
    }

    .loginField{
        width: 7em;
        height: 40px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-weight: 600;
        border: solid #162434;
    }
    .loginField a{
        text-decoration: none;
    }
</style>