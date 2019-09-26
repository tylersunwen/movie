<template>
  <div>
      <el-header id="head">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/hello' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item) in location" :key="item">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
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
  mounted(){
    // console.log(this.$route);
  },
  props: ['location'],
  
};
</script>

<style scoped>
#head {
  background: blue;
  font-size: 20px;
  border-radius: 5px;
}
</style>
