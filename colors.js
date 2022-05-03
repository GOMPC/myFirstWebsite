var links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}
function setColor(color){
  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length){
    alist[i].style.color = color;
    i = i + 1;
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body')
  if(self.value === 'night'){
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    self.value = 'day';

    links.setColor('powderblue'); // setColor('powderblue')를 객체에 묶었네~
  } else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    self.value = 'night';

    links.setColor('blue'); // setColor로 해도 되긴 되지~
    }
  }
