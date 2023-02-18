<template>
    <div class="container-login">
        <FormLogin/>
    </div>
</template>
<script>
    import FormLogin from '../components/FormLogin.vue';
    export default{
        components: { FormLogin },
    }
</script>
<style scoped>
    .container-login{
        height: 36rem;
        width: 100%;
        display: flex;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, .212);
        background-color: #fff;
    }
</style>