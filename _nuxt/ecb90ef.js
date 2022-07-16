(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{271:function(t,e,r){var content=r(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(89).default)("2d65c910",content,!0,{sourceMap:!1})},272:function(t,e,r){"use strict";r(271)},273:function(t,e,r){var n=r(88)((function(i){return i[1]}));n.push([t.i,".bg-primary[data-v-36a2dfa5]{background:#a64673}.text-primary[data-v-36a2dfa5]{color:#d05790}.border-primary[data-v-36a2dfa5]{border-color:#d05790}.bg-light[data-v-36a2dfa5]{background:#eae8de}.text-light[data-v-36a2dfa5]{color:#a59ba3}.border-light[data-v-36a2dfa5]{border-color:#a59ba3}.bg-light-accent[data-v-36a2dfa5]{background:#a59ba3}.text-light-accent[data-v-36a2dfa5]{color:#eae8de}.border-light-accent[data-v-36a2dfa5]{border-color:#eae8de}.bg-dark[data-v-36a2dfa5]{background:#17182c}.text-dark[data-v-36a2dfa5]{color:#647aac}.border-dark[data-v-36a2dfa5]{border-color:#647aac}.bg-dark-accent[data-v-36a2dfa5]{background:#647aac}.text-dark-accent[data-v-36a2dfa5]{color:#17182c}.border-dark-accent[data-v-36a2dfa5]{border-color:#17182c}.bg-success[data-v-36a2dfa5]{background-color:#5e764f}.text-success[data-v-36a2dfa5]{color:#acbea1}.border-success[data-v-36a2dfa5]{border-color:#5e764f}.bg-warning[data-v-36a2dfa5]{background-color:#c26922}.text-warning[data-v-36a2dfa5]{color:#f7b580}.border-warning[data-v-36a2dfa5]{border-color:#c26922}.bg-danger[data-v-36a2dfa5]{background-color:#c3362b}.text-danger[data-v-36a2dfa5]{color:#f88e86}.border-danger[data-v-36a2dfa5]{border-color:#c3362b}.bg-white-transparent[data-v-36a2dfa5]{background-color:transparent}.text-white-transparent[data-v-36a2dfa5]{color:#fff}.border-white-transparent[data-v-36a2dfa5]{border-color:#fff}@media (hover:hover) and (pointer:fine){.bg-primary[data-v-36a2dfa5]:hover,.bg-primary[data-v-36a2dfa5]:hover:disabled{background:#923d65}.outlined.border-primary[data-v-36a2dfa5]:hover{background:#d05790;color:#fff}.outlined.border-primary[data-v-36a2dfa5]:hover:disabled{background:#fff;color:#d05790}.outlined.border-white-transparent[data-v-36a2dfa5]:hover{background-color:#fff;color:#000}.outlined.border-white-transparent[data-v-36a2dfa5]:hover:disabled{background:#fff;color:#000}}@media (hover:none) and (pointer:coarse){.bg-primary[data-v-36a2dfa5]:active,.bg-primary[data-v-36a2dfa5]:active:disabled{background:#923d65}.outlined.border-primary[data-v-36a2dfa5]:active{background:#d05790;color:#fff}.outlined.border-primary[data-v-36a2dfa5]:active:disabled{background:#fff;color:#d05790}.outlined.border-white-transparent[data-v-36a2dfa5]:active{background-color:#fff;color:#000}.outlined.border-white-transparent[data-v-36a2dfa5]:active:disabled{background:#fff;color:#000}}",""]),n.locals={},t.exports=n},274:function(t,e,r){"use strict";r.r(e);var n=r(10),d={name:"VoBtn",props:{type:{type:String,default:"",required:!1},to:{type:String,default:void 0,required:!1},bg:{type:String,default:"",required:!1},outlined:{type:Boolean,default:null,required:!1},outlineColor:{type:String,default:"",required:!1},size:{type:String,default:"",required:!1},isFullWidth:{type:Boolean,default:null,required:!1},disabled:{type:Boolean,default:null,required:!1},isLoading:{type:Boolean,default:!1,required:!1}},computed:{buttonBg:function(){return{"bg-primary text-white":"primary"===this.bg,"bg-light text-light":"light"===this.bg,"bg-light-accent text-light-accent":"light-accent"===this.bg,"bg-dark text-dark":"dark"===this.bg,"bg-dark-accent text-dark-accent":"dark-accent"===this.bg,"bg-success text-success":"success"===this.bg,"bg-warning text-warning":"warning"===this.bg,"bg-danger text-danger":"danger"===this.bg,"bg-white":"white"===this.bg}},buttonOutlined:function(){return{"outlined border-2 border-primary text-primary bg-white":this.outlined}},buttonOutlineColor:function(){return{"border-primary text-primary bg-white":"primary"===this.outlineColor,"border-white-transparent text-white-transparent bg-white-transparent":"white-transparent"===this.outlineColor}},buttonFullWidth:function(){return{"w-full":this.isFullWidth}}},methods:{handleClick:function(t){return this.to&&this.$router.push(this.to),this.$emit("click",t)}}},o=(r(272),r(30)),component=Object(o.a)(d,(function(){var t,e=this,r=e._self._c;return r("button",{staticClass:"font-medium rounded-full flex justify-center transition ease-in",class:[(t={"bg-primary text-white":0===e.bg.length&&!e.outlined,"px-5 py-3 text-sm":0===e.size.length&&!e.outlined||"normal"===e.size&&!e.outlined,"px-5 py-2 text-sm":"sm"===e.size&&!e.outlined,"px-3 py-2 text-xs":"xs"===e.size&&!e.outlined,"px-5 py-2.5 text-sm":0===e.size.length&&e.outlined||"normal"===e.size&&e.outlined,"px-5 py-1.5 text-sm":"sm"===e.size&&e.outlined},Object(n.a)(t,"px-3 py-2 text-xs","xs"===e.size&&e.outlined),Object(n.a)(t,"opacity-50 cursor-not-allowed",e.disabled),t),e.buttonBg,e.buttonOutlined,e.buttonOutlineColor,e.buttonFullWidth],attrs:{type:e.type,disabled:e.disabled},on:{click:e.handleClick}},[e.isLoading?r("div",{staticClass:"flex items-center"},[r("svg",{staticClass:"animate-spin -ml-1 mr-2 h-5 w-5 inline",class:[{"text-white":"white"!==e.bg,"text-gray-600":"white"===e.bg||e.outlined}],attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[r("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),e._v(" "),r("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]),e._v(" "),r("span",{staticClass:"inline truncate"},[e._v("Please wait")])]):e._t("default")],2)}),[],!1,null,"36a2dfa5",null);e.default=component.exports},280:function(t,e,r){"use strict";r.r(e);var n={name:"Playground",layout:"default",data:function(){return{title:"Playground",color:!0,button:!1}},head:function(){return{title:this.title}}},d=r(30),component=Object(d.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative w-screen h-screen font-bold text-center grid place-items-center"},[e("div",{staticClass:"absolute top-4 left-4 flex gap-4"},[e("UniBtn",{attrs:{outlined:t.color},on:{click:function(e){t.color=!t.color}}},[t._v("\n      Color Palette\n    ")]),t._v(" "),e("UniBtn",{attrs:{outlined:t.button},on:{click:function(e){t.button=!t.button}}},[t._v("\n      Button\n    ")])],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.button,expression:"button"}]},[e("p",{staticClass:"font-ubuntu text-xl"},[t._v("\n      Buttons\n    ")]),t._v(" "),e("div",{staticClass:"bg-[#10111f] grid grid-cols-3 gap-4 mt-4 p-4 border-[1px] border-white"},[e("UniBtn",[t._v("Primary")]),t._v(" "),e("UniBtn",{attrs:{outlined:""}},[t._v("\n        Primary_outlined\n      ")]),t._v(" "),e("UniBtn",{staticClass:"line-through",attrs:{disabled:""}},[t._v("\n        Primary\n      ")])],1),t._v(" "),e("div",{staticClass:"bg-[#10111f] grid grid-cols-4 gap-4 mt-4 p-4 border-[1px] border-white"},[e("UniBtn",{attrs:{bg:"light"}},[t._v("\n        Light\n      ")]),t._v(" "),e("UniBtn",{staticClass:"line-through",attrs:{bg:"light",disabled:""}},[t._v("\n        Light\n      ")]),t._v(" "),e("UniBtn",{attrs:{bg:"light-accent"}},[t._v("\n        Light-accent\n      ")]),t._v(" "),e("UniBtn",{staticClass:"line-through",attrs:{bg:"light-accent",disabled:""}},[t._v("\n        Light-accent\n      ")]),t._v(" "),e("UniBtn",{attrs:{bg:"dark"}},[t._v("\n        Dark\n      ")]),t._v(" "),e("UniBtn",{staticClass:"line-through",attrs:{bg:"dark",disabled:""}},[t._v("\n        Dark\n      ")]),t._v(" "),e("UniBtn",{attrs:{bg:"dark-accent"}},[t._v("\n        Dark-accent\n      ")]),t._v(" "),e("UniBtn",{staticClass:"line-through",attrs:{bg:"dark-accent",disabled:""}},[t._v("\n        Dark-accent\n      ")]),t._v(" "),e("UniBtn",{attrs:{bg:"success"}},[t._v("\n        Success\n      ")]),t._v(" "),e("UniBtn",{staticClass:"line-through",attrs:{bg:"success",disabled:""}},[t._v("\n        Success\n      ")]),t._v(" "),e("UniBtn",{attrs:{bg:"warning"}},[t._v("\n        Warning\n      ")]),t._v(" "),e("UniBtn",{staticClass:"line-through",attrs:{bg:"warning",disabled:""}},[t._v("\n        Warning\n      ")]),t._v(" "),e("UniBtn",{attrs:{bg:"danger"}},[t._v("\n        Danger\n      ")]),t._v(" "),e("UniBtn",{staticClass:"line-through",attrs:{bg:"danger",disabled:""}},[t._v("\n        Danger\n      ")])],1)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.color,expression:"color"}]},[e("p",{staticClass:"font-ubuntu text-xl"},[t._v("\n      Color Palette\n    ")]),t._v(" "),t._m(0)]),t._v(" "),e("UniBtn",{staticClass:"absolute bottom-10 mx-auto mt-4",attrs:{bg:"dark-accent",to:"/"}},[t._v("\n    Back\n  ")])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-[#10111f] grid grid-cols-2 place-items-center gap-4 mt-4 p-4 border-[1px] border-white"},[e("div",[t._v("Light Shade")]),t._v(" "),e("div",{staticClass:"w-full p-2 bg-light-shade text-[#A59BA3]"},[t._v("\n        Satin Linen\n      ")]),t._v(" "),e("div",[t._v("Light Accent")]),t._v(" "),e("div",{staticClass:"w-full p-2 bg-light-accent text-[#EAE8DE]"},[t._v("\n        Shady Lady\n      ")]),t._v(" "),e("div",[t._v("Main/Primary")]),t._v(" "),e("div",{staticClass:"w-full p-2 bg-primary"},[t._v("\n        Cranberry\n      ")]),t._v(" "),e("div",[t._v("Dark Accent")]),t._v(" "),e("div",{staticClass:"w-full p-2 bg-dark-accent text-[#17182C]"},[t._v("\n        Waikawa Gray\n      ")]),t._v(" "),e("div",[t._v("Dark Shade")]),t._v(" "),e("div",{staticClass:"w-full p-2 bg-dark-shade text-[#647AAC]"},[t._v("\n        Mirage\n      ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UniBtn:r(274).default})}}]);