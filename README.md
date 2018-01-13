# Control Bar
Simple control bar (top bar) for mobile apps built under Cordova (PhoneGrap) or mobile sites. 

Written in pure javascript (vanilla), no need for JQuery or other Libs, this component generates a bar at the top of the page (or Cordova/PhoneGap mobile app) that can be easily manipulated in javascript.

![Screenshot](https://github.com/pedra/control-bar/blob/master/sqm.png?raw=true)

The **demo.html** tested in:

* Microsoft Edge 41.16299.15.0 - <b>Ok</b>
* Google Chrome 63.0.3239.132 - <b>Ok</b>
* Firefox 57.0.4 - <b>Ok</b>
* Internet Explorer 11.192.162990 - <b>Failed</b> 
        
_The problem in IE is the ```window.scrollY``` (**in demo_more.html, only**) of does not exist, but the "theme change" and "to top" buttons are **Ok**_

## Commands

Defines a function to execute in the onclick action of a button or link:

    ex.: CTRLBAR.link(1,'Home', function(){...})
         CTRLBAR.button('bmn', function(){...})

**hide** / **show** Hide or show buttons or links

    ex.: CTRLBAR.show('nav') - to show ALL buttons.
         CTRLBAR.show('bhm') - to show 'home' button, only. 

The component is initialized with the following options:

```
CTRLBAR = new CTRLBAR([backgroud color], [text color]) 
-- Or --
CTRLBAR = new CTRLBAR 
```

The options *[background color] and [text color]* are default CSS color styles (eg: #FFF or rgba(0,0,0, .8)).
