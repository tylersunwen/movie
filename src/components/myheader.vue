<template>
  <div>
      <el-header id="head">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/hello' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item) in location[(this.$route.matched)[this.$route.matched.length-1].path]" :key="item">{{item}}</el-breadcrumb-item>
          <!-- <el-breadcrumb-item v-for="(item) in this.$route.matched" :key="item">{{item.path}}</el-breadcrumb-item> -->
        </el-breadcrumb>
      </el-header>
      <!-- {{location}} -->
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
    // console.log((this.$route.matched));
  },
  props: ['location'],
  methods:{

  }

  
};
</script>

<style scoped>
#head {
  background: black;
  font-size: 20px;
  border-radius: 5px;
}
</style>
