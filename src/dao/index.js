const baseUrl = "http://localhost:3000/v1/";
async function getRecommendPlayList() {
	return new Promise((resolve, reject) => {
		wx.request({
			url: baseUrl + "personalized",
			data: {
				cookie: "",
			},
			success: function (res) {
				resolve(res.data.result);
			},
		});
	});
}

async function getRecommendNewSongs() {
	return new Promise((resolve, reject) => {
		wx.request({
			url: baseUrl + "personalized/newsong",
			data: {
				cookie: "",
			},
			success: function (res) {
				resolve(res.data.result);
			},
		});
	});
}

module.exports = {
	getRecommendPlayList,
	getRecommendNewSongs,
};
