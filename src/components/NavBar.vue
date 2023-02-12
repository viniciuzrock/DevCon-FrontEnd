<template>
    <div class="navbar-container">
        <div>
            logo
        </div>
        <nav>
            <ul>
                <li>Home</li>
                <li>Tarefas</li>
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
                <button>
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
                console.log('AA');
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
                console.log(data.data.name);
            }).catch((err)=>{
                console.log(err);
            })

            console.log(data)
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
        list-style-type:none;
    }
    .userLogout{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
</style>