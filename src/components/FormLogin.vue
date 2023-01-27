<template>
    <div class="login-container">
        <div class="form-login">
            <div class="optionslogin">
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
                        <router-link to="/register">
                                <button type="submit" id="cancel">
                                    Cadastre-se
                                </button>
                            </router-link>
                        <button type="submit" id="register">
                            Entrar
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import Message from '../components/Message.vue'
    import SliderRegister from '../components/SliderRegister.vue'
    export default {
        name:"login",
        components: {
            SliderRegister,
                Message
        },
        data(){
            return{
                email: null,
                password: null,
                msgData: null,
                classMessage: null
            }
        },
        methods:{
            async login(e){
                e.preventDefault()

                const dataLogin = {
                    email: this.email,
                    password: this.password,

                }
                const jsonData = JSON.stringify(dataLogin)

                await fetch("http://localhost:8080/auth/login",{
                    method: "POST",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body: jsonData
                }).then((resp) => resp.json()).then((data)=>{
                    let auth = false

                    if(data.error){
                        this.msgData = data.error,
                        this.classMessage = "error"
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
    .login-container{
        border: solid 3px #000;
        max-height: 80vh;
        max-width: 60vh;
        margin: 4rem auto;
        text-align: center;
        display: flex;
        border-radius: 35px;
    }
    .form-login{
        margin: 0 auto;
        border-radius: 30px;
    }
    .form-container{
        max-width: 550px;
        margin: 0px auto;
    }
    #user-form{
        width: 100%;
        padding: 2rem;
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
        cursor: pointer;
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
        padding-left: 20%;
        justify-content: center;
        /* background-color: red; */
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