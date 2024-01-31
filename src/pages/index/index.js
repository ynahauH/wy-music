// index.js
Page({
	data: {
		currentTabId: "recommend",
	},
	onLoad: function () {},
	onChangeTab: function (e) {
		// 更新组件显示内容
		const tabId = e.detail;
		this.setData({
			currentTabId: tabId,
		});
	},
});
