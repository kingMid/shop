<template>
  <div id="App">
    <!-- 头部顶部 -->
    <van-nav-bar title="商城" class="nav-title">
      <van-icon name="search" slot="left"></van-icon>
      <van-icon name="cart" slot="right"></van-icon>
    </van-nav-bar>
    <!-- 轮播图 -->
    <div class="carousel">
      <van-swipe :autoplay="3000">
        <van-swipe-item class="carousel-item" v-for="(item,index) in carouselItem" :key="index">
          <img v-lazy="item.imgSrc" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 热门商品 -->
    <div class="hot">
      <p class="hot-title">热门商品</p>
      <swiper class="hot-swiper" :options="swiperOption">
        <swiper-slide v-for="(item,index) in hotProducts" :key="index" >
          <div class="hot-swiper-content">
            <img v-lazy="item.imgSrc" alt />
            <div>{{item.name}}</div>
            <div>{{item.price}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 推荐商品 -->
    <div class="variety">
      <p class="variety-title">推荐商品</p>
      <ul>
        <li class="variety-item" v-for="(item,index) in varietyItem" :key="index">
          <img v-lazy="item.imgSrc" alt="">
          <p>{{item.name}}</p>
          <p>{{item.price}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      carouselItem: [//轮播图
        {
          name: "img1",
          imgSrc:
            "https://img11.360buyimg.com/babel/s1180x940_jfs/t1/126932/39/9994/98612/5f3cd33bEa54f97c7/5804c45d87577f5f.jpg.webp",
        },
        {
          name: "img2",
          imgSrc:
            "https://img14.360buyimg.com/pop/s1180x940_jfs/t1/143049/6/5844/90060/5f3ce972Ebee83f6a/1b6e008fbc13955c.jpg.webp",
        },
        {
          name: "img3",
          imgSrc:
            "https://img14.360buyimg.com/pop/s1180x940_jfs/t1/133582/22/6926/100185/5f34f496E292a9349/1f91c175f30af659.jpg.webp",
        },
      ],
      hotProducts: [//热门商品
        {
          name: "弹力薄款|2条88元|",
          imgSrc:
            "https://img10.360buyimg.com/seckillcms/s500x500_jfs/t1/111679/13/15113/180444/5f3a19c9Ef6c0ee4e/b2d7578d521239bb.jpg",
          price: "¥128",
        },
        {
          name: "斯凯奇经典黑白熊猫鞋",
          imgSrc:
            "https://img11.360buyimg.com/seckillcms/s500x500_jfs/t1/146154/35/2902/92540/5f0d5f21E836c66ff/c926d8dce43c843c.jpg",
          price: "¥569",
        },
        {
          name: "欧派整体橱柜",
          imgSrc:
            "https://img12.360buyimg.com/seckillcms/s500x500_jfs/t1/148134/34/5830/202480/5f3c821cEfd7cb6de/bced5af29b35c2b4.jpg",
          price: "¥1099",
        },
        {
          name: "普莱斯超轻8g眼镜送防蓝光镜片",
          imgSrc:
            "https://img13.360buyimg.com/seckillcms/s500x500_jfs/t1/139211/16/5675/68453/5f3b314cE2b5ba840/415164e9a4041c2a.jpg",
          price: "¥259",
        },
        {
          name: "短外套女新款韩版修身小西装春天外套女",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i1/2116843516/TB19RhvdpuWBuNjSszbXXcS7FXa_!!0-item_pic.jpg_200x200q90.jpg_.webp",
          price: "¥138",
        },
        {
          name: "炎炎夏日多色入（打底 外穿）",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i4/TB10KmjQpXXXXXvapXXXXXXXXXX_!!0-item_pic.jpg_200x200q90.jpg_.webp",
          price: "¥29.9",
        },
        {
          name: "夏韩版睫毛蕾丝身显瘦薄款针织吊带",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i3/36799834/TB2mFAQnZtnpuFjSZFKXXalFFXa_!!36799834.jpg_200x200q90.jpg_.webp",
          price: "¥26.8",
        },
        {
          name: "好孩子婴儿向轻便推车",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i4/20847078/O1CN01cLEi7f229lyE1qvMq_!!0-saturn_solar.jpg_200x200q90.jpg_.webp",
          price: "¥2059",
        },
        {
          name: "圆领钉珠夏套头衫",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i4/TB1jHZhHpXXXXc7XFXXXXXXXXXX_!!0-item_pic.jpg_200x200q90.jpg_.webp",
          price: "¥50",
        },
        {
          name: "气质短袖衬衫女工装工作服",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i1/2211618534/TB10tgBaDfN8KJjSZFjXXXGvpXa_!!0-item_pic.jpg_200x200q90.jpg_.webp",
          price: "¥258",
        },
        {
          name: "姜姜西服套装休闲简约短款西裤",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i3/1805051155/TB2mx6XdVooBKNjSZPhXXc2CXXa_!!1805051155.jpg_200x200q90.jpg_.webp",
          price: "¥169",
        },
        {
          name: "AD职业装ol白领高端女装套装",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i1/2126658491/TB1QZ2MOXXXXXbQaFXXXXXXXXXX_!!0-item_pic.jpg_200x200q90.jpg_.webp",
          price: "¥169",
        },
        {
          name: "婴儿推车可坐可躺折叠推车口袋伞车宝宝童车",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i4/45791375/O1CN016X3q9G1M1n9j3I2Na_!!0-saturn_solar.jpg_200x200q90.jpg_.webp",
          price: "¥889",
        },
        {
          name: "韩国2020春装黑色小西装女外套",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i3/1233437/TB2bwWekL2H8KJjy1zkXXXr7pXa_!!1233437.jpg_200x200q90.jpg_.webp",
          price: "¥129",
        },
        {
          name: "女装春装2020新款复古格子西装外套",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i3/135578149/TB1dperb29TBuNjy0FcXXbeiFXa_!!0-item_pic.jpg_200x200q90.jpg_.webp",
          price: "¥168",
        },
        {
          name: "2020夏新品女学院背心学生",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i2/213734608/TB2ENpClWmWBuNjy1XaXXXCbXXa_!!213734608.jpg_200x200q90.jpg_.webp",
          price: "¥65",
        },
        {
          name: "韩诗兰条纹气质修装秋冬职业装",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i1/1803978490/O1CN01ndTUka2CaTDQx5zfD_!!0-item_pic.jpg_200x200q90.jpg_.webp",
          price: "¥398",
        },
        {
          name: "儿童帆布鞋女童鞋春秋款男童板鞋小孩",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i2/32493066/O1CN01sJhbPJ1YWGxJTn0R8_!!0-saturn_solar.jpg_200x200q90.jpg_.webp",
          price: "¥39",
        },
        {
          name: "杨姗姗Elwing原创设计西装套装女装",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i1/554549648/TB2LynFlXXXXXahXpXXXXXXXXXX_!!554549648.jpg_200x200q90.jpg_.webp",
          price: "¥488",
        },
      ],
      swiperOption:{//热门商品swiper配置
          slidesPerView:3
      },
      varietyItem:[ //推荐商品
         {
          name: "弹力薄款|2条88元|",
          imgSrc:
            "https://img10.360buyimg.com/seckillcms/s500x500_jfs/t1/111679/13/15113/180444/5f3a19c9Ef6c0ee4e/b2d7578d521239bb.jpg",
          price: "¥128",
        },
        {
          name: "欧派整体橱柜",
          imgSrc:
            "https://img12.360buyimg.com/seckillcms/s500x500_jfs/t1/148134/34/5830/202480/5f3c821cEfd7cb6de/bced5af29b35c2b4.jpg",
          price: "¥1099",
        },
        {
          name: "普莱斯超轻8g眼镜送防蓝光镜片",
          imgSrc:
            "https://img13.360buyimg.com/seckillcms/s500x500_jfs/t1/139211/16/5675/68453/5f3b314cE2b5ba840/415164e9a4041c2a.jpg",
          price: "¥259",
        },
        {
          name: "短外套女新款韩版修身小西装春天外套女",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i1/2116843516/TB19RhvdpuWBuNjSszbXXcS7FXa_!!0-item_pic.jpg_200x200q90.jpg_.webp",
          price: "¥138",
        },
        {
          name: "炎炎夏日多色入（打底 外穿）",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i4/TB10KmjQpXXXXXvapXXXXXXXXXX_!!0-item_pic.jpg_200x200q90.jpg_.webp",
          price: "¥29.9",
        },
        {
          name: "夏韩版睫毛蕾丝身显瘦薄款针织吊带",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i3/36799834/TB2mFAQnZtnpuFjSZFKXXalFFXa_!!36799834.jpg_200x200q90.jpg_.webp",
          price: "¥26.8",
        },
        {
          name: "好孩子婴儿向轻便推车",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i4/20847078/O1CN01cLEi7f229lyE1qvMq_!!0-saturn_solar.jpg_200x200q90.jpg_.webp",
          price: "¥2059",
        },
        {
          name: "圆领钉珠夏套头衫",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i4/TB1jHZhHpXXXXc7XFXXXXXXXXXX_!!0-item_pic.jpg_200x200q90.jpg_.webp",
          price: "¥50",
        },
        {
          name: "气质短袖衬衫女工装工作服",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i1/2211618534/TB10tgBaDfN8KJjSZFjXXXGvpXa_!!0-item_pic.jpg_200x200q90.jpg_.webp",
          price: "¥258",
        },
        {
          name: "姜姜西服套装休闲简约短款西裤",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i3/1805051155/TB2mx6XdVooBKNjSZPhXXc2CXXa_!!1805051155.jpg_200x200q90.jpg_.webp",
          price: "¥169",
        },
        {
          name: "AD职业装ol白领高端女装套装",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i1/2126658491/TB1QZ2MOXXXXXbQaFXXXXXXXXXX_!!0-item_pic.jpg_200x200q90.jpg_.webp",
          price: "¥169",
        },
        {
          name: "婴儿推车可坐可躺折叠推车口袋伞车宝宝童车",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i4/45791375/O1CN016X3q9G1M1n9j3I2Na_!!0-saturn_solar.jpg_200x200q90.jpg_.webp",
          price: "¥889",
        },
        {
          name: "韩国2020春装黑色小西装女外套",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i3/1233437/TB2bwWekL2H8KJjy1zkXXXr7pXa_!!1233437.jpg_200x200q90.jpg_.webp",
          price: "¥129",
        },
        {
          name: "女装春装2020新款复古格子西装外套",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i3/135578149/TB1dperb29TBuNjy0FcXXbeiFXa_!!0-item_pic.jpg_200x200q90.jpg_.webp",
          price: "¥168",
        },
        {
          name: "2020夏新品女学院背心学生",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i2/213734608/TB2ENpClWmWBuNjy1XaXXXCbXXa_!!213734608.jpg_200x200q90.jpg_.webp",
          price: "¥65",
        },
        {
          name: "韩诗兰条纹气质修装秋冬职业装",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i1/1803978490/O1CN01ndTUka2CaTDQx5zfD_!!0-item_pic.jpg_200x200q90.jpg_.webp",
          price: "¥398",
        },
        {
          name: "儿童帆布鞋女童鞋春秋款男童板鞋小孩",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i2/32493066/O1CN01sJhbPJ1YWGxJTn0R8_!!0-saturn_solar.jpg_200x200q90.jpg_.webp",
          price: "¥39",
        },
        {
          name: "杨姗姗Elwing原创设计西装套装女装",
          imgSrc:
            "https://img.alicdn.com/bao/uploaded/i1/554549648/TB2LynFlXXXXXahXpXXXXXXXXXX_!!554549648.jpg_200x200q90.jpg_.webp",
          price: "¥488",
        },
      ]
     

  
    };
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss">
//全局
#App{
 background-color:#eee;
}
//顶部
.nav-title{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999!important;
}
// 轮播图
.carousel {
  margin-top:1rem;
  height: 3rem;
  &-item {
    img {
      width: 100%;
      height: 3rem;
    }
  }
}
//热门商品
.hot{
  margin-top: 0.2rem;
  background-color: #fff;
  &-title{
    width: 100%;
    height: 0.5rem;
    padding-left: 0.2rem;
    line-height: 0.5rem;
    box-sizing: border-box;
  }
  &-swiper{
    &-content{
      width: 2rem;
      text-align: center;
      img{
        width: 2rem;
        height: 2rem;
      }

    }
  }
}
//推荐商品
.variety{
  margin-top: 0.2rem;
  background-color: #fff;
  text-align: center;
  &-title{
    line-height: inherit;
    text-align: center;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &-item{
    flex-basis: 45%;
  }
  img{
    width: 2rem;
    height: 2rem;
  }

}
</style>