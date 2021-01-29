<template>
  <div class="navbar">
      <div id="left"><slot name="left"></slot></div>
      <div id="center"><slot name="center"></slot></div>
      <div id="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style>
    .navbar {
        display: flex;
        height: 44px;
        line-height: 44px;

    }
    #left, #right {
        width: 60px;
    }
    #center {
        flex: 1;
        text-align: center;
    }
</style>