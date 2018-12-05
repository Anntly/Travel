<template>
  <div id="app" exclude="Detail">
    <!--使路由的内容加载一次后存在缓存中-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>

</style>
