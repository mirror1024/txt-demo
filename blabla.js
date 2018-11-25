var vm = new Vue({
	el: '#app',
	data: function() {
		return {
			listType: '古代',
			showFilesLis: [],
			
			endBooks:[],
			unEndBooks:[],
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

			userList: [
				{
					"userName": "秦嘉",
					books: [{
						"bookName": "《多想成为你的鹿》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3648154",
						"startDate": "2018-01-01",
						"endDate": ""
					}, {
						"bookName": "《你要我的哪颗心》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3596430",
						"startDate": "2018-01-01",
						"endDate": "2018-11-23",
						num:216100
					}]
				},
				{
					"userName": "六日瞳",
					books: [{
						"bookName": "《虐文真香警告（穿书）》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3728230",
						"startDate": "2018-01-01",
						"endDate": ""
					}, {
						"bookName": "《点击就看性感夫君在线挨打》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3580142",
						"startDate": "2018-01-01",
						"endDate": "2018-11-23",
						num:222573
					}]
				},
				{
					"userName": "叶不弯",
					books: [{
						"bookName": "《穿成大佬的白月光（穿书）》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3697604",
						"startDate": "2018-01-01",
						"endDate": ""
					}, {
						"bookName": "《女团C位上位日记》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3684405",
						"startDate": "2018-01-01",
						"endDate": "2018-11-23",
						num:150759
					}]
				},
				{
					"userName": "汉堡年糕",
					books: [{
						"bookName": "《万物留痕》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3596184",
						"startDate": "2018-01-01",
						"endDate": ""
					}, {
						"bookName": "《重生之银盘映霜刃》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3493550",
						"startDate": "2018-01-01",
						"endDate": "2018-11-23",
						num:439462
					}]
				},
				{
					"userName": "冰激凌真好吃",
					books: [{
						"bookName": "《书生总是嘴上说不要》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3614152",
						"startDate": "2018-01-01",
						"endDate": "2018-11-23",
						num:215780
					}]
				},
				{
					"userName": "水中素笠",
					books: [{
						"bookName": "《穿成龙傲天的炮灰妈》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3587151",
						"startDate": "2018-01-01",
						"endDate": "2018-11-23",
						num:151511
					}]
				},{
					"userName": "山大竹子",
					books: [{
						"bookName": "《我一定要活过这一集》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3902864",
						"startDate": "2018-11-01",
						"endDate": ""
					}]
				},
				{
					"userName": "许菲云",
					books: [{
						"bookName": "《竹马太爱我》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3636597",
						"startDate": "2018-01-01",
						"endDate": ""
					}, {
						"bookName": "《穿成一只小奶猫后》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3628442",
						"startDate": "2018-01-01",
						"endDate": "2018-11-23",
						num:116763
					}]
				},
				{
					"userName": "鹌鹑崽",
					books: [{
						"bookName": "《九零年败家子》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3105286",
						"startDate": "2018-01-01",
						"endDate": "2018-11-23",
						num:150394
					}]
				},
				{
					"userName": "痴非愚",
					books: [{
						"bookName": "《长公主脱单指南》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3615120",
						"startDate": "2018-01-01",
						"endDate": ""
					}, {
						"bookName": "《（快穿）炮灰也想要苏爽人生》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3307706",
						"startDate": "2018-01-01",
						"endDate": "2018-11-23",
						num:303694
					}]
				},
				{
					"userName": "沐小烦",
					books: [{
						"bookName": "《就想嫁个老实人》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3507980",
						"startDate": "2018-01-01",
						"endDate": "2018-11-23",
						num:245805
					}]
				},
				{
					"userName": "皮胖",
					books: [{
						"bookName": "《圆梦系统送温暖》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3594488",
						"startDate": "2018-01-01",
						"endDate": "2018-11-23",
						num:210474
					}]
				},
				{
					"userName": "戈多糖",
					books: [{
						"bookName": "《今日宜喜欢你》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3603884",
						"startDate": "2018-01-01",
						"endDate": "2018-11-23",
						num:157698
					}]
				},
				{
					"userName": "桃叶步",
					books: [{
						"bookName": "《我在大唐搞事情》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3219386",
						"startDate": "2018-01-01",
						"endDate": "2018-11-23",
						num:127937
					}]
				},
				{
					"userName": "苏湉",
					books: [{
						"bookName": "《秦时明月之天赐良缘》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3469281",
						"startDate": "2018-01-01",
						"endDate": "2018-11-23",
						num:349120
					}]
				},

				{
					"userName": "风月作笔",
					books: [{
						"bookName": "《虐渣女工，持证上岗（快穿）》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3856686",
						"startDate": "2018-01-01",
						"endDate": ""
					}]
				},
				{
					"userName": "万俟将将",
					books: [{
						"bookName": "《重生延禧攻略之继后难为》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3852211",
						"startDate": "2018-01-01",
						"endDate": ""
					}]
				},
				{
					"userName": "我村",
					books: [{
						"bookName": "《西宫凉如月》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3860018",
						"startDate": "2018-01-01",
						"endDate": ""
					}, ]
				},
				{
					"userName": "子规啼雪",
					books: [{
						"bookName": "《润玉传之半城风月》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3863836",
						"startDate": "2018-01-01",
						"endDate": ""
					}]
				},
				{
					"userName": "蜜糖糕",
					books: [{
						"bookName": "《花无重开》",
						"bookUrl": "http://xwz333.lofter.com/post/1edf74e1_12b957403",
						"startDate": "2018-01-01",
						"endDate": ""
					}]
				},
				{
					"userName": "青瑜娑",
					books: [{
						"bookName": "《返魂》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3932969",
						"startDate": "2018-11-22",
						"endDate": ""
					},{
						"bookName": "《[综英美]黑魔王洗白计划》",
						"bookUrl": "http://www.jjwxc.net/onebook.php?novelid=3933898",
						"startDate": "2018-11-22",
						"endDate": ""
					}]
				}

			]
		}
	},
	mounted: function() {
		this.loadFilesListByType('古代');
		this.loadBookLIst();

	},

	methods: {
		handleClick(tab, event) {
			var type = tab.name;
			this.loadFilesListByType(type);
		},
		loadFilesListByType(type) {
			var _this = this;
			var showFilesLis = [];
			this.FilesList.forEach(function(value, index, array) {
				if(value.fileType == type) {
					showFilesLis.push(value);
				}
			});
			// 填充user
			showFilesLis.forEach(function(value, index, array) {
				_this.userList.forEach(function(uservalue) {
					if(uservalue.userName == value.userName) {
						value.bookName = uservalue.books[0].bookName;
						value.bookUrl = uservalue.books[0].bookUrl;
					}
				});
			});

			this.showFilesLis = showFilesLis;
		},
		downLoadFile(item) {
			var url = window.location.origin + `/txt.demo/files/`;

			var file = item.fileType + `/` + item.fileName;

			url = url + file;

			window.open(url);

		},

		loadBookLIst() {
			var _this = this;
			var endBooks = [];
			var unEndBooks = [];
			this.userList.forEach(function(value, index, array) {

				value.books.forEach(function(bookIten) {
					bookIten.userName=value.userName;
					if(bookIten.endDate) {
						endBooks.push(bookIten)
					} else {
						unEndBooks.push(bookIten)
					}
				});

			});

			_this.endBooks=endBooks;
			_this.unEndBooks=unEndBooks;
		}
	}
});