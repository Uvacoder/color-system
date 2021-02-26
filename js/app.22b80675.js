(function(e){function t(t){for(var r,s,u=t[0],o=t[1],i=t[2],p=0,h=[];p<u.length;p++)s=u[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&h.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);c&&c(t);while(h.length)h.shift()();return n.push.apply(n,i||[]),l()}function l(){for(var e,t=0;t<n.length;t++){for(var l=n[t],r=!0,u=1;u<l.length;u++){var o=l[u];0!==a[o]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=l[0]))}return e}var r={},a={app:0},n=[];function s(t){if(r[t])return r[t].exports;var l=r[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,s),l.l=!0,l.exports}s.m=e,s.c=r,s.d=function(e,t,l){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(s.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(l,r,function(t){return e[t]}.bind(null,r));return l},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/color-system/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var c=o;n.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d7")},"56d7":function(e,t,l){"use strict";l.r(t);l("e260"),l("e6cf"),l("cca6"),l("a79d");var r=l("2b0e"),a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("main",[l("h1",[e._v("Color System")]),l("Section",{attrs:{title:"Base Colors"}},[l("Combinations",{attrs:{palettes:e.$options.SHADES}})],1),l("Section",{attrs:{title:"Swatches"}},[l("Swatches",{attrs:{palettes:e.$options.palettes}})],1),l("Section",{attrs:{title:"Palettes"}},e._l(e.$options.palettes,(function(e,t){return l("Palette",{key:t,attrs:{name:t,palette:e}})})),1),l("Section",{attrs:{title:"Compliments"}},[l("Compliments",{attrs:{palettes:e.reducedPalettes}})],1),l("Section",{attrs:{title:"Gradients"}},[l("Gradients",{attrs:{palettes:e.reducedPalettes}})],1)],1)},n=[],s=(l("13d5"),l("b64b"),l("cb53")),u={light:"white",dark:s.neutral["90"].value},o={cyan:{light:s.cyan["20"].value,default:s.cyan["50"].value,dark:s.cyan["80"].value},blue:{light:s.blue["20"].value,default:s.blue["50"].value,dark:s.blue["80"].value},purple:{light:s.purple["20"].value,default:s.purple["50"].value,dark:s.purple["80"].value},magenta:{light:s.magenta["20"].value,default:s.magenta["50"].value,dark:s.magenta["80"].value},red:{light:s.red["20"].value,default:s.red["50"].value,dark:s.red["80"].value},yellow:{light:s.yellow["20"].value,default:s.yellow["50"].value,dark:s.yellow["80"].value},green:{light:s.green["20"].value,default:s.green["50"].value,dark:s.green["80"].value},neutral:{light:s.neutral["20"].value,default:s.neutral["50"].value,dark:s.neutral["80"].value}},i={A:3,AA:4.5,AAA:7},c=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",{staticClass:"combinations"},e._l(e.palettes,(function(t,r){return l("li",{key:r},[l("h3",[e._v(e._s(r.toLowerCase()))]),l("Combination",{attrs:{first:t.light,second:t.default,third:t.dark}}),l("h4",[e._v("Light")]),l("Box",{attrs:{background:t.light,border:t.default,color:t.dark}},[l("Contrast",{attrs:{styled:!1,value:t.light,versus:t.dark}})],1),l("h4",[e._v("Dark")]),l("Box",{attrs:{background:t.dark,border:t.default,color:t.light}},[l("Contrast",{attrs:{styled:!1,value:t.light,versus:t.dark}})],1)],1)})),0)},p=[],h=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"box",style:e.style},[e._t("default")],2)},d=[],v=(l("99af"),{name:"Box",props:{background:{type:String,required:!0},border:{type:String,required:!0},color:{type:String,required:!0}},computed:{style:function(){return"\n        background-color:".concat(this.background,";\n        border-color:").concat(this.border,";\n        color:").concat(this.color,";\n      ")}}}),f=v,m=l("2877"),g=Object(m["a"])(f,h,d,!1,null,null,null),y=g.exports,b=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("svg",{staticClass:"combination",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",height:e.size,width:e.size}},[l("circle",{attrs:{cx:"40",cy:"88",r:"40",fill:e.first}}),l("circle",{attrs:{cx:"66",cy:"40",r:"40",fill:e.second}}),l("circle",{attrs:{cx:"88",cy:"88",r:"40",fill:e.third}})])},_=[],S=(l("a9e3"),{name:"Combination",props:{first:{type:String,required:!0},second:{type:String,required:!0},third:{type:String,required:!0},size:{type:Number,default:128}}}),w=S,k=Object(m["a"])(w,b,_,!1,null,null,null),x=k.exports,C=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("span",{staticClass:"contrast",style:e.style},[e._v(" "+e._s(e.contrast)+" ")])},O=[],j=(l("b680"),l("6929")),q=l.n(j),A={name:"Contrast",props:{value:{type:String,required:!0},styled:{type:Boolean,default:!0},versus:{type:String,required:!0}},computed:{background:function(){return this.contrast>=i.AAA?o.green.light:this.contrast>=i.AA?o.yellow.light:o.red.light},color:function(){return this.contrast>=i.AAA?o.green.dark:this.contrast>=i.AA?o.yellow.dark:o.red.dark},contrast:function(){var e=q()(this.value).contrast(q()(this.versus));return e.toFixed(2)},style:function(){return this.styled?"background: ".concat(this.background,"; color: ").concat(this.color):""}}},$=A,E=Object(m["a"])($,C,O,!1,null,null,null),z=E.exports,P={name:"Combinations",components:{Box:y,Combination:x,Contrast:z},props:{palettes:{type:Object,required:!0}}},B=P,N=Object(m["a"])(B,c,p,!1,null,null,null),G=N.exports,I=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",{staticClass:"compliments"},e._l(e.palettes,(function(t){return l("li",{key:t},[l("ul",{staticClass:"compliments"},e._l(e.palettes,(function(e){return l("li",{key:e},[l("Compliment",{attrs:{first:t,second:e}})],1)})),0)])})),0)},L=[],D=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("svg",{staticClass:"combination",attrs:{xmlns:"http://www.w3.org/2000/svg",height:e.size,width:e.size,viewBox:"0 0 "+e.size+" "+e.size}},[l("clipPath",{attrs:{id:"cut-off"}},[l("rect",{attrs:{x:"0",y:"0",height:e.size,width:e.size/2}})]),l("circle",{attrs:{cx:e.size/2,cy:e.size/2,r:e.size/2,fill:e.first}}),l("circle",{attrs:{"clip-path":"url(#cut-off)",cx:e.size/2,cy:e.size/2,r:e.size/2,fill:e.second}})])},H=[],M={name:"Compliment",props:{first:{type:String,required:!0},second:{type:String,required:!0},size:{type:Number,default:64}}},J=M,T=Object(m["a"])(J,D,H,!1,null,null,null),R=T.exports,F={name:"Compliments",components:{Compliment:R},props:{palettes:{type:Object,required:!0}}},K=F,Q=Object(m["a"])(K,I,L,!1,null,null,null),U=Q.exports,V=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",{staticClass:"gradients"},e._l(e.palettes,(function(t){return l("li",{key:t},[l("ul",{staticClass:"gradients"},e._l(e.palettes,(function(e){return l("li",{key:e},[l("Gradient",{attrs:{first:t,second:e}})],1)})),0)])})),0)},W=[],X=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("svg",{staticClass:"gradient",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:e.size,viewBox:"0 0 100% "+e.size}},[l("defs",[l("linearGradient",{attrs:{id:e.id}},[l("stop",{attrs:{offset:"0%","stop-color":e.first}}),l("stop",{attrs:{offset:"100%","stop-color":e.second}})],1)],1),l("rect",{attrs:{x:"0",y:"0",width:"100%",fill:"url(#"+e.id+")",height:e.size}})])},Y=[],Z=(l("a15b"),l("0d03"),l("d3b7"),l("4d63"),l("ac1f"),l("25f0"),l("5319"),l("1276"),function(e){var t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",l="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",r=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(r,(function(e){return l.charAt(t.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}),ee={name:"Gradient",props:{first:{type:String,required:!0},second:{type:String,required:!0},size:{type:Number,default:64}},computed:{id:function(){return"".concat(Z(this.first),"-").concat(Z(this.second))}}},te=ee,le=Object(m["a"])(te,X,Y,!1,null,null,null),re=le.exports,ae={name:"Gradients",components:{Gradient:re},props:{palettes:{type:Object,required:!0}}},ne=ae,se=Object(m["a"])(ne,V,W,!1,null,null,null),ue=se.exports,oe=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",{attrs:{"aria-labelledby":e.headingId}},[l("h3",{attrs:{id:e.headingId}},[e._v(" "+e._s(e.name)+" ")]),l("table",[e._m(0),l("tbody",e._l(e.palette,(function(t,r){return l("PaletteItem",{key:r,attrs:{scale:r,"palette-name":e.name,value:t.value}})})),1)])])},ie=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("thead",[l("tr",[l("th",[e._v("Color")]),l("th",[e._v("Hex")]),l("th",[e._v("HSL")]),l("th",[e._v("RGB")]),l("th",[e._v("Contrast Dark")]),l("th",[e._v("Contrast Light")])])])}],ce=(l("b0c0"),function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("tr",[l("th",[l("Swatch",{attrs:{color:e.value,"palette-name":e.paletteName,scale:e.scale}})],1),l("td",[l("code",[e._v(" "+e._s(e.color.hex())+" ")])]),l("td",[l("code",[e._v(" "+e._s(e.color.hsl())+" ")])]),l("td",[l("code",[e._v(" "+e._s(e.color.rgb())+" ")])]),l("td",[l("Sample",{attrs:{background:e.$options.BASE.dark,color:e.value}}),l("Contrast",{attrs:{value:e.value,versus:e.$options.BASE.dark}})],1),l("td",[l("Sample",{attrs:{background:e.$options.BASE.light,color:e.value}}),l("Contrast",{attrs:{value:e.value,versus:e.$options.BASE.light}})],1)])}),pe=[],he=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("span",{staticClass:"sample",style:e.style},[e._v(" Abc ")])},de=[],ve={name:"Sample",props:{background:{type:String,required:!0},color:{type:String,required:!0}},computed:{style:function(){return"background: ".concat(this.background,"; color: ").concat(this.color)}}},fe=ve,me=Object(m["a"])(fe,he,de,!1,null,null,null),ge=me.exports,ye=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"swatch",style:e.style},[l("code",[e._v(" "+e._s(e.name)+" ")])])},be=[],_e={name:"Swatch",props:{color:{type:String,required:!0},paletteName:{type:String,required:!0},scale:{type:[Number,String],required:!0}},computed:{textColor:function(){return Number(this.scale)>=50?u.light:u.dark},name:function(){return"".concat(this.paletteName,"-").concat(this.scale)},style:function(){return"background-color:".concat(this.color,"; color:").concat(this.textColor)}}},Se=_e,we=Object(m["a"])(Se,ye,be,!1,null,null,null),ke=we.exports,xe={name:"PaletteItem",BASE:u,components:{Contrast:z,Sample:ge,Swatch:ke},props:{scale:{type:String,required:!0},paletteName:{type:String,required:!0},value:{type:String,required:!0}},computed:{color:function(){return q()(this.value)},name:function(){return"".concat(this.paletteName,"-").concat(this.scale)}}},Ce=xe,Oe=Object(m["a"])(Ce,ce,pe,!1,null,null,null),je=Oe.exports,qe={name:"Palette",components:{PaletteItem:je},props:{name:{type:String,required:!0},palette:{type:Object,required:!0}},computed:{headingId:function(){return"section-".concat(this.name.toLowerCase())}}},Ae=qe,$e=Object(m["a"])(Ae,oe,ie,!1,null,null,null),Ee=$e.exports,ze=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",{attrs:{"aria-labelledby":e.id}},[l("h2",{attrs:{id:e.id}},[e._v(" "+e._s(e.title)+" ")]),e._t("default")],2)},Pe=[],Be={name:"Section",props:{title:{type:String,required:!0}},computed:{id:function(){return Z(this.title)}}},Ne=Be,Ge=Object(m["a"])(Ne,ze,Pe,!1,null,null,null),Ie=Ge.exports,Le=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",{staticClass:"swatches"},e._l(e.palettes,(function(t,r){return l("li",{key:r},[l("h3",[e._v(e._s(r))]),l("ul",e._l(t,(function(e,t){return l("li",{key:t},[l("Swatch",{attrs:{color:e.value,"palette-name":r,scale:t}})],1)})),0)])})),0)},De=[],He={name:"Swatches",components:{Swatch:ke},props:{palettes:{type:Object,required:!0}}},Me=He,Je=Object(m["a"])(Me,Le,De,!1,null,null,null),Te=Je.exports,Re={name:"App",palettes:s,SHADES:o,components:{Combinations:G,Compliments:U,Gradients:ue,Palette:Ee,Section:Ie,Swatches:Te},computed:{reducedPalettes:function(){return Object.keys(s).reduce((function(e,t){return e[t]=s[t]["50"]["value"],e}),{})}}},Fe=Re,Ke=Object(m["a"])(Fe,a,n,!1,null,null,null),Qe=Ke.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(Qe)}}).$mount("#app")},cb53:function(e){e.exports=JSON.parse('{"cyan":{"10":{"value":"hsl(190, 80%, 97.5%)"},"20":{"value":"hsl(190, 80%, 90%)"},"30":{"value":"hsl(190, 80%, 85%)"},"40":{"value":"hsl(190, 80%, 75%)"},"50":{"value":"hsl(190, 90%, 55%)"},"60":{"value":"hsl(198, 90%, 35%)"},"70":{"value":"hsl(200, 90%, 30%)"},"80":{"value":"hsl(203, 95%, 25%)"},"90":{"value":"hsl(206, 100%, 15%)"}},"blue":{"10":{"value":"hsl(210, 80%, 97.5%)"},"20":{"value":"hsl(210, 80%, 90%)"},"30":{"value":"hsl(210, 80%, 85%)"},"40":{"value":"hsl(215, 80%, 75%)"},"50":{"value":"hsl(230, 80%, 50%)"},"60":{"value":"hsl(230, 80%, 40%)"},"70":{"value":"hsl(220, 90%, 30%)"},"80":{"value":"hsl(220, 90%, 25%)"},"90":{"value":"hsl(220, 90%, 15%)"}},"purple":{"10":{"value":"hsl(265, 95%, 98%)"},"20":{"value":"hsl(265, 90%, 92.5%)"},"30":{"value":"hsl(265, 95%, 90%)"},"40":{"value":"hsl(265, 85%, 80%)"},"50":{"value":"hsl(265, 90%, 45%)"},"60":{"value":"hsl(265, 85%, 37.5%)"},"70":{"value":"hsl(265, 80%, 30%)"},"80":{"value":"hsl(265, 80%, 20%)"},"90":{"value":"hsl(265, 80%, 15%)"}},"magenta":{"10":{"value":"hsl(300, 95%, 98%)"},"20":{"value":"hsl(300, 90%, 92.5%)"},"30":{"value":"hsl(300, 95%, 90%)"},"40":{"value":"hsl(300, 85%, 80%)"},"50":{"value":"hsl(300, 80%, 33%)"},"60":{"value":"hsl(305, 90%, 30%)"},"70":{"value":"hsl(305, 92.5%, 25%)"},"80":{"value":"hsl(310, 95%, 20%)"},"90":{"value":"hsl(315, 100%, 12.5%)"}},"red":{"10":{"value":"hsl(360, 100%, 98%)"},"20":{"value":"hsl(357.5, 100%, 90%)"},"30":{"value":"hsl(355, 100%, 80%)"},"40":{"value":"hsl(355, 100%, 60%)"},"50":{"value":"hsl(350, 85%, 40%)"},"60":{"value":"hsl(350, 90%, 40%)"},"70":{"value":"hsl(345, 92.5%, 30%)"},"80":{"value":"hsl(340, 95%, 25%)"},"90":{"value":"hsl(335, 100%, 15%)"}},"yellow":{"10":{"value":"hsl(50, 100%, 98%)"},"20":{"value":"hsl(50, 100%, 80%)"},"30":{"value":"hsl(45, 100%, 75%)"},"40":{"value":"hsl(45, 100%, 65%)"},"50":{"value":"hsl(40, 100%, 55%)"},"60":{"value":"hsl(30, 100%, 45%)"},"70":{"value":"hsl(20, 100%, 37.5%)"},"80":{"value":"hsl(17.5, 95%, 35%)"},"90":{"value":"hsl(10, 95%, 25%)"}},"green":{"10":{"value":"hsl(142, 85%, 98%)"},"20":{"value":"hsl(145, 75%, 75%)"},"30":{"value":"hsl(145, 70%, 55%)"},"40":{"value":"hsl(145, 80%, 40%)"},"50":{"value":"hsl(160, 80%, 22.5%)"},"60":{"value":"hsl(150, 85%, 20%)"},"70":{"value":"hsl(170, 80%, 17.5%)"},"80":{"value":"hsl(175, 90%, 15%)"},"90":{"value":"hsl(175, 100%, 10%)"}},"neutral":{"10":{"value":"hsl(220, 15%, 97.5%)"},"20":{"value":"hsl(220, 15%, 90%)"},"30":{"value":"hsl(220, 15%, 85%)"},"40":{"value":"hsl(220, 15%, 75%)"},"50":{"value":"hsl(220, 20%, 35%)"},"60":{"value":"hsl(220, 20%, 30%)"},"70":{"value":"hsl(220, 20%, 25%)"},"80":{"value":"hsl(220, 20%, 15%)"},"90":{"value":"hsl(220, 25%, 10%)"}}}')}});
//# sourceMappingURL=app.22b80675.js.map