<template>
    <div>
        <NavBar></NavBar>
        <H2>
            tarefas
        </H2>
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
</template>

  <script >
    import FormTasks from '../components/FormTasks.vue';
    import NavBar from '../components/NavBar.vue';
    export default{
      components: { NavBar, FormTasks },
      data(){
            return{
                tasks:[]
            }
        },
        created(){
            this.getTasks()
        },
        methods:{
            async getTasks(){
                await fetch("http://localhost:8080/tasks/getTasks",{
                    method:"GET",
                    headers:{
                        "Content-type":"application/json",
                    }
                }).then((resp)=> resp.json()).then((data)=>{
                    this.tasks = data.tasks
                }).catch((err)=>{
                    console.log(err);
                })
            }
        }
    }
  </script>

  <style scoped>

  </style>
