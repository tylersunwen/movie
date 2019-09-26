<template>
    <div>
        hello cinema
        <button @click="myfun">请求</button>
        <div v-for="(item) in xss" :key="item">
            {{item}}
        </div>
    </div>
</template>

<script>
// import axios from 'axios'; 
// axios.defaults.timeout = 10000;
import { get } from "../req/index.js";
export default {
  name:"cinema",
  data(){
    return {
      xss:[],

    };
  },
  // mounted:{
    
  // },
  methods:{
    myfun(){
      let res=get("/api/a",{});
      // let temp=1;
      res.then(data => {
        console.log(data);
        this.xss.push(data);
      });

      // console.log(res);
    },
  },
}
</script>

<style scoped>

</style>
