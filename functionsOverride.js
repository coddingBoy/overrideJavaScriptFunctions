//override indexof method
	if(Array.prototype.indexOf===undefined){
		Array.prototype.indexOf=function(val, fromi){
			if(fromi===undefined){
				fromi=0;
			}
			for(var i=fromi;i<this.length;i++){
				if (this[i]===val)
				{
					return i;
				}
			}
			return -1;
		}
	}

//override trim method
	if(String.prototype.trim===undefined){
		String.prototype.trim=function(){
			return this.replace(/^\s+|\s+$/g,"");
		}
	}

//override isArray method
	if(Array.isArray===undefined){
		Array.isArray=function(arr){
			return Object.prototype.toString.call(arr)==="[object Array]";
		}
	}

//override Function.prototype.bind method for IE8
	if(Function.prototype.bind===undefined){
		Function.prototype.bind=function(obj){
			//console.log("hello");
		var fun=this;
		var args=Array.prototype.slice.call(arguments,1);
		return function(){
			var innerArgs=Array.prototype.slice.call(arguments);
			var allArgs=args.concat(innerArgs);
			fun.apply(obj,allArgs);
			}
		}
	}

//override every method for IE8
		if(Array.prototype.every===undefined){
		Array.prototype.every=function(fun){
			for (var i=0;i<this.length ;i++ )
			{
				if(this[i]!==undefined){
					if(fun(this[i],i,this)==false){
						return false;
					}
				}
			}
			return true;
		}
	}

	//override some method for IE8
	if(Array.prototype.some===undefined){
		Array.prototype.some=function(fun){
			for (var i=0;i<this.length ;i++ )
			{
				if(this[i]!==undefined){
					if(fun(this[i],i,this)==true){
						return true;
					}
				}
			}
			return false;
		}
	}

	//override map method for IE8
	if(Array.prototype.map===undefined){
		Array.prototype.map=function(fun){
			var newArr=[];
			for (var i=0;i<this.length ;i++ )
			{
				if(this[i]!==undefined){
					newArr[i]=fun(this[i],i,this);
				}
			}
			return newArr;
		}
	}

	//override forEach method for IE8
	if(Array.prototype.forEach===undefined){
		Array.prototype.forEach=function(fun){
			for (var i=0;i<this.length ;i++ )
			{
				if(this[i]!==undefined){
					fun(this[i],i,this);
				}
			}
			return this;
		}
	}
	
	//override filter method for IE8
	if(Array.prototype.filter===undefined){
		Array.prototype.filter=function(fun){
			var newArray=[];
			for (var i=0;i<this.length ;i++ )
			{
				if(this[i]!==undefined){
					if(fun(this[i],i,this)==true){
						newArray[newArray.length]=this[i];
					}
				}
			}
			return newArray;
		}
	}
	
	//override reduce method for IE8
	if(Array.prototype.reduce===undefined){
		Array.prototype.reduce=function(fun,base){
			base===undefined&&(base=0);
			for (var i=0;i<this.length ;i++ )
			{
				if(this[i]!==undefined){
					base=fun(base,this[i],i,this);
				}
			}
			return base;
		}
	}