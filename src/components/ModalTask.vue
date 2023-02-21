<template>
    <div class="modal" v-if="modal">
        <div class="modal-header">
            <h3>Nova Tarefa</h3>
            <button @click="$emit('fechaModal')">
                Fechar
            </button>
        </div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quas nulla voluptatibus optio tempora voluptatum architecto cumque modi voluptate dignissimos velit natus sequi dolorem ullam aliquid soluta nobis sit officiis!
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
        width: 600px;
        height: 300px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 1px 1px 20px 2px rgba(0, 0, 0, .212);
        padding: 10px;
    }
    .modal-header{
        display: flex;
        justify-content: space-between;
    }

</style>