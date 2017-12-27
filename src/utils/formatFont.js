/**
 * Created by cjy on 16/11/23.
 */
export default (resolve = 320) => {
	document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / resolve * 100 + 'px';
	window.onresize = e => {
		const width = window.innerWidth;
		document.getElementsByTagName('html')[0].style.fontSize = width / resolve * 100 + 'px';
	}
}