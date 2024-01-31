const dao = require("../../../dao/index");
Component({
	lifetimes: {
		data: {
			loading: true,
			playlist: [],
			newSongList: [],
			mvList: [],
			djList: [],
		},
		attached: async function () {
			this.initData();
		},
	},
	methods: {
		initData: async function () {
			try {
				const list = await dao.getRecommendPlayList();
				const newSongList = await dao.getRecommendNewSongs();
				this.setData({
					loading: false,
					playlist: list,
					newSongList,
				});
			} catch (error) {
				wx.showToast({
					icon: "none",
					title: "获取数据失败，请稍后再试",
					duration: 3000,
				});
			}
		},
	},
});
