<template>
  <div >
    <el-container>
      <el-header>ssss</el-header>
      <el-aside>ddd</el-aside>
      <el-main>
        <movie></movie>
      </el-main>
      <el-footer>ddd</el-footer>
    </el-container>
  </div>
</template>

<script>
import movie from '@/views/movie'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    movie,
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
