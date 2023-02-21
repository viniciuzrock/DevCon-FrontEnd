<template>
    <div class="modal" v-if="modal">
        <h1>
            NOVA tarefa
        </h1>

        <button @click="$emit(closeModal)">
            Fechar
        </button>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quas nulla voluptatibus optio tempora voluptatum architecto cumque modi voluptate dignissimos velit natus sequi dolorem ullam aliquid soluta nobis sit officiis!
        </div>
    </div>
</template>

<script>
    export default{
        name:"ModalTask",
        props:["modal"],
        emits:["closeModal"],
        data(){
            return{
                modal:true
            }
        },
        methods:{
            closeModal(){
                this.$emit('close')
                this.modal = false
                console.log('AAA');
            }
        }
    }
</script>

<style scoped>

    .modal{
        width: 300px;
        height: 300px;
        background-color: aqua;
    }

</style>