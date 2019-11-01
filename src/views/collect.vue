<template>
	<div>
		<van-nav-bar title="收藏" />
		<van-card v-for="item in list" :key="item.id" :thumb="item.images.small" :desc="item.year" :title="item.title">
			<div slot="footer"><van-button type="warning" size="small" @click="del(item.id)">删除</van-button></div>
		</van-card>
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
			list: state => state.moviecar.arrmovie1
		})
	},
	created() {},
	mounted() {},
	watch: {},
	methods: {
		...mapMutations({
			del1: 'moviecar/del'
		}),
		del(val) {
			this.$dialog
				.confirm({
					title: '操作',
					message: '确认删除吗?'
				})
				.then(() => {
					this.del1(val);
					// on confirm
				})
				.catch(() => {
					// on cancel
				});
			
		}
	},
	components: {}
};
</script>

<style scoped lang="scss"></style>
