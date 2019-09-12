<template>
  <div>
    <el-container>
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

      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-active="$route.path" router unique-opened>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>影院
            </template>
            <el-menu-item-group>
              <template slot="title">华南</template>
              <el-menu-item index="../hello/cinema">广州</el-menu-item>
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
              <el-menu-item index="../hello/movie">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>我的
            </template>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <!-- <movie></movie> -->
        <!-- <div>
          <h1>{{obj}}</h1>
          <h1>{{da}}</h1>
        </div> -->
        <!-- <router-link to="/hello/movie">movie</router-link>
        <router-link to="/hello/cinema">cinema</router-link>
        <router-link to="/hello/mine">mine</router-link> -->
        <router-view></router-view>
      </el-main>
      <el-footer>footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import movie from "@/views/movie";
import mine from "@/views/mine";
import america from "@/components/america";
import china from "@/components/china";
export default {
  name: "HelloWorld",
  data() {
    return {
      obj:{
        type:String,
        default:"temp"
      },
      da:"fff"
    };
  },
  components: {
    movie
    //  america,
    // default:china,
    // second:america
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#head {
  background: blue;
  font-size: 20px;
  border-radius: 5px;
}
</style>
