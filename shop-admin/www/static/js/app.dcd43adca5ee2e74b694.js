webpackJsonp([14],{"991W":function(t,n){},"D/cR":function(t,n,e){"use strict";e.d(n,"s",function(){return c}),e.d(n,"v",function(){return s}),e.d(n,"w",function(){return f}),e.d(n,"u",function(){return d}),e.d(n,"t",function(){return l}),e.d(n,"x",function(){return m}),e.d(n,"z",function(){return p}),e.d(n,"A",function(){return g}),e.d(n,"B",function(){return h}),e.d(n,"y",function(){return b}),e.d(n,"m",function(){return v}),e.d(n,"p",function(){return P}),e.d(n,"n",function(){return z}),e.d(n,"q",function(){return L}),e.d(n,"r",function(){return A}),e.d(n,"o",function(){return y}),e.d(n,"l",function(){return E}),e.d(n,"a",function(){return O}),e.d(n,"c",function(){return C}),e.d(n,"d",function(){return j}),e.d(n,"e",function(){return w}),e.d(n,"b",function(){return I}),e.d(n,"C",function(){return S}),e.d(n,"F",function(){return D}),e.d(n,"D",function(){return F}),e.d(n,"G",function(){return W}),e.d(n,"H",function(){return k}),e.d(n,"E",function(){return q}),e.d(n,"f",function(){return R}),e.d(n,"i",function(){return _}),e.d(n,"g",function(){return H}),e.d(n,"j",function(){return N}),e.d(n,"k",function(){return x}),e.d(n,"h",function(){return G});var o=e("mtWM"),i=e.n(o),a=e("mw3O"),r=e.n(a),u=e("IcnI");i.a.interceptors.request.use(function(t){return"/api/userlogin"!==t.url&&(t.headers.authorization=u.a.state.user.token),t}),i.a.interceptors.response.use(function(t){return console.group("当前请求地址为:"+t.config.url),console.log(t),console.groupEnd(),t});var c=function(t){return console.log(t),i()({method:"post",url:"/api/menuadd",data:r.a.stringify(t)})},s=function(t){return i()({method:"get",url:"/api/menulist",params:t})},f=function(t){return i()({method:"get",url:"/api/menuinfo",params:t})},d=function(t){return i()({method:"post",url:"/api/menuedit",data:r.a.stringify(t)})},l=function(t){return i()({method:"post",url:"/api/menudelete",data:r.a.stringify(t)})},m=function(t){return i()({method:"post",url:"/api/roleadd",data:r.a.stringify(t)})},p=function(){return i()({method:"get",url:"/api/rolelist"})},g=function(t){return i()({method:"get",url:"api/roleinfo",params:t})},h=function(t){return i()({method:"post",url:"/api/roleedit",data:r.a.stringify(t)})},b=function(t){return i()({method:"post",url:"/api/roledelete",data:r.a.stringify(t)})},v=function(t){return i()({method:"post",url:"/api/useradd",data:r.a.stringify(t)})},P=function(t){return i()({method:"get",url:"/api/userlist",params:t})},z=function(){return i()({method:"get",url:"/api/usercount"})},L=function(t){return i()({method:"get",url:"/api/userinfo",params:t})},A=function(t){return i()({method:"post",url:"/api/useredit",data:r.a.stringify(t)})},y=function(t){return i()({method:"post",url:"/api/userdelete",data:t})},E=function(t){return i()({method:"post",url:"/api/userlogin",data:t})},O=function(t){var n=new FormData;for(var e in t)n.append(e,t[e]);return i()({method:"post",url:"/api/cateadd",data:n})},C=function(t){return i()({method:"get",url:"/api/catelist",params:t})},j=function(t){return i()({method:"get",url:"/api/cateinfo",params:t})},w=function(t){var n=new FormData;for(var e in t)n.append(e,t[e]);return i()({method:"post",url:"/api/cateedit",data:n})},I=function(t){return i()({method:"post",url:"/api/catedelete",data:r.a.stringify(t)})},S=function(t){return i()({method:"post",url:"/api/specsadd",data:r.a.stringify(t)})},D=function(t){return i()({method:"get",url:"/api/specslist",params:t})},F=function(){return i()({method:"get",url:"/api/specscount"})},W=function(t){return i()({method:"get",url:"/api/specsinfo",params:t})},k=function(t){return i()({method:"post",url:"/api/specsedit",data:r.a.stringify(t)})},q=function(t){return i()({method:"post",url:"/api/specsdelete",data:r.a.stringify(t)})},R=function(t){var n=new FormData;for(var e in t)n.append(e,t[e]);return i()({method:"post",url:"/api/goodsadd",data:n})},_=function(t){return i()({method:"get",url:"/api/goodslist",params:t})},H=function(){return i()({method:"get",url:"/api/goodscount"})},N=function(t){return i()({method:"get",url:"/api/goodsinfo",params:t})},x=function(t){var n=new FormData;for(var e in t)n.append(e,t[e]);return i()({method:"post",url:"/api/goodsedit",data:n})},G=function(t){return i()({method:"post",url:"/api/goodsdelete",data:r.a.stringify(t)})}},E5g3:function(t,n){},IcnI:function(t,n,e){"use strict";var o=e("7+uW"),i=e("NYxO"),a=e("mvHQ"),r=e.n(a),u={user:sessionStorage.getItem("user")?JSON.parse(sessionStorage.getItem("user")):null},c={changeLogin:function(t,n){t.user=n,n?sessionStorage.setItem("user",r()(n)):sessionStorage.removeItem("user")}},s=e("D/cR"),f={state:{list:[]},mutations:{changeList:function(t,n){t.list=n}},actions:{menuList:function(t){Object(s.v)({istree:!0}).then(function(n){t.commit("changeList",n.data.list)})}},getters:{list:function(t){return t.list}},namespaced:!0},d={state:{list:[]},mutations:{changeList:function(t,n){t.list=n}},actions:{roleList:function(t){Object(s.z)().then(function(n){t.commit("changeList",n.data.list)})}},getters:{list:function(t){return t.list}},namespaced:!0},l={state:{list:[],count:0,page:1,size:2},mutations:{changeList:function(t,n){t.list=n},changeCount:function(t,n){t.count=n},changePage:function(t,n){t.page=n}},actions:{manageList:function(t){var n={size:t.state.size,page:t.state.page};Object(s.p)(n).then(function(n){if(200==n.data.code){if((null==n.data.list||0==n.data.list.length)&&t.state.page>1){var e=t.state.page-1;return t.commit("changePage",e),void t.dispatch("manageList")}t.commit("changeList",n.data.list)}})},changeCountActions:function(t){Object(s.n)().then(function(n){200==n.data.code&&t.commit("changeCount",n.data.list[0].total)})},changePageActions:function(t,n){t.commit("changePage",n)}},getters:{list:function(t){return t.list},count:function(t){return t.count},size:function(t){return t.size}},namespaced:!0},m={state:{list:[]},mutations:{changeList:function(t,n){t.list=n}},actions:{changeCateActions:function(t){Object(s.c)({istree:!0}).then(function(n){200==n.data.code&&t.commit("changeList",n.data.list)})}},getters:{list:function(t){return t.list}},namespaced:!0},p={state:{list:[],size:2,page:1,count:0},mutations:{changeList:function(t,n){t.list=n},changeCount:function(t,n){t.count=n},changePage:function(t,n){t.page=n}},actions:{changeSpecActions:function(t){var n={size:t.state.size,page:t.state.page};Object(s.F)(n).then(function(n){if(200==n.data.code){if((null==n.data.list||0==n.data.list.length)&&t.state.page>1){var e=t.state.page-1;return t.commit("changePage",e),void t.dispatch("changeSpecActions")}t.commit("changeList",n.data.list)}})},changeCountActions:function(t){Object(s.D)().then(function(n){200==n.data.code&&t.commit("changeCount",n.data.list[0].total)})},changePageActions:function(t,n){t.commit("changePage",n)}},getters:{list:function(t){return t.list},size:function(t){return t.size},count:function(t){return t.count}},namespaced:!0},g={state:{list:[],size:2,page:1,count:0},mutations:{changeList:function(t,n){t.list=n},changeCount:function(t,n){t.count=n},changePage:function(t,n){t.page=n}},actions:{changeGoodsActions:function(t,n){var e=null;n||(e={size:t.state.size,page:t.state.page}),Object(s.i)(e).then(function(n){if(200==n.data.code){if((null==n.data.list||0==n.data.list.length)&&t.state.page>1){var e=t.state.page-1;return t.commit("changePage",e),void t.dispatch("changeGoodsActions")}t.commit("changeList",n.data.list)}})},changeCountActions:function(t){Object(s.g)().then(function(n){200==n.data.code&&t.commit("changeCount",n.data.list[0].total)})},changePageActions:function(t,n){t.commit("changePage",n)}},getters:{list:function(t){return t.list},size:function(t){return t.size},count:function(t){return t.count}},namespaced:!0};o.default.use(i.a);n.a=new i.a.Store({state:u,mutations:c,actions:{requestLoginActions:function(t,n){t.commit("changeLogin",n)}},getters:{user:function(t){return t.user}},modules:{menu:f,role:d,manage:l,cate:m,spec:p,goods:g}})},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),i={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var a=e("VU/8")({},i,!1,function(t){e("E5g3")},"data-v-3fb10467",null).exports,r=e("/ocq"),u=e("IcnI");function c(t){return u.a.state.user.menus_url.some(function(n){return n==t})}o.default.use(r.a);var s=new r.a({routes:[{path:"/login",component:function(){return Promise.all([e.e(0),e.e(9)]).then(e.bind(null,"QlWu"))}},{path:"/",component:function(){return e.e(11).then(e.bind(null,"Qt9A"))},children:[{path:"banner",component:function(){return e.e(10).then(e.bind(null,"PZur"))},name:"轮播图管理",beforeEnter:function(t,n,e){c("banner")?e():e("/home")}},{path:"cate",component:function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"7Yg3"))},name:"商品分类",beforeEnter:function(t,n,e){c("cate")?e():e("/home")}},{path:"goods",component:function(){return Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"KY6z"))},name:"商品管理",beforeEnter:function(t,n,e){c("goods")?e():e("/home")}},{path:"manage",component:function(){return Promise.all([e.e(0),e.e(5)]).then(e.bind(null,"piS+"))},name:"管理员管理",beforeEnter:function(t,n,e){c("manage")?e():e("/home")}},{path:"member",component:function(){return e.e(12).then(e.bind(null,"CeaU"))},name:"会员管理",beforeEnter:function(t,n,e){c("member")?e():e("/home")}},{path:"menu",component:function(){return Promise.all([e.e(0),e.e(3)]).then(e.bind(null,"MWAP"))},name:"菜单管理",beforeEnter:function(t,n,e){c("menu")?e():e("/home")}},{path:"role",component:function(){return Promise.all([e.e(0),e.e(6)]).then(e.bind(null,"P2Xi"))},name:"角色管理",beforeEnter:function(t,n,e){c("role")?e():e("/home")}},{path:"seckill",component:function(){return e.e(8).then(e.bind(null,"4Zld"))},name:"秒杀活动",beforeEnter:function(t,n,e){c("seckill")?e():e("/home")}},{path:"spec",component:function(){return Promise.all([e.e(0),e.e(7)]).then(e.bind(null,"cFc7"))},name:"商品规格",beforeEnter:function(t,n,e){c("spec")?e():e("/home")}},{path:"home",component:function(){return e.e(1).then(e.bind(null,"nU8l"))},name:"首页"},{path:"",redirect:"home"}]}]});s.beforeEach(function(t,n,e){"/login"!=t.path?u.a.state.user?e():e("/login"):e()});var f=s,d=(e("991W"),{}),l={},m=e("zL8q"),p=e.n(m);e("tvR6");for(var g in d)o.default.component(g,d[g]);for(var h in l)o.default.component(h,l[h]);o.default.use(p.a),o.default.prototype.$preImg="",o.default.config.productionTip=!1,new o.default({el:"#app",router:f,store:u.a,components:{App:a},template:"<App/>"})},tvR6:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.dcd43adca5ee2e74b694.js.map