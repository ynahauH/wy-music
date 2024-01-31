const tabs = require("./tab-list");
console.log("导航", tabs);
Component({
	properties: {},
	data: {
		tabList: tabs,
		activeTabId: "recommend",
	},
	methods: {
		onClickTap(event) {
			const currentTabId = event.currentTarget.dataset["id"];
			this.setData({
				activeTabId: currentTabId,
			});
			this.triggerEvent("change-tab", currentTabId);
		},
	},
});
