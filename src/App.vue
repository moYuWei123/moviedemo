<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
	
	<van-tabbar route v-if="$route.meta.isfootshow">
	  <van-tabbar-item
	    replace
	    to="/home"
	    icon="home-o"
	  >
	    主页
	  </van-tabbar-item>
	  <van-tabbar-item
	    replace
	    to="/collect"
	    icon="video-o"
	  >
	   收藏
	  </van-tabbar-item>
	  <van-tabbar-item
	    replace
	    to="/me"
	    icon="manager-o"
	  >
	   我的
	  </van-tabbar-item>
	</van-tabbar>
   
	<transition  enter-active-class="fadeIn animated"> <router-view class="view"/></transition>
  </div>
</template>
<script>
export default {
	data() {
		return {
			classname: 'fadeInRight animated'
		};
	},
	watch: {//监听事件然后改变切换动画
		$route: function(to, from) {
			var toPath = to.fullPath.split('/').length;
			var fromPath = from.fullPath.split('/').length;
			console.log('toPath', toPath, 'fromPath', fromPath);
			if (toPath > fromPath) {
				// 进入某个内页
				this.classname = 'fadeInRight animated';
			} else if (toPath < fromPath) {
				// 离开内页
				this.classname = 'fadeInLeft animated';
			} else {
				this.classname = 'fadeIn animated';
			}
			// if(to.name == "info"){
			//   this.classname = "fadeInRight  animated"
			// }else{
			//   this.classname = "fadeInLeft  animated"
			// }
		}
	}
};
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.view{
	padding-bottom: 51px;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
