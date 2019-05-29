let flag = false;

window.onload = function(){
  action_label();
}

function action_label(){
  if(flag){
    document.getElementById('uho').innerText = 'uhouho';
  }else{
    document.getElementById('uho').innerText = '　';
  }
  flag = !flag;

  setTimeout(action_label, 2000);
}
