/**
 * Created by cjy on 16/11/23.
 */

const hongbao = ({want, give, safe} = {}) => {

	let user = {};
	let isSuccess = false;
	let fetchCount = 0;
	let tryCount = 0;
	let doms = [...document.querySelectorAll('[data-cname][data-cnum="0"]')];
	let targets = doms.map(e => e.attributes['data-cname'].nodeValue);

	let uid = Object(window.$config).cuid || document.querySelector('[data-uid]') && document.querySelector('[data-uid]').attributes['data-uid'].nodeValue;
	let t;

	if (!uid) {
		return console.error(`请先登陆微博并跳转至红包飞页面
		https://hongbao.weibo.cn/h5/csk/index?portrait_only=1&sinainternalbrowser=topnav&share_menu=1&disable_sinaurl=1`)
	}

	if (!targets.length) {
		return console.log(`您的卡已经集齐～`)
	}

	const getData = (p = 1, cb) => {
		fetchCount++;
		console.count('获取信息')
		fetch('https://hongbao.weibo.cn/aj/h5/csk18/exchangehall?currentuid=' + uid + '&p=' + p, {
			method: 'GET',
			credentials: 'same-origin'
		}).then(res => res.json()).then(res => {
			user = res.data.currUser;
			cb(res.data.exchangeData, res.data.maxPage, res.data.page)
		})
	}

	const exchange = (params, success, fail) => {
		tryCount++;
		console.count('尝试换卡');
		let _params = new FormData();
		Object.keys(params).forEach(key => _params.append(key, params[key]));
		fetch('https://hongbao.weibo.cn/aj/h5/csk18/recexchangecard?currentuid=' + user.uid, {
			method: 'POST',
			body: _params,
			credentials: 'same-origin'
		}).then(res => res.json()).then(res => {
			if (res.code === 200) {
				success(res)
			} else {
				fail(res);
			}
		})
	}

	const findWanted = (dataList) => {
		if (want === undefined) {
			console.error('want参数缺失');
			return false
		}
		dataList.filter(dt => give ? (dt.giveCardname == want && dt.wantCardname == give) : dt.giveCardname == want).forEach(data => {
			if (safe && data.myCardNum <= 1) {
				return false
			}
			exchange({
				giveName: data.wantCardname,
				wantName: data.giveCardnam,
				num: data.myCardNum,
				giveImg: data.wantCardpic,
				wantImg: data.giveCardpic,
				uniquecode: data.uniquecode,
				giveUname: user.screen_name,
				wantUname: data.screen_name,
			}, res => {
				isSuccess = true;
				const msg = `查询数据${fetchCount}次，尝试换卡${tryCount}次，成功使用 ${data.wantCardname} 换得 ${want}`;
				console.log(msg)
			}, e => e)
		});
	}

	const cbHandler = (data, pageCount, page) => {
		findWanted(data,)
		if (isSuccess) {
			clearInterval(t)
			return;
		}
		if (pageCount > page) {
			getData(page + 1, cbHandler);
		} else {
			getData(1, cbHandler);
		}
	}

	getData(1, cbHandler);
	t = setInterval(e => {
		getData(1, cbHandler)
	}, 2000)
	return {
		abort: () => {
			clearInterval(t);
			done = true;
			return `换卡失败，获取信息${fetchCount}次，共尝试换卡${tryCount}次。`
		},
	}
}
