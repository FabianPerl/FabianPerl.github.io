(function(t){function e(e){for(var a,s,o=e[0],l=e[1],c=e[2],d=0,v=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&v.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],a=!0,o=1;o<i.length;o++){var l=i[o];0!==n[l]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var a={},n={app:0},r=[];function s(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=a,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(i,a,function(e){return t[e]}.bind(null,a));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"55cc":function(t,e,i){t.exports=i.p+"img/help.9e6f20c5.jpg"},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"inspire"}},[i("v-app-bar",{attrs:{app:"","clipped-right":"",dark:""}},[i("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),i("v-toolbar-title",[t._v("Nachbarschaftsversorgung")]),i("v-spacer")],1),i("v-navigation-drawer",{attrs:{dark:"",app:""},scopedSlots:t._u([{key:"append",fn:function(){return[i("v-divider"),i("v-list",[i("v-list-item",{on:{click:function(e){return t.$router.push("/help")}}},[i("v-list-item-action",[i("v-icon",[t._v("mdi-logout")])],1),i("v-list-item-content",[i("v-list-item-titel",[t._v("Abmelden")])],1)],1)],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",{attrs:{dense:""}},[i("v-list-item",{attrs:{"two-line":""}},[i("v-list-item-avatar",[i("img",{attrs:{src:"https://randomuser.me/api/portraits/women/81.jpg"}})]),i("v-list-item-content",[i("v-list-item-title",[t._v("Lisa Mustermann")]),i("v-list-item-subtitle",[t._v("Angemeldet")])],1)],1),i("v-divider"),i("v-list-item",{on:{click:function(e){return t.$router.push("/")}}},[i("v-list-item-action",[i("v-icon",[t._v("mdi-home")])],1),i("v-list-item-content",[i("v-list-item-titel",[t._v("Startseite")])],1)],1),i("v-list-item",{on:{click:function(e){return t.$router.push("/order")}}},[i("v-list-item-action",[i("v-icon",[t._v("mdi-cube-send")])],1),i("v-list-item-content",[i("v-list-item-titel",[t._v("Bestellen")])],1)],1),i("v-list-item",{on:{click:function(e){return t.$router.push("/help")}}},[i("v-list-item-action",[i("v-icon",[t._v("mdi-handshake")])],1),i("v-list-item-content",[i("v-list-item-titel",[t._v("Helfen")])],1)],1)],1)],1),i("router-view"),i("v-footer",{staticClass:"justify-center",attrs:{color:"#292929",height:"100"}},[i("div",{staticClass:"title font-weight-light grey--text text--lighten-1 text-center"},[t._v("\n        © "+t._s((new Date).getFullYear())+" — Nachbarschaftsversorgung\n      ")])])],1)},r=[],s={name:"App",data:function(){return{drawer:null,drawerRight:null,right:!1,left:!1}}},o=s,l=i("2877"),c=i("6544"),u=i.n(c),d=i("7496"),v=i("40dc"),p=i("5bc1"),m=i("ce7e6"),f=i("553a"),h=i("132d"),g=i("8860"),b=i("da13"),w=i("1800"),x=i("8270"),y=i("5d23"),C=i("f774"),_=i("2fa4"),k=i("2a7f"),V=Object(l["a"])(o,n,r,!1,null,null,null),j=V.exports;u()(V,{VApp:d["a"],VAppBar:v["a"],VAppBarNavIcon:p["a"],VDivider:m["a"],VFooter:f["a"],VIcon:h["a"],VList:g["a"],VListItem:b["a"],VListItemAction:w["a"],VListItemAvatar:x["a"],VListItemContent:y["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VNavigationDrawer:C["a"],VSpacer:_["a"],VToolbarTitle:k["a"]});var O=i("f309");a["a"].use(O["a"]);var P=new O["a"]({}),B=i("8c4f"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("section",{attrs:{id:"hero"}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-img",{attrs:{"min-height":"calc(100vh - "+t.$vuetify.application.top+"px)",src:i("55cc")}},[a("v-theme-provider",{attrs:{dark:""}},[a("v-container",{attrs:{"fill-height":""}},[a("v-row",{staticClass:"white--text mx-auto",attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"white--text text-center",attrs:{cols:"12",tag:"h1"}},[a("span",{staticClass:"font-weight-black",class:[t.$vuetify.breakpoint.smAndDown?"display-3":"display-4"]},[t._v("\n                  Willkommen \n                ")]),a("br"),a("span",{staticClass:"font-weight-light",class:[t.$vuetify.breakpoint.smAndDown?"display-1":"display-2"]},[t._v("\n                  auf der Bürger helfen Bürger App\n                ")])])],1),a("v-row",{staticClass:"white--text mx-auto",attrs:{align:"center",justify:"center"}},[a("br"),a("v-btn",{attrs:{"x-large":"",color:"success"}},[t._v("Helfer")]),a("v-btn",{staticClass:"mx-3",attrs:{"x-large":"",color:"success"}},[t._v("Bedürftige")])],1),a("v-row",{staticClass:"white--text mx-auto",attrs:{align:"center",justify:"center"}},[a("v-btn",{staticClass:"align-self-end",attrs:{fab:"",outlined:""},on:{click:function(e){return t.$vuetify.goTo("#about-me")}}},[a("v-icon",[t._v("mdi-chevron-double-down")])],1)],1)],1)],1)],1)],1)],1),a("section",{attrs:{id:"about-me"}},[a("div",{staticClass:"py-12"}),a("v-container",{staticClass:"text-center"},[a("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("ABOUT US")]),a("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8",attrs:{"max-width":"720"}},[t._v("\n        Diese Website ist während des Hackathons entstanden und soll dabei helfen, Menschen in Risikogruppen beim täglichen Leben zu helfen. Produkte sollen geordert werden, welche von Helfenden gebracht werden."),a("br"),a("b",[t._v("Helf mit, sei auch du dabei!")])]),a("div")],1),a("div",{staticClass:"py-12"})],1),a("section",{staticClass:"grey lighten-3",attrs:{id:"features"}},[a("div",{staticClass:"py-12"}),a("v-container",{staticClass:"text-center"},[a("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Features")]),a("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-row",t._l(t.features,(function(e,i){var n=e.icon,r=e.title,s=e.text;return a("v-col",{key:i,attrs:{cols:"12",md:"4"}},[a("v-card",{staticClass:"py-12 px-4",attrs:{color:"grey lighten-5",flat:""}},[a("v-theme-provider",{attrs:{dark:""}},[a("div",[a("v-avatar",{attrs:{color:"primary",size:"88"}},[a("v-icon",{attrs:{large:""},domProps:{textContent:t._s(n)}})],1)],1)]),a("v-card-title",{staticClass:"justify-center font-weight-black text-uppercase",domProps:{textContent:t._s(r)}}),a("v-card-text",{staticClass:"subtitle-1",domProps:{textContent:t._s(s)}})],1)],1)})),1)],1),a("div",{staticClass:"py-12"})],1),a("section",{attrs:{id:"stats"}},[a("v-parallax",{attrs:{height:t.$vuetify.breakpoint.smAndDown?700:500,src:"https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}},[a("v-container",{attrs:{"fill-height":""}},[a("v-row",{staticClass:"mx-auto"},t._l(t.stats,(function(e){var i=e[0],n=e[1];return a("v-col",{key:n,attrs:{cols:"12",md:"3"}},[a("div",{staticClass:"text-center"},[a("div",{staticClass:"display-3 font-weight-black mb-4",domProps:{textContent:t._s(i)}}),a("div",{staticClass:"title font-weight-regular text-uppercase",domProps:{textContent:t._s(n)}})])])})),1)],1)],1)],1)])},H=[],M={name:"Home",data:function(){return{articles:[{src:"https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",title:"Mobile first & Responsive",text:"Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum."},{src:"https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",title:"Think outside the box",text:"Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh."},{src:"https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80",title:"Small changes, big difference",text:"Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget."}],features:[{icon:"mdi-cube-send",title:"Bestellen",text:"Hast du keine Möglichkeit bzw. traust dich nicht während der Corona-Pandemie Einkaufen zu gehen? Bestell deine Einkaufsliste ganz einfach über diese Plattform und lass es dir holen! Ganz ohne Kontakt zu anderen Menschen"},{icon:"mdi-handshake",title:"Helfen",text:"Du bist nicht in der Risikogruppe von Corona und möchtest gerne helfen? Dann kaufe die Einkaufsliste ein und bringe sie dem Besteller nach Hause!"},{icon:"mdi-account-group",title:"Community",text:"Das durch die Community herangetriebene Projekt wächst jeden Tag mehr!"}],stats:[["2k","Aktive Helfer"],["10k","Bedürftige Menschen"],["6k","Bestellungen pro Tag"],["100","Neuregistrierungen von Helfern pro Tag!"]]}}},D=M,T=i("8212"),$=i("8336"),S=i("b0af"),E=i("99d9"),I=i("62ad"),L=i("a523"),q=i("a75b"),z=i("adda"),J=i("8b9c"),N=i("6b53"),R=i("0fd9"),W=i("480e"),Q=Object(l["a"])(D,A,H,!1,null,null,null),F=Q.exports;u()(Q,{VAvatar:T["a"],VBtn:$["a"],VCard:S["a"],VCardText:E["a"],VCardTitle:E["b"],VCol:I["a"],VContainer:L["a"],VContent:q["a"],VDivider:m["a"],VIcon:h["a"],VImg:z["a"],VParallax:J["a"],VResponsive:N["a"],VRow:R["a"],VThemeProvider:W["a"]});var U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._v("Order")])},G=[],K={},Y=K,X=Object(l["a"])(Y,U,G,!1,null,null,null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._v("Help")])},et=[],it={},at=it,nt=Object(l["a"])(at,tt,et,!1,null,null,null),rt=nt.exports;a["a"].config.productionTip=!1,a["a"].use(B["a"]);var st=[{path:"/",component:F},{path:"/order",component:Z},{path:"/help",component:rt}],ot=new B["a"]({routes:st});new a["a"]({vuetify:P,router:ot,render:function(t){return t(j)}}).$mount("#app")}});
//# sourceMappingURL=app.251d78d0.js.map