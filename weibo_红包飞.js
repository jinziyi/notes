/**
 * Created by cjy on 16/11/23.
 */

const hongbao = ({uid = 2238086712, want = 1, give, safe} = {}) => {

	let user = {};
	let isSuccess = false;
	let fetchCount = 0;
	let tryCount = 0;
	let t;

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
				console.log(`查询数据${fetchCount}次，尝试换卡${tryCount}次，成功使用 ${data.wantCardname} 换得 ${want}`)
			}, e => e)
		});
	}

	const cbHandler = (data, pageCount, page) => {
		findWanted(data,);
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

	t = setInterval(e => {
		getData(1, cbHandler)
	}, 2000)
	return {
		abort: () => {
			clearInterval(t);
			return `换卡失败，获取信息${fetchCount}次，共尝试换卡${tryCount}次。`
		},
	}
}
