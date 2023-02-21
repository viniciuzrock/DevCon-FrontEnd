<template>
    <div class="bbb">
        <NavBar></NavBar>
        <!-- <H2>
            tarefas
        </H2> -->
        <div v-if="loadRequest" class="load-container">
            <SpinnerRotation class="teste"/>
        </div>
        <div v-else>
            <div v-if="tasks.length > 0">
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
    import NavBar from '../components/NavBar.vue';
    import SpinnerLoad from '../components/SpinnerLoad.vue';
    import SpinnerRotation from '../components/SpinnerRotation.vue';
    export default{
      components: { NavBar, FormTasks, SpinnerLoad, SpinnerRotation },
      data(){
            return{
                tasks:[],
                loadRequest: false
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

                    },2000)
                }).catch((err)=>{
                    console.log(err);
                })
            }
        }
    }
  </script>

  <style scoped>
    .load-container{
        position: absolute;
        /* background-color: #69696969; */
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
  </style>
