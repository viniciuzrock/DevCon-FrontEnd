<template>
<div>
    <div class="container">
        <div class="container-tasks-done" v-for="(task, index) in tasks" :key="index">
            <div>
                <p>{{ task.name }} / {{ index }}</p> <br>
                <span>{{ task.description }}</span><br>
                <span >Status: {{ task.done }}</span><br>
                <span>---------------------------</span>
            </div>
        </div>
        <div class="container-tasks-pending">

        </div>
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
    export default{
        props:["tasks"],
        data(){
            status:this.tasks.done
        }
    }
</script>

<style scoped>

</style>