(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58d0d400"],{"20eb":function(e,t,a){"use strict";var n=a("75c1"),i=a.n(n);i.a},"2fb9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",[a("div",[a("h2",[e._v(e._s(e.item.title))]),a("h4",[e._v(" posted by "),a("span",[e._v(e._s(e.item.author)+" ")]),e._v(" "),a("i",[e._v("on "+e._s(e.item.createdAt))])]),a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.item.image,expression:"item.image"}]}),a("h5",[e._v(e._s(e.item.category))]),a("p",{domProps:{innerHTML:e._s(e.item.description)}})])]),a("Related",{attrs:{category:e.item.category}}),a("comment"),a("replied")],1)},i=[],r=a("bc3a"),s=a.n(r),c=a("7967"),o=a("b2e5"),u=a("652a"),l=a("083f"),m={name:"viewevent",components:{Related:c["a"],Newsletter:o["a"],comment:u["a"],replied:l["a"]},data:function(){return{item:{},id:this.$route.params.title}},created:function(){var e=this,t="/api/eventroute/getevent/".concat(this.id);s.a.get(t).then((function(t){e.item=t.data.data}))}},d=m,v=(a("20eb"),a("2877")),p=Object(v["a"])(d,n,i,!1,null,"42974473",null);t["default"]=p.exports},"5f56":function(e,t,a){"use strict";var n=a("bf02"),i=a.n(n);i.a},"75c1":function(e,t,a){},7967:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("h1",[e._v("related post")]),a("div",{staticClass:"row"},e._l(e.items.slice(0,3).reverse(),(function(t){return a("div",{key:t._id,staticClass:"col-sm-4"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"item.image"}]}),a("h4",[e._v(e._s(t.category))]),a("h3",[e._v(e._s(t.title))]),a("router-link",{staticClass:"readMore",attrs:{to:{name:"viewevent",params:{title:t._id}}}},[a("button",{staticClass:"btn btn-primary my-2 my-sm-0",attrs:{type:"submit"}},[e._v("continue reading...")])])],1)})),0)])])},i=[],r=(a("96cf"),a("1da1")),s=a("bc3a"),c=a.n(s),o={props:{category:String},data:function(){return{items:[]}},watch:{$props:{handler:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("newProps.category",t.category),e.next=3,c.a.get("/api/eventroute/get_event_by_category/".concat(t.category));case 3:a=e.sent,this.items=a.data.data,console.log(a);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),deep:!0}}},u=o,l=(a("5f56"),a("2877")),m=Object(l["a"])(u,n,i,!1,null,"07d29dc4",null);t["a"]=m.exports},bf02:function(e,t,a){}}]);
//# sourceMappingURL=chunk-58d0d400.ed0163e1.js.map