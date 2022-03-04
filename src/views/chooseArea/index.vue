<template>
  <m-choose-area @change="changeArea"></m-choose-area>
</template>

<script lang='ts' setup>
// 不用注册组件是因为已经全局注册
const changeArea = (val: any) => {
  console.log(val)
}
</script>

<style lang='scss' scoped>
</style>