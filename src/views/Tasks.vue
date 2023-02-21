<template>
    <div >
        <NavBar></NavBar>
        <!-- <H2>
            tarefas
        </H2> -->
        <div v-if="loadRequest" class="load-container">
            <SpinnerRotation class="teste"/>
        </div>
        <div v-else>
            <div v-if="tasks.length > 0">
                <div class="novatarefa">
                    <button @click="openModal">
                        Nova tarefa
                    </button>
                    <div id="back" v-if="modal" >
                        <div class="modal">
                            <ModalTask @fechaModal="fecha"/>
                        </div>
                    </div>
                </div>
                <FormTasks :tasks="tasks"/>
            </div>
            <div v-else>
                <p>
                    Você não tem nenhuma tarefa.
                </p>
                <button>
                    Criar tarefa
                </button>

            </div>
        </div>
    </div>
</template>

  <script >
    import FormTasks from '../components/FormTasks.vue';
    import ModalTask from '../components/ModalTask.vue';
    import NavBar from '../components/NavBar.vue';
    import SpinnerLoad from '../components/SpinnerLoad.vue';
    import SpinnerRotation from '../components/SpinnerRotation.vue';
    export default{
      components: { NavBar, FormTasks, SpinnerLoad, SpinnerRotation, ModalTask },
      data(){
            return{
                tasks:[],
                loadRequest: false,
                modal:false
            }
        },
        created(){
            this.getTasks()

        },
        methods:{
            async getTasks(){
                this.loadRequest = true
                await fetch("http://localhost:8080/tasks/getTasks",{
                    method:"GET",
                    headers:{
                        "Content-type":"application/json",
                    }
                }).then((resp)=> resp.json()).then((data)=>{

                    setTimeout(()=>{
                        this.tasks = data.tasks
                        this.loadRequest = false

                    },1000)
                }).catch((err)=>{
                    console.log(err);
                })
            },
            openModal(){
                this.modal = true
            },
            fecha(){
                console.log('Bateu');
                this.modal = false
            }
        }
    }
  </script>

  <style scoped>
    .load-container{
        position: absolute;
        background-color: #162434;
        padding: 5px;
        border-radius: 10px;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .novatarefa{
        position: absolute;
        margin-top: 3px;
        margin-left: 5px;
        z-index: 13;
    }
    .novatarefa button{
        padding: 7px;
        border-radius: 5px;
        border: none;
        background-color: rgb(0, 167, 245);
        /* z-index: 13; */
    }
    #back{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        top: 0;
        left: 0;
        z-index: 2;
    }
    .modal{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
  </style>
