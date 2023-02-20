<template>
    <div class="navbar-container">
        <div>
            logo
        </div>
        <nav>
            <ul>
                <li>
                    <router-link to="/home">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link to="/tasks">
                        Tarefas
                    </router-link>
                </li>
                <li>Comunidade</li>
                <li>Configurações</li>
                <li>Sobre nós</li>
            </ul>
        </nav>
        <div class="userLogout">
            <h4>
                Olá {{ user }}
            </h4>
            <div>
                <button @click="logout($event)">
                    Sair
                </button>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        name:"NavBar",
        props:["user"],
        data(){
            return{
                user: "null"
            }
        },
        mounted(){
            this.getUser()
        },
        methods:{
            async getUser(){
                const data = {
                    userIdLogin: this.$store.getters.userId
                }

                const jsonData = JSON.stringify(data)

                await fetch("http://localhost:8080/user/getUser",{
                    method:"POST",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body: jsonData
                }).then((resp)=> resp.json()).then((data)=>{
                    this.user = data.data.name
                }).catch((err)=>{
                    console.log(err);
                })
            },
            async logout(e){
                e.preventDefault()
                this.$store.commit('logout')
                this.$router.push('/login')
            }
        }


    }
</script>

<style scoped>
    .navbar-container{
        width: 100%;
        height: 60px;
        background-color: #162434;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        align-items: center;
        color: #fff;
        padding: 0px 50px;
    }
    .navbar-container div{
    }
    .navbar-container nav{
        display: flex;
        flex-direction: row;
        list-style-type: none;
    }
    .navbar-container ul{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 40rem ;
    }
    .navbar-container li{
        /* margin-bottom: 2%; */
        list-style-type:none;
        text-align: center;
    }

    .navbar-container li:hover{
        background-color: #fff;
    }
    .userLogout{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 200px;
    }
    .userLogout button{
        padding: 5px;
        background-color: red;
        width: 50px;
        border-radius: 10px;
        height: 40px;
        cursor: pointer;
        transition: .5s;
    }
    .userLogout button:hover{
        background-color: #fff;
        border: solid 3px red;
        color: red;
        transition: .5s;
    }
</style>