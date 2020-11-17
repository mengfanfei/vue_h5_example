<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view />
    <!-- /子路由出口 -->

    <!-- 底部导航栏 -->
    <Tabbar v-model="active" route>
      <Tabbar-item icon="home-o" to="/" replace>首页</Tabbar-item>
      <Tabbar-item icon="comment-o" to="/qa" replace>问答</Tabbar-item>
      <Tabbar-item icon="video-o" to="/video" replace>视频</Tabbar-item>
      <Tabbar-item icon="manager-o" to="/profile" replace>我的</Tabbar-item>
    </Tabbar>
    <!-- /底部导航栏 -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import { Tabbar, TabbarItem } from 'vant'
export default defineComponent({
  name: 'Layout',
  components: {
    Tabbar,
    TabbarItem
  },
  setup() {
    let active: Ref<string | number> = ref(0)
    return {
      active
    }
  }
})
</script>