var vm = new Vue({
	el: '#app',
	data: function() {
		return {
			listType: '古代',
			showFilesLis: [],
			FilesList: [{
					userName: "痴非愚",
					fileName: "古文写作要领.docx",
					fileType: "古代",
					uploadDate: "2018-11-22"
				},
				{
					userName: "痴非愚",
					fileName: "古言写作技法.docx",
					fileType: "古代",
					uploadDate: "2018-11-22"
				},

				{
					userName: "痴非愚",
					fileName: "关于大纲模板的补充.docx",
					fileType: "大纲",
					uploadDate: "2018-11-22"
				},
				{
					userName: "痴非愚",
					fileName: "大纲和细纲（老书虫作者培训之五）.doc",
					fileType: "大纲",
					uploadDate: "2018-11-22"
				}, {
					userName: "痴非愚",
					fileName: "大纲模板.doc",
					fileType: "大纲",
					uploadDate: "2018-11-22"
				},
				{
					userName: "痴非愚",
					fileName: "大纲模板.xlsx",
					fileType: "大纲",
					uploadDate: "2018-11-22"
				}, {
					userName: "痴非愚",
					fileName: "大纲篇课件.txt",
					fileType: "大纲",
					uploadDate: "2018-11-22"
				},
				{
					userName: "痴非愚",
					fileName: "雪花法大纲.docx",
					fileType: "大纲",
					uploadDate: "2018-11-22"
				},

				{
					userName: "痴非愚",
					fileName: "冲突与悬念.pdf",
					fileType: "情节",
					uploadDate: "2018-11-22"
				},
				{
					userName: "痴非愚",
					fileName: "卡文之有梗万事足.docx",
					fileType: "情节",
					uploadDate: "2018-11-22"
				}, {
					userName: "痴非愚",
					fileName: "故事 罗伯特·麦基.pdf",
					fileType: "情节",
					uploadDate: "2018-11-22"
				},
				{
					userName: "痴非愚",
					fileName: "故事核.docx",
					fileType: "情节",
					uploadDate: "2018-11-22"
				}, {
					userName: "痴非愚",
					fileName: "脑洞篇课件.txt",
					fileType: "情节",
					uploadDate: "2018-11-22"
				},


				{
					userName: "痴非愚",
					fileName: "《仙道口诀》（电子书 删节本）已出版 盛克琦点校.pdf",
					fileType: "玄幻",
					uploadDate: "2018-11-22"
				}, {
					userName: "沐小烦",
					fileName: "玄幻仙侠类神兽妖兽素材.pdf",
					fileType: "玄幻",
					uploadDate: "2018-11-22"
				}, {
					userName: "痴非愚",
					fileName: "玄幻小说丹药.pdf",
					fileType: "玄幻",
					uploadDate: "2018-11-22"
				}, {
					userName: "痴非愚",
					fileName: "玄幻小说素材.pdf",
					fileType: "玄幻",
					uploadDate: "2018-11-22"
				},
				{
					userName: "痴非愚",
					fileName: "茅山精华集.pdf",
					fileType: "玄幻",
					uploadDate: "2018-11-22"
				},




				{
					userName: "痴非愚",
					fileName: "关于霸道总裁.docx",
					fileType: "现代",
					uploadDate: "2018-11-22"
				}, {
					userName: "痴非愚",
					fileName: "学霸梗不正经不完全总结.docx",
					fileType: "现代",
					uploadDate: "2018-11-22"
				},

				{
					userName: "痴非愚",
					fileName: "言情--恋爱话术惯例.pdf",

					fileType: "现代",
					uploadDate: "2018-11-22"
				},

				{
					userName: "痴非愚",
					fileName: "小说创作之魂——欺骗术加催眠术 - 来源网络.doc",

					fileType: "经验",
					uploadDate: "2018-11-22"
				},
				{
					userName: "痴非愚",
					fileName: "投稿邮箱.pdf",

					fileType: "经验",
					uploadDate: "2018-11-22"
				}, {
					userName: "痴非愚",
					fileName: "经验.xlsx",

					fileType: "经验",
					uploadDate: "2018-11-22"
				}, {
					userName: "痴非愚",
					fileName: "给网文新人的成长辅导之基础篇.doc",

					fileType: "经验",
					uploadDate: "2018-11-22"
				},
				{
					userName: "痴非愚",
					fileName: "网文心得.pdf",

					fileType: "经验",
					uploadDate: "2018-11-22"
				}, {
					userName: "痴非愚",
					fileName: "论小说代入感.doc",

					fileType: "经验",
					uploadDate: "2018-11-22"
				},

			],

			userList: [{
					userName: "痴非愚",
					books: [{
						bookName: "（快穿）炮灰也想要苏爽人生",
						bookUrl: "http://www.jjwxc.net/onebook.php?novelid=3307706",
						startDate: "2017-01-01",
						endDate: "2018-05-05"

					}]

				},
				{
					userName: "沐小烦",
					books: [{
						bookName: "就想嫁个老实人",
						bookUrl: "http://www.jjwxc.net/onebook.php?novelid=3507980",
						startDate: "2017-01-01",
						endDate: "2018-05-05"

					}]

				}

			]
		}
	},
	mounted: function() {
		this.loadFilesListByType('古代');

	},

	methods: {
		handleClick(tab, event) {
			var type = tab.name;
			console.log(type);
			this.loadFilesListByType(type);
		},
		loadFilesListByType(type) {
			var _this = this;
			var showFilesLis = [];
			this.FilesList.forEach(function(value, index, array) {
				console.log(value, index);
				if (value.fileType == type) {
					showFilesLis.push(value);
				}
			});
			// 填充user
			showFilesLis.forEach(function(value, index, array) {
				_this.userList.forEach(function(uservalue) {
					if (uservalue.userName == value.userName) {
						value.bookName = uservalue.books[0].bookName;
						value.bookUrl = uservalue.books[0].bookUrl;
					}
				});
			});


			console.log(showFilesLis)
			this.showFilesLis = showFilesLis;
		},
		downLoadFile(item) {
			var url = window.location.origin + `/txt.demo/files/`;

			var file = item.fileType + `/` + item.fileName;

			url = url + file;
			console.log(url)
			window.open(url);

		}
	}
})
