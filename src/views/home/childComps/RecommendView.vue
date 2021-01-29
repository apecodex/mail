<template>
  <div class="recommend">
      <div class="recommend-item" v-for="item in recommends" :key="item.title">
          <a :href="item.link">
            <img :src="item.image" :alt="item.title" class="recommend-item-img">
            <div class="recommend-item-text">{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name: 'RecommendView',
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
    .recommend {
        display: flex;
        width: 100%;
        text-align: center;
        padding: 10px 0 15px 0;
        border-radius: 14px;
        box-shadow: 0 0 8px 3px rgba(207, 200, 200, .5);
        margin-bottom: 10px;
    }
    .recommend-item {
        flex: 1;
    }
    .recommend-item-img {
        width: 65px;
        height: 65px;
        align-self: center;
        margin-bottom: 8px;
    }
</style>