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
              <el-menu-item index="../hello/america">广州</el-menu-item>
              <el-menu-item index="1-2">深圳</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="华中">
              <el-menu-item index="1-3">合肥</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>导航二
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>导航三
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <movie></movie>
        <div>
          <h1>{{obj}}</h1>
          <h1>{{da}}</h1>
        </div>
        <router-link to="/hello/america">america</router-link>
        <router-link to="/hello/china">china</router-link>
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
  name: "header",
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
