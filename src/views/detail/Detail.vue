<template>
  <div class="detail">
      <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="detailNav"></detail-nav-bar>
      <scroll class="content" :pull-up-load="true" ref="scroll" :probe-type="3" @srcoll="contentScroll">
        <detail-swiper :topImages="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-image-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-image-info>
        <detail-params-info ref="params" :paramInfo="paramInfo"></detail-params-info>
        <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
        <goods-list ref="recommend" :goods="recommends"></goods-list>
      </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailImageInfo from './childComps/DetailImagesInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/Goods/GoodsList'

import { getDetail, Goods, Shop, GoodsParams, getRecommend } from 'network/detail'
import { debounce } from 'common/utils'
export default {
    name: 'Detail',
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {},
            paramInfo: {},
            commentInfo: {},
            recommends: null,
            themeTopYs: []
        }
    },
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailImageInfo,
        DetailParamsInfo,
        DetailCommentInfo,
        Scroll,
        GoodsList
    },
    created() {
        this.iid = this.$route.params.iid
        getDetail(this.iid).then(res => {
            const data = res.result
            this.topImages = data.itemInfo.topImages

            // 获取商品信息
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
                
            // 获取店铺信息
            this.shop = new Shop(data.shopInfo)

            // 图片展示
            this.detailInfo = data.detailInfo

            // 参数
            this.paramInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule)

            // 评论
            if(data.rate.cRate !== 0){
                this.commentInfo = data.rate.list[0];
            }

            //推荐
            getRecommend().then(res => {
                this.recommends = res.data.list;
            });
            // this.$nextTick(() => {
            //     this.themeTopYs = []
            //     this.themeTopYs.push(0);
            //     this.themeTopYs.push(this.$refs.params.$el.offsetTop);
            //     this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
            //     this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
            // })

        })
    },
    methods: {
        imageLoad() {
            this.$refs.scroll.refresh()

        },
        titleClick(index) {
            this.themeTopYs = []
            this.themeTopYs.push(0);
            this.themeTopYs.push(this.$refs.params.$el.offsetTop);
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
            this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)

        },
        contentScroll(position) {
            let dposition = -position.y
            console.log(dposition, this.themeTopYs[1]);
            // if (dposition > this.themeTopYs[1]) {
            //     this.$refs.detailNav.currentIndex = 0
            // } else if ( dposition > this.themeTopYs[2]) {
            //     this.$refs.detailNav.currentIndex = 1
            // } else if ( dposition > this.themeTopYs[3]) {
            //     this.$refs.detailNav.currentIndex = 2
            // }
        }
    },
}
</script>

<style scoped>
    .detail {
        position: relative;
        z-index: 999;
        background: #fff;
        height: 100vh;
    }
    .detail-nav {
        position: relative;
        z-index: 99;
        background: #fff;
    }
    .content {
        height: calc(100% - 44px);
    }
</style>