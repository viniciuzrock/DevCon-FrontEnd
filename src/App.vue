<template>
  <header>
    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Register">Register</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>
  <RouterView/>
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<style >

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inter;
  }
  body{
    /* width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #a8c0ff;
background: -webkit-linear-gradient(to right, #3f2b96, #a8c0ff);
background: linear-gradient(to right, #3f2b96, #a8c0ff);
 */
  }
</style>
