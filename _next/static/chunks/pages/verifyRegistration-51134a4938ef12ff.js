(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[948],{7442:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/verifyRegistration",function(){return e(3558)}])},4768:function(n,t,e){"use strict";e.d(t,{Vp:function(){return o},vU:function(){return i}});e(993);var r=e(2920),o=function(n){r.Am.success(n,{theme:"colored"})},i=function(n){r.Am.error(n,{theme:"colored"})}},3558:function(n,t,e){"use strict";e.r(t);var r=e(7568),o=e(4051),i=e.n(o),c=e(5893),u=e(7294),a=e(2130),s=e(9669),f=e.n(s),l=e(4768);t.default=function(){var n=(0,u.useContext)(a.Z),t=(n.authLoading,n.setAuthLoading),e=(0,u.useState)({id:"",token:""}),o=e[0];e[1],function(){var n=(0,r.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),console.log("userDetails: ",o),n.prev=2,t(!0),n.next=6,f().patch("https://event-manager001.herokuapp.com/api/v1/auth/confirm-registration/".concat(o.id,"/").concat(o.token),o,{headers:{"content-type":"application/json"}});case 6:r=n.sent,console.log("\ud83d\ude80 ~ file: userDetails.tsx ~ line 38 ~ submit ~ response",r),t(!1),201===r.status&&(0,l.Vp)(r.data.msg),n.next=17;break;case 12:n.prev=12,n.t0=n.catch(2),(0,l.vU)("Couldn't change password :("),console.log(n.t0),t(!1);case 17:case"end":return n.stop()}}),n,null,[[2,12]])})))}();return(0,c.jsx)("div",{className:"login-body",children:(0,c.jsx)("h1",{children:"Verifying Email, please wait..."})})}},7568:function(n,t,e){"use strict";function r(n,t,e,r,o,i,c){try{var u=n[i](c),a=u.value}catch(s){return void e(s)}u.done?t(a):Promise.resolve(a).then(r,o)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(o,i){var c=n.apply(t,e);function u(n){r(c,o,i,u,a,"next",n)}function a(n){r(c,o,i,u,a,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return o}})}},function(n){n.O(0,[774,888,179],(function(){return t=7442,n(n.s=t);var t}));var t=n.O();_N_E=t}]);