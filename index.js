var v=document.getElementById("surp1");
var w=document.getElementById("surp2");
var x=document.getElementById("surp3");
var y=document.getElementById("surp4");
var z=document.getElementById("surp5");

var s=document.getElementById("msgbox");
var u=document.getElementById("wrp");
var m=document.getElementById("text");
var t=document.getElementById("open");
var h=document.getElementById("para");

var box=document.createElement("div");
var box2=document.createElement("div");
var boxn=document.createElement("div");

var close=document.createElement("button");
var close2=document.createElement("button");
var closen=document.createElement("button");

var lines=document.createElement("p");
var lines2=document.createElement("p");
var linesn=document.createElement("p");

close.onmouseover=function(){close.style.background='orange';close.style.color='blue';};
close2.onmouseover=function(){close2.style.background='orange';close2.style.color='blue';};
closen.onmouseover=function(){closen.style.background='orange';closen.style.color='blue';};
close.onmouseleave=function(){close.style.background='yellow';close.style.color='black';};
close2.onmouseleave=function(){close2.style.background='yellow';close2.style.color='black';};
closen.onmouseleave=function(){closen.style.background='yellow';closen.style.color='black';};

var game=document.createElement("button");
game.onmouseover=function(){game.style.background='orange';game.style.color='blue';}
game.onmouseleave=function(){game.style.background='yellow';game.style.color='black';}

function jar(txt){
	close.onclick=function(){
		close.remove();
		box.remove();
	};

	close.style.height='30px';
	close.style.width='80px';
	close.style.background='yellow';
	close.style.position='absolute';
	close.style.bottom='20px';
	close.style.right='30px';
	close.style.border='solid';
	close.innerHTML='Close';
	close.style.fontSize='20px';
	close.style.color='black';
	close.style.borderRadius='25%';
	box.appendChild(close);

	box.style.height='270px';
	box.style.width='250px';
	box.style.background='#fddb27ff';
	box.style.position='absolute';
	box.style.top='140px';
	box.style.left='9px';
	box.style.opacity='0.9';
	box.style.border='solid';
	box.style.borderRadius='10%';
	box.style.borderColor='#00b1d2ff';
	box.style.borderWidth='8px';
	s.appendChild(box);

	lines.style.position='absolute';
	lines.style.top='-5px';
	lines.style.left='20px';
	lines.style.color='black';
	lines.innerHTML=txt;
	lines.style.fontSize='28px';
	lines.style.fontStyle='italic';
	box.appendChild(lines);

}
function jar2(txt){
	boxn.style.height='270px';
	boxn.style.width='250px';
	boxn.style.background='#fddb27ff';
	boxn.style.position='absolute';
	boxn.style.top='150px';
	boxn.style.left='15px';
	boxn.style.opacity='0.9';
	boxn.style.border='solid';
	boxn.style.borderRadius='10%';
	boxn.style.borderColor='#00b1d2ff';
	boxn.style.borderWidth='8px'
	s.appendChild(boxn);

	closen.style.height='30px';
	closen.style.width='80px';
	closen.style.background='yellow';
	closen.style.position='absolute';
	closen.style.bottom='20px';
	closen.style.right='30px';
	closen.style.border='solid';
	closen.innerHTML='Close';
	closen.style.fontSize='20px';
	closen.style.color='black';
	closen.style.borderRadius='25%';
	boxn.appendChild(closen);

	game.style.height='30px';
	game.style.width='80px';
	game.style.background='yellow';
	game.style.position='absolute';
	game.style.bottom='60px';
	game.style.right='30px';
	game.style.border='solid';
	game.innerHTML='Play';
	game.style.fontSize='20px';
	game.style.color='black';
	game.style.borderRadius='25%';
	boxn.appendChild(game);
	game.onclick=function () {
		open('/game/game.html')
	}

	closen.onclick=function(){
		closen.remove();
		linesn.remove();
		boxn.remove();
	};

	linesn.style.position='absolute';
	linesn.style.top='5px';
	linesn.style.left='20px';
	linesn.style.color='black';
	linesn.style.fontSize='30px';
	linesn.style.fontStyle='italic';
	linesn.innerHTML=txt;
	boxn.appendChild(linesn);
}
function jar3(txt){
	close2.onclick=function(){
		close2.remove();
		box2.remove();
	};

	close2.style.height='30px';
	close2.style.width='80px';
	close2.style.background='yellow';
	close2.style.position='absolute';
	close2.style.bottom='20px';
	close2.style.right='30px';
	close2.style.border='solid';
	close2.innerHTML='Close';
	close2.style.fontSize='20px';
	close2.style.color='black';
	close2.style.borderRadius='25%';
	box2.appendChild(close2);

	box2.style.height='270px';
	box2.style.width='250px';
	box2.style.background='#fddb27ff';
	box2.style.position='absolute';
	box2.style.top='140px';
	box2.style.left='9px';
	box2.style.opacity='0.9';
	box2.style.border='solid';
	box2.style.borderRadius='10%';
	box2.style.borderColor='#00b1d2ff';
	box2.style.borderWidth='8px';
	s.appendChild(box2);

	lines2.style.position='absolute';
	lines2.style.top='0px';
	lines2.style.left='20px';
	lines2.style.color='black';
	lines2.innerHTML=txt;
	lines2.style.fontSize='30px';
	lines2.style.fontStyle='italic';
	box2.appendChild(lines2);
}

var img1=document.createElement("img");
var img2=document.createElement("img");
var img3=document.createElement("img");
var img4=document.createElement("img");
var img5=document.createElement("img");
var img6=document.createElement("img");
var img7=document.createElement("img");
var img8=document.createElement("img");

var msg =new SpeechSynthesisUtterance();
msg.volume=1;
msg.rate=1;

img1.onclick=function(){
	var a='Wish you a many more returns of the day!!';
	try{
		msg.lang='en-US';
		msg.text=a;
		window.speechSynthesis.speak(msg);
		jar(a);
	}catch(err){
		jar(a);
	}
}
img2.onclick=function(){
	jar("Wishing you another amazing year around the sun by your side!")
}
img3.onclick=function(){
	jar("Sending you infinite amount of joy and happiness on your birthday!");
}
img4.onclick=function(){
	jar2('I would like to play a game with YOU!!');
}
img5.onclick=function(){
	jar("How many candles do we need on your birthday cake? 100? 200?");
}
let currentsong=0;
img6.onclick=function(){
	var songs=['music/music1.mp3','music/music3.mp3','music/music2.mp3','music/music4.mp3','music/music5.mp3','music/music6.mp3']
	currentsong++;
	var audio=new Audio(songs[currentsong]);
	
	jar3("I have Songs for U...");
	var playsong=function(){
		var next=function(){
			var nextbtn=document.createElement("button");
			nextbtn.style.position='absolute';
			nextbtn.style.top='120px';
			nextbtn.style.left='150px';
			nextbtn.innerHTML='>>';
			nextbtn.style.background='transparent';
			nextbtn.style.color='black';
			nextbtn.style.height='30px';
			nextbtn.style.width='30px';
			nextbtn.style.fontStyle='opacity';
			box2.appendChild(nextbtn);
			nextbtn.onclick=function(){
				audio.pause();
				img6.onclick();
			}
		}
		var plays=function () {
			var playbtn=document.createElement("button");
			playbtn.style.position='absolute';
			playbtn.style.top='120px';
			playbtn.style.left='100px';
			playbtn.innerHTML='1>';
			playbtn.style.background='transparent';
			playbtn.style.color='black';
			playbtn.style.height='30px';
			playbtn.style.width='30px';
			playbtn.style.fontStyle='opacity';
			box2.appendChild(playbtn);
			playbtn.onclick=function(){
				playbtn.remove();
				audio.play();
				pauses();
			}
		}
		var pauses=function () {
			var pausebtn=document.createElement("button");
			pausebtn.style.position='absolute';
			pausebtn.style.top='120px';
			pausebtn.style.left='100px';
			pausebtn.innerHTML='11';
			pausebtn.style.background='transparent';
			pausebtn.style.color='black';
			pausebtn.style.height='30px';
			pausebtn.style.width='30px';
			pausebtn.style.fontStyle='opacity';
			box2.appendChild(pausebtn);
			pausebtn.onclick=function(){
				pausebtn.remove();
				audio.pause();
				plays();
			}
		}
		plays();
		next();
	}
	playsong();
}
img7.onclick=function(){
	jar("I hope you're enjoying your special day doing whatever it is you want!")
}
function info(){
	alert("Hi, Made it for U!!!\n\nClick on message to see\n something Special!!\n\n& click on each cat will make u more happy!!!")
}
document.getElementById("info").addEventListener('click',info);
function deco(ele){
	for(var i=0;i<50;i++){
		var clone=ele.cloneNode(true);
		document.body.appendChild(clone);
		ele.style.background=generateRandomColor();
		ele.style.height='10px';
		ele.style.width='5px';
		ele.style.top=randpos();
		ele.style.left=randpos();
	}
}
function generateRandomColor(){
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
function randpos(){
	var pos = Math.round(Math.random()*97.5);
	return pos+'%';
}
img2.onmouseover=function(){img2.style.height='108px';img2.style.width='108px';}
img2.onmouseleave=function(){img2.style.height='100px';img2.style.width='100px';}
img3.onmouseover=function(){img3.style.height='110px';img3.style.width='110px';}
img3.onmouseleave=function(){img3.style.height='100px';img3.style.width='100px';}
img4.onmouseover=function(){img4.style.height='110px';img4.style.width='110px';}
img4.onmouseleave=function(){img4.style.height='100px';img4.style.width='100px';}
img5.onmouseover=function(){img5.style.height='110px';img5.style.width='110px';}
img5.onmouseleave=function(){img5.style.height='100px';img5.style.width='100px';}
img6.onmouseover=function(){img6.style.height='110px';img6.style.width='110px';}
img6.onmouseleave=function(){img6.style.height='100px';img6.style.width='100px';}
img7.onmouseover=function(){img7.style.height='110px';img7.style.width='110px';}
img7.onmouseleave=function(){img7.style.height='100px';img7.style.width='100px';}

t.addEventListener('click',surprise);

function surprise(){
	u.remove();
	m.remove();
	h.remove();

	s.style.borderColor='red';
	s.style.borderRadius='5%';
	s.style.borderWidth='10px';
	s.style.height='550px';
	s.style.width='280px';
	s.style.transition='1.0s';

	img1.src="imgs/cake.gif";
	img1.style.height='150px';
	img1.style.width='150px';
	img1.style.position='absolute';
	img1.style.bottom='0px';
	img1.style.left='50px';
	img1.style.cursor='pointer';
	s.appendChild(img1);

	img2.src="imgs/eat.gif";
	img2.style.height='100px';
	img2.style.width='100px';
	img2.style.position='absolute';
	img2.style.bottom='130px';
	img2.style.left='0px';
	img2.style.cursor='pointer';
	s.appendChild(img2);

	img3.src="imgs/cute.gif";
	img3.style.height='100px';
	img3.style.width='100px';
	img3.style.position='absolute';
	img3.style.bottom='110px';
	img3.style.left='180px';
	img3.style.cursor='pointer';
	s.appendChild(img3);

	img4.src="imgs/run.gif";
	img4.style.height='100px';
	img4.style.width='100px';
	img4.style.position='absolute';
	img4.style.bottom='210px';
	img4.style.left='150px';
	img4.style.cursor='pointer';
	s.appendChild(img4);

	img5.src="imgs/ok.gif";
	img5.style.height='100px';
	img5.style.width='100px';
	img5.style.position='absolute';
	img5.style.bottom='215px';
	img5.style.left='10px';
	img5.style.cursor='pointer';
	s.appendChild(img5);

	img6.src="imgs/sing.gif";
	img6.style.height='100px';
	img6.style.width='100px';
	img6.style.position='absolute';
	img6.style.bottom='310px';
	img6.style.left='20px';
	img6.style.cursor='pointer';
	s.appendChild(img6);

	img7.src="imgs/couple.gif";
	img7.style.height='100px';
	img7.style.width='100px';
	img7.style.position='absolute';
	img7.style.bottom='310px';
	img7.style.left='150px';
	img7.style.cursor='pointer';
	s.appendChild(img7);

	img8.src="imgs/wall.gif";
	img8.style.height='145px';
	img8.style.width='280px';
	img8.style.position='absolute';
	img8.style.top='0px';
	img8.style.left='0px';
	s.appendChild(img8);
	t.remove();
}

deco(v);
deco(w);
deco(x);
deco(y);
deco(z);
