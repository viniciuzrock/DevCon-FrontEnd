<template>
<div class="container">
    <div class="container-task">
        <div class="tasks-pending">
            <span>Pending</span>
            <tasksPeding/>
        </div>
        <div class="tasks-done">
            <span>Done</span>
            <tasksDone/>
        </div>
        <!-- <div class="container-tasks-done" v-for="(task, index) in tasks" :key="index">
            <div>
                <p>{{ task.name }} / {{ index }}</p> <br>
                <span>{{ task.description }}</span><br>
                <span >Status: {{ task.done }}</span><br>
                <span>---------------------------</span>
            </div>
        </div> -->
        <!-- <div class="container-tasks-pending">

        </div> -->
    </div>

    <!-- FAZER UM COMPONENTE PRA CADA LISTA (CONCLUIDOS/NAO CONCLUIDOS)
    E CASO NÃO ATUALIZE A LISTA NA HORA HABILITAR O REFRESH DO FORMULARIO
    NESSE CASO, COLOCAR UM LOADING NA TELA -->


    <!-- <input name="name" type="text" placeholder="titulo" value=""><br>
    <input name="description" type="text" placeholder="descricao"><br>
    <span>Feito?</span><input type="checkbox"> -->


</div>

</template>

<script>
import tasksDone from './tasksDone.vue'
import TasksPeding from './tasksPeding.vue'
    export default{
  components: { tasksDone, TasksPeding },
        props:["tasks"],
        data(){
            status:this.tasks.done
        }
    }
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container-task{
        display: flex;
        width: 750px;
        justify-content: space-between;
    }
    .tasks-done{
        margin: 5px;
        width: 350px;
        border-radius: 10px;
        height: 90vh;
        padding: 15px;
        box-shadow: 1px 1px 20px 2px rgba(0, 0, 0, .212);
    }
    .tasks-pending{
        margin: 5px;
        width: 350px;
        border-radius: 10px;
        height: 90vh;
        padding: 15px;
        box-shadow: 1px 1px 20px 2px rgba(0, 0, 0, .212);
    }
</style>