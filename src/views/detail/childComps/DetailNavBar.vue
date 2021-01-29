<template>
  <div>
      <nav-bar>
          <template #left>
              <div id="detail-back" @click="backClick">
                  <img src="~assets/img/common/back.svg" alt="">
              </div>
          </template>
          <template #center>
              <div id="title">
                <span v-for="(item, index) in titles" 
                    :key="index" 
                    class="title-item" 
                    :class="{active: index === currentIndex}"
                    @click="titleClick(index)">
                    {{item}}
                </span>
              </div>
          </template>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
    name: 'DetailNavBar',
    components: {
        NavBar
    },
    data() {
        return {
            titles: ['商品', '参数', '评论', '推荐'],
            currentIndex: 0
        }
    },
    methods: {
        titleClick(index) {
            this.currentIndex = index
            this.$emit("titleClick", index)
        },
        backClick() {
            this.$router.back()
        }
    },
}
</script>

<style scoped>
    #title {
        display: flex;
        justify-content: space-between;
    }
    .title-item {
        flex: 1;
    }
    .active {
        color: var(--color-high-text);
    }
    #detail-back img {
        margin-left: 22px;
        margin-top: 12px;
    }
</style>