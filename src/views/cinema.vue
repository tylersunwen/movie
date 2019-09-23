<template>
    <div>
        hello cinema
        <button @click="myfun">请求</button>
    </div>
</template>

<script>
// import axios from 'axios'; 
// axios.defaults.timeout = 10000;
import { get } from "../req/index.js";
export default {
  name:"cinema",
  // mounted:{
    
  // },
  methods:{
    //  loadXMLDoc(url,cfunc){
    //         if (window.XMLHttpRequest){// IE7+, Firefox, Chrome, Opera, Safari 代码
    //         xmlhttp=new XMLHttpRequest();
    //         }
    //         else{// IE6, IE5 代码
    //         xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    //         }
    //         xmlhttp.onreadystatechange=cfunc;
    //         xmlhttp.open("GET",url,true);
    //         xmlhttp.send();
    //     },
    //   myfun(){
    //     loadXMLDoc("http://localhost:8081/a",function(){
    //         if (xmlhttp.readyState==4 && xmlhttp.status==200){
    //             console.log(xmlhttp.responseText);
    //         }
    //     });
    //   }


    // get(url, params) {
    //   return new Promise((resolve, reject) => {
    //       axios.get(url, {
    //           params: params,
    //           headers: {
    //               "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    //           }
    //       }).then(res => {
    //           resolve(res.data);
    //       }).catch(err => {
    //           reject(err.data)
    //       })
    //   });
    // },
    myfun(){
      let res=get("/api/b",{});
      // let temp=1;
      res.then(data => {
        console.log(data);
      });
      console.log(res);
    },
  }
}
</script>

<style scoped>

</style>
