<template>
    <div>
        hello mine
        <router-view></router-view>
        <input v-model=temp @click="fun" ref="input1">
        <div>
          {{count}}
          {{a}}
        </div>
        <input type="button" value="+" @click="incre">
        <input type="button" value="-" @click="decre">
        <!-- {{}} -->
    </div>
</template>

<script>
import {store} from "../vuex/index.js"
import { mapState } from 'vuex'
export default {
  store: store,//这一行很重要！！！挂载上来
  name:"mine",
    data() {
    return {
      da:"fff",
      temp:4,
    };
  },
  methods:{
      fun(value){
          console.log(this.$route);
          this.temp=9;
      },
      incre(){
        store.commit('increment');
      },
      decre(){
        store.commit('decrement');
      },
      ttt(){
      console.log(this.$el,this.$ref);
      },
  },
  computed:{
    count(){
       return store.state.count;
    },
    ...mapState({
      a:state=>state.a,
      b:state=>state.b
    })
  },
  mounted(){
    this.ttt();
    
  },
  created(){
    this.ttt();
  }
}
</script>

<style scoped>

</style>
