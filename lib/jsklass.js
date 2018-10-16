!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(0,function(){"use strict";var n=function(n){return"string"===$(n)},t=function(n){return"array"===$(n)},e=function(n){var t=!!n&&"length"in n&&n.length,e=$(n);return"function"!==e&&!k(n)&&("array"===e||0===t||"number"==typeof t&&t>0&&t-1 in n)},r=function(e,r){return!(!t(e)||!n(r))&&e.indexOf(r)>-1},i=function(n,t){return I(t,function(t,e){n.push(e)}),n},o=function(n){return Array.prototype.slice.apply(n)},c=Object.freeze({isArray:t,isArrayLike:e,inArray:r,mergeArray:i,convertArgsToArray:o}),u=function(n){return"object"===$(n)},f=function(n,t){return I(t,function(t,e){n[t]=e}),n},a=function(n,t){return I(t,function(e,r){t.propertyIsEnumerable(e)&&(n[e]=r)}),n},s=function(n){throw new Error(n)},l=function(n,t){x(n)||x(t)?console.error(n):console.error(n,t)},p=function(n,t){x(n)||x(t)?console.warn(n):console.warn(n,t)},d=function(n,t){x(n)||x(t)?console.info(n):console.info(n,t)},_=function(n,t){x(n)||x(t)?console.log(n):console.log(n,t)},m=Object.freeze({exit:s,error:l,warn:p,info:d,log:_}),v=function(n){return"function"===$(n)},y=function(){return Function.prototype.bind||(Function.prototype.bind=function(){var n=this,t=[].shift.call(arguments),e=[].slice.call(arguments);return function(){return n.apply(t,[].concat.call(e,[].slice.call(arguments)))}}),Function.prototype.bind},b=function(n,t,e){var r=y();return e=e||null,t=[e].concat(t),r.apply(n,t)},g=function(n){try{return new Function("return "+n)()}catch(n){s(n)}},h=Object.freeze({isFunction:v,getFunctionBind:y,proxyApplyFunc:b,evil:g}),O=function(t){try{if(n(t)){var e=JSON.parse(t);return!(!u(e)||!e)}if(u(t)){var r=JSON.stringify(t);return!(!n(r)||!r)}}catch(n){return!1}},S=function(t,e){var r=!1;return O(t)&&n(e)?(I(t,function(n,t){if(n===e)return r=!0,!1}),r):r},C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},j={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object","[object Error]":"error","[object Symbol]":"symbol"},w=j.toString,$=(j.hasOwnProperty.toString.call(Object),function(n){return null===n?n+"":"object"===(void 0===n?"undefined":C(n))||"function"==typeof n?j[w.call(n)]||"object":void 0===n?"undefined":C(n)}),x=function(n){if(void 0===n||null===n||""===n||void 0===n)return!0;if(t(n)||u(n)){var e=0;for(var r in n)e++;if(e<=0)return!0}return!1},I=function(n,t){var r=void 0,i=0;if(e(n))for(r=n.length;i<r&&!1!==t.call(n[i],i,n[i]);i++);else for(i in n)if(!1===t.call(n[i],i,n[i]))break;return n},A=function(n,t){var r=void 0;if(e(n))for(var i=(r=n.length)-1;i>=0&&!1!==t.call(n[i],i,n[i]);i--);else{var o=[];I(n,function(n,t){o.push(n)}),o.sort(function(n,t){return t-n});var c=function(t){var e={};return I(n,function(n,r){if(n.toString()===t.toString())return e=r,!1}),e};I(o,function(n,e){if(!1===t.call(c(e),e,c(e)))return!1})}return n},L=function(n){return Object.seal(n)},V=function(n){return Object.freeze(n)},k=function(n){return void 0!==n&&n===n.window},G=function(){return"undefined"!=typeof window},F=[],z="",E=function n(){for(var t=[],e="0123456789abcdef",r="",i=0;i<36;i++)t[i]=e.substr(Math.floor(16*Math.random()),1);return t[14]=e.substr(Math.ceil(Math.random()*e.length),1),t[19]=e.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-",r=t.join(""),F.indexOf(r)>-1?n():(F.push(r),r)},P=function(){if(x(z)){for(var n=[],t=0;t<8;t++)n[t]="0123456789ABCDEF".substr(Math.floor(16*Math.random()),1);z=n.join("")}return z},T=function(n,t){var e=function n(t,e){if(!e&&!v(e))return t;if(t=t.concat(e.constructor||e),e._vd_){var r=e._vd_.getSuper(P());if(!x(r))return n(t,r)}return t};this.handle=function(){return e(n,t)}},N=function(n,t){var e=function n(t,e){if(!e&&!v(e))return r(t);if(e._vd_){var o=e._vd_.getInterfaces(P()),c=e._vd_.getSuper(P());if(t=i(t,o),!x(c))return n(t,c)}return r(t)},r=function(n){var t=[];return I(n,function(n,e){t.indexOf(e)<0&&t.push(e)}),t};this.handle=function(){return e(n,t)}},J=["class_name","super_class_name","interface_name","static","super","prototype","constructor","lifetime_uid","_vd_","instanceOfInterface","instanceOfClass","$class_name","$super_class_name","$interface_name","$static","$super","$prototype","$constructor","$lifetime_uid","$_vd_","$instanceOfInterface","$instanceOfClass"],Z=["class_name","super_class_name","interface_name","super","prototype","constructor","lifetime_uid","_vd_","instanceOfInterface","instanceOfClass","$class_name","$super_class_name","$interface_name","$super","$prototype","$constructor","$lifetime_uid","$_vd_","$instanceOfInterface","$instanceOfClass"],K=function(n,e,r,i,o){var c=["interface_name","lifetime_uid","toString"],u=/%self%/g,f=/%const%/g,a=/%static%/g,l=function(n){return n.replace(/[\s+]/g,"").replace(/\{(.*)\}/g,"{}")},p=function(n){return n.replace(/function\(/g,"(").replace(/\)/g,")=>")},d=function(n){var t=null,e=null;return u.test(n)?(t="self",e=n.replace(u,"")):f.test(n)?(t="const",e=n.replace(f,"")):a.test(n)&&(t="static",e=n.replace(a,"")),{type:t,name:e}},_=function(n){var t="",e=!1;switch(n.type){case"function":e=!0,t="function("+n.args.join(",")+"){}";break;case"object":e=!0,t="[object]";break;case"string":e=!0,t="[string]";break;case"number":e=!0,t="[number]";break;default:e=!1,t="[*]"}return{type:n.type,check:e,value:t}},m=function(n,t,e,r,i){var o=i.replace(/[\s+]/g,"");if(!n[t])return t+(o?"="+o:"");var c=n[t],u=c.toString(),f=$(c);if(r)switch(e){case"function":if("function"!==f)return t+(o?"="+o:"");if(l(i)!==l(u)||p(l(i))!==p(l(u)))return t+(o?"="+o:"");break;case"object":if("object"!==f)return t+(o?"="+o:"");break;case"string":if("string"!==f)return t+(o?"="+o:"");break;case"number":if("number"!==f)return t+(o?"="+o:"")}return null},v=function(n){return G()?n:p(n)};this.handle=function(){if(x(i))return!1;var u=new n,f=new function(){},a=null,l=null,p=null;return i=t(i)?i:[i],I(i,function(n,t){t.apply(f,[])}),I(f,function(n,t){if(c.indexOf(n)<0){var i=d(n),f=_(t),v=i.name,y=f.value,b=f.type,g=f.check;switch(i.type){case"self":if(Z.indexOf(v)<0&&((a=m(u,v,b,g,y))&&(a=m(o,v,b,g,y)),a))return!1;break;case"const":if(J.indexOf(v)<0&&(p=m(e,v,b,g,y)))return!1;break;case"static":if(l=m(r,v,b,g,y))return!1;break;default:s("非法定义的接口体")}}}),a&&s(u.class_name+"的类必须实现接口: self."+v(a)),p&&s(u.class_name+"的类必须实现接口: const."+v(p)),l&&s(u.class_name+"的类必须实现接口: static."+v(l)),u=f=null,!0}},M=function(n,t,e){var r=this,i={},o={},c={},f={},s={};r.setConst=function(n){return u(n)&&(o=n)&&(c=a({},o)),r},r.setStatic=function(n){return u(n)&&(f=n)&&(s=a({},f)),r},r.handle=function(){return A(t,function(n,t){var r={};"const"===e?t.apply({},[{},r,{},{},{}]):"static"===e?t.apply({},[{},L(o),r,{},{}]):t.apply({},[{},L(o),f,{},r]),x(r)||(i[t.class_name]=r)}),o=a(o,c),f=a(f,s),I(i,function(t,e){return I(e,function(t,e){n[t]=e}),!0}),i={},o={},c={},f={},s={},n}},D=function(e,r,i,o){var c=/^[A-Z][A-Za-z0-9_]+$/g,u="function(?,?){}";e||s("没有给定类名"),n(e)||s("类名必须是string类型: "+e),c.test(e)||s("类命名定义不规范,必须是以大写字母开头: "+e),r||s("没有定义类结构体: "+e),v(r)||s("类结构体必须是function类型: "+e);var f=r.toString().replace(/[\s+]/g,"").replace(/\{(.*)+\}$/g,"{}").replace(/\((.*)\)/g,"(?,?)");return u!==f&&s("类结构体定义不规范，必须是 "+u+" 格式: "+e),i&&(v(i)||s("类继承的结构体必须是function类型:"+e),(x(i.class_name)||x(i.lifetime_uid)||x(i._vd_)||x(i._vd_.getLifetimeCode(P())))&&s("类继承的结构体不规范:"+e),v(i)||s("类继承的结构体不规范，必须是 "+u+" 格式:"+e)),o&&(o=t(o)?o:[o],I(o,function(n,t){v(t)||s("接口的结构体必须是function类型: "+e),(x(t.interface_name)||x(t.lifetime_uid)||x(t._vd_)||x(t._vd_.getLifetimeCode(P())))&&s("接口的结构体不规范: "+e),v(t)||s("接口的结构体不规范，必须是 "+u+" 格式: "+e)})),!0},B=function(n,t){var e=/^[a-zA-Z0-9_$]+$/i,r=[],i=[],o=[],c="",u="prototype",f=!1,a=!1,l=!1,p=!1,d=!1;return A(t,function(n,t){var s={},_={},m={},v={};return t.apply(s,[s,v,m,V({}),_]),I(_,function(n,t){if("_construct"===n)return c=n,u="prototype",a=!0,!1;if("$_construct"===n)return c=n,u="prototype",f=!0,!1;if(Z.indexOf(n)>-1)return c=n,u="prototype",l=!0,!1;if(R(n)){var e=H(n);if(r.indexOf(e)>-1)return c=e,u="prototype",d=!0,!1;r.push(e)}else if(r.indexOf(n)>-1)return c=n,u="prototype",d=!0,!1}),!(d||l||f||a)&&(I(s,function(n,t){if("$_construct"===n)return c=n,u="self",f=!0,!1;if(Z.indexOf(n)>-1)return c=n,u="self",l=!0,!1;if(R(n)){var e=H(n);if(r.indexOf(e)>-1)return c=e,u="self",d=!0,!1;r.push(e)}else if(r.indexOf(n)>-1)return c=n,u="self",d=!0,!1}),!(d||l||f||a)&&(I(v,function(n,t){return e.test(n)?J.indexOf(n)>-1?(c=n,u="const",l=!0,!1):i.indexOf(n)>-1?(c=n,u="const",d=!0,!1):void 0:(c=n,u="const",p=!0,!1)}),!(d||l||f||a||p)&&void I(m,function(n,t){return Z.indexOf(n)>-1?(c=n,u="static",l=!0,!1):o.indexOf(n)>-1?(c=n,u="static",d=!0,!1):void 0})))}),a?(s(n+" 类中的 ["+u+"] 成员名称不允许是："+c),!1):l?(s(n+" 类中的 ["+u+"] 成员名称不可是关键词："+c),!1):d?(s(n+" 类中的 ["+u+"]: "+c+" 是final类型不可覆写"),!1):f?(s(n+" 类中的 ["+u+"]: "+c+" 构造函数不允许设置为final类型！"),!1):!p||(s(n+" 类中的 ["+u+"]: "+c+" 名称必须[a-zA-Z0-9_$]方式命名"),!1)},R=function(n){return 0===n.indexOf("$")},H=function(n){return n=0===n.indexOf("$")?n.replace("$",""):n},q=function(n){return'function(GV, oSupers, oCallSupersConstruct, oSupersConstructList){ oSupers["_construct"] = function(){ if(oCallSupersConstruct.indexOf(\''+n+"') > -1 ){ GV.oConsole.exit(\"构造函数只允许在创建对象时调用！\");} oCallSupersConstruct.push('"+n+"'); oSupersConstructList['"+n+"'].apply(this, arguments); }}"},Q=function(n,t,e){var r={0:{}},i=[0],o={},c=0,u=e,f={},s=a({},n.oStatic),l=n.oKlass.checkImplement;A(n.oConstructorList,function(e,u){var a={},s=r[c],p={},d={},_={},m=function(){var n=this;I(d,function(t,e){n[t]=e})};u.apply(t,[t,L(n.oConst),n.oStatic,V(s),p]),e>0&&u.apply(a,[a,L({}),V({}),V(s),{}]),c++,I(a,function(e,r){if(v(r))if("_construct"===e)o[c]=t[e],g(q(c))(n,d,i,o);else{var u=l?e:H(e);t.propertyIsEnumerable(e)&&(d[u]=t[e])}}),I(s,function(n,t){s.propertyIsEnumerable(n)&&!d[n]&&(d[n]=t)}),I(f,function(n,t){I(t,function(n,t){_[n]=t})}),I(p,function(t,e){if(!l){var r=H(t);p[r]=e,delete p[t],t=r}_[t]=e,n.oPrototype[t]=e}),m.prototype=_,r[c]=new m,f[c]=p}),!l&&I(t,function(n,e){R(n)&&(Object.defineProperty(t,H(n),{value:e,writable:!1,enumerable:!0,configurable:!1}),delete t[n])}),n.oStatic=a(n.oStatic,s),l||(t._construct&&(t._construct.apply(t,u),delete t._construct),I(r,function(n,t){n=parseInt(n),i.indexOf(n)<0&&i.push(n)})),f=null},U=function(n){return"function(LV, GV){\n            if(GV.oFunctions.isFunction(GV.oPrototype['"+n+"'])){            \n              LV['"+n+"'] = function (){\n              var sl = this, \n              fn = GV.oFunctions.proxyApplyFunc(GV.oPrototype['"+n+"'], \n              GV.oArrays.convertArgsToArray(arguments), sl); \n              return (fn && fn());}\n            }else{\n              LV['"+n+"'] = GV.oPrototype['"+n+"'];\n            }\n          }"},W=function(n,t){A(n.oConstructorList,function(n,e){var r=new e;I(r,function(n,e){t[n]=e})}),I(n.oSelf,function(n,e){t["%self%"+n]=e}),n.oConst&&I(n.oConst,function(n,e){t["%const%"+n]=e}),n.oStatic&&I(n.oStatic,function(n,e){t["%static%"+n]=e})},X=function(n){return P()+"@"+n},Y=function(n){var t={};return t[n.lifetime_uid]=n.class_name,x(n.super_class_name)||(t=f(t,n.super_class_name)),function(n){if(x(n.lifetime_uid)||x(n._vd_)||x(n.class_name))return!1;var e=n._vd_.getLifetimeCode(P()),r="";return I(t,function(n,t){if(X(n)===e)return r=t,!1}),r===n.class_name}},nn=function(n){var t=n.interface_name;return function(n){if(x(n.lifetime_uid)||x(n._vd_)||x(n.interface_name))return!1;var e=n._vd_.getLifetimeCode(P()),r="";return I(t,function(n,t){if(X(n)===e)return r=t,!1}),r===n.interface_name}},tn=function(n){var t=X(n.lifetime_uid),e=n.interface_name;return function(n){if(x(n.lifetime_uid)||x(n._vd_)||x(n.interface_name))return!1;var r="",i=n.interface_name;return I(i,function(n,e){if(X(n)===t)return r=e,!1}),e===r}},en=function(n){return function(t){var e=[];return t===P()&&(e=x(n)?[]:n),e}},rn=function(n){return function(t){var e=n;return t===P()&&(e=X(n)),e}},on=function(n){return function(t){var e=[];return t===P()&&(e=x(n)?null:n),e}},cn=function(n,t){return function(){return n+"@"+t}},un=function(n,e,r,i){var o={},u={},a={},s={},l={},p={},d={oKlass:a,oConst:p,oStatic:l,oConstructorList:e,oPrototype:s,oConsole:m,handler:Q},_=e,v=r,y=E(),b=function n(t,e){if("INTERFACE"===e?S(o,t.lifetime_uid)||(o[t.lifetime_uid]=t.interface_name):S(u,t.lifetime_uid)||(u[t.lifetime_uid]=t.class_name),t._vd_){var r=t._vd_.getSuper(P());!x(r)&&n(r,e)}},O="function (GV){\n           GV.oKlass = function "+n+"() {\n              GV.handler(GV, this, arguments);\n           };\n         }\n       ";if(!D(n,e,r,i))return!1;if(i=t(i)?i:x(i)?[]:[i],i=new N(i,v).handle(),e.class_name=_.class_name=n,e.lifetime_uid=_.lifetime_uid=y,e.interface_name=_.interface_name=o,e=[e],r="function"===$(r)?r.prototype:{},e=new T(e,v).handle(),x(i)||I(i,function(n,t){b(t,"INTERFACE")}),I(e,function(n,t){n>0&&b(t,"CLASS")}),!B(n,e))return!1;p=new M(p,e,"const").handle(),l=new M(l,e,"static").setConst(p).handle(),s=new M(s,e,"class").setConst(p).setStatic(l).handle();var C=function(){this.class_name=n,this.super_class_name=u,this.interface_name=o,this.lifetime_uid=y,this.instanceOfClass=Y(this),this.instanceOfInterface=nn(this),this.toString=cn(y,n),this._vd_=V({getLifetimeCode:rn(y)})},j=function(){var n=this,t=[];I(s,function(e,r){R(e)&&(e=H(e),t.push(e)),"_construct"!==e&&g(U(e))(n,{oArrays:c,oFunctions:h,oPrototype:s})}),I(n,function(e,r){t.indexOf(e)>-1&&Object.defineProperty(n,e,{value:r,writable:!1,enumerable:!0,configurable:!1})}),t=[]};return C.prototype=r,j.prototype=new C,d.oConstructorList=e,g(O)(d),a=d.oKlass,a.constructor=_,a.prototype=new j,a.static=l,a.class_name=n,a.super_class_name=u,a.interface_name=o,a.lifetime_uid=y,a.instanceOfClass=Y(a),a.instanceOfInterface=nn(a),a.toString=cn(y,n),a._vd_=V({getInterfaces:en(i),getLifetimeCode:rn(y),getSuper:on(v)}),a=f(a,p),a.checkImplement=!0,new K(a,p,l,i,s).handle(),a.checkImplement=!1,delete a.checkImplement,V(a)},fn=function(n,t){var e=function n(t,e){if(!e&&"function"!==$(e))return t;if(t=t.concat(e.constructor||e),e._vd_){var r=e._vd_.getSuper(P());if(!x(r))return n(t,r)}return t};this.handle=function(){return e(n,t)}},an=function(n){var t=null;return I(n,function(n,e){if("InterfaceType"!==e.name)return t=n,!1}),t},sn=function(t,e,r,i,o){var c=/^[A-Z][A-Za-z0-9_]+$/g,f=/^[A-Z_$]+$/i,a=[],l=!1,p=!1,d="",_=!1,m=!1;if(t||s("没有给定接口名"),n(t)||s("接口名必须是string类型: "+t),c.test(t)||s("接口命名定义不规范,必须是以大写字母开头: "+t),e){u(e)||s("接口self结构体必须是object类型: "+t),O(e)||s("接口self结构体必须是{}格式: "+t);var y=an(e);if(y&&s("接口self结构体的值类型不合法，必须是InterfaceType类型: "+t+" -> "+y),"{}"!==JSON.stringify(e).replace(/[\s+]/g,"").replace(/\{(.*)\}/g,"{}")&&s("接口self结构体不规范，必须是 {} 格式: "+t),I(e,function(n,t){if("$_construct"===n)return d=n,p=!0,!1;if(Z.indexOf(n)>-1)return d=n,l=!0,!1;if(R(n)){var e=H(n);if(a.indexOf(e)>-1)return d=e,_=!0,!1;a.push(e)}else if(a.indexOf(n)>-1)return d=n,_=!0,!1}),l)return s(t+" 接口中self定义的名称不可使用关键："+d),!1;if(p)return s(t+" 接口中self的 "+d+" 构造函数不允许设置为final类型！"),!1;if(_)return s("接口self结构体定义的名称已存在："+d),!1}if(i){u(i)||s("接口static的结构体必须是object类型: "+t),O(i)||s("接口static结构体必须是{}格式: "+t),"{}"!==JSON.stringify(i).replace(/[\s+]/g,"").replace(/\{(.*)\}/g,"{}")&&s("接口static的结构体定义不规范，必须是 {} 格式: "+t);var b=an(i);b&&s("接口static结构体的值类型不合法，必须是InterfaceType类型: "+t+" -> "+b)}if(r){u(r)||s("接口const的结构体必须是object类型: "+t),O(r)||s("接口const结构体必须是{}格式: "+t),"{}"!==JSON.stringify(r).replace(/[\s+]/g,"").replace(/\{(.*)\}/g,"{}")&&s("接口const的结构体定义不规范，必须是 {} 格式: "+t);var g=an(r);if(g&&s("接口const结构体的值类型不合法，必须是InterfaceType类型: "+t+" -> "+g),I(r,function(n,t){return f.test(n)?J.indexOf(n)>-1?(d=n,l=!0,!1):void 0:(d=n,m=!0,!1)}),l)return s(t+" 接口中Const定义的名称不可使用关键："+d),!1;m&&s(t+" 接口中Const定义的名称必须全部以大写命名："+d)}return o&&(v(o)||s("接口继承的结构体必须是function类型: "+t),(x(o.interface_name)||x(o.lifetime_uid)||x(o._vd_)||x(o._vd_.getLifetimeCode(P())))&&s("接口继承的结构体定义不规范: "+t),v(o)||s("接口继承的结构体定义不规范，必须是 function(?,?){} 格式: "+t)),a=[],!0},ln=function(n,t,e,r,i){var o=[],c=u(t)?t:{},f={},a={oInterface:f,oConstructorList:o,handler:W,oStatic:r,isStaticHandle:!1,oConst:e,oSelf:c},s=i,l=E(),p="function(GV){\n      GV.oInterface = function "+n+"() {\n        GV.handler(GV, this);\n      };\n    }";if(!sn(n,c,e,r,i))return!1;o=new fn(o,s).handle();var d=function(){this.interface_name=n,this.lifetime_uid=l,this.toString=cn(l,n)};return a.oConstructorList=o,g(p)(a),f=a.oInterface,f.constructor=f,f.interface_name=n,f.prototype=new d,f.lifetime_uid=l,f.instanceOfClass=tn(f),f.toString=cn(l,n),f._vd_=V({getLifetimeCode:rn(l),getSuper:on(s)}),Object.freeze(f)},pn=function(n,t){this.name="InterfaceType",this.type=n,this.args=t},dn={function:function(){var n=[];return I(arguments,function(t,e){n.push(e)}),Object.freeze(new pn("function",n))},objects:function(){return Object.freeze(new pn("object",""))},string:function(){return Object.freeze(new pn("string",""))},number:function(){return Object.freeze(new pn("number",""))},all:function(){return Object.freeze(new pn("all",""))}},_n=function(n,t,e,r){return new un(n,t,e,r)},mn=function(n,t,e,r,i){return new ln(n,t,e,r,i)};!function(){return"function"==typeof Object.defineProperty}()?s("当前版本不支持JsKlass，请使用IE8版本以上的平台"):Object.defineProperty(window,"JsKlass",{value:V({DefClass:V(_n),DefInterface:V(mn),InterfaceType:V(dn),Global:{}}),writable:!1,enumerable:!1,configurable:!1})});