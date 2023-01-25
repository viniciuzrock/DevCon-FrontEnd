<template>
    <div class="slider-register">
        <div class="img-container">

        </div>
        <p>Slider de Fotos</p>
        <!-- <img src="../../public/img" alt=""> -->
    </div>

</template>
<script>
    export default{
        name:"SliderRegister"
    }
</script>

<style scoped>
    .slider-register{
        /* background-color: #162434; */

        width: 50%;
        color: #fff;
        border-radius: 30px;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    .img-container{
        max-width: 100%;
        height: 79.5vh;
        background-image:url('./icons/ales-nesetril-Im7lZjxeLhg-unsplash.jpg');
        border-radius: 30px;
        background-size: cover;
        background-position: center;
    }
    .slider-register p{
        text-align: center;
        align-items: center;
        justify-content: center;
    }


</style>