const path = require("path");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
var babel = require("@babel/core");
var less = require("less");
module.exports = {
	mode: "development",
	devtool: "source-map",
	watch: true,
	entry: "./src/app.js",
	output: {
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		// new CleanWebpackPlugin(),
		new CopyPlugin(
			[
				{
					from: "**/*.wxml",
					to: "./",
				},
				{
					from: "**/*.json",
					to: "./",
				},
				{
					from: "**/*.jpg",
					to: "./",
				},
				{
					from: "**/*.png",
					to: "./",
				},
				{
					from: "**/*.css",
					to: "./",
				},
				{
					from: "**/*.less",
					to: "./",
					transform(content, path) {
						return less.render(content.toString()).then(function (output) {
							return output.css;
						});
					},
					transformPath(targetPath) {
						return targetPath.replace(".less", ".wxss");
					},
				},
				{
					from: "**/*.js",
					// ignore: ["*.test.js", "*.spec.js"],
					to: "./",
					transform(content, path) {
						const newCode = babel.transformSync(content, {
							babelrc: true,
							presets: ["@babel/env"],
						}).code;
						return Promise.resolve(newCode.toString());
					},
				},
			],
			{
				context: "./src",
			}
		),
	],
};
