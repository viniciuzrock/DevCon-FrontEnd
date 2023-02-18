<template >
    <div class="container">
        <div class="container-register">
            <SliderRegister/>
            <FormRegister :user="{}"/>
        </div>
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
    .container{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #a8c0ff;
        background: -webkit-linear-gradient(to right, #3f2b96, #a8c0ff);
        background: linear-gradient(to right, #3f2b96, #a8c0ff);
    }
    .container-register{
        height: 80vh;
        /* height: 36rem; */
        width: 80%;
        display: flex;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, .212);
        background-color: #fff;
        /* justify-content: center;
        align-items: center; */
    }

</style>