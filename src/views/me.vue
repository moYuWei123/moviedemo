<template>
	<div>
		<van-nav-bar title="我的" />

		<div v-if="!islogin">
			<van-cell-group>
				<van-field v-model="username" clearable label="用户名" right-icon="question-o" placeholder="请输入用户名" />
			
				<van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
			</van-cell-group>
			<van-button type="primary" @click="login" size="large">登录</van-button>
		</div>
		
		<van-cell-group v-if="islogin" >
		 <van-cell title="用户" :value="username" label="已登录" />
		 <van-button type="primary" color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="logout" size="large">退出登录</van-button>
		</van-cell-group>
	</div>
</template>

<script>
export default {
	props: {},
	data() {
		return {
			username: '',
			password: '',
			islogin:false
		};
	},
	computed: {},
	created() {
		if(localStorage.getItem("key")){
		            this.islogin = true;
		            this.username = JSON.parse(localStorage.getItem("key"))
		}
	},
	mounted() {},
	watch: {},
	methods: {
		login() {
			
			if(this.username==""||this.password==""){
				
				 this.$toast('不能为空');
			}else{
			
			this.islogin=true
			 localStorage.setItem("key",JSON.stringify(this.username))
			 }
		},
		logout(){
			this.islogin=false
			localStorage.removeItem("key");
		}
	},
	components: {}
};
</script>

<style scoped lang="scss"></style>
