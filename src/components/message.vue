<template>
  <div>
    <div id="container">
        <div v-for="(item) in message_list" :key="item.num">
            <div v-if="item.isme" id="me" :style="{'top':item.num*5+'vh','margin':'5px'}">{{item.message}}</div>
            <div v-else id="other" :style="{'top':item.num*5+'vh','margin':'5px'}">{{item.message}}</div>
        </div>
    </div>
    <ul id="messages"></ul>
    <form action="">
      <input id="m" autocomplete="off" v-model="mess"/><el-button type="primary"  @click="send">发送</el-button>
    </form>
  </div>
</template>


<script>
export default {
  name:"message",
  data() {
    return {
        mess:null,
        position:0,
        message_list:[],
    };
  },
  methods:{
    send(){
        this.$socket.emit("send",this.mess);
        this.mess=null;
    },
    print_message(){
        for(let i in this.message_list){
            console.log(this.message_list[i].message);
        }
        
    }
  },
  computed:{
    
  },
  mounted(){
//    console.log(this.$socket);
//    console.log(this.id);
  },
  created(){

  },
  sockets: {
    connect: function () {
     console.log("已连接");
    }, 
    draw: function (data) {
        console.log(data);
        this.message_list.push(data);
      }
    
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font: 13px Helvetica, Arial; }
      form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
      form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
      form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
      #messages { list-style-type: none; margin: 0; padding: 0; }
      #messages li { padding: 5px 10px; }
      #messages li:nth-child(odd) { background: #eee; }
      #container{
          overflow:scroll;
          position:relative;
          height:98vh;
          border:0.5vh solid rgb(53, 133, 33);
          border-radius:1px;
          background: #eee;
      }
      #me{
          position:absolute;
          display: inline-block; 
          right:0;
          height:5vh;
          background:rgb(97, 97, 221);
          border-radius:10px;
          align-items: center;
          vertical-align:middle;
      }
      #other{
          position:absolute;
          display: inline-block; 
          left:0;
          height:5vh;
          background:rgb(184, 184, 218);
          border-radius:10px;
          align-items: center;
          vertical-align:middle;
      }
</style>
