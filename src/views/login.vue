<template>
	<div class="main">
		<div class="login">
			<h2 style="text-align: center;color: #606266;">账号登录</h2>
			<el-form ref='userLoginForm' :model='userLogin' label-width='80px' :rules='rules'>
				<el-form-item label='账号' prop='id'>
					<el-input v-model='userLogin.id' placeholder='请输入账号' autocomplete="off" id='userid' clearable></el-input>
				</el-form-item>
				<el-form-item label='密码' prop='password'>
					<el-input v-model='userLogin.password' type='password' placeholder='请输入密码' autocomplete="off" id='password' clearable></el-input>
				</el-form-item>
				<!-- <img :src=code> -->
				<span v-html="code"></span>
				<el-form-item class="button">
					<el-button type='primary' @click='login()'
					>登录</el-button>
					<el-button type='primary' @click='register()'
					>注册</el-button>
				</el-form-item>
			</el-form>

			<!-- <el-row>
				<el-button type='text' @click="forgetpassword()">忘记密码？</el-button>
			</el-row> -->
		</div>
	</div>
</template>

<script >
import { post,get } from "../req/index.js";

// let Base64 = require('js-base64').Base64

	export default {
		name: 'login',
		data(){
				//定义了所有参数
			return {
				userLogin: {
					id: '',
					password: ''
				},
				// 校验规则
				rules:{
					id: [
					{required: true,message: '用户名不能为空',trigger: 'blur'}
					],
					password: [
					{required:true,message:'密码不能为空',	trigger: 'blur'},
					{min:5,message:'密码长度必须大于5个字符字符',}
					]
				},
				code:null,
			};
		},
		methods:{
			login:function(){
                // console.log(this.userLogin.id);
				let res=post("/api/login",{
                    id:this.userLogin.id,
                    password:this.userLogin.password
                    });
                res.then(data => {
                    if(data=='y'){
                        this.$router.push({path:'/hello'});
                    }else{
                        this.$alert('请先注册', '通知', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                            });
                        }
                        });
                    }
                });
                // console.log(res);
			},
			register:function(){
				let res=post("/api/register",{
                    id:this.userLogin.id,
                    password:this.userLogin.password
                    });
                res.then(data => {
                    if(data=='y'){
                        this.$alert('该成功，请登录', '通知', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                            });
                        }
                        });
                    }else{
                        this.$alert('该账号已经注册', '通知', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                            });
                        }
                        });
                    }
                });
			},
			getCode(){
				let res=get("/api/code",{});
				res.then(data=>{
					this.code=data.img;
					// console.log(this.code);
				})
				
			}
		},
		mounted(){
			this.getCode();
			// console.log(this.code);
		}
	}
</script>

<style scoped>
/* 必须加上绝对定位，才能够有width、height，不然是相对于app入口的包含快height100%，高度为0 */
/* app.vue的入口自带了8px的左和上外边距 */
    .main{
		/* width:100%;
		position:absolute;
		top:50%;
		left:50%;
		transform:translate(-50%,-50%); */
		position: absolute;
		width:100%;
		height:100%;
		top:-8px;
		left:-8px;
		/* background-image: url(../assets/p2p.jpg); */
		background-size: 100%;

	}
    
	/* .image{
		float:left;
		margin-left:16%;
		width:30%;
		height: 400px;
	} */

	.login{
		position:absolute;
		top:50%;
		left:50%;
		transform:translate(-50%,-50%);
		background-color: transparent;
		border: 1px solid #999999;
		border-radius: 8px;
		text-align: center;
		background-color: rgba(255,255,255,0.8);
		
	}
  
	/* ？？？该居中方式为何无效 */
	.el-radio-group  {
		/* width:fit-content;
		text-align: center; */
		margin-left:-40px;
	}

	.button {
		margin-left:-40px;
	}
	.el-form{
		margin-right:40px;
	}

	.el-botton{
		font-size: 12px;
		color: #409eff;
		margin: 10px 10px 10px 10px;
	}

</style>
