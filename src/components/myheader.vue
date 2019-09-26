<template>
  <div>
      <el-header id="head">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/hello' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/#/hello">简介</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      {{message}}{{a}}
  </div>
</template>

<script>
export default {
  name: "head",
  data() {
    return{

    }
  },
  components: {
  },
  props: ['message','a'],
};
</script>

<style scoped>
#head {
  background: blue;
  font-size: 20px;
  border-radius: 5px;
}
</style>
