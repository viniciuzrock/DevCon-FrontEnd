<template>
    <div class="msg" :class="classMessage" v-if="msgData">
        <label for="">{{ msgData }}</label>
    </div>
</template>

<script>
    export default{
        name:"Message",
        props:["msgData","classMessage"],
        data(){

        }
    }
</script>

<style scoped>
    .msg{
        width: 300px;
        height: 60px;
        margin: auto;
        display: flex;
        flex-direction: column;
        text-align:center;
        justify-content: center;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        transition: 1.5s;
    }
    .msg label{
        justify-content: center;
    }
    .error{
        background-color: #F8D7DA;
        border-left: 5px solid red;
        transition: 1.5s;
    }
    .success{
        background-color: #D4EDDA;
        border-left: 5px solid green;
        transition: 0.5s;
    }
</style>