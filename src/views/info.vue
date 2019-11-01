<template>
	<div>
	<van-nav-bar
	  :title="obj.title"
	  left-text="返回"
	  left-arrow
	  @click-left="$router.go(-1)"
	/>
	<ul>
		<li><img :src="obj.images.small" alt=""></li>
		<li><p>上映时间: {{obj.year}}</p>
		<p>上映时间: {{obj.year}}</p>
		类型:<span v-for="item in obj.genres" :key="item">{{item}}</span>
		</li>
	</ul>
	<van-divider>{{obj.title}}演员表</van-divider>
	<ul class="yanyuan">
		<li  v-for="item in obj.casts" :key="item.id">
		<p>{{item.name}}</p>
		<img :src="item.avatars.small" alt="">
		</li>
	</ul>
	<van-button type="primary" @click="add(obj.id)" size="large" color="linear-gradient(to right, #4bb0ff, #6149f6)">添加收藏</van-button>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
	props: {},
	data() {
		return {};
	},
	computed: {
		...mapState({
			obj: function(state) {
				return state.moviecar.arrmovie.find(ele => ele.id == this.$route.query.id);
			}
		})
	},
	created() {},
	mounted() {},
	watch: {},
	methods: {
		...mapMutations({
			add1:"moviecar/add"
		}),
		add(val){
			this.$notify({ type: 'success', message: '收藏成功' ,duration: 800});
			this.add1(val)
		}
	},
	components: {}
};
</script>

<style scoped lang="scss">
	ul{
		margin-top: 20px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	img{
		width: 200px;
	}
	.yanyuan{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
		img{
			width: 100px;
		}
	padding-bottom: 10px;
	}
</style>
