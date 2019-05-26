function check(){
      var name=document.getElementById("name").value;
var pass=document.getElementById("pass").value;
if(name=="admin" && pass=="lxnb233"){
alert("登入成功");
window.document.f.action="./fw.html";
window.document.f.submit();
}else{
alert("用户名或密码错误");
window.document.f.action="./nmsl.html";
window.document.f.submit()
}

}
