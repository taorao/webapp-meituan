document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + "px";
$(".add ul li a").each(function(index, ele) {
	$(ele).click(function() {
		$(".addcontent ul").removeClass("active");
		$(".add ul li a").removeClass("active");
		$(this).addClass("active");
		document.querySelectorAll(".addcontent ul")[index].className = "active"
	})
})
$.ajax({
	url: "http://owihzkfdx.bkt.clouddn.com/11.json",
	type: "get",
	success: function(res) {
		console.log(res)
		var res1 = res.rest;
		var str = "";
		res1.forEach(function(item, index) {
			str +=
				`
				    
				    <div class="maincontent">
                        <div class="maincontent_1">
                            <a href="order.html">
                                <img src="${item.img}" alt="">
                            </a>
                        </div>
                        <div class="maincontent_2">
                            <a href="order.html">
                                <p>${item.shortTitle}</p>
                                <span>${item.introduce}</span>
                            </a>
                        </div>
                        <div class="maincontent_3">
                            <a href="order.html">
                                <span>${item.price}元</span>
                                <del>门市价:${item.rack_rate}元</del>
                                <p>售出${item.sold}</p>
                            </a>
                        </div>
                    </div>`
			console.log(item.img, index)

		});
		$(".first-3").html(str);
	},
	error: function(err) {
		throw new Error(err)
	}
});

function formatBankNo(n) {
	if("" != n.value) {
		var t = new String(n.value);
		if(null == (t = t.substring(0, 22)).match(".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}")) {
			if(null == t.match(".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|.[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|.[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|.[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}")) {
				var a, e = accountChar = "";
				for(a = 0; a < t.length; a++) accountChar = t.substr(a, 1), isNaN(accountChar) || " " == accountChar || (e += accountChar);
				for(t = "", a = 0; a < e.length; a++) 4 == a && (t += " "), 8 == a && (t += " "), 12 == a && (t += " "), t += e.substr(a, 1)
			}
		} else t = " " + t.substring(1, 5) + " " + t.substring(6, 10) + " " + t.substring(14, 18) + "-" + t.substring(18, 25);
		t != n.value && (n.value = t)
	}
}

$(".yhangkaList").click(function() {
	$(".addYinhang").css("display", "block")
})
$(".bank_3 span").click(function() {
	$(".addYinhang").css("display", "block")
})
var sss=function(){
	$(".addTian").click(function(){
			$(".addYinhang").css("display", "none");
			if($("#_3").val().length === 22 && parseInt($("#_3").val().substr(0, 4)) === 6227) {
				var str = "";
				str = '<div class="yhangkaList"><h3>' + '建设银行' + '</h3><div class="yinhangMeass"><span class="hui">账号 </span>' + $("#_3").val() + '<a class="removeyin" href="#">[删除]</a></div></div>';
				$(str).insertBefore($(".yinhangka"));
			} else if($("#_3").val().length === 22 && parseInt($("#_3").val().substr(0, 4)) === 5309) {
				var str = "";
				str = '<div class="yhangkaList"><h3>' + '工商银行' + '</h3><div class="yinhangMeass"><span class="hui">账号 </span>' + $("#_3").val() + '<a class="removeyin" href="#">[删除]</a></div></div>';
				$(str).insertBefore($(".yinhangka"));
			} else {
				alert("银行卡输入错误")
			}

		})
}

//$(".addprice").each(function(index,ele){
//	$(ele).click(function(){
//		alert(1)
//	})
//})

var arr = function() {
	var fileBtn = document.querySelector('.third-2 input'),
		img = document.querySelector('.third-2 img');
	console.log(fileBtn)
	window.onload = function(e) {
		e = e || event
		e.preventDefault()
		if(localStorage.getItem('url')) {
			img.src = localStorage.getItem('url');
		}
		fileBtn.onchange = function(e) {
			e = e || event
			e.preventDefault()
			var fd = new FileReader();
			// readAsDataURL  将()中的文件 读成base64
			fd.readAsDataURL(this.files[0])
			fd.onload = function(e) {
				img.src = e.target.result
				localStorage.setItem('url', img.src)
			}
		}

	}
}

function setCookie(key, value, time) {
	var date = new Date()
	date.setDate(date.getDate() + time) // 当前时间 + 30天
	document.cookie = key + "=" + value + ";expires=" + date
}

function getCookie(key) {
	var _cookie = document.cookie; //username=wally; age=17; sex=man
	var arr = _cookie.split(";");
	for(var i = 0; i < arr.length; i++) {
		if(arr[i].split("=")[0].trim() === key) {
			return arr[i].split("=")[1]
		}
	}
}

function removeCookie(key) {
	setCookie(key, null, -1)
}
// 移除cookie

if(getCookie("username")){

}else{
	$(".people").click(function() {
	$(window).attr('location', './11.html');
})
}



$(".shouyexian").each(function(index, item) {
	$(item).click(function() {
		$(".shouyexian").attr("href", "main.html")
	})
})
$(".dingdan").each(function(index, item) {
	$(item).click(function() {
		$(".dingdan").attr("href", "dingdan.html")

	})
})
$(".meituanpng").each(function(index, item) {
	$(item).click(function() {
		$(".meituanpng").attr("href", "login.html")
	})
})

$(".soucend-2 ul li").each(function(index, Element) {
	$(Element).click(function() {
		console.log(index)
		$(".soucend-2 ul li").removeClass("active");
		$(".soucend-3 ul li").removeClass("active");
		$(".soucend-3 ul li")[index].className = "active";
		$(this).addClass("active");
	})
});




$(".quit .button2").click(function(e) {
	e=e||window.event;
	e.preventDefault();
	$(".quit .button2").css("display", "none");
	$(".quit .button1").css("display", "block");
	removeCookie("nickname");
	removeCookie("username");
	removeCookie("password");
	location.reload();
})

$(".quit .button1").click(function() {
	$(window).attr('location', "./11.html")
})
$(".entry-content2 ul li").each(function (index, item) {
			$(item).click(function () {
				$(".tog").removeClass("active")
				$(this).addClass("active")
			})
		})
		$(".tog-1").click(function () {
			$(".entry-content2-3").css("display", "none")
			$(".entry-content2-2").css("display", "block")
		})
		$(".tog-2").click(function () {
			$(".entry-content2-2").css("display", "none")
			$(".entry-content2-3").css("display", "block")
		})
		
		$(".entry-content1-2 button").click(function(){
				$(".entry-content4").css("display","block")
				$(".entry-content3").css("display","block")
				$(".entry-content1").css("display","none")
				$(".entry-content2").css("display","none")
		})
		$(".entry-content3-1f i").click(function(){
			$(".entry-content2").css("display","block")
				$(".entry-content1").css("display","block")
				$(".entry-content3").css("display","none")
				$(".entry-content4").css("display","none")
		})
$(".form-3").submit(function(e){
	e=e||window.event
	e.preventDefault();
	var userName = $("#txtUserName").val();
	var pwd = $("#txtPwd").val();
	var pwd1 = $("#txtPwd1").val();
	var nickname=$("#nickname").val();
	$("#btn3").click(function(){
			setCookie("nickname", nickname, 7)
			setCookie("username", userName, 7)
			setCookie("password", pwd, 7);
			location.reload()
	})
})
sss()
$("#btn1").click(function(){
	if($("#username-2").val()===getCookie("username")&&$("#password-2").val()===getCookie("password")){
		sss()
		location.href="login.html"
	}else if($("#username-2").val()===""||$("#password-2").val()===""){
		alert("不能为空")
	}else{
		alert("账号未注册,请先注册")
		$(".entry-content4").css("display","block")
				$(".entry-content3").css("display","block")
				$(".entry-content1").css("display","none")
				$(".entry-content2").css("display","none")
	}
})
if(getCookie("nickname")){
	$(".people").html(getCookie("nickname"));
	$(".information-s2s").html(getCookie("nickname"));
	$(".information-s2i").html(getCookie("username"))
	$(".third-3 span").click(function(){
			$(window).attr('location','./imfornation.html');
			$(".quit .button2").css("display","block")
			$(".quit .button1").css("display","none")
	});
	$(".four-1-set a").attr("href","adderss.html")
	$(".four-1-set1 a").attr("href","bank.html")
	$(".adress-3 span").click(function(){
		$(".adress-content-2").css("display","block")
	});
	arr()
	
}else{
	$(".quit .button2").css("display", "none");
	$(".quit .button1").css("display", "block");
	$(".four-1-set1 a").click(function(){
		alert("请先登录");$(window).attr('location', './11.html');
	});
	$(".four-1-set a").click(function(){
		alert("请先登录");$(window).attr('location', './11.html');
	});
	$(".third-3 span").click(function(){
		alert("请先登录");$(window).attr('location', './11.html');
	});
}
$(".entry-content3-1 .entry-content3-1s").click(function(){
	location.href="main.html"
})
$(".rename-1").click(function(){
	$(".rename-label").css('display',"block");
	$(".informationq-content-two1 ul").css("display","none");
	$(".quit").css('display',"none");
	$('.rename button').css('display','block')
	$('.informationq-content-first').css('display','none');
	$('.rename-information').css('display','block');
	rename()
})
$(".rename-2").click(function(){
	$(".rename-username").css('display',"block");
	$(".informationq-content-two1 ul").css("display","none");
	$(".quit").css('display',"none");
	$('.informationq-content-first').css('display','none');
	$('.rename-information').css('display','block');
	$('.rename button').css('display','block')
	rename()
})
$(".rename-3").click(function(){
	$(".rename-pwd").css('display',"block");
	$(".informationq-content-two1 ul").css("display","none");
	$(".quit").css('display',"none");
	
	$('.informationq-content-first').css('display','none');
	$('.rename button').css('display','block');
	$('.rename-information').css('display','block');
	rename()
})
var rename=function(){
$(".informationq-content-first1").click(function(e){
	e=e||window.event;
	e.preventDefault;
	$(".informationq-content-two1 ul").css("display","block");
	$(".quit").css('display',"block");
	$(".rename-label").css('display',"none");
	$(".rename-username").css('display',"none");
	$(".rename-pwd ").css('display',"none");
	$('.informationq-content-first').css('display','block')
	$('.rename-information').css('display','none');
	
	$('.rename button').css('display','none')
})
}