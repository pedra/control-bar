var CTRLBAR = function(b,c){
	var mode = 'page',
	key = '',
	background = '#00564F',
	color = '#FFF',
	proto = {
		mn:function(){},
		tx:function(){},
		nx:function(){},
		hm:function(){},
		bk:function(){}
	},

	config = {
	},

	setMode = function(v){
		if("undefined" !== typeof config[v])
			return mode = v;
		else return false;
	},

	getMode = function(){
		return mode;
	},

	setText = function(t){
		return gEl('tx'+key).innerHTML=t
	},

	show = function(e,s){
		s = s || false;
		if(e =='tx') return false;
		if(e == 'nav' || "undefined" == typeof e) {
			doShow('bk'+key,s)
			doShow('hm'+key,s)
			doShow('nx'+key,s)
			return;
		}
		doShow(e+key,s);
	},

	doShow = function(e,d){
		gEl(e).style.display=(d==true?'block':'none');
	},

	setAction = function(m,e,c){
		if("undefined" == typeof config[m]) config[m] = proto;
		config[m][e] = c;
	},

	command = function(c, v){
		if("undefined" == typeof config[mode][c]) return false;
		config[mode][c](v);
	},

	keygen = function(w) {
  		var t="",w=w||8;
  		var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_0123456789";
  		for(var i=0;i<w;i++)t +=c.charAt(Math.floor(Math.random()*c.length));
    	key=t;
    	return t
    },
    
    getKey = function(){
    	return key;
    },

	construct = function(b,c){
		if("string" == typeof b) background=b;
		if("string" == typeof c) color=c;
		config = {page:proto};
		var i = keygen();

		var s = document.createElement('STYLE');
		s.innerHTML ='.xm'+i+'{position:fixed;top:0;left:0;right:0;height:auto;z-index:1000;background:'+background+';color:'+color+';font-family:\'Open Sans Condensed\',sans-serif;font-size:.8em}.nav'+i+'{clear:both;min-width:320px}#mn'+i+',#hm'+i+',#bk'+i+',#nx'+i+'{background: 0 0 no-repeat;background-image:url(data:image/png;base64,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);height:48px;width:48px;float:right;cursor:pointer}#hm'+i+',#bk'+i+',#nx'+i+'{display:none;}#hm'+i+'{}#bk'+i+'{background-position:0 -48px}#nx'+i+'{background-position:0 -96px}#mn'+i+',#tx'+i+'{float:left}#mn'+i+'{background-position:0 -144px}#tx'+i+'{width:calc(100% - 192px);height:31px;padding:14px 0 0 0;overflow:hidden}#tx'+i+' span{color:#CCC}';
		document.head.insertAdjacentElement('beforeEnd',s);
		
		var d = document.createElement('DIV');
		d.className='xm'+i;
		d.innerHTML='<div class="nav'+i+'"><div id="mn'+i+'"></div><div id="tx'+i+'"></div><div id="nx'+i+'"></div><div id="hm'+i+'"></div><div id="bk'+i+'"></div></div>';
		document.body.insertAdjacentElement('afterBegin',d);		

		onclick('mn');
		onclick('tx');
		onclick('nx');
		onclick('hm');
		onclick('bk');
	},

	onclick = function(m){
		gEl(m+key).addEventListener('click',function(){CTRLBAR.command(m)})
	},
	gEl = function(e){
		return document.getElementById(e)||false
	}

	construct(b,c);

	return {		
		command: command,
		setAction: setAction,
		setText: setText,
		setMode: setMode,
		getMode: getMode,
		getKey: getKey,		
		hide: function(e){show(e,false)},
		show: function(e){show(e,true)}
	}
}