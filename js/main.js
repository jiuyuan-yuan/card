
	//作品集slide条
	var pl = document.getElementById('portfolioList').children;
	
	for (let i = 0 ; i < pl.length ; i++) {
		pl[i].onclick = function(){
			var plButton = document.getElementById('portfolioBar');
			plButton.className = "portfolioBar state-" +  i;
		}
	}
	//nav二级菜单
	let topList = document.querySelectorAll('nav.menu > ul > li');
		for (let i = 0 ; i < topList.length ; i++) {
		topList[i].onmouseover = function(x){
			x.currentTarget.classList.add('active')
		}
		topList[i].onmouseout = function(x){
			x.currentTarget.classList.remove('active')
		}
	}

	let minIndex = 0
	window.onscroll = function(x){
		//固定navTopBar
		if(window.scrollY > 0){
			topNavBar.classList.add('sticking')
		}else{
			topNavBar.classList.remove('sticking')
		}
		var specialTags = document.querySelectorAll('[data-x]')
		
		//高亮 navTopBar-menu栏
		for(let i = 0 ; i < specialTags.length ; i++){	
		 	if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
		 		minIndex = i;
		 	}
		 let id = specialTags[minIndex].id
		 let a = document.querySelectorAll('a[href="#' + id + '"]')
		 let meAndBrother = a[0].parentNode.parentNode.children 
		 for(let j = 0; j < meAndBrother.length ; j++){
		 	meAndBrother[j].classList.remove('highlight')
		 }
		 meAndBrother[minIndex].classList.add('highlight')
		}
	}