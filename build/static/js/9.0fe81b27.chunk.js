(this.webpackJsonpmedicus=this.webpackJsonpmedicus||[]).push([[9],{138:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return P}));var a=s(0),c=s(13),r=s(31),n=s(1);function l(){return Object(n.jsx)("h4",{children:"medicus"})}function i(e){return Object(n.jsx)("header",{className:"row md-wc-hbar",children:Object(n.jsx)("nav",{className:"col navbar navbar-expand-sm navbar-dark",children:Object(n.jsx)(r.b,{to:"/",className:"navbar-brand d-inline d-sm-none",children:Object(n.jsx)(l,{})})})})}var o=s(57),d=s(12),m=s.n(d),j=s(14),b=s(32),u=s(11),h=s(8),O=s(20),x=s(50);function f(e){var t=Object(O.b)(),s=Object(a.useState)({errorMessage:"",username:"",password:""}),c=Object(h.a)(s,2),r=c[0],l=c[1];function i(e){l(Object(u.a)(Object(u.a)({},r),{},Object(b.a)({},e.target.name,e.target.value)))}function o(){return(o=Object(j.a)(m.a.mark((function e(s){var a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,fetch("/api/auth/signin",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r.username,password:r.password})});case 4:return a=e.sent,e.next=7,a.json();case 7:if(c=e.sent,a.ok){e.next=10;break}throw new Error(c.message);case 10:t({type:"session/set",payload:Object(u.a)({},c)}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.error("Failed to sign in. ".concat(e.t0)),l(Object(u.a)(Object(u.a)({},r),{},{errorMessage:e.t0.message}));case 17:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}return Object(n.jsxs)(x.a,{handleSubmit:function(e){return o.apply(this,arguments)},children:[Object(n.jsx)("h5",{className:"font-weight-bold mb-3",children:"Sign In."}),r.errorMessage&&Object(n.jsx)(x.f,{className:"justify-content-center",children:Object(n.jsx)("div",{className:"alert alert-danger p-2",role:"alert",children:r.errorMessage})}),Object(n.jsx)(x.c,{children:Object(n.jsx)("input",{id:"signInForm1",type:"text",name:"username",className:"form-control",placeholder:"Username",value:r.username,onChange:i,"aria-label":"Username",required:!0})}),Object(n.jsx)(x.c,{children:Object(n.jsx)("input",{id:"signInForm2",type:"password",name:"password",className:"form-control",placeholder:"Password",value:r.password,onChange:i,"aria-label":"Password",required:!0})}),Object(n.jsx)(x.c,{className:"mb-2",children:Object(n.jsx)(x.g,{className:"btn-primary w-100",children:"Sign In"})})]})}var p=s(33),g=s(24);function N(e){var t=new Date,s=Object(O.b)(),r=Object(a.useState)({errorMessage:"",firstName:"",lastName:"",username:"",password:"",confirmPassword:"",dobDay:t.getDate(),dobMonth:t.getMonth()+1,dobYear:t.getFullYear(),gender:g.g?g.g[0]:"",isPhysician:"No",qualification:g.l?g.l[0]:"",specialization:g.n?g.n[0]:""}),l=Object(h.a)(r,2),i=l[0],o=l[1];function d(e){o(Object(u.a)(Object(u.a)({},i),{},Object(b.a)({},e.target.name,e.target.value)))}function f(){return(f=Object(j.a)(m.a.mark((function e(t){var a,c,r,n,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a=new Date(i.dobYear,i.dobMonth-1,i.dobDay),e.next=5,fetch("/api/auth/register",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:i.username,password:i.password,firstName:i.firstName.trim(),lastName:i.lastName.trim(),isPhysician:"Yes"===i.isPhysician,dob:a,gender:i.gender,qualification:"Yes"===i.isPhysician?i.qualification:"",specialization:"Yes"===i.isPhysician?i.specialization:""})});case 5:return c=e.sent,e.next=8,c.json();case 8:if(r=e.sent,c.ok){e.next=11;break}throw new Error(r.message);case 11:return e.next=13,fetch("/api/auth/signin",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:i.username,password:i.password})});case 13:return n=e.sent,e.next=16,n.json();case 16:if(l=e.sent,n.ok){e.next=19;break}throw new Error(l.message);case 19:s({type:"session/set",payload:Object(u.a)({},l)}),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(1),console.error("Failed to register new user. ".concat(e.t0)),o(Object(u.a)(Object(u.a)({},i),{},{errorMessage:e.t0.message}));case 26:case"end":return e.stop()}}),e,null,[[1,22]])})))).apply(this,arguments)}return Object(n.jsxs)(x.a,{handleSubmit:function(e){return f.apply(this,arguments)},children:[i.errorMessage&&Object(n.jsx)(x.f,{className:"justify-content-center",children:Object(n.jsx)("div",{className:"alert alert-danger p-2",role:"alert",children:i.errorMessage})}),Object(n.jsxs)(x.f,{children:[Object(n.jsx)(x.c,{className:"col-sm-6",children:Object(n.jsx)("input",{id:"registerInput1",type:"text",name:"firstName",className:"form-control",placeholder:"First name",value:i.firstName,onChange:d,"aria-label":"First name",required:!0})}),Object(n.jsx)(x.c,{className:"col-sm-6",children:Object(n.jsx)("input",{id:"registerInput2",type:"text",name:"lastName",className:"form-control",placeholder:"Last name",value:i.lastName,onChange:d,"aria-label":"Last name",required:!0})})]}),Object(n.jsxs)(x.c,{children:[Object(n.jsx)("input",{id:"registerInput3",type:"text",name:"username",className:"form-control",placeholder:"Username",value:i.username,onChange:d,"aria-label":"Username","aria-describedby":"usernameHelpBlock",autocomplete:"off",required:!0}),Object(n.jsx)("small",{id:"usernameHelpBlock",className:"Form-text text-muted help-text",children:"Username must contain only letters, numbers and periods."})]}),Object(n.jsxs)(x.f,{className:"my-sm-3",children:[Object(n.jsx)(x.c,{className:"col-sm-6 my-sm-0",children:Object(n.jsx)("input",{id:"registerInput4",type:"password",name:"password",className:"form-control",placeholder:"Password",value:i.password,onChange:d,"aria-label":"Password","aria-describedby":"passwordHelpBlock",minlength:"8",maxlength:"20",required:!0})}),Object(n.jsx)(x.c,{className:"col-sm-6 my-0",children:Object(n.jsx)("input",{id:"registerInput5",type:"password",name:"confirmPassword",className:"form-control",placeholder:"Confirm Password",value:i.confirmPassword,onChange:d,"aria-label":"Confirm Password","aria-describedby":"passwordHelpBlock",minlength:"8",maxlength:"20",required:!0})}),Object(n.jsx)(x.c,{className:"col-12 my-0",children:Object(n.jsx)("small",{id:"passwordHelpBlock",className:"form-text text-muted help-text",children:"Password must be 8-20 characters long and contain only letters, numbers and periods."})})]}),Object(n.jsxs)(x.f,{children:[Object(n.jsxs)(x.c,{className:"my-0 col-sm-6",children:[Object(n.jsx)(x.d,{for:"registerInput6",className:"md-font-sm text-muted",children:"Birthday"}),Object(n.jsxs)(x.f,{children:[Object(n.jsx)(x.c,{className:"col-sm-auto",children:Object(n.jsx)(p.i,{id:"registerInput6",className:"form-control",name:"dobMonth",label:"Month",shortForm:!0,value:i.dobMonth,handleChange:d,required:!0})}),Object(n.jsx)(x.c,{className:"col-sm-auto",children:Object(n.jsx)(p.h,{id:"registerInput7",className:"form-control",name:"dobDay",label:"Day",shortForm:!0,value:i.dobDay,handleChange:d,required:!0})}),Object(n.jsx)(x.c,{className:"col-sm-auto",children:Object(n.jsx)(p.k,{id:"registerInput8",className:"form-control",name:"dobYear",label:"Year",startYear:t.getFullYear()-100,endYear:t.getFullYear(),value:i.dobYear,handleChange:d,required:!0})})]})]}),Object(n.jsxs)(x.c,{className:"col-sm-6",children:[Object(n.jsx)(x.d,{for:"registerInput9",className:"md-font-sm text-muted",children:"Gender"}),Object(n.jsx)(g.f,{id:"registerInput9",className:"form-control",name:"gender",label:"Gender",value:i.gender,handleChange:d,required:!0})]})]}),Object(n.jsxs)(x.c,{children:[Object(n.jsx)(x.d,{for:"registerInput10",className:"md-font-sm text-muted",children:"Are you a physician?"}),Object(n.jsxs)(x.f,{children:[Object(n.jsx)(c.a,{children:Object(n.jsx)("div",{className:"border rounded py-2 px-1 w-100",children:Object(n.jsxs)("div",{className:"custom-control custom-radio",children:[Object(n.jsx)("input",{type:"radio",id:"registerInput10",name:"isPhysician",className:"custom-control-input",value:"Yes",checked:"Yes"===i.isPhysician,onChange:d}),Object(n.jsx)("label",{for:"registerInput10",className:"custom-control-label w-100",children:"Yes"})]})})}),Object(n.jsx)(c.a,{children:Object(n.jsx)("div",{className:"border rounded py-2 px-1 w-100",children:Object(n.jsxs)("div",{className:"custom-control custom-radio",children:[Object(n.jsx)("input",{type:"radio",id:"registerInput11",name:"isPhysician",className:"custom-control-input",value:"No",checked:"No"===i.isPhysician,onChange:d}),Object(n.jsx)("label",{for:"registerInput11",className:"custom-control-label w-100",children:"No"})]})})})]})]}),"Yes"===i.isPhysician&&Object(n.jsxs)(x.f,{children:[Object(n.jsxs)(x.c,{className:"col-sm-6",children:[Object(n.jsx)(x.d,{for:"registerInput11",className:"md-font-sm text-muted",children:"Qualification"}),Object(n.jsx)(g.k,{id:"registerInput11",className:"form-control",name:"qualification",label:"Qualification",value:i.qualification,handleChange:d,required:!0})]}),Object(n.jsxs)(x.c,{className:"col-sm-6",children:[Object(n.jsx)(x.d,{for:"registerInput12",className:"md-font-sm text-muted",children:"Specialization"}),Object(n.jsx)(g.m,{id:"registerInput12",className:"form-control",name:"specialization",label:"Specialization",value:i.specialization,handleChange:d,required:!0})]})]}),Object(n.jsx)(x.c,{children:Object(n.jsx)("p",{className:"my-2 md-font-xs text-muted",children:"By clicking on Register, you agree to our Terms and Conditions."})}),Object(n.jsx)(x.f,{className:"justify-content-center",children:Object(n.jsx)("button",{id:"registerButton1",type:"submit",className:"btn btn-success col-6",children:"Register"})})]})}function y(){return Object(n.jsxs)(c.e,{className:"md-wc-banner",children:[Object(n.jsx)("h1",{className:"text-center font-weight-bold",children:"Give Mission"}),Object(n.jsx)("h4",{className:"text-center",children:"Your Physician. Any time. Any where."})]})}function v(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=t.current;return function(){e&&e.click()}})),Object(n.jsxs)(c.e,{children:[Object(n.jsx)(c.g,{children:Object(n.jsx)("button",{type:"button",class:"btn btn-success col","data-toggle":"modal","data-target":"#registerModal01",children:"Create a new Account"})}),Object(n.jsx)("div",{class:"modal fade",id:"registerModal01",tabindex:"-1",role:"dialog","aria-labelledby":"registerModalTitle","aria-hidden":"true",children:Object(n.jsx)("div",{class:"modal-dialog modal-dialog-centered",role:"document",children:Object(n.jsxs)("div",{class:"modal-content",children:[Object(n.jsxs)("div",{class:"modal-header",children:[Object(n.jsx)("h5",{id:"registerModalTitle",class:"modal-title font-weight-bold",children:"Register today."}),Object(n.jsx)("button",{ref:t,type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:Object(n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(n.jsx)("div",{class:"modal-body",children:Object(n.jsx)(N,{})})]})})})]})}function w(e){return Object(n.jsx)(c.g,{className:"justify-content-center flex-grow-1 md-wc-cbar",children:Object(n.jsx)(c.a,{className:"col-md-11 col-xl-10 d-flex align-items-start align-items-sm-center",children:Object(n.jsxs)(c.g,{className:"flex-grow-1",children:[Object(n.jsx)(c.a,{className:"col-sm-5 col-md-6 col-lg-7 col-xl-8 d-none d-sm-inline align-self-center",children:Object(n.jsx)(y,{})}),Object(n.jsx)(c.a,{className:"col-12 col-sm-7 col-md-6 col-lg-5 col-xl-4 py-3",children:Object(n.jsx)(o.a,{className:"p-3",children:Object(n.jsxs)(c.e,{children:[Object(n.jsx)(c.g,{children:Object(n.jsx)(c.a,{className:"px-0",children:Object(n.jsx)(f,{})})}),Object(n.jsx)(c.h,{className:"my-2"}),Object(n.jsx)(c.g,{className:"mt-3",children:Object(n.jsx)(c.a,{className:"px-0",children:Object(n.jsx)(v,{})})})]})})})]})})})}var C=s(53);function k(e){return Object(n.jsx)("footer",{className:"row md-bg-0 justify-content-center",children:Object(n.jsx)(c.a,{className:"col-auto",children:Object(n.jsxs)(c.g,{className:"pt-1 align-items-center",children:[Object(n.jsx)(C.b,{children:"copyright"}),Object(n.jsx)("p",{className:"my-2",children:"Copyright by Goutham Prasanna."})]})})})}function P(e){return Object(n.jsxs)(c.e,{className:"h-100 md-bg-0 d-flex flex-column",children:[Object(n.jsx)(i,{}),Object(n.jsx)(w,{}),Object(n.jsx)(k,{})]})}},49:function(e,t,s){"use strict";function a(e,t){if(null==e)return{};var s,a,c=function(e,t){if(null==e)return{};var s,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||(c[s]=e[s]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(c[s]=e[s])}return c}s.d(t,"a",(function(){return a}))},50:function(e,t,s){"use strict";s.d(t,"a",(function(){return r})),s.d(t,"f",(function(){return n})),s.d(t,"c",(function(){return l})),s.d(t,"b",(function(){return i})),s.d(t,"g",(function(){return o})),s.d(t,"d",(function(){return d})),s.d(t,"e",(function(){return m}));s(0);var a=s(3),c=s(1);function r(e){var t=e.enctype?e.enctype:"application/x-www-form-urlencoded";return Object(c.jsx)("form",{method:"post",autoComplete:e.autoComplete,enctype:t,className:Object(a.b)("",e.className),onSubmit:e.handleSubmit,children:e.children})}function n(e){return Object(c.jsx)("div",{className:Object(a.b)("form-row",e.className),children:e.children})}function l(e){return Object(c.jsx)("div",{className:Object(a.b)("form-group",e.className),children:e.children})}function i(e){return Object(c.jsx)("button",{type:e.type?e.type:"button",disabled:e.disabled,className:Object(a.b)("btn",e.className),onClick:e.handleClick,children:e.children})}function o(e){return Object(c.jsx)(i,{type:"submit",disabled:e.disabled,className:Object(a.b)("btn-primary",e.className),children:e.children})}function d(e){return Object(c.jsx)("label",{htmlFor:e.for,className:Object(a.b)("col-form-label",e.className),children:e.children})}function m(e){return Object(c.jsx)("legend",{htmlFor:e.for,className:Object(a.b)("col-form-label",e.className),children:e.children})}},53:function(e,t,s){"use strict";s.d(t,"b",(function(){return n})),s.d(t,"a",(function(){return l})),s.d(t,"c",(function(){return i}));s(0);var a=s(3),c=s(1);function r(e){return Object(c.jsx)("i",{className:Object(a.b)("material-icons",e.className),children:e.children})}function n(e){return Object(c.jsx)(r,{className:Object(a.b)("md-18",e.className),children:e.children})}function l(e){return Object(c.jsx)(r,{className:Object(a.b)("md-20",e.className),children:e.children})}function i(e){return Object(c.jsx)(r,{className:Object(a.b)("md-24",e.className),children:e.children})}},57:function(e,t,s){"use strict";s.d(t,"b",(function(){return l})),s.d(t,"e",(function(){return i})),s.d(t,"c",(function(){return o})),s.d(t,"d",(function(){return d})),s.d(t,"a",(function(){return m}));var a=s(11),c=s(49),r=(s(0),s(3)),n=s(1);function l(e){var t=e.className,s=Object(c.a)(e,["className"]);return Object(n.jsx)("div",Object(a.a)(Object(a.a)({className:Object(r.b)("card",t)},s),{},{children:e.children}))}function i(e){var t=e.className,s=Object(c.a)(e,["className"]);return Object(n.jsx)("div",Object(a.a)(Object(a.a)({className:Object(r.b)("card-header",t)},s),{},{children:e.children}))}function o(e){var t=e.className,s=Object(c.a)(e,["className"]);return Object(n.jsx)("div",Object(a.a)(Object(a.a)({className:Object(r.b)("card-body",t)},s),{},{children:e.children}))}function d(e){var t=e.className,s=Object(c.a)(e,["className"]);return Object(n.jsx)("div",Object(a.a)(Object(a.a)({className:Object(r.b)("card-footer",t)},s),{},{children:e.children}))}function m(e){var t=e.className,s=Object(c.a)(e,["className"]);return Object(n.jsx)("div",Object(a.a)(Object(a.a)({className:Object(r.b)("card card-body",t)},s),{},{children:e.children}))}}}]);
//# sourceMappingURL=9.0fe81b27.chunk.js.map