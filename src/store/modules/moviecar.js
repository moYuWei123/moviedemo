import axios from 'axios';
import router from '@/router';

// for (var i = 0; i < 10; i++) {
// 	var obj = {
// 		1:"aaa"
// 		}
// 	arrmovie.push(obj)
// 	}


const moviecar = {
	namespaced: true,

	state: {
		arrmovie: [],
		arrmovie1: []

	},
	mutations: {
		add(state, id) { //添加购物车
		
		
			if (localStorage.getItem("key")) {

				if (state.arrmovie1.some(ele => ele.id == id)) {
					console.log("已经收藏")

				} else {
					var item = state.arrmovie.find(ele => ele.id == id)
					// var obj = {
					// 	name: item.name,
					// 	num: 1,
					// 	id: item.id
					// }
					state.arrmovie1.push(item)
					console.log("收藏成功")

				}
				console.log(state.arrmovie1)
			} else {
				alert("请登录")
				router.push("/me")
			}




		},
		con(state) {
			state.arrmovie = movielist
			console.log(state.arrmovie)
		},
		del(state, id) { //删除购物车
		
		// this.$dialog.alert({
		//       message: '弹窗内容'
		//     });
			var index = state.arrmovie1.findIndex(ele => ele.id == id)

			state.arrmovie1.splice(index, 1)
			console.log("删除成功")
		},

	},

	actions: {

		fetchOrderList({

			state
		}) {
			axios.post('http://59.110.138.169/api/douban/movie/in_theaters').then((res) => {
				state.arrmovie = res.data
				console.log(res)
			}).catch((err) => {
				console.log(err)
			})
		}
	},
	getters: { //计算总价值
		total(state) {
			var checkcar = state.cararr.filter(ele => ele.isfinish == true)
			return checkcar.reduce((total, current) => total + current.price.number * current.num, 0)
		},

	}

}
export default moviecar
