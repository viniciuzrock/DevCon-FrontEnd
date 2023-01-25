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
        border: solid 3px #000;
        max-height: 80vh;
        max-width: 160vh;
        margin: 4rem auto;
        text-align: center;
        display: flex;
        border-radius: 35px;
    }

</style>