//로그인 버튼을 클릭했을때 
function loginCheck(e){
	e.preventDefault();
	const email = document.getElementById('email');
	const passwd = document.getElementById('passwd');
	console.log(email);
	console.log(passwd);
	
	if (!email.value){
		email.focus();
		alert('이메일을 입력해 주세요!');
		return ;
	}
	
	if (!passwd.value){
		passwd.focus();
		alert('비밀번호를 입력해 주세요!');
		return ;
	}
	
	document.getElementById('frmLogin').submit();
}

//로그아웃을 클릭했을때
function logoutCheck(e, path){
	e.preventDefault(); //기본이벤트 제거
	if (confirm('로그아웃하시겠습니까?')){
		location.href=path+'/logout';
	}
	
	
}
















