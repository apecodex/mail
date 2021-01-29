<template>
  <div class="tab-bar-item" @click="btnItem">
      <div v-if="!isActive" class="item-icon">
          <slot name="item-icon"></slot>
      </div>
      <div v-else class="item-icon-active">
          <slot name="item-icon-active"></slot>
      </div>
      <div class="item-text" :class="{'item-text-active': isActive}">
          <slot name="item-text"></slot>
      </div>
  </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    data() {
        return {
            // isActive: true
        }
    },
    props: {
        path: String
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        }
    },
    methods: {
        btnItem() {
            this.$router.replace(this.path);
        }
    },
}
</script>

<style>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
    }
  .item-icon img, .item-icon-active img{
    width: 24px;
    height: 24px;
    margin-top: 1px;
    vertical-align: middle;
  }
  .item-text {
    font-size: 14px;
  }
  .item-text-active {
    color: #dd6f6b;
  }
</style>