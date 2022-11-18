function k1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var b1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var S={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bs=Symbol.for("react.element"),I1=Symbol.for("react.portal"),T1=Symbol.for("react.fragment"),R1=Symbol.for("react.strict_mode"),N1=Symbol.for("react.profiler"),P1=Symbol.for("react.provider"),O1=Symbol.for("react.context"),A1=Symbol.for("react.forward_ref"),D1=Symbol.for("react.suspense"),L1=Symbol.for("react.memo"),M1=Symbol.for("react.lazy"),cm=Symbol.iterator;function F1(t){return t===null||typeof t!="object"?null:(t=cm&&t[cm]||t["@@iterator"],typeof t=="function"?t:null)}var Xv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jv=Object.assign,Zv={};function mo(t,e,n){this.props=t,this.context=e,this.refs=Zv,this.updater=n||Xv}mo.prototype.isReactComponent={};mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function e_(){}e_.prototype=mo.prototype;function Bh(t,e,n){this.props=t,this.context=e,this.refs=Zv,this.updater=n||Xv}var Wh=Bh.prototype=new e_;Wh.constructor=Bh;Jv(Wh,mo.prototype);Wh.isPureReactComponent=!0;var dm=Array.isArray,t_=Object.prototype.hasOwnProperty,Vh={current:null},n_={key:!0,ref:!0,__self:!0,__source:!0};function r_(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)t_.call(e,r)&&!n_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Bs,type:t,key:o,ref:s,props:i,_owner:Vh.current}}function $1(t,e){return{$$typeof:Bs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bs}function j1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hm=/\/+/g;function yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?j1(""+t.key):e.toString(36)}function za(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Bs:case I1:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+yc(s,0):r,dm(i)?(n="",t!=null&&(n=t.replace(hm,"$&/")+"/"),za(i,e,n,"",function(u){return u})):i!=null&&(Gh(i)&&(i=$1(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(hm,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",dm(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+yc(o,a);s+=za(o,e,n,l,i)}else if(l=F1(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+yc(o,a++),s+=za(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function va(t,e,n){if(t==null)return t;var r=[],i=0;return za(t,r,"","",function(o){return e.call(n,o,i++)}),r}function U1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},Ha={transition:null},z1={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:Ha,ReactCurrentOwner:Vh};pe.Children={map:va,forEach:function(t,e,n){va(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return va(t,function(){e++}),e},toArray:function(t){return va(t,function(e){return e})||[]},only:function(t){if(!Gh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pe.Component=mo;pe.Fragment=T1;pe.Profiler=N1;pe.PureComponent=Bh;pe.StrictMode=R1;pe.Suspense=D1;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z1;pe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Jv({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Vh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)t_.call(e,l)&&!n_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Bs,type:t.type,key:i,ref:o,props:r,_owner:s}};pe.createContext=function(t){return t={$$typeof:O1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:P1,_context:t},t.Consumer=t};pe.createElement=r_;pe.createFactory=function(t){var e=r_.bind(null,t);return e.type=t,e};pe.createRef=function(){return{current:null}};pe.forwardRef=function(t){return{$$typeof:A1,render:t}};pe.isValidElement=Gh;pe.lazy=function(t){return{$$typeof:M1,_payload:{_status:-1,_result:t},_init:U1}};pe.memo=function(t,e){return{$$typeof:L1,type:t,compare:e===void 0?null:e}};pe.startTransition=function(t){var e=Ha.transition;Ha.transition={};try{t()}finally{Ha.transition=e}};pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};pe.useCallback=function(t,e){return yt.current.useCallback(t,e)};pe.useContext=function(t){return yt.current.useContext(t)};pe.useDebugValue=function(){};pe.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};pe.useEffect=function(t,e){return yt.current.useEffect(t,e)};pe.useId=function(){return yt.current.useId()};pe.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};pe.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};pe.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};pe.useMemo=function(t,e){return yt.current.useMemo(t,e)};pe.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};pe.useRef=function(t){return yt.current.useRef(t)};pe.useState=function(t){return yt.current.useState(t)};pe.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};pe.useTransition=function(){return yt.current.useTransition()};pe.version="18.2.0";(function(t){t.exports=pe})(S);const ce=qv(S.exports),dd=k1({__proto__:null,default:ce},[S.exports]);var hd={},i_={exports:{}},Lt={},o_={exports:{}},s_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,P){var j=R.length;R.push(P);e:for(;0<j;){var H=j-1>>>1,A=R[H];if(0<i(A,P))R[H]=P,R[j]=A,j=H;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var P=R[0],j=R.pop();if(j!==P){R[0]=j;e:for(var H=0,A=R.length,y=A>>>1;H<y;){var U=2*(H+1)-1,N=R[U],C=U+1,Q=R[C];if(0>i(N,j))C<A&&0>i(Q,N)?(R[H]=Q,R[C]=j,H=C):(R[H]=N,R[U]=j,H=U);else if(C<A&&0>i(Q,j))R[H]=Q,R[C]=j,H=C;else break e}}return P}function i(R,P){var j=R.sortIndex-P.sortIndex;return j!==0?j:R.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,h=3,f=!1,m=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=R)r(u),P.sortIndex=P.expirationTime,e(l,P);else break;P=n(u)}}function w(R){if(_=!1,v(R),!m)if(n(l)!==null)m=!0,J(I);else{var P=n(u);P!==null&&ke(w,P.startTime-R)}}function I(R,P){m=!1,_&&(_=!1,g(T),T=-1),f=!0;var j=h;try{for(v(P),d=n(l);d!==null&&(!(d.expirationTime>P)||R&&!B());){var H=d.callback;if(typeof H=="function"){d.callback=null,h=d.priorityLevel;var A=H(d.expirationTime<=P);P=t.unstable_now(),typeof A=="function"?d.callback=A:d===n(l)&&r(l),v(P)}else r(l);d=n(l)}if(d!==null)var y=!0;else{var U=n(u);U!==null&&ke(w,U.startTime-P),y=!1}return y}finally{d=null,h=j,f=!1}}var b=!1,x=null,T=-1,$=5,D=-1;function B(){return!(t.unstable_now()-D<$)}function G(){if(x!==null){var R=t.unstable_now();D=R;var P=!0;try{P=x(!0,R)}finally{P?z():(b=!1,x=null)}}else b=!1}var z;if(typeof p=="function")z=function(){p(G)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,X=V.port2;V.port1.onmessage=G,z=function(){X.postMessage(null)}}else z=function(){E(G,0)};function J(R){x=R,b||(b=!0,z())}function ke(R,P){T=E(function(){R(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,J(I))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var j=h;h=P;try{return R()}finally{h=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,P){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var j=h;h=R;try{return P()}finally{h=j}},t.unstable_scheduleCallback=function(R,P,j){var H=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?H+j:H):j=H,R){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=j+A,R={id:c++,callback:P,priorityLevel:R,startTime:j,expirationTime:A,sortIndex:-1},j>H?(R.sortIndex=j,e(u,R),n(l)===null&&R===n(u)&&(_?(g(T),T=-1):_=!0,ke(w,j-H))):(R.sortIndex=A,e(l,R),m||f||(m=!0,J(I))),R},t.unstable_shouldYield=B,t.unstable_wrapCallback=function(R){var P=h;return function(){var j=h;h=P;try{return R.apply(this,arguments)}finally{h=j}}}})(s_);(function(t){t.exports=s_})(o_);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_=S.exports,At=o_.exports;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l_=new Set,fs={};function pi(t,e){Yi(t,e),Yi(t+"Capture",e)}function Yi(t,e){for(fs[t]=e,t=0;t<e.length;t++)l_.add(e[t])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fd=Object.prototype.hasOwnProperty,H1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fm={},pm={};function B1(t){return fd.call(pm,t)?!0:fd.call(fm,t)?!1:H1.test(t)?pm[t]=!0:(fm[t]=!0,!1)}function W1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function V1(t,e,n,r){if(e===null||typeof e>"u"||W1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){st[t]=new wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];st[e]=new wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){st[t]=new wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){st[t]=new wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){st[t]=new wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){st[t]=new wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){st[t]=new wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){st[t]=new wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){st[t]=new wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qh=/[\-:]([a-z])/g;function Kh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qh,Kh);st[e]=new wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qh,Kh);st[e]=new wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qh,Kh);st[e]=new wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){st[t]=new wt(t,1,!1,t.toLowerCase(),null,!1,!1)});st.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){st[t]=new wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yh(t,e,n,r){var i=st.hasOwnProperty(e)?st[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(V1(e,n,i,r)&&(n=null),r||i===null?B1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Hn=a_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_a=Symbol.for("react.element"),ki=Symbol.for("react.portal"),bi=Symbol.for("react.fragment"),qh=Symbol.for("react.strict_mode"),pd=Symbol.for("react.profiler"),u_=Symbol.for("react.provider"),c_=Symbol.for("react.context"),Xh=Symbol.for("react.forward_ref"),md=Symbol.for("react.suspense"),gd=Symbol.for("react.suspense_list"),Jh=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),d_=Symbol.for("react.offscreen"),mm=Symbol.iterator;function Po(t){return t===null||typeof t!="object"?null:(t=mm&&t[mm]||t["@@iterator"],typeof t=="function"?t:null)}var $e=Object.assign,wc;function Bo(t){if(wc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wc=e&&e[1]||""}return`
`+wc+t}var Ec=!1;function Sc(t,e){if(!t||Ec)return"";Ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ec=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bo(t):""}function G1(t){switch(t.tag){case 5:return Bo(t.type);case 16:return Bo("Lazy");case 13:return Bo("Suspense");case 19:return Bo("SuspenseList");case 0:case 2:case 15:return t=Sc(t.type,!1),t;case 11:return t=Sc(t.type.render,!1),t;case 1:return t=Sc(t.type,!0),t;default:return""}}function vd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bi:return"Fragment";case ki:return"Portal";case pd:return"Profiler";case qh:return"StrictMode";case md:return"Suspense";case gd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case c_:return(t.displayName||"Context")+".Consumer";case u_:return(t._context.displayName||"Context")+".Provider";case Xh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jh:return e=t.displayName||null,e!==null?e:vd(t.type)||"Memo";case qn:e=t._payload,t=t._init;try{return vd(t(e))}catch{}}return null}function Q1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vd(e);case 8:return e===qh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function h_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function K1(t){var e=h_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ya(t){t._valueTracker||(t._valueTracker=K1(t))}function f_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=h_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _d(t,e){var n=e.checked;return $e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function gm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function p_(t,e){e=e.checked,e!=null&&Yh(t,"checked",e,!1)}function yd(t,e){p_(t,e);var n=kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wd(t,e.type,n):e.hasOwnProperty("defaultValue")&&wd(t,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wd(t,e,n){(e!=="number"||ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Wo=Array.isArray;function ji(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ed(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return $e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _m(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(Wo(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kr(n)}}function m_(t,e){var n=kr(e.value),r=kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ym(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function g_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?g_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wa,v_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ps(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Y1=["Webkit","ms","Moz","O"];Object.keys(Yo).forEach(function(t){Y1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Yo[e]=Yo[t]})});function __(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Yo.hasOwnProperty(t)&&Yo[t]?(""+e).trim():e+"px"}function y_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=__(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var q1=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cd(t,e){if(e){if(q1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function xd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kd=null;function Zh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bd=null,Ui=null,zi=null;function wm(t){if(t=Gs(t)){if(typeof bd!="function")throw Error(L(280));var e=t.stateNode;e&&(e=cu(e),bd(t.stateNode,t.type,e))}}function w_(t){Ui?zi?zi.push(t):zi=[t]:Ui=t}function E_(){if(Ui){var t=Ui,e=zi;if(zi=Ui=null,wm(t),e)for(t=0;t<e.length;t++)wm(e[t])}}function S_(t,e){return t(e)}function C_(){}var Cc=!1;function x_(t,e,n){if(Cc)return t(e,n);Cc=!0;try{return S_(t,e,n)}finally{Cc=!1,(Ui!==null||zi!==null)&&(C_(),E_())}}function ms(t,e){var n=t.stateNode;if(n===null)return null;var r=cu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Id=!1;if(Mn)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){Id=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{Id=!1}function X1(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var qo=!1,sl=null,al=!1,Td=null,J1={onError:function(t){qo=!0,sl=t}};function Z1(t,e,n,r,i,o,s,a,l){qo=!1,sl=null,X1.apply(J1,arguments)}function eS(t,e,n,r,i,o,s,a,l){if(Z1.apply(this,arguments),qo){if(qo){var u=sl;qo=!1,sl=null}else throw Error(L(198));al||(al=!0,Td=u)}}function mi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function k_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Em(t){if(mi(t)!==t)throw Error(L(188))}function tS(t){var e=t.alternate;if(!e){if(e=mi(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Em(i),t;if(o===r)return Em(i),e;o=o.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function b_(t){return t=tS(t),t!==null?I_(t):null}function I_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=I_(t);if(e!==null)return e;t=t.sibling}return null}var T_=At.unstable_scheduleCallback,Sm=At.unstable_cancelCallback,nS=At.unstable_shouldYield,rS=At.unstable_requestPaint,Be=At.unstable_now,iS=At.unstable_getCurrentPriorityLevel,ef=At.unstable_ImmediatePriority,R_=At.unstable_UserBlockingPriority,ll=At.unstable_NormalPriority,oS=At.unstable_LowPriority,N_=At.unstable_IdlePriority,su=null,yn=null;function sS(t){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(su,t,void 0,(t.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:uS,aS=Math.log,lS=Math.LN2;function uS(t){return t>>>=0,t===0?32:31-(aS(t)/lS|0)|0}var Ea=64,Sa=4194304;function Vo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ul(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Vo(a):(o&=s,o!==0&&(r=Vo(o)))}else s=n&~i,s!==0?r=Vo(s):o!==0&&(r=Vo(o));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-an(e),i=1<<n,r|=t[n],e&=~i;return r}function cS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-an(o),a=1<<s,l=i[s];l===-1?((a&n)===0||(a&r)!==0)&&(i[s]=cS(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Rd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function P_(){var t=Ea;return Ea<<=1,(Ea&4194240)===0&&(Ea=64),t}function xc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ws(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-an(e),t[e]=n}function hS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-an(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function tf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-an(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function O_(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var A_,nf,D_,L_,M_,Nd=!1,Ca=[],ur=null,cr=null,dr=null,gs=new Map,vs=new Map,Jn=[],fS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cm(t,e){switch(t){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":gs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vs.delete(e.pointerId)}}function Ao(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Gs(e),e!==null&&nf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function pS(t,e,n,r,i){switch(e){case"focusin":return ur=Ao(ur,t,e,n,r,i),!0;case"dragenter":return cr=Ao(cr,t,e,n,r,i),!0;case"mouseover":return dr=Ao(dr,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return gs.set(o,Ao(gs.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,vs.set(o,Ao(vs.get(o)||null,t,e,n,r,i)),!0}return!1}function F_(t){var e=Wr(t.target);if(e!==null){var n=mi(e);if(n!==null){if(e=n.tag,e===13){if(e=k_(n),e!==null){t.blockedOn=e,M_(t.priority,function(){D_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ba(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);kd=r,n.target.dispatchEvent(r),kd=null}else return e=Gs(n),e!==null&&nf(e),t.blockedOn=n,!1;e.shift()}return!0}function xm(t,e,n){Ba(t)&&n.delete(e)}function mS(){Nd=!1,ur!==null&&Ba(ur)&&(ur=null),cr!==null&&Ba(cr)&&(cr=null),dr!==null&&Ba(dr)&&(dr=null),gs.forEach(xm),vs.forEach(xm)}function Do(t,e){t.blockedOn===e&&(t.blockedOn=null,Nd||(Nd=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,mS)))}function _s(t){function e(i){return Do(i,t)}if(0<Ca.length){Do(Ca[0],t);for(var n=1;n<Ca.length;n++){var r=Ca[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ur!==null&&Do(ur,t),cr!==null&&Do(cr,t),dr!==null&&Do(dr,t),gs.forEach(e),vs.forEach(e),n=0;n<Jn.length;n++)r=Jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)F_(n),n.blockedOn===null&&Jn.shift()}var Hi=Hn.ReactCurrentBatchConfig,cl=!0;function gS(t,e,n,r){var i=ye,o=Hi.transition;Hi.transition=null;try{ye=1,rf(t,e,n,r)}finally{ye=i,Hi.transition=o}}function vS(t,e,n,r){var i=ye,o=Hi.transition;Hi.transition=null;try{ye=4,rf(t,e,n,r)}finally{ye=i,Hi.transition=o}}function rf(t,e,n,r){if(cl){var i=Pd(t,e,n,r);if(i===null)Dc(t,e,r,dl,n),Cm(t,r);else if(pS(i,t,e,n,r))r.stopPropagation();else if(Cm(t,r),e&4&&-1<fS.indexOf(t)){for(;i!==null;){var o=Gs(i);if(o!==null&&A_(o),o=Pd(t,e,n,r),o===null&&Dc(t,e,r,dl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Dc(t,e,r,null,n)}}var dl=null;function Pd(t,e,n,r){if(dl=null,t=Zh(r),t=Wr(t),t!==null)if(e=mi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=k_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dl=t,null}function $_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iS()){case ef:return 1;case R_:return 4;case ll:case oS:return 16;case N_:return 536870912;default:return 16}default:return 16}}var ir=null,of=null,Wa=null;function j_(){if(Wa)return Wa;var t,e=of,n=e.length,r,i="value"in ir?ir.value:ir.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Wa=i.slice(t,1<r?1-r:void 0)}function Va(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xa(){return!0}function km(){return!1}function Mt(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xa:km,this.isPropagationStopped=km,this}return $e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),e}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sf=Mt(go),Vs=$e({},go,{view:0,detail:0}),_S=Mt(Vs),kc,bc,Lo,au=$e({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Lo&&(Lo&&t.type==="mousemove"?(kc=t.screenX-Lo.screenX,bc=t.screenY-Lo.screenY):bc=kc=0,Lo=t),kc)},movementY:function(t){return"movementY"in t?t.movementY:bc}}),bm=Mt(au),yS=$e({},au,{dataTransfer:0}),wS=Mt(yS),ES=$e({},Vs,{relatedTarget:0}),Ic=Mt(ES),SS=$e({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),CS=Mt(SS),xS=$e({},go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kS=Mt(xS),bS=$e({},go,{data:0}),Im=Mt(bS),IS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},TS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=RS[t])?!!e[t]:!1}function af(){return NS}var PS=$e({},Vs,{key:function(t){if(t.key){var e=IS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Va(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?TS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(t){return t.type==="keypress"?Va(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Va(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OS=Mt(PS),AS=$e({},au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tm=Mt(AS),DS=$e({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),LS=Mt(DS),MS=$e({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),FS=Mt(MS),$S=$e({},au,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jS=Mt($S),US=[9,13,27,32],lf=Mn&&"CompositionEvent"in window,Xo=null;Mn&&"documentMode"in document&&(Xo=document.documentMode);var zS=Mn&&"TextEvent"in window&&!Xo,U_=Mn&&(!lf||Xo&&8<Xo&&11>=Xo),Rm=String.fromCharCode(32),Nm=!1;function z_(t,e){switch(t){case"keyup":return US.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ii=!1;function HS(t,e){switch(t){case"compositionend":return H_(e);case"keypress":return e.which!==32?null:(Nm=!0,Rm);case"textInput":return t=e.data,t===Rm&&Nm?null:t;default:return null}}function BS(t,e){if(Ii)return t==="compositionend"||!lf&&z_(t,e)?(t=j_(),Wa=of=ir=null,Ii=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return U_&&e.locale!=="ko"?null:e.data;default:return null}}var WS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!WS[t.type]:e==="textarea"}function B_(t,e,n,r){w_(r),e=hl(e,"onChange"),0<e.length&&(n=new sf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Jo=null,ys=null;function VS(t){ey(t,0)}function lu(t){var e=Ni(t);if(f_(e))return t}function GS(t,e){if(t==="change")return e}var W_=!1;if(Mn){var Tc;if(Mn){var Rc="oninput"in document;if(!Rc){var Om=document.createElement("div");Om.setAttribute("oninput","return;"),Rc=typeof Om.oninput=="function"}Tc=Rc}else Tc=!1;W_=Tc&&(!document.documentMode||9<document.documentMode)}function Am(){Jo&&(Jo.detachEvent("onpropertychange",V_),ys=Jo=null)}function V_(t){if(t.propertyName==="value"&&lu(ys)){var e=[];B_(e,ys,t,Zh(t)),x_(VS,e)}}function QS(t,e,n){t==="focusin"?(Am(),Jo=e,ys=n,Jo.attachEvent("onpropertychange",V_)):t==="focusout"&&Am()}function KS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lu(ys)}function YS(t,e){if(t==="click")return lu(e)}function qS(t,e){if(t==="input"||t==="change")return lu(e)}function XS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cn=typeof Object.is=="function"?Object.is:XS;function ws(t,e){if(cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fd.call(e,i)||!cn(t[i],e[i]))return!1}return!0}function Dm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lm(t,e){var n=Dm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dm(n)}}function G_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?G_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Q_(){for(var t=window,e=ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ol(t.document)}return e}function uf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function JS(t){var e=Q_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&G_(n.ownerDocument.documentElement,n)){if(r!==null&&uf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Lm(n,o);var s=Lm(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ZS=Mn&&"documentMode"in document&&11>=document.documentMode,Ti=null,Od=null,Zo=null,Ad=!1;function Mm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ad||Ti==null||Ti!==ol(r)||(r=Ti,"selectionStart"in r&&uf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zo&&ws(Zo,r)||(Zo=r,r=hl(Od,"onSelect"),0<r.length&&(e=new sf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ti)))}function ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ri={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},Nc={},K_={};Mn&&(K_=document.createElement("div").style,"AnimationEvent"in window||(delete Ri.animationend.animation,delete Ri.animationiteration.animation,delete Ri.animationstart.animation),"TransitionEvent"in window||delete Ri.transitionend.transition);function uu(t){if(Nc[t])return Nc[t];if(!Ri[t])return t;var e=Ri[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in K_)return Nc[t]=e[n];return t}var Y_=uu("animationend"),q_=uu("animationiteration"),X_=uu("animationstart"),J_=uu("transitionend"),Z_=new Map,Fm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,e){Z_.set(t,e),pi(e,[t])}for(var Pc=0;Pc<Fm.length;Pc++){var Oc=Fm[Pc],eC=Oc.toLowerCase(),tC=Oc[0].toUpperCase()+Oc.slice(1);Or(eC,"on"+tC)}Or(Y_,"onAnimationEnd");Or(q_,"onAnimationIteration");Or(X_,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(J_,"onTransitionEnd");Yi("onMouseEnter",["mouseout","mouseover"]);Yi("onMouseLeave",["mouseout","mouseover"]);Yi("onPointerEnter",["pointerout","pointerover"]);Yi("onPointerLeave",["pointerout","pointerover"]);pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pi("onBeforeInput",["compositionend","keypress","textInput","paste"]);pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function $m(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,eS(r,e,void 0,t),t.currentTarget=null}function ey(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;$m(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;$m(i,a,u),o=l}}}if(al)throw t=Td,al=!1,Td=null,t}function Pe(t,e){var n=e[$d];n===void 0&&(n=e[$d]=new Set);var r=t+"__bubble";n.has(r)||(ty(e,t,2,!1),n.add(r))}function Ac(t,e,n){var r=0;e&&(r|=4),ty(n,t,r,e)}var ba="_reactListening"+Math.random().toString(36).slice(2);function Es(t){if(!t[ba]){t[ba]=!0,l_.forEach(function(n){n!=="selectionchange"&&(nC.has(n)||Ac(n,!1,t),Ac(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ba]||(e[ba]=!0,Ac("selectionchange",!1,e))}}function ty(t,e,n,r){switch($_(e)){case 1:var i=gS;break;case 4:i=vS;break;default:i=rf}n=i.bind(null,e,n,t),i=void 0,!Id||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Dc(t,e,n,r,i){var o=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Wr(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}x_(function(){var u=o,c=Zh(n),d=[];e:{var h=Z_.get(t);if(h!==void 0){var f=sf,m=t;switch(t){case"keypress":if(Va(n)===0)break e;case"keydown":case"keyup":f=OS;break;case"focusin":m="focus",f=Ic;break;case"focusout":m="blur",f=Ic;break;case"beforeblur":case"afterblur":f=Ic;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=wS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=LS;break;case Y_:case q_:case X_:f=CS;break;case J_:f=FS;break;case"scroll":f=_S;break;case"wheel":f=jS;break;case"copy":case"cut":case"paste":f=kS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Tm}var _=(e&4)!==0,E=!_&&t==="scroll",g=_?h!==null?h+"Capture":null:h;_=[];for(var p=u,v;p!==null;){v=p;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,g!==null&&(w=ms(p,g),w!=null&&_.push(Ss(p,w,v)))),E)break;p=p.return}0<_.length&&(h=new f(h,m,null,n,c),d.push({event:h,listeners:_}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",h&&n!==kd&&(m=n.relatedTarget||n.fromElement)&&(Wr(m)||m[Fn]))break e;if((f||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,f?(m=n.relatedTarget||n.toElement,f=u,m=m?Wr(m):null,m!==null&&(E=mi(m),m!==E||m.tag!==5&&m.tag!==6)&&(m=null)):(f=null,m=u),f!==m)){if(_=bm,w="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=Tm,w="onPointerLeave",g="onPointerEnter",p="pointer"),E=f==null?h:Ni(f),v=m==null?h:Ni(m),h=new _(w,p+"leave",f,n,c),h.target=E,h.relatedTarget=v,w=null,Wr(c)===u&&(_=new _(g,p+"enter",m,n,c),_.target=v,_.relatedTarget=E,w=_),E=w,f&&m)t:{for(_=f,g=m,p=0,v=_;v;v=Ci(v))p++;for(v=0,w=g;w;w=Ci(w))v++;for(;0<p-v;)_=Ci(_),p--;for(;0<v-p;)g=Ci(g),v--;for(;p--;){if(_===g||g!==null&&_===g.alternate)break t;_=Ci(_),g=Ci(g)}_=null}else _=null;f!==null&&jm(d,h,f,_,!1),m!==null&&E!==null&&jm(d,E,m,_,!0)}}e:{if(h=u?Ni(u):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var I=GS;else if(Pm(h))if(W_)I=qS;else{I=KS;var b=QS}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=YS);if(I&&(I=I(t,u))){B_(d,I,n,c);break e}b&&b(t,h,u),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&wd(h,"number",h.value)}switch(b=u?Ni(u):window,t){case"focusin":(Pm(b)||b.contentEditable==="true")&&(Ti=b,Od=u,Zo=null);break;case"focusout":Zo=Od=Ti=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,Mm(d,n,c);break;case"selectionchange":if(ZS)break;case"keydown":case"keyup":Mm(d,n,c)}var x;if(lf)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Ii?z_(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(U_&&n.locale!=="ko"&&(Ii||T!=="onCompositionStart"?T==="onCompositionEnd"&&Ii&&(x=j_()):(ir=c,of="value"in ir?ir.value:ir.textContent,Ii=!0)),b=hl(u,T),0<b.length&&(T=new Im(T,t,null,n,c),d.push({event:T,listeners:b}),x?T.data=x:(x=H_(n),x!==null&&(T.data=x)))),(x=zS?HS(t,n):BS(t,n))&&(u=hl(u,"onBeforeInput"),0<u.length&&(c=new Im("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=x))}ey(d,e)})}function Ss(t,e,n){return{instance:t,listener:e,currentTarget:n}}function hl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ms(t,n),o!=null&&r.unshift(Ss(t,o,i)),o=ms(t,e),o!=null&&r.push(Ss(t,o,i))),t=t.return}return r}function Ci(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jm(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ms(n,o),l!=null&&s.unshift(Ss(n,l,a))):i||(l=ms(n,o),l!=null&&s.push(Ss(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var rC=/\r\n?/g,iC=/\u0000|\uFFFD/g;function Um(t){return(typeof t=="string"?t:""+t).replace(rC,`
`).replace(iC,"")}function Ia(t,e,n){if(e=Um(e),Um(t)!==e&&n)throw Error(L(425))}function fl(){}var Dd=null,Ld=null;function Md(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fd=typeof setTimeout=="function"?setTimeout:void 0,oC=typeof clearTimeout=="function"?clearTimeout:void 0,zm=typeof Promise=="function"?Promise:void 0,sC=typeof queueMicrotask=="function"?queueMicrotask:typeof zm<"u"?function(t){return zm.resolve(null).then(t).catch(aC)}:Fd;function aC(t){setTimeout(function(){throw t})}function Lc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),_s(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_s(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vo=Math.random().toString(36).slice(2),vn="__reactFiber$"+vo,Cs="__reactProps$"+vo,Fn="__reactContainer$"+vo,$d="__reactEvents$"+vo,lC="__reactListeners$"+vo,uC="__reactHandles$"+vo;function Wr(t){var e=t[vn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fn]||n[vn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hm(t);t!==null;){if(n=t[vn])return n;t=Hm(t)}return e}t=n,n=t.parentNode}return null}function Gs(t){return t=t[vn]||t[Fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ni(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function cu(t){return t[Cs]||null}var jd=[],Pi=-1;function Ar(t){return{current:t}}function Oe(t){0>Pi||(t.current=jd[Pi],jd[Pi]=null,Pi--)}function Ie(t,e){Pi++,jd[Pi]=t.current,t.current=e}var br={},ft=Ar(br),kt=Ar(!1),Zr=br;function qi(t,e){var n=t.type.contextTypes;if(!n)return br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function bt(t){return t=t.childContextTypes,t!=null}function pl(){Oe(kt),Oe(ft)}function Bm(t,e,n){if(ft.current!==br)throw Error(L(168));Ie(ft,e),Ie(kt,n)}function ny(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,Q1(t)||"Unknown",i));return $e({},n,r)}function ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,Zr=ft.current,Ie(ft,t),Ie(kt,kt.current),!0}function Wm(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=ny(t,e,Zr),r.__reactInternalMemoizedMergedChildContext=t,Oe(kt),Oe(ft),Ie(ft,t)):Oe(kt),Ie(kt,n)}var Rn=null,du=!1,Mc=!1;function ry(t){Rn===null?Rn=[t]:Rn.push(t)}function cC(t){du=!0,ry(t)}function Dr(){if(!Mc&&Rn!==null){Mc=!0;var t=0,e=ye;try{var n=Rn;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rn=null,du=!1}catch(i){throw Rn!==null&&(Rn=Rn.slice(t+1)),T_(ef,Dr),i}finally{ye=e,Mc=!1}}return null}var Oi=[],Ai=0,gl=null,vl=0,jt=[],Ut=0,ei=null,Nn=1,Pn="";function jr(t,e){Oi[Ai++]=vl,Oi[Ai++]=gl,gl=t,vl=e}function iy(t,e,n){jt[Ut++]=Nn,jt[Ut++]=Pn,jt[Ut++]=ei,ei=t;var r=Nn;t=Pn;var i=32-an(r)-1;r&=~(1<<i),n+=1;var o=32-an(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Nn=1<<32-an(e)+i|n<<i|r,Pn=o+t}else Nn=1<<o|n<<i|r,Pn=t}function cf(t){t.return!==null&&(jr(t,1),iy(t,1,0))}function df(t){for(;t===gl;)gl=Oi[--Ai],Oi[Ai]=null,vl=Oi[--Ai],Oi[Ai]=null;for(;t===ei;)ei=jt[--Ut],jt[Ut]=null,Pn=jt[--Ut],jt[Ut]=null,Nn=jt[--Ut],jt[Ut]=null}var Ot=null,Pt=null,Ae=!1,rn=null;function oy(t,e){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ot=t,Pt=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ot=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ei!==null?{id:Nn,overflow:Pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ot=t,Pt=null,!0):!1;default:return!1}}function Ud(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zd(t){if(Ae){var e=Pt;if(e){var n=e;if(!Vm(t,e)){if(Ud(t))throw Error(L(418));e=hr(n.nextSibling);var r=Ot;e&&Vm(t,e)?oy(r,n):(t.flags=t.flags&-4097|2,Ae=!1,Ot=t)}}else{if(Ud(t))throw Error(L(418));t.flags=t.flags&-4097|2,Ae=!1,Ot=t}}}function Gm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ot=t}function Ta(t){if(t!==Ot)return!1;if(!Ae)return Gm(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Md(t.type,t.memoizedProps)),e&&(e=Pt)){if(Ud(t))throw sy(),Error(L(418));for(;e;)oy(t,e),e=hr(e.nextSibling)}if(Gm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=Ot?hr(t.stateNode.nextSibling):null;return!0}function sy(){for(var t=Pt;t;)t=hr(t.nextSibling)}function Xi(){Pt=Ot=null,Ae=!1}function hf(t){rn===null?rn=[t]:rn.push(t)}var dC=Hn.ReactCurrentBatchConfig;function tn(t,e){if(t&&t.defaultProps){e=$e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var _l=Ar(null),yl=null,Di=null,ff=null;function pf(){ff=Di=yl=null}function mf(t){var e=_l.current;Oe(_l),t._currentValue=e}function Hd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Bi(t,e){yl=t,ff=Di=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Ct=!0),t.firstContext=null)}function Gt(t){var e=t._currentValue;if(ff!==t)if(t={context:t,memoizedValue:e,next:null},Di===null){if(yl===null)throw Error(L(308));Di=t,yl.dependencies={lanes:0,firstContext:t}}else Di=Di.next=t;return e}var Vr=null;function gf(t){Vr===null?Vr=[t]:Vr.push(t)}function ay(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,gf(e)):(n.next=i.next,i.next=n),e.interleaved=n,$n(t,r)}function $n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xn=!1;function vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ly(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ge&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$n(t,n)}return i=r.interleaved,i===null?(e.next=e,gf(r)):(e.next=i.next,i.next=e),r.interleaved=e,$n(t,n)}function Ga(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tf(t,n)}}function Qm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wl(t,e,n,r){var i=t.updateQueue;Xn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,f=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,_=a;switch(h=e,f=n,_.tag){case 1:if(m=_.payload,typeof m=="function"){d=m.call(f,d,h);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=_.payload,h=typeof m=="function"?m.call(f,d,h):m,h==null)break e;d=$e({},d,h);break e;case 2:Xn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=d):c=c.next=f,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);ni|=s,t.lanes=s,t.memoizedState=d}}function Km(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var uy=new a_.Component().refs;function Bd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:$e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hu={isMounted:function(t){return(t=t._reactInternals)?mi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=_t(),i=mr(t),o=Ln(r,i);o.payload=e,n!=null&&(o.callback=n),e=fr(t,o,i),e!==null&&(ln(e,t,i,r),Ga(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=_t(),i=mr(t),o=Ln(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=fr(t,o,i),e!==null&&(ln(e,t,i,r),Ga(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_t(),r=mr(t),i=Ln(n,r);i.tag=2,e!=null&&(i.callback=e),e=fr(t,i,r),e!==null&&(ln(e,t,r,n),Ga(e,t,r))}};function Ym(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!ws(n,r)||!ws(i,o):!0}function cy(t,e,n){var r=!1,i=br,o=e.contextType;return typeof o=="object"&&o!==null?o=Gt(o):(i=bt(e)?Zr:ft.current,r=e.contextTypes,o=(r=r!=null)?qi(t,i):br),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function qm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hu.enqueueReplaceState(e,e.state,null)}function Wd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=uy,vf(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Gt(o):(o=bt(e)?Zr:ft.current,i.context=qi(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Bd(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hu.enqueueReplaceState(i,i.state,null),wl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===uy&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Ra(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xm(t){var e=t._init;return e(t._payload)}function dy(t){function e(g,p){if(t){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=gr(g,p),g.index=0,g.sibling=null,g}function o(g,p,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function s(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,v,w){return p===null||p.tag!==6?(p=Bc(v,g.mode,w),p.return=g,p):(p=i(p,v),p.return=g,p)}function l(g,p,v,w){var I=v.type;return I===bi?c(g,p,v.props.children,w,v.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===qn&&Xm(I)===p.type)?(w=i(p,v.props),w.ref=Mo(g,p,v),w.return=g,w):(w=Ja(v.type,v.key,v.props,null,g.mode,w),w.ref=Mo(g,p,v),w.return=g,w)}function u(g,p,v,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Wc(v,g.mode,w),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function c(g,p,v,w,I){return p===null||p.tag!==7?(p=Yr(v,g.mode,w,I),p.return=g,p):(p=i(p,v),p.return=g,p)}function d(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Bc(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case _a:return v=Ja(p.type,p.key,p.props,null,g.mode,v),v.ref=Mo(g,null,p),v.return=g,v;case ki:return p=Wc(p,g.mode,v),p.return=g,p;case qn:var w=p._init;return d(g,w(p._payload),v)}if(Wo(p)||Po(p))return p=Yr(p,g.mode,v,null),p.return=g,p;Ra(g,p)}return null}function h(g,p,v,w){var I=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return I!==null?null:a(g,p,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _a:return v.key===I?l(g,p,v,w):null;case ki:return v.key===I?u(g,p,v,w):null;case qn:return I=v._init,h(g,p,I(v._payload),w)}if(Wo(v)||Po(v))return I!==null?null:c(g,p,v,w,null);Ra(g,v)}return null}function f(g,p,v,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(v)||null,a(p,g,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case _a:return g=g.get(w.key===null?v:w.key)||null,l(p,g,w,I);case ki:return g=g.get(w.key===null?v:w.key)||null,u(p,g,w,I);case qn:var b=w._init;return f(g,p,v,b(w._payload),I)}if(Wo(w)||Po(w))return g=g.get(v)||null,c(p,g,w,I,null);Ra(p,w)}return null}function m(g,p,v,w){for(var I=null,b=null,x=p,T=p=0,$=null;x!==null&&T<v.length;T++){x.index>T?($=x,x=null):$=x.sibling;var D=h(g,x,v[T],w);if(D===null){x===null&&(x=$);break}t&&x&&D.alternate===null&&e(g,x),p=o(D,p,T),b===null?I=D:b.sibling=D,b=D,x=$}if(T===v.length)return n(g,x),Ae&&jr(g,T),I;if(x===null){for(;T<v.length;T++)x=d(g,v[T],w),x!==null&&(p=o(x,p,T),b===null?I=x:b.sibling=x,b=x);return Ae&&jr(g,T),I}for(x=r(g,x);T<v.length;T++)$=f(x,g,T,v[T],w),$!==null&&(t&&$.alternate!==null&&x.delete($.key===null?T:$.key),p=o($,p,T),b===null?I=$:b.sibling=$,b=$);return t&&x.forEach(function(B){return e(g,B)}),Ae&&jr(g,T),I}function _(g,p,v,w){var I=Po(v);if(typeof I!="function")throw Error(L(150));if(v=I.call(v),v==null)throw Error(L(151));for(var b=I=null,x=p,T=p=0,$=null,D=v.next();x!==null&&!D.done;T++,D=v.next()){x.index>T?($=x,x=null):$=x.sibling;var B=h(g,x,D.value,w);if(B===null){x===null&&(x=$);break}t&&x&&B.alternate===null&&e(g,x),p=o(B,p,T),b===null?I=B:b.sibling=B,b=B,x=$}if(D.done)return n(g,x),Ae&&jr(g,T),I;if(x===null){for(;!D.done;T++,D=v.next())D=d(g,D.value,w),D!==null&&(p=o(D,p,T),b===null?I=D:b.sibling=D,b=D);return Ae&&jr(g,T),I}for(x=r(g,x);!D.done;T++,D=v.next())D=f(x,g,T,D.value,w),D!==null&&(t&&D.alternate!==null&&x.delete(D.key===null?T:D.key),p=o(D,p,T),b===null?I=D:b.sibling=D,b=D);return t&&x.forEach(function(G){return e(g,G)}),Ae&&jr(g,T),I}function E(g,p,v,w){if(typeof v=="object"&&v!==null&&v.type===bi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case _a:e:{for(var I=v.key,b=p;b!==null;){if(b.key===I){if(I=v.type,I===bi){if(b.tag===7){n(g,b.sibling),p=i(b,v.props.children),p.return=g,g=p;break e}}else if(b.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===qn&&Xm(I)===b.type){n(g,b.sibling),p=i(b,v.props),p.ref=Mo(g,b,v),p.return=g,g=p;break e}n(g,b);break}else e(g,b);b=b.sibling}v.type===bi?(p=Yr(v.props.children,g.mode,w,v.key),p.return=g,g=p):(w=Ja(v.type,v.key,v.props,null,g.mode,w),w.ref=Mo(g,p,v),w.return=g,g=w)}return s(g);case ki:e:{for(b=v.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Wc(v,g.mode,w),p.return=g,g=p}return s(g);case qn:return b=v._init,E(g,p,b(v._payload),w)}if(Wo(v))return m(g,p,v,w);if(Po(v))return _(g,p,v,w);Ra(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,v),p.return=g,g=p):(n(g,p),p=Bc(v,g.mode,w),p.return=g,g=p),s(g)):n(g,p)}return E}var Ji=dy(!0),hy=dy(!1),Qs={},wn=Ar(Qs),xs=Ar(Qs),ks=Ar(Qs);function Gr(t){if(t===Qs)throw Error(L(174));return t}function _f(t,e){switch(Ie(ks,e),Ie(xs,t),Ie(wn,Qs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sd(e,t)}Oe(wn),Ie(wn,e)}function Zi(){Oe(wn),Oe(xs),Oe(ks)}function fy(t){Gr(ks.current);var e=Gr(wn.current),n=Sd(e,t.type);e!==n&&(Ie(xs,t),Ie(wn,n))}function yf(t){xs.current===t&&(Oe(wn),Oe(xs))}var Le=Ar(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fc=[];function wf(){for(var t=0;t<Fc.length;t++)Fc[t]._workInProgressVersionPrimary=null;Fc.length=0}var Qa=Hn.ReactCurrentDispatcher,$c=Hn.ReactCurrentBatchConfig,ti=0,Fe=null,Qe=null,Je=null,Sl=!1,es=!1,bs=0,hC=0;function ut(){throw Error(L(321))}function Ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!cn(t[n],e[n]))return!1;return!0}function Sf(t,e,n,r,i,o){if(ti=o,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qa.current=t===null||t.memoizedState===null?gC:vC,t=n(r,i),es){o=0;do{if(es=!1,bs=0,25<=o)throw Error(L(301));o+=1,Je=Qe=null,e.updateQueue=null,Qa.current=_C,t=n(r,i)}while(es)}if(Qa.current=Cl,e=Qe!==null&&Qe.next!==null,ti=0,Je=Qe=Fe=null,Sl=!1,e)throw Error(L(300));return t}function Cf(){var t=bs!==0;return bs=0,t}function gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Fe.memoizedState=Je=t:Je=Je.next=t,Je}function Qt(){if(Qe===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var e=Je===null?Fe.memoizedState:Je.next;if(e!==null)Je=e,Qe=t;else{if(t===null)throw Error(L(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Je===null?Fe.memoizedState=Je=t:Je=Je.next=t}return Je}function Is(t,e){return typeof e=="function"?e(t):e}function jc(t){var e=Qt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Qe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((ti&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,Fe.lanes|=c,ni|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,cn(r,e.memoizedState)||(Ct=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Fe.lanes|=o,ni|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uc(t){var e=Qt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);cn(o,e.memoizedState)||(Ct=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function py(){}function my(t,e){var n=Fe,r=Qt(),i=e(),o=!cn(r.memoizedState,i);if(o&&(r.memoizedState=i,Ct=!0),r=r.queue,xf(_y.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,Ts(9,vy.bind(null,n,r,i,e),void 0,null),tt===null)throw Error(L(349));(ti&30)!==0||gy(n,e,i)}return i}function gy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vy(t,e,n,r){e.value=n,e.getSnapshot=r,yy(e)&&wy(t)}function _y(t,e,n){return n(function(){yy(e)&&wy(t)})}function yy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!cn(t,n)}catch{return!0}}function wy(t){var e=$n(t,1);e!==null&&ln(e,t,1,-1)}function Jm(t){var e=gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:t},e.queue=t,t=t.dispatch=mC.bind(null,Fe,t),[e.memoizedState,t]}function Ts(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ey(){return Qt().memoizedState}function Ka(t,e,n,r){var i=gn();Fe.flags|=t,i.memoizedState=Ts(1|e,n,void 0,r===void 0?null:r)}function fu(t,e,n,r){var i=Qt();r=r===void 0?null:r;var o=void 0;if(Qe!==null){var s=Qe.memoizedState;if(o=s.destroy,r!==null&&Ef(r,s.deps)){i.memoizedState=Ts(e,n,o,r);return}}Fe.flags|=t,i.memoizedState=Ts(1|e,n,o,r)}function Zm(t,e){return Ka(8390656,8,t,e)}function xf(t,e){return fu(2048,8,t,e)}function Sy(t,e){return fu(4,2,t,e)}function Cy(t,e){return fu(4,4,t,e)}function xy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ky(t,e,n){return n=n!=null?n.concat([t]):null,fu(4,4,xy.bind(null,e,t),n)}function kf(){}function by(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ef(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Iy(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ef(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ty(t,e,n){return(ti&21)===0?(t.baseState&&(t.baseState=!1,Ct=!0),t.memoizedState=n):(cn(n,e)||(n=P_(),Fe.lanes|=n,ni|=n,t.baseState=!0),e)}function fC(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=$c.transition;$c.transition={};try{t(!1),e()}finally{ye=n,$c.transition=r}}function Ry(){return Qt().memoizedState}function pC(t,e,n){var r=mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ny(t))Py(e,n);else if(n=ay(t,e,n,r),n!==null){var i=_t();ln(n,t,r,i),Oy(n,e,r)}}function mC(t,e,n){var r=mr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ny(t))Py(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,cn(a,s)){var l=e.interleaved;l===null?(i.next=i,gf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=ay(t,e,i,r),n!==null&&(i=_t(),ln(n,t,r,i),Oy(n,e,r))}}function Ny(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function Py(t,e){es=Sl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Oy(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tf(t,n)}}var Cl={readContext:Gt,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},gC={readContext:Gt,useCallback:function(t,e){return gn().memoizedState=[t,e===void 0?null:e],t},useContext:Gt,useEffect:Zm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ka(4194308,4,xy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ka(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ka(4,2,t,e)},useMemo:function(t,e){var n=gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=pC.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=gn();return t={current:t},e.memoizedState=t},useState:Jm,useDebugValue:kf,useDeferredValue:function(t){return gn().memoizedState=t},useTransition:function(){var t=Jm(!1),e=t[0];return t=fC.bind(null,t[1]),gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,i=gn();if(Ae){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),tt===null)throw Error(L(349));(ti&30)!==0||gy(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Zm(_y.bind(null,r,o,t),[t]),r.flags|=2048,Ts(9,vy.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=gn(),e=tt.identifierPrefix;if(Ae){var n=Pn,r=Nn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=bs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vC={readContext:Gt,useCallback:by,useContext:Gt,useEffect:xf,useImperativeHandle:ky,useInsertionEffect:Sy,useLayoutEffect:Cy,useMemo:Iy,useReducer:jc,useRef:Ey,useState:function(){return jc(Is)},useDebugValue:kf,useDeferredValue:function(t){var e=Qt();return Ty(e,Qe.memoizedState,t)},useTransition:function(){var t=jc(Is)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:py,useSyncExternalStore:my,useId:Ry,unstable_isNewReconciler:!1},_C={readContext:Gt,useCallback:by,useContext:Gt,useEffect:xf,useImperativeHandle:ky,useInsertionEffect:Sy,useLayoutEffect:Cy,useMemo:Iy,useReducer:Uc,useRef:Ey,useState:function(){return Uc(Is)},useDebugValue:kf,useDeferredValue:function(t){var e=Qt();return Qe===null?e.memoizedState=t:Ty(e,Qe.memoizedState,t)},useTransition:function(){var t=Uc(Is)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:py,useSyncExternalStore:my,useId:Ry,unstable_isNewReconciler:!1};function eo(t,e){try{var n="",r=e;do n+=G1(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function zc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Vd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yC=typeof WeakMap=="function"?WeakMap:Map;function Ay(t,e,n){n=Ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){kl||(kl=!0,th=r),Vd(t,e)},n}function Dy(t,e,n){n=Ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Vd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Vd(t,e),typeof r!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function eg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new yC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=AC.bind(null,t,e,n),e.then(t,t))}function tg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ng(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ln(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var wC=Hn.ReactCurrentOwner,Ct=!1;function gt(t,e,n,r){e.child=t===null?hy(e,null,n,r):Ji(e,t.child,n,r)}function rg(t,e,n,r,i){n=n.render;var o=e.ref;return Bi(e,i),r=Sf(t,e,n,r,o,i),n=Cf(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(Ae&&n&&cf(e),e.flags|=1,gt(t,e,r,i),e.child)}function ig(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Af(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Ly(t,e,o,r,i)):(t=Ja(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,(t.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ws,n(s,r)&&t.ref===e.ref)return jn(t,e,i)}return e.flags|=1,t=gr(o,r),t.ref=e.ref,t.return=e,e.child=t}function Ly(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(ws(o,r)&&t.ref===e.ref)if(Ct=!1,e.pendingProps=r=o,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Ct=!0);else return e.lanes=t.lanes,jn(t,e,i)}return Gd(t,e,n,r,i)}function My(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Mi,Rt),Rt|=n;else{if((n&1073741824)===0)return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(Mi,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ie(Mi,Rt),Rt|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Ie(Mi,Rt),Rt|=r;return gt(t,e,i,n),e.child}function Fy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gd(t,e,n,r,i){var o=bt(n)?Zr:ft.current;return o=qi(e,o),Bi(e,i),n=Sf(t,e,n,r,o,i),r=Cf(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(Ae&&r&&cf(e),e.flags|=1,gt(t,e,n,i),e.child)}function og(t,e,n,r,i){if(bt(n)){var o=!0;ml(e)}else o=!1;if(Bi(e,i),e.stateNode===null)Ya(t,e),cy(e,n,r),Wd(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Gt(u):(u=bt(n)?Zr:ft.current,u=qi(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&qm(e,s,r,u),Xn=!1;var h=e.memoizedState;s.state=h,wl(e,r,s,i),l=e.memoizedState,a!==r||h!==l||kt.current||Xn?(typeof c=="function"&&(Bd(e,n,c,r),l=e.memoizedState),(a=Xn||Ym(e,n,a,r,h,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,ly(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:tn(e.type,a),s.props=u,d=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gt(l):(l=bt(n)?Zr:ft.current,l=qi(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&qm(e,s,r,l),Xn=!1,h=e.memoizedState,s.state=h,wl(e,r,s,i);var m=e.memoizedState;a!==d||h!==m||kt.current||Xn?(typeof f=="function"&&(Bd(e,n,f,r),m=e.memoizedState),(u=Xn||Ym(e,n,u,r,h,m,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,m,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,m,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),s.props=r,s.state=m,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Qd(t,e,n,r,o,i)}function Qd(t,e,n,r,i,o){Fy(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Wm(e,n,!1),jn(t,e,o);r=e.stateNode,wC.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Ji(e,t.child,null,o),e.child=Ji(e,null,a,o)):gt(t,e,a,o),e.memoizedState=r.state,i&&Wm(e,n,!0),e.child}function $y(t){var e=t.stateNode;e.pendingContext?Bm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bm(t,e.context,!1),_f(t,e.containerInfo)}function sg(t,e,n,r,i){return Xi(),hf(i),e.flags|=256,gt(t,e,n,r),e.child}var Kd={dehydrated:null,treeContext:null,retryLane:0};function Yd(t){return{baseLanes:t,cachePool:null,transitions:null}}function jy(t,e,n){var r=e.pendingProps,i=Le.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(Le,i&1),t===null)return zd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=gu(s,r,0,null),t=Yr(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Yd(n),e.memoizedState=Kd,t):bf(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return EC(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(s&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=gr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=gr(a,o):(o=Yr(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Yd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Kd,r}return o=t.child,t=o.sibling,r=gr(o,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function bf(t,e){return e=gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Na(t,e,n,r){return r!==null&&hf(r),Ji(e,t.child,null,n),t=bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function EC(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=zc(Error(L(422))),Na(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=gu({mode:"visible",children:r.children},i,0,null),o=Yr(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,(e.mode&1)!==0&&Ji(e,t.child,null,s),e.child.memoizedState=Yd(s),e.memoizedState=Kd,o);if((e.mode&1)===0)return Na(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(L(419)),r=zc(o,r,void 0),Na(t,e,s,r)}if(a=(s&t.childLanes)!==0,Ct||a){if(r=tt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,$n(t,i),ln(r,t,i,-1))}return Of(),r=zc(Error(L(421))),Na(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=DC.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Pt=hr(i.nextSibling),Ot=e,Ae=!0,rn=null,t!==null&&(jt[Ut++]=Nn,jt[Ut++]=Pn,jt[Ut++]=ei,Nn=t.id,Pn=t.overflow,ei=e),e=bf(e,r.children),e.flags|=4096,e)}function ag(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hd(t.return,e,n)}function Hc(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Uy(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(gt(t,e,r.children,n),r=Le.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ag(t,n,e);else if(t.tag===19)ag(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Le,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Hc(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&El(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Hc(e,!0,n,null,o);break;case"together":Hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ya(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ni|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function SC(t,e,n){switch(e.tag){case 3:$y(e),Xi();break;case 5:fy(e);break;case 1:bt(e.type)&&ml(e);break;case 4:_f(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(_l,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Le,Le.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?jy(t,e,n):(Ie(Le,Le.current&1),t=jn(t,e,n),t!==null?t.sibling:null);Ie(Le,Le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return Uy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Le,Le.current),r)break;return null;case 22:case 23:return e.lanes=0,My(t,e,n)}return jn(t,e,n)}var zy,qd,Hy,By;zy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qd=function(){};Hy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Gr(wn.current);var o=null;switch(n){case"input":i=_d(t,i),r=_d(t,r),o=[];break;case"select":i=$e({},i,{value:void 0}),r=$e({},r,{value:void 0}),o=[];break;case"textarea":i=Ed(t,i),r=Ed(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fl)}Cd(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Pe("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};By=function(t,e,n,r){n!==r&&(e.flags|=4)};function Fo(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function CC(t,e,n){var r=e.pendingProps;switch(df(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return bt(e.type)&&pl(),ct(e),null;case 3:return r=e.stateNode,Zi(),Oe(kt),Oe(ft),wf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ta(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,rn!==null&&(ih(rn),rn=null))),qd(t,e),ct(e),null;case 5:yf(e);var i=Gr(ks.current);if(n=e.type,t!==null&&e.stateNode!=null)Hy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return ct(e),null}if(t=Gr(wn.current),Ta(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[vn]=e,r[Cs]=o,t=(e.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(i=0;i<Go.length;i++)Pe(Go[i],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":gm(r,o),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Pe("invalid",r);break;case"textarea":_m(r,o),Pe("invalid",r)}Cd(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ia(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ia(r.textContent,a,t),i=["children",""+a]):fs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Pe("scroll",r)}switch(n){case"input":ya(r),vm(r,o,!0);break;case"textarea":ya(r),ym(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=fl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=g_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[vn]=e,t[Cs]=r,zy(t,e,!1,!1),e.stateNode=t;e:{switch(s=xd(n,r),n){case"dialog":Pe("cancel",t),Pe("close",t),i=r;break;case"iframe":case"object":case"embed":Pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Go.length;i++)Pe(Go[i],t);i=r;break;case"source":Pe("error",t),i=r;break;case"img":case"image":case"link":Pe("error",t),Pe("load",t),i=r;break;case"details":Pe("toggle",t),i=r;break;case"input":gm(t,r),i=_d(t,r),Pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=$e({},r,{value:void 0}),Pe("invalid",t);break;case"textarea":_m(t,r),i=Ed(t,r),Pe("invalid",t);break;default:i=r}Cd(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?y_(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&v_(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ps(t,l):typeof l=="number"&&ps(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(fs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Pe("scroll",t):l!=null&&Yh(t,o,l,s))}switch(n){case"input":ya(t),vm(t,r,!1);break;case"textarea":ya(t),ym(t);break;case"option":r.value!=null&&t.setAttribute("value",""+kr(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?ji(t,!!r.multiple,o,!1):r.defaultValue!=null&&ji(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)By(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=Gr(ks.current),Gr(wn.current),Ta(e)){if(r=e.stateNode,n=e.memoizedProps,r[vn]=e,(o=r.nodeValue!==n)&&(t=Ot,t!==null))switch(t.tag){case 3:Ia(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ia(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vn]=e,e.stateNode=r}return ct(e),null;case 13:if(Oe(Le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&Pt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)sy(),Xi(),e.flags|=98560,o=!1;else if(o=Ta(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(L(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[vn]=e}else Xi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ct(e),o=!1}else rn!==null&&(ih(rn),rn=null),o=!0;if(!o)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Le.current&1)!==0?Ye===0&&(Ye=3):Of())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return Zi(),qd(t,e),t===null&&Es(e.stateNode.containerInfo),ct(e),null;case 10:return mf(e.type._context),ct(e),null;case 17:return bt(e.type)&&pl(),ct(e),null;case 19:if(Oe(Le),o=e.memoizedState,o===null)return ct(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Fo(o,!1);else{if(Ye!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=El(t),s!==null){for(e.flags|=128,Fo(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Le,Le.current&1|2),e.child}t=t.sibling}o.tail!==null&&Be()>to&&(e.flags|=128,r=!0,Fo(o,!1),e.lanes=4194304)}else{if(!r)if(t=El(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ae)return ct(e),null}else 2*Be()-o.renderingStartTime>to&&n!==1073741824&&(e.flags|=128,r=!0,Fo(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Be(),e.sibling=null,n=Le.current,Ie(Le,r?n&1|2:n&1),e):(ct(e),null);case 22:case 23:return Pf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Rt&1073741824)!==0&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function xC(t,e){switch(df(e),e.tag){case 1:return bt(e.type)&&pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zi(),Oe(kt),Oe(ft),wf(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return yf(e),null;case 13:if(Oe(Le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));Xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Oe(Le),null;case 4:return Zi(),null;case 10:return mf(e.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var Pa=!1,dt=!1,kC=typeof WeakSet=="function"?WeakSet:Set,W=null;function Li(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(t,e,r)}else n.current=null}function Xd(t,e,n){try{n()}catch(r){ze(t,e,r)}}var lg=!1;function bC(t,e){if(Dd=cl,t=Q_(),uf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var f;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(f=d.firstChild)!==null;)h=d,d=f;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=s),h===o&&++c===r&&(l=s),(f=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ld={focusedElem:t,selectionRange:n},cl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var m=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var _=m.memoizedProps,E=m.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:tn(e.type,_),E);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(w){ze(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return m=lg,lg=!1,m}function ts(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Xd(e,n,o)}i=i.next}while(i!==r)}}function pu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Jd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Wy(t){var e=t.alternate;e!==null&&(t.alternate=null,Wy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vn],delete e[Cs],delete e[$d],delete e[lC],delete e[uC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vy(t){return t.tag===5||t.tag===3||t.tag===4}function ug(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fl));else if(r!==4&&(t=t.child,t!==null))for(Zd(t,e,n),t=t.sibling;t!==null;)Zd(t,e,n),t=t.sibling}function eh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(eh(t,e,n),t=t.sibling;t!==null;)eh(t,e,n),t=t.sibling}var it=null,nn=!1;function Kn(t,e,n){for(n=n.child;n!==null;)Gy(t,e,n),n=n.sibling}function Gy(t,e,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(su,n)}catch{}switch(n.tag){case 5:dt||Li(n,e);case 6:var r=it,i=nn;it=null,Kn(t,e,n),it=r,nn=i,it!==null&&(nn?(t=it,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(nn?(t=it,n=n.stateNode,t.nodeType===8?Lc(t.parentNode,n):t.nodeType===1&&Lc(t,n),_s(t)):Lc(it,n.stateNode));break;case 4:r=it,i=nn,it=n.stateNode.containerInfo,nn=!0,Kn(t,e,n),it=r,nn=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&Xd(n,e,s),i=i.next}while(i!==r)}Kn(t,e,n);break;case 1:if(!dt&&(Li(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ze(n,e,a)}Kn(t,e,n);break;case 21:Kn(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,Kn(t,e,n),dt=r):Kn(t,e,n);break;default:Kn(t,e,n)}}function cg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kC),e.forEach(function(r){var i=LC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function en(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:it=a.stateNode,nn=!1;break e;case 3:it=a.stateNode.containerInfo,nn=!0;break e;case 4:it=a.stateNode.containerInfo,nn=!0;break e}a=a.return}if(it===null)throw Error(L(160));Gy(o,s,i),it=null,nn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ze(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qy(e,t),e=e.sibling}function Qy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(en(e,t),mn(t),r&4){try{ts(3,t,t.return),pu(3,t)}catch(_){ze(t,t.return,_)}try{ts(5,t,t.return)}catch(_){ze(t,t.return,_)}}break;case 1:en(e,t),mn(t),r&512&&n!==null&&Li(n,n.return);break;case 5:if(en(e,t),mn(t),r&512&&n!==null&&Li(n,n.return),t.flags&32){var i=t.stateNode;try{ps(i,"")}catch(_){ze(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&p_(i,o),xd(a,s);var u=xd(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?y_(i,d):c==="dangerouslySetInnerHTML"?v_(i,d):c==="children"?ps(i,d):Yh(i,c,d,u)}switch(a){case"input":yd(i,o);break;case"textarea":m_(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var f=o.value;f!=null?ji(i,!!o.multiple,f,!1):h!==!!o.multiple&&(o.defaultValue!=null?ji(i,!!o.multiple,o.defaultValue,!0):ji(i,!!o.multiple,o.multiple?[]:"",!1))}i[Cs]=o}catch(_){ze(t,t.return,_)}}break;case 6:if(en(e,t),mn(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(_){ze(t,t.return,_)}}break;case 3:if(en(e,t),mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_s(e.containerInfo)}catch(_){ze(t,t.return,_)}break;case 4:en(e,t),mn(t);break;case 13:en(e,t),mn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Rf=Be())),r&4&&cg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(u=dt)||c,en(e,t),dt=u):en(e,t),mn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(W=t,c=t.child;c!==null;){for(d=W=c;W!==null;){switch(h=W,f=h.child,h.tag){case 0:case 11:case 14:case 15:ts(4,h,h.return);break;case 1:Li(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(_){ze(r,n,_)}}break;case 5:Li(h,h.return);break;case 22:if(h.memoizedState!==null){hg(d);continue}}f!==null?(f.return=h,W=f):hg(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=__("display",s))}catch(_){ze(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){ze(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:en(e,t),mn(t),r&4&&cg(t);break;case 21:break;default:en(e,t),mn(t)}}function mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vy(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ps(i,""),r.flags&=-33);var o=ug(t);eh(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=ug(t);Zd(t,a,s);break;default:throw Error(L(161))}}catch(l){ze(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function IC(t,e,n){W=t,Ky(t)}function Ky(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Pa;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||dt;a=Pa;var u=dt;if(Pa=s,(dt=l)&&!u)for(W=i;W!==null;)s=W,l=s.child,s.tag===22&&s.memoizedState!==null?fg(i):l!==null?(l.return=s,W=l):fg(i);for(;o!==null;)W=o,Ky(o),o=o.sibling;W=i,Pa=a,dt=u}dg(t)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,W=o):dg(t)}}function dg(t){for(;W!==null;){var e=W;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:dt||pu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Km(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Km(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&_s(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}dt||e.flags&512&&Jd(e)}catch(h){ze(e,e.return,h)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function hg(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function fg(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pu(4,e)}catch(l){ze(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ze(e,i,l)}}var o=e.return;try{Jd(e)}catch(l){ze(e,o,l)}break;case 5:var s=e.return;try{Jd(e)}catch(l){ze(e,s,l)}}}catch(l){ze(e,e.return,l)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var TC=Math.ceil,xl=Hn.ReactCurrentDispatcher,If=Hn.ReactCurrentOwner,Wt=Hn.ReactCurrentBatchConfig,ge=0,tt=null,We=null,ot=0,Rt=0,Mi=Ar(0),Ye=0,Rs=null,ni=0,mu=0,Tf=0,ns=null,St=null,Rf=0,to=1/0,Tn=null,kl=!1,th=null,pr=null,Oa=!1,or=null,bl=0,rs=0,nh=null,qa=-1,Xa=0;function _t(){return(ge&6)!==0?Be():qa!==-1?qa:qa=Be()}function mr(t){return(t.mode&1)===0?1:(ge&2)!==0&&ot!==0?ot&-ot:dC.transition!==null?(Xa===0&&(Xa=P_()),Xa):(t=ye,t!==0||(t=window.event,t=t===void 0?16:$_(t.type)),t)}function ln(t,e,n,r){if(50<rs)throw rs=0,nh=null,Error(L(185));Ws(t,n,r),((ge&2)===0||t!==tt)&&(t===tt&&((ge&2)===0&&(mu|=n),Ye===4&&Zn(t,ot)),It(t,r),n===1&&ge===0&&(e.mode&1)===0&&(to=Be()+500,du&&Dr()))}function It(t,e){var n=t.callbackNode;dS(t,e);var r=ul(t,t===tt?ot:0);if(r===0)n!==null&&Sm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Sm(n),e===1)t.tag===0?cC(pg.bind(null,t)):ry(pg.bind(null,t)),sC(function(){(ge&6)===0&&Dr()}),n=null;else{switch(O_(r)){case 1:n=ef;break;case 4:n=R_;break;case 16:n=ll;break;case 536870912:n=N_;break;default:n=ll}n=n0(n,Yy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Yy(t,e){if(qa=-1,Xa=0,(ge&6)!==0)throw Error(L(327));var n=t.callbackNode;if(Wi()&&t.callbackNode!==n)return null;var r=ul(t,t===tt?ot:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Il(t,r);else{e=r;var i=ge;ge|=2;var o=Xy();(tt!==t||ot!==e)&&(Tn=null,to=Be()+500,Kr(t,e));do try{PC();break}catch(a){qy(t,a)}while(1);pf(),xl.current=o,ge=i,We!==null?e=0:(tt=null,ot=0,e=Ye)}if(e!==0){if(e===2&&(i=Rd(t),i!==0&&(r=i,e=rh(t,i))),e===1)throw n=Rs,Kr(t,0),Zn(t,r),It(t,Be()),n;if(e===6)Zn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!RC(i)&&(e=Il(t,r),e===2&&(o=Rd(t),o!==0&&(r=o,e=rh(t,o))),e===1))throw n=Rs,Kr(t,0),Zn(t,r),It(t,Be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:Ur(t,St,Tn);break;case 3:if(Zn(t,r),(r&130023424)===r&&(e=Rf+500-Be(),10<e)){if(ul(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){_t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Fd(Ur.bind(null,t,St,Tn),e);break}Ur(t,St,Tn);break;case 4:if(Zn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-an(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*TC(r/1960))-r,10<r){t.timeoutHandle=Fd(Ur.bind(null,t,St,Tn),r);break}Ur(t,St,Tn);break;case 5:Ur(t,St,Tn);break;default:throw Error(L(329))}}}return It(t,Be()),t.callbackNode===n?Yy.bind(null,t):null}function rh(t,e){var n=ns;return t.current.memoizedState.isDehydrated&&(Kr(t,e).flags|=256),t=Il(t,e),t!==2&&(e=St,St=n,e!==null&&ih(e)),t}function ih(t){St===null?St=t:St.push.apply(St,t)}function RC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!cn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zn(t,e){for(e&=~Tf,e&=~mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-an(e),r=1<<n;t[n]=-1,e&=~r}}function pg(t){if((ge&6)!==0)throw Error(L(327));Wi();var e=ul(t,0);if((e&1)===0)return It(t,Be()),null;var n=Il(t,e);if(t.tag!==0&&n===2){var r=Rd(t);r!==0&&(e=r,n=rh(t,r))}if(n===1)throw n=Rs,Kr(t,0),Zn(t,e),It(t,Be()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ur(t,St,Tn),It(t,Be()),null}function Nf(t,e){var n=ge;ge|=1;try{return t(e)}finally{ge=n,ge===0&&(to=Be()+500,du&&Dr())}}function ri(t){or!==null&&or.tag===0&&(ge&6)===0&&Wi();var e=ge;ge|=1;var n=Wt.transition,r=ye;try{if(Wt.transition=null,ye=1,t)return t()}finally{ye=r,Wt.transition=n,ge=e,(ge&6)===0&&Dr()}}function Pf(){Rt=Mi.current,Oe(Mi)}function Kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oC(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(df(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pl();break;case 3:Zi(),Oe(kt),Oe(ft),wf();break;case 5:yf(r);break;case 4:Zi();break;case 13:Oe(Le);break;case 19:Oe(Le);break;case 10:mf(r.type._context);break;case 22:case 23:Pf()}n=n.return}if(tt=t,We=t=gr(t.current,null),ot=Rt=e,Ye=0,Rs=null,Tf=mu=ni=0,St=ns=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Vr=null}return t}function qy(t,e){do{var n=We;try{if(pf(),Qa.current=Cl,Sl){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Sl=!1}if(ti=0,Je=Qe=Fe=null,es=!1,bs=0,If.current=null,n===null||n.return===null){Ye=1,Rs=e,We=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=tg(s);if(f!==null){f.flags&=-257,ng(f,s,a,o,e),f.mode&1&&eg(o,u,e),e=f,l=u;var m=e.updateQueue;if(m===null){var _=new Set;_.add(l),e.updateQueue=_}else m.add(l);break e}else{if((e&1)===0){eg(o,u,e),Of();break e}l=Error(L(426))}}else if(Ae&&a.mode&1){var E=tg(s);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),ng(E,s,a,o,e),hf(eo(l,a));break e}}o=l=eo(l,a),Ye!==4&&(Ye=2),ns===null?ns=[o]:ns.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var g=Ay(o,l,e);Qm(o,g);break e;case 1:a=l;var p=o.type,v=o.stateNode;if((o.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(pr===null||!pr.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=Dy(o,a,e);Qm(o,w);break e}}o=o.return}while(o!==null)}Zy(n)}catch(I){e=I,We===n&&n!==null&&(We=n=n.return);continue}break}while(1)}function Xy(){var t=xl.current;return xl.current=Cl,t===null?Cl:t}function Of(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),tt===null||(ni&268435455)===0&&(mu&268435455)===0||Zn(tt,ot)}function Il(t,e){var n=ge;ge|=2;var r=Xy();(tt!==t||ot!==e)&&(Tn=null,Kr(t,e));do try{NC();break}catch(i){qy(t,i)}while(1);if(pf(),ge=n,xl.current=r,We!==null)throw Error(L(261));return tt=null,ot=0,Ye}function NC(){for(;We!==null;)Jy(We)}function PC(){for(;We!==null&&!nS();)Jy(We)}function Jy(t){var e=t0(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?Zy(t):We=e,If.current=null}function Zy(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=CC(n,e,Rt),n!==null){We=n;return}}else{if(n=xC(n,e),n!==null){n.flags&=32767,We=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,We=null;return}}if(e=e.sibling,e!==null){We=e;return}We=e=t}while(e!==null);Ye===0&&(Ye=5)}function Ur(t,e,n){var r=ye,i=Wt.transition;try{Wt.transition=null,ye=1,OC(t,e,n,r)}finally{Wt.transition=i,ye=r}return null}function OC(t,e,n,r){do Wi();while(or!==null);if((ge&6)!==0)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(hS(t,o),t===tt&&(We=tt=null,ot=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Oa||(Oa=!0,n0(ll,function(){return Wi(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=Wt.transition,Wt.transition=null;var s=ye;ye=1;var a=ge;ge|=4,If.current=null,bC(t,n),Qy(n,t),JS(Ld),cl=!!Dd,Ld=Dd=null,t.current=n,IC(n),rS(),ge=a,ye=s,Wt.transition=o}else t.current=n;if(Oa&&(Oa=!1,or=t,bl=i),o=t.pendingLanes,o===0&&(pr=null),sS(n.stateNode),It(t,Be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(kl)throw kl=!1,t=th,th=null,t;return(bl&1)!==0&&t.tag!==0&&Wi(),o=t.pendingLanes,(o&1)!==0?t===nh?rs++:(rs=0,nh=t):rs=0,Dr(),null}function Wi(){if(or!==null){var t=O_(bl),e=Wt.transition,n=ye;try{if(Wt.transition=null,ye=16>t?16:t,or===null)var r=!1;else{if(t=or,or=null,bl=0,(ge&6)!==0)throw Error(L(331));var i=ge;for(ge|=4,W=t.current;W!==null;){var o=W,s=o.child;if((W.flags&16)!==0){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(W=u;W!==null;){var c=W;switch(c.tag){case 0:case 11:case 15:ts(8,c,o)}var d=c.child;if(d!==null)d.return=c,W=d;else for(;W!==null;){c=W;var h=c.sibling,f=c.return;if(Wy(c),c===u){W=null;break}if(h!==null){h.return=f,W=h;break}W=f}}}var m=o.alternate;if(m!==null){var _=m.child;if(_!==null){m.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}W=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,W=s;else e:for(;W!==null;){if(o=W,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:ts(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,W=g;break e}W=o.return}}var p=t.current;for(W=p;W!==null;){s=W;var v=s.child;if((s.subtreeFlags&2064)!==0&&v!==null)v.return=s,W=v;else e:for(s=p;W!==null;){if(a=W,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:pu(9,a)}}catch(I){ze(a,a.return,I)}if(a===s){W=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,W=w;break e}W=a.return}}if(ge=i,Dr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(su,t)}catch{}r=!0}return r}finally{ye=n,Wt.transition=e}}return!1}function mg(t,e,n){e=eo(n,e),e=Ay(t,e,1),t=fr(t,e,1),e=_t(),t!==null&&(Ws(t,1,e),It(t,e))}function ze(t,e,n){if(t.tag===3)mg(t,t,n);else for(;e!==null;){if(e.tag===3){mg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pr===null||!pr.has(r))){t=eo(n,t),t=Dy(e,t,1),e=fr(e,t,1),t=_t(),e!==null&&(Ws(e,1,t),It(e,t));break}}e=e.return}}function AC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=_t(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(ot&n)===n&&(Ye===4||Ye===3&&(ot&130023424)===ot&&500>Be()-Rf?Kr(t,0):Tf|=n),It(t,e)}function e0(t,e){e===0&&((t.mode&1)===0?e=1:(e=Sa,Sa<<=1,(Sa&130023424)===0&&(Sa=4194304)));var n=_t();t=$n(t,e),t!==null&&(Ws(t,e,n),It(t,n))}function DC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),e0(t,n)}function LC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),e0(t,n)}var t0;t0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||kt.current)Ct=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Ct=!1,SC(t,e,n);Ct=(t.flags&131072)!==0}else Ct=!1,Ae&&(e.flags&1048576)!==0&&iy(e,vl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ya(t,e),t=e.pendingProps;var i=qi(e,ft.current);Bi(e,n),i=Sf(null,e,r,t,i,n);var o=Cf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bt(r)?(o=!0,ml(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vf(e),i.updater=hu,e.stateNode=i,i._reactInternals=e,Wd(e,r,t,n),e=Qd(null,e,r,!0,o,n)):(e.tag=0,Ae&&o&&cf(e),gt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ya(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=FC(r),t=tn(r,t),i){case 0:e=Gd(null,e,r,t,n);break e;case 1:e=og(null,e,r,t,n);break e;case 11:e=rg(null,e,r,t,n);break e;case 14:e=ig(null,e,r,tn(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),Gd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),og(t,e,r,i,n);case 3:e:{if($y(e),t===null)throw Error(L(387));r=e.pendingProps,o=e.memoizedState,i=o.element,ly(t,e),wl(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=eo(Error(L(423)),e),e=sg(t,e,r,n,i);break e}else if(r!==i){i=eo(Error(L(424)),e),e=sg(t,e,r,n,i);break e}else for(Pt=hr(e.stateNode.containerInfo.firstChild),Ot=e,Ae=!0,rn=null,n=hy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xi(),r===i){e=jn(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return fy(e),t===null&&zd(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Md(r,i)?s=null:o!==null&&Md(r,o)&&(e.flags|=32),Fy(t,e),gt(t,e,s,n),e.child;case 6:return t===null&&zd(e),null;case 13:return jy(t,e,n);case 4:return _f(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ji(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),rg(t,e,r,i,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Ie(_l,r._currentValue),r._currentValue=s,o!==null)if(cn(o.value,s)){if(o.children===i.children&&!kt.current){e=jn(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Ln(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Hd(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(L(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Hd(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Bi(e,n),i=Gt(i),r=r(i),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,i=tn(r,e.pendingProps),i=tn(r.type,i),ig(t,e,r,i,n);case 15:return Ly(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),Ya(t,e),e.tag=1,bt(r)?(t=!0,ml(e)):t=!1,Bi(e,n),cy(e,r,i),Wd(e,r,i,n),Qd(null,e,r,!0,t,n);case 19:return Uy(t,e,n);case 22:return My(t,e,n)}throw Error(L(156,e.tag))};function n0(t,e){return T_(t,e)}function MC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,e,n,r){return new MC(t,e,n,r)}function Af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function FC(t){if(typeof t=="function")return Af(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xh)return 11;if(t===Jh)return 14}return 2}function gr(t,e){var n=t.alternate;return n===null?(n=Ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ja(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Af(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case bi:return Yr(n.children,i,o,e);case qh:s=8,i|=8;break;case pd:return t=Ht(12,n,e,i|2),t.elementType=pd,t.lanes=o,t;case md:return t=Ht(13,n,e,i),t.elementType=md,t.lanes=o,t;case gd:return t=Ht(19,n,e,i),t.elementType=gd,t.lanes=o,t;case d_:return gu(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case u_:s=10;break e;case c_:s=9;break e;case Xh:s=11;break e;case Jh:s=14;break e;case qn:s=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=Ht(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Yr(t,e,n,r){return t=Ht(7,t,r,e),t.lanes=n,t}function gu(t,e,n,r){return t=Ht(22,t,r,e),t.elementType=d_,t.lanes=n,t.stateNode={isHidden:!1},t}function Bc(t,e,n){return t=Ht(6,t,null,e),t.lanes=n,t}function Wc(t,e,n){return e=Ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $C(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xc(0),this.expirationTimes=xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Df(t,e,n,r,i,o,s,a,l){return t=new $C(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ht(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vf(o),t}function jC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ki,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function r0(t){if(!t)return br;t=t._reactInternals;e:{if(mi(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(bt(n))return ny(t,n,e)}return e}function i0(t,e,n,r,i,o,s,a,l){return t=Df(n,r,!0,t,i,o,s,a,l),t.context=r0(null),n=t.current,r=_t(),i=mr(n),o=Ln(r,i),o.callback=e!=null?e:null,fr(n,o,i),t.current.lanes=i,Ws(t,i,r),It(t,r),t}function vu(t,e,n,r){var i=e.current,o=_t(),s=mr(i);return n=r0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ln(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=fr(i,e,s),t!==null&&(ln(t,i,s,o),Ga(t,i,s)),s}function Tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lf(t,e){gg(t,e),(t=t.alternate)&&gg(t,e)}function UC(){return null}var o0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mf(t){this._internalRoot=t}_u.prototype.render=Mf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));vu(t,e,null,null)};_u.prototype.unmount=Mf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ri(function(){vu(null,t,null,null)}),e[Fn]=null}};function _u(t){this._internalRoot=t}_u.prototype.unstable_scheduleHydration=function(t){if(t){var e=L_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jn.length&&e!==0&&e<Jn[n].priority;n++);Jn.splice(n,0,t),n===0&&F_(t)}};function Ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vg(){}function zC(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Tl(s);o.call(u)}}var s=i0(e,r,t,0,null,!1,!1,"",vg);return t._reactRootContainer=s,t[Fn]=s.current,Es(t.nodeType===8?t.parentNode:t),ri(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Tl(l);a.call(u)}}var l=Df(t,0,!1,null,null,!1,!1,"",vg);return t._reactRootContainer=l,t[Fn]=l.current,Es(t.nodeType===8?t.parentNode:t),ri(function(){vu(e,l,n,r)}),l}function wu(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Tl(s);a.call(l)}}vu(e,s,t,i)}else s=zC(n,e,t,i,r);return Tl(s)}A_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vo(e.pendingLanes);n!==0&&(tf(e,n|1),It(e,Be()),(ge&6)===0&&(to=Be()+500,Dr()))}break;case 13:ri(function(){var r=$n(t,1);if(r!==null){var i=_t();ln(r,t,1,i)}}),Lf(t,1)}};nf=function(t){if(t.tag===13){var e=$n(t,134217728);if(e!==null){var n=_t();ln(e,t,134217728,n)}Lf(t,134217728)}};D_=function(t){if(t.tag===13){var e=mr(t),n=$n(t,e);if(n!==null){var r=_t();ln(n,t,e,r)}Lf(t,e)}};L_=function(){return ye};M_=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};bd=function(t,e,n){switch(e){case"input":if(yd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=cu(r);if(!i)throw Error(L(90));f_(r),yd(r,i)}}}break;case"textarea":m_(t,n);break;case"select":e=n.value,e!=null&&ji(t,!!n.multiple,e,!1)}};S_=Nf;C_=ri;var HC={usingClientEntryPoint:!1,Events:[Gs,Ni,cu,w_,E_,Nf]},$o={findFiberByHostInstance:Wr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},BC={bundleType:$o.bundleType,version:$o.version,rendererPackageName:$o.rendererPackageName,rendererConfig:$o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=b_(t),t===null?null:t.stateNode},findFiberByHostInstance:$o.findFiberByHostInstance||UC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Aa.isDisabled&&Aa.supportsFiber)try{su=Aa.inject(BC),yn=Aa}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HC;Lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ff(e))throw Error(L(200));return jC(t,e,null,n)};Lt.createRoot=function(t,e){if(!Ff(t))throw Error(L(299));var n=!1,r="",i=o0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Df(t,1,!1,null,null,n,!1,r,i),t[Fn]=e.current,Es(t.nodeType===8?t.parentNode:t),new Mf(e)};Lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=b_(e),t=t===null?null:t.stateNode,t};Lt.flushSync=function(t){return ri(t)};Lt.hydrate=function(t,e,n){if(!yu(e))throw Error(L(200));return wu(null,t,e,!0,n)};Lt.hydrateRoot=function(t,e,n){if(!Ff(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=o0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=i0(e,null,t,1,n!=null?n:null,i,!1,o,s),t[Fn]=e.current,Es(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new _u(e)};Lt.render=function(t,e,n){if(!yu(e))throw Error(L(200));return wu(null,t,e,!1,n)};Lt.unmountComponentAtNode=function(t){if(!yu(t))throw Error(L(40));return t._reactRootContainer?(ri(function(){wu(null,null,t,!1,function(){t._reactRootContainer=null,t[Fn]=null})}),!0):!1};Lt.unstable_batchedUpdates=Nf;Lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yu(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return wu(t,e,n,!1,r)};Lt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Lt})(i_);var _g=i_.exports;hd.createRoot=_g.createRoot,hd.hydrateRoot=_g.hydrateRoot;/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rl(){return Rl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Rl.apply(this,arguments)}var sr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(sr||(sr={}));const yg="popstate";function WC(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return oh("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:sh(i)}return GC(e,n,null,t)}function VC(){return Math.random().toString(36).substr(2,8)}function wg(t){return{usr:t.state,key:t.key}}function oh(t,e,n,r){return n===void 0&&(n=null),Rl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?_o(e):e,{state:n,key:e&&e.key||r||VC()})}function sh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function _o(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function GC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=sr.Pop,l=null;function u(){a=sr.Pop,l&&l({action:a,location:h.location})}function c(f,m){a=sr.Push;let _=oh(h.location,f,m);n&&n(_,f);let E=wg(_),g=h.createHref(_);try{s.pushState(E,"",g)}catch{i.location.assign(g)}o&&l&&l({action:a,location:_})}function d(f,m){a=sr.Replace;let _=oh(h.location,f,m);n&&n(_,f);let E=wg(_),g=h.createHref(_);s.replaceState(E,"",g),o&&l&&l({action:a,location:_})}let h={get action(){return a},get location(){return t(i,s)},listen(f){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(yg,u),l=f,()=>{i.removeEventListener(yg,u),l=null}},createHref(f){return e(i,f)},push:c,replace:d,go(f){return s.go(f)}};return h}var Eg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Eg||(Eg={}));function QC(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?_o(e):e,i=a0(r.pathname||"/",n);if(i==null)return null;let o=s0(t);KC(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=rx(o[a],i);return s}function s0(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,o)=>{let s={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(Ve(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let a=vr([r,s.relativePath]),l=n.concat(s);i.children&&i.children.length>0&&(Ve(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),s0(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:tx(a,i.index),routesMeta:l})}),e}function KC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:nx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const YC=/^:\w+$/,qC=3,XC=2,JC=1,ZC=10,ex=-2,Sg=t=>t==="*";function tx(t,e){let n=t.split("/"),r=n.length;return n.some(Sg)&&(r+=ex),e&&(r+=XC),n.filter(i=>!Sg(i)).reduce((i,o)=>i+(YC.test(o)?qC:o===""?JC:ZC),r)}function nx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function rx(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=$f({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;o.push({params:r,pathname:vr([i,c.pathname]),pathnameBase:lx(vr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=vr([i,c.pathnameBase]))}return o}function $f(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ix(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";s=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=ox(a[d]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:t}}function ix(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),l0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(s,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ox(t,e){try{return decodeURIComponent(t)}catch(n){return l0(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function a0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function l0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function sx(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?_o(t):t;return{pathname:n?n.startsWith("/")?n:ax(n,e):e,search:ux(r),hash:cx(i)}}function ax(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Vc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function u0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=_o(t):(i=Rl({},t),Ve(!i.pathname||!i.pathname.includes("?"),Vc("?","pathname","search",i)),Ve(!i.pathname||!i.pathname.includes("#"),Vc("#","pathname","hash",i)),Ve(!i.search||!i.search.includes("#"),Vc("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let d=e.length-1;if(s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=sx(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const vr=t=>t.join("/").replace(/\/\/+/g,"/"),lx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ux=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,cx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class dx{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function hx(t){return t instanceof dx}var Eu={exports:{}},Su={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fx=S.exports,px=Symbol.for("react.element"),mx=Symbol.for("react.fragment"),gx=Object.prototype.hasOwnProperty,vx=fx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_x={key:!0,ref:!0,__self:!0,__source:!0};function c0(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)gx.call(e,r)&&!_x.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:px,type:t,key:o,ref:s,props:i,_owner:vx.current}}Su.Fragment=mx;Su.jsx=c0;Su.jsxs=c0;(function(t){t.exports=Su})(Eu);const Bn=Eu.exports.Fragment,k=Eu.exports.jsx,ee=Eu.exports.jsxs;/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ah(){return ah=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ah.apply(this,arguments)}function yx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const wx=typeof Object.is=="function"?Object.is:yx,{useState:Ex,useEffect:Sx,useLayoutEffect:Cx,useDebugValue:xx}=dd;function kx(t,e,n){const r=e(),[{inst:i},o]=Ex({inst:{value:r,getSnapshot:e}});return Cx(()=>{i.value=r,i.getSnapshot=e,Gc(i)&&o({inst:i})},[t,r,e]),Sx(()=>(Gc(i)&&o({inst:i}),t(()=>{Gc(i)&&o({inst:i})})),[t]),xx(r),r}function Gc(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!wx(n,r)}catch{return!0}}function bx(t,e,n){return e()}const Ix=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Tx=!Ix,Rx=Tx?bx:kx;"useSyncExternalStore"in dd&&(t=>t.useSyncExternalStore)(dd);const Nx=S.exports.createContext(null),Px=S.exports.createContext(null),Cu=S.exports.createContext(null),jf=S.exports.createContext(null),xu=S.exports.createContext(null),Ks=S.exports.createContext({outlet:null,matches:[]}),d0=S.exports.createContext(null);function Ox(t,e){let{relative:n}=e===void 0?{}:e;gi()||Ve(!1);let{basename:r,navigator:i}=S.exports.useContext(jf),{hash:o,pathname:s,search:a}=Nl(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:vr([r,s])),i.createHref({pathname:l,search:a,hash:o})}function gi(){return S.exports.useContext(xu)!=null}function yo(){return gi()||Ve(!1),S.exports.useContext(xu).location}function Ax(t){gi()||Ve(!1);let{pathname:e}=yo();return S.exports.useMemo(()=>$f(t,e),[e,t])}function h0(t){return t.filter((e,n)=>n===0||!e.route.index&&e.pathnameBase!==t[n-1].pathnameBase)}function ku(){gi()||Ve(!1);let{basename:t,navigator:e}=S.exports.useContext(jf),{matches:n}=S.exports.useContext(Ks),{pathname:r}=yo(),i=JSON.stringify(h0(n).map(a=>a.pathnameBase)),o=S.exports.useRef(!1);return S.exports.useEffect(()=>{o.current=!0}),S.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){e.go(a);return}let u=u0(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:vr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function Nl(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.exports.useContext(Ks),{pathname:i}=yo(),o=JSON.stringify(h0(r).map(s=>s.pathnameBase));return S.exports.useMemo(()=>u0(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function Dx(t,e){gi()||Ve(!1);let n=S.exports.useContext(Cu),{matches:r}=S.exports.useContext(Ks),i=r[r.length-1],o=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let a=yo(),l;if(e){var u;let m=typeof e=="string"?_o(e):e;s==="/"||((u=m.pathname)==null?void 0:u.startsWith(s))||Ve(!1),l=m}else l=a;let c=l.pathname||"/",d=s==="/"?c:c.slice(s.length)||"/",h=QC(t,{pathname:d}),f=$x(h&&h.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:vr([s,m.pathname]),pathnameBase:m.pathnameBase==="/"?s:vr([s,m.pathnameBase])})),r,n||void 0);return e?k(xu.Provider,{value:{location:ah({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:sr.Pop},children:f}):f}function Lx(){let t=Ux(),e=hx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r};return ee(Bn,{children:[k("h2",{children:"Unhandled Thrown Error!"}),k("h3",{style:{fontStyle:"italic"},children:e}),n?k("pre",{style:i,children:n}):null,k("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),ee("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",k("code",{style:o,children:"errorElement"})," props on\xA0",k("code",{style:o,children:"<Route>"})]})]})}class Mx extends S.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?k(d0.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function Fx(t){let{routeContext:e,match:n,children:r}=t,i=S.exports.useContext(Nx);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),k(Ks.Provider,{value:e,children:r})}function $x(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||Ve(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=n?s.route.errorElement||k(Lx,{}):null,c=()=>k(Fx,{match:s,routeContext:{outlet:o,matches:e.concat(r.slice(0,a+1))},children:l?u:s.route.element!==void 0?s.route.element:o});return n&&(s.route.errorElement||a===0)?k(Mx,{location:n.location,component:u,error:l,children:c()}):c()},null)}var Cg;(function(t){t.UseRevalidator="useRevalidator"})(Cg||(Cg={}));var lh;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(lh||(lh={}));function jx(t){let e=S.exports.useContext(Cu);return e||Ve(!1),e}function Ux(){var t;let e=S.exports.useContext(d0),n=jx(lh.UseRouteError),r=S.exports.useContext(Ks),i=r.matches[r.matches.length-1];return e||(r||Ve(!1),i.route.id||Ve(!1),(t=n.errors)==null?void 0:t[i.route.id])}function Uf(t){let{to:e,replace:n,state:r,relative:i}=t;gi()||Ve(!1);let o=S.exports.useContext(Cu),s=ku();return S.exports.useEffect(()=>{o&&o.navigation.state!=="idle"||s(e,{replace:n,state:r,relative:i})}),null}function qr(t){Ve(!1)}function zx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=sr.Pop,navigator:o,static:s=!1}=t;gi()&&Ve(!1);let a=e.replace(/^\/*/,"/"),l=S.exports.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=_o(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:f="default"}=r,m=S.exports.useMemo(()=>{let _=a0(u,a);return _==null?null:{pathname:_,search:c,hash:d,state:h,key:f}},[a,u,c,d,h,f]);return m==null?null:k(jf.Provider,{value:l,children:k(xu.Provider,{children:n,value:{location:m,navigationType:i}})})}function f0(t){let{children:e,location:n}=t,r=S.exports.useContext(Px),i=r&&!e?r.router.routes:uh(e);return Dx(i,n)}var xg;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(xg||(xg={}));new Promise(()=>{});function uh(t,e){e===void 0&&(e=[]);let n=[];return S.exports.Children.forEach(t,(r,i)=>{if(!S.exports.isValidElement(r))return;if(r.type===S.exports.Fragment){n.push.apply(n,uh(r.props.children,e));return}r.type!==qr&&Ve(!1),!r.props.index||!r.props.children||Ve(!1);let o=[...e,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=uh(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function p0(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Hx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Bx(t,e){return t.button===0&&(!e||e==="_self")&&!Hx(t)}const Wx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Vx=["aria-current","caseSensitive","className","end","style","to","children"];function Gx(t){let{basename:e,children:n,window:r}=t,i=S.exports.useRef();i.current==null&&(i.current=WC({window:r,v5Compat:!0}));let o=i.current,[s,a]=S.exports.useState({action:o.action,location:o.location});return S.exports.useLayoutEffect(()=>o.listen(a),[o]),k(zx,{basename:e,children:n,location:s.location,navigationType:s.action,navigator:o})}const bu=S.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c}=e,d=p0(e,Wx),h=Ox(u,{relative:i}),f=Qx(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i});function m(_){r&&r(_),_.defaultPrevented||f(_)}return k("a",{...d,href:h,onClick:o?r:m,ref:n,target:l})}),Pl=S.exports.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,children:u}=e,c=p0(e,Vx),d=Nl(l),h=Ax({path:d.pathname,end:s,caseSensitive:i}),f=S.exports.useContext(Cu),m=f==null?void 0:f.navigation.location,_=Nl(m||""),g=S.exports.useMemo(()=>m?$f({path:d.pathname,end:s,caseSensitive:i},_.pathname):null,[m,d.pathname,i,s,_.pathname])!=null,p=h!=null,v=p?r:void 0,w;typeof o=="function"?w=o({isActive:p,isPending:g}):w=[o,p?"active":null,g?"pending":null].filter(Boolean).join(" ");let I=typeof a=="function"?a({isActive:p,isPending:g}):a;return k(bu,{...c,"aria-current":v,className:w,ref:n,style:I,to:l,children:typeof u=="function"?u({isActive:p,isPending:g}):u})});var kg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(kg||(kg={}));var bg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(bg||(bg={}));function Qx(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=e===void 0?{}:e,a=ku(),l=yo(),u=Nl(t,{relative:s});return S.exports.useCallback(c=>{if(Bx(c,n)){c.preventDefault();let d=r!==void 0?r:sh(l)===sh(u);a(t,{replace:d,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,t,o,s])}const vi=S.exports.createContext(),is={login:"[Auth] Login",logout:"[Auth] Logout"},Kx=(t={},e)=>{switch(e.type){case is.login:return{...t,logged:!0,user:e.payload};case is.logout:return{logged:!1};default:return t}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F=function(t,e){if(!t)throw wo(e)},wo=function(t){return new Error("Firebase Database ("+m0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Yx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},zf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=o>>2,d=(o&3)<<4|a>>4;let h=(a&15)<<2|u>>6,f=u&63;l||(f=64,s||(h=64)),r.push(n[c],n[d],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(g0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Yx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||d==null)throw Error();const h=o<<2|a>>4;if(r.push(h),u!==64){const f=a<<4&240|u>>2;if(r.push(f),d!==64){const m=u<<6&192|d;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},v0=function(t){const e=g0(t);return zf.encodeByteArray(e,!0)},Ol=function(t){return v0(t).replace(/\./g,"")},Al=function(t){try{return zf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qx(t){return _0(void 0,t)}function _0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Xx(n)||(t[n]=_0(t[n],e[n]));return t}function Xx(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function Jx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function y0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zx(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function w0(){return m0.NODE_ADMIN===!0}function ek(){return typeof indexedDB=="object"}function tk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function nk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=()=>nk().__FIREBASE_DEFAULTS__,ik=()=>{if(typeof process>"u")return;const t=process.env.__FIREBASE_DEFAULTS__,e=process.env.__FIREBASE_DEFAULTS_PATH__;if(t)return e&&console.warn("Values were provided for both __FIREBASE_DEFAULTS__ and __FIREBASE_DEFAULTS_PATH__. __FIREBASE_DEFAULTS_PATH__ will be ignored."),JSON.parse(t);if(e&&typeof require<"u")try{return require(e)}catch{console.warn(`Unable to read defaults from file provided to __FIREBASE_DEFAULTS_PATH__: ${e}`)}},ok=()=>{if(typeof document>"u")return;const t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/),e=t&&Al(t[1]);return e&&JSON.parse(e)},Bf=()=>rk()||ik()||ok(),E0=t=>{var e,n;return(n=(e=Bf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sk=()=>{var t;return(t=Bf())===null||t===void 0?void 0:t.config},S0=t=>{var e;return(e=Bf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ol(JSON.stringify(n)),Ol(JSON.stringify(s)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk="FirebaseError";class Lr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lk,Object.setPrototypeOf(this,Lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ys.prototype.create)}}class Ys{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?uk(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Lr(i,a,r)}}function uk(t,e){return t.replace(ck,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ck=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t){return JSON.parse(t)}function Ke(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=function(t){let e={},n={},r={},i="";try{const o=t.split(".");e=Ns(Al(o[0])||""),n=Ns(Al(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},dk=function(t){const e=C0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},hk=function(t){const e=C0(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ii(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Dl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ll(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ml(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Ig(o)&&Ig(s)){if(!Ml(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ig(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Ko(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],o=this.chain_[1],s=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^o&(s^a),c=1518500249):(u=o^s^a,c=1859775393):d<60?(u=o&s|a&(o|s),c=2400959708):(u=o^s^a,c=3395469782);const h=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=s,s=(o<<30|o>>>2)&4294967295,o=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const o=this.buf_;let s=this.inbuf_;for(;i<n;){if(s===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(o[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}else for(;i<n;)if(o[s]=e[i],++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}this.inbuf_=s,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let o=24;o>=0;o-=8)e[r]=this.chain_[i]>>o&255,++r;return e}}function pk(t,e){const n=new mk(t,e);return n.subscribe.bind(n)}class mk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qc),i.error===void 0&&(i.error=Qc),i.complete===void 0&&(i.complete=Qc);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qc(){}function oi(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const o=i-55296;r++,F(r<t.length,"Surrogate pair missing trail surrogate.");const s=t.charCodeAt(r)-56320;i=65536+(o<<10)+s}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Iu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t){return t&&t._delegate?t._delegate:t}class si{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Nt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wk(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yk(t){return t===zr?void 0:t}function wk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _k(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ce||(Ce={}));const Sk={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},Ck=Ce.INFO,xk={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},kk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=xk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wf{constructor(e){this.name=e,this._logLevel=Ck,this._logHandler=kk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const bk=(t,e)=>e.some(n=>t instanceof n);let Tg,Rg;function Ik(){return Tg||(Tg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tk(){return Rg||(Rg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const x0=new WeakMap,ch=new WeakMap,k0=new WeakMap,Kc=new WeakMap,Vf=new WeakMap;function Rk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(_r(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&x0.set(n,t)}).catch(()=>{}),Vf.set(e,t),e}function Nk(t){if(ch.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});ch.set(t,e)}let dh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ch.get(t);if(e==="objectStoreNames")return t.objectStoreNames||k0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Pk(t){dh=t(dh)}function Ok(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Yc(this),e,...n);return k0.set(r,e.sort?e.sort():[e]),_r(r)}:Tk().includes(t)?function(...e){return t.apply(Yc(this),e),_r(x0.get(this))}:function(...e){return _r(t.apply(Yc(this),e))}}function Ak(t){return typeof t=="function"?Ok(t):(t instanceof IDBTransaction&&Nk(t),bk(t,Ik())?new Proxy(t,dh):t)}function _r(t){if(t instanceof IDBRequest)return Rk(t);if(Kc.has(t))return Kc.get(t);const e=Ak(t);return e!==t&&(Kc.set(t,e),Vf.set(e,t)),e}const Yc=t=>Vf.get(t);function Dk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=_r(s);return r&&s.addEventListener("upgradeneeded",l=>{r(_r(s.result),l.oldVersion,l.newVersion,_r(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Lk=["get","getKey","getAll","getAllKeys","count"],Mk=["put","add","delete","clear"],qc=new Map;function Ng(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qc.get(e))return qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Mk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Lk.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return qc.set(e,o),o}Pk(t=>({...t,get:(e,n,r)=>Ng(e,n)||t.get(e,n,r),has:(e,n)=>!!Ng(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($k(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $k(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hh="@firebase/app",Pg="0.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new Wf("@firebase/app"),jk="@firebase/app-compat",Uk="@firebase/analytics-compat",zk="@firebase/analytics",Hk="@firebase/app-check-compat",Bk="@firebase/app-check",Wk="@firebase/auth",Vk="@firebase/auth-compat",Gk="@firebase/database",Qk="@firebase/database-compat",Kk="@firebase/functions",Yk="@firebase/functions-compat",qk="@firebase/installations",Xk="@firebase/installations-compat",Jk="@firebase/messaging",Zk="@firebase/messaging-compat",eb="@firebase/performance",tb="@firebase/performance-compat",nb="@firebase/remote-config",rb="@firebase/remote-config-compat",ib="@firebase/storage",ob="@firebase/storage-compat",sb="@firebase/firestore",ab="@firebase/firestore-compat",lb="firebase",ub="9.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="[DEFAULT]",cb={[hh]:"fire-core",[jk]:"fire-core-compat",[zk]:"fire-analytics",[Uk]:"fire-analytics-compat",[Bk]:"fire-app-check",[Hk]:"fire-app-check-compat",[Wk]:"fire-auth",[Vk]:"fire-auth-compat",[Gk]:"fire-rtdb",[Qk]:"fire-rtdb-compat",[Kk]:"fire-fn",[Yk]:"fire-fn-compat",[qk]:"fire-iid",[Xk]:"fire-iid-compat",[Jk]:"fire-fcm",[Zk]:"fire-fcm-compat",[eb]:"fire-perf",[tb]:"fire-perf-compat",[nb]:"fire-rc",[rb]:"fire-rc-compat",[ib]:"fire-gcs",[ob]:"fire-gcs-compat",[sb]:"fire-fst",[ab]:"fire-fst-compat","fire-js":"fire-js",[lb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=new Map,ph=new Map;function db(t,e){try{t.container.addComponent(e)}catch(n){ai.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function no(t){const e=t.name;if(ph.has(e))return ai.debug(`There were multiple attempts to register component ${e}.`),!1;ph.set(e,t);for(const n of Fl.values())db(n,t);return!0}function Gf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yr=new Ys("app","Firebase",hb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=ub;function b0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw yr.create("bad-app-name",{appName:String(i)});if(n||(n=sk()),!n)throw yr.create("no-options");const o=Fl.get(i);if(o){if(Ml(n,o.options)&&Ml(r,o.config))return o;throw yr.create("duplicate-app",{appName:i})}const s=new Ek(i);for(const l of ph.values())s.addComponent(l);const a=new fb(n,r,s);return Fl.set(i,a),a}function I0(t=fh){const e=Fl.get(t);if(!e&&t===fh)return b0();if(!e)throw yr.create("no-app",{appName:t});return e}function wr(t,e,n){var r;let i=(r=cb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ai.warn(a.join(" "));return}no(new si(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb="firebase-heartbeat-database",mb=1,Ps="firebase-heartbeat-store";let Xc=null;function T0(){return Xc||(Xc=Dk(pb,mb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ps)}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),Xc}async function gb(t){var e;try{return(await T0()).transaction(Ps).objectStore(Ps).get(R0(t))}catch(n){if(n instanceof Lr)ai.warn(n.message);else{const r=yr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});ai.warn(r.message)}}}async function Og(t,e){var n;try{const i=(await T0()).transaction(Ps,"readwrite");return await i.objectStore(Ps).put(e,R0(t)),i.done}catch(r){if(r instanceof Lr)ai.warn(r.message);else{const i=yr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});ai.warn(i.message)}}}function R0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=1024,_b=30*24*60*60*1e3;class yb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Eb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ag();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=_b}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ag(),{heartbeatsToSend:n,unsentEntries:r}=wb(this._heartbeatsCache.heartbeats),i=Ol(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ag(){return new Date().toISOString().substring(0,10)}function wb(t,e=vb){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Dg(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Eb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ek()?tk().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Og(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Og(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dg(t){return Ol(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(t){no(new si("platform-logger",e=>new Fk(e),"PRIVATE")),no(new si("heartbeat",e=>new yb(e),"PRIVATE")),wr(hh,Pg,t),wr(hh,Pg,"esm2017"),wr("fire-js","")}Sb("");function Qf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function N0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cb=N0,P0=new Ys("auth","Firebase",N0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=new Wf("@firebase/auth");function Za(t,...e){Lg.logLevel<=Ce.ERROR&&Lg.error(`Auth (${qs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,...e){throw Kf(t,...e)}function En(t,...e){return Kf(t,...e)}function xb(t,e,n){const r=Object.assign(Object.assign({},Cb()),{[e]:n});return new Ys("auth","Firebase",r).create(e,{appName:t.name})}function Kf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return P0.create(t,...e)}function re(t,e,...n){if(!t)throw Kf(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Za(e),new Error(e)}function Un(t,e){t||On(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=new Map;function An(t){Un(t instanceof Function,"Expected a class definition");let e=Mg.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mg.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t,e){const n=Gf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Ml(o,e!=null?e:{}))return i;dn(i,"already-initialized")}return n.initialize({options:e})}function bb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ib(){return Fg()==="http:"||Fg()==="https:"}function Fg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ib()||Jx()||"connection"in navigator)?navigator.onLine:!0}function Rb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=Hf()||y0()}get(){return Tb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=new Xs(3e4,6e4);function Js(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zs(t,e,n,r,i={}){return A0(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Eo(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),O0.fetch()(D0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function A0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Nb),e);try{const i=new Ob(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Da(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Da(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Da(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw Da(t,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xb(t,c,u);dn(t,c)}}catch(i){if(i instanceof Lr)throw i;dn(t,"network-request-failed")}}async function ea(t,e,n,r,i={}){const o=await Zs(t,e,n,r,i);return"mfaPendingCredential"in o&&dn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function D0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Yf(t.config,i):`${t.config.apiScheme}://${i}`}class Ob{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(En(this.auth,"network-request-failed")),Pb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Da(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=En(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ab(t,e){return Zs(t,"POST","/v1/accounts:delete",e)}async function Db(t,e){return Zs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Lb(t,e=!1){const n=He(t),r=await n.getIdToken(e),i=qf(r);re(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:os(Jc(i.auth_time)),issuedAtTime:os(Jc(i.iat)),expirationTime:os(Jc(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Jc(t){return Number(t)*1e3}function qf(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Za("JWT malformed, contained fewer than 3 sections"),null;try{const o=Al(r);return o?JSON.parse(o):(Za("Failed to decode base64 JWT payload"),null)}catch(o){return Za("Caught error parsing JWT payload as JSON",(e=o)===null||e===void 0?void 0:e.toString()),null}}function Mb(t){const e=qf(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Os(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Lr&&Fb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Fb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=os(this.lastLoginAt),this.creationTime=os(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $l(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Os(t,Db(n,{idToken:r}));re(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?zb(o.providerUserInfo):[],a=Ub(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new L0(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function jb(t){const e=He(t);await $l(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ub(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function zb(t){return t.map(e=>{var{providerId:n}=e,r=Qf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hb(t,e){const n=await A0(t,{},async()=>{const r=Eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=D0(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",O0.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return re(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await Hb(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new As;return r&&(re(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(re(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(re(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new As,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Qf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $b(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new L0(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Os(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Lb(this,e)}reload(){return jb(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Xr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $l(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Os(this,Ab(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,m=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:w,isAnonymous:I,providerData:b,stsTokenManager:x}=n;re(v&&x,e,"internal-error");const T=As.fromJSON(this.name,x);re(typeof v=="string",e,"internal-error"),Yn(d,e.name),Yn(h,e.name),re(typeof w=="boolean",e,"internal-error"),re(typeof I=="boolean",e,"internal-error"),Yn(f,e.name),Yn(m,e.name),Yn(_,e.name),Yn(E,e.name),Yn(g,e.name),Yn(p,e.name);const $=new Xr({uid:v,auth:e,email:h,emailVerified:w,displayName:d,isAnonymous:I,photoURL:m,phoneNumber:f,tenantId:_,stsTokenManager:T,createdAt:g,lastLoginAt:p});return b&&Array.isArray(b)&&($.providerData=b.map(D=>Object.assign({},D))),E&&($._redirectEventId=E),$}static async _fromIdTokenResponse(e,n,r=!1){const i=new As;i.updateFromServerResponse(n);const o=new Xr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $l(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}M0.type="NONE";const $g=M0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t,e,n){return`firebase:${t}:${e}:${n}`}class Vi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=el(this.userKey,i.apiKey,o),this.fullPersistenceKey=el("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vi(An($g),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||An($g);const s=el(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const d=Xr._fromJSON(e,c);u!==o&&(a=d),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Vi(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Vi(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(j0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(F0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(z0(e))return"Blackberry";if(H0(e))return"Webos";if(Xf(e))return"Safari";if((e.includes("chrome/")||$0(e))&&!e.includes("edge/"))return"Chrome";if(U0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function F0(t=pt()){return/firefox\//i.test(t)}function Xf(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $0(t=pt()){return/crios\//i.test(t)}function j0(t=pt()){return/iemobile/i.test(t)}function U0(t=pt()){return/android/i.test(t)}function z0(t=pt()){return/blackberry/i.test(t)}function H0(t=pt()){return/webos/i.test(t)}function Tu(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Bb(t=pt()){var e;return Tu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Wb(){return Zx()&&document.documentMode===10}function B0(t=pt()){return Tu(t)||U0(t)||H0(t)||z0(t)||/windows phone/i.test(t)||j0(t)}function Vb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t,e=[]){let n;switch(t){case"Browser":n=jg(pt());break;case"Worker":n=`${jg(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const o of r)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ug(this),this.idTokenSubscription=new Ug(this),this.beforeStateQueue=new Gb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=P0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Vi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l==null?void 0:l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await $l(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?He(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ys("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Vi.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return re(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=W0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ta(t){return He(t)}class Ug{constructor(e){this.auth=e,this.observer=null,this.addObserver=pk(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Kb(t,e,n){const r=ta(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=V0(e),{host:s,port:a}=Yb(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||qb()}function V0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Yb(t){const e=V0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:zg(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:zg(s)}}}function zg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function Xb(t,e){return Zs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jb(t,e){return ea(t,"POST","/v1/accounts:signInWithPassword",Js(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb(t,e){return ea(t,"POST","/v1/accounts:signInWithEmailLink",Js(t,e))}async function eI(t,e){return ea(t,"POST","/v1/accounts:signInWithEmailLink",Js(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends Jf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ds(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ds(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Jb(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Zb(e,{email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Xb(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return eI(e,{idToken:n,email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(t,e){return ea(t,"POST","/v1/accounts:signInWithIdp",Js(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="http://localhost";class li extends Jf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new li(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Qf(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new li(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Gi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gi(e,n)}buildRequest(){const e={requestUri:tI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Eo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rI(t){const e=Qo(Ko(t)).link,n=e?Qo(Ko(e)).deep_link_id:null,r=Qo(Ko(t)).deep_link_id;return(r?Qo(Ko(r)).link:null)||r||n||e||t}class Zf{constructor(e){var n,r,i,o,s,a;const l=Qo(Ko(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=nI((i=l.mode)!==null&&i!==void 0?i:null);re(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=rI(e);try{return new Zf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(){this.providerId=So.PROVIDER_ID}static credential(e,n){return Ds._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zf.parseLink(n);return re(r,"argument-error"),Ds._fromEmailAndCode(e,r.code,r.tenantId)}}So.PROVIDER_ID="password";So.EMAIL_PASSWORD_SIGN_IN_METHOD="password";So.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends G0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends na{constructor(){super("facebook.com")}static credential(e){return li._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends na{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return li._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.GOOGLE_SIGN_IN_METHOD="google.com";tr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends na{constructor(){super("github.com")}static credential(e){return li._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends na{constructor(){super("twitter.com")}static credential(e,n){return li._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(t,e){return ea(t,"POST","/v1/accounts:signUp",Js(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Xr._fromIdTokenResponse(e,r,i),s=Hg(r);return new ui({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Hg(r);return new ui({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Hg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends Lr{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,jl.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new jl(e,n,r,i)}}function Q0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?jl._fromErrorAndOperation(t,o,e,r):o})}async function oI(t,e,n=!1){const r=await Os(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ui._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(t,e,n=!1){var r;const{auth:i}=t,o="reauthenticate";try{const s=await Os(t,Q0(i,o,e,t),n);re(s.idToken,i,"internal-error");const a=qf(s.idToken);re(a,i,"internal-error");const{sub:l}=a;return re(t.uid===l,i,"user-mismatch"),ui._forOperation(t,o,s)}catch(s){throw((r=s)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&dn(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K0(t,e,n=!1){const r="signIn",i=await Q0(t,r,e),o=await ui._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function aI(t,e){return K0(ta(t),e)}async function lI(t,e,n){const r=ta(t),i=await iI(r,{returnSecureToken:!0,email:e,password:n}),o=await ui._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function uI(t,e,n){return aI(He(t),So.credential(e,n))}function cI(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function dI(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function hI(t){return He(t).signOut()}const Ul="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ul,"1"),this.storage.removeItem(Ul),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(){const t=pt();return Xf(t)||Tu(t)}const pI=1e3,mI=10;class q0 extends Y0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fI()&&Vb(),this.fallbackToPolling=B0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);Wb()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}q0.type="LOCAL";const gI=q0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0 extends Y0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}X0.type="SESSION";const J0=X0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ru(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await vI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ru.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=ep("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(h.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return window}function yI(t){Sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(){return typeof Sn().WorkerGlobalScope<"u"&&typeof Sn().importScripts=="function"}async function wI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function EI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function SI(){return Z0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="firebaseLocalStorageDb",CI=1,zl="firebaseLocalStorage",tw="fbase_key";class ra{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nu(t,e){return t.transaction([zl],e?"readwrite":"readonly").objectStore(zl)}function xI(){const t=indexedDB.deleteDatabase(ew);return new ra(t).toPromise()}function gh(){const t=indexedDB.open(ew,CI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zl,{keyPath:tw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zl)?e(r):(r.close(),await xI(),e(await gh()))})})}async function Bg(t,e,n){const r=Nu(t,!0).put({[tw]:e,value:n});return new ra(r).toPromise()}async function kI(t,e){const n=Nu(t,!1).get(e),r=await new ra(n).toPromise();return r===void 0?null:r.value}function Wg(t,e){const n=Nu(t,!0).delete(e);return new ra(n).toPromise()}const bI=800,II=3;class nw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>II)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Z0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ru._getInstance(SI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wI(),!this.activeServiceWorker)return;this.sender=new _I(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||EI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gh();return await Bg(e,Ul,"1"),await Wg(e,Ul),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Nu(i,!1).getAll();return new ra(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nw.type="LOCAL";const TI=nw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function NI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=En("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",RI().appendChild(r)})}function PI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Xs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(t,e){return e?An(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp extends Jf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AI(t){return K0(t.auth,new tp(t),t.bypassAuthState)}function DI(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),sI(n,new tp(t),t.bypassAuthState)}async function LI(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),oI(n,new tp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AI;case"linkViaPopup":case"linkViaRedirect":return LI;case"reauthViaPopup":case"reauthViaRedirect":return DI;default:dn(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=new Xs(2e3,1e4);class Fi extends rw{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Fi.currentPopupAction&&Fi.currentPopupAction.cancel(),Fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=ep();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,MI.get())};e()}}Fi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="pendingRedirect",tl=new Map;class $I extends rw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=tl.get(this.auth._key());if(!e){try{const r=await jI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}tl.set(this.auth._key(),e)}return this.bypassAuthState||tl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jI(t,e){const n=HI(e),r=zI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function UI(t,e){tl.set(t._key(),e)}function zI(t){return An(t._redirectPersistence)}function HI(t){return el(FI,t.config.apiKey,t.name)}async function BI(t,e,n=!1){const r=ta(t),i=OI(r,e),s=await new $I(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=10*60*1e3;class VI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!iw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(En(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vg(e))}saveEventToCache(e){this.cachedEventUids.add(Vg(e)),this.lastProcessedEventTime=Date.now()}}function Vg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QI(t,e={}){return Zs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YI=/^https?/;async function qI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QI(t);for(const n of e)try{if(XI(n))return}catch{}dn(t,"unauthorized-domain")}function XI(t){const e=mh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!YI.test(n))return!1;if(KI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=new Xs(3e4,6e4);function Gg(){const t=Sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZI(t){return new Promise((e,n)=>{var r,i,o;function s(){Gg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gg(),n(En(t,"network-request-failed"))},timeout:JI.get()})}if(!((i=(r=Sn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Sn().gapi)===null||o===void 0)&&o.load)s();else{const a=PI("iframefcb");return Sn()[a]=()=>{gapi.load?s():n(En(t,"network-request-failed"))},NI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw nl=null,e})}let nl=null;function eT(t){return nl=nl||ZI(t),nl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT=new Xs(5e3,15e3),nT="__/auth/iframe",rT="emulator/auth/iframe",iT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sT(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yf(e,rT):`https://${t.config.authDomain}/${nT}`,r={apiKey:e.apiKey,appName:t.name,v:qs},i=oT.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Eo(r).slice(1)}`}async function aT(t){const e=await eT(t),n=Sn().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:sT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iT,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=En(t,"network-request-failed"),a=Sn().setTimeout(()=>{o(s)},tT.get());function l(){Sn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uT=500,cT=600,dT="_blank",hT="http://localhost";class Qg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fT(t,e,n,r=uT,i=cT){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},lT),{width:r.toString(),height:i.toString(),top:o,left:s}),u=pt().toLowerCase();n&&(a=$0(u)?dT:n),F0(u)&&(e=e||hT,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[f,m])=>`${h}${f}=${m},`,"");if(Bb(u)&&a!=="_self")return pT(e||"",a),new Qg(null);const d=window.open(e||"",a,c);re(d,t,"popup-blocked");try{d.focus()}catch{}return new Qg(d)}function pT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT="__/auth/handler",gT="emulator/auth/handler";function Kg(t,e,n,r,i,o){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qs,eventId:i};if(e instanceof G0){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",Dl(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(e instanceof na){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${vT(t)}?${Eo(a).slice(1)}`}function vT({config:t}){return t.emulator?Yf(t,gT):`https://${t.authDomain}/${mT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="webStorageSupport";class _T{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=J0,this._completeRedirectFn=BI,this._overrideRedirectResult=UI}async _openPopup(e,n,r,i){var o;Un((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=Kg(e,n,r,mh(),i);return fT(e,s,ep())}async _openRedirect(e,n,r,i){return await this._originValidation(e),yI(Kg(e,n,r,mh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Un(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await aT(e),r=new VI(e);return n.register("authEvent",i=>(re(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zc,{type:Zc},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Zc];s!==void 0&&n(!!s),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return B0()||Xf()||Tu()}}const yT=_T;var Yg="@firebase/auth",qg="0.20.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ST(t){no(new si("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{re(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),re(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:W0(t)},c=new Qb(a,l,u);return bb(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),no(new si("auth-internal",e=>{const n=ta(e.getProvider("auth").getImmediate());return(r=>new wT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wr(Yg,qg,ET(t)),wr(Yg,qg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=5*60,xT=S0("authIdTokenMaxAge")||CT;let Xg=null;const kT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xT)return;const i=n==null?void 0:n.token;Xg!==i&&(Xg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function bT(t=I0()){const e=Gf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kb(t,{popupRedirectResolver:yT,persistence:[TI,gI,J0]}),r=S0("authTokenSyncURL");if(r){const o=kT(r);dI(n,o,()=>o(n.currentUser)),cI(n,s=>o(s))}const i=E0("auth");return i&&Kb(n,`http://${i}`),n}ST("Browser");var IT="firebase",TT="9.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wr(IT,TT,"app");const Jg="@firebase/database",Zg="0.13.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ow="";function sw(t){ow=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ns(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return hn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new RT(e)}}catch{}return new NT},Qr=aw("localStorage"),vh=aw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=new Wf("@firebase/database"),lw=function(){let t=1;return function(){return t++}}(),uw=function(t){const e=vk(t),n=new fk;n.update(e);const r=n.digest();return zf.encodeByteArray(r)},ia=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ia.apply(null,r):typeof r=="object"?e+=Ke(r):e+=r,e+=" "}return e};let Jr=null,ev=!0;const cw=function(t,e){F(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Qi.logLevel=Ce.VERBOSE,Jr=Qi.log.bind(Qi),e&&vh.set("logging_enabled",!0)):typeof t=="function"?Jr=t:(Jr=null,vh.remove("logging_enabled"))},et=function(...t){if(ev===!0&&(ev=!1,Jr===null&&vh.get("logging_enabled")===!0&&cw(!0)),Jr){const e=ia.apply(null,t);Jr(e)}},oa=function(t){return function(...e){et(t,...e)}},_h=function(...t){const e="FIREBASE INTERNAL ERROR: "+ia(...t);Qi.error(e)},xn=function(...t){const e=`FIREBASE FATAL ERROR: ${ia(...t)}`;throw Qi.error(e),new Error(e)},ht=function(...t){const e="FIREBASE WARNING: "+ia(...t);Qi.warn(e)},PT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ht("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Pu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},OT=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},zn="[MIN_NAME]",kn="[MAX_NAME]",_i=function(t,e){if(t===e)return 0;if(t===zn||e===kn)return-1;if(e===zn||t===kn)return 1;{const n=Hl(t),r=Hl(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},AT=function(t,e){return t===e?0:t<e?-1:1},jo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ke(e))},np=function(t){if(typeof t!="object"||t===null)return Ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ke(e[r]),n+=":",n+=np(t[e[r]]);return n+="}",n},dw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function nt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const hw=function(t){F(!Pu(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,o,s,a,l;t===0?(o=0,s=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),o=a+r,s=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(o=0,s=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);for(l=e;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(c.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},DT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},LT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function MT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const FT=new RegExp("^-?(0*)\\d{1,10}$"),fw=-2147483648,rp=2147483647,Hl=function(t){if(FT.test(t)){const e=Number(t);if(e>=fw&&e<=rp)return e}return null},Co=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ht("Exception was thrown by user callback.",n),e},Math.floor(0))}},$T=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ss=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ht(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ht(e)}}class Ki{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ki.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="5",pw="v",mw="s",gw="r",vw="f",_w=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,yw="ls",ww="p",yh="ac",Ew="websocket",Sw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,n,r,i,o=!1,s="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function zT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function xw(t,e,n){F(typeof e=="string","typeof type must == string"),F(typeof n=="object","typeof params must == object");let r;if(e===Ew)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Sw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);zT(t)&&(n.ns=t.namespace);const i=[];return nt(n,(o,s)=>{i.push(o+"="+s)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(){this.counters_={}}incrementCounter(e,n=1){hn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return qx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed={},td={};function op(t){const e=t.toString();return ed[e]||(ed[e]=new HT),ed[e]}function BT(t,e){const n=t.toString();return td[n]||(td[n]=e()),td[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Co(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv="start",VT="close",GT="pLPCommand",QT="pRTLPCB",kw="id",bw="pw",Iw="ser",KT="cb",YT="seg",qT="ts",XT="d",JT="dframe",Tw=1870,Rw=30,ZT=Tw-Rw,eR=25e3,tR=3e4;class ar{constructor(e,n,r,i,o,s,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.transportSessionId=s,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=oa(e),this.stats_=op(n),this.urlFn=l=>(this.appCheckToken&&(l[yh]=this.appCheckToken),xw(n,Sw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new WT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(tR)),OT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new sp((...o)=>{const[s,a,l,u,c]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,s===tv)this.id=a,this.password=l;else if(s===VT)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+s)},(...o)=>{const[s,a]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(s,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[tv]="t",r[Iw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[KT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[pw]=ip,this.transportSessionId&&(r[mw]=this.transportSessionId),this.lastSessionId&&(r[yw]=this.lastSessionId),this.applicationId&&(r[ww]=this.applicationId),this.appCheckToken&&(r[yh]=this.appCheckToken),typeof location<"u"&&location.hostname&&_w.test(location.hostname)&&(r[gw]=vw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ar.forceAllow_=!0}static forceDisallow(){ar.forceDisallow_=!0}static isAvailable(){return ar.forceAllow_?!0:!ar.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!DT()&&!LT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=v0(n),i=dw(r,ZT);for(let o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[JT]="t",r[kw]=e,r[bw]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class sp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lw(),window[GT+this.uniqueCallbackIdentifier]=e,window[QT+this.uniqueCallbackIdentifier]=n,this.myIFrame=sp.createIFrame_();let o="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;o='<script>document.domain="'+a+'";<\/script>'}const s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(a){et("frame writing exception"),a.stack&&et(a.stack),et(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||et("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kw]=this.myID,e[bw]=this.myPW,e[Iw]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Rw+r.length<=Tw;){const s=this.pendingSegs.shift();r=r+"&"+YT+i+"="+s.seg+"&"+qT+i+"="+s.ts+"&"+XT+i+"="+s.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(eR)),o=()=>{clearTimeout(i),r()};this.addTag(e,o)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{et("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=16384,rR=45e3;let Bl=null;typeof MozWebSocket<"u"?Bl=MozWebSocket:typeof WebSocket<"u"&&(Bl=WebSocket);class zt{constructor(e,n,r,i,o,s,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=oa(this.connId),this.stats_=op(n),this.connURL=zt.connectionURL_(n,s,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,o){const s={};return s[pw]=ip,typeof location<"u"&&location.hostname&&_w.test(location.hostname)&&(s[gw]=vw),n&&(s[mw]=n),r&&(s[yw]=r),i&&(s[yh]=i),o&&(s[ww]=o),xw(e,Ew,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qr.set("previous_websocket_failure",!0);try{let r;w0(),this.mySock=new Bl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Bl!==null&&!zt.forceDisallow_}static previouslyFailed(){return Qr.isInMemoryStorage||Qr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ns(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=dw(n,nR);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(rR))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}zt.responsesRequiredToBeHealthy=2;zt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ar,zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=zt&&zt.isAvailable();let r=n&&!zt.previouslyFailed();if(e.webSocketOnly&&(n||ht("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[zt];else{const i=this.transports_=[];for(const o of ro.ALL_TRANSPORTS)o&&o.isAvailable()&&i.push(o);ro.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ro.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=6e4,oR=5e3,sR=10*1024,aR=100*1024,nd="t",nv="d",lR="s",rv="r",uR="e",iv="o",ov="a",sv="n",av="p",cR="h";class dR{constructor(e,n,r,i,o,s,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=s,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=oa("c:"+this.id+":"),this.transportManager_=new ro(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ss(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>aR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>sR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(nd in e){const n=e[nd];n===ov?this.upgradeIfSecondaryHealthy_():n===rv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===iv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=jo("t",e),r=jo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:av,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ov,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:sv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=jo("t",e),r=jo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=jo(nd,e);if(nv in e){const r=e[nv];if(n===cR)this.onHandshake_(r);else if(n===sv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===lR?this.onConnectionShutdown_(r):n===rv?this.onReset_(r):n===uR?_h("Server Error: "+r):n===iv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):_h("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ip!==r&&ht("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ss(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(iR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ss(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(oR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:av,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let o=0;o<i.length;o++)if(i[o].callback===n&&(!r||r===i[o].context)){i.splice(o,1);return}}validateEventType_(e){F(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends Pw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Wl}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=32,uv=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ve(){return new _e("")}function le(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ir(t){return t.pieces_.length-t.pieceNum_}function xe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new _e(t.pieces_,e)}function ap(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function hR(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ls(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ow(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new _e(e,0)}function De(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof _e)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new _e(n,0)}function ue(t){return t.pieceNum_>=t.pieces_.length}function vt(t,e){const n=le(t),r=le(e);if(n===null)return e;if(n===r)return vt(xe(t),xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function fR(t,e){const n=Ls(t,0),r=Ls(e,0);for(let i=0;i<n.length&&i<r.length;i++){const o=_i(n[i],r[i]);if(o!==0)return o}return n.length===r.length?0:n.length<r.length?-1:1}function lp(t,e){if(Ir(t)!==Ir(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Bt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ir(t)>Ir(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class pR{constructor(e,n){this.errorPrefix_=n,this.parts_=Ls(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Iu(this.parts_[r]);Aw(this)}}function mR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Iu(e),Aw(t)}function gR(t){const e=t.parts_.pop();t.byteLength_-=Iu(e),t.parts_.length>0&&(t.byteLength_-=1)}function Aw(t){if(t.byteLength_>uv)throw new Error(t.errorPrefix_+"has a key path longer than "+uv+" bytes ("+t.byteLength_+").");if(t.parts_.length>lv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+lv+") or object contains a cycle "+Hr(t))}function Hr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up extends Pw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new up}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=1e3,vR=60*5*1e3,cv=30*1e3,_R=1.3,yR=3e4,wR="server_kill",dv=3;class Vt extends Nw{constructor(e,n,r,i,o,s,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=o,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Vt.nextPersistentConnectionId_++,this.log_=oa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Uo,this.maxReconnectDelay_=vR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!w0())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");up.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Wl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,o={r:i,a:e,b:n};this.log_(Ke(o)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Nt,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:s=>{const a=s.d;s.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),n.promise}listen(e,n,r,i){this.initConnection_();const o=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+o),this.listens.has(s)||this.listens.set(s,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(s).has(o),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(s).set(o,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const o={p:r},s="q";e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(s,o,a=>{const l=a.d,u=a.s;Vt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&hn(e,"w")){const r=ii(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',o=n._path.toString();ht(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||hk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=cv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=dk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const o=i.s,s=i.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,s))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const o={p:e},s="n";i&&(o.q=r,o.t=i),this.sendRequest(s,o)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const o={p:n,d:r};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,s=>{i&&setTimeout(()=>{i(s.s,s.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,o){this.initConnection_();const s={p:n,d:r};o!==void 0&&(s.h=o),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,o=>{this.log_(n+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(o.s,o.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const o=r.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):_h("Unrecognized action received from server: "+Ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Uo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Uo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>yR&&(this.reconnectDelay_=Uo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_R)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Vt.nextConnectionId_++,o=this.lastSessionId;let s=!1,a=null;const l=function(){a?a.close():(s=!0,r())},u=function(d){F(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?et("getToken() completed but was canceled"):(et("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new dR(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{ht(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(wR)},o))}catch(d){this.log_("Failed to get token: "+d),s||(this.repoInfo_.nodeAdmin&&ht(d),l())}}}interrupt(e){et("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){et("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Dl(this.interruptReasons_)&&(this.reconnectDelay_=Uo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(o=>np(o)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new _e(e).toString();let i;if(this.listens.has(r)){const o=this.listens.get(r);i=o.get(n),o.delete(n),o.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){et("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=dv&&(this.reconnectDelay_=cv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){et("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=dv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ow.replace(/\./g,"-")]=1,Hf()?e["framework.cordova"]=1:y0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Wl.getInstance().currentlyOnline();return Dl(this.interruptReasons_)&&e}}Vt.nextPersistentConnectionId_=0;Vt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new de(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new de(zn,e),i=new de(zn,n);return this.compare(r,i)!==0}minPost(){return de.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La;class Dw extends Ou{static get __EMPTY_NODE(){return La}static set __EMPTY_NODE(e){La=e}compare(e,n){return _i(e.name,n.name)}isDefinedOn(e){throw wo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return de.MIN}maxPost(){return new de(kn,La)}makePost(e,n){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new de(e,La)}toString(){return".key"}}const Cn=new Dw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n,r,i,o=null){this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=n?r(e.key,n):1,i&&(s*=-1),s<0)this.isReverse_?e=e.left:e=e.right;else if(s===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r!=null?r:Ze.RED,this.left=i!=null?i:xt.EMPTY_NODE,this.right=o!=null?o:xt.EMPTY_NODE}copy(e,n,r,i,o){return new Ze(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,o!=null?o:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return xt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return xt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ze.RED=!0;Ze.BLACK=!1;class ER{copy(e,n,r,i,o){return this}insert(e,n,r){return new Ze(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class xt{constructor(e,n=xt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new xt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ze.BLACK,null,null))}remove(e){return new xt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ze.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ma(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ma(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ma(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ma(this.root_,null,this.comparator_,!0,e)}}xt.EMPTY_NODE=new ER;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(t,e){return _i(t.name,e.name)}function cp(t,e){return _i(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wh;function CR(t){wh=t}const Lw=function(t){return typeof t=="number"?"number:"+hw(t):"string:"+t},Mw=function(t){if(t.isLeafNode()){const e=t.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&hn(e,".sv"),"Priority must be a string or number.")}else F(t===wh||t.isEmpty(),"priority of unexpected type.");F(t===wh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hv;class Xe{constructor(e,n=Xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Mw(this.priorityNode_)}static set __childrenNodeConstructor(e){hv=e}static get __childrenNodeConstructor(){return hv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:le(e)===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=le(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(F(r!==".priority"||Ir(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(xe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Lw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=hw(this.value_):e+=this.value_,this.lazyHash_=uw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Xe.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Xe.VALUE_TYPE_ORDER.indexOf(n),o=Xe.VALUE_TYPE_ORDER.indexOf(r);return F(i>=0,"Unknown leaf type: "+n),F(o>=0,"Unknown leaf type: "+r),i===o?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fw,$w;function xR(t){Fw=t}function kR(t){$w=t}class bR extends Ou{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),o=r.compareTo(i);return o===0?_i(e.name,n.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return de.MIN}maxPost(){return new de(kn,new Xe("[PRIORITY-POST]",$w))}makePost(e,n){const r=Fw(e);return new de(n,new Xe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Te=new bR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=Math.log(2);class TR{constructor(e){const n=o=>parseInt(Math.log(o)/IR,10),r=o=>parseInt(Array(o+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vl=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,h;if(c===0)return null;if(c===1)return d=t[l],h=n?n(d):d,new Ze(h,d.node,Ze.BLACK,null,null);{const f=parseInt(c/2,10)+l,m=i(l,f),_=i(f+1,u);return d=t[f],h=n?n(d):d,new Ze(h,d.node,Ze.BLACK,m,_)}},o=function(l){let u=null,c=null,d=t.length;const h=function(m,_){const E=d-m,g=d;d-=m;const p=i(E+1,g),v=t[E],w=n?n(v):v;f(new Ze(w,v.node,_,null,p))},f=function(m){u?(u.left=m,u=m):(c=m,u=m)};for(let m=0;m<l.count;++m){const _=l.nextBitIsOne(),E=Math.pow(2,l.count-(m+1));_?h(E,Ze.BLACK):(h(E,Ze.BLACK),h(E,Ze.RED))}return c},s=new TR(t.length),a=o(s);return new xt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rd;const xi={};class Dn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return F(xi&&Te,"ChildrenNode.ts has not been loaded"),rd=rd||new Dn({".priority":xi},{".priority":Te}),rd}get(e){const n=ii(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof xt?n:null}hasIndex(e){return hn(this.indexSet_,e.toString())}addIndex(e,n){F(e!==Cn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const o=n.getIterator(de.Wrap);let s=o.getNext();for(;s;)i=i||e.isDefinedOn(s.node),r.push(s),s=o.getNext();let a;i?a=Vl(r,e.getCompare()):a=xi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Dn(c,u)}addToIndexes(e,n){const r=Ll(this.indexes_,(i,o)=>{const s=ii(this.indexSet_,o);if(F(s,"Missing index implementation for "+o),i===xi)if(s.isDefinedOn(e.node)){const a=[],l=n.getIterator(de.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Vl(a,s.getCompare())}else return xi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new de(e.name,a))),l.insert(e,e.node)}});return new Dn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ll(this.indexes_,i=>{if(i===xi)return i;{const o=n.get(e.name);return o?i.remove(new de(e.name,o)):i}});return new Dn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo;class Z{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Mw(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return zo||(zo=new Z(new xt(cp),null,Dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zo}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?zo:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(F(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new de(e,n);let i,o;n.isEmpty()?(i=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),o=this.indexMap_.addToIndexes(r,this.children_));const s=i.isEmpty()?zo:this.priorityNode_;return new Z(i,s,o)}}updateChild(e,n){const r=le(e);if(r===null)return n;{F(le(e)!==".priority"||Ir(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(xe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,o=!0;if(this.forEachChild(Te,(s,a)=>{n[s]=a.val(e),r++,o&&Z.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):o=!1}),!e&&o&&i<2*r){const s=[];for(const a in n)s[a]=n[a];return s}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Lw(this.getPriority().val())+":"),this.forEachChild(Te,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":uw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const o=i.getPredecessorKey(new de(e,n));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new de(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new de(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,de.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,e)<0;)i.getNext(),o=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,de.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,e)>0;)i.getNext(),o=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===sa?-1:0}withIndex(e){if(e===Cn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Cn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Te),i=n.getIterator(Te);let o=r.getNext(),s=i.getNext();for(;o&&s;){if(o.name!==s.name||!o.node.equals(s.node))return!1;o=r.getNext(),s=i.getNext()}return o===null&&s===null}else return!1;else return!1}}resolveIndex_(e){return e===Cn?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class RR extends Z{constructor(){super(new xt(cp),Z.EMPTY_NODE,Dn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const sa=new RR;Object.defineProperties(de,{MIN:{value:new de(zn,Z.EMPTY_NODE)},MAX:{value:new de(kn,sa)}});Dw.__EMPTY_NODE=Z.EMPTY_NODE;Xe.__childrenNodeConstructor=Z;CR(sa);kR(sa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=!0;function Me(t,e=null){if(t===null)return Z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Xe(n,Me(e))}if(!(t instanceof Array)&&NR){const n=[];let r=!1;if(nt(t,(s,a)=>{if(s.substring(0,1)!=="."){const l=Me(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new de(s,l)))}}),n.length===0)return Z.EMPTY_NODE;const o=Vl(n,SR,s=>s.name,cp);if(r){const s=Vl(n,Te.getCompare());return new Z(o,Me(e),new Dn({".priority":s},{".priority":Te}))}else return new Z(o,Me(e),Dn.Default)}else{let n=Z.EMPTY_NODE;return nt(t,(r,i)=>{if(hn(t,r)&&r.substring(0,1)!=="."){const o=Me(i);(o.isLeafNode()||!o.isEmpty())&&(n=n.updateImmediateChild(r,o))}}),n.updatePriority(Me(e))}}xR(Me);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp extends Ou{constructor(e){super(),this.indexPath_=e,F(!ue(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),o=r.compareTo(i);return o===0?_i(e.name,n.name):o}makePost(e,n){const r=Me(e),i=Z.EMPTY_NODE.updateChild(this.indexPath_,r);return new de(n,i)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,sa);return new de(kn,e)}toString(){return Ls(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR extends Ou{compare(e,n){const r=e.node.compareTo(n.node);return r===0?_i(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return de.MIN}maxPost(){return de.MAX}makePost(e,n){const r=Me(e);return new de(n,r)}toString(){return".value"}}const hp=new PR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Eh="-",jw="z",Uw=786,OR=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const o=new Array(8);for(i=7;i>=0;i--)o[i]=io.charAt(n%64),n=Math.floor(n/64);F(n===0,"Cannot push at time == 0");let s=o.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)s+=io.charAt(e[i]);return F(s.length===20,"nextPushId: Length should be 20."),s}}(),fv=function(t){if(t===""+rp)return Eh;const e=Hl(t);if(e!=null)return""+(e+1);const n=new Array(t.length);for(let s=0;s<n.length;s++)n[s]=t.charAt(s);if(n.length<Uw)return n.push(Eh),n.join("");let r=n.length-1;for(;r>=0&&n[r]===jw;)r--;if(r===-1)return kn;const i=n[r],o=io.charAt(io.indexOf(i)+1);return n[r]=o,n.slice(0,r+1).join("")},pv=function(t){if(t===""+fw)return zn;const e=Hl(t);if(e!=null)return""+(e-1);const n=new Array(t.length);for(let r=0;r<n.length;r++)n[r]=t.charAt(r);return n[n.length-1]===Eh?n.length===1?""+rp:(delete n[n.length-1],n.join("")):(n[n.length-1]=io.charAt(io.indexOf(n[n.length-1])-1),n.join("")+jw.repeat(Uw-n.length))};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(t){return{type:"value",snapshotNode:t}}function oo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ms(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Fs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function AR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e){this.index_=e}updateChild(e,n,r,i,o,s){F(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(s!=null&&(r.isEmpty()?e.hasChild(n)?s.trackChildChange(Ms(n,a)):F(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(oo(n,r)):s.trackChildChange(Fs(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Te,(i,o)=>{n.hasChild(i)||r.trackChildChange(Ms(i,o))}),n.isLeafNode()||n.forEachChild(Te,(i,o)=>{if(e.hasChild(i)){const s=e.getImmediateChild(i);s.equals(o)||r.trackChildChange(Fs(i,o,s))}else r.trackChildChange(oo(i,o))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.indexedFilter_=new fp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$s.getStartPost_(e),this.endPost_=$s.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,o,s){return this.matches(new de(n,r))||(r=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,o,s)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Z.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Z.EMPTY_NODE);const o=this;return n.forEachChild(Te,(s,a)=>{o.matches(new de(s,a))||(i=i.updateImmediateChild(s,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e){this.rangedFilter_=new $s(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,o,s){return this.rangedFilter_.matches(new de(n,r))||(r=Z.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,o,s):this.fullLimitUpdateChild_(e,n,r,o,s)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=Z.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let s=0;for(;o.hasNext()&&s<this.limit_;){const a=o.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),s++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(Z.EMPTY_NODE);let o,s,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),o=this.rangedFilter_.getEndPost(),s=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();a=(h,f)=>d(f,h)}else l=i.getIterator(this.index_),o=this.rangedFilter_.getStartPost(),s=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,c=!1;for(;l.hasNext();){const d=l.getNext();!c&&a(o,d)<=0&&(c=!0),c&&u<this.limit_&&a(d,s)<=0?u++:i=i.updateImmediateChild(d.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,o){let s;if(this.reverse_){const d=this.index_.getCompare();s=(h,f)=>d(f,h)}else s=this.index_.getCompare();const a=e;F(a.numChildren()===this.limit_,"");const l=new de(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:s(h,l);if(c&&!r.isEmpty()&&f>=0)return o!=null&&o.trackChildChange(Fs(n,r,d)),a.updateImmediateChild(n,r);{o!=null&&o.trackChildChange(Ms(n,d));const _=a.updateImmediateChild(n,Z.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(o!=null&&o.trackChildChange(oo(h.name,h.node)),_.updateImmediateChild(h.name,h.node)):_}}else return r.isEmpty()?e:c&&s(u,l)>=0?(o!=null&&(o.trackChildChange(Ms(u.name,u.node)),o.trackChildChange(oo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,Z.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Te}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zn}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:kn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Te}copy(){const e=new Au;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function LR(t){return t.loadsAllData()?new fp(t.getIndex()):t.hasLimit()?new DR(t):new $s(t)}function MR(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function FR(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Sh(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function $R(t,e,n){let r;if(t.index_===Cn)typeof e=="string"&&(e=fv(e)),r=Sh(t,e,n);else{let i;n==null?i=kn:i=fv(n),r=Sh(t,e,i)}return r.startAfterSet_=!0,r}function Ch(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function jR(t,e,n){let r,i;return t.index_===Cn?(typeof e=="string"&&(e=pv(e)),i=Ch(t,e,n)):(n==null?r=zn:r=pv(n),i=Ch(t,e,r)),i.endBeforeSet_=!0,i}function Du(t,e){const n=t.copy();return n.index_=e,n}function mv(t){const e={};if(t.isDefault())return e;let n;return t.index_===Te?n="$priority":t.index_===hp?n="$value":t.index_===Cn?n="$key":(F(t.index_ instanceof dp,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ke(n),t.startSet_&&(e.startAt=Ke(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Ke(t.indexStartName_))),t.endSet_&&(e.endAt=Ke(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Ke(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function gv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Te&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends Nw{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=oa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const s=Gl.getListenId_(e,r),a={};this.listens_[s]=a;const l=mv(e._queryParams);this.restRequest_(o+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(o,d,!1,r),ii(this.listens_,s)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Gl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=mv(e._queryParams),r=e._path.toString(),i=new Nt;return this.restRequest_(r+".json",n,(o,s)=>{let a=s;o===404&&(a=null,o=null),o===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,o])=>{i&&i.accessToken&&(n.auth=i.accessToken),o&&o.token&&(n.ac=o.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Eo(n);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ns(a.responseText)}catch{ht("Failed to parse JSON response for "+s+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ht("Got unsuccessful REST response for "+s+" Status: "+a.status),r(a.status);r=null}},a.open("GET",s,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(){return{value:null,children:new Map}}function xo(t,e,n){if(ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=le(e);t.children.has(r)||t.children.set(r,Ql());const i=t.children.get(r);e=xe(e),xo(i,e,n)}}function xh(t,e){if(ue(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Te,(r,i)=>{xo(t,new _e(r),i)}),xh(t,e)}}else if(t.children.size>0){const n=le(e);return e=xe(e),t.children.has(n)&&xh(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function kh(t,e,n){t.value!==null?n(e,t.value):zR(t,(r,i)=>{const o=new _e(e.toString()+"/"+r);kh(i,o,n)})}function zR(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&nt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=10*1e3,BR=30*1e3,WR=5*60*1e3;class VR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new HR(e);const r=vv+(BR-vv)*Math.random();ss(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;nt(e,(i,o)=>{o>0&&hn(this.statsToReport_,i)&&(n[i]=o,r=!0)}),r&&this.server_.reportStats(n),ss(this.reportStats_.bind(this),Math.floor(Math.random()*2*WR))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var on;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(on||(on={}));function pp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function mp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function gp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=on.ACK_USER_WRITE,this.source=pp()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new Kl(ve(),n,this.revert)}}else return F(le(this.path)===e,"operationForChild called for unrelated child."),new Kl(xe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n){this.source=e,this.path=n,this.type=on.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new js(this.source,ve()):new js(this.source,xe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=on.OVERWRITE}operationForChild(e){return ue(this.path)?new ci(this.source,ve(),this.snap.getImmediateChild(e)):new ci(this.source,xe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=on.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new ci(this.source,ve(),n.value):new so(this.source,ve(),n)}else return F(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new so(this.source,xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function QR(t,e,n,r){const i=[],o=[];return e.forEach(s=>{s.type==="child_changed"&&t.index_.indexedValueChanged(s.oldSnap,s.snapshotNode)&&o.push(AR(s.childName,s.snapshotNode))}),Ho(t,i,"child_removed",e,r,n),Ho(t,i,"child_added",e,r,n),Ho(t,i,"child_moved",o,r,n),Ho(t,i,"child_changed",e,r,n),Ho(t,i,"value",e,r,n),i}function Ho(t,e,n,r,i,o){const s=r.filter(a=>a.type===n);s.sort((a,l)=>YR(t,a,l)),s.forEach(a=>{const l=KR(t,a,o);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function KR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function YR(t,e,n){if(e.childName==null||n.childName==null)throw wo("Should only compare child_ events.");const r=new de(e.childName,e.snapshotNode),i=new de(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t,e){return{eventCache:t,serverCache:e}}function as(t,e,n,r){return Lu(new Tr(e,n,r),t.serverCache)}function Hw(t,e,n,r){return Lu(t.eventCache,new Tr(e,n,r))}function Yl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function di(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let id;const qR=()=>(id||(id=new xt(AT)),id);class be{constructor(e,n=qR()){this.value=e,this.children=n}static fromObject(e){let n=new be(null);return nt(e,(r,i)=>{n=n.set(new _e(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ve(),value:this.value};if(ue(e))return null;{const r=le(e),i=this.children.get(r);if(i!==null){const o=i.findRootMostMatchingPathAndValue(xe(e),n);return o!=null?{path:De(new _e(r),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=le(e),r=this.children.get(n);return r!==null?r.subtree(xe(e)):new be(null)}}set(e,n){if(ue(e))return new be(n,this.children);{const r=le(e),o=(this.children.get(r)||new be(null)).set(xe(e),n),s=this.children.insert(r,o);return new be(this.value,s)}}remove(e){if(ue(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=le(e),r=this.children.get(n);if(r){const i=r.remove(xe(e));let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),this.value===null&&o.isEmpty()?new be(null):new be(this.value,o)}else return this}}get(e){if(ue(e))return this.value;{const n=le(e),r=this.children.get(n);return r?r.get(xe(e)):null}}setTree(e,n){if(ue(e))return n;{const r=le(e),o=(this.children.get(r)||new be(null)).setTree(xe(e),n);let s;return o.isEmpty()?s=this.children.remove(r):s=this.children.insert(r,o),new be(this.value,s)}}fold(e){return this.fold_(ve(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,o)=>{r[i]=o.fold_(De(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ve(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ue(e))return null;{const o=le(e),s=this.children.get(o);return s?s.findOnPath_(xe(e),De(n,o),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ve(),n)}foreachOnPath_(e,n,r){if(ue(e))return this;{this.value&&r(n,this.value);const i=le(e),o=this.children.get(i);return o?o.foreachOnPath_(xe(e),De(n,i),r):new be(null)}}foreach(e){this.foreach_(ve(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(De(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.writeTree_=e}static empty(){return new un(new be(null))}}function ls(t,e,n){if(ue(e))return new un(new be(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let o=r.value;const s=vt(i,e);return o=o.updateChild(s,n),new un(t.writeTree_.set(i,o))}else{const i=new be(n),o=t.writeTree_.setTree(e,i);return new un(o)}}}function bh(t,e,n){let r=t;return nt(n,(i,o)=>{r=ls(r,De(e,i),o)}),r}function _v(t,e){if(ue(e))return un.empty();{const n=t.writeTree_.setTree(e,new be(null));return new un(n)}}function Ih(t,e){return yi(t,e)!=null}function yi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(vt(n.path,e)):null}function yv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Te,(r,i)=>{e.push(new de(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new de(r,i.value))}),e}function Er(t,e){if(ue(e))return t;{const n=yi(t,e);return n!=null?new un(new be(n)):new un(t.writeTree_.subtree(e))}}function Th(t){return t.writeTree_.isEmpty()}function ao(t,e){return Bw(ve(),t.writeTree_,e)}function Bw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,o)=>{i===".priority"?(F(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=Bw(De(t,i),o,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(De(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t,e){return Qw(e,t)}function XR(t,e,n,r,i){F(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ls(t.visibleWrites,e,n)),t.lastWriteId=r}function JR(t,e,n,r){F(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=bh(t.visibleWrites,e,n),t.lastWriteId=r}function ZR(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function eN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);F(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,o=!1,s=t.allWrites.length-1;for(;i&&s>=0;){const a=t.allWrites[s];a.visible&&(s>=n&&tN(a,r.path)?i=!1:Bt(r.path,a.path)&&(o=!0)),s--}if(i){if(o)return nN(t),!0;if(r.snap)t.visibleWrites=_v(t.visibleWrites,r.path);else{const a=r.children;nt(a,l=>{t.visibleWrites=_v(t.visibleWrites,De(r.path,l))})}return!0}else return!1}function tN(t,e){if(t.snap)return Bt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Bt(De(t.path,n),e))return!0;return!1}function nN(t){t.visibleWrites=Ww(t.allWrites,rN,ve()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function rN(t){return t.visible}function Ww(t,e,n){let r=un.empty();for(let i=0;i<t.length;++i){const o=t[i];if(e(o)){const s=o.path;let a;if(o.snap)Bt(n,s)?(a=vt(n,s),r=ls(r,a,o.snap)):Bt(s,n)&&(a=vt(s,n),r=ls(r,ve(),o.snap.getChild(a)));else if(o.children){if(Bt(n,s))a=vt(n,s),r=bh(r,a,o.children);else if(Bt(s,n))if(a=vt(s,n),ue(a))r=bh(r,ve(),o.children);else{const l=ii(o.children,le(a));if(l){const u=l.getChild(xe(a));r=ls(r,ve(),u)}}}else throw wo("WriteRecord should have .snap or .children")}}return r}function Vw(t,e,n,r,i){if(!r&&!i){const o=yi(t.visibleWrites,e);if(o!=null)return o;{const s=Er(t.visibleWrites,e);if(Th(s))return n;if(n==null&&!Ih(s,ve()))return null;{const a=n||Z.EMPTY_NODE;return ao(s,a)}}}else{const o=Er(t.visibleWrites,e);if(!i&&Th(o))return n;if(!i&&n==null&&!Ih(o,ve()))return null;{const s=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Bt(u.path,e)||Bt(e,u.path))},a=Ww(t.allWrites,s,e),l=n||Z.EMPTY_NODE;return ao(a,l)}}}function iN(t,e,n){let r=Z.EMPTY_NODE;const i=yi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Te,(o,s)=>{r=r.updateImmediateChild(o,s)}),r;if(n){const o=Er(t.visibleWrites,e);return n.forEachChild(Te,(s,a)=>{const l=ao(Er(o,new _e(s)),a);r=r.updateImmediateChild(s,l)}),yv(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}else{const o=Er(t.visibleWrites,e);return yv(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}}function oN(t,e,n,r,i){F(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=De(e,n);if(Ih(t.visibleWrites,o))return null;{const s=Er(t.visibleWrites,o);return Th(s)?i.getChild(n):ao(s,i.getChild(n))}}function sN(t,e,n,r){const i=De(e,n),o=yi(t.visibleWrites,i);if(o!=null)return o;if(r.isCompleteForChild(n)){const s=Er(t.visibleWrites,i);return ao(s,r.getNode().getImmediateChild(n))}else return null}function aN(t,e){return yi(t.visibleWrites,e)}function lN(t,e,n,r,i,o,s){let a;const l=Er(t.visibleWrites,e),u=yi(l,ve());if(u!=null)a=u;else if(n!=null)a=ao(l,n);else return[];if(a=a.withIndex(s),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=s.getCompare(),h=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let f=h.getNext();for(;f&&c.length<i;)d(f,r)!==0&&c.push(f),f=h.getNext();return c}else return[]}function uN(){return{visibleWrites:un.empty(),allWrites:[],lastWriteId:-1}}function ql(t,e,n,r){return Vw(t.writeTree,t.treePath,e,n,r)}function vp(t,e){return iN(t.writeTree,t.treePath,e)}function wv(t,e,n,r){return oN(t.writeTree,t.treePath,e,n,r)}function Xl(t,e){return aN(t.writeTree,De(t.treePath,e))}function cN(t,e,n,r,i,o){return lN(t.writeTree,t.treePath,e,n,r,i,o)}function _p(t,e,n){return sN(t.writeTree,t.treePath,e,n)}function Gw(t,e){return Qw(De(t.treePath,e),t.writeTree)}function Qw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;F(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),F(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const o=i.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,Fs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,Ms(r,i.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,oo(r,e.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,Fs(r,e.snapshotNode,i.oldSnap));else throw wo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Kw=new hN;class yp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Tr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return _p(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:di(this.viewCache_),o=cN(this.writes_,i,n,1,r,e);return o.length===0?null:o[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(t){return{filter:t}}function pN(t,e){F(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function mN(t,e,n,r,i){const o=new dN;let s,a;if(n.type===on.OVERWRITE){const u=n;u.source.fromUser?s=Rh(t,e,u.path,u.snap,r,i,o):(F(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ue(u.path),s=Jl(t,e,u.path,u.snap,r,i,a,o))}else if(n.type===on.MERGE){const u=n;u.source.fromUser?s=vN(t,e,u.path,u.children,r,i,o):(F(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),s=Nh(t,e,u.path,u.children,r,i,a,o))}else if(n.type===on.ACK_USER_WRITE){const u=n;u.revert?s=wN(t,e,u.path,r,i,o):s=_N(t,e,u.path,u.affectedTree,r,i,o)}else if(n.type===on.LISTEN_COMPLETE)s=yN(t,e,n.path,r,o);else throw wo("Unknown operation type: "+n.type);const l=o.getChanges();return gN(e,s,l),{viewCache:s,changes:l}}function gN(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=Yl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(zw(Yl(e)))}}function Yw(t,e,n,r,i,o){const s=e.eventCache;if(Xl(r,n)!=null)return e;{let a,l;if(ue(n))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=di(e),c=u instanceof Z?u:Z.EMPTY_NODE,d=vp(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,o)}else{const u=ql(r,di(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,o)}else{const u=le(n);if(u===".priority"){F(Ir(n)===1,"Can't have a priority with additional path components");const c=s.getNode();l=e.serverCache.getNode();const d=wv(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=s.getNode()}else{const c=xe(n);let d;if(s.isCompleteForChild(u)){l=e.serverCache.getNode();const h=wv(r,n,s.getNode(),l);h!=null?d=s.getNode().getImmediateChild(u).updateChild(c,h):d=s.getNode().getImmediateChild(u)}else d=_p(r,u,e.serverCache);d!=null?a=t.filter.updateChild(s.getNode(),u,d,c,i,o):a=s.getNode()}}return as(e,a,s.isFullyInitialized()||ue(n),t.filter.filtersNodes())}}function Jl(t,e,n,r,i,o,s,a){const l=e.serverCache;let u;const c=s?t.filter:t.filter.getIndexedFilter();if(ue(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),f,null)}else{const f=le(n);if(!l.isCompleteForPath(n)&&Ir(n)>1)return e;const m=xe(n),E=l.getNode().getImmediateChild(f).updateChild(m,r);f===".priority"?u=c.updatePriority(l.getNode(),E):u=c.updateChild(l.getNode(),f,E,m,Kw,null)}const d=Hw(e,u,l.isFullyInitialized()||ue(n),c.filtersNodes()),h=new yp(i,d,o);return Yw(t,d,n,i,h,a)}function Rh(t,e,n,r,i,o,s){const a=e.eventCache;let l,u;const c=new yp(i,e,o);if(ue(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,s),l=as(e,u,!0,t.filter.filtersNodes());else{const d=le(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=as(e,u,a.isFullyInitialized(),a.isFiltered());else{const h=xe(n),f=a.getNode().getImmediateChild(d);let m;if(ue(h))m=r;else{const _=c.getCompleteChild(d);_!=null?ap(h)===".priority"&&_.getChild(Ow(h)).isEmpty()?m=_:m=_.updateChild(h,r):m=Z.EMPTY_NODE}if(f.equals(m))l=e;else{const _=t.filter.updateChild(a.getNode(),d,m,h,c,s);l=as(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Ev(t,e){return t.eventCache.isCompleteForChild(e)}function vN(t,e,n,r,i,o,s){let a=e;return r.foreach((l,u)=>{const c=De(n,l);Ev(e,le(c))&&(a=Rh(t,a,c,u,i,o,s))}),r.foreach((l,u)=>{const c=De(n,l);Ev(e,le(c))||(a=Rh(t,a,c,u,i,o,s))}),a}function Sv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Nh(t,e,n,r,i,o,s,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ue(n)?u=r:u=new be(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),m=Sv(t,f,h);l=Jl(t,l,new _e(d),m,i,o,s,a)}}),u.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!f){const m=e.serverCache.getNode().getImmediateChild(d),_=Sv(t,m,h);l=Jl(t,l,new _e(d),_,i,o,s,a)}}),l}function _N(t,e,n,r,i,o,s){if(Xl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ue(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Jl(t,e,n,l.getNode().getChild(n),i,o,a,s);if(ue(n)){let u=new be(null);return l.getNode().forEachChild(Cn,(c,d)=>{u=u.set(new _e(c),d)}),Nh(t,e,n,u,i,o,a,s)}else return e}else{let u=new be(null);return r.foreach((c,d)=>{const h=De(n,c);l.isCompleteForPath(h)&&(u=u.set(c,l.getNode().getChild(h)))}),Nh(t,e,n,u,i,o,a,s)}}function yN(t,e,n,r,i){const o=e.serverCache,s=Hw(e,o.getNode(),o.isFullyInitialized()||ue(n),o.isFiltered());return Yw(t,s,n,r,Kw,i)}function wN(t,e,n,r,i,o){let s;if(Xl(r,n)!=null)return e;{const a=new yp(r,e,i),l=e.eventCache.getNode();let u;if(ue(n)||le(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=ql(r,di(e));else{const d=e.serverCache.getNode();F(d instanceof Z,"serverChildren would be complete if leaf node"),c=vp(r,d)}c=c,u=t.filter.updateFullNode(l,c,o)}else{const c=le(n);let d=_p(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,xe(n),a,o):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,Z.EMPTY_NODE,xe(n),a,o):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(s=ql(r,di(e)),s.isLeafNode()&&(u=t.filter.updateFullNode(u,s,o)))}return s=e.serverCache.isFullyInitialized()||Xl(r,ve())!=null,as(e,u,s,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new fp(r.getIndex()),o=LR(r);this.processor_=fN(o);const s=n.serverCache,a=n.eventCache,l=i.updateFullNode(Z.EMPTY_NODE,s.getNode(),null),u=o.updateFullNode(Z.EMPTY_NODE,a.getNode(),null),c=new Tr(l,s.isFullyInitialized(),i.filtersNodes()),d=new Tr(u,a.isFullyInitialized(),o.filtersNodes());this.viewCache_=Lu(d,c),this.eventGenerator_=new GR(this.query_)}get query(){return this.query_}}function SN(t){return t.viewCache_.serverCache.getNode()}function CN(t){return Yl(t.viewCache_)}function xN(t,e){const n=di(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function Cv(t){return t.eventRegistrations_.length===0}function kN(t,e){t.eventRegistrations_.push(e)}function xv(t,e,n){const r=[];if(n){F(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(o=>{const s=o.createCancelEvent(n,i);s&&r.push(s)})}if(e){let i=[];for(let o=0;o<t.eventRegistrations_.length;++o){const s=t.eventRegistrations_[o];if(!s.matches(e))i.push(s);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(o+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function kv(t,e,n,r){e.type===on.MERGE&&e.source.queryId!==null&&(F(di(t.viewCache_),"We should always have a full cache before handling merges"),F(Yl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,o=mN(t.processor_,i,e,n,r);return pN(t.processor_,o.viewCache),F(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=o.viewCache,qw(t,o.changes,o.viewCache.eventCache.getNode(),null)}function bN(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Te,(o,s)=>{r.push(oo(o,s))}),n.isFullyInitialized()&&r.push(zw(n.getNode())),qw(t,r,n.getNode(),e)}function qw(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return QR(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zl;class Xw{constructor(){this.views=new Map}}function IN(t){F(!Zl,"__referenceConstructor has already been defined"),Zl=t}function TN(){return F(Zl,"Reference.ts has not been loaded"),Zl}function RN(t){return t.views.size===0}function wp(t,e,n,r){const i=e.source.queryId;if(i!==null){const o=t.views.get(i);return F(o!=null,"SyncTree gave us an op for an invalid query."),kv(o,e,n,r)}else{let o=[];for(const s of t.views.values())o=o.concat(kv(s,e,n,r));return o}}function Jw(t,e,n,r,i){const o=e._queryIdentifier,s=t.views.get(o);if(!s){let a=ql(n,i?r:null),l=!1;a?l=!0:r instanceof Z?(a=vp(n,r),l=!1):(a=Z.EMPTY_NODE,l=!1);const u=Lu(new Tr(a,l,!1),new Tr(r,i,!1));return new EN(e,u)}return s}function NN(t,e,n,r,i,o){const s=Jw(t,e,r,i,o);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,s),kN(s,n),bN(s,n)}function PN(t,e,n,r){const i=e._queryIdentifier,o=[];let s=[];const a=Rr(t);if(i==="default")for(const[l,u]of t.views.entries())s=s.concat(xv(u,n,r)),Cv(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||o.push(u.query));else{const l=t.views.get(i);l&&(s=s.concat(xv(l,n,r)),Cv(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||o.push(l.query)))}return a&&!Rr(t)&&o.push(new(TN())(e._repo,e._path)),{removed:o,events:s}}function Zw(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Sr(t,e){let n=null;for(const r of t.views.values())n=n||xN(r,e);return n}function eE(t,e){if(e._queryParams.loadsAllData())return Fu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function tE(t,e){return eE(t,e)!=null}function Rr(t){return Fu(t)!=null}function Fu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu;function ON(t){F(!eu,"__referenceConstructor has already been defined"),eu=t}function AN(){return F(eu,"Reference.ts has not been loaded"),eu}let DN=1;class bv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=uN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ep(t,e,n,r,i){return XR(t.pendingWriteTree_,e,n,r,i),i?ko(t,new ci(pp(),e,n)):[]}function LN(t,e,n,r){JR(t.pendingWriteTree_,e,n,r);const i=be.fromObject(n);return ko(t,new so(pp(),e,i))}function lr(t,e,n=!1){const r=ZR(t.pendingWriteTree_,e);if(eN(t.pendingWriteTree_,e)){let o=new be(null);return r.snap!=null?o=o.set(ve(),!0):nt(r.children,s=>{o=o.set(new _e(s),!0)}),ko(t,new Kl(r.path,o,n))}else return[]}function aa(t,e,n){return ko(t,new ci(mp(),e,n))}function MN(t,e,n){const r=be.fromObject(n);return ko(t,new so(mp(),e,r))}function FN(t,e){return ko(t,new js(mp(),e))}function $N(t,e,n){const r=Sp(t,n);if(r){const i=Cp(r),o=i.path,s=i.queryId,a=vt(o,e),l=new js(gp(s),a);return xp(t,o,l)}else return[]}function tu(t,e,n,r,i=!1){const o=e._path,s=t.syncPointTree_.get(o);let a=[];if(s&&(e._queryIdentifier==="default"||tE(s,e))){const l=PN(s,e,n,r);RN(s)&&(t.syncPointTree_=t.syncPointTree_.remove(o));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(o,(h,f)=>Rr(f));if(c&&!d){const h=t.syncPointTree_.subtree(o);if(!h.isEmpty()){const f=zN(h);for(let m=0;m<f.length;++m){const _=f[m],E=_.query,g=oE(t,_);t.listenProvider_.startListening(us(E),Us(t,E),g.hashFn,g.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(us(e),null):u.forEach(h=>{const f=t.queryToTagMap.get(ju(h));t.listenProvider_.stopListening(us(h),f)}))}HN(t,u)}return a}function nE(t,e,n,r){const i=Sp(t,r);if(i!=null){const o=Cp(i),s=o.path,a=o.queryId,l=vt(s,e),u=new ci(gp(a),l,n);return xp(t,s,u)}else return[]}function jN(t,e,n,r){const i=Sp(t,r);if(i){const o=Cp(i),s=o.path,a=o.queryId,l=vt(s,e),u=be.fromObject(n),c=new so(gp(a),l,u);return xp(t,s,c)}else return[]}function Ph(t,e,n,r=!1){const i=e._path;let o=null,s=!1;t.syncPointTree_.foreachOnPath(i,(h,f)=>{const m=vt(h,i);o=o||Sr(f,m),s=s||Rr(f)});let a=t.syncPointTree_.get(i);a?(s=s||Rr(a),o=o||Sr(a,ve())):(a=new Xw,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;o!=null?l=!0:(l=!1,o=Z.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,m)=>{const _=Sr(m,ve());_&&(o=o.updateImmediateChild(f,_))}));const u=tE(a,e);if(!u&&!e._queryParams.loadsAllData()){const h=ju(e);F(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=BN();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const c=Mu(t.pendingWriteTree_,i);let d=NN(a,e,n,c,o,l);if(!u&&!s&&!r){const h=eE(a,e);d=d.concat(WN(t,e,h))}return d}function $u(t,e,n){const i=t.pendingWriteTree_,o=t.syncPointTree_.findOnPath(e,(s,a)=>{const l=vt(s,e),u=Sr(a,l);if(u)return u});return Vw(i,e,o,n,!0)}function UN(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=vt(u,n);r=r||Sr(c,d)});let i=t.syncPointTree_.get(n);i?r=r||Sr(i,ve()):(i=new Xw,t.syncPointTree_=t.syncPointTree_.set(n,i));const o=r!=null,s=o?new Tr(r,!0,!1):null,a=Mu(t.pendingWriteTree_,e._path),l=Jw(i,e,a,o?s.getNode():Z.EMPTY_NODE,o);return CN(l)}function ko(t,e){return rE(e,t.syncPointTree_,null,Mu(t.pendingWriteTree_,ve()))}function rE(t,e,n,r){if(ue(t.path))return iE(t,e,n,r);{const i=e.get(ve());n==null&&i!=null&&(n=Sr(i,ve()));let o=[];const s=le(t.path),a=t.operationForChild(s),l=e.children.get(s);if(l&&a){const u=n?n.getImmediateChild(s):null,c=Gw(r,s);o=o.concat(rE(a,l,u,c))}return i&&(o=o.concat(wp(i,t,r,n))),o}}function iE(t,e,n,r){const i=e.get(ve());n==null&&i!=null&&(n=Sr(i,ve()));let o=[];return e.children.inorderTraversal((s,a)=>{const l=n?n.getImmediateChild(s):null,u=Gw(r,s),c=t.operationForChild(s);c&&(o=o.concat(iE(c,a,l,u)))}),i&&(o=o.concat(wp(i,t,r,n))),o}function oE(t,e){const n=e.query,r=Us(t,n);return{hashFn:()=>(SN(e)||Z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?$N(t,n._path,r):FN(t,n._path);{const o=MT(i,n);return tu(t,n,null,o)}}}}function Us(t,e){const n=ju(e);return t.queryToTagMap.get(n)}function ju(t){return t._path.toString()+"$"+t._queryIdentifier}function Sp(t,e){return t.tagToQueryMap.get(e)}function Cp(t){const e=t.indexOf("$");return F(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new _e(t.substr(0,e))}}function xp(t,e,n){const r=t.syncPointTree_.get(e);F(r,"Missing sync point for query tag that we're tracking");const i=Mu(t.pendingWriteTree_,e);return wp(r,n,i,null)}function zN(t){return t.fold((e,n,r)=>{if(n&&Rr(n))return[Fu(n)];{let i=[];return n&&(i=Zw(n)),nt(r,(o,s)=>{i=i.concat(s)}),i}})}function us(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(AN())(t._repo,t._path):t}function HN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ju(r),o=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(o)}}}function BN(){return DN++}function WN(t,e,n){const r=e._path,i=Us(t,e),o=oE(t,n),s=t.listenProvider_.startListening(us(e),i,o.hashFn,o.onComplete),a=t.syncPointTree_.subtree(r);if(i)F(!Rr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!ue(u)&&c&&Rr(c))return[Fu(c).query];{let h=[];return c&&(h=h.concat(Zw(c).map(f=>f.query))),nt(d,(f,m)=>{h=h.concat(m)}),h}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(us(c),Us(t,c))}}return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new kp(n)}node(){return this.node_}}class bp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=De(this.path_,e);return new bp(this.syncTree_,n)}node(){return $u(this.syncTree_,this.path_)}}const VN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Iv=function(t,e,n){if(!t||typeof t!="object")return t;if(F(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return GN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return QN(t[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},GN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:F(!1,"Unexpected server value: "+t)}},QN=function(t,e,n){t.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&F(!1,"Unexpected increment value: "+r);const i=e.node();if(F(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return typeof s!="number"?r:s+r},sE=function(t,e,n,r){return Tp(e,new bp(n,t),r)},Ip=function(t,e,n){return Tp(t,new kp(e),n)};function Tp(t,e,n){const r=t.getPriority().val(),i=Iv(r,e.getImmediateChild(".priority"),n);let o;if(t.isLeafNode()){const s=t,a=Iv(s.getValue(),e,n);return a!==s.getValue()||i!==s.getPriority().val()?new Xe(a,Me(i)):t}else{const s=t;return o=s,i!==s.getPriority().val()&&(o=o.updatePriority(new Xe(i))),s.forEachChild(Te,(a,l)=>{const u=Tp(l,e.getImmediateChild(a),n);u!==l&&(o=o.updateImmediateChild(a,u))}),o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Uu(t,e){let n=e instanceof _e?e:new _e(e),r=t,i=le(n);for(;i!==null;){const o=ii(r.node.children,i)||{children:{},childCount:0};r=new Rp(i,r,o),n=xe(n),i=le(n)}return r}function wi(t){return t.node.value}function Np(t,e){t.node.value=e,Oh(t)}function aE(t){return t.node.childCount>0}function KN(t){return wi(t)===void 0&&!aE(t)}function zu(t,e){nt(t.node.children,(n,r)=>{e(new Rp(n,t,r))})}function lE(t,e,n,r){n&&!r&&e(t),zu(t,i=>{lE(i,e,!0,r)}),n&&r&&e(t)}function YN(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function la(t){return new _e(t.parent===null?t.name:la(t.parent)+"/"+t.name)}function Oh(t){t.parent!==null&&qN(t.parent,t.name,t)}function qN(t,e,n){const r=KN(n),i=hn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Oh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Oh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=/[\[\].#$\/\u0000-\u001F\u007F]/,JN=/[\[\].#$\u0000-\u001F\u007F]/,od=10*1024*1024,Hu=function(t){return typeof t=="string"&&t.length!==0&&!XN.test(t)},uE=function(t){return typeof t=="string"&&t.length!==0&&!JN.test(t)},ZN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),uE(t)},zs=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Pu(t)||t&&typeof t=="object"&&hn(t,".sv")},bn=function(t,e,n,r){r&&e===void 0||ua(oi(t,"value"),e,n)},ua=function(t,e,n){const r=n instanceof _e?new pR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Hr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Hr(r)+" with contents = "+e.toString());if(Pu(e))throw new Error(t+"contains "+e.toString()+" "+Hr(r));if(typeof e=="string"&&e.length>od/3&&Iu(e)>od)throw new Error(t+"contains a string greater than "+od+" utf8 bytes "+Hr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,o=!1;if(nt(e,(s,a)=>{if(s===".value")i=!0;else if(s!==".priority"&&s!==".sv"&&(o=!0,!Hu(s)))throw new Error(t+" contains an invalid key ("+s+") "+Hr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mR(r,s),ua(t,a,r),gR(r)}),i&&o)throw new Error(t+' contains ".value" child '+Hr(r)+" in addition to actual children.")}},eP=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const o=Ls(r);for(let s=0;s<o.length;s++)if(!(o[s]===".priority"&&s===o.length-1)){if(!Hu(o[s]))throw new Error(t+"contains an invalid key ("+o[s]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(fR);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Bt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},cE=function(t,e,n,r){if(r&&e===void 0)return;const i=oi(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const o=[];nt(e,(s,a)=>{const l=new _e(s);if(ua(i,a,De(n,l)),ap(l)===".priority"&&!zs(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(l)}),eP(i,o)},Pp=function(t,e,n){if(!(n&&e===void 0)){if(Pu(e))throw new Error(oi(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!zs(e))throw new Error(oi(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},ca=function(t,e,n,r){if(!(r&&n===void 0)&&!Hu(n))throw new Error(oi(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Bu=function(t,e,n,r){if(!(r&&n===void 0)&&!uE(n))throw new Error(oi(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},tP=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Bu(t,e,n,r)},sn=function(t,e){if(le(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},dE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Hu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ZN(n))throw new Error(oi(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wu(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],o=i.getPath();n!==null&&!lp(o,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(i)}n&&t.eventLists_.push(n)}function hE(t,e,n){Wu(t,n),fE(t,r=>lp(r,e))}function Dt(t,e,n){Wu(t,n),fE(t,r=>Bt(r,e)||Bt(e,r))}function fE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const o=i.path;e(o)?(rP(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function rP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Jr&&et("event: "+n.toString()),Co(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE="repo_interrupt",iP=25;class oP{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ql(),this.transactionQueueTree_=new Rp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sP(t,e,n){if(t.stats_=op(t.repoInfo_),t.forceRestClient_||$T())t.server_=new Gl(t.repoInfo_,(r,i,o,s)=>{Tv(t,r,i,o,s)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Rv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Vt(t.repoInfo_,e,(r,i,o,s)=>{Tv(t,r,i,o,s)},r=>{Rv(t,r)},r=>{aP(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=BT(t.repoInfo_,()=>new VR(t.stats_,t.server_)),t.infoData_=new UR,t.infoSyncTree_=new bv({startListening:(r,i,o,s)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=aa(t.infoSyncTree_,r._path,l),setTimeout(()=>{s("ok")},0)),a},stopListening:()=>{}}),Op(t,"connected",!1),t.serverSyncTree_=new bv({startListening:(r,i,o,s)=>(t.server_.listen(r,o,i,(a,l)=>{const u=s(a,l);Dt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function mE(t){const n=t.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function da(t){return VN({timestamp:mE(t)})}function Tv(t,e,n,r,i){t.dataUpdateCount++;const o=new _e(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let s=[];if(i)if(r){const l=Ll(n,u=>Me(u));s=jN(t.serverSyncTree_,o,l,i)}else{const l=Me(n);s=nE(t.serverSyncTree_,o,l,i)}else if(r){const l=Ll(n,u=>Me(u));s=MN(t.serverSyncTree_,o,l)}else{const l=Me(n);s=aa(t.serverSyncTree_,o,l)}let a=o;s.length>0&&(a=lo(t,o)),Dt(t.eventQueue_,a,s)}function Rv(t,e){Op(t,"connected",e),e===!1&&cP(t)}function aP(t,e){nt(e,(n,r)=>{Op(t,n,r)})}function Op(t,e,n){const r=new _e("/.info/"+e),i=Me(n);t.infoData_.updateSnapshot(r,i);const o=aa(t.infoSyncTree_,r,i);Dt(t.eventQueue_,r,o)}function Vu(t){return t.nextWriteId_++}function lP(t,e,n){const r=UN(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const o=Me(i).withIndex(e._queryParams.getIndex());Ph(t.serverSyncTree_,e,n,!0);let s;if(e._queryParams.loadsAllData())s=aa(t.serverSyncTree_,e._path,o);else{const a=Us(t.serverSyncTree_,e);s=nE(t.serverSyncTree_,e._path,o,a)}return Dt(t.eventQueue_,e._path,s),tu(t.serverSyncTree_,e,n,null,!0),o},i=>(bo(t,"get for query "+Ke(e)+" failed: "+i),Promise.reject(new Error(i))))}function Ap(t,e,n,r,i){bo(t,"set",{path:e.toString(),value:n,priority:r});const o=da(t),s=Me(n,r),a=$u(t.serverSyncTree_,e),l=Ip(s,a,o),u=Vu(t),c=Ep(t.serverSyncTree_,e,l,u,!0);Wu(t.eventQueue_,c),t.server_.put(e.toString(),s.val(!0),(h,f)=>{const m=h==="ok";m||ht("set at "+e+" failed: "+h);const _=lr(t.serverSyncTree_,u,!m);Dt(t.eventQueue_,e,_),Nr(t,i,h,f)});const d=Lp(t,e);lo(t,d),Dt(t.eventQueue_,d,[])}function uP(t,e,n,r){bo(t,"update",{path:e.toString(),value:n});let i=!0;const o=da(t),s={};if(nt(n,(a,l)=>{i=!1,s[a]=sE(De(e,a),Me(l),t.serverSyncTree_,o)}),i)et("update() called with empty data.  Don't do anything."),Nr(t,r,"ok",void 0);else{const a=Vu(t),l=LN(t.serverSyncTree_,e,s,a);Wu(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||ht("update at "+e+" failed: "+u);const h=lr(t.serverSyncTree_,a,!d),f=h.length>0?lo(t,e):e;Dt(t.eventQueue_,f,h),Nr(t,r,u,c)}),nt(n,u=>{const c=Lp(t,De(e,u));lo(t,c)}),Dt(t.eventQueue_,e,[])}}function cP(t){bo(t,"onDisconnectEvents");const e=da(t),n=Ql();kh(t.onDisconnect_,ve(),(i,o)=>{const s=sE(i,o,t.serverSyncTree_,e);xo(n,i,s)});let r=[];kh(n,ve(),(i,o)=>{r=r.concat(aa(t.serverSyncTree_,i,o));const s=Lp(t,i);lo(t,s)}),t.onDisconnect_=Ql(),Dt(t.eventQueue_,ve(),r)}function dP(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&xh(t.onDisconnect_,e),Nr(t,n,r,i)})}function Nv(t,e,n,r){const i=Me(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(o,s)=>{o==="ok"&&xo(t.onDisconnect_,e,i),Nr(t,r,o,s)})}function hP(t,e,n,r,i){const o=Me(n,r);t.server_.onDisconnectPut(e.toString(),o.val(!0),(s,a)=>{s==="ok"&&xo(t.onDisconnect_,e,o),Nr(t,i,s,a)})}function fP(t,e,n,r){if(Dl(n)){et("onDisconnect().update() called with empty data.  Don't do anything."),Nr(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,o)=>{i==="ok"&&nt(n,(s,a)=>{const l=Me(a);xo(t.onDisconnect_,De(e,s),l)}),Nr(t,r,i,o)})}function pP(t,e,n){let r;le(e._path)===".info"?r=Ph(t.infoSyncTree_,e,n):r=Ph(t.serverSyncTree_,e,n),hE(t.eventQueue_,e._path,r)}function Ah(t,e,n){let r;le(e._path)===".info"?r=tu(t.infoSyncTree_,e,n):r=tu(t.serverSyncTree_,e,n),hE(t.eventQueue_,e._path,r)}function gE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(pE)}function mP(t){t.persistentConnection_&&t.persistentConnection_.resume(pE)}function bo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),et(n,...e)}function Nr(t,e,n,r){e&&Co(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let o=i;r&&(o+=": "+r);const s=new Error(o);s.code=i,e(s)}})}function gP(t,e,n,r,i,o){bo(t,"transaction on "+e);const s={path:e,update:n,onComplete:r,status:null,order:lw(),applyLocally:o,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Dp(t,e,void 0);s.currentInputSnapshot=a;const l=s.update(a.val());if(l===void 0)s.unwatcher(),s.currentOutputSnapshotRaw=null,s.currentOutputSnapshotResolved=null,s.onComplete&&s.onComplete(null,!1,s.currentInputSnapshot);else{ua("transaction failed: Data returned ",l,s.path),s.status=0;const u=Uu(t.transactionQueueTree_,e),c=wi(u)||[];c.push(s),Np(u,c);let d;typeof l=="object"&&l!==null&&hn(l,".priority")?(d=ii(l,".priority"),F(zs(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=($u(t.serverSyncTree_,e)||Z.EMPTY_NODE).getPriority().val();const h=da(t),f=Me(l,d),m=Ip(f,a,h);s.currentOutputSnapshotRaw=f,s.currentOutputSnapshotResolved=m,s.currentWriteId=Vu(t);const _=Ep(t.serverSyncTree_,e,m,s.currentWriteId,s.applyLocally);Dt(t.eventQueue_,e,_),Gu(t,t.transactionQueueTree_)}}function Dp(t,e,n){return $u(t.serverSyncTree_,e,n)||Z.EMPTY_NODE}function Gu(t,e=t.transactionQueueTree_){if(e||Qu(t,e),wi(e)){const n=_E(t,e);F(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&vP(t,la(e),n)}else aE(e)&&zu(e,n=>{Gu(t,n)})}function vP(t,e,n){const r=n.map(u=>u.currentWriteId),i=Dp(t,e,r);let o=i;const s=i.hash();for(let u=0;u<n.length;u++){const c=n[u];F(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=vt(e,c.path);o=o.updateChild(d,c.currentOutputSnapshotRaw)}const a=o.val(!0),l=e;t.server_.put(l.toString(),a,u=>{bo(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(lr(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Qu(t,Uu(t.transactionQueueTree_,e)),Gu(t,t.transactionQueueTree_),Dt(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)Co(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ht("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}lo(t,e)}},s)}function lo(t,e){const n=vE(t,e),r=la(n),i=_E(t,n);return _P(t,i,r),r}function _P(t,e,n){if(e.length===0)return;const r=[];let i=[];const s=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=vt(n,l.path);let c=!1,d;if(F(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(lr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=iP)c=!0,d="maxretry",i=i.concat(lr(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Dp(t,l.path,s);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){ua("transaction failed: Data returned ",f,l.path);let m=Me(f);typeof f=="object"&&f!=null&&hn(f,".priority")||(m=m.updatePriority(h.getPriority()));const E=l.currentWriteId,g=da(t),p=Ip(m,h,g);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=p,l.currentWriteId=Vu(t),s.splice(s.indexOf(E),1),i=i.concat(Ep(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(lr(t.serverSyncTree_,E,!0))}else c=!0,d="nodata",i=i.concat(lr(t.serverSyncTree_,l.currentWriteId,!0))}Dt(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Qu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Co(r[a]);Gu(t,t.transactionQueueTree_)}function vE(t,e){let n,r=t.transactionQueueTree_;for(n=le(e);n!==null&&wi(r)===void 0;)r=Uu(r,n),e=xe(e),n=le(e);return r}function _E(t,e){const n=[];return yE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function yE(t,e,n){const r=wi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);zu(e,i=>{yE(t,i,n)})}function Qu(t,e){const n=wi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Np(e,n.length>0?n:void 0)}zu(e,r=>{Qu(t,r)})}function Lp(t,e){const n=la(vE(t,e)),r=Uu(t.transactionQueueTree_,e);return YN(r,i=>{sd(t,i)}),sd(t,r),lE(r,i=>{sd(t,i)}),n}function sd(t,e){const n=wi(e);if(n){const r=[];let i=[],o=-1;for(let s=0;s<n.length;s++)n[s].status===3||(n[s].status===1?(F(o===s-1,"All SENT items should be at beginning of queue."),o=s,n[s].status=3,n[s].abortReason="set"):(F(n[s].status===0,"Unexpected transaction status in abort"),n[s].unwatcher(),i=i.concat(lr(t.serverSyncTree_,n[s].currentWriteId,!0)),n[s].onComplete&&r.push(n[s].onComplete.bind(null,new Error("set"),!1,null))));o===-1?Np(e,void 0):n.length=o+1,Dt(t.eventQueue_,la(e),i);for(let s=0;s<r.length;s++)Co(r[s])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function wP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ht(`Invalid query segment '${n}' in query '${t}'`)}return e}const Dh=function(t,e){const n=EP(t),r=n.namespace;n.domain==="firebase.com"&&xn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&xn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||PT();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Cw(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new _e(n.pathString)}},EP=function(t){let e="",n="",r="",i="",o="",s=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=yP(t.substring(c,d)));const h=wP(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(s=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const f=e.slice(0,u);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),o=r}"ns"in h&&(o=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ke(this.snapshot.exportVal())}}class EE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return F(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Nt;return dP(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){sn("OnDisconnect.remove",this._path);const e=new Nt;return Nv(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){sn("OnDisconnect.set",this._path),bn("OnDisconnect.set",e,this._path,!1);const n=new Nt;return Nv(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){sn("OnDisconnect.setWithPriority",this._path),bn("OnDisconnect.setWithPriority",e,this._path,!1),Pp("OnDisconnect.setWithPriority",n,!1);const r=new Nt;return hP(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){sn("OnDisconnect.update",this._path),cE("OnDisconnect.update",e,this._path,!1);const n=new Nt;return fP(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ue(this._path)?null:ap(this._path)}get ref(){return new Kt(this._repo,this._path)}get _queryIdentifier(){const e=gv(this._queryParams),n=np(e);return n==="{}"?"default":n}get _queryObject(){return gv(this._queryParams)}isEqual(e){if(e=He(e),!(e instanceof Tt))return!1;const n=this._repo===e._repo,r=lp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+hR(this._path)}}function Ku(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Mr(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Cn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==zn)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==kn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Te){if(e!=null&&!zs(e)||n!=null&&!zs(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(F(t.getIndex()instanceof dp||t.getIndex()===hp,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Yu(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Kt extends Tt{constructor(e,n){super(e,n,new Au,!1)}get parent(){const e=Ow(this._path);return e===null?null:new Kt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Pr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _e(e),r=hi(this.ref,e);return new Pr(this._node.getChild(n),r,Te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Pr(i,hi(this.ref,r),Te)))}hasChild(e){const n=new _e(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function CE(t,e){return t=He(t),t._checkNotDeleted("ref"),e!==void 0?hi(t._root,e):t._root}function SP(t,e){t=He(t),t._checkNotDeleted("refFromURL");const n=Dh(e,t._repo.repoInfo_.nodeAdmin);dE("refFromURL",n);const r=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&r.host!==t._repo.repoInfo_.host&&xn("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+t._repo.repoInfo_.host+")"),CE(t,n.path.toString())}function hi(t,e){return t=He(t),le(t._path)===null?tP("child","path",e,!1):Bu("child","path",e,!1),new Kt(t._repo,De(t._path,e))}function CP(t){return t=He(t),new SE(t._repo,t._path)}function xP(t,e){t=He(t),sn("push",t._path),bn("push",e,t._path,!0);const n=mE(t._repo),r=OR(n),i=hi(t,r),o=hi(t,r);let s;return e!=null?s=Fp(o,e).then(()=>o):s=Promise.resolve(o),i.then=s.then.bind(s),i.catch=s.then.bind(s,void 0),i}function kP(t){return sn("remove",t._path),Fp(t,null)}function Fp(t,e){t=He(t),sn("set",t._path),bn("set",e,t._path,!1);const n=new Nt;return Ap(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function bP(t,e){t=He(t),sn("setPriority",t._path),Pp("setPriority",e,!1);const n=new Nt;return Ap(t._repo,De(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function IP(t,e,n){if(sn("setWithPriority",t._path),bn("setWithPriority",e,t._path,!1),Pp("setWithPriority",n,!1),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const r=new Nt;return Ap(t._repo,t._path,e,n,r.wrapCallback(()=>{})),r.promise}function TP(t,e){cE("update",e,t._path,!1);const n=new Nt;return uP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function RP(t){t=He(t);const e=new Mp(()=>{}),n=new ha(e);return lP(t._repo,t,n).then(r=>new Pr(r,new Kt(t._repo,t._path),t._queryParams.getIndex()))}class ha{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new wE("value",this,new Pr(e.snapshotNode,new Kt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new EE(this,e,n):null}matches(e){return e instanceof ha?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class qu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new EE(this,e,n):null}createEvent(e,n){F(e.childName!=null,"Child events should have a childName.");const r=hi(new Kt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new wE(e.type,this,new Pr(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof qu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function fa(t,e,n,r,i){let o;if(typeof r=="object"&&(o=void 0,i=r),typeof r=="function"&&(o=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{Ah(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const s=new Mp(n,o||void 0),a=e==="value"?new ha(s):new qu(e,s);return pP(t._repo,t,a),()=>Ah(t._repo,t,a)}function xE(t,e,n,r){return fa(t,"value",e,n,r)}function NP(t,e,n,r){return fa(t,"child_added",e,n,r)}function PP(t,e,n,r){return fa(t,"child_changed",e,n,r)}function OP(t,e,n,r){return fa(t,"child_moved",e,n,r)}function AP(t,e,n,r){return fa(t,"child_removed",e,n,r)}function DP(t,e,n){let r=null;const i=n?new Mp(n):null;e==="value"?r=new ha(i):e&&(r=new qu(e,i)),Ah(t._repo,t,r)}class Yt{}class kE extends Yt{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){bn("endAt",this._value,e._path,!0);const n=Ch(e._queryParams,this._value,this._key);if(Yu(n),Mr(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Tt(e._repo,e._path,n,e._orderByCalled)}}function LP(t,e){return ca("endAt","key",e,!0),new kE(t,e)}class MP extends Yt{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){bn("endBefore",this._value,e._path,!1);const n=jR(e._queryParams,this._value,this._key);if(Yu(n),Mr(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Tt(e._repo,e._path,n,e._orderByCalled)}}function FP(t,e){return ca("endBefore","key",e,!0),new MP(t,e)}class bE extends Yt{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){bn("startAt",this._value,e._path,!0);const n=Sh(e._queryParams,this._value,this._key);if(Yu(n),Mr(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Tt(e._repo,e._path,n,e._orderByCalled)}}function $P(t=null,e){return ca("startAt","key",e,!0),new bE(t,e)}class jP extends Yt{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){bn("startAfter",this._value,e._path,!1);const n=$R(e._queryParams,this._value,this._key);if(Yu(n),Mr(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Tt(e._repo,e._path,n,e._orderByCalled)}}function UP(t,e){return ca("startAfter","key",e,!0),new jP(t,e)}class zP extends Yt{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Tt(e._repo,e._path,MR(e._queryParams,this._limit),e._orderByCalled)}}function HP(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new zP(t)}class BP extends Yt{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Tt(e._repo,e._path,FR(e._queryParams,this._limit),e._orderByCalled)}}function WP(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new BP(t)}class VP extends Yt{constructor(e){super(),this._path=e}_apply(e){Ku(e,"orderByChild");const n=new _e(this._path);if(ue(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new dp(n),i=Du(e._queryParams,r);return Mr(i),new Tt(e._repo,e._path,i,!0)}}function GP(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Bu("orderByChild","path",t,!1),new VP(t)}class QP extends Yt{_apply(e){Ku(e,"orderByKey");const n=Du(e._queryParams,Cn);return Mr(n),new Tt(e._repo,e._path,n,!0)}}function KP(){return new QP}class YP extends Yt{_apply(e){Ku(e,"orderByPriority");const n=Du(e._queryParams,Te);return Mr(n),new Tt(e._repo,e._path,n,!0)}}function qP(){return new YP}class XP extends Yt{_apply(e){Ku(e,"orderByValue");const n=Du(e._queryParams,hp);return Mr(n),new Tt(e._repo,e._path,n,!0)}}function JP(){return new XP}class ZP extends Yt{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){if(bn("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new kE(this._value,this._key)._apply(new bE(this._value,this._key)._apply(e))}}function eO(t,e){return ca("equalTo","key",e,!0),new ZP(t,e)}function tO(t,...e){let n=He(t);for(const r of e)n=r._apply(n);return n}IN(Kt);ON(Kt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO="FIREBASE_DATABASE_EMULATOR_HOST",Lh={};let IE=!1;function rO(t,e,n,r){t.repoInfo_=new Cw(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function TE(t,e,n,r,i){let o=r||t.options.databaseURL;o===void 0&&(t.options.projectId||xn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),et("Using default host for project ",t.options.projectId),o=`${t.options.projectId}-default-rtdb.firebaseio.com`);let s=Dh(o,i),a=s.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[nO]),u?(l=!0,o=`http://${u}?ns=${a.namespace}`,s=Dh(o,i),a=s.repoInfo):l=!s.repoInfo.secure;const c=i&&l?new Ki(Ki.OWNER):new UT(t.name,t.options,e);dE("Invalid Firebase Database URL",s),ue(s.path)||xn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=oO(a,t,c,new jT(t.name,n));return new RE(d,t)}function iO(t,e){const n=Lh[e];(!n||n[t.key]!==t)&&xn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),gE(t),delete n[t.key]}function oO(t,e,n,r){let i=Lh[e.name];i||(i={},Lh[e.name]=i);let o=i[t.toURLString()];return o&&xn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new oP(t,IE,n,r),i[t.toURLString()]=o,o}function sO(t){IE=t}class RE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Kt(this._repo,ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(iO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xn("Cannot call "+e+" on a deleted database.")}}function NE(){ro.IS_TRANSPORT_INITIALIZED&&ht("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function aO(){NE(),ar.forceDisallow()}function lO(){NE(),zt.forceDisallow(),ar.forceAllow()}function uO(t=I0(),e){const n=Gf(t,"database").getImmediate({identifier:e}),r=E0("database");if(r){const[i,o]=r.split(":");PE(n,i,parseInt(o,10))}return n}function PE(t,e,n,r={}){t=He(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&xn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&xn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ki(Ki.OWNER);else if(r.mockUserToken){const s=typeof r.mockUserToken=="string"?r.mockUserToken:ak(r.mockUserToken,t.app.options.projectId);o=new Ki(s)}rO(i,e,n,o)}function cO(t){t=He(t),t._checkNotDeleted("goOffline"),gE(t._repo)}function dO(t){t=He(t),t._checkNotDeleted("goOnline"),mP(t._repo)}function hO(t,e){cw(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(t){sw(qs),no(new si("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return TE(r,i,o,n)},"PUBLIC").setMultipleInstances(!0)),wr(Jg,Zg,t),wr(Jg,Zg,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO={".sv":"timestamp"};function mO(){return pO}function gO(t){return{".sv":{increment:t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function vO(t,e,n){var r;if(t=He(t),sn("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,o=new Nt,s=(l,u,c)=>{let d=null;l?o.reject(l):(d=new Pr(c,new Kt(t._repo,t._path),Te),o.resolve(new OE(u,d)))},a=xE(t,()=>{});return gP(t._repo,t._path,e,s,a,i),o.promise}Vt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Vt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};const _O=function(t){const e=Vt.prototype.put;return Vt.prototype.put=function(n,r,i,o){o!==void 0&&(o=t()),e.call(this,n,r,i,o)},function(){Vt.prototype.put=e}},yO=function(t){sO(t)};fO();const wO=Object.freeze(Object.defineProperty({__proto__:null,DataSnapshot:Pr,Database:RE,OnDisconnect:SE,QueryConstraint:Yt,TransactionResult:OE,_QueryImpl:Tt,_QueryParams:Au,_ReferenceImpl:Kt,_TEST_ACCESS_forceRestClient:yO,_TEST_ACCESS_hijackHash:_O,_repoManagerDatabaseFromApp:TE,_setSDKVersion:sw,_validatePathString:Bu,_validateWritablePath:sn,child:hi,connectDatabaseEmulator:PE,enableLogging:hO,endAt:LP,endBefore:FP,equalTo:eO,forceLongPolling:lO,forceWebSockets:aO,get:RP,getDatabase:uO,goOffline:cO,goOnline:dO,increment:gO,limitToFirst:HP,limitToLast:WP,off:DP,onChildAdded:NP,onChildChanged:PP,onChildMoved:OP,onChildRemoved:AP,onDisconnect:CP,onValue:xE,orderByChild:GP,orderByKey:KP,orderByPriority:qP,orderByValue:JP,push:xP,query:tO,ref:CE,refFromURL:SP,remove:kP,runTransaction:vO,serverTimestamp:mO,set:Fp,setPriority:bP,setWithPriority:IP,startAfter:UP,startAt:$P,update:TP},Symbol.toStringTag,{value:"Module"})),EO={apiKey:"AIzaSyAmrboSjyDCN8_KVTNFgYn_LQ0OeNqjtkc",authDomain:"agrobimedatos.firebaseapp.com",databaseURL:"https://agrobimedatos-default-rtdb.firebaseio.com",projectId:"agrobimedatos",storageBucket:"agrobimedatos.appspot.com",messagingSenderId:"376110261171",appId:"1:376110261171:web:80d3e641ddc3e36b8de1c6"},SO=b0(EO),ad=bT(SO),CO=wO,xO=()=>{const t=JSON.parse(localStorage.getItem("user"));return{logged:!!t,user:t}},kO=({children:t})=>{const[e,n]=S.exports.useReducer(Kx,{},xO),r=async s=>{const a={type:is.login,payload:s};localStorage.setItem("user",JSON.stringify(s));try{await lI(ad,s.email,s.password),n(a)}catch(l){throw localStorage.removeItem("user"),new Error(l.code)}},i=async()=>{const s={type:is.logout};localStorage.removeItem("user"),await hI(ad),n(s)},o=async s=>{const a={type:is.login,payload:s};localStorage.setItem("user",JSON.stringify(s));try{await uI(ad,s.email,s.password),n(a)}catch(l){throw localStorage.removeItem("user"),new Error(l.code)}};return k(vi.Provider,{value:{...e,register:r,logout:i,login:o},children:t})},$p=()=>k(Bn,{children:k("div",{className:"bg-dark text-light text-center fixed-bottom py-3",children:k("span",{children:" Desarrollado por Agrobime "})})}),AE=()=>{const{user:t}=S.exports.useContext(vi);return k(Bn,{children:k("div",{className:"container-lg text-center",children:ee("h2",{children:["Bienvenido ",k("span",{className:"text-success",children:t==null?void 0:t.email}),"!"]})})})};var jp={exports:{}},we={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up=Symbol.for("react.element"),zp=Symbol.for("react.portal"),Xu=Symbol.for("react.fragment"),Ju=Symbol.for("react.strict_mode"),Zu=Symbol.for("react.profiler"),ec=Symbol.for("react.provider"),tc=Symbol.for("react.context"),bO=Symbol.for("react.server_context"),nc=Symbol.for("react.forward_ref"),rc=Symbol.for("react.suspense"),ic=Symbol.for("react.suspense_list"),oc=Symbol.for("react.memo"),sc=Symbol.for("react.lazy"),IO=Symbol.for("react.offscreen"),DE;DE=Symbol.for("react.module.reference");function qt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Up:switch(t=t.type,t){case Xu:case Zu:case Ju:case rc:case ic:return t;default:switch(t=t&&t.$$typeof,t){case bO:case tc:case nc:case sc:case oc:case ec:return t;default:return e}}case zp:return e}}}we.ContextConsumer=tc;we.ContextProvider=ec;we.Element=Up;we.ForwardRef=nc;we.Fragment=Xu;we.Lazy=sc;we.Memo=oc;we.Portal=zp;we.Profiler=Zu;we.StrictMode=Ju;we.Suspense=rc;we.SuspenseList=ic;we.isAsyncMode=function(){return!1};we.isConcurrentMode=function(){return!1};we.isContextConsumer=function(t){return qt(t)===tc};we.isContextProvider=function(t){return qt(t)===ec};we.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Up};we.isForwardRef=function(t){return qt(t)===nc};we.isFragment=function(t){return qt(t)===Xu};we.isLazy=function(t){return qt(t)===sc};we.isMemo=function(t){return qt(t)===oc};we.isPortal=function(t){return qt(t)===zp};we.isProfiler=function(t){return qt(t)===Zu};we.isStrictMode=function(t){return qt(t)===Ju};we.isSuspense=function(t){return qt(t)===rc};we.isSuspenseList=function(t){return qt(t)===ic};we.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Xu||t===Zu||t===Ju||t===rc||t===ic||t===IO||typeof t=="object"&&t!==null&&(t.$$typeof===sc||t.$$typeof===oc||t.$$typeof===ec||t.$$typeof===tc||t.$$typeof===nc||t.$$typeof===DE||t.getModuleId!==void 0)};we.typeOf=qt;(function(t){t.exports=we})(jp);function TO(t){function e(A,y,U,N,C){for(var Q=0,O=0,K=0,te=0,oe,Y,Re=0,je=0,se,Ue=se=oe=0,he=0,ae=0,In=0,Ne=0,Xt=U.length,$t=Xt-1,at,q="",Se="",Wn="",Vn="",Et;he<Xt;){if(Y=U.charCodeAt(he),he===$t&&O+te+K+Q!==0&&(O!==0&&(Y=O===47?10:47),te=K=Q=0,Xt++,$t++),O+te+K+Q===0){if(he===$t&&(0<ae&&(q=q.replace(h,"")),0<q.trim().length)){switch(Y){case 32:case 9:case 59:case 13:case 10:break;default:q+=U.charAt(he)}Y=59}switch(Y){case 123:for(q=q.trim(),oe=q.charCodeAt(0),se=1,Ne=++he;he<Xt;){switch(Y=U.charCodeAt(he)){case 123:se++;break;case 125:se--;break;case 47:switch(Y=U.charCodeAt(he+1)){case 42:case 47:e:{for(Ue=he+1;Ue<$t;++Ue)switch(U.charCodeAt(Ue)){case 47:if(Y===42&&U.charCodeAt(Ue-1)===42&&he+2!==Ue){he=Ue+1;break e}break;case 10:if(Y===47){he=Ue+1;break e}}he=Ue}}break;case 91:Y++;case 40:Y++;case 34:case 39:for(;he++<$t&&U.charCodeAt(he)!==Y;);}if(se===0)break;he++}switch(se=U.substring(Ne,he),oe===0&&(oe=(q=q.replace(d,"").trim()).charCodeAt(0)),oe){case 64:switch(0<ae&&(q=q.replace(h,"")),Y=q.charCodeAt(1),Y){case 100:case 109:case 115:case 45:ae=y;break;default:ae=J}if(se=e(y,ae,se,Y,C+1),Ne=se.length,0<R&&(ae=n(J,q,In),Et=a(3,se,ae,y,z,G,Ne,Y,C,N),q=ae.join(""),Et!==void 0&&(Ne=(se=Et.trim()).length)===0&&(Y=0,se="")),0<Ne)switch(Y){case 115:q=q.replace(b,s);case 100:case 109:case 45:se=q+"{"+se+"}";break;case 107:q=q.replace(p,"$1 $2"),se=q+"{"+se+"}",se=X===1||X===2&&o("@"+se,3)?"@-webkit-"+se+"@"+se:"@"+se;break;default:se=q+se,N===112&&(se=(Se+=se,""))}else se="";break;default:se=e(y,n(y,q,In),se,N,C+1)}Wn+=se,se=In=ae=Ue=oe=0,q="",Y=U.charCodeAt(++he);break;case 125:case 59:if(q=(0<ae?q.replace(h,""):q).trim(),1<(Ne=q.length))switch(Ue===0&&(oe=q.charCodeAt(0),oe===45||96<oe&&123>oe)&&(Ne=(q=q.replace(" ",":")).length),0<R&&(Et=a(1,q,y,A,z,G,Se.length,N,C,N))!==void 0&&(Ne=(q=Et.trim()).length)===0&&(q="\0\0"),oe=q.charCodeAt(0),Y=q.charCodeAt(1),oe){case 0:break;case 64:if(Y===105||Y===99){Vn+=q+U.charAt(he);break}default:q.charCodeAt(Ne-1)!==58&&(Se+=i(q,oe,Y,q.charCodeAt(2)))}In=ae=Ue=oe=0,q="",Y=U.charCodeAt(++he)}}switch(Y){case 13:case 10:O===47?O=0:1+oe===0&&N!==107&&0<q.length&&(ae=1,q+="\0"),0<R*j&&a(0,q,y,A,z,G,Se.length,N,C,N),G=1,z++;break;case 59:case 125:if(O+te+K+Q===0){G++;break}default:switch(G++,at=U.charAt(he),Y){case 9:case 32:if(te+Q+O===0)switch(Re){case 44:case 58:case 9:case 32:at="";break;default:Y!==32&&(at=" ")}break;case 0:at="\\0";break;case 12:at="\\f";break;case 11:at="\\v";break;case 38:te+O+Q===0&&(ae=In=1,at="\f"+at);break;case 108:if(te+O+Q+V===0&&0<Ue)switch(he-Ue){case 2:Re===112&&U.charCodeAt(he-3)===58&&(V=Re);case 8:je===111&&(V=je)}break;case 58:te+O+Q===0&&(Ue=he);break;case 44:O+K+te+Q===0&&(ae=1,at+="\r");break;case 34:case 39:O===0&&(te=te===Y?0:te===0?Y:te);break;case 91:te+O+K===0&&Q++;break;case 93:te+O+K===0&&Q--;break;case 41:te+O+Q===0&&K--;break;case 40:if(te+O+Q===0){if(oe===0)switch(2*Re+3*je){case 533:break;default:oe=1}K++}break;case 64:O+K+te+Q+Ue+se===0&&(se=1);break;case 42:case 47:if(!(0<te+Q+K))switch(O){case 0:switch(2*Y+3*U.charCodeAt(he+1)){case 235:O=47;break;case 220:Ne=he,O=42}break;case 42:Y===47&&Re===42&&Ne+2!==he&&(U.charCodeAt(Ne+2)===33&&(Se+=U.substring(Ne,he+1)),at="",O=0)}}O===0&&(q+=at)}je=Re,Re=Y,he++}if(Ne=Se.length,0<Ne){if(ae=y,0<R&&(Et=a(2,Se,ae,A,z,G,Ne,N,C,N),Et!==void 0&&(Se=Et).length===0))return Vn+Se+Wn;if(Se=ae.join(",")+"{"+Se+"}",X*V!==0){switch(X!==2||o(Se,2)||(V=0),V){case 111:Se=Se.replace(w,":-moz-$1")+Se;break;case 112:Se=Se.replace(v,"::-webkit-input-$1")+Se.replace(v,"::-moz-$1")+Se.replace(v,":-ms-input-$1")+Se}V=0}}return Vn+Se+Wn}function n(A,y,U){var N=y.trim().split(E);y=N;var C=N.length,Q=A.length;switch(Q){case 0:case 1:var O=0;for(A=Q===0?"":A[0]+" ";O<C;++O)y[O]=r(A,y[O],U).trim();break;default:var K=O=0;for(y=[];O<C;++O)for(var te=0;te<Q;++te)y[K++]=r(A[te]+" ",N[O],U).trim()}return y}function r(A,y,U){var N=y.charCodeAt(0);switch(33>N&&(N=(y=y.trim()).charCodeAt(0)),N){case 38:return y.replace(g,"$1"+A.trim());case 58:return A.trim()+y.replace(g,"$1"+A.trim());default:if(0<1*U&&0<y.indexOf("\f"))return y.replace(g,(A.charCodeAt(0)===58?"":"$1")+A.trim())}return A+y}function i(A,y,U,N){var C=A+";",Q=2*y+3*U+4*N;if(Q===944){A=C.indexOf(":",9)+1;var O=C.substring(A,C.length-1).trim();return O=C.substring(0,A).trim()+O+";",X===1||X===2&&o(O,1)?"-webkit-"+O+O:O}if(X===0||X===2&&!o(C,1))return C;switch(Q){case 1015:return C.charCodeAt(10)===97?"-webkit-"+C+C:C;case 951:return C.charCodeAt(3)===116?"-webkit-"+C+C:C;case 963:return C.charCodeAt(5)===110?"-webkit-"+C+C:C;case 1009:if(C.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+C+C;case 978:return"-webkit-"+C+"-moz-"+C+C;case 1019:case 983:return"-webkit-"+C+"-moz-"+C+"-ms-"+C+C;case 883:if(C.charCodeAt(8)===45)return"-webkit-"+C+C;if(0<C.indexOf("image-set(",11))return C.replace(B,"$1-webkit-$2")+C;break;case 932:if(C.charCodeAt(4)===45)switch(C.charCodeAt(5)){case 103:return"-webkit-box-"+C.replace("-grow","")+"-webkit-"+C+"-ms-"+C.replace("grow","positive")+C;case 115:return"-webkit-"+C+"-ms-"+C.replace("shrink","negative")+C;case 98:return"-webkit-"+C+"-ms-"+C.replace("basis","preferred-size")+C}return"-webkit-"+C+"-ms-"+C+C;case 964:return"-webkit-"+C+"-ms-flex-"+C+C;case 1023:if(C.charCodeAt(8)!==99)break;return O=C.substring(C.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+O+"-webkit-"+C+"-ms-flex-pack"+O+C;case 1005:return m.test(C)?C.replace(f,":-webkit-")+C.replace(f,":-moz-")+C:C;case 1e3:switch(O=C.substring(13).trim(),y=O.indexOf("-")+1,O.charCodeAt(0)+O.charCodeAt(y)){case 226:O=C.replace(I,"tb");break;case 232:O=C.replace(I,"tb-rl");break;case 220:O=C.replace(I,"lr");break;default:return C}return"-webkit-"+C+"-ms-"+O+C;case 1017:if(C.indexOf("sticky",9)===-1)break;case 975:switch(y=(C=A).length-10,O=(C.charCodeAt(y)===33?C.substring(0,y):C).substring(A.indexOf(":",7)+1).trim(),Q=O.charCodeAt(0)+(O.charCodeAt(7)|0)){case 203:if(111>O.charCodeAt(8))break;case 115:C=C.replace(O,"-webkit-"+O)+";"+C;break;case 207:case 102:C=C.replace(O,"-webkit-"+(102<Q?"inline-":"")+"box")+";"+C.replace(O,"-webkit-"+O)+";"+C.replace(O,"-ms-"+O+"box")+";"+C}return C+";";case 938:if(C.charCodeAt(5)===45)switch(C.charCodeAt(6)){case 105:return O=C.replace("-items",""),"-webkit-"+C+"-webkit-box-"+O+"-ms-flex-"+O+C;case 115:return"-webkit-"+C+"-ms-flex-item-"+C.replace(T,"")+C;default:return"-webkit-"+C+"-ms-flex-line-pack"+C.replace("align-content","").replace(T,"")+C}break;case 973:case 989:if(C.charCodeAt(3)!==45||C.charCodeAt(4)===122)break;case 931:case 953:if(D.test(A)===!0)return(O=A.substring(A.indexOf(":")+1)).charCodeAt(0)===115?i(A.replace("stretch","fill-available"),y,U,N).replace(":fill-available",":stretch"):C.replace(O,"-webkit-"+O)+C.replace(O,"-moz-"+O.replace("fill-",""))+C;break;case 962:if(C="-webkit-"+C+(C.charCodeAt(5)===102?"-ms-"+C:"")+C,U+N===211&&C.charCodeAt(13)===105&&0<C.indexOf("transform",10))return C.substring(0,C.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+C}return C}function o(A,y){var U=A.indexOf(y===1?":":"{"),N=A.substring(0,y!==3?U:10);return U=A.substring(U+1,A.length-1),P(y!==2?N:N.replace($,"$1"),U,y)}function s(A,y){var U=i(y,y.charCodeAt(0),y.charCodeAt(1),y.charCodeAt(2));return U!==y+";"?U.replace(x," or ($1)").substring(4):"("+y+")"}function a(A,y,U,N,C,Q,O,K,te,oe){for(var Y=0,Re=y,je;Y<R;++Y)switch(je=ke[Y].call(c,A,Re,U,N,C,Q,O,K,te,oe)){case void 0:case!1:case!0:case null:break;default:Re=je}if(Re!==y)return Re}function l(A){switch(A){case void 0:case null:R=ke.length=0;break;default:if(typeof A=="function")ke[R++]=A;else if(typeof A=="object")for(var y=0,U=A.length;y<U;++y)l(A[y]);else j=!!A|0}return l}function u(A){return A=A.prefix,A!==void 0&&(P=null,A?typeof A!="function"?X=1:(X=2,P=A):X=0),u}function c(A,y){var U=A;if(33>U.charCodeAt(0)&&(U=U.trim()),H=U,U=[H],0<R){var N=a(-1,y,U,U,z,G,0,0,0,0);N!==void 0&&typeof N=="string"&&(y=N)}var C=e(J,U,y,0,0);return 0<R&&(N=a(-2,C,U,U,z,G,C.length,0,0,0),N!==void 0&&(C=N)),H="",V=0,G=z=1,C}var d=/^\0+/g,h=/[\0\r\f]/g,f=/: */g,m=/zoo|gra/,_=/([,: ])(transform)/g,E=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,w=/:(read-only)/g,I=/[svh]\w+-[tblr]{2}/,b=/\(\s*(.*)\s*\)/g,x=/([\s\S]*?);/g,T=/-self|flex-/g,$=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,B=/([^-])(image-set\()/,G=1,z=1,V=0,X=1,J=[],ke=[],R=0,P=null,j=0,H="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var RO={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function NO(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var PO=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Pv=NO(function(t){return PO.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),LE={exports:{}},Ee={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rt=typeof Symbol=="function"&&Symbol.for,Hp=rt?Symbol.for("react.element"):60103,Bp=rt?Symbol.for("react.portal"):60106,ac=rt?Symbol.for("react.fragment"):60107,lc=rt?Symbol.for("react.strict_mode"):60108,uc=rt?Symbol.for("react.profiler"):60114,cc=rt?Symbol.for("react.provider"):60109,dc=rt?Symbol.for("react.context"):60110,Wp=rt?Symbol.for("react.async_mode"):60111,hc=rt?Symbol.for("react.concurrent_mode"):60111,fc=rt?Symbol.for("react.forward_ref"):60112,pc=rt?Symbol.for("react.suspense"):60113,OO=rt?Symbol.for("react.suspense_list"):60120,mc=rt?Symbol.for("react.memo"):60115,gc=rt?Symbol.for("react.lazy"):60116,AO=rt?Symbol.for("react.block"):60121,DO=rt?Symbol.for("react.fundamental"):60117,LO=rt?Symbol.for("react.responder"):60118,MO=rt?Symbol.for("react.scope"):60119;function Ft(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Hp:switch(t=t.type,t){case Wp:case hc:case ac:case uc:case lc:case pc:return t;default:switch(t=t&&t.$$typeof,t){case dc:case fc:case gc:case mc:case cc:return t;default:return e}}case Bp:return e}}}function ME(t){return Ft(t)===hc}Ee.AsyncMode=Wp;Ee.ConcurrentMode=hc;Ee.ContextConsumer=dc;Ee.ContextProvider=cc;Ee.Element=Hp;Ee.ForwardRef=fc;Ee.Fragment=ac;Ee.Lazy=gc;Ee.Memo=mc;Ee.Portal=Bp;Ee.Profiler=uc;Ee.StrictMode=lc;Ee.Suspense=pc;Ee.isAsyncMode=function(t){return ME(t)||Ft(t)===Wp};Ee.isConcurrentMode=ME;Ee.isContextConsumer=function(t){return Ft(t)===dc};Ee.isContextProvider=function(t){return Ft(t)===cc};Ee.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Hp};Ee.isForwardRef=function(t){return Ft(t)===fc};Ee.isFragment=function(t){return Ft(t)===ac};Ee.isLazy=function(t){return Ft(t)===gc};Ee.isMemo=function(t){return Ft(t)===mc};Ee.isPortal=function(t){return Ft(t)===Bp};Ee.isProfiler=function(t){return Ft(t)===uc};Ee.isStrictMode=function(t){return Ft(t)===lc};Ee.isSuspense=function(t){return Ft(t)===pc};Ee.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ac||t===hc||t===uc||t===lc||t===pc||t===OO||typeof t=="object"&&t!==null&&(t.$$typeof===gc||t.$$typeof===mc||t.$$typeof===cc||t.$$typeof===dc||t.$$typeof===fc||t.$$typeof===DO||t.$$typeof===LO||t.$$typeof===MO||t.$$typeof===AO)};Ee.typeOf=Ft;(function(t){t.exports=Ee})(LE);var Vp=LE.exports,FO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$O={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},jO={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},FE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gp={};Gp[Vp.ForwardRef]=jO;Gp[Vp.Memo]=FE;function Ov(t){return Vp.isMemo(t)?FE:Gp[t.$$typeof]||FO}var UO=Object.defineProperty,zO=Object.getOwnPropertyNames,Av=Object.getOwnPropertySymbols,HO=Object.getOwnPropertyDescriptor,BO=Object.getPrototypeOf,Dv=Object.prototype;function $E(t,e,n){if(typeof e!="string"){if(Dv){var r=BO(e);r&&r!==Dv&&$E(t,r,n)}var i=zO(e);Av&&(i=i.concat(Av(e)));for(var o=Ov(t),s=Ov(e),a=0;a<i.length;++a){var l=i[a];if(!$O[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=HO(e,l);try{UO(t,l,u)}catch{}}}}return t}var WO=$E;function _n(){return(_n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var Lv=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},Mh=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!jp.exports.typeOf(t)},nu=Object.freeze([]),Cr=Object.freeze({});function uo(t){return typeof t=="function"}function Mv(t){return t.displayName||t.name||"Component"}function Qp(t){return t&&typeof t.styledComponentId=="string"}var co=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Kp=typeof window<"u"&&"HTMLElement"in window,VO=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function fi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var GO=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&fi(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,a=o;a<s;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),rl=new Map,ru=new Map,cs=1,Fa=function(t){if(rl.has(t))return rl.get(t);for(;ru.has(cs);)cs++;var e=cs++;return rl.set(t,e),ru.set(e,t),e},QO=function(t){return ru.get(t)},KO=function(t,e){e>=cs&&(cs=e+1),rl.set(t,e),ru.set(e,t)},YO="style["+co+'][data-styled-version="5.3.6"]',qO=new RegExp("^"+co+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),XO=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},JO=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var a=s.match(qO);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(KO(u,l),XO(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(s)}}},ZO=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},jE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(co))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(co,"active"),r.setAttribute("data-styled-version","5.3.6");var s=ZO();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},eA=function(){function t(n){var r=this.element=jE(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var l=o[s];if(l.ownerNode===i)return l}fi(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),tA=function(){function t(n){var r=this.element=jE(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),nA=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),Fv=Kp,rA={isServer:!Kp,useCSSOMInjection:!VO},UE=function(){function t(n,r,i){n===void 0&&(n=Cr),r===void 0&&(r={}),this.options=_n({},rA,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Kp&&Fv&&(Fv=!1,function(o){for(var s=document.querySelectorAll(YO),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(co)!=="active"&&(JO(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Fa(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(_n({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new nA(s):o?new eA(s):new tA(s),new GO(n)));var n,r,i,o,s},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Fa(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Fa(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Fa(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var a=QO(s);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(s);if(l&&u&&l.size){var c=co+".g"+s+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(h){h.length>0&&(d+=h+",")}),o+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},t}(),iA=/(a)(d)/gi,$v=function(t){return String.fromCharCode(t+(t>25?39:97))};function Fh(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=$v(e%52)+n;return($v(e%52)+n).replace(iA,"$1-$2")}var $i=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},zE=function(t){return $i(5381,t)};function oA(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(uo(n)&&!Qp(n))return!1}return!0}var sA=zE("5.3.6"),aA=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&oA(e),this.componentId=n,this.baseHash=$i(sA,n),this.baseStyle=r,UE.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=ho(this.rules,e,n,r).join(""),a=Fh($i(this.baseHash,s)>>>0);if(!n.hasNameForId(i,a)){var l=r(s,"."+a,void 0,i);n.insertRules(i,a,l)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=$i(this.baseHash,r.hash),d="",h=0;h<u;h++){var f=this.rules[h];if(typeof f=="string")d+=f;else if(f){var m=ho(f,e,n,r),_=Array.isArray(m)?m.join(""):m;c=$i(c,_+h),d+=_}}if(d){var E=Fh(c>>>0);if(!n.hasNameForId(i,E)){var g=r(d,"."+E,void 0,i);n.insertRules(i,E,g)}o.push(E)}}return o.join(" ")},t}(),lA=/^\s*\/\/.*$/gm,uA=[":","[",".","#"];function cA(t){var e,n,r,i,o=t===void 0?Cr:t,s=o.options,a=s===void 0?Cr:s,l=o.plugins,u=l===void 0?nu:l,c=new TO(a),d=[],h=function(_){function E(g){if(g)try{_(g+"}")}catch{}}return function(g,p,v,w,I,b,x,T,$,D){switch(g){case 1:if($===0&&p.charCodeAt(0)===64)return _(p+";"),"";break;case 2:if(T===0)return p+"/*|*/";break;case 3:switch(T){case 102:case 112:return _(v[0]+p),"";default:return p+(D===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(E)}}}(function(_){d.push(_)}),f=function(_,E,g){return E===0&&uA.indexOf(g[n.length])!==-1||g.match(i)?_:"."+e};function m(_,E,g,p){p===void 0&&(p="&");var v=_.replace(lA,""),w=E&&g?g+" "+E+" { "+v+" }":v;return e=p,n=E,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(g||!E?"":E,w)}return c.use([].concat(u,[function(_,E,g){_===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,f))},h,function(_){if(_===-2){var E=d;return d=[],E}}])),m.hash=u.length?u.reduce(function(_,E){return E.name||fi(15),$i(_,E.name)},5381).toString():"",m}var HE=ce.createContext();HE.Consumer;var BE=ce.createContext(),dA=(BE.Consumer,new UE),$h=cA();function hA(){return S.exports.useContext(HE)||dA}function fA(){return S.exports.useContext(BE)||$h}var pA=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=$h);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return fi(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=$h),this.name+e.hash},t}(),mA=/([A-Z])/,gA=/([A-Z])/g,vA=/^ms-/,_A=function(t){return"-"+t.toLowerCase()};function jv(t){return mA.test(t)?t.replace(gA,_A).replace(vA,"-ms-"):t}var Uv=function(t){return t==null||t===!1||t===""};function ho(t,e,n,r){if(Array.isArray(t)){for(var i,o=[],s=0,a=t.length;s<a;s+=1)(i=ho(t[s],e,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Uv(t))return"";if(Qp(t))return"."+t.styledComponentId;if(uo(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return ho(l,e,n,r)}var u;return t instanceof pA?n?(t.inject(n,r),t.getName(r)):t:Mh(t)?function c(d,h){var f,m,_=[];for(var E in d)d.hasOwnProperty(E)&&!Uv(d[E])&&(Array.isArray(d[E])&&d[E].isCss||uo(d[E])?_.push(jv(E)+":",d[E],";"):Mh(d[E])?_.push.apply(_,c(d[E],E)):_.push(jv(E)+": "+(f=E,(m=d[E])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||f in RO?String(m).trim():m+"px")+";"));return h?[h+" {"].concat(_,["}"]):_}(t):t.toString()}var zv=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function qe(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return uo(t)||Mh(t)?zv(ho(Lv(nu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:zv(ho(Lv(t,n)))}var yA=function(t,e,n){return n===void 0&&(n=Cr),t.theme!==n.theme&&t.theme||e||n.theme},wA=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,EA=/(^-|-$)/g;function ld(t){return t.replace(wA,"-").replace(EA,"")}var SA=function(t){return Fh(zE(t)>>>0)};function $a(t){return typeof t=="string"&&!0}var jh=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},CA=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function xA(t,e,n){var r=t[n];jh(e)&&jh(r)?WE(r,e):t[n]=e}function WE(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(jh(s))for(var a in s)CA(a)&&xA(t,s[a],a)}return t}var iu=ce.createContext();iu.Consumer;function kA(t){var e=S.exports.useContext(iu),n=S.exports.useMemo(function(){return function(r,i){if(!r)return fi(14);if(uo(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?fi(8):i?_n({},i,{},r):r}(t.theme,e)},[t.theme,e]);return t.children?ce.createElement(iu.Provider,{value:n},t.children):null}var ud={};function VE(t,e,n){var r=Qp(t),i=!$a(t),o=e.attrs,s=o===void 0?nu:o,a=e.componentId,l=a===void 0?function(p,v){var w=typeof p!="string"?"sc":ld(p);ud[w]=(ud[w]||0)+1;var I=w+"-"+SA("5.3.6"+w+ud[w]);return v?v+"-"+I:I}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(p){return $a(p)?"styled."+p:"Styled("+Mv(p)+")"}(t):u,d=e.displayName&&e.componentId?ld(e.displayName)+"-"+e.componentId:e.componentId||l,h=r&&t.attrs?Array.prototype.concat(t.attrs,s).filter(Boolean):s,f=e.shouldForwardProp;r&&t.shouldForwardProp&&(f=e.shouldForwardProp?function(p,v,w){return t.shouldForwardProp(p,v,w)&&e.shouldForwardProp(p,v,w)}:t.shouldForwardProp);var m,_=new aA(n,d,r?t.componentStyle:void 0),E=_.isStatic&&s.length===0,g=function(p,v){return function(w,I,b,x){var T=w.attrs,$=w.componentStyle,D=w.defaultProps,B=w.foldedComponentIds,G=w.shouldForwardProp,z=w.styledComponentId,V=w.target,X=function(N,C,Q){N===void 0&&(N=Cr);var O=_n({},C,{theme:N}),K={};return Q.forEach(function(te){var oe,Y,Re,je=te;for(oe in uo(je)&&(je=je(O)),je)O[oe]=K[oe]=oe==="className"?(Y=K[oe],Re=je[oe],Y&&Re?Y+" "+Re:Y||Re):je[oe]}),[O,K]}(yA(I,S.exports.useContext(iu),D)||Cr,I,T),J=X[0],ke=X[1],R=function(N,C,Q,O){var K=hA(),te=fA(),oe=C?N.generateAndInjectStyles(Cr,K,te):N.generateAndInjectStyles(Q,K,te);return oe}($,x,J),P=b,j=ke.$as||I.$as||ke.as||I.as||V,H=$a(j),A=ke!==I?_n({},I,{},ke):I,y={};for(var U in A)U[0]!=="$"&&U!=="as"&&(U==="forwardedAs"?y.as=A[U]:(G?G(U,Pv,j):!H||Pv(U))&&(y[U]=A[U]));return I.style&&ke.style!==I.style&&(y.style=_n({},I.style,{},ke.style)),y.className=Array.prototype.concat(B,z,R!==z?R:null,I.className,ke.className).filter(Boolean).join(" "),y.ref=P,S.exports.createElement(j,y)}(m,p,v,E)};return g.displayName=c,(m=ce.forwardRef(g)).attrs=h,m.componentStyle=_,m.displayName=c,m.shouldForwardProp=f,m.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):nu,m.styledComponentId=d,m.target=r?t.target:t,m.withComponent=function(p){var v=e.componentId,w=function(b,x){if(b==null)return{};var T,$,D={},B=Object.keys(b);for($=0;$<B.length;$++)T=B[$],x.indexOf(T)>=0||(D[T]=b[T]);return D}(e,["componentId"]),I=v&&v+"-"+($a(p)?p:ld(Mv(p)));return VE(p,_n({},w,{attrs:h,componentId:I}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?WE({},t.defaultProps,p):p}}),m.toString=function(){return"."+m.styledComponentId},i&&WO(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var Uh=function(t){return function e(n,r,i){if(i===void 0&&(i=Cr),!jp.exports.isValidElementType(r))return fi(1,String(r));var o=function(){return n(r,i,qe.apply(void 0,arguments))};return o.withConfig=function(s){return e(n,r,_n({},i,{},s))},o.attrs=function(s){return e(n,r,_n({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(VE,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Uh[t]=Uh(t)});const fe=Uh;var xr;function fo(t,e){return t[e]}function zh(t,e){return e.split(".").reduce((n,r)=>{const i=r.match(/[^\]\\[.]+/g);if(i&&i.length>1)for(let o=0;o<i.length;o++)return n[i[o]][i[o+1]];return n[r]},t)}function bA(t=[],e,n=0){return[...t.slice(0,n),e,...t.slice(n)]}function IA(t=[],e,n="id"){const r=t.slice(),i=fo(e,n);return i?r.splice(r.findIndex(o=>fo(o,n)===i),1):r.splice(r.findIndex(o=>o===e),1),r}function Hv(t){return t.map((e,n)=>{const r=Object.assign(Object.assign({},e),{sortable:e.sortable||!!e.sortFunction||void 0});return e.id||(r.id=n+1),r})}function ds(t,e){return Math.ceil(t/e)}function cd(t,e){return Math.min(t,e)}(function(t){t.ASC="asc",t.DESC="desc"})(xr||(xr={}));const Ge=()=>null;function GE(t,e=[],n=[]){let r={},i=[...n];return e.length&&e.forEach(o=>{if(!o.when||typeof o.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');o.when(t)&&(r=o.style||{},o.classNames&&(i=[...i,...o.classNames]),typeof o.style=="function"&&(r=o.style(t)||{}))}),{style:r,classNames:i.join(" ")}}function il(t,e=[],n="id"){const r=fo(t,n);return r?e.some(i=>fo(i,n)===r):e.some(i=>i===t)}function ja(t,e){return e?t.findIndex(n=>hs(n.id,e)):-1}function hs(t,e){return t==e}function TA(t,e){const n=!t.toggleOnSelectedRowsChange;switch(e.type){case"SELECT_ALL_ROWS":{const{keyField:r,rows:i,rowCount:o,mergeSelections:s}=e,a=!t.allSelected,l=!t.toggleOnSelectedRowsChange;if(s){const u=a?[...t.selectedRows,...i.filter(c=>!il(c,t.selectedRows,r))]:t.selectedRows.filter(c=>!il(c,i,r));return Object.assign(Object.assign({},t),{allSelected:a,selectedCount:u.length,selectedRows:u,toggleOnSelectedRowsChange:l})}return Object.assign(Object.assign({},t),{allSelected:a,selectedCount:a?o:0,selectedRows:a?i:[],toggleOnSelectedRowsChange:l})}case"SELECT_SINGLE_ROW":{const{keyField:r,row:i,isSelected:o,rowCount:s,singleSelect:a}=e;return a?o?Object.assign(Object.assign({},t),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},t),{selectedCount:1,allSelected:!1,selectedRows:[i],toggleOnSelectedRowsChange:n}):o?Object.assign(Object.assign({},t),{selectedCount:t.selectedRows.length>0?t.selectedRows.length-1:0,allSelected:!1,selectedRows:IA(t.selectedRows,i,r),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},t),{selectedCount:t.selectedRows.length+1,allSelected:t.selectedRows.length+1===s,selectedRows:bA(t.selectedRows,i),toggleOnSelectedRowsChange:n})}case"SELECT_MULTIPLE_ROWS":{const{keyField:r,selectedRows:i,totalRows:o,mergeSelections:s}=e;if(s){const a=[...t.selectedRows,...i.filter(l=>!il(l,t.selectedRows,r))];return Object.assign(Object.assign({},t),{selectedCount:a.length,allSelected:!1,selectedRows:a,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},t),{selectedCount:i.length,allSelected:i.length===o,selectedRows:i,toggleOnSelectedRowsChange:n})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:r}=e;return Object.assign(Object.assign({},t),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:r})}case"SORT_CHANGE":{const{sortDirection:r,selectedColumn:i,clearSelectedOnSort:o}=e;return Object.assign(Object.assign(Object.assign({},t),{selectedColumn:i,sortDirection:r,currentPage:1}),o&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:r,paginationServer:i,visibleOnly:o,persistSelectedOnPageChange:s}=e,a=i&&s,l=i&&!s||o;return Object.assign(Object.assign(Object.assign(Object.assign({},t),{currentPage:r}),a&&{allSelected:!1}),l&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:r,page:i}=e;return Object.assign(Object.assign({},t),{currentPage:i,rowsPerPage:r})}}}const RA=qe`
	pointer-events: none;
	opacity: 0.4;
`,NA=fe.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:t})=>t&&RA};
	${({theme:t})=>t.table.style};
`,PA=qe`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,OA=fe.div`
	display: flex;
	width: 100%;
	${({fixedHeader:t})=>t&&PA};
	${({theme:t})=>t.head.style};
`,AA=fe.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:t})=>t.headRow.style};
	${({dense:t,theme:e})=>t&&e.headRow.denseStyle};
`,QE=(t,...e)=>qe`
		@media screen and (max-width: ${599}px) {
			${qe(t,...e)}
		}
	`,DA=(t,...e)=>qe`
		@media screen and (max-width: ${959}px) {
			${qe(t,...e)}
		}
	`,LA=(t,...e)=>qe`
		@media screen and (max-width: ${1280}px) {
			${qe(t,...e)}
		}
	`,MA=t=>(e,...n)=>qe`
				@media screen and (max-width: ${t}px) {
					${qe(e,...n)}
				}
			`,Io=fe.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:t,headCell:e})=>t[e?"headCells":"cells"].style};
	${({noPadding:t})=>t&&"padding: 0"};
`,KE=fe(Io)`
	flex-grow: ${({button:t,grow:e})=>e===0||t?0:e||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:t})=>t||"100%"};
	min-width: ${({minWidth:t})=>t||"100px"};
	${({width:t})=>t&&qe`
			min-width: ${t};
			max-width: ${t};
		`};
	${({right:t})=>t&&"justify-content: flex-end"};
	${({button:t,center:e})=>(e||t)&&"justify-content: center"};
	${({compact:t,button:e})=>(t||e)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:t})=>t&&t==="sm"&&QE`
    display: none;
  `};
	${({hide:t})=>t&&t==="md"&&DA`
    display: none;
  `};
	${({hide:t})=>t&&t==="lg"&&LA`
    display: none;
  `};
	${({hide:t})=>t&&Number.isInteger(t)&&MA(t)`
    display: none;
  `};
`,FA=qe`
	div:first-child {
		white-space: ${({wrapCell:t})=>t?"normal":"nowrap"};
		overflow: ${({allowOverflow:t})=>t?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,$A=fe(KE).attrs(t=>({style:t.style}))`
	${({renderAsCell:t})=>!t&&FA};
	${({theme:t,isDragging:e})=>e&&t.cells.draggingStyle};
	${({cellStyle:t})=>t};
`;var jA=S.exports.memo(function({id:t,column:e,row:n,rowIndex:r,dataTag:i,isDragging:o,onDragStart:s,onDragOver:a,onDragEnd:l,onDragEnter:u,onDragLeave:c}){const{style:d,classNames:h}=GE(n,e.conditionalCellStyles,["rdt_TableCell"]);return S.exports.createElement($A,{id:t,"data-column-id":e.id,role:"cell",className:h,"data-tag":i,cellStyle:e.style,renderAsCell:!!e.cell,allowOverflow:e.allowOverflow,button:e.button,center:e.center,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,width:e.width,wrapCell:e.wrap,style:d,isDragging:o,onDragStart:s,onDragOver:a,onDragEnd:l,onDragEnter:u,onDragLeave:c},!e.cell&&S.exports.createElement("div",{"data-tag":i},function(f,m,_,E){if(!m)return null;if(typeof m!="string"&&typeof m!="function")throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return _&&typeof _=="function"?_(f,E):m&&typeof m=="function"?m(f,E):zh(f,m)}(n,e.selector,e.format,r)),e.cell&&e.cell(n,r,e,t))}),YE=S.exports.memo(function({name:t,component:e="input",componentOptions:n={style:{}},indeterminate:r=!1,checked:i=!1,disabled:o=!1,onClick:s=Ge}){const a=e,l=a!=="input"?n.style:(c=>Object.assign(Object.assign({fontSize:"18px"},!c&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(o),u=S.exports.useMemo(()=>function(c,...d){let h;return Object.keys(c).map(f=>c[f]).forEach((f,m)=>{typeof f=="function"&&(h=Object.assign(Object.assign({},c),{[Object.keys(c)[m]]:f(...d)}))}),h||c}(n,r),[n,r]);return S.exports.createElement(a,Object.assign({type:"checkbox",ref:c=>{c&&(c.indeterminate=r)},style:l,onClick:o?Ge:s,name:t,"aria-label":t,checked:i,disabled:o},u,{onChange:Ge}))});const UA=fe(Io)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function zA({name:t,keyField:e,row:n,rowCount:r,selected:i,selectableRowsComponent:o,selectableRowsComponentProps:s,selectableRowsSingle:a,selectableRowDisabled:l,onSelectedRow:u}){const c=!(!l||!l(n));return S.exports.createElement(UA,{onClick:d=>d.stopPropagation(),className:"rdt_TableCell",noPadding:!0},S.exports.createElement(YE,{name:t,component:o,componentOptions:s,checked:i,"aria-checked":i,onClick:()=>{u({type:"SELECT_SINGLE_ROW",row:n,isSelected:i,keyField:e,rowCount:r,singleSelect:a})},disabled:c}))}const HA=fe.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:t})=>t.expanderButton.style};
`;function BA({disabled:t=!1,expanded:e=!1,expandableIcon:n,id:r,row:i,onToggled:o}){const s=e?n.expanded:n.collapsed;return S.exports.createElement(HA,{"aria-disabled":t,onClick:()=>o&&o(i),"data-testid":`expander-button-${r}`,disabled:t,"aria-label":e?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const WA=fe(Io)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:t})=>t.expanderCell.style};
`;function VA({row:t,expanded:e=!1,expandableIcon:n,id:r,onToggled:i,disabled:o=!1}){return S.exports.createElement(WA,{onClick:s=>s.stopPropagation(),noPadding:!0},S.exports.createElement(BA,{id:r,row:t,expanded:e,expandableIcon:n,disabled:o,onToggled:i}))}const GA=fe.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:t})=>t.expanderRow.style};
	${({extendedRowStyle:t})=>t};
`;var QA=S.exports.memo(function({data:t,ExpanderComponent:e,expanderComponentProps:n,extendedRowStyle:r,extendedClassNames:i}){const o=["rdt_ExpanderRow",...i.split(" ").filter(s=>s!=="rdt_TableRow")].join(" ");return S.exports.createElement(GA,{className:o,extendedRowStyle:r},S.exports.createElement(e,Object.assign({data:t},n)))}),ou,Hh,Bv;(function(t){t.LTR="ltr",t.RTL="rtl",t.AUTO="auto"})(ou||(ou={})),function(t){t.LEFT="left",t.RIGHT="right",t.CENTER="center"}(Hh||(Hh={})),function(t){t.SM="sm",t.MD="md",t.LG="lg"}(Bv||(Bv={}));const KA=qe`
	&:hover {
		${({highlightOnHover:t,theme:e})=>t&&e.rows.highlightOnHoverStyle};
	}
`,YA=qe`
	&:hover {
		cursor: pointer;
	}
`,qA=fe.div.attrs(t=>({style:t.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:t})=>t.rows.style};
	${({dense:t,theme:e})=>t&&e.rows.denseStyle};
	${({striped:t,theme:e})=>t&&e.rows.stripedStyle};
	${({highlightOnHover:t})=>t&&KA};
	${({pointerOnHover:t})=>t&&YA};
	${({selected:t,theme:e})=>t&&e.rows.selectedHighlightStyle};
`;function XA({columns:t=[],conditionalRowStyles:e=[],defaultExpanded:n=!1,defaultExpanderDisabled:r=!1,dense:i=!1,expandableIcon:o,expandableRows:s=!1,expandableRowsComponent:a,expandableRowsComponentProps:l,expandableRowsHideExpander:u,expandOnRowClicked:c=!1,expandOnRowDoubleClicked:d=!1,highlightOnHover:h=!1,id:f,expandableInheritConditionalStyles:m,keyField:_,onRowClicked:E=Ge,onRowDoubleClicked:g=Ge,onRowMouseEnter:p=Ge,onRowMouseLeave:v=Ge,onRowExpandToggled:w=Ge,onSelectedRow:I=Ge,pointerOnHover:b=!1,row:x,rowCount:T,rowIndex:$,selectableRowDisabled:D=null,selectableRows:B=!1,selectableRowsComponent:G,selectableRowsComponentProps:z,selectableRowsHighlight:V=!1,selectableRowsSingle:X=!1,selected:J,striped:ke=!1,draggingColumnId:R,onDragStart:P,onDragOver:j,onDragEnd:H,onDragEnter:A,onDragLeave:y}){const[U,N]=S.exports.useState(n);S.exports.useEffect(()=>{N(n)},[n]);const C=S.exports.useCallback(()=>{N(!U),w(!U,x)},[U,w,x]),Q=b||s&&(c||d),O=S.exports.useCallback(ae=>{ae.target&&ae.target.getAttribute("data-tag")==="allowRowEvents"&&(E(x,ae),!r&&s&&c&&C())},[r,c,s,C,E,x]),K=S.exports.useCallback(ae=>{ae.target&&ae.target.getAttribute("data-tag")==="allowRowEvents"&&(g(x,ae),!r&&s&&d&&C())},[r,d,s,C,g,x]),te=S.exports.useCallback(ae=>{p(x,ae)},[p,x]),oe=S.exports.useCallback(ae=>{v(x,ae)},[v,x]),Y=fo(x,_),{style:Re,classNames:je}=GE(x,e,["rdt_TableRow"]),se=V&&J,Ue=m?Re:{},he=ke&&$%2==0;return S.exports.createElement(S.exports.Fragment,null,S.exports.createElement(qA,{id:`row-${f}`,role:"row",striped:he,highlightOnHover:h,pointerOnHover:!r&&Q,dense:i,onClick:O,onDoubleClick:K,onMouseEnter:te,onMouseLeave:oe,className:je,selected:se,style:Re},B&&S.exports.createElement(zA,{name:`select-row-${Y}`,keyField:_,row:x,rowCount:T,selected:J,selectableRowsComponent:G,selectableRowsComponentProps:z,selectableRowDisabled:D,selectableRowsSingle:X,onSelectedRow:I}),s&&!u&&S.exports.createElement(VA,{id:Y,expandableIcon:o,expanded:U,row:x,onToggled:C,disabled:r}),t.map(ae=>ae.omit?null:S.exports.createElement(jA,{id:`cell-${ae.id}-${Y}`,key:`cell-${ae.id}-${Y}`,dataTag:ae.ignoreRowClick||ae.button?null:"allowRowEvents",column:ae,row:x,rowIndex:$,isDragging:hs(R,ae.id),onDragStart:P,onDragOver:j,onDragEnd:H,onDragEnter:A,onDragLeave:y}))),s&&U&&S.exports.createElement(QA,{key:`expander-${Y}`,data:x,extendedRowStyle:Ue,extendedClassNames:je,ExpanderComponent:a,expanderComponentProps:l}))}const JA=fe.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:t})=>t?"opacity: 1":"opacity: 0"};
	${({sortDirection:t})=>t==="desc"&&"transform: rotate(180deg)"};
`,ZA=({sortActive:t,sortDirection:e})=>ce.createElement(JA,{sortActive:t,sortDirection:e},"\u25B2"),eD=fe(KE)`
	${({button:t})=>t&&"text-align: center"};
	${({theme:t,isDragging:e})=>e&&t.headCells.draggingStyle};
`,tD=qe`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({sortActive:t})=>t?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({sortActive:t})=>!t&&qe`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,nD=fe.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:t})=>!t&&tD};
`,rD=fe.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var iD=S.exports.memo(function({column:t,disabled:e,draggingColumnId:n,selectedColumn:r={},sortDirection:i,sortIcon:o,sortServer:s,pagination:a,paginationServer:l,persistSelectedOnSort:u,selectableRowsVisibleOnly:c,onSort:d,onDragStart:h,onDragOver:f,onDragEnd:m,onDragEnter:_,onDragLeave:E}){S.exports.useEffect(()=>{typeof t.selector=="string"&&console.error(`Warning: ${t.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[g,p]=S.exports.useState(!1),v=S.exports.useRef(null);if(S.exports.useEffect(()=>{v.current&&p(v.current.scrollWidth>v.current.clientWidth)},[g]),t.omit)return null;const w=()=>{if(!t.sortable&&!t.selector)return;let z=i;hs(r.id,t.id)&&(z=i===xr.ASC?xr.DESC:xr.ASC),d({type:"SORT_CHANGE",sortDirection:z,selectedColumn:t,clearSelectedOnSort:a&&l&&!u||s||c})},I=z=>S.exports.createElement(ZA,{sortActive:z,sortDirection:i}),b=()=>S.exports.createElement("span",{className:[i,"__rdt_custom_sort_icon__"].join(" ")},o),x=!(!t.sortable||!hs(r.id,t.id)),T=!t.sortable||e,$=t.sortable&&!o&&!t.right,D=t.sortable&&!o&&t.right,B=t.sortable&&o&&!t.right,G=t.sortable&&o&&t.right;return S.exports.createElement(eD,{"data-column-id":t.id,className:"rdt_TableCol",headCell:!0,allowOverflow:t.allowOverflow,button:t.button,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,center:t.center,width:t.width,draggable:t.reorder,isDragging:hs(t.id,n),onDragStart:h,onDragOver:f,onDragEnd:m,onDragEnter:_,onDragLeave:E},t.name&&S.exports.createElement(nD,{"data-column-id":t.id,"data-sort-id":t.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:T?void 0:w,onKeyPress:T?void 0:z=>{z.key==="Enter"&&w()},sortActive:!T&&x,disabled:T},!T&&G&&b(),!T&&D&&I(x),typeof t.name=="string"?S.exports.createElement(rD,{title:g?t.name:void 0,ref:v,"data-column-id":t.id},t.name):t.name,!T&&B&&b(),!T&&$&&I(x)))});const oD=fe(Io)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function sD({headCell:t=!0,rowData:e,keyField:n,allSelected:r,mergeSelections:i,selectedRows:o,selectableRowsComponent:s,selectableRowsComponentProps:a,selectableRowDisabled:l,onSelectAllRows:u}){const c=o.length>0&&!r,d=l?e.filter(m=>!l(m)):e,h=d.length===0,f=Math.min(e.length,d.length);return S.exports.createElement(oD,{className:"rdt_TableCol",headCell:t,noPadding:!0},S.exports.createElement(YE,{name:"select-all-rows",component:s,componentOptions:a,onClick:()=>{u({type:"SELECT_ALL_ROWS",rows:d,rowCount:f,mergeSelections:i,keyField:n})},checked:r,indeterminate:c,disabled:h}))}function qE(t=ou.AUTO){const e=typeof window=="object",[n,r]=S.exports.useState(!1);return S.exports.useEffect(()=>{if(e)if(t!=="auto")r(t==="rtl");else{const i=!(!window.document||!window.document.createElement),o=document.getElementsByTagName("BODY")[0],s=document.getElementsByTagName("HTML")[0],a=o.dir==="rtl"||s.dir==="rtl";r(i&&a)}},[t,e]),n}const aD=fe.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:t})=>t.contextMenu.fontColor};
	font-size: ${({theme:t})=>t.contextMenu.fontSize};
	font-weight: 400;
`,lD=fe.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,Wv=fe.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({rtl:t})=>t&&"direction: rtl"};
	${({theme:t})=>t.contextMenu.style};
	${({theme:t,visible:e})=>e&&t.contextMenu.activeStyle};
`;function uD({contextMessage:t,contextActions:e,contextComponent:n,selectedCount:r,direction:i}){const o=qE(i),s=r>0;return n?S.exports.createElement(Wv,{visible:s},S.exports.cloneElement(n,{selectedCount:r})):S.exports.createElement(Wv,{visible:s,rtl:o},S.exports.createElement(aD,null,((a,l,u)=>{if(l===0)return null;const c=l===1?a.singular:a.plural;return u?`${l} ${a.message||""} ${c}`:`${l} ${c} ${a.message||""}`})(t,r,o)),S.exports.createElement(lD,null,e))}const cD=fe.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:t})=>t.header.style}
`,dD=fe.div`
	flex: 1 0 auto;
	color: ${({theme:t})=>t.header.fontColor};
	font-size: ${({theme:t})=>t.header.fontSize};
	font-weight: 400;
`,hD=fe.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,fD=({title:t,actions:e=null,contextMessage:n,contextActions:r,contextComponent:i,selectedCount:o,direction:s,showMenu:a=!0})=>S.exports.createElement(cD,{className:"rdt_TableHeader",role:"heading","aria-level":1},S.exports.createElement(dD,null,t),e&&S.exports.createElement(hD,null,e),a&&S.exports.createElement(uD,{contextMessage:n,contextActions:r,contextComponent:i,direction:s,selectedCount:o}));function XE(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}const pD={left:"flex-start",right:"flex-end",center:"center"},mD=fe.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:t})=>pD[t]};
	flex-wrap: ${({wrapContent:t})=>t?"wrap":"nowrap"};
	${({theme:t})=>t.subHeader.style}
`,gD=t=>{var{align:e="right",wrapContent:n=!0}=t,r=XE(t,["align","wrapContent"]);return S.exports.createElement(mD,Object.assign({align:e,wrapContent:n},r))},vD=fe.div`
	display: flex;
	flex-direction: column;
`,_D=fe.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({responsive:t,fixedHeader:e})=>t&&qe`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${e?"auto":"hidden"};
			min-height: 0;
		`};

	${({fixedHeader:t=!1,fixedHeaderScrollHeight:e="100vh"})=>t&&qe`
			max-height: ${e};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:t})=>t.responsiveWrapper.style};
`,Vv=fe.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${t=>t.theme.progress.style};
`,yD=fe.div`
	position: relative;
	width: 100%;
	${({theme:t})=>t.tableWrapper.style};
`,wD=fe(Io)`
	white-space: nowrap;
	${({theme:t})=>t.expanderCell.style};
`,ED=fe.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:t})=>t.noData.style};
`,SD=()=>ce.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},ce.createElement("path",{d:"M7 10l5 5 5-5z"}),ce.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),CD=fe.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,xD=fe.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,kD=t=>{var{defaultValue:e,onChange:n}=t,r=XE(t,["defaultValue","onChange"]);return S.exports.createElement(xD,null,S.exports.createElement(CD,Object.assign({onChange:n,defaultValue:e},r)),S.exports.createElement(SD,null))},M={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return ce.createElement("div",null,"To add an expander pass in a component instance via ",ce.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:ce.createElement(()=>ce.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},ce.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),ce.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:ce.createElement(()=>ce.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},ce.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),ce.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:ce.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:ce.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:Hh.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:ce.createElement(()=>ce.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},ce.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),ce.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:ce.createElement(()=>ce.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},ce.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),ce.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:ce.createElement(()=>ce.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},ce.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),ce.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:ce.createElement(()=>ce.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},ce.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),ce.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:ou.AUTO,onChangePage:Ge,onChangeRowsPerPage:Ge,onRowClicked:Ge,onRowDoubleClicked:Ge,onRowMouseEnter:Ge,onRowMouseLeave:Ge,onRowExpandToggled:Ge,onSelectedRowsChange:Ge,onSort:Ge,onColumnOrderChange:Ge},bD={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},ID=fe.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:t})=>t.pagination.style};
`,Ua=fe.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:t})=>t.pagination.pageButtonsStyle};
	${({isRTL:t})=>t&&"transform: scale(-1, -1)"};
`,TD=fe.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${QE`
    width: 100%;
    justify-content: space-around;
  `};
`,JE=fe.span`
	flex-shrink: 1;
	user-select: none;
`,RD=fe(JE)`
	margin: 0 24px;
`,ND=fe(JE)`
	margin: 0 4px;
`;var PD=S.exports.memo(function({rowsPerPage:t,rowCount:e,currentPage:n,direction:r=M.direction,paginationRowsPerPageOptions:i=M.paginationRowsPerPageOptions,paginationIconLastPage:o=M.paginationIconLastPage,paginationIconFirstPage:s=M.paginationIconFirstPage,paginationIconNext:a=M.paginationIconNext,paginationIconPrevious:l=M.paginationIconPrevious,paginationComponentOptions:u=M.paginationComponentOptions,onChangeRowsPerPage:c=M.onChangeRowsPerPage,onChangePage:d=M.onChangePage}){const h=(()=>{const z=typeof window=="object";function V(){return{width:z?window.innerWidth:void 0,height:z?window.innerHeight:void 0}}const[X,J]=S.exports.useState(V);return S.exports.useEffect(()=>{if(!z)return()=>null;function ke(){J(V())}return window.addEventListener("resize",ke),()=>window.removeEventListener("resize",ke)},[]),X})(),f=qE(r),m=h.width&&h.width>599,_=ds(e,t),E=n*t,g=E-t+1,p=n===1,v=n===_,w=Object.assign(Object.assign({},bD),u),I=n===_?`${g}-${e} ${w.rangeSeparatorText} ${e}`:`${g}-${E} ${w.rangeSeparatorText} ${e}`,b=S.exports.useCallback(()=>d(n-1),[n,d]),x=S.exports.useCallback(()=>d(n+1),[n,d]),T=S.exports.useCallback(()=>d(1),[d]),$=S.exports.useCallback(()=>d(ds(e,t)),[d,e,t]),D=S.exports.useCallback(z=>c(Number(z.target.value),n),[n,c]),B=i.map(z=>S.exports.createElement("option",{key:z,value:z},z));w.selectAllRowsItem&&B.push(S.exports.createElement("option",{key:-1,value:e},w.selectAllRowsItemText));const G=S.exports.createElement(kD,{onChange:D,defaultValue:t,"aria-label":w.rowsPerPageText},B);return S.exports.createElement(ID,{className:"rdt_Pagination"},!w.noRowsPerPage&&m&&S.exports.createElement(S.exports.Fragment,null,S.exports.createElement(ND,null,w.rowsPerPageText),G),m&&S.exports.createElement(RD,null,I),S.exports.createElement(TD,null,S.exports.createElement(Ua,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":p,onClick:T,disabled:p,isRTL:f},s),S.exports.createElement(Ua,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":p,onClick:b,disabled:p,isRTL:f},l),!m&&G,S.exports.createElement(Ua,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":v,onClick:x,disabled:v,isRTL:f},a),S.exports.createElement(Ua,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":v,onClick:$,disabled:v,isRTL:f},o)))});const Br=(t,e)=>{const n=S.exports.useRef(!0);S.exports.useEffect(()=>{n.current?n.current=!1:t()},e)};var OD=function(t){return function(e){return!!e&&typeof e=="object"}(t)&&!function(e){var n=Object.prototype.toString.call(e);return n==="[object RegExp]"||n==="[object Date]"||function(r){return r.$$typeof===AD}(e)}(t)},AD=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function Hs(t,e){return e.clone!==!1&&e.isMergeableObject(t)?po((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function DD(t,e,n){return t.concat(e).map(function(r){return Hs(r,n)})}function Gv(t){return Object.keys(t).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(n){return e.propertyIsEnumerable(n)}):[]}(t))}function Qv(t,e){try{return e in t}catch{return!1}}function LD(t,e,n){var r={};return n.isMergeableObject(t)&&Gv(t).forEach(function(i){r[i]=Hs(t[i],n)}),Gv(e).forEach(function(i){(function(o,s){return Qv(o,s)&&!(Object.hasOwnProperty.call(o,s)&&Object.propertyIsEnumerable.call(o,s))})(t,i)||(Qv(t,i)&&n.isMergeableObject(e[i])?r[i]=function(o,s){if(!s.customMerge)return po;var a=s.customMerge(o);return typeof a=="function"?a:po}(i,n)(t[i],e[i],n):r[i]=Hs(e[i],n))}),r}function po(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||DD,n.isMergeableObject=n.isMergeableObject||OD,n.cloneUnlessOtherwiseSpecified=Hs;var r=Array.isArray(e);return r===Array.isArray(t)?r?n.arrayMerge(t,e,n):LD(t,e,n):Hs(e,n)}po.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,r){return po(n,r,e)},{})};var MD=po;const Kv={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},Yv={default:Kv,light:Kv,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function FD(t,e,n,r){const[i,o]=S.exports.useState(()=>Hv(t)),[s,a]=S.exports.useState(""),l=S.exports.useRef("");Br(()=>{o(Hv(t))},[t]);const u=S.exports.useCallback(E=>{var g,p,v;const{attributes:w}=E.target,I=(g=w.getNamedItem("data-column-id"))===null||g===void 0?void 0:g.value;I&&(l.current=((v=(p=i[ja(i,I)])===null||p===void 0?void 0:p.id)===null||v===void 0?void 0:v.toString())||"",a(l.current))},[i]),c=S.exports.useCallback(E=>{var g;const{attributes:p}=E.target,v=(g=p.getNamedItem("data-column-id"))===null||g===void 0?void 0:g.value;if(v&&l.current&&v!==l.current){const w=ja(i,l.current),I=ja(i,v),b=[...i];b[w]=i[I],b[I]=i[w],o(b),e(b)}},[e,i]),d=S.exports.useCallback(E=>{E.preventDefault()},[]),h=S.exports.useCallback(E=>{E.preventDefault()},[]),f=S.exports.useCallback(E=>{E.preventDefault(),l.current="",a("")},[]),m=function(E=!1){return E?xr.ASC:xr.DESC}(r),_=S.exports.useMemo(()=>i[ja(i,n==null?void 0:n.toString())]||{},[n,i]);return{tableColumns:i,draggingColumnId:s,handleDragStart:u,handleDragEnter:c,handleDragOver:d,handleDragLeave:h,handleDragEnd:f,defaultSortDirection:m,defaultSortColumn:_}}var $D=S.exports.memo(function(t){const{data:e=M.data,columns:n=M.columns,title:r=M.title,actions:i=M.actions,keyField:o=M.keyField,striped:s=M.striped,highlightOnHover:a=M.highlightOnHover,pointerOnHover:l=M.pointerOnHover,dense:u=M.dense,selectableRows:c=M.selectableRows,selectableRowsSingle:d=M.selectableRowsSingle,selectableRowsHighlight:h=M.selectableRowsHighlight,selectableRowsNoSelectAll:f=M.selectableRowsNoSelectAll,selectableRowsVisibleOnly:m=M.selectableRowsVisibleOnly,selectableRowSelected:_=M.selectableRowSelected,selectableRowDisabled:E=M.selectableRowDisabled,selectableRowsComponent:g=M.selectableRowsComponent,selectableRowsComponentProps:p=M.selectableRowsComponentProps,onRowExpandToggled:v=M.onRowExpandToggled,onSelectedRowsChange:w=M.onSelectedRowsChange,expandableIcon:I=M.expandableIcon,onChangeRowsPerPage:b=M.onChangeRowsPerPage,onChangePage:x=M.onChangePage,paginationServer:T=M.paginationServer,paginationServerOptions:$=M.paginationServerOptions,paginationTotalRows:D=M.paginationTotalRows,paginationDefaultPage:B=M.paginationDefaultPage,paginationResetDefaultPage:G=M.paginationResetDefaultPage,paginationPerPage:z=M.paginationPerPage,paginationRowsPerPageOptions:V=M.paginationRowsPerPageOptions,paginationIconLastPage:X=M.paginationIconLastPage,paginationIconFirstPage:J=M.paginationIconFirstPage,paginationIconNext:ke=M.paginationIconNext,paginationIconPrevious:R=M.paginationIconPrevious,paginationComponent:P=M.paginationComponent,paginationComponentOptions:j=M.paginationComponentOptions,responsive:H=M.responsive,progressPending:A=M.progressPending,progressComponent:y=M.progressComponent,persistTableHead:U=M.persistTableHead,noDataComponent:N=M.noDataComponent,disabled:C=M.disabled,noTableHead:Q=M.noTableHead,noHeader:O=M.noHeader,fixedHeader:K=M.fixedHeader,fixedHeaderScrollHeight:te=M.fixedHeaderScrollHeight,pagination:oe=M.pagination,subHeader:Y=M.subHeader,subHeaderAlign:Re=M.subHeaderAlign,subHeaderWrap:je=M.subHeaderWrap,subHeaderComponent:se=M.subHeaderComponent,noContextMenu:Ue=M.noContextMenu,contextMessage:he=M.contextMessage,contextActions:ae=M.contextActions,contextComponent:In=M.contextComponent,expandableRows:Ne=M.expandableRows,onRowClicked:Xt=M.onRowClicked,onRowDoubleClicked:$t=M.onRowDoubleClicked,onRowMouseEnter:at=M.onRowMouseEnter,onRowMouseLeave:q=M.onRowMouseLeave,sortIcon:Se=M.sortIcon,onSort:Wn=M.onSort,sortFunction:Vn=M.sortFunction,sortServer:Et=M.sortServer,expandableRowsComponent:To=M.expandableRowsComponent,expandableRowsComponentProps:vc=M.expandableRowsComponentProps,expandableRowDisabled:Fr=M.expandableRowDisabled,expandableRowsHideExpander:pa=M.expandableRowsHideExpander,expandOnRowClicked:e1=M.expandOnRowClicked,expandOnRowDoubleClicked:t1=M.expandOnRowDoubleClicked,expandableRowExpanded:Yp=M.expandableRowExpanded,expandableInheritConditionalStyles:n1=M.expandableInheritConditionalStyles,defaultSortFieldId:r1=M.defaultSortFieldId,defaultSortAsc:i1=M.defaultSortAsc,clearSelectedRows:qp=M.clearSelectedRows,conditionalRowStyles:o1=M.conditionalRowStyles,theme:Xp=M.theme,customStyles:Jp=M.customStyles,direction:Ro=M.direction,onColumnOrderChange:s1=M.onColumnOrderChange,className:a1}=t,{tableColumns:Zp,draggingColumnId:em,handleDragStart:tm,handleDragEnter:nm,handleDragOver:rm,handleDragLeave:im,handleDragEnd:om,defaultSortDirection:l1,defaultSortColumn:u1}=FD(n,s1,r1,i1),[{rowsPerPage:Gn,currentPage:Jt,selectedRows:_c,allSelected:sm,selectedCount:am,selectedColumn:fn,sortDirection:Ei,toggleOnSelectedRowsChange:c1},$r]=S.exports.useReducer(TA,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:u1,toggleOnSelectedRowsChange:!1,sortDirection:l1,currentPage:B,rowsPerPage:z,selectedRowsFlag:!1,contextMessage:M.contextMessage}),{persistSelectedOnSort:lm=!1,persistSelectedOnPageChange:ma=!1}=$,um=!(!T||!ma&&!lm),d1=oe&&!A&&e.length>0,h1=P||PD,f1=S.exports.useMemo(()=>((ie={},me="default",mt="default")=>{const Zt=Yv[me]?me:mt;return MD({table:{style:{color:(ne=Yv[Zt]).text.primary,backgroundColor:ne.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:ne.text.primary,backgroundColor:ne.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:ne.background.default,minHeight:"52px"}},head:{style:{color:ne.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:ne.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:ne.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:ne.context.background,fontSize:"18px",fontWeight:400,color:ne.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:ne.text.primary,backgroundColor:ne.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:ne.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:ne.selected.text,backgroundColor:ne.selected.default,borderBottomColor:ne.background.default}},highlightOnHoverStyle:{color:ne.highlightOnHover.text,backgroundColor:ne.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:ne.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:ne.background.default},stripedStyle:{color:ne.striped.text,backgroundColor:ne.striped.default}},expanderRow:{style:{color:ne.text.primary,backgroundColor:ne.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:ne.button.default,fill:ne.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:ne.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:ne.button.hover},"&:focus":{outline:"none",backgroundColor:ne.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:ne.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:ne.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:ne.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:ne.button.default,fill:ne.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:ne.button.disabled,fill:ne.button.disabled},"&:hover:not(:disabled)":{backgroundColor:ne.button.hover},"&:focus":{outline:"none",backgroundColor:ne.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:ne.text.primary,backgroundColor:ne.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:ne.text.primary,backgroundColor:ne.background.default}}},ie);var ne})(Jp,Xp),[Jp,Xp]),p1=S.exports.useMemo(()=>Object.assign({},Ro!=="auto"&&{dir:Ro}),[Ro]),lt=S.exports.useMemo(()=>{if(Et)return e;if((fn==null?void 0:fn.sortFunction)&&typeof fn.sortFunction=="function"){const ie=fn.sortFunction,me=Ei===xr.ASC?ie:(mt,Zt)=>-1*ie(mt,Zt);return[...e].sort(me)}return function(ie,me,mt,Zt){return me?Zt&&typeof Zt=="function"?Zt(ie.slice(0),me,mt):ie.slice(0).sort((ne,ga)=>{let Qn,pn;if(typeof me=="string"?(Qn=zh(ne,me),pn=zh(ga,me)):(Qn=me(ne),pn=me(ga)),mt==="asc"){if(Qn<pn)return-1;if(Qn>pn)return 1}if(mt==="desc"){if(Qn>pn)return-1;if(Qn<pn)return 1}return 0}):ie}(e,fn==null?void 0:fn.selector,Ei,Vn)},[Et,fn,Ei,e,Vn]),No=S.exports.useMemo(()=>{if(oe&&!T){const ie=Jt*Gn,me=ie-Gn;return lt.slice(me,ie)}return lt},[Jt,oe,T,Gn,lt]),m1=S.exports.useCallback(ie=>{$r(ie)},[]),g1=S.exports.useCallback(ie=>{$r(ie)},[]),v1=S.exports.useCallback(ie=>{$r(ie)},[]),_1=S.exports.useCallback((ie,me)=>Xt(ie,me),[Xt]),y1=S.exports.useCallback((ie,me)=>$t(ie,me),[$t]),w1=S.exports.useCallback((ie,me)=>at(ie,me),[at]),E1=S.exports.useCallback((ie,me)=>q(ie,me),[q]),Si=S.exports.useCallback(ie=>$r({type:"CHANGE_PAGE",page:ie,paginationServer:T,visibleOnly:m,persistSelectedOnPageChange:ma}),[T,ma,m]),S1=S.exports.useCallback(ie=>{const me=ds(D||No.length,ie),mt=cd(Jt,me);T||Si(mt),$r({type:"CHANGE_ROWS_PER_PAGE",page:mt,rowsPerPage:ie})},[Jt,Si,T,D,No.length]);if(oe&&!T&&lt.length>0&&No.length===0){const ie=ds(lt.length,Gn),me=cd(Jt,ie);Si(me)}Br(()=>{w({allSelected:sm,selectedCount:am,selectedRows:_c.slice(0)})},[c1]),Br(()=>{Wn(fn,Ei,lt.slice(0))},[fn,Ei]),Br(()=>{x(Jt,D||lt.length)},[Jt]),Br(()=>{b(Gn,Jt)},[Gn]),Br(()=>{Si(B)},[B,G]),Br(()=>{if(oe&&T&&D>0){const ie=ds(D,Gn),me=cd(Jt,ie);Jt!==me&&Si(me)}},[D]),S.exports.useEffect(()=>{$r({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:qp})},[d,qp]),S.exports.useEffect(()=>{if(!_)return;const ie=lt.filter(mt=>_(mt)),me=d?ie.slice(0,1):ie;$r({type:"SELECT_MULTIPLE_ROWS",keyField:o,selectedRows:me,totalRows:lt.length,mergeSelections:um})},[e,_]);const C1=m?No:lt,x1=ma||d||f;return S.exports.createElement(kA,{theme:f1},!O&&(!!r||!!i)&&S.exports.createElement(fD,{title:r,actions:i,showMenu:!Ue,selectedCount:am,direction:Ro,contextActions:ae,contextComponent:In,contextMessage:he}),Y&&S.exports.createElement(gD,{align:Re,wrapContent:je},se),S.exports.createElement(_D,Object.assign({responsive:H,fixedHeader:K,fixedHeaderScrollHeight:te,className:a1},p1),S.exports.createElement(yD,null,A&&!U&&S.exports.createElement(Vv,null,y),S.exports.createElement(NA,{disabled:C,className:"rdt_Table",role:"table"},!Q&&(!!U||lt.length>0&&!A)&&S.exports.createElement(OA,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:K},S.exports.createElement(AA,{className:"rdt_TableHeadRow",role:"row",dense:u},c&&(x1?S.exports.createElement(Io,{style:{flex:"0 0 48px"}}):S.exports.createElement(sD,{allSelected:sm,selectedRows:_c,selectableRowsComponent:g,selectableRowsComponentProps:p,selectableRowDisabled:E,rowData:C1,keyField:o,mergeSelections:um,onSelectAllRows:g1})),Ne&&!pa&&S.exports.createElement(wD,null),Zp.map(ie=>S.exports.createElement(iD,{key:ie.id,column:ie,selectedColumn:fn,disabled:A||lt.length===0,pagination:oe,paginationServer:T,persistSelectedOnSort:lm,selectableRowsVisibleOnly:m,sortDirection:Ei,sortIcon:Se,sortServer:Et,onSort:m1,onDragStart:tm,onDragOver:rm,onDragEnd:om,onDragEnter:nm,onDragLeave:im,draggingColumnId:em})))),!lt.length&&!A&&S.exports.createElement(ED,null,N),A&&U&&S.exports.createElement(Vv,null,y),!A&&lt.length>0&&S.exports.createElement(vD,{className:"rdt_TableBody",role:"rowgroup"},No.map((ie,me)=>{const mt=fo(ie,o),Zt=function(pn=""){return typeof pn!="number"&&(!pn||pn.length===0)}(mt)?me:mt,ne=il(ie,_c,o),ga=!!(Ne&&Yp&&Yp(ie)),Qn=!!(Ne&&Fr&&Fr(ie));return S.exports.createElement(XA,{id:Zt,key:Zt,keyField:o,"data-row-id":Zt,columns:Zp,row:ie,rowCount:lt.length,rowIndex:me,selectableRows:c,expandableRows:Ne,expandableIcon:I,highlightOnHover:a,pointerOnHover:l,dense:u,expandOnRowClicked:e1,expandOnRowDoubleClicked:t1,expandableRowsComponent:To,expandableRowsComponentProps:vc,expandableRowsHideExpander:pa,defaultExpanderDisabled:Qn,defaultExpanded:ga,expandableInheritConditionalStyles:n1,conditionalRowStyles:o1,selected:ne,selectableRowsHighlight:h,selectableRowsComponent:g,selectableRowsComponentProps:p,selectableRowDisabled:E,selectableRowsSingle:d,striped:s,onRowExpandToggled:v,onRowClicked:_1,onRowDoubleClicked:y1,onRowMouseEnter:w1,onRowMouseLeave:E1,onSelectedRow:v1,draggingColumnId:em,onDragStart:tm,onDragOver:rm,onDragEnd:om,onDragEnter:nm,onDragLeave:im})}))))),d1&&S.exports.createElement("div",null,S.exports.createElement(h1,{onChangePage:Si,onChangeRowsPerPage:S1,rowCount:D||lt.length,currentPage:Jt,rowsPerPage:Gn,direction:Ro,paginationRowsPerPageOptions:V,paginationIconLastPage:X,paginationIconFirstPage:J,paginationIconNext:ke,paginationIconPrevious:R,paginationComponentOptions:j})))});const jD=()=>{const[t,e]=S.exports.useState([]),n=[{name:"id",selector:i=>i.id,sortable:!0},{name:"V\xE1lvula on/off",selector:i=>i.C,sortable:!0},{name:"T\xB0 Ambiente",selector:i=>i.D,sortable:!0},{name:"H Ambiente ",selector:i=>i.E,sortable:!0},{name:"H Suelo",selector:i=>i.F,sortable:!0},{name:"T\xB0 Suelo",selector:i=>i.G,sortable:!0},{name:"Luminosidad Ambiente",selector:i=>i.H,sortable:!0}],r=async()=>{const{getDatabase:i,ref:o,child:s,get:a}=CO,l=o(i());return await a(s(l,"D")).then(c=>{if(c.exists()){const d=Object.values(c.val()).slice(1,15),h=d.map(f=>({id:d.indexOf(f),C:f.P.split("U")[2],D:f.S.split("U")[0],E:f.S.split("U")[1],F:f.S.split("U")[2],G:f.S.split("U")[3],H:f.S.split("U")[4]}));return e(...t,h),d}else console.error("Data NO DISPONIBLE")}).catch(c=>{console.error(c)})};return S.exports.useEffect(()=>{r()},[]),k(Bn,{children:t.length>0?k($D,{columns:n,data:t}):k("p",{children:" Cargando... "})})},UD=()=>ee(Bn,{children:[k(AE,{}),k("hr",{className:"my-5"}),k("section",{className:"mt-4",children:k("div",{className:"container-lg",children:ee("div",{className:"card px-2 pt-5 my-3 text-center",children:[k("h2",{children:" Lectura de par\xE1metros en tiempo real "}),k("div",{className:"card-body",children:k(jD,{})})]})})}),k("hr",{className:"my-5"}),k($p,{})]}),zD=()=>k("nav",{className:"navbar navbar-expand navbar-dark bg-dark rounded-3 mt-2 mx-2 mb-5",children:ee("div",{className:"container-fluid",children:[ee(bu,{className:"navbar-brand",to:"/home",children:["Agrobime",k("img",{src:"/agrobime.png",alt:"Logo",width:"30",height:"24",className:"d-inline-block align-text-top mx-2"})]}),k("div",{className:"navbar-collapse px-1 d-flex justify-content-end",children:k("ul",{className:"navbar-nav",children:k(Pl,{className:"mx-1 btn btn-success nav-link",to:"/auth",children:"Login"})})})]})});var ZE={exports:{}};(function(t,e){(function(n,r){t.exports=r(S.exports)})(typeof self<"u"?self:b1,n=>(()=>{var r={7403:(a,l,u)=>{u.d(l,{default:()=>ke});var c=u(4087),d=u.n(c);const h=function(R){return new RegExp(/<[a-z][\s\S]*>/i).test(R)},f=function(R){var P=document.createElement("div");return P.innerHTML=R,P.childNodes},m=function(R,P){return Math.floor(Math.random()*(P-R+1))+R};var _="TYPE_CHARACTER",E="REMOVE_CHARACTER",g="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",v="PAUSE_FOR",w="CALL_FUNCTION",I="ADD_HTML_TAG_ELEMENT",b="CHANGE_DELETE_SPEED",x="CHANGE_DELAY",T="CHANGE_CURSOR",$="PASTE_STRING",D="HTML_TAG";function B(R,P){var j=Object.keys(R);if(Object.getOwnPropertySymbols){var H=Object.getOwnPropertySymbols(R);P&&(H=H.filter(function(A){return Object.getOwnPropertyDescriptor(R,A).enumerable})),j.push.apply(j,H)}return j}function G(R){for(var P=1;P<arguments.length;P++){var j=arguments[P]!=null?arguments[P]:{};P%2?B(Object(j),!0).forEach(function(H){J(R,H,j[H])}):Object.getOwnPropertyDescriptors?Object.defineProperties(R,Object.getOwnPropertyDescriptors(j)):B(Object(j)).forEach(function(H){Object.defineProperty(R,H,Object.getOwnPropertyDescriptor(j,H))})}return R}function z(R){return function(P){if(Array.isArray(P))return V(P)}(R)||function(P){if(typeof Symbol<"u"&&P[Symbol.iterator]!=null||P["@@iterator"]!=null)return Array.from(P)}(R)||function(P,j){if(P){if(typeof P=="string")return V(P,j);var H=Object.prototype.toString.call(P).slice(8,-1);return H==="Object"&&P.constructor&&(H=P.constructor.name),H==="Map"||H==="Set"?Array.from(P):H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H)?V(P,j):void 0}}(R)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function V(R,P){(P==null||P>R.length)&&(P=R.length);for(var j=0,H=new Array(P);j<P;j++)H[j]=R[j];return H}function X(R,P){for(var j=0;j<P.length;j++){var H=P[j];H.enumerable=H.enumerable||!1,H.configurable=!0,"value"in H&&(H.writable=!0),Object.defineProperty(R,H.key,H)}}function J(R,P,j){return P in R?Object.defineProperty(R,P,{value:j,enumerable:!0,configurable:!0,writable:!0}):R[P]=j,R}const ke=function(){function R(H,A){var y=this;if(function(N,C){if(!(N instanceof C))throw new TypeError("Cannot call a class as a function")}(this,R),J(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),J(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),J(this,"setupWrapperElement",function(){y.state.elements.container&&(y.state.elements.wrapper.className=y.options.wrapperClassName,y.state.elements.cursor.className=y.options.cursorClassName,y.state.elements.cursor.innerHTML=y.options.cursor,y.state.elements.container.innerHTML="",y.state.elements.container.appendChild(y.state.elements.wrapper),y.state.elements.container.appendChild(y.state.elements.cursor))}),J(this,"start",function(){return y.state.eventLoopPaused=!1,y.runEventLoop(),y}),J(this,"pause",function(){return y.state.eventLoopPaused=!0,y}),J(this,"stop",function(){return y.state.eventLoop&&((0,c.cancel)(y.state.eventLoop),y.state.eventLoop=null),y}),J(this,"pauseFor",function(N){return y.addEventToQueue(v,{ms:N}),y}),J(this,"typeOutAllStrings",function(){return typeof y.options.strings=="string"?(y.typeString(y.options.strings).pauseFor(y.options.pauseFor),y):(y.options.strings.forEach(function(N){y.typeString(N).pauseFor(y.options.pauseFor).deleteAll(y.options.deleteSpeed)}),y)}),J(this,"typeString",function(N){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(h(N))return y.typeOutHTMLString(N,C);if(N){var Q=y.options||{},O=Q.stringSplitter,K=typeof O=="function"?O(N):N.split("");y.typeCharacters(K,C)}return y}),J(this,"pasteString",function(N){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return h(N)?y.typeOutHTMLString(N,C,!0):(N&&y.addEventToQueue($,{character:N,node:C}),y)}),J(this,"typeOutHTMLString",function(N){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,Q=arguments.length>2?arguments[2]:void 0,O=f(N);if(O.length>0)for(var K=0;K<O.length;K++){var te=O[K],oe=te.innerHTML;te&&te.nodeType!==3?(te.innerHTML="",y.addEventToQueue(I,{node:te,parentNode:C}),Q?y.pasteString(oe,te):y.typeString(oe,te)):te.textContent&&(Q?y.pasteString(te.textContent,C):y.typeString(te.textContent,C))}return y}),J(this,"deleteAll",function(){var N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return y.addEventToQueue(g,{speed:N}),y}),J(this,"changeDeleteSpeed",function(N){if(!N)throw new Error("Must provide new delete speed");return y.addEventToQueue(b,{speed:N}),y}),J(this,"changeDelay",function(N){if(!N)throw new Error("Must provide new delay");return y.addEventToQueue(x,{delay:N}),y}),J(this,"changeCursor",function(N){if(!N)throw new Error("Must provide new cursor");return y.addEventToQueue(T,{cursor:N}),y}),J(this,"deleteChars",function(N){if(!N)throw new Error("Must provide amount of characters to delete");for(var C=0;C<N;C++)y.addEventToQueue(E);return y}),J(this,"callFunction",function(N,C){if(!N||typeof N!="function")throw new Error("Callbak must be a function");return y.addEventToQueue(w,{cb:N,thisArg:C}),y}),J(this,"typeCharacters",function(N){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!N||!Array.isArray(N))throw new Error("Characters must be an array");return N.forEach(function(Q){y.addEventToQueue(_,{character:Q,node:C})}),y}),J(this,"removeCharacters",function(N){if(!N||!Array.isArray(N))throw new Error("Characters must be an array");return N.forEach(function(){y.addEventToQueue(E)}),y}),J(this,"addEventToQueue",function(N,C){var Q=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return y.addEventToStateProperty(N,C,Q,"eventQueue")}),J(this,"addReverseCalledEvent",function(N,C){var Q=arguments.length>2&&arguments[2]!==void 0&&arguments[2],O=y.options.loop;return O?y.addEventToStateProperty(N,C,Q,"reverseCalledEvents"):y}),J(this,"addEventToStateProperty",function(N,C){var Q=arguments.length>2&&arguments[2]!==void 0&&arguments[2],O=arguments.length>3?arguments[3]:void 0,K={eventName:N,eventArgs:C||{}};return y.state[O]=Q?[K].concat(z(y.state[O])):[].concat(z(y.state[O]),[K]),y}),J(this,"runEventLoop",function(){y.state.lastFrameTime||(y.state.lastFrameTime=Date.now());var N=Date.now(),C=N-y.state.lastFrameTime;if(!y.state.eventQueue.length){if(!y.options.loop)return;y.state.eventQueue=z(y.state.calledEvents),y.state.calledEvents=[],y.options=G({},y.state.initialOptions)}if(y.state.eventLoop=d()(y.runEventLoop),!y.state.eventLoopPaused){if(y.state.pauseUntil){if(N<y.state.pauseUntil)return;y.state.pauseUntil=null}var Q,O=z(y.state.eventQueue),K=O.shift();if(!(C<=(Q=K.eventName===p||K.eventName===E?y.options.deleteSpeed==="natural"?m(40,80):y.options.deleteSpeed:y.options.delay==="natural"?m(120,160):y.options.delay))){var te=K.eventName,oe=K.eventArgs;switch(y.logInDevMode({currentEvent:K,state:y.state,delay:Q}),te){case $:case _:var Y=oe.character,Re=oe.node,je=document.createTextNode(Y),se=je;y.options.onCreateTextNode&&typeof y.options.onCreateTextNode=="function"&&(se=y.options.onCreateTextNode(Y,je)),se&&(Re?Re.appendChild(se):y.state.elements.wrapper.appendChild(se)),y.state.visibleNodes=[].concat(z(y.state.visibleNodes),[{type:"TEXT_NODE",character:Y,node:se}]);break;case E:O.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case v:var Ue=K.eventArgs.ms;y.state.pauseUntil=Date.now()+parseInt(Ue);break;case w:var he=K.eventArgs,ae=he.cb,In=he.thisArg;ae.call(In,{elements:y.state.elements});break;case I:var Ne=K.eventArgs,Xt=Ne.node,$t=Ne.parentNode;$t?$t.appendChild(Xt):y.state.elements.wrapper.appendChild(Xt),y.state.visibleNodes=[].concat(z(y.state.visibleNodes),[{type:D,node:Xt,parentNode:$t||y.state.elements.wrapper}]);break;case g:var at=y.state.visibleNodes,q=oe.speed,Se=[];q&&Se.push({eventName:b,eventArgs:{speed:q,temp:!0}});for(var Wn=0,Vn=at.length;Wn<Vn;Wn++)Se.push({eventName:p,eventArgs:{removingCharacterNode:!1}});q&&Se.push({eventName:b,eventArgs:{speed:y.options.deleteSpeed,temp:!0}}),O.unshift.apply(O,Se);break;case p:var Et=K.eventArgs.removingCharacterNode;if(y.state.visibleNodes.length){var To=y.state.visibleNodes.pop(),vc=To.type,Fr=To.node,pa=To.character;y.options.onRemoveNode&&typeof y.options.onRemoveNode=="function"&&y.options.onRemoveNode({node:Fr,character:pa}),Fr&&Fr.parentNode.removeChild(Fr),vc===D&&Et&&O.unshift({eventName:p,eventArgs:{}})}break;case b:y.options.deleteSpeed=K.eventArgs.speed;break;case x:y.options.delay=K.eventArgs.delay;break;case T:y.options.cursor=K.eventArgs.cursor,y.state.elements.cursor.innerHTML=K.eventArgs.cursor}y.options.loop&&(K.eventName===p||K.eventArgs&&K.eventArgs.temp||(y.state.calledEvents=[].concat(z(y.state.calledEvents),[K]))),y.state.eventQueue=O,y.state.lastFrameTime=N}}}),H)if(typeof H=="string"){var U=document.querySelector(H);if(!U)throw new Error("Could not find container element");this.state.elements.container=U}else this.state.elements.container=H;A&&(this.options=G(G({},this.options),A)),this.state.initialOptions=G({},this.options),this.init()}var P,j;return P=R,(j=[{key:"init",value:function(){var H,A;this.setupWrapperElement(),this.addEventToQueue(T,{cursor:this.options.cursor},!0),this.addEventToQueue(g,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(H=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(A=document.createElement("style")).appendChild(document.createTextNode(H)),document.head.appendChild(A),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(H){this.options.devMode&&console.log(H)}}])&&X(P.prototype,j),Object.defineProperty(P,"prototype",{writable:!1}),R}()},8552:(a,l,u)=>{var c=u(852)(u(5639),"DataView");a.exports=c},1989:(a,l,u)=>{var c=u(1789),d=u(401),h=u(7667),f=u(1327),m=u(1866);function _(E){var g=-1,p=E==null?0:E.length;for(this.clear();++g<p;){var v=E[g];this.set(v[0],v[1])}}_.prototype.clear=c,_.prototype.delete=d,_.prototype.get=h,_.prototype.has=f,_.prototype.set=m,a.exports=_},8407:(a,l,u)=>{var c=u(7040),d=u(4125),h=u(2117),f=u(7518),m=u(4705);function _(E){var g=-1,p=E==null?0:E.length;for(this.clear();++g<p;){var v=E[g];this.set(v[0],v[1])}}_.prototype.clear=c,_.prototype.delete=d,_.prototype.get=h,_.prototype.has=f,_.prototype.set=m,a.exports=_},7071:(a,l,u)=>{var c=u(852)(u(5639),"Map");a.exports=c},3369:(a,l,u)=>{var c=u(4785),d=u(1285),h=u(6e3),f=u(9916),m=u(5265);function _(E){var g=-1,p=E==null?0:E.length;for(this.clear();++g<p;){var v=E[g];this.set(v[0],v[1])}}_.prototype.clear=c,_.prototype.delete=d,_.prototype.get=h,_.prototype.has=f,_.prototype.set=m,a.exports=_},3818:(a,l,u)=>{var c=u(852)(u(5639),"Promise");a.exports=c},8525:(a,l,u)=>{var c=u(852)(u(5639),"Set");a.exports=c},8668:(a,l,u)=>{var c=u(3369),d=u(619),h=u(2385);function f(m){var _=-1,E=m==null?0:m.length;for(this.__data__=new c;++_<E;)this.add(m[_])}f.prototype.add=f.prototype.push=d,f.prototype.has=h,a.exports=f},6384:(a,l,u)=>{var c=u(8407),d=u(7465),h=u(3779),f=u(7599),m=u(4758),_=u(4309);function E(g){var p=this.__data__=new c(g);this.size=p.size}E.prototype.clear=d,E.prototype.delete=h,E.prototype.get=f,E.prototype.has=m,E.prototype.set=_,a.exports=E},2705:(a,l,u)=>{var c=u(5639).Symbol;a.exports=c},1149:(a,l,u)=>{var c=u(5639).Uint8Array;a.exports=c},577:(a,l,u)=>{var c=u(852)(u(5639),"WeakMap");a.exports=c},4963:a=>{a.exports=function(l,u){for(var c=-1,d=l==null?0:l.length,h=0,f=[];++c<d;){var m=l[c];u(m,c,l)&&(f[h++]=m)}return f}},4636:(a,l,u)=>{var c=u(2545),d=u(5694),h=u(1469),f=u(4144),m=u(5776),_=u(6719),E=Object.prototype.hasOwnProperty;a.exports=function(g,p){var v=h(g),w=!v&&d(g),I=!v&&!w&&f(g),b=!v&&!w&&!I&&_(g),x=v||w||I||b,T=x?c(g.length,String):[],$=T.length;for(var D in g)!p&&!E.call(g,D)||x&&(D=="length"||I&&(D=="offset"||D=="parent")||b&&(D=="buffer"||D=="byteLength"||D=="byteOffset")||m(D,$))||T.push(D);return T}},2488:a=>{a.exports=function(l,u){for(var c=-1,d=u.length,h=l.length;++c<d;)l[h+c]=u[c];return l}},2908:a=>{a.exports=function(l,u){for(var c=-1,d=l==null?0:l.length;++c<d;)if(u(l[c],c,l))return!0;return!1}},8470:(a,l,u)=>{var c=u(7813);a.exports=function(d,h){for(var f=d.length;f--;)if(c(d[f][0],h))return f;return-1}},8866:(a,l,u)=>{var c=u(2488),d=u(1469);a.exports=function(h,f,m){var _=f(h);return d(h)?_:c(_,m(h))}},4239:(a,l,u)=>{var c=u(2705),d=u(9607),h=u(2333),f=c?c.toStringTag:void 0;a.exports=function(m){return m==null?m===void 0?"[object Undefined]":"[object Null]":f&&f in Object(m)?d(m):h(m)}},9454:(a,l,u)=>{var c=u(4239),d=u(7005);a.exports=function(h){return d(h)&&c(h)=="[object Arguments]"}},939:(a,l,u)=>{var c=u(2492),d=u(7005);a.exports=function h(f,m,_,E,g){return f===m||(f==null||m==null||!d(f)&&!d(m)?f!=f&&m!=m:c(f,m,_,E,h,g))}},2492:(a,l,u)=>{var c=u(6384),d=u(7114),h=u(8351),f=u(6096),m=u(4160),_=u(1469),E=u(4144),g=u(6719),p="[object Arguments]",v="[object Array]",w="[object Object]",I=Object.prototype.hasOwnProperty;a.exports=function(b,x,T,$,D,B){var G=_(b),z=_(x),V=G?v:m(b),X=z?v:m(x),J=(V=V==p?w:V)==w,ke=(X=X==p?w:X)==w,R=V==X;if(R&&E(b)){if(!E(x))return!1;G=!0,J=!1}if(R&&!J)return B||(B=new c),G||g(b)?d(b,x,T,$,D,B):h(b,x,V,T,$,D,B);if(!(1&T)){var P=J&&I.call(b,"__wrapped__"),j=ke&&I.call(x,"__wrapped__");if(P||j){var H=P?b.value():b,A=j?x.value():x;return B||(B=new c),D(H,A,T,$,B)}}return!!R&&(B||(B=new c),f(b,x,T,$,D,B))}},8458:(a,l,u)=>{var c=u(3560),d=u(5346),h=u(3218),f=u(346),m=/^\[object .+?Constructor\]$/,_=Function.prototype,E=Object.prototype,g=_.toString,p=E.hasOwnProperty,v=RegExp("^"+g.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");a.exports=function(w){return!(!h(w)||d(w))&&(c(w)?v:m).test(f(w))}},8749:(a,l,u)=>{var c=u(4239),d=u(1780),h=u(7005),f={};f["[object Float32Array]"]=f["[object Float64Array]"]=f["[object Int8Array]"]=f["[object Int16Array]"]=f["[object Int32Array]"]=f["[object Uint8Array]"]=f["[object Uint8ClampedArray]"]=f["[object Uint16Array]"]=f["[object Uint32Array]"]=!0,f["[object Arguments]"]=f["[object Array]"]=f["[object ArrayBuffer]"]=f["[object Boolean]"]=f["[object DataView]"]=f["[object Date]"]=f["[object Error]"]=f["[object Function]"]=f["[object Map]"]=f["[object Number]"]=f["[object Object]"]=f["[object RegExp]"]=f["[object Set]"]=f["[object String]"]=f["[object WeakMap]"]=!1,a.exports=function(m){return h(m)&&d(m.length)&&!!f[c(m)]}},280:(a,l,u)=>{var c=u(5726),d=u(6916),h=Object.prototype.hasOwnProperty;a.exports=function(f){if(!c(f))return d(f);var m=[];for(var _ in Object(f))h.call(f,_)&&_!="constructor"&&m.push(_);return m}},2545:a=>{a.exports=function(l,u){for(var c=-1,d=Array(l);++c<l;)d[c]=u(c);return d}},1717:a=>{a.exports=function(l){return function(u){return l(u)}}},4757:a=>{a.exports=function(l,u){return l.has(u)}},4429:(a,l,u)=>{var c=u(5639)["__core-js_shared__"];a.exports=c},7114:(a,l,u)=>{var c=u(8668),d=u(2908),h=u(4757);a.exports=function(f,m,_,E,g,p){var v=1&_,w=f.length,I=m.length;if(w!=I&&!(v&&I>w))return!1;var b=p.get(f),x=p.get(m);if(b&&x)return b==m&&x==f;var T=-1,$=!0,D=2&_?new c:void 0;for(p.set(f,m),p.set(m,f);++T<w;){var B=f[T],G=m[T];if(E)var z=v?E(G,B,T,m,f,p):E(B,G,T,f,m,p);if(z!==void 0){if(z)continue;$=!1;break}if(D){if(!d(m,function(V,X){if(!h(D,X)&&(B===V||g(B,V,_,E,p)))return D.push(X)})){$=!1;break}}else if(B!==G&&!g(B,G,_,E,p)){$=!1;break}}return p.delete(f),p.delete(m),$}},8351:(a,l,u)=>{var c=u(2705),d=u(1149),h=u(7813),f=u(7114),m=u(8776),_=u(1814),E=c?c.prototype:void 0,g=E?E.valueOf:void 0;a.exports=function(p,v,w,I,b,x,T){switch(w){case"[object DataView]":if(p.byteLength!=v.byteLength||p.byteOffset!=v.byteOffset)return!1;p=p.buffer,v=v.buffer;case"[object ArrayBuffer]":return!(p.byteLength!=v.byteLength||!x(new d(p),new d(v)));case"[object Boolean]":case"[object Date]":case"[object Number]":return h(+p,+v);case"[object Error]":return p.name==v.name&&p.message==v.message;case"[object RegExp]":case"[object String]":return p==v+"";case"[object Map]":var $=m;case"[object Set]":var D=1&I;if($||($=_),p.size!=v.size&&!D)return!1;var B=T.get(p);if(B)return B==v;I|=2,T.set(p,v);var G=f($(p),$(v),I,b,x,T);return T.delete(p),G;case"[object Symbol]":if(g)return g.call(p)==g.call(v)}return!1}},6096:(a,l,u)=>{var c=u(8234),d=Object.prototype.hasOwnProperty;a.exports=function(h,f,m,_,E,g){var p=1&m,v=c(h),w=v.length;if(w!=c(f).length&&!p)return!1;for(var I=w;I--;){var b=v[I];if(!(p?b in f:d.call(f,b)))return!1}var x=g.get(h),T=g.get(f);if(x&&T)return x==f&&T==h;var $=!0;g.set(h,f),g.set(f,h);for(var D=p;++I<w;){var B=h[b=v[I]],G=f[b];if(_)var z=p?_(G,B,b,f,h,g):_(B,G,b,h,f,g);if(!(z===void 0?B===G||E(B,G,m,_,g):z)){$=!1;break}D||(D=b=="constructor")}if($&&!D){var V=h.constructor,X=f.constructor;V==X||!("constructor"in h)||!("constructor"in f)||typeof V=="function"&&V instanceof V&&typeof X=="function"&&X instanceof X||($=!1)}return g.delete(h),g.delete(f),$}},1957:(a,l,u)=>{var c=typeof u.g=="object"&&u.g&&u.g.Object===Object&&u.g;a.exports=c},8234:(a,l,u)=>{var c=u(8866),d=u(9551),h=u(3674);a.exports=function(f){return c(f,h,d)}},5050:(a,l,u)=>{var c=u(7019);a.exports=function(d,h){var f=d.__data__;return c(h)?f[typeof h=="string"?"string":"hash"]:f.map}},852:(a,l,u)=>{var c=u(8458),d=u(7801);a.exports=function(h,f){var m=d(h,f);return c(m)?m:void 0}},9607:(a,l,u)=>{var c=u(2705),d=Object.prototype,h=d.hasOwnProperty,f=d.toString,m=c?c.toStringTag:void 0;a.exports=function(_){var E=h.call(_,m),g=_[m];try{_[m]=void 0;var p=!0}catch{}var v=f.call(_);return p&&(E?_[m]=g:delete _[m]),v}},9551:(a,l,u)=>{var c=u(4963),d=u(479),h=Object.prototype.propertyIsEnumerable,f=Object.getOwnPropertySymbols,m=f?function(_){return _==null?[]:(_=Object(_),c(f(_),function(E){return h.call(_,E)}))}:d;a.exports=m},4160:(a,l,u)=>{var c=u(8552),d=u(7071),h=u(3818),f=u(8525),m=u(577),_=u(4239),E=u(346),g="[object Map]",p="[object Promise]",v="[object Set]",w="[object WeakMap]",I="[object DataView]",b=E(c),x=E(d),T=E(h),$=E(f),D=E(m),B=_;(c&&B(new c(new ArrayBuffer(1)))!=I||d&&B(new d)!=g||h&&B(h.resolve())!=p||f&&B(new f)!=v||m&&B(new m)!=w)&&(B=function(G){var z=_(G),V=z=="[object Object]"?G.constructor:void 0,X=V?E(V):"";if(X)switch(X){case b:return I;case x:return g;case T:return p;case $:return v;case D:return w}return z}),a.exports=B},7801:a=>{a.exports=function(l,u){return l==null?void 0:l[u]}},1789:(a,l,u)=>{var c=u(4536);a.exports=function(){this.__data__=c?c(null):{},this.size=0}},401:a=>{a.exports=function(l){var u=this.has(l)&&delete this.__data__[l];return this.size-=u?1:0,u}},7667:(a,l,u)=>{var c=u(4536),d=Object.prototype.hasOwnProperty;a.exports=function(h){var f=this.__data__;if(c){var m=f[h];return m==="__lodash_hash_undefined__"?void 0:m}return d.call(f,h)?f[h]:void 0}},1327:(a,l,u)=>{var c=u(4536),d=Object.prototype.hasOwnProperty;a.exports=function(h){var f=this.__data__;return c?f[h]!==void 0:d.call(f,h)}},1866:(a,l,u)=>{var c=u(4536);a.exports=function(d,h){var f=this.__data__;return this.size+=this.has(d)?0:1,f[d]=c&&h===void 0?"__lodash_hash_undefined__":h,this}},5776:a=>{var l=/^(?:0|[1-9]\d*)$/;a.exports=function(u,c){var d=typeof u;return!!(c=c==null?9007199254740991:c)&&(d=="number"||d!="symbol"&&l.test(u))&&u>-1&&u%1==0&&u<c}},7019:a=>{a.exports=function(l){var u=typeof l;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?l!=="__proto__":l===null}},5346:(a,l,u)=>{var c,d=u(4429),h=(c=/[^.]+$/.exec(d&&d.keys&&d.keys.IE_PROTO||""))?"Symbol(src)_1."+c:"";a.exports=function(f){return!!h&&h in f}},5726:a=>{var l=Object.prototype;a.exports=function(u){var c=u&&u.constructor;return u===(typeof c=="function"&&c.prototype||l)}},7040:a=>{a.exports=function(){this.__data__=[],this.size=0}},4125:(a,l,u)=>{var c=u(8470),d=Array.prototype.splice;a.exports=function(h){var f=this.__data__,m=c(f,h);return!(m<0||(m==f.length-1?f.pop():d.call(f,m,1),--this.size,0))}},2117:(a,l,u)=>{var c=u(8470);a.exports=function(d){var h=this.__data__,f=c(h,d);return f<0?void 0:h[f][1]}},7518:(a,l,u)=>{var c=u(8470);a.exports=function(d){return c(this.__data__,d)>-1}},4705:(a,l,u)=>{var c=u(8470);a.exports=function(d,h){var f=this.__data__,m=c(f,d);return m<0?(++this.size,f.push([d,h])):f[m][1]=h,this}},4785:(a,l,u)=>{var c=u(1989),d=u(8407),h=u(7071);a.exports=function(){this.size=0,this.__data__={hash:new c,map:new(h||d),string:new c}}},1285:(a,l,u)=>{var c=u(5050);a.exports=function(d){var h=c(this,d).delete(d);return this.size-=h?1:0,h}},6e3:(a,l,u)=>{var c=u(5050);a.exports=function(d){return c(this,d).get(d)}},9916:(a,l,u)=>{var c=u(5050);a.exports=function(d){return c(this,d).has(d)}},5265:(a,l,u)=>{var c=u(5050);a.exports=function(d,h){var f=c(this,d),m=f.size;return f.set(d,h),this.size+=f.size==m?0:1,this}},8776:a=>{a.exports=function(l){var u=-1,c=Array(l.size);return l.forEach(function(d,h){c[++u]=[h,d]}),c}},4536:(a,l,u)=>{var c=u(852)(Object,"create");a.exports=c},6916:(a,l,u)=>{var c=u(5569)(Object.keys,Object);a.exports=c},1167:(a,l,u)=>{a=u.nmd(a);var c=u(1957),d=l&&!l.nodeType&&l,h=d&&a&&!a.nodeType&&a,f=h&&h.exports===d&&c.process,m=function(){try{return h&&h.require&&h.require("util").types||f&&f.binding&&f.binding("util")}catch{}}();a.exports=m},2333:a=>{var l=Object.prototype.toString;a.exports=function(u){return l.call(u)}},5569:a=>{a.exports=function(l,u){return function(c){return l(u(c))}}},5639:(a,l,u)=>{var c=u(1957),d=typeof self=="object"&&self&&self.Object===Object&&self,h=c||d||Function("return this")();a.exports=h},619:a=>{a.exports=function(l){return this.__data__.set(l,"__lodash_hash_undefined__"),this}},2385:a=>{a.exports=function(l){return this.__data__.has(l)}},1814:a=>{a.exports=function(l){var u=-1,c=Array(l.size);return l.forEach(function(d){c[++u]=d}),c}},7465:(a,l,u)=>{var c=u(8407);a.exports=function(){this.__data__=new c,this.size=0}},3779:a=>{a.exports=function(l){var u=this.__data__,c=u.delete(l);return this.size=u.size,c}},7599:a=>{a.exports=function(l){return this.__data__.get(l)}},4758:a=>{a.exports=function(l){return this.__data__.has(l)}},4309:(a,l,u)=>{var c=u(8407),d=u(7071),h=u(3369);a.exports=function(f,m){var _=this.__data__;if(_ instanceof c){var E=_.__data__;if(!d||E.length<199)return E.push([f,m]),this.size=++_.size,this;_=this.__data__=new h(E)}return _.set(f,m),this.size=_.size,this}},346:a=>{var l=Function.prototype.toString;a.exports=function(u){if(u!=null){try{return l.call(u)}catch{}try{return u+""}catch{}}return""}},7813:a=>{a.exports=function(l,u){return l===u||l!=l&&u!=u}},5694:(a,l,u)=>{var c=u(9454),d=u(7005),h=Object.prototype,f=h.hasOwnProperty,m=h.propertyIsEnumerable,_=c(function(){return arguments}())?c:function(E){return d(E)&&f.call(E,"callee")&&!m.call(E,"callee")};a.exports=_},1469:a=>{var l=Array.isArray;a.exports=l},8612:(a,l,u)=>{var c=u(3560),d=u(1780);a.exports=function(h){return h!=null&&d(h.length)&&!c(h)}},4144:(a,l,u)=>{a=u.nmd(a);var c=u(5639),d=u(5062),h=l&&!l.nodeType&&l,f=h&&a&&!a.nodeType&&a,m=f&&f.exports===h?c.Buffer:void 0,_=(m?m.isBuffer:void 0)||d;a.exports=_},8446:(a,l,u)=>{var c=u(939);a.exports=function(d,h){return c(d,h)}},3560:(a,l,u)=>{var c=u(4239),d=u(3218);a.exports=function(h){if(!d(h))return!1;var f=c(h);return f=="[object Function]"||f=="[object GeneratorFunction]"||f=="[object AsyncFunction]"||f=="[object Proxy]"}},1780:a=>{a.exports=function(l){return typeof l=="number"&&l>-1&&l%1==0&&l<=9007199254740991}},3218:a=>{a.exports=function(l){var u=typeof l;return l!=null&&(u=="object"||u=="function")}},7005:a=>{a.exports=function(l){return l!=null&&typeof l=="object"}},6719:(a,l,u)=>{var c=u(8749),d=u(1717),h=u(1167),f=h&&h.isTypedArray,m=f?d(f):c;a.exports=m},3674:(a,l,u)=>{var c=u(4636),d=u(280),h=u(8612);a.exports=function(f){return h(f)?c(f):d(f)}},479:a=>{a.exports=function(){return[]}},5062:a=>{a.exports=function(){return!1}},75:function(a){(function(){var l,u,c,d,h,f;typeof performance<"u"&&performance!==null&&performance.now?a.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(a.exports=function(){return(l()-h)/1e6},u=process.hrtime,d=(l=function(){var m;return 1e9*(m=u())[0]+m[1]})(),f=1e9*process.uptime(),h=d-f):Date.now?(a.exports=function(){return Date.now()-c},c=Date.now()):(a.exports=function(){return new Date().getTime()-c},c=new Date().getTime())}).call(this)},4087:(a,l,u)=>{for(var c=u(75),d=typeof window>"u"?u.g:window,h=["moz","webkit"],f="AnimationFrame",m=d["request"+f],_=d["cancel"+f]||d["cancelRequest"+f],E=0;!m&&E<h.length;E++)m=d[h[E]+"Request"+f],_=d[h[E]+"Cancel"+f]||d[h[E]+"CancelRequest"+f];if(!m||!_){var g=0,p=0,v=[];m=function(w){if(v.length===0){var I=c(),b=Math.max(0,16.666666666666668-(I-g));g=b+I,setTimeout(function(){var x=v.slice(0);v.length=0;for(var T=0;T<x.length;T++)if(!x[T].cancelled)try{x[T].callback(g)}catch($){setTimeout(function(){throw $},0)}},Math.round(b))}return v.push({handle:++p,callback:w,cancelled:!1}),p},_=function(w){for(var I=0;I<v.length;I++)v[I].handle===w&&(v[I].cancelled=!0)}}a.exports=function(w){return m.call(d,w)},a.exports.cancel=function(){_.apply(d,arguments)},a.exports.polyfill=function(w){w||(w=d),w.requestAnimationFrame=m,w.cancelAnimationFrame=_}},8156:a=>{a.exports=n}},i={};function o(a){var l=i[a];if(l!==void 0)return l.exports;var u=i[a]={id:a,loaded:!1,exports:{}};return r[a].call(u.exports,u,u.exports,o),u.loaded=!0,u.exports}o.n=a=>{var l=a&&a.__esModule?()=>a.default:()=>a;return o.d(l,{a:l}),l},o.d=(a,l)=>{for(var u in l)o.o(l,u)&&!o.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:l[u]})},o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),o.o=(a,l)=>Object.prototype.hasOwnProperty.call(a,l),o.nmd=a=>(a.paths=[],a.children||(a.children=[]),a);var s={};return(()=>{o.d(s,{default:()=>I});var a=o(8156),l=o.n(a),u=o(7403),c=o(8446),d=o.n(c);function h(b){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},h(b)}function f(b,x){if(!(b instanceof x))throw new TypeError("Cannot call a class as a function")}function m(b,x){for(var T=0;T<x.length;T++){var $=x[T];$.enumerable=$.enumerable||!1,$.configurable=!0,"value"in $&&($.writable=!0),Object.defineProperty(b,$.key,$)}}function _(b,x){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(T,$){return T.__proto__=$,T},_(b,x)}function E(b,x){if(x&&(h(x)==="object"||typeof x=="function"))return x;if(x!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return g(b)}function g(b){if(b===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b}function p(b){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(x){return x.__proto__||Object.getPrototypeOf(x)},p(b)}function v(b,x,T){return x in b?Object.defineProperty(b,x,{value:T,enumerable:!0,configurable:!0,writable:!0}):b[x]=T,b}var w=function(b){(function(z,V){if(typeof V!="function"&&V!==null)throw new TypeError("Super expression must either be null or a function");z.prototype=Object.create(V&&V.prototype,{constructor:{value:z,writable:!0,configurable:!0}}),Object.defineProperty(z,"prototype",{writable:!1}),V&&_(z,V)})(G,b);var x,T,$,D,B=($=G,D=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var z,V=p($);if(D){var X=p(this).constructor;z=Reflect.construct(V,arguments,X)}else z=V.apply(this,arguments);return E(this,z)});function G(){var z;f(this,G);for(var V=arguments.length,X=new Array(V),J=0;J<V;J++)X[J]=arguments[J];return v(g(z=B.call.apply(B,[this].concat(X))),"state",{instance:null}),z}return x=G,(T=[{key:"componentDidMount",value:function(){var z=this,V=new u.default(this.typewriter,this.props.options);this.setState({instance:V},function(){var X=z.props.onInit;X&&X(V)})}},{key:"componentDidUpdate",value:function(z){d()(this.props.options,z.options)||this.setState({instance:new u.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var z=this,V=this.props.component;return l().createElement(V,{ref:function(X){return z.typewriter=X},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&m(x.prototype,T),Object.defineProperty(x,"prototype",{writable:!1}),G}(a.Component);w.defaultProps={component:"div"};const I=w})(),s.default})())})(ZE);const HD=qv(ZE.exports),BD=()=>(S.exports.useContext(vi),ee(Bn,{children:[k(zD,{}),k("section",{children:k("div",{className:"container px-5 text-center",style:{minHeight:"10vh"},children:k(HD,{options:{strings:['<h2 class="fw-bold">Innovamos en el monitoreo de cultivos agr\xEDcolas.</h2>','<h2 class="fw-bold">Para mejorar la producci\xF3n de nuestros clientes.</h2>'],autoStart:!0,deleteSpeed:30,delay:50,loop:!0,pauseFor:2e3}})})}),k("hr",{className:"my-5"}),k("section",{children:ee("div",{className:"container",children:[k("div",{className:"text-center mb-4",children:k("h3",{className:"fw-bold",children:" \xBFQu\xE9 hacemos? "})}),ee("div",{className:"row g-0",children:[k("div",{className:"col-12 col-md-6",children:k("img",{src:"/media/ilustrations/13.png",className:"img-fluid",alt:"..."})}),k("div",{className:"col-12 col-md-6 py-5 px-2 text-center text-md-start",children:k("span",{className:"align-middle fs-5",children:"En Agrobime hemos logrado dise\xF1ar e implemntar todo un sistema de monitoreo electr\xF3nico de cultivos agr\xEDcolas, que nos permiten obtener informaci\xF3n de par\xE1metros muy importantes. Con esta informaci\xF3n, podemos realizar un an\xE1lisis de los cultivos y as\xED poder tomar decisiones para mejorar la producci\xF3n de nuestros clientes. Para este fin, hemos desarrollado esta plataforma web, que nos permite visualizar datos ya procesados, convertidos en estad\xEDsticas e informes."})})]})]})}),k("hr",{className:"my-5"}),k("section",{children:ee("div",{className:"container",children:[k("div",{className:"text-center mb-4",children:k("h3",{className:"fw-bold",children:" Proyectos en los que participamos "})}),ee("div",{id:"carouselExampleDark",className:"carousel carousel-dark slide shadow","data-bs-ride":"carousel",children:[ee("div",{className:"carousel-indicators",children:[k("button",{type:"button","data-bs-target":"#carouselExampleDark","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),k("button",{type:"button","data-bs-target":"#carouselExampleDark","data-bs-slide-to":"1","aria-label":"Slide 2"}),k("button",{type:"button","data-bs-target":"#carouselExampleDark","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),ee("div",{className:"carousel-inner",children:[ee("div",{className:"carousel-item active","data-bs-interval":"10000",children:[k("img",{src:"/media/1.jpeg",className:"d-block w-100",alt:"..."}),k("div",{className:"carousel-caption bg-dark text-light rounded-4 align-middle p-2",children:k("span",{children:"Monitoreo del Bio Huerto - Lurin"})})]}),ee("div",{className:"carousel-item","data-bs-interval":"2000",children:[k("img",{src:"/media/2.jpeg",className:"d-block w-100",alt:"..."}),k("div",{className:"carousel-caption bg-dark text-light rounded-4 align-middle p-2",children:k("span",{children:"Monitoreo del Bio Huerto - Lurin"})})]}),ee("div",{className:"carousel-item",children:[k("img",{src:"/media/3.jpeg",className:"d-block w-100",alt:"..."}),k("div",{className:"carousel-caption bg-dark text-light rounded-4 align-middle p-2",children:k("span",{children:"Monitoreo del Bio Huerto - Lurin"})})]})]}),ee("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleDark","data-bs-slide":"prev",children:[k("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),k("span",{className:"visually-hidden",children:"Anterior"})]}),ee("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleDark","data-bs-slide":"next",children:[k("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),k("span",{className:"visually-hidden",children:"Siguiente"})]})]})]})}),k("hr",{className:"my-5"}),k("section",{children:ee("div",{className:"container",children:[k("div",{className:"text-center mb-4",children:k("h3",{className:"fw-bold",children:" Nuestro equipo "})}),ee("div",{className:"text-center row row-cols-2 row-cols-md-3 g-4",children:[k("div",{className:"col",children:ee("div",{className:"card h-100",children:[k("img",{src:"/media/avatars/caleb-icon.jpg",className:"card-img-top",alt:"..."}),ee("div",{className:"card-body",children:[k("h5",{className:"card-title",children:"Caleb Ventura"}),k("p",{className:"card-text",children:"Ingenier\xEDa de Telecomuncaciones"})]})]})}),k("div",{className:"col",children:ee("div",{className:"card h-100",children:[k("img",{src:"/media/avatars/150-4.jpg",className:"card-img-top",alt:"..."}),ee("div",{className:"card-body",children:[k("h5",{className:"card-title",children:"Jamer Asencio"}),k("p",{className:"card-text",children:"Ingenier\xEDa Electr\xF3nica"})]})]})}),k("div",{className:"col",children:ee("div",{className:"card h-100",children:[k("img",{src:"/media/avatars/150-14.jpg",className:"card-img-top",alt:"..."}),ee("div",{className:"card-body",children:[k("h5",{className:"card-title",children:"Margaly Flores"}),k("p",{className:"card-text",children:"Ingenier\xEDa Eleectr\xF3nica"})]})]})}),k("div",{className:"col",children:ee("div",{className:"card h-100",children:[k("img",{src:"/media/avatars/150-9.jpg",className:"card-img-top",alt:"..."}),ee("div",{className:"card-body",children:[k("h5",{className:"card-title",children:"Marjorie"}),k("p",{className:"card-text",children:"Ingenier\xEDa Ambiental"})]})]})})]})]})}),k("hr",{className:"my-5"}),k("section",{children:ee("div",{className:"container",children:[k("div",{className:"text-center mb-4",children:k("h3",{className:"fw-bold",children:" Instituciones que nos respaldan"})}),ee("div",{className:"row",children:[k("div",{className:"col-6 text-center",children:k("img",{src:"/media/uni.png",className:"img-fluid",alt:"...",style:{width:"150px"}})}),k("div",{className:"col-6 text-center",children:k("img",{src:"/media/startupuni.jpg",className:"img-fluid",alt:"...",style:{width:"150px"}})})]})]})}),k("hr",{className:"my-5"}),k($p,{})]})),WD=()=>ee("nav",{className:"navbar navbar-expand navbar-dark bg-dark rounded-3 m-2",children:[k("div",{className:"container-fluid",children:ee(bu,{className:"navbar-brand",to:"/home",children:["Agrobime",k("img",{src:"/agrobime.png",alt:"Logo",width:"30",height:"24",className:"d-inline-block align-text-top"})]})}),k("div",{className:"navbar-collapse d-flex justify-content-end",children:k("div",{className:"navbar-nav",children:k(Pl,{className:"btn btn-primary mx-2 nav-link",to:"/home",children:" Home "})})})]}),VD=()=>{const{register:t,login:e}=S.exports.useContext(vi),n=ku(),[r,i]=S.exports.useState({email:"",password:""}),[o,s]=S.exports.useState(""),a=({target:{name:u,value:c}})=>{i({...r,[u]:c})};return ee(Bn,{children:[k(WD,{}),k("section",{className:"mt-4",children:k("div",{className:"container-fluid text-center",children:k("h1",{children:"Autorizaci\xF3n de usuario"})})}),k("section",{className:"mt-4",children:ee("div",{className:"container",children:[o?k("p",{className:"fw-bold text-danger",children:o}):"",k("div",{className:"card",children:ee("div",{className:"card-body",children:[ee("div",{className:"form-floating mb-3",children:[k("input",{type:"email",name:"email",className:"form-control",id:"floatingInput",placeholder:"name@agrobime.com",onChange:a}),k("label",{htmlFor:"floatingInput",children:"Correo electr\xF3nico"})]}),ee("div",{className:"form-floating",children:[k("input",{type:"password",name:"password",className:"form-control",id:"floatingPassword",placeholder:"Password",onChange:a}),k("label",{htmlFor:"floatingPassword",children:"Contrase\xF1a"})]}),k("div",{className:"mt-3",children:k("button",{className:"me-2 btn btn-primary",type:"button",onClick:async u=>{u.preventDefault();const c=localStorage.getItem("lastPath")||"/dashboard";try{await e(r),n(c,{replace:!0})}catch(d){switch(console.log(d.message),d.message){case"auth/weak-password":s("El password debe tener al menos 6 caracteres");break;case"auth/wrong-password":s("La contrase\xF1a es incorrecta");break;case"auth/user-not-found":s("El usuario no existe");break;case"auth/invalid-email":s("El email no es v\xE1lido");break;default:s("Hubo un error al iniciar sesi\xF3n");break}}},children:"Iniciar Sesi\xF3n"})})]})})]})}),k($p,{})]})},GD=()=>ee(Bn,{children:[k(AE,{}),k("h1",{children:"Monitoreo"})]}),QD=()=>{const t=ku(),{logout:e}=S.exports.useContext(vi);return k("nav",{className:"navbar navbar-expand navbar-dark bg-dark rounded-3 mx-2 mt-2 mb-5",children:ee("div",{className:"container-fluid",children:[ee(bu,{className:"navbar-brand",to:"/home",children:["Agrobime",k("img",{src:"/agrobime.png",alt:"Logo",width:"30",height:"24",className:"d-inline-block align-text-top"})]}),k("div",{className:"navbar-collapse",children:ee("div",{className:"navbar-nav",children:[k(Pl,{className:({isActive:r})=>`nav-link ${r?"active":""}`,to:"/monitoreo",children:"Monitoreo"}),k(Pl,{className:({isActive:r})=>`nav-link ${r?"active":""}`,to:"/dashboard",children:"Dashboard"})]})}),k("div",{className:"navbar-collapse mx-2 d-flex justify-content-end",children:k("ul",{className:"navbar-nav ml-auto",children:k("button",{className:"nav-item nav-link btn btn-danger",onClick:async()=>{t("/auth",{replace:!0}),await e()},children:" Logout"})})})]})})},KD=()=>ee(Bn,{children:[k(QD,{}),ee(f0,{children:[k(qr,{path:"/dashboard",element:k(UD,{})}),k(qr,{path:"/monitoreo",element:k(GD,{})}),k(qr,{path:"/*",element:k(Uf,{to:"/home"})})]})]}),YD=({children:t})=>{const{logged:e}=S.exports.useContext(vi),{pathname:n}=yo();return localStorage.setItem("lastPath",n),e?t:k(Uf,{to:"/auth"})},qD=({children:t})=>{const{logged:e}=S.exports.useContext(vi);return e?k(Uf,{to:"/dashboard"}):t},XD=()=>k("div",{className:"",children:ee(f0,{children:[k(qr,{path:"/home",element:k(BD,{})}),k(qr,{path:"/auth",element:ee(qD,{children:[" ",k(VD,{})," "]})}),k(qr,{path:"/*",element:ee(YD,{children:[" ",k(KD,{})," "]})})]})}),JD=()=>k(kO,{children:k(XD,{})});hd.createRoot(document.getElementById("root")).render(ee(Gx,{children:[" ",k(JD,{})]}));
