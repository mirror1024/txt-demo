var vm = new Vue({
	el: '#app',
	data: function() {
		return {
			visible: false,
			listType: '古代',

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
					fileName: "",

					fileType: "玄幻",
					uploadDate: "2018-11-22"
				},
				{
					userName: "痴非愚",
					fileName: "",

					fileType: "玄幻",
					uploadDate: "2018-11-22"
				} {
					userName: "痴非愚",
					fileName: "",

					fileType: "玄幻",
					uploadDate: "2018-11-22"
				},
				{
					userName: "痴非愚",
					fileName: "",

					fileType: "玄幻",
					uploadDate: "2018-11-22"
				} {
					userName: "痴非愚",
					fileName: "",

					fileType: "玄幻",
					uploadDate: "2018-11-22"
				},

				{
					userName: "痴非愚",
					fileName: "",

					fileType: "古代",
					uploadDate: "2018-11-22"
				},
				{
					userName: "痴非愚",
					fileName: "",

					fileType: "古代",
					uploadDate: "2018-11-22"
				} {
					userName: "痴非愚",
					fileName: "",

					fileType: "古代",
					uploadDate: "2018-11-22"
				},

				{
					userName: "痴非愚",
					fileName: "",

					fileType: "古代",
					uploadDate: "2018-11-22"
				},
				{
					userName: "痴非愚",
					fileName: "",

					fileType: "古代",
					uploadDate: "2018-11-22"
				} {
					userName: "痴非愚",
					fileName: "",

					fileType: "古代",
					uploadDate: "2018-11-22"
				}, {
					userName: "痴非愚",
					fileName: "",

					fileType: "古代",
					uploadDate: "2018-11-22"
				},
				{
					userName: "痴非愚",
					fileName: "",

					fileType: "古代",
					uploadDate: "2018-11-22"
				} {
					userName: "痴非愚",
					fileName: "",

					fileType: "古代",
					uploadDate: "2018-11-22"
				},

			],

			userList: [{
					userName: "痴非愚",
					books: [{
						bookName: "（快穿）炮灰也想要苏爽人生",
						startDate: "2017-01-01",
						endDate: "2018-05-05"

					}]

				}

			]
		}
	},
	methods: {
		handleClick(tab, event) {
			var type = tab.name;
			console.log(type);
			this.loadListByType(type);
		},
		loadFilesListByType(type) {

		}
	}
})