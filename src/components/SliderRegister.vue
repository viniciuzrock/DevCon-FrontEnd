<template>
    <div class="slider-register">
        <div class="img-container">
        </div>
    </div>

</template>
<script>
    export default{
        name:"SliderRegister"
    }
</script>

<style scoped>
    .slider-register{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img-container{
        /* width: 62rem; */
        width: 62rem;
        height: 80vh;
        /* height: 36rem; */

        background-image:url('../../public/img/register-img.jpg');
        background-size: cover;
        background-position: center;
    }

</style>