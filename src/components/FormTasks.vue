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
    </div>
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