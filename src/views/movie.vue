<template>
    <div>
        hello movie
        <button @click="qingqiu">qingqiu</button>
        <img :src=img>
    </div>
</template>

<script>
import { getimg } from "../req/index.js";
export default {
  name:"movie",
  data(){
    return {
      img:null,
    };
  },
  methods:{
    qingqiu(){
      let res=getimg("/api/img/1",{});
      res.then(data => {
        console.log(data);
        this.img= window.URL.createObjectURL(data);
        console.log(this.img);
        // reader.readAsDataURL(res)
      });
    },
  },
}
</script>

<style scoped>
  img{
    width:100px;
    height:100px;
  }
</style>
