<template>
  <div id="tabbar">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'tabbar'

}
</script>

<style>
    #tabbar {
        display: flex;
        background: #e0dcdc;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0px -5px 5px rgba(143, 137, 137, 0.3);
    }
</style>