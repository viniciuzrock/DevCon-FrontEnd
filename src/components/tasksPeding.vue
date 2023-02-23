<template>
     <div class="container">
        <div v-for="(task, index) in tasks" :key="index">
            <div class="cardTask">
                <div class="card-header">
                    <div class="card-title">
                        <ion-icon name="time-outline"></ion-icon>
                        <h3>{{ task.name }}</h3>
                    </div>
                    <span>{{ dataFormat }}</span>
                </div>
                <div class="card-middle">
                    <span>{{ task.description }}</span>
                </div>
                <div class="card-bottom">
                    <div class="card-buttons">
                        <button class="concluir">Concluir</button>
                        <button class="remover">Remover</button>
                    </div>
                </div>
            </div>

            <!-- <div class="cardTask">
                <div>
                    <div>
                        <ion-icon name="time-outline"></ion-icon>
                    </div>
                    <h3>{{ task.name }}</h3>
                    <span>{{ task.description }}</span>
                </div>
                <div class="cardActions">
                    <span>{{ dataFormat }}</span>
                    <div class="card-buttons">
                        <button class="desmarcar">Concluir</button>
                        <button class="remover">Remover</button>
                    </div>
                </div>
            </div> -->
            <!-- {{ tasks }} -->
        </div>
    </div>

</template>

<script>
    import moment from "moment"
    export default{
        data(){
            return{
                tasks:null,
                dataFormat:null
            }
        },
        created(){
            this.getTasks()
        },
        methods:{
            async getTasks(){
                await fetch("http://localhost:8080/tasks/getPedingTasks",{
                    method: "GET",
                    headers:{
                        "Content-type":"application/json"
                    }
                    }).then((resp) => resp.json()).then((data)=>{
                        this.tasks = data.tasks
                        this.dataFormat = moment(data.tasks.createdAt).format("DD/MM/YYYY")
                    }).then((resp)=>{
                    console.log(resp);
                }).catch((e)=>{
                    console.log(e);
                })
            }
        }


    }
</script>

<style scoped>
   .container{
        display: flex;
        padding: 5px;
        display: flex;
        flex-direction: column;
    }
    .cardTask{
        margin: 5px;
        padding: 10px;
        border-radius: 5px;
        width: 290px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, .212);
    }
    .card-header{
        display: flex;
        justify-content: space-between;
    }
    .card-title{
        display: flex;
        align-items: center;
        width: 90px;
    }
    ion-icon{
        font-size: 20px;
        color: #2c9ccf;
        margin-right: 5px;
    }
    .card-middle{
        width: 100%;
        padding: 2px;
    }
    .card-bottom{
        display: flex;
        justify-content: end;
    }
    .card-buttons button{
        padding: 5px;
        margin: 3px;
        border-radius: 5px;
        border: none;
    }
    .concluir{
        background-color: #76ec99;
        cursor: pointer;
        transition: 0.5s;
    }
    .concluir:hover{
        background-color: #00c71b;
        cursor: pointer;
        transition: 0.5s;
    }
    .remover{
        background-color: #ff7f8a;
        cursor: pointer;
        transition: 0.5s;
    }
    .remover:hover{
        background-color: #fc505f;
        cursor: pointer;
        transition: 0.5s;
    }
</style>