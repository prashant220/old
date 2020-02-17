function calcy(){
	let  a,b,c,d,e,f;
	a=Number(document.getElementById("wd").value);
	b=Number(document.getElementById("maths").value);
	c=Number(document.getElementById("comp").value);
	d=Number(document.getElementById("phy").value);
	e=a+b+c+d;
	f=(e/400) * 100;

	if(f<=100 && f>=80){
		grade='A';
	}
	else if(f<=80 && f>=60){

		grade='B';
	}else if(f<=60 && f>=40){
		grade='C';
	}
	else{
		grade='D';
	}


	document.getElementById("showData").innerHTML=`out of total your score is ${e} and percentage is ${f}% and grade is ${grade}`;



}