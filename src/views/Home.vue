<template>
	<div class="home">
		<van-nav-bar title="电影列表" />
		<ul>
			<router-link tag="li" v-for="item in list" :to="`/info?id=${item.id}`"  :key="item.id">
				<img :src="item.images.small" alt="" />
				<p>{{ item.title }}</p>
			</router-link>
		</ul>
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
			list: state => state.moviecar.arrmovie
		})
	},
	created() {
		this.con();
		console.log(this.list);
	},
	mounted() {},
	watch: {},
	methods: {
		...mapActions({
			con: 'moviecar/fetchOrderList'
		})
	},
	components: {}
};
</script>

<style scoped lang="scss">
.home {
	ul {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		li {
			margin-top: 20px;
			p {
				margin-top: 10px;
			}
		}
	}
	img {
		width: 150px;
	}
}
</style>
