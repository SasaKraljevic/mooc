var is_Decimal=false;
var is_Operator=false;
var Value_Last=false;
var Operator=false;
var is_Executed=false;
var is_Method=false;
var is_Constant=false;
var Equation="";
function enterValue(num){
	document.calculator.clearButton.value='CE';
	  if(is_Constant){
	  	return;
	  }
	  if(document.calculator.display.value=="Error"){
	  	document.calculator.display.value='';
	  }
	  if(is_Operator){
	  	Equation+=num;
	  	document.calculator.display.value=num;
	  	is_Operator=false;
	  	is_Decimal=false;
	  	is_Executed=false;
	  	is_Method=false;
	  	return;
	  }
	  if(is_Executed||is_Method){
	  	Equation=num;
	  	document.calculator.display.value=num;
	  	is_Operator=false;
	  	is_Decimal=false;
	  	is_Executed=false;
	  	is_Method=false;
	  	Value_Last=false;
	  	Operator=false;
	  	return;
	  }
	  Equation+=num;
	  document.calculator.display.value+=num;
	  is_Operator=false;
	  is_Executed=false;
	  is_Method=false;
	  return;
	}
	function enterDecimal(){
		if(is_Decimal){
			return;
		}
		if(document.calculator.display.value.indexOf('.')==-1){
			enterValue('.');
			is_Decimal=true;
			return;
		}
		if(is_Executed){
			enterValue('.');
			is_Decimal=true;
			return;
		}
		if(is_Operator){
			enterValue('.');
			is_Decimal=true;
			return;
		}}
	function operator(oper){
		document.calculator.clearButton.value='CE';
		if(document.calculator.display.value==''){
			return;
		}
		if(is_Operator){
			str1=Operator;
			str2=Equation;
			ind=str2.lastIndexOf(str1);
			Equation=Equation.substring(0,ind);
			Equation+=oper;Operator=oper;
			is_Operator=true;
			document.calculator.clearButton.value='AC';
			return;
		}
		if(is_Executed){
			Value_Last=parseFloat(Equation);
			Equation=Value_Last+oper;
			Operator=oper;
			is_Decimal=false;
			is_Operator=true;
			is_Executed=false;
			is_Method=false;
			return;
		}
		document.calculator.display.value=parseFloat(document.calculator.display.value);
		Value_Last=document.calculator.display.value;
		Equation+=oper;
		Operator=oper;
		is_Operator=true;
		is_Decimal=false;
		is_Executed=false;
		is_Method=false;
		is_Constant=false;
		return;
	}

	function execute(){
		is_Constant=false;
		if(document.calculator.display.value==Equation){
			document.calculator.display.value=parseFloat(Equation);
			is_Executed=true;
			is_Decimal=false;
			is_Operator=false;
		}
		if(is_Operator){
			document.calculator.display.value="Error";
			is_Decimal=false;
			is_Operator=false;
			Value_Last=false;
			Operator=true;
			is_Executed=false;
			return;
		}
		if(document.calculator.display.value==''||!Operator){
			document.calculator.testing.value=parseFloat(Equation);
			return;
		}
		if(is_Executed){
			document.calculator.testing.value=parseFloat(Equation);
			return;
		}
		Value_Last=parseFloat(document.calculator.display.value);
		string1=document.calculator.display.value;
		string2=Equation;
		index=string2.lastIndexOf(string1);
		Equation=Equation.substring(0,index);
		Equation+=Value_Last;
		Eq=Equation;
		document.calculator.display.value=eval(Eq);
		Equation=parseFloat(document.calculator.display.value);
		Value_Last=parseFloat(document.calculator.display.value);
		document.calculator.clearButton.value='CE';
		is_Executed=true;
		is_Decimal=false;
		is_Operator=false;
	}

	function display_clear(){
		if((document.calculator.clearButton.value=='AC')||(document.calculator.display.value=='')||(document.calculator.display.value==Equation)){
			Equation='';
			document.calculator.display.value='';
			document.calculator.clearButton.value='AC';
			is_Executed=false;
			is_Decimal=false;
			is_Operator=false;
			Value_Last=false;
			return;
		}
		if(is_Executed){
			Equation=document.calculator.display.value;
			document.calculator.display.value='';
			is_Executed=false;
			is_Decimal=false;
			is_Operator=false;
			document.calculator.clearButton.value='AC';
			return;
		}
		if(document.calculator.clearButton.value=='CE'){
			if(is_Operator){
				str1=Operator;
				str2=Equation;
				ind=str2.lastIndexOf(str1);
				Equation=Equation.substring(0,ind);
				document.calculator.display.value='';
				is_Operator=false;
				document.calculator.clearButton.value='AC';
				return;
			}
			str1=document.calculator.display.value;
			str2=Equation;ind=str2.lastIndexOf(str1);
			Equation=Equation.substring(0,ind);
			document.calculator.display.value='';
			is_Operator=true;
			document.calculator.clearButton.value='AC';
			return;
		}}

		function memory_plus(){
			if(document.calculator.display.value==''){
				return;
			}
			a=parseFloat(document.calculator.memory.value);
			b=parseFloat(document.calculator.display.value);
			t=a+b;
			document.calculator.memory.value=t;
		}
		function memory_minus(){
			if(document.calculator.display.value==''){
				return;
			}
			a=parseFloat(document.calculator.memory.value);
			b=parseFloat(document.calculator.display.value);
			t=a-b;document.calculator.memory.value=t;
		}
		function memory_recall(){
			if(document.calculator.display.value==Equation){
				document.calculator.display.value='';
				is_Executed=true;
				enterValue(document.calculator.memory.value);
				return;
			}
			document.calculator.display.value='';
			enterValue(document.calculator.memory.value);
			is_Constant=true;
		}
		function memory_clear(){
			document.calculator.memory.value=0;
		}
		function power(p){
			if(document.calculator.display.value==''){
				return;
			}
			if(document.calculator.display.value==Equation||is_Executed){
				val=parseFloat(document.calculator.display.value);
				r=Math.pow(val,p);
				document.calculator.display.value=r;
				Value_Last=r;
				Equation=r;
				document.calculator.clearButton.value='AC';
				is_Operator=false;
				is_Decimal=false;
				is_Executed=false;
				is_Method=true;
				return;
			}
			if(is_Operator){
				val=parseFloat(Value_Last);
				r=Math.pow(val,p);
				document.calculator.display.value=r;
				Value_Last=r;
				Equation+=r;
				document.calculator.clearButton.value='CE';
				is_Operator=false;
				is_Decimal=false;
				is_Executed=false;
				is_Method=true;
				return;
			}
			val=parseFloat(document.calculator.display.value);
			r=Math.pow(val,p);
			string1=document.calculator.display.value;
			string2=Equation;
			index=string2.lastIndexOf(string1);
			Equation=Equation.substring(0,index);
			Equation+=r;
			document.calculator.display.value=r;
			Value_Last=r;
			document.calculator.clearButton.value='CE';
			is_Operator=false;
			is_Decimal=false;
			is_Executed=false;
			is_Method=true;
			return;
		}
		function negate(){
			if(document.calculator.display.value==''){
				return;
			}
			if(document.calculator.display.value==Equation||is_Executed){
				val=parseFloat(document.calculator.display.value);
				r=val*-1;
				document.calculator.display.value=r;
				Value_Last=r;
				Equation=r;
				document.calculator.clearButton.value='AC';
				is_Operator=false;
				is_Decimal=false;
				if(is_Executed){
					is_Executed=true;
				}
				else{is_Executed=false;
				}
				is_Method=false;
				return;
			}
			if(is_Operator){
				val=parseFloat(Value_Last);
				r=val*-1;
				document.calculator.display.value=r;
				Value_Last=r;
				Equation+=r;
				document.calculator.clearButton.value='CE';
				is_Operator=false;
				is_Decimal=false;
				is_Executed=false;
				is_Method=false;
				return;
			}
			val=parseFloat(document.calculator.display.value);
			r=val*-1;
			string1=document.calculator.display.value;
			string2=Equation;
			index=string2.lastIndexOf(string1);
			Equation=Equation.substring(0,index);
			Equation+=r;
			document.calculator.display.value=r;
			Value_Last=r;
			document.calculator.clearButton.value='CE';
			is_Operator=false;
			is_Decimal=false;
			is_Executed=false;
			is_Method=false;
			return;
		}
		function percent(){
			if(document.calculator.display.value==''){
				return;
			}
			if(document.calculator.display.value==Equation){
				val=parseFloat(document.calculator.display.value);
				r=val/100;
				document.calculator.display.value=r;
				Value_Last=r;
				Equation=r;
				document.calculator.clearButton.value='AC';
				is_Operator=false;
				is_Decimal=false;
				is_Executed=false;
				is_Method=true;
				return;
			}
			if(is_Operator){
				val=parseFloat(Value_Last);
				r=val/100;
				document.calculator.display.value=r;
				Value_Last=r;
				Equation+=r;
				document.calculator.clearButton.value='CE';
				is_Operator=false;
				is_Decimal=false;
				is_Executed=false;
				is_Method=true;
				return;
			}
			val=parseFloat(document.calculator.display.value);
			p=val/100;
			r=p*Value_Last;
			if(Operator=='*'||Operator=='/'){
				r=p;
			}
			string1=document.calculator.display.value;
			string2=Equation;
			index=string2.lastIndexOf(string1);
			Equation=Equation.substring(0,index);
			Equation+=r;
			document.calculator.display.value=r;
			Value_Last=r;
			document.calculator.clearButton.value='CE';
			is_Operator=false;
			is_Decimal=false;
			is_Executed=false;
			is_Method=true;
			return;
		}
		function pct(){
			if(document.calculator.display.value==''){
				return;
			}
			if(is_Operator){
				r=Value_Last/100*Value_Last;
				document.calculator.display.value=r;
				Equation=Value_Last+Operator+r;
				is_Operator=false;
				is_Decimal=false;
				is_Executed=false;
				return;
			}
			if(document.calculator.display.value==Equation){
				Equation=parseFloat(Equation);
				r=Equation/100;
				document.calculator.display.value=r;
				Value_Last=r;
				Equation=r;
				is_Operator=false;
				is_Decimal=false;
				is_Executed=false;
				return;
			}
			val=parseFloat(document.calculator.display.value);
			r=val/100;
			document.calculator.display.value=r;
			Equation=Value_Last+Operator+r;
			document.calculator.clearButton.value='CE';
			return;
		}
		function ngt(){
			if(document.calculator.display.value==''){
				return;
			}
			if(is_Operator){
				r=Value_Last*-1;
				document.calculator.display.value=r;
				Equation=Value_Last+Operator+r;
				is_Operator=false;
				is_Decimal=false;
				is_Executed=false;
				return;
			}
			if(document.calculator.display.value==Equation){
				Equation=parseFloat(Equation);
				r=Equation*-1;
				document.calculator.display.value=r;
				Value_Last=r;
				Equation=r;
				is_Operator=false;
				is_Decimal=false;
				is_Executed=false;
				return;
			}
			val=parseFloat(document.calculator.display.value);
			r=val*-1;
			document.calculator.display.value=r;
			Equation=Value_Last+Operator+r;
			document.calculator.clearButton.value='CE';
			return;
		}
		function inverse(){
			if(document.calculator.display.value==''){
				return;
			}
			if(is_Operator){
				r=1/Value_Last;
				document.calculator.display.value=r;
				Equation=Value_Last+Operator+r;
				is_Operator=false;
				is_Decimal=false;
				is_Executed=false;
				return;
			}
			if(document.calculator.display.value==Equation){
				Equation=parseFloat(Equation);
				r=1/Equation;
				document.calculator.display.value=r;
				Value_Last=r;
				Equation=r;
				is_Operator=false;
				is_Decimal=false;
				is_Executed=false;
				return;
			}
			val=parseFloat(document.calculator.display.value);
			r=1/val;
			document.calculator.display.value=r;
			Equation=Value_Last+Operator+r;
			document.calculator.clearButton.value='CE';
			return;
		}
		function pi(){
			document.calculator.display.value='';
			enterValue(Math.PI);
			return;
		}
		function factorial(){
			if(document.calculator.display.value==''){
				return;
			}
			if(is_Operator){
				r=fact(Value_Last);
				document.calculator.display.value=r;
				Equation=Value_Last+Operator+r;
				is_Operator=false;
				is_Decimal=false;
				is_Executed=false;
				return;
			}
			if(document.calculator.display.value==Equation){
				Equation=parseFloat(Equation);
				r=fact(Equation);
				document.calculator.display.value=r;
				Value_Last=r;
				Equation=r;
				is_Operator=false;
				is_Decimal=false;
				is_Executed=false;
				return;
			}
			val=parseFloat(document.calculator.display.value);
			r=fact(val);
			document.calculator.display.value=r;
			Equation=Value_Last+Operator+r;
			document.calculator.clearButton.value='CE';
			return;
		}
		function fact(num){
			if(num<0||num!=Math.abs(num)){
				return NaN;
			}
			else if(num==0){
				return 1;
			}
			else{
				return(num*fact(num-1));}
			}