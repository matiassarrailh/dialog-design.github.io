(function(){"use strict";var t={9908:function(t,o,e){var a=e(144),s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-app",[e("v-main",[e("router-view")],1)],1)},n=[],r={name:"App",data:()=>({})},i=r,l=e(1001),c=e(3453),u=e.n(c),d=e(7524),v=e(1009),p=(0,l.Z)(i,s,n,!1,null,null,null),h=p.exports;u()(p,{VApp:d.Z,VMain:v.Z});var m=e(8345),f=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-row",[e("v-col",{staticClass:"buttons",attrs:{cols:"12"}},[e("v-btn",{attrs:{color:"warning","x-large":"",elevation:"24"},on:{click:t.toggleCuidado}},[t._v("¡Cuidado!")]),e("CuidadoComponent",{directives:[{name:"show",rawName:"v-show",value:t.showCuidado,expression:"showCuidado"}]})],1),e("v-col",{staticClass:"buttons",attrs:{cols:"12"}},[e("v-btn",{attrs:{color:"success","x-large":"",elevation:"24"},on:{click:t.toggleVamos}},[t._v("¡Vamos!")]),e("VamosComponent",{directives:[{name:"show",rawName:"v-show",value:t.showVamos,expression:"showVamos"}]})],1),e("v-col",{staticClass:"buttons",attrs:{cols:"12"}},[e("v-btn",{attrs:{color:"error","x-large":"",elevation:"24"},on:{click:t.toggleUpss}},[t._v("Upss")]),e("UpssComponent",{directives:[{name:"show",rawName:"v-show",value:t.showUpss,expression:"showUpss"}]})],1)],1)],1)},C=[],w=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-container",{staticClass:"card ups"},[e("v-card",{directives:[{name:"show",rawName:"v-show",value:t.showUpss2,expression:"showUpss2"}],attrs:{elevation:"2"}},[e("div",{staticStyle:{"text-align":"end","padding-top":"5px"}},[e("v-btn",{staticClass:"mx-2",staticStyle:{"font-size":"15px"},attrs:{fab:"",dark:"",small:"",color:"purple"},on:{click:t.toggleUpss}},[t._v("X ")])],1),e("v-card",{staticClass:"icons",staticStyle:{"background-color":"#FFEBCC"}},[e("v-card-title",{staticClass:"errorBtn"},[t._v(" X ")])],1),e("v-card-title",[t._v("Upss")]),e("v-card-text",[t._v("Algo ha pasado")])],1)],1)},g=[],b={data(){return{showUpss2:!0}},methods:{toggleUpss(){this.showUpss2=!1}}},V=b,x=e(7723),Z=e(3685),_=e(7118),y=e(247),k=(0,l.Z)(V,w,g,!1,null,null,null),U=k.exports;u()(k,{VBtn:x.Z,VCard:Z.Z,VCardText:_.ZB,VCardTitle:_.EB,VContainer:y.Z});var B=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-container",{staticClass:"card"},[e("v-card",{directives:[{name:"show",rawName:"v-show",value:t.showVamos2,expression:"showVamos2"}],attrs:{elevation:"2"}},[e("div",{staticStyle:{"text-align":"end","padding-top":"5px"}},[e("v-btn",{staticClass:"mx-2",staticStyle:{"font-size":"15px"},attrs:{fab:"",dark:"",small:"",color:"purple"},on:{click:t.toggleVamos2}},[t._v("X ")])],1),e("v-card",{staticClass:"icons",staticStyle:{"background-color":"#EFFFFD"}},[e("v-card-title",{staticClass:"checkBtn"},[t._v("✓ ")])],1),e("v-card-title",[t._v("¡Vamos!")]),e("v-card-text",[t._v("Todo ha salido bien :)")]),e("v-btn",{staticClass:"borrar capitalize",attrs:{color:"purple"},on:{click:t.toggleVamos2}},[t._v("Cerrar pestaña")])],1)],1)},S=[],O={data(){return{showVamos2:!0}},methods:{toggleVamos2(){this.showVamos2=!1}}},E=O,T=(0,l.Z)(E,B,S,!1,null,null,null),j=T.exports;u()(T,{VBtn:x.Z,VCard:Z.Z,VCardText:_.ZB,VCardTitle:_.EB,VContainer:y.Z});var F=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-container",{staticClass:"card"},[e("v-card",{directives:[{name:"show",rawName:"v-show",value:t.showCuidado2,expression:"showCuidado2"}],attrs:{elevation:"2"}},[e("div",{staticStyle:{"text-align":"end","padding-top":"5px"}},[e("v-btn",{staticClass:"mx-2",staticStyle:{"font-size":"15px"},attrs:{fab:"",dark:"",small:"",color:"purple"},on:{click:t.toggleCuidado}},[t._v("X ")])],1),e("v-card",{staticClass:"icons",staticStyle:{"background-color":"#F9EBC8"}},[e("v-card-title",{staticClass:"exclamationBtn"},[t._v("! ")])],1),e("v-card-title",[t._v("¡Cuidado!")]),e("v-card-text",[t._v("No podrás volver atrás")]),e("div",[e("v-btn",{staticClass:"borrar capitalize",attrs:{color:"purple"}},[t._v("Borrar")]),e("v-btn",{staticClass:"capitalize",attrs:{color:"purple",outlined:""},on:{click:t.toggleCuidado}},[t._v("Cancelar")])],1)],1)],1)},N=[],z={data(){return{showCuidado2:!0}},methods:{toggleCuidado(){this.showCuidado2=!1}}},P=z,$=(0,l.Z)(P,F,N,!1,null,null,null),M=$.exports;u()($,{VBtn:x.Z,VCard:Z.Z,VCardText:_.ZB,VCardTitle:_.EB,VContainer:y.Z});var X={data(){return{showCuidado:!1,showVamos:!1,showUpss:!1}},components:{VamosComponent:j,UpssComponent:U,CuidadoComponent:M},methods:{toggleCuidado(){this.showCuidado=!this.showCuidado},toggleVamos(){this.showVamos=!this.showVamos},toggleUpss(){this.showUpss=!this.showUpss}},name:"HomeView"},A=X,D=e(2102),H=e(2877),R=(0,l.Z)(A,f,C,!1,null,null,null),q=R.exports;u()(R,{VBtn:x.Z,VCol:D.Z,VContainer:y.Z,VRow:H.Z}),a.Z.use(m.Z);const G=[{path:"/",name:"home",component:q}],I=new m.Z({mode:"history",base:"/",routes:G});var J=I,K=e(629);a.Z.use(K.ZP);var L=new K.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),Q=e(1910);a.Z.use(Q.Z);var W=new Q.Z({});a.Z.config.productionTip=!1,new a.Z({router:J,store:L,vuetify:W,render:t=>t(h)}).$mount("#app")}},o={};function e(a){var s=o[a];if(void 0!==s)return s.exports;var n=o[a]={exports:{}};return t[a](n,n.exports,e),n.exports}e.m=t,function(){var t=[];e.O=function(o,a,s,n){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],s=t[u][1],n=t[u][2];for(var i=!0,l=0;l<a.length;l++)(!1&n||r>=n)&&Object.keys(e.O).every((function(t){return e.O[t](a[l])}))?a.splice(l--,1):(i=!1,n<r&&(r=n));if(i){t.splice(u--,1);var c=s();void 0!==c&&(o=c)}}return o}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[a,s,n]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var a in o)e.o(o,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:o[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,a){var s,n,r=a[0],i=a[1],l=a[2],c=0;if(r.some((function(o){return 0!==t[o]}))){for(s in i)e.o(i,s)&&(e.m[s]=i[s]);if(l)var u=l(e)}for(o&&o(a);c<r.length;c++)n=r[c],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(u)},a=self["webpackChunkdialog_design"]=self["webpackChunkdialog_design"]||[];a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(9908)}));a=e.O(a)})();
//# sourceMappingURL=app.071eca2d.js.map