<template>
  <div>
    <div id="container">
      <div id="main">

      </div>
    </div>
    <el-container>
      
        <!-- <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/hello' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/#/hello">简介</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb> -->
        <myheader :location=location></myheader>
      
      <el-container>

        <el-aside width="200px" style="background-color: rgb(238, 241, 246)" id="aside">
          <el-menu :default-active="$route.path" router unique-opened>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>影院
              </template>
              <el-menu-item-group>
                <template slot="title">华南</template>
                <el-menu-item index="/hello/cinema">广州</el-menu-item>
                <el-menu-item index="1-2">深圳</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="华中">
                <el-menu-item index="1-3">合肥</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>电影
              </template>
                <el-menu-item index="/hello/movie">美国</el-menu-item>
                <el-menu-item index="2-2">中国</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-setting"></i>我的
              </template>
              <el-menu-item index="/mine/infor">信息</el-menu-item>
              <el-menu-item index="/mine/message">通信</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        
        <el-container>
          <el-main>
            <!-- <router-link to="/hello/movie">movie</router-link> -->
            <router-link :to="{name:'world',params:{world:123}}">cinema</router-link>
            <!-- <router-link to="/hello/mine">mine</router-link> -->
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
      
      <el-footer>footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import movie from "@/views/movie";
import mine from "@/views/mine";
import america from "@/components/america";
import china from "@/components/china";
import myheader from "@/components/myheader";
export default {
  name: "HelloWorld",
  data() {
    return {
      location:{
        '/hello':['推荐'],
        '/hello/movie':['推荐','电影'],
        '/hello/cinema':['推荐','影院'],
      },
    };
  },
  components: {
    myheader,
    //  america,
    // default:china,
    // second:america
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aside{
  float:left;
}
</style>
