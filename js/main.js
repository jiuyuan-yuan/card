	var minIndex = 0
	//添加offset类
	var specialTags = document.querySelectorAll('[data-x]')
		for(let i = 0 ; i < specialTags.length ; i++){
			specialTags[i].classList.add('offset')
		}
	

	//portfolioList slide条切换
	var pl = document.getElementById('portfolioList').children;
	for (let i = 0 ; i < pl.length ; i++) {
		pl[i].onclick = function(){
			var plButton = document.getElementById('portfolioBar');
			plButton.className = "portfolioBar state-" +  i;
		}
	}
	//topNavBar二级菜单
	let topList = document.querySelectorAll('nav.menu > ul > li');
		for (let i = 0 ; i < topList.length ; i++) {
		topList[i].onmouseover = function(x){
			x.currentTarget.classList.add('active')
		}
		topList[i].onmouseout = function(x){
			x.currentTarget.classList.remove('active')
		}
	}
	

	window.onscroll = function(x){

		//固定navTopBar
		if(window.scrollY > 0){
			topNavBar.classList.add('sticking')
		}else{
			topNavBar.classList.remove('sticking')
		}
		
		lightClosest()
	}
	//open等待
	setTimeout(function(){
		sitewelcome.classList.remove('active')
		lightClosest()
	},500)

	function lightClosest(){
		//高亮 距离窗口最近的navTopBar-menu栏
		for(let i = 0 ; i < specialTags.length ; i++){	
		 	if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
		 		minIndex = i;
		 	}
		 specialTags[minIndex].classList.remove('offset')
		 //寻找 id对应的topBarNav-menu a标签
		 let id = specialTags[minIndex].id
		 let a = document.querySelectorAll('a[href="#' + id + '"]')
		 let meAndBrother = a[0].parentNode.parentNode.children 
		 for(let j = 0; j < meAndBrother.length ; j++){
		 	meAndBrother[j].classList.remove('highlight')
		 }
		 meAndBrother[minIndex].classList.add('highlight')
		}
	}
	//简单滑动
	var aTags = document.querySelectorAll('nav.menu > ul > li > a')
	for(let i = 0; i < aTags.length; i++){
		aTags[i].onclick = function(x){
			x.preventDefault()
			let top = document.querySelector(x.currentTarget.getAttribute('href')).offsetTop
			let n = 20   //次数
			let duration = 200/n // 移动间隔
			let currentTop = window.scrollY
			let targetTop = top - 80
			let distance = (targetTop - currentTop)/n
			let j = 0

			let id = setInterval(function(){
				if(j === n){
					window.clearInterval(id)
					return
				}
				j++
				window.scrollTo(0,currentTop + distance * j )
			},duration)
			
		}

	} 



/*	function animate() {
	    requestAnimationFrame(animate);
	    TWEEN.update();
	}
	requestAnimationFrame(animate);

	var coords = { x: 0, y: 0 };
	var tween = new TWEEN.Tween(coords) 
	    .to({ x: 300, y: 200 }, 1000) 
	    .easing(TWEEN.Easing.Quadratic.Out) 
	    .onUpdate(function() { 
	      box.style.setProperty('transform','translate('+coords.x+'px,'+ coords.y+'px)');
	    })
	    .start();
	*/