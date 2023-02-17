<template>
    <div class="container-register">
        <SliderRegister/>
        <FormRegister :user="{}"/>
    </div>

</template>
<script>
import FormRegister from '../components/FormRegister.vue'
import SliderRegister from '../components/SliderRegister.vue'
    export default{
  components: { SliderRegister, FormRegister },
        name:"Register"
    }
</script>

<style scoped>
    .container-register{
        height: 80vh;
        width: 100%;
        display: flex;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, .212);
        /* justify-content: center;
        align-items: center; */
    }

</style>