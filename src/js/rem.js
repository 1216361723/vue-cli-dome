//响应页面尺寸
(function(doc, win) {
  const baseURL = 'https://www.jindola.com';
  let docEl = doc.documentElement;
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
	let	recalc = function() {
      let clientWidth = docEl.clientWidth;
			if(!clientWidth) return;

      let sum = 100 * (clientWidth / 750);
			if(sum > 100) sum = 100;
			if(sum < 42.6) sum = 42.6;
			docEl.style.fontSize = sum + 'px';
		};

	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
	win.baseURL = baseURL;
})(document, window);

