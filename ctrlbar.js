/*  --------------- Control Top Bar -------------------- */

var CTRLBAR = function(t,b,c){

	var key = '',
	background = '#00564F',
	color = '#FFF',
	
	link = function(name, text, onck){
		name = "number" == typeof name ? 'ln'+name : name;
		var e = getElement(name+key);

		if(!e) {
			var e = document.createElement('DIV');
			e.id=name;
			getElement('lnk'+key).insertAdjacentElement('beforeEnd',e);
		}

		e.innerHTML = text;

		if("function" === typeof onck) e.onclick = onck;
		return this;
	},

	button = function(name, onck){
		var e = getElement(name+key);
		if(!e) return this;

		if("function" === typeof onck) e.onclick = onck;
		return this;
	},

	show = function(name){
		ndShow(name, true);
		return this;
	},

	hide = function(name){
		ndShow(name, false);
		return this;
	},

	ndShow = function(name, dsp){
		if(name == 'nav') {
			doShow(getElement('bbk'+key),dsp)
			doShow(getElement('bnx'+key),dsp)
			doShow(getElement('bhm'+key),dsp)
			doShow(getElement('bmn'+key),dsp)
			return;
		}
		if(name == null || "undefined" == typeof name){
			doShow(getElement('ctb'+key),dsp);
			return;
		}

		var e = getElement(name+key);
		if(!e) return;

		doShow(e,dsp);
	},

	doShow = function(e,dsp){
		dsp = dsp == true ? 'inline-block' : 'none';
		e.style.display = dsp;
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

    mountCss = function(i, background, color){    	
		var s = document.createElement('STYLE');

		var icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAADACAYAAABCkOCeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwMS8wOS8xONJiGi0AAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAGRElEQVR4nO2dW4hWVRTHf9+MjuFcUmkuOhVdZrLRUsuCIIWgqECrpwKDoKKHiqDspZ6ih4gSonowouhOSklIJJkPRaVvI5aJ42UqpMbLTKZmWd5XD2t9fDPTjDpn75nF0PrBYeas852z93/O2eucj/WffUoiwnimyrsDqYQAb0KANyHAmxDgTQjwJgR4EwK8mZDhGPXAlUATsAvoAgSoAWYBFwI9Fj8OlCx+CdAHbAf+LNy6iKQu14vIGhHZISLLRaTB4heJyEqLr7R1bPtyi6+x/Qu3n+MMNAG3oWfzKDDJ4g3AzUAjMNXWse0LgCuAy4DXUxrPIWAX8AZwObAeOGLx/cC7wBzgB+A3i/8NfAzsBX4Cfk5pvJThO3EJHQcNwAHrYJk6YApwCPirX7wWPSuH0eu/cCdyCHAlxyVUA7Sgf9FeYJ/Fqy3eiGabfcBp29YCNAMHLX68cOsZstA8yzKdIrJMROos3ioib4rIRvvZavF6+1yn7Tcvpf0cAhaLyGlRtohIk8Vni8h+i++3dWz7Fouftv1d02gP8BHQDnxFZRAfAlYD1wDfoZcLwD/AWuAY0G37FybHIC6PgWloauy1eJXFm9AxsJdKtmmx5YDFTxRtfNxnoRwPcyX0HtCK5vf+1KPPQnWD4rX2+YbUPuQYA7OAR6nciV9Gx0EL8CSVO/FL6OVVCzwBLETvxK8BWwu3niELLRKRE5ZVNotIo8VniUifxfv6ZaFG+5zYfu5ZqA9Yh2ahDWh2AX1E+BK4FtiEPjZg2zcA56FZqJcEcgzi8veBZvTBbBtDfx/YimabKqADuBTt/DYGPieNiMhC3oQAb0KANyHAmxDgTQjwJgR4EwK8CQHehABvQoA3IcCbEOBNCPAmBHgTArwZDQE1aLVmETB9FI4/gNEQMBd4G3gBeAD1UIwaOWpk/ZmPVilvtPWrgFOZ2xhAzjNwNfAilc53AZ9QKe6NDhnKrIhIs6j/TUTkpIj0iMjDIjJZRCYOs9SISHVq2zkuoTrgOeAWWz+Mll27gYupeOgGUw38gRa7C5OjSvkqcA9amQc1L/VQ8cgN90cqoY6WjcBTRRvPIWAPaelyD+qbKESOS+hD4F5ghq2P5AwcBDpTGs8h4Bl0HNyP2geOAF8DK4DdnHkMHCLRdpkrCzWJyOpBWegREakd7SyUS0DZnfKFVOgSkbszHn/IJeeNrAt4GvjW1juAu/iv2SkruZ+FvgceR8fAFtToVMrcxgBGw60yEbXYtAObSfQDnY2w23gTArwJAd6EAG9CgDchwJsQ4E0I8CYEeBMCvAkB3oQAb0KANyHAmxDgTQjwJgScI63AnUAbWsHJxlgIuAB4CHge9RHNyXnwsRAgqBVnNjqTwSvo/9lnYSwE/A6sAnbY+gLUzTU7y9EzFZwnWOV9qIr8BKvYPyYie62SLyLyqajPKKntHFXKKnSurAaGt5cdQ0uv96GDeYrF3geWUpnWasTkMHssQ6/p8xl+qqmT9rMZmGy/TwIWo51fWrTxHGegF53Bpii/os6uQuQ4A++hbsUpnNsZmIF6S0HtOCtSGs9VqW9DL6GTw2wfagwcBd5BJ5A5WrThXL7RXehgHuqvIagR6lZb6i3+OfAsCZ3Xo4+yn8eWJSKyvZ+XaK2IdOQ49lh0fpqIrOrX+W9EZG6u4+e2Hg95klHbzUz0rrzU1rMwVnab6agpfAfqaCw8Kdhgwi/kTQjwJgR4EwK8CQHehABvQoA3IcCbEOBNCPAmBHgTArwJAd6EAG9CgDchwJvUCk07WjYdrsB3JqrQyv5u4MeiHUgRcDv67o029N/ORyqgvE83+h6OdUU6kSJgJnBHwv5lOtBXXYy5gPXom03aKXYJldCXS+20YxUiR41sKsUFnEJn9yjMuC/ypWahBvR9YylZqI+EtyKmCLgJeBAdAylZaCfwFpUZQUZEioD5qPsklRvQF+2MuYBO4APSzkA5C20q2onUQVyPurWqqbxv71ypQv1FvSR45v73WQj0PlBkBpvyJXTwbB88EykCrgOWUHkWGillAd2ob67QOEgRsBD1u+XgFxwEdAGfkf40uhN9xW8hUgdxG2qtT8lCPSTMdDbus9C4/0oZArwJAd6EAG9CgDchwJsQ4M24F/AvqNf86p/ABBoAAAAASUVORK5CYII=';

		s.innerHTML ='#ctb'+i+'{position:fixed;top:0;left:0;right:0;height:48px;overflow:hidden;z-index:1000;background:'+background+';color:'+color+';font-family:sans-serif;font-size:.8em}#lnk'+i+'{display:inline-block}#bhm'+i+',#bnx'+i+'{float:right}#bmn'+i+',#bhm'+i+',#bbk'+i+',#bnx'+i+'{display:inline-block;background:0 0 no-repeat;background-image:url('+icon+');height:48px;width:48px;cursor:pointer}#bmn'+i+'{background-position:0 -144px}#bbk'+i+'{background-position:0 -48px}#bnx'+i+'{background-position:0 -96px}#lnk'+i+' div{display:inline-block;padding:15px 10px;cursor:pointer;overflow:hidden}#lnk'+i+' span{color:#CCC}';
		
		document.head.insertAdjacentElement('beforeEnd',s);
    },

    mountHtml = function(i){
    	var d = document.createElement('DIV');

		d.id='ctb'+i;
		d.innerHTML = '<div id="bbk'+i+'"></div><div id="bmn'+i+'"></div><div id="lnk'+i+'"><div id="txt'+i+'"></div></div><div id="bnx'+i+'"></div><div id="bhm'+i+'"></div>';
		
		document.body.insertAdjacentElement('afterBegin',d);
    },

    insertTheme = function(b){
    	var t = document.createElement('META');
    	t.name = 'theme-color';
    	t.content = b;
    	document.head.insertAdjacentElement('beforeEnd',t);
    }

	constructor = function(b,c){
		if("string" == typeof b) background=b;
		if("string" == typeof c) color=c;

		var i = keygen();
		
		mountCss(i, background, color);
		mountHtml(i);
		insertTheme(background);
	},

	getElement = function(e){
		return document.getElementById(e)||false
	}

	constructor(t,b,c);

	return {
		getKey: getKey,		

		link: link,
		button: button,

		hide: hide,
		show: show
	}
}

document.onreadystatechange = function(e){
	if(document.readyState == "complete"){
		CTRLBAR = new CTRLBAR;
	}
}