<template>
  <!-- <Header
    :viewMainTop="viewMainTop >= 0 && viewMainTop < 160"
    :showRightPopup="() => $refs.MoreMenuPopup.open()"
  />
  <Welcome ref="Welcome" />
  <Story ref="Story" />
  <StarDuke ref="StarDuke" />
  <Nft ref="Nft" />
  <Tokenomics ref="Tokenomics" />
  <Features ref="Features" />
  <OfficalPartners ref="OfficalPartners" />
  <RoadMap ref="RoadMap" />
  <Footer />
  <MoreMenuPopup ref="MoreMenuPopup" /> -->
  <component
    v-for="({ name, isPlay }, index) in components"
    :key="index"
    :is="name"
    :ref="name"
    :isPlay="isPlay"
    :class="{ 'component-container': true, 'component-no-play': !isPlay }"
  ></component>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

const viewMainTop = ref(0);
const viewMainHeight = ref(0);

export default defineComponent({
  name: "App",
  provide: {
    viewMainTop: viewMainTop,
    viewMainHeight: viewMainHeight
  },
  computed: {
    viewMainTop: () => viewMainTop,
    viewMainHeight: () => viewMainHeight
  },
  data() {
    return {
      components: [
        { name: "Header", isPlay: true },
        { name: "Welcome", isPlay: true },
        { name: "Story", isPlay: true },
        { name: "StarDuke", isPlay: true },
        { name: "Nft", isPlay: true },
        { name: "Tokenomics", isPlay: true },
        { name: "Features", isPlay: true },
        { name: "OfficalPartners", isPlay: true },
        { name: "RoadMap", isPlay: true },
        { name: "Footer", isPlay: true },
        { name: "MoreMenuPopup", isPlay: true },
      ],
    };
  },
  mounted() {
    console.log("offsetTop", this);
    viewMainHeight.value = document.body.offsetHeight;
    this.initScrollListener();
  },
  methods: {
    initScrollListener() {
      /**
       * 此视图主要内容部分滚动时要做的事
       * 只能用于view-main元素的onScroll上
       */
      const viewMainScroll = (e: Event) => {
        // scroll事件会被高频触发，ticking是一个锁子，防止他被高频触发
        let ticking = false;

        if (!ticking) {
          // 使用浏览器的动画执行函数来过滤滚动事件
          window.requestAnimationFrame(() => {
            viewMainTop.value = (e.target as Element).scrollTop;

            console.clear();
            this.components.forEach(({ name }, index) => {
              if (this.$refs && this.$refs[name]) {
                const start = (this as any).$refs[name][0].$el.offsetTop + viewMainHeight.value/5;
                const end = (this as any).$refs[name][0].$el.offsetTop + (this as any).$refs[name][0].$el.offsetHeight;
                let isPlay = viewMainTop.value + viewMainHeight.value > start && viewMainTop.value < end;
                console.log("can i paly?", name, isPlay, `viewMainTop: ${ viewMainTop.value }`, `viewMainHeight: ${ viewMainHeight.value }`, `start: ${ start }`, `end: ${ end }`);
                
                if (["Header", "Footer", "MoreMenuPopup"].indexOf(name) != -1) {
                  isPlay = true;
                }

                this.components[index].isPlay = isPlay;
              }
            });

            ticking = false;
          });

          ticking = true;
        }
      };

      this.$el.parentElement.onscroll = viewMainScroll;
    },
  },
});
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  background-color: #000000;
}
@font-face {
  font-family: "Source Han Sans CN-Bold";
  src: url("../public/fonts/SOURCEHANSANSCN-BOLD.OTF");
}
@font-face {
  font-family: "Source Han Sans CN-Regular";
  src: url("../public/fonts/SOURCEHANSANSCN-REGULAR.OTF");
}
@font-face {
  font-family: "Source Han Sans CN-Medium";
  src: url("../public/fonts/SOURCEHANSANSCN-MEDIUM.OTF");
}

#app {
  width: 100vw;
  height: 100vh;
  overflow: scroll;
}

.component-container {
  opacity: 1;
  transform: translate(0px, 0px);
  transition: all .5s;

  &.component-no-play {
    opacity: 0;
    transform: translate(0px, 100px);
  }
}
</style>