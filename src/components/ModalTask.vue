<template>
    <div class="modal" v-if="modal">
        <div class="modal-header">
            <h3>Nova Tarefa</h3>
        </div>
        <div class="modal-form">
            <form action="" @submit="criarTarefa($event)">
                <div class="input-container">
                    <label for="email">Título da tarefa</label>
                    <input type="text" name="name" class="tittletask" minlength="5" maxlength="50" v-model="tittletask" placeholder="Título" required>
                </div>
                <div class="input-container">
                    <label for="password">Descrição da tarefa</label>
                    <textarea placeholder="Descrição" v-model="desctask" minlength="5" maxlength="100" rows="3" required></textarea>
                </div>
                <div class="modal-bottom">
                    <button @click="$emit('fechaModal')" class="fecharModal">
                        Fechar
                    </button>
                    <button class="criarTarefa" type="submit">
                        Criar tarefa
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default{
        name:"ModalTask",
        props:["modal"],
        emits:['fechaModal'],
        data(){
            return{
                modal:true,
                tittletask: null,
                desctask: null,
            }
        },
        methods:{
            closeModal(){
                this.$emit('close')
                this.modal = false
                console.log('AAA');
            },
            async criarTarefa(e){
                const formData = {
                    name: this.tittletask,
                    description: this.desctask,
                    done:false
                };

                const jsonData = JSON.stringify(formData)
                await fetch("http://localhost:8080/tasks/addTask", {
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

    .modal{
        width: 600px;
        height: 300px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 1px 1px 20px 2px rgba(0, 0, 0, .212);
        padding: 10px;
    }
    .modal-header{
        display: flex;
        justify-content: space-between;
        margin-left: 10px;
    }
    .modal-form{
        display: flex;
        justify-content: center;
        margin: 10px;
        height: 80%;
    }
    .modal-form form{
        display: flex;
        flex-direction: column;
        width:100%;
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
    textarea{
        resize: none;
        background-color: #BEBEBE;
        border-radius: 10px;
        border: none;
        height: 40px;
        padding: 10px 10px;
        color: #000000;
        height: auto;

    }
    .input-container input{
        background-color: #BEBEBE;
        border-radius: 10px;
        border: none;
        height: 40px;
        padding: 10px 10px;
        color: #000000;
    }
    .modal-bottom{
        display: flex;
        justify-content: end;
    }
    .modal-bottom button{
        margin-left: 10px;
        padding: 5px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: 0.5s;
    }
    .criarTarefa{
        background-color: #76ec99;
        cursor: pointer;
        transition: 0.5s;
    }
    .criarTarefa:hover{
        background-color: #00c71b;
        cursor: pointer;
        transition: 0.5s;
    }
    .fecharModal{
        background-color: #ff7f8a;
        cursor: pointer;
        transition: 0.5s;
    }
    .fecharModal:hover{
        background-color: #fc505f;
        cursor: pointer;
        transition: 0.5s;
    }
</style>