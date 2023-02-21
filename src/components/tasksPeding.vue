<template>
     <div class="container">
        <div v-for="(task, index) in tasks" :key="index">
            <div class="cardTask">
                <div>
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
            </div>
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
    }
    .cardTask{
        margin: 5px;
        padding: 10px;
        border-radius: 5px;
        width: 290px;
        display: flex;
        justify-content: space-between;
        box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, .212);
    }
    .cardActions{
        display: flex;
        flex-direction: column;
        text-align: end;
    }
    .card-buttons button{
        padding: 5px;
        margin: 3px;
        border-radius: 5px;
        border: none;
    }
    .desmarcar{
        background-color: #76ec99;
    }
    .remover{
        background-color: #ff7f8a;
    }
</style>