function EE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function SE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var v={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jo=Symbol.for("react.element"),xE=Symbol.for("react.portal"),kE=Symbol.for("react.fragment"),IE=Symbol.for("react.strict_mode"),TE=Symbol.for("react.profiler"),RE=Symbol.for("react.provider"),bE=Symbol.for("react.context"),PE=Symbol.for("react.forward_ref"),NE=Symbol.for("react.suspense"),OE=Symbol.for("react.memo"),AE=Symbol.for("react.lazy"),lm=Symbol.iterator;function DE(t){return t===null||typeof t!="object"?null:(t=lm&&t[lm]||t["@@iterator"],typeof t=="function"?t:null)}var K_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q_=Object.assign,Y_={};function hs(t,e,n){this.props=t,this.context=e,this.refs=Y_,this.updater=n||K_}hs.prototype.isReactComponent={};hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function q_(){}q_.prototype=hs.prototype;function Uh(t,e,n){this.props=t,this.context=e,this.refs=Y_,this.updater=n||K_}var zh=Uh.prototype=new q_;zh.constructor=Uh;Q_(zh,hs.prototype);zh.isPureReactComponent=!0;var am=Array.isArray,X_=Object.prototype.hasOwnProperty,jh={current:null},J_={key:!0,ref:!0,__self:!0,__source:!0};function Z_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)X_.call(e,r)&&!J_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:jo,type:t,key:s,ref:o,props:i,_owner:jh.current}}function LE(t,e){return{$$typeof:jo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hh(t){return typeof t=="object"&&t!==null&&t.$$typeof===jo}function ME(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var um=/\/+/g;function mc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ME(""+t.key):e.toString(36)}function $l(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case jo:case xE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+mc(o,0):r,am(i)?(n="",t!=null&&(n=t.replace(um,"$&/")+"/"),$l(i,e,n,"",function(u){return u})):i!=null&&(Hh(i)&&(i=LE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(um,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",am(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+mc(s,l);o+=$l(s,e,n,a,i)}else if(a=DE(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+mc(s,l++),o+=$l(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pl(t,e,n){if(t==null)return t;var r=[],i=0;return $l(t,r,"","",function(s){return e.call(n,s,i++)}),r}function FE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vt={current:null},Ul={transition:null},$E={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:Ul,ReactCurrentOwner:jh};ie.Children={map:pl,forEach:function(t,e,n){pl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pl(t,function(){e++}),e},toArray:function(t){return pl(t,function(e){return e})||[]},only:function(t){if(!Hh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=hs;ie.Fragment=kE;ie.Profiler=TE;ie.PureComponent=Uh;ie.StrictMode=IE;ie.Suspense=NE;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$E;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Q_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)X_.call(e,a)&&!J_.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:jo,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:bE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:RE,_context:t},t.Consumer=t};ie.createElement=Z_;ie.createFactory=function(t){var e=Z_.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:PE,render:t}};ie.isValidElement=Hh;ie.lazy=function(t){return{$$typeof:AE,_payload:{_status:-1,_result:t},_init:FE}};ie.memo=function(t,e){return{$$typeof:OE,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Ul.transition;Ul.transition={};try{t()}finally{Ul.transition=e}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(t,e){return vt.current.useCallback(t,e)};ie.useContext=function(t){return vt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return vt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return vt.current.useEffect(t,e)};ie.useId=function(){return vt.current.useId()};ie.useImperativeHandle=function(t,e,n){return vt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return vt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return vt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return vt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return vt.current.useReducer(t,e,n)};ie.useRef=function(t){return vt.current.useRef(t)};ie.useState=function(t){return vt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return vt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return vt.current.useTransition()};ie.version="18.2.0";(function(t){t.exports=ie})(v);const ee=SE(v.exports),ld=EE({__proto__:null,default:ee},[v.exports]);var ad={},ev={exports:{}},Dt={},tv={exports:{}},nv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,$){var j=O.length;O.push($);e:for(;0<j;){var ce=j-1>>>1,b=O[ce];if(0<i(b,$))O[ce]=$,O[j]=b,j=ce;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var $=O[0],j=O.pop();if(j!==$){O[0]=j;e:for(var ce=0,b=O.length,L=b>>>1;ce<L;){var D=2*(ce+1)-1,U=O[D],C=D+1,Q=O[C];if(0>i(U,j))C<b&&0>i(Q,U)?(O[ce]=Q,O[C]=j,ce=C):(O[ce]=U,O[D]=j,ce=D);else if(C<b&&0>i(Q,j))O[ce]=Q,O[C]=j,ce=C;else break e}}return $}function i(O,$){var j=O.sortIndex-$.sortIndex;return j!==0?j:O.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,m=!1,g=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(O){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=O)r(u),$.sortIndex=$.expirationTime,e(a,$);else break;$=n(u)}}function w(O){if(y=!1,_(O),!g)if(n(a)!==null)g=!0,ot(S);else{var $=n(u);$!==null&&De(w,$.startTime-O)}}function S(O,$){g=!1,y&&(y=!1,p(I),I=-1),m=!0;var j=h;try{for(_($),c=n(a);c!==null&&(!(c.expirationTime>$)||O&&!he());){var ce=c.callback;if(typeof ce=="function"){c.callback=null,h=c.priorityLevel;var b=ce(c.expirationTime<=$);$=t.unstable_now(),typeof b=="function"?c.callback=b:c===n(a)&&r(a),_($)}else r(a);c=n(a)}if(c!==null)var L=!0;else{var D=n(u);D!==null&&De(w,D.startTime-$),L=!1}return L}finally{c=null,h=j,m=!1}}var P=!1,k=null,I=-1,K=5,F=-1;function he(){return!(t.unstable_now()-F<K)}function ge(){if(k!==null){var O=t.unstable_now();F=O;var $=!0;try{$=k(!0,O)}finally{$?J():(P=!1,k=null)}}else P=!1}var J;if(typeof f=="function")J=function(){f(ge)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,Ae=ze.port2;ze.port1.onmessage=ge,J=function(){Ae.postMessage(null)}}else J=function(){E(ge,0)};function ot(O){k=O,P||(P=!0,J())}function De(O,$){I=E(function(){O(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,ot(S))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(O){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var j=h;h=$;try{return O()}finally{h=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,$){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var j=h;h=O;try{return $()}finally{h=j}},t.unstable_scheduleCallback=function(O,$,j){var ce=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ce+j:ce):j=ce,O){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=j+b,O={id:d++,callback:$,priorityLevel:O,startTime:j,expirationTime:b,sortIndex:-1},j>ce?(O.sortIndex=j,e(u,O),n(a)===null&&O===n(u)&&(y?(p(I),I=-1):y=!0,De(w,j-ce))):(O.sortIndex=b,e(a,O),g||m||(g=!0,ot(S))),O},t.unstable_shouldYield=he,t.unstable_wrapCallback=function(O){var $=h;return function(){var j=h;h=$;try{return O.apply(this,arguments)}finally{h=j}}}})(nv);(function(t){t.exports=nv})(tv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv=v.exports,Ot=tv.exports;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iv=new Set,co={};function ci(t,e){Ki(t,e),Ki(t+"Capture",e)}function Ki(t,e){for(co[t]=e,t=0;t<e.length;t++)iv.add(e[t])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ud=Object.prototype.hasOwnProperty,UE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cm={},dm={};function zE(t){return ud.call(dm,t)?!0:ud.call(cm,t)?!1:UE.test(t)?dm[t]=!0:(cm[t]=!0,!1)}function jE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function HE(t,e,n,r){if(e===null||typeof e>"u"||jE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){st[t]=new yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];st[e]=new yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){st[t]=new yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){st[t]=new yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){st[t]=new yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){st[t]=new yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){st[t]=new yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){st[t]=new yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){st[t]=new yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bh=/[\-:]([a-z])/g;function Wh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bh,Wh);st[e]=new yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bh,Wh);st[e]=new yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bh,Wh);st[e]=new yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){st[t]=new yt(t,1,!1,t.toLowerCase(),null,!1,!1)});st.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){st[t]=new yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vh(t,e,n,r){var i=st.hasOwnProperty(e)?st[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(HE(e,n,i,r)&&(n=null),r||i===null?zE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Un=rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ml=Symbol.for("react.element"),Si=Symbol.for("react.portal"),xi=Symbol.for("react.fragment"),Gh=Symbol.for("react.strict_mode"),cd=Symbol.for("react.profiler"),sv=Symbol.for("react.provider"),ov=Symbol.for("react.context"),Kh=Symbol.for("react.forward_ref"),dd=Symbol.for("react.suspense"),hd=Symbol.for("react.suspense_list"),Qh=Symbol.for("react.memo"),Vn=Symbol.for("react.lazy"),lv=Symbol.for("react.offscreen"),hm=Symbol.iterator;function Rs(t){return t===null||typeof t!="object"?null:(t=hm&&t[hm]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,gc;function zs(t){if(gc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gc=e&&e[1]||""}return`
`+gc+t}var _c=!1;function vc(t,e){if(!t||_c)return"";_c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{_c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zs(t):""}function BE(t){switch(t.tag){case 5:return zs(t.type);case 16:return zs("Lazy");case 13:return zs("Suspense");case 19:return zs("SuspenseList");case 0:case 2:case 15:return t=vc(t.type,!1),t;case 11:return t=vc(t.type.render,!1),t;case 1:return t=vc(t.type,!0),t;default:return""}}function fd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xi:return"Fragment";case Si:return"Portal";case cd:return"Profiler";case Gh:return"StrictMode";case dd:return"Suspense";case hd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ov:return(t.displayName||"Context")+".Consumer";case sv:return(t._context.displayName||"Context")+".Provider";case Kh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qh:return e=t.displayName||null,e!==null?e:fd(t.type)||"Memo";case Vn:e=t._payload,t=t._init;try{return fd(t(e))}catch{}}return null}function WE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fd(e);case 8:return e===Gh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function av(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function VE(t){var e=av(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gl(t){t._valueTracker||(t._valueTracker=VE(t))}function uv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=av(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function na(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pd(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function fm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cv(t,e){e=e.checked,e!=null&&Vh(t,"checked",e,!1)}function md(t,e){cv(t,e);var n=wr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gd(t,e.type,n):e.hasOwnProperty("defaultValue")&&gd(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gd(t,e,n){(e!=="number"||na(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var js=Array.isArray;function Fi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _d(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(js(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function dv(t,e){var n=wr(e.value),r=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function gm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _l,fv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_l=_l||document.createElement("div"),_l.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_l.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},GE=["Webkit","ms","Moz","O"];Object.keys(Gs).forEach(function(t){GE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gs[e]=Gs[t]})});function pv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gs.hasOwnProperty(t)&&Gs[t]?(""+e).trim():e+"px"}function mv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var KE=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yd(t,e){if(e){if(KE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function wd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cd=null;function Yh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ed=null,$i=null,Ui=null;function _m(t){if(t=Wo(t)){if(typeof Ed!="function")throw Error(x(280));var e=t.stateNode;e&&(e=lu(e),Ed(t.stateNode,t.type,e))}}function gv(t){$i?Ui?Ui.push(t):Ui=[t]:$i=t}function _v(){if($i){var t=$i,e=Ui;if(Ui=$i=null,_m(t),e)for(t=0;t<e.length;t++)_m(e[t])}}function vv(t,e){return t(e)}function yv(){}var yc=!1;function wv(t,e,n){if(yc)return t(e,n);yc=!0;try{return vv(t,e,n)}finally{yc=!1,($i!==null||Ui!==null)&&(yv(),_v())}}function fo(t,e){var n=t.stateNode;if(n===null)return null;var r=lu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var Sd=!1;if(An)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){Sd=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{Sd=!1}function QE(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Ks=!1,ra=null,ia=!1,xd=null,YE={onError:function(t){Ks=!0,ra=t}};function qE(t,e,n,r,i,s,o,l,a){Ks=!1,ra=null,QE.apply(YE,arguments)}function XE(t,e,n,r,i,s,o,l,a){if(qE.apply(this,arguments),Ks){if(Ks){var u=ra;Ks=!1,ra=null}else throw Error(x(198));ia||(ia=!0,xd=u)}}function di(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vm(t){if(di(t)!==t)throw Error(x(188))}function JE(t){var e=t.alternate;if(!e){if(e=di(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vm(i),t;if(s===r)return vm(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function Ev(t){return t=JE(t),t!==null?Sv(t):null}function Sv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sv(t);if(e!==null)return e;t=t.sibling}return null}var xv=Ot.unstable_scheduleCallback,ym=Ot.unstable_cancelCallback,ZE=Ot.unstable_shouldYield,eS=Ot.unstable_requestPaint,Ue=Ot.unstable_now,tS=Ot.unstable_getCurrentPriorityLevel,qh=Ot.unstable_ImmediatePriority,kv=Ot.unstable_UserBlockingPriority,sa=Ot.unstable_NormalPriority,nS=Ot.unstable_LowPriority,Iv=Ot.unstable_IdlePriority,ru=null,_n=null;function rS(t){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(ru,t,void 0,(t.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:oS,iS=Math.log,sS=Math.LN2;function oS(t){return t>>>=0,t===0?32:31-(iS(t)/sS|0)|0}var vl=64,yl=4194304;function Hs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function oa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Hs(l):(s&=o,s!==0&&(r=Hs(s)))}else o=n&~i,o!==0?r=Hs(o):s!==0&&(r=Hs(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-sn(e),i=1<<n,r|=t[n],e&=~i;return r}function lS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function aS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-sn(s),l=1<<o,a=i[o];a===-1?((l&n)===0||(l&r)!==0)&&(i[o]=lS(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function kd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Tv(){var t=vl;return vl<<=1,(vl&4194240)===0&&(vl=64),t}function wc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ho(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-sn(e),t[e]=n}function uS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-sn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Xh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-sn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function Rv(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var bv,Jh,Pv,Nv,Ov,Id=!1,wl=[],ir=null,sr=null,or=null,po=new Map,mo=new Map,Kn=[],cS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wm(t,e){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(e.pointerId)}}function Ps(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Wo(e),e!==null&&Jh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function dS(t,e,n,r,i){switch(e){case"focusin":return ir=Ps(ir,t,e,n,r,i),!0;case"dragenter":return sr=Ps(sr,t,e,n,r,i),!0;case"mouseover":return or=Ps(or,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return po.set(s,Ps(po.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,mo.set(s,Ps(mo.get(s)||null,t,e,n,r,i)),!0}return!1}function Av(t){var e=zr(t.target);if(e!==null){var n=di(e);if(n!==null){if(e=n.tag,e===13){if(e=Cv(n),e!==null){t.blockedOn=e,Ov(t.priority,function(){Pv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Td(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Cd=r,n.target.dispatchEvent(r),Cd=null}else return e=Wo(n),e!==null&&Jh(e),t.blockedOn=n,!1;e.shift()}return!0}function Cm(t,e,n){zl(t)&&n.delete(e)}function hS(){Id=!1,ir!==null&&zl(ir)&&(ir=null),sr!==null&&zl(sr)&&(sr=null),or!==null&&zl(or)&&(or=null),po.forEach(Cm),mo.forEach(Cm)}function Ns(t,e){t.blockedOn===e&&(t.blockedOn=null,Id||(Id=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,hS)))}function go(t){function e(i){return Ns(i,t)}if(0<wl.length){Ns(wl[0],t);for(var n=1;n<wl.length;n++){var r=wl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ir!==null&&Ns(ir,t),sr!==null&&Ns(sr,t),or!==null&&Ns(or,t),po.forEach(e),mo.forEach(e),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)Av(n),n.blockedOn===null&&Kn.shift()}var zi=Un.ReactCurrentBatchConfig,la=!0;function fS(t,e,n,r){var i=fe,s=zi.transition;zi.transition=null;try{fe=1,Zh(t,e,n,r)}finally{fe=i,zi.transition=s}}function pS(t,e,n,r){var i=fe,s=zi.transition;zi.transition=null;try{fe=4,Zh(t,e,n,r)}finally{fe=i,zi.transition=s}}function Zh(t,e,n,r){if(la){var i=Td(t,e,n,r);if(i===null)Pc(t,e,r,aa,n),wm(t,r);else if(dS(i,t,e,n,r))r.stopPropagation();else if(wm(t,r),e&4&&-1<cS.indexOf(t)){for(;i!==null;){var s=Wo(i);if(s!==null&&bv(s),s=Td(t,e,n,r),s===null&&Pc(t,e,r,aa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Pc(t,e,r,null,n)}}var aa=null;function Td(t,e,n,r){if(aa=null,t=Yh(r),t=zr(t),t!==null)if(e=di(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Cv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return aa=t,null}function Dv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tS()){case qh:return 1;case kv:return 4;case sa:case nS:return 16;case Iv:return 536870912;default:return 16}default:return 16}}var Zn=null,ef=null,jl=null;function Lv(){if(jl)return jl;var t,e=ef,n=e.length,r,i="value"in Zn?Zn.value:Zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return jl=i.slice(t,1<r?1-r:void 0)}function Hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cl(){return!0}function Em(){return!1}function Lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Cl:Em,this.isPropagationStopped=Em,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cl)},persist:function(){},isPersistent:Cl}),e}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tf=Lt(fs),Bo=Oe({},fs,{view:0,detail:0}),mS=Lt(Bo),Cc,Ec,Os,iu=Oe({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Os&&(Os&&t.type==="mousemove"?(Cc=t.screenX-Os.screenX,Ec=t.screenY-Os.screenY):Ec=Cc=0,Os=t),Cc)},movementY:function(t){return"movementY"in t?t.movementY:Ec}}),Sm=Lt(iu),gS=Oe({},iu,{dataTransfer:0}),_S=Lt(gS),vS=Oe({},Bo,{relatedTarget:0}),Sc=Lt(vS),yS=Oe({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),wS=Lt(yS),CS=Oe({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ES=Lt(CS),SS=Oe({},fs,{data:0}),xm=Lt(SS),xS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=IS[t])?!!e[t]:!1}function nf(){return TS}var RS=Oe({},Bo,{key:function(t){if(t.key){var e=xS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bS=Lt(RS),PS=Oe({},iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),km=Lt(PS),NS=Oe({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),OS=Lt(NS),AS=Oe({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),DS=Lt(AS),LS=Oe({},iu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),MS=Lt(LS),FS=[9,13,27,32],rf=An&&"CompositionEvent"in window,Qs=null;An&&"documentMode"in document&&(Qs=document.documentMode);var $S=An&&"TextEvent"in window&&!Qs,Mv=An&&(!rf||Qs&&8<Qs&&11>=Qs),Im=String.fromCharCode(32),Tm=!1;function Fv(t,e){switch(t){case"keyup":return FS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $v(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ki=!1;function US(t,e){switch(t){case"compositionend":return $v(e);case"keypress":return e.which!==32?null:(Tm=!0,Im);case"textInput":return t=e.data,t===Im&&Tm?null:t;default:return null}}function zS(t,e){if(ki)return t==="compositionend"||!rf&&Fv(t,e)?(t=Lv(),jl=ef=Zn=null,ki=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mv&&e.locale!=="ko"?null:e.data;default:return null}}var jS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jS[t.type]:e==="textarea"}function Uv(t,e,n,r){gv(r),e=ua(e,"onChange"),0<e.length&&(n=new tf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ys=null,_o=null;function HS(t){qv(t,0)}function su(t){var e=Ri(t);if(uv(e))return t}function BS(t,e){if(t==="change")return e}var zv=!1;if(An){var xc;if(An){var kc="oninput"in document;if(!kc){var bm=document.createElement("div");bm.setAttribute("oninput","return;"),kc=typeof bm.oninput=="function"}xc=kc}else xc=!1;zv=xc&&(!document.documentMode||9<document.documentMode)}function Pm(){Ys&&(Ys.detachEvent("onpropertychange",jv),_o=Ys=null)}function jv(t){if(t.propertyName==="value"&&su(_o)){var e=[];Uv(e,_o,t,Yh(t)),wv(HS,e)}}function WS(t,e,n){t==="focusin"?(Pm(),Ys=e,_o=n,Ys.attachEvent("onpropertychange",jv)):t==="focusout"&&Pm()}function VS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return su(_o)}function GS(t,e){if(t==="click")return su(e)}function KS(t,e){if(t==="input"||t==="change")return su(e)}function QS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var an=typeof Object.is=="function"?Object.is:QS;function vo(t,e){if(an(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ud.call(e,i)||!an(t[i],e[i]))return!1}return!0}function Nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Om(t,e){var n=Nm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nm(n)}}function Hv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bv(){for(var t=window,e=na();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=na(t.document)}return e}function sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function YS(t){var e=Bv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hv(n.ownerDocument.documentElement,n)){if(r!==null&&sf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Om(n,s);var o=Om(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qS=An&&"documentMode"in document&&11>=document.documentMode,Ii=null,Rd=null,qs=null,bd=!1;function Am(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bd||Ii==null||Ii!==na(r)||(r=Ii,"selectionStart"in r&&sf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qs&&vo(qs,r)||(qs=r,r=ua(Rd,"onSelect"),0<r.length&&(e=new tf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ii)))}function El(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ti={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionend:El("Transition","TransitionEnd")},Ic={},Wv={};An&&(Wv=document.createElement("div").style,"AnimationEvent"in window||(delete Ti.animationend.animation,delete Ti.animationiteration.animation,delete Ti.animationstart.animation),"TransitionEvent"in window||delete Ti.transitionend.transition);function ou(t){if(Ic[t])return Ic[t];if(!Ti[t])return t;var e=Ti[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Wv)return Ic[t]=e[n];return t}var Vv=ou("animationend"),Gv=ou("animationiteration"),Kv=ou("animationstart"),Qv=ou("transitionend"),Yv=new Map,Dm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){Yv.set(t,e),ci(e,[t])}for(var Tc=0;Tc<Dm.length;Tc++){var Rc=Dm[Tc],XS=Rc.toLowerCase(),JS=Rc[0].toUpperCase()+Rc.slice(1);Tr(XS,"on"+JS)}Tr(Vv,"onAnimationEnd");Tr(Gv,"onAnimationIteration");Tr(Kv,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(Qv,"onTransitionEnd");Ki("onMouseEnter",["mouseout","mouseover"]);Ki("onMouseLeave",["mouseout","mouseover"]);Ki("onPointerEnter",["pointerout","pointerover"]);Ki("onPointerLeave",["pointerout","pointerover"]);ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bs));function Lm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,XE(r,e,void 0,t),t.currentTarget=null}function qv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Lm(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Lm(i,l,u),s=a}}}if(ia)throw t=xd,ia=!1,xd=null,t}function xe(t,e){var n=e[Dd];n===void 0&&(n=e[Dd]=new Set);var r=t+"__bubble";n.has(r)||(Xv(e,t,2,!1),n.add(r))}function bc(t,e,n){var r=0;e&&(r|=4),Xv(n,t,r,e)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[Sl]){t[Sl]=!0,iv.forEach(function(n){n!=="selectionchange"&&(ZS.has(n)||bc(n,!1,t),bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Sl]||(e[Sl]=!0,bc("selectionchange",!1,e))}}function Xv(t,e,n,r){switch(Dv(e)){case 1:var i=fS;break;case 4:i=pS;break;default:i=Zh}n=i.bind(null,e,n,t),i=void 0,!Sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Pc(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=zr(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}wv(function(){var u=s,d=Yh(n),c=[];e:{var h=Yv.get(t);if(h!==void 0){var m=tf,g=t;switch(t){case"keypress":if(Hl(n)===0)break e;case"keydown":case"keyup":m=bS;break;case"focusin":g="focus",m=Sc;break;case"focusout":g="blur",m=Sc;break;case"beforeblur":case"afterblur":m=Sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=_S;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=OS;break;case Vv:case Gv:case Kv:m=wS;break;case Qv:m=DS;break;case"scroll":m=mS;break;case"wheel":m=MS;break;case"copy":case"cut":case"paste":m=ES;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=km}var y=(e&4)!==0,E=!y&&t==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,_;f!==null;){_=f;var w=_.stateNode;if(_.tag===5&&w!==null&&(_=w,p!==null&&(w=fo(f,p),w!=null&&y.push(wo(f,w,_)))),E)break;f=f.return}0<y.length&&(h=new m(h,g,null,n,d),c.push({event:h,listeners:y}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Cd&&(g=n.relatedTarget||n.fromElement)&&(zr(g)||g[Dn]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?zr(g):null,g!==null&&(E=di(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(y=Sm,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=km,w="onPointerLeave",p="onPointerEnter",f="pointer"),E=m==null?h:Ri(m),_=g==null?h:Ri(g),h=new y(w,f+"leave",m,n,d),h.target=E,h.relatedTarget=_,w=null,zr(d)===u&&(y=new y(p,f+"enter",g,n,d),y.target=_,y.relatedTarget=E,w=y),E=w,m&&g)t:{for(y=m,p=g,f=0,_=y;_;_=Ci(_))f++;for(_=0,w=p;w;w=Ci(w))_++;for(;0<f-_;)y=Ci(y),f--;for(;0<_-f;)p=Ci(p),_--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=Ci(y),p=Ci(p)}y=null}else y=null;m!==null&&Mm(c,h,m,y,!1),g!==null&&E!==null&&Mm(c,E,g,y,!0)}}e:{if(h=u?Ri(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var S=BS;else if(Rm(h))if(zv)S=KS;else{S=VS;var P=WS}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=GS);if(S&&(S=S(t,u))){Uv(c,S,n,d);break e}P&&P(t,h,u),t==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&gd(h,"number",h.value)}switch(P=u?Ri(u):window,t){case"focusin":(Rm(P)||P.contentEditable==="true")&&(Ii=P,Rd=u,qs=null);break;case"focusout":qs=Rd=Ii=null;break;case"mousedown":bd=!0;break;case"contextmenu":case"mouseup":case"dragend":bd=!1,Am(c,n,d);break;case"selectionchange":if(qS)break;case"keydown":case"keyup":Am(c,n,d)}var k;if(rf)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else ki?Fv(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Mv&&n.locale!=="ko"&&(ki||I!=="onCompositionStart"?I==="onCompositionEnd"&&ki&&(k=Lv()):(Zn=d,ef="value"in Zn?Zn.value:Zn.textContent,ki=!0)),P=ua(u,I),0<P.length&&(I=new xm(I,t,null,n,d),c.push({event:I,listeners:P}),k?I.data=k:(k=$v(n),k!==null&&(I.data=k)))),(k=$S?US(t,n):zS(t,n))&&(u=ua(u,"onBeforeInput"),0<u.length&&(d=new xm("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=k))}qv(c,e)})}function wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ua(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fo(t,n),s!=null&&r.unshift(wo(t,s,i)),s=fo(t,e),s!=null&&r.push(wo(t,s,i))),t=t.return}return r}function Ci(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=fo(n,s),a!=null&&o.unshift(wo(n,a,l))):i||(a=fo(n,s),a!=null&&o.push(wo(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var e1=/\r\n?/g,t1=/\u0000|\uFFFD/g;function Fm(t){return(typeof t=="string"?t:""+t).replace(e1,`
`).replace(t1,"")}function xl(t,e,n){if(e=Fm(e),Fm(t)!==e&&n)throw Error(x(425))}function ca(){}var Pd=null,Nd=null;function Od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ad=typeof setTimeout=="function"?setTimeout:void 0,n1=typeof clearTimeout=="function"?clearTimeout:void 0,$m=typeof Promise=="function"?Promise:void 0,r1=typeof queueMicrotask=="function"?queueMicrotask:typeof $m<"u"?function(t){return $m.resolve(null).then(t).catch(i1)}:Ad;function i1(t){setTimeout(function(){throw t})}function Nc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),go(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);go(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Um(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ps=Math.random().toString(36).slice(2),mn="__reactFiber$"+ps,Co="__reactProps$"+ps,Dn="__reactContainer$"+ps,Dd="__reactEvents$"+ps,s1="__reactListeners$"+ps,o1="__reactHandles$"+ps;function zr(t){var e=t[mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dn]||n[mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Um(t);t!==null;){if(n=t[mn])return n;t=Um(t)}return e}t=n,n=t.parentNode}return null}function Wo(t){return t=t[mn]||t[Dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ri(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function lu(t){return t[Co]||null}var Ld=[],bi=-1;function Rr(t){return{current:t}}function ke(t){0>bi||(t.current=Ld[bi],Ld[bi]=null,bi--)}function Ce(t,e){bi++,Ld[bi]=t.current,t.current=e}var Cr={},ht=Rr(Cr),xt=Rr(!1),Yr=Cr;function Qi(t,e){var n=t.type.contextTypes;if(!n)return Cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function da(){ke(xt),ke(ht)}function zm(t,e,n){if(ht.current!==Cr)throw Error(x(168));Ce(ht,e),Ce(xt,n)}function Jv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,WE(t)||"Unknown",i));return Oe({},n,r)}function ha(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,Yr=ht.current,Ce(ht,t),Ce(xt,xt.current),!0}function jm(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=Jv(t,e,Yr),r.__reactInternalMemoizedMergedChildContext=t,ke(xt),ke(ht),Ce(ht,t)):ke(xt),Ce(xt,n)}var In=null,au=!1,Oc=!1;function Zv(t){In===null?In=[t]:In.push(t)}function l1(t){au=!0,Zv(t)}function br(){if(!Oc&&In!==null){Oc=!0;var t=0,e=fe;try{var n=In;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}In=null,au=!1}catch(i){throw In!==null&&(In=In.slice(t+1)),xv(qh,br),i}finally{fe=e,Oc=!1}}return null}var Pi=[],Ni=0,fa=null,pa=0,$t=[],Ut=0,qr=null,Tn=1,Rn="";function Lr(t,e){Pi[Ni++]=pa,Pi[Ni++]=fa,fa=t,pa=e}function ey(t,e,n){$t[Ut++]=Tn,$t[Ut++]=Rn,$t[Ut++]=qr,qr=t;var r=Tn;t=Rn;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var s=32-sn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tn=1<<32-sn(e)+i|n<<i|r,Rn=s+t}else Tn=1<<s|n<<i|r,Rn=t}function of(t){t.return!==null&&(Lr(t,1),ey(t,1,0))}function lf(t){for(;t===fa;)fa=Pi[--Ni],Pi[Ni]=null,pa=Pi[--Ni],Pi[Ni]=null;for(;t===qr;)qr=$t[--Ut],$t[Ut]=null,Rn=$t[--Ut],$t[Ut]=null,Tn=$t[--Ut],$t[Ut]=null}var Nt=null,Pt=null,Ie=!1,tn=null;function ty(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nt=t,Pt=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nt=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:Tn,overflow:Rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nt=t,Pt=null,!0):!1;default:return!1}}function Md(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fd(t){if(Ie){var e=Pt;if(e){var n=e;if(!Hm(t,e)){if(Md(t))throw Error(x(418));e=lr(n.nextSibling);var r=Nt;e&&Hm(t,e)?ty(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Nt=t)}}else{if(Md(t))throw Error(x(418));t.flags=t.flags&-4097|2,Ie=!1,Nt=t}}}function Bm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function kl(t){if(t!==Nt)return!1;if(!Ie)return Bm(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Od(t.type,t.memoizedProps)),e&&(e=Pt)){if(Md(t))throw ny(),Error(x(418));for(;e;)ty(t,e),e=lr(e.nextSibling)}if(Bm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=Nt?lr(t.stateNode.nextSibling):null;return!0}function ny(){for(var t=Pt;t;)t=lr(t.nextSibling)}function Yi(){Pt=Nt=null,Ie=!1}function af(t){tn===null?tn=[t]:tn.push(t)}var a1=Un.ReactCurrentBatchConfig;function Zt(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ma=Rr(null),ga=null,Oi=null,uf=null;function cf(){uf=Oi=ga=null}function df(t){var e=ma.current;ke(ma),t._currentValue=e}function $d(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ji(t,e){ga=t,uf=Oi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Et=!0),t.firstContext=null)}function Vt(t){var e=t._currentValue;if(uf!==t)if(t={context:t,memoizedValue:e,next:null},Oi===null){if(ga===null)throw Error(x(308));Oi=t,ga.dependencies={lanes:0,firstContext:t}}else Oi=Oi.next=t;return e}var jr=null;function hf(t){jr===null?jr=[t]:jr.push(t)}function ry(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,hf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ln(t,r)}function Ln(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gn=!1;function ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function On(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ae&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ln(t,n)}return i=r.interleaved,i===null?(e.next=e,hf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ln(t,n)}function Bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xh(t,n)}}function Wm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _a(t,e,n,r){var i=t.updateQueue;Gn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,m=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=t,y=l;switch(h=e,m=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){c=g.call(m,c,h);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,h=typeof g=="function"?g.call(m,c,h):g,h==null)break e;c=Oe({},c,h);break e;case 2:Gn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else m={eventTime:m,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,a=c):d=d.next=m,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=c}}function Vm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var sy=new rv.Component().refs;function Ud(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var uu={isMounted:function(t){return(t=t._reactInternals)?di(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=_t(),i=cr(t),s=On(r,i);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(on(e,t,i,r),Bl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=_t(),i=cr(t),s=On(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(on(e,t,i,r),Bl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_t(),r=cr(t),i=On(n,r);i.tag=2,e!=null&&(i.callback=e),e=ar(t,i,r),e!==null&&(on(e,t,r,n),Bl(e,t,r))}};function Gm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!vo(n,r)||!vo(i,s):!0}function oy(t,e,n){var r=!1,i=Cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(i=kt(e)?Yr:ht.current,r=e.contextTypes,s=(r=r!=null)?Qi(t,i):Cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=uu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Km(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&uu.enqueueReplaceState(e,e.state,null)}function zd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=sy,ff(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Vt(s):(s=kt(e)?Yr:ht.current,i.context=Qi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ud(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&uu.enqueueReplaceState(i,i.state,null),_a(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===sy&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Il(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qm(t){var e=t._init;return e(t._payload)}function ly(t){function e(p,f){if(t){var _=p.deletions;_===null?(p.deletions=[f],p.flags|=16):_.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=dr(p,f),p.index=0,p.sibling=null,p}function s(p,f,_){return p.index=_,t?(_=p.alternate,_!==null?(_=_.index,_<f?(p.flags|=2,f):_):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,_,w){return f===null||f.tag!==6?(f=Uc(_,p.mode,w),f.return=p,f):(f=i(f,_),f.return=p,f)}function a(p,f,_,w){var S=_.type;return S===xi?d(p,f,_.props.children,w,_.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Vn&&Qm(S)===f.type)?(w=i(f,_.props),w.ref=As(p,f,_),w.return=p,w):(w=Yl(_.type,_.key,_.props,null,p.mode,w),w.ref=As(p,f,_),w.return=p,w)}function u(p,f,_,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==_.containerInfo||f.stateNode.implementation!==_.implementation?(f=zc(_,p.mode,w),f.return=p,f):(f=i(f,_.children||[]),f.return=p,f)}function d(p,f,_,w,S){return f===null||f.tag!==7?(f=Vr(_,p.mode,w,S),f.return=p,f):(f=i(f,_),f.return=p,f)}function c(p,f,_){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Uc(""+f,p.mode,_),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ml:return _=Yl(f.type,f.key,f.props,null,p.mode,_),_.ref=As(p,null,f),_.return=p,_;case Si:return f=zc(f,p.mode,_),f.return=p,f;case Vn:var w=f._init;return c(p,w(f._payload),_)}if(js(f)||Rs(f))return f=Vr(f,p.mode,_,null),f.return=p,f;Il(p,f)}return null}function h(p,f,_,w){var S=f!==null?f.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return S!==null?null:l(p,f,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ml:return _.key===S?a(p,f,_,w):null;case Si:return _.key===S?u(p,f,_,w):null;case Vn:return S=_._init,h(p,f,S(_._payload),w)}if(js(_)||Rs(_))return S!==null?null:d(p,f,_,w,null);Il(p,_)}return null}function m(p,f,_,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(_)||null,l(f,p,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ml:return p=p.get(w.key===null?_:w.key)||null,a(f,p,w,S);case Si:return p=p.get(w.key===null?_:w.key)||null,u(f,p,w,S);case Vn:var P=w._init;return m(p,f,_,P(w._payload),S)}if(js(w)||Rs(w))return p=p.get(_)||null,d(f,p,w,S,null);Il(f,w)}return null}function g(p,f,_,w){for(var S=null,P=null,k=f,I=f=0,K=null;k!==null&&I<_.length;I++){k.index>I?(K=k,k=null):K=k.sibling;var F=h(p,k,_[I],w);if(F===null){k===null&&(k=K);break}t&&k&&F.alternate===null&&e(p,k),f=s(F,f,I),P===null?S=F:P.sibling=F,P=F,k=K}if(I===_.length)return n(p,k),Ie&&Lr(p,I),S;if(k===null){for(;I<_.length;I++)k=c(p,_[I],w),k!==null&&(f=s(k,f,I),P===null?S=k:P.sibling=k,P=k);return Ie&&Lr(p,I),S}for(k=r(p,k);I<_.length;I++)K=m(k,p,I,_[I],w),K!==null&&(t&&K.alternate!==null&&k.delete(K.key===null?I:K.key),f=s(K,f,I),P===null?S=K:P.sibling=K,P=K);return t&&k.forEach(function(he){return e(p,he)}),Ie&&Lr(p,I),S}function y(p,f,_,w){var S=Rs(_);if(typeof S!="function")throw Error(x(150));if(_=S.call(_),_==null)throw Error(x(151));for(var P=S=null,k=f,I=f=0,K=null,F=_.next();k!==null&&!F.done;I++,F=_.next()){k.index>I?(K=k,k=null):K=k.sibling;var he=h(p,k,F.value,w);if(he===null){k===null&&(k=K);break}t&&k&&he.alternate===null&&e(p,k),f=s(he,f,I),P===null?S=he:P.sibling=he,P=he,k=K}if(F.done)return n(p,k),Ie&&Lr(p,I),S;if(k===null){for(;!F.done;I++,F=_.next())F=c(p,F.value,w),F!==null&&(f=s(F,f,I),P===null?S=F:P.sibling=F,P=F);return Ie&&Lr(p,I),S}for(k=r(p,k);!F.done;I++,F=_.next())F=m(k,p,I,F.value,w),F!==null&&(t&&F.alternate!==null&&k.delete(F.key===null?I:F.key),f=s(F,f,I),P===null?S=F:P.sibling=F,P=F);return t&&k.forEach(function(ge){return e(p,ge)}),Ie&&Lr(p,I),S}function E(p,f,_,w){if(typeof _=="object"&&_!==null&&_.type===xi&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ml:e:{for(var S=_.key,P=f;P!==null;){if(P.key===S){if(S=_.type,S===xi){if(P.tag===7){n(p,P.sibling),f=i(P,_.props.children),f.return=p,p=f;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Vn&&Qm(S)===P.type){n(p,P.sibling),f=i(P,_.props),f.ref=As(p,P,_),f.return=p,p=f;break e}n(p,P);break}else e(p,P);P=P.sibling}_.type===xi?(f=Vr(_.props.children,p.mode,w,_.key),f.return=p,p=f):(w=Yl(_.type,_.key,_.props,null,p.mode,w),w.ref=As(p,f,_),w.return=p,p=w)}return o(p);case Si:e:{for(P=_.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===_.containerInfo&&f.stateNode.implementation===_.implementation){n(p,f.sibling),f=i(f,_.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=zc(_,p.mode,w),f.return=p,p=f}return o(p);case Vn:return P=_._init,E(p,f,P(_._payload),w)}if(js(_))return g(p,f,_,w);if(Rs(_))return y(p,f,_,w);Il(p,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,_),f.return=p,p=f):(n(p,f),f=Uc(_,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return E}var qi=ly(!0),ay=ly(!1),Vo={},vn=Rr(Vo),Eo=Rr(Vo),So=Rr(Vo);function Hr(t){if(t===Vo)throw Error(x(174));return t}function pf(t,e){switch(Ce(So,e),Ce(Eo,t),Ce(vn,Vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vd(e,t)}ke(vn),Ce(vn,e)}function Xi(){ke(vn),ke(Eo),ke(So)}function uy(t){Hr(So.current);var e=Hr(vn.current),n=vd(e,t.type);e!==n&&(Ce(Eo,t),Ce(vn,n))}function mf(t){Eo.current===t&&(ke(vn),ke(Eo))}var be=Rr(0);function va(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ac=[];function gf(){for(var t=0;t<Ac.length;t++)Ac[t]._workInProgressVersionPrimary=null;Ac.length=0}var Wl=Un.ReactCurrentDispatcher,Dc=Un.ReactCurrentBatchConfig,Xr=0,Ne=null,Ge=null,Xe=null,ya=!1,Xs=!1,xo=0,u1=0;function at(){throw Error(x(321))}function _f(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!an(t[n],e[n]))return!1;return!0}function vf(t,e,n,r,i,s){if(Xr=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wl.current=t===null||t.memoizedState===null?f1:p1,t=n(r,i),Xs){s=0;do{if(Xs=!1,xo=0,25<=s)throw Error(x(301));s+=1,Xe=Ge=null,e.updateQueue=null,Wl.current=m1,t=n(r,i)}while(Xs)}if(Wl.current=wa,e=Ge!==null&&Ge.next!==null,Xr=0,Xe=Ge=Ne=null,ya=!1,e)throw Error(x(300));return t}function yf(){var t=xo!==0;return xo=0,t}function pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Ne.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function Gt(){if(Ge===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=Xe===null?Ne.memoizedState:Xe.next;if(e!==null)Xe=e,Ge=t;else{if(t===null)throw Error(x(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Xe===null?Ne.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function ko(t,e){return typeof e=="function"?e(t):e}function Lc(t){var e=Gt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((Xr&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,Ne.lanes|=d,Jr|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,an(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,Jr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mc(t){var e=Gt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);an(s,e.memoizedState)||(Et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function cy(){}function dy(t,e){var n=Ne,r=Gt(),i=e(),s=!an(r.memoizedState,i);if(s&&(r.memoizedState=i,Et=!0),r=r.queue,wf(py.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,Io(9,fy.bind(null,n,r,i,e),void 0,null),et===null)throw Error(x(349));(Xr&30)!==0||hy(n,e,i)}return i}function hy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fy(t,e,n,r){e.value=n,e.getSnapshot=r,my(e)&&gy(t)}function py(t,e,n){return n(function(){my(e)&&gy(t)})}function my(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!an(t,n)}catch{return!0}}function gy(t){var e=Ln(t,1);e!==null&&on(e,t,1,-1)}function Ym(t){var e=pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:t},e.queue=t,t=t.dispatch=h1.bind(null,Ne,t),[e.memoizedState,t]}function Io(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function _y(){return Gt().memoizedState}function Vl(t,e,n,r){var i=pn();Ne.flags|=t,i.memoizedState=Io(1|e,n,void 0,r===void 0?null:r)}function cu(t,e,n,r){var i=Gt();r=r===void 0?null:r;var s=void 0;if(Ge!==null){var o=Ge.memoizedState;if(s=o.destroy,r!==null&&_f(r,o.deps)){i.memoizedState=Io(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=Io(1|e,n,s,r)}function qm(t,e){return Vl(8390656,8,t,e)}function wf(t,e){return cu(2048,8,t,e)}function vy(t,e){return cu(4,2,t,e)}function yy(t,e){return cu(4,4,t,e)}function wy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cy(t,e,n){return n=n!=null?n.concat([t]):null,cu(4,4,wy.bind(null,e,t),n)}function Cf(){}function Ey(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_f(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Sy(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_f(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function xy(t,e,n){return(Xr&21)===0?(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n):(an(n,e)||(n=Tv(),Ne.lanes|=n,Jr|=n,t.baseState=!0),e)}function c1(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=Dc.transition;Dc.transition={};try{t(!1),e()}finally{fe=n,Dc.transition=r}}function ky(){return Gt().memoizedState}function d1(t,e,n){var r=cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Iy(t))Ty(e,n);else if(n=ry(t,e,n,r),n!==null){var i=_t();on(n,t,r,i),Ry(n,e,r)}}function h1(t,e,n){var r=cr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Iy(t))Ty(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,an(l,o)){var a=e.interleaved;a===null?(i.next=i,hf(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=ry(t,e,i,r),n!==null&&(i=_t(),on(n,t,r,i),Ry(n,e,r))}}function Iy(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function Ty(t,e){Xs=ya=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ry(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xh(t,n)}}var wa={readContext:Vt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},f1={readContext:Vt,useCallback:function(t,e){return pn().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:qm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4194308,4,wy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vl(4,2,t,e)},useMemo:function(t,e){var n=pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=d1.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=pn();return t={current:t},e.memoizedState=t},useState:Ym,useDebugValue:Cf,useDeferredValue:function(t){return pn().memoizedState=t},useTransition:function(){var t=Ym(!1),e=t[0];return t=c1.bind(null,t[1]),pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=pn();if(Ie){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),et===null)throw Error(x(349));(Xr&30)!==0||hy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,qm(py.bind(null,r,s,t),[t]),r.flags|=2048,Io(9,fy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=pn(),e=et.identifierPrefix;if(Ie){var n=Rn,r=Tn;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=u1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},p1={readContext:Vt,useCallback:Ey,useContext:Vt,useEffect:wf,useImperativeHandle:Cy,useInsertionEffect:vy,useLayoutEffect:yy,useMemo:Sy,useReducer:Lc,useRef:_y,useState:function(){return Lc(ko)},useDebugValue:Cf,useDeferredValue:function(t){var e=Gt();return xy(e,Ge.memoizedState,t)},useTransition:function(){var t=Lc(ko)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:cy,useSyncExternalStore:dy,useId:ky,unstable_isNewReconciler:!1},m1={readContext:Vt,useCallback:Ey,useContext:Vt,useEffect:wf,useImperativeHandle:Cy,useInsertionEffect:vy,useLayoutEffect:yy,useMemo:Sy,useReducer:Mc,useRef:_y,useState:function(){return Mc(ko)},useDebugValue:Cf,useDeferredValue:function(t){var e=Gt();return Ge===null?e.memoizedState=t:xy(e,Ge.memoizedState,t)},useTransition:function(){var t=Mc(ko)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:cy,useSyncExternalStore:dy,useId:ky,unstable_isNewReconciler:!1};function Ji(t,e){try{var n="",r=e;do n+=BE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Fc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function jd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var g1=typeof WeakMap=="function"?WeakMap:Map;function by(t,e,n){n=On(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ea||(Ea=!0,Xd=r),jd(t,e)},n}function Py(t,e,n){n=On(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){jd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jd(t,e),typeof r!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new g1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=P1.bind(null,t,e,n),e.then(t,t))}function Jm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zm(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=On(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var _1=Un.ReactCurrentOwner,Et=!1;function mt(t,e,n,r){e.child=t===null?ay(e,null,n,r):qi(e,t.child,n,r)}function eg(t,e,n,r,i){n=n.render;var s=e.ref;return ji(e,i),r=vf(t,e,n,r,s,i),n=yf(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(Ie&&n&&of(e),e.flags|=1,mt(t,e,r,i),e.child)}function tg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ny(t,e,s,r,i)):(t=Yl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(o,r)&&t.ref===e.ref)return Mn(t,e,i)}return e.flags|=1,t=dr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ny(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(vo(s,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Et=!0);else return e.lanes=t.lanes,Mn(t,e,i)}return Hd(t,e,n,r,i)}function Oy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(Di,Rt),Rt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ce(Di,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ce(Di,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ce(Di,Rt),Rt|=r;return mt(t,e,i,n),e.child}function Ay(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hd(t,e,n,r,i){var s=kt(n)?Yr:ht.current;return s=Qi(e,s),ji(e,i),n=vf(t,e,n,r,s,i),r=yf(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(Ie&&r&&of(e),e.flags|=1,mt(t,e,n,i),e.child)}function ng(t,e,n,r,i){if(kt(n)){var s=!0;ha(e)}else s=!1;if(ji(e,i),e.stateNode===null)Gl(t,e),oy(e,n,r),zd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Vt(u):(u=kt(n)?Yr:ht.current,u=Qi(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Km(e,o,r,u),Gn=!1;var h=e.memoizedState;o.state=h,_a(e,r,o,i),a=e.memoizedState,l!==r||h!==a||xt.current||Gn?(typeof d=="function"&&(Ud(e,n,d,r),a=e.memoizedState),(l=Gn||Gm(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,iy(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Zt(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Vt(a):(a=kt(n)?Yr:ht.current,a=Qi(e,a));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&Km(e,o,r,a),Gn=!1,h=e.memoizedState,o.state=h,_a(e,r,o,i);var g=e.memoizedState;l!==c||h!==g||xt.current||Gn?(typeof m=="function"&&(Ud(e,n,m,r),g=e.memoizedState),(u=Gn||Gm(e,n,u,r,h,g,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Bd(t,e,n,r,s,i)}function Bd(t,e,n,r,i,s){Ay(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&jm(e,n,!1),Mn(t,e,s);r=e.stateNode,_1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=qi(e,t.child,null,s),e.child=qi(e,null,l,s)):mt(t,e,l,s),e.memoizedState=r.state,i&&jm(e,n,!0),e.child}function Dy(t){var e=t.stateNode;e.pendingContext?zm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zm(t,e.context,!1),pf(t,e.containerInfo)}function rg(t,e,n,r,i){return Yi(),af(i),e.flags|=256,mt(t,e,n,r),e.child}var Wd={dehydrated:null,treeContext:null,retryLane:0};function Vd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ly(t,e,n){var r=e.pendingProps,i=be.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ce(be,i&1),t===null)return Fd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fu(o,r,0,null),t=Vr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vd(n),e.memoizedState=Wd,t):Ef(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return v1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=dr(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=dr(l,s):(s=Vr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Vd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wd,r}return s=t.child,t=s.sibling,r=dr(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ef(t,e){return e=fu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tl(t,e,n,r){return r!==null&&af(r),qi(e,t.child,null,n),t=Ef(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function v1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Fc(Error(x(422))),Tl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=fu({mode:"visible",children:r.children},i,0,null),s=Vr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&qi(e,t.child,null,o),e.child.memoizedState=Vd(o),e.memoizedState=Wd,s);if((e.mode&1)===0)return Tl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(x(419)),r=Fc(s,r,void 0),Tl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Et||l){if(r=et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ln(t,i),on(r,t,i,-1))}return Rf(),r=Fc(Error(x(421))),Tl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=N1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Pt=lr(i.nextSibling),Nt=e,Ie=!0,tn=null,t!==null&&($t[Ut++]=Tn,$t[Ut++]=Rn,$t[Ut++]=qr,Tn=t.id,Rn=t.overflow,qr=e),e=Ef(e,r.children),e.flags|=4096,e)}function ig(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),$d(t.return,e,n)}function $c(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function My(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(mt(t,e,r.children,n),r=be.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ig(t,n,e);else if(t.tag===19)ig(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ce(be,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&va(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$c(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&va(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$c(e,!0,n,null,s);break;case"together":$c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gl(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function y1(t,e,n){switch(e.tag){case 3:Dy(e),Yi();break;case 5:uy(e);break;case 1:kt(e.type)&&ha(e);break;case 4:pf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ce(ma,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ce(be,be.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Ly(t,e,n):(Ce(be,be.current&1),t=Mn(t,e,n),t!==null?t.sibling:null);Ce(be,be.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return My(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ce(be,be.current),r)break;return null;case 22:case 23:return e.lanes=0,Oy(t,e,n)}return Mn(t,e,n)}var Fy,Gd,$y,Uy;Fy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gd=function(){};$y=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hr(vn.current);var s=null;switch(n){case"input":i=pd(t,i),r=pd(t,r),s=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),s=[];break;case"textarea":i=_d(t,i),r=_d(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ca)}yd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(co.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(co.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&xe("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Uy=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ds(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function w1(t,e,n){var r=e.pendingProps;switch(lf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(e),null;case 1:return kt(e.type)&&da(),ut(e),null;case 3:return r=e.stateNode,Xi(),ke(xt),ke(ht),gf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(kl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,tn!==null&&(eh(tn),tn=null))),Gd(t,e),ut(e),null;case 5:mf(e);var i=Hr(So.current);if(n=e.type,t!==null&&e.stateNode!=null)$y(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return ut(e),null}if(t=Hr(vn.current),kl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[mn]=e,r[Co]=s,t=(e.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<Bs.length;i++)xe(Bs[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":fm(r,s),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},xe("invalid",r);break;case"textarea":mm(r,s),xe("invalid",r)}yd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&xl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&xl(r.textContent,l,t),i=["children",""+l]):co.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&xe("scroll",r)}switch(n){case"input":gl(r),pm(r,s,!0);break;case"textarea":gl(r),gm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ca)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mn]=e,t[Co]=r,Fy(t,e,!1,!1),e.stateNode=t;e:{switch(o=wd(n,r),n){case"dialog":xe("cancel",t),xe("close",t),i=r;break;case"iframe":case"object":case"embed":xe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Bs.length;i++)xe(Bs[i],t);i=r;break;case"source":xe("error",t),i=r;break;case"img":case"image":case"link":xe("error",t),xe("load",t),i=r;break;case"details":xe("toggle",t),i=r;break;case"input":fm(t,r),i=pd(t,r),xe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),xe("invalid",t);break;case"textarea":mm(t,r),i=_d(t,r),xe("invalid",t);break;default:i=r}yd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?mv(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&fv(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ho(t,a):typeof a=="number"&&ho(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(co.hasOwnProperty(s)?a!=null&&s==="onScroll"&&xe("scroll",t):a!=null&&Vh(t,s,a,o))}switch(n){case"input":gl(t),pm(t,r,!1);break;case"textarea":gl(t),gm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Fi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Fi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ca)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ut(e),null;case 6:if(t&&e.stateNode!=null)Uy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Hr(So.current),Hr(vn.current),kl(e)){if(r=e.stateNode,n=e.memoizedProps,r[mn]=e,(s=r.nodeValue!==n)&&(t=Nt,t!==null))switch(t.tag){case 3:xl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mn]=e,e.stateNode=r}return ut(e),null;case 13:if(ke(be),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Pt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)ny(),Yi(),e.flags|=98560,s=!1;else if(s=kl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[mn]=e}else Yi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ut(e),s=!1}else tn!==null&&(eh(tn),tn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(be.current&1)!==0?Qe===0&&(Qe=3):Rf())),e.updateQueue!==null&&(e.flags|=4),ut(e),null);case 4:return Xi(),Gd(t,e),t===null&&yo(e.stateNode.containerInfo),ut(e),null;case 10:return df(e.type._context),ut(e),null;case 17:return kt(e.type)&&da(),ut(e),null;case 19:if(ke(be),s=e.memoizedState,s===null)return ut(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ds(s,!1);else{if(Qe!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=va(t),o!==null){for(e.flags|=128,Ds(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ce(be,be.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ue()>Zi&&(e.flags|=128,r=!0,Ds(s,!1),e.lanes=4194304)}else{if(!r)if(t=va(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ds(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return ut(e),null}else 2*Ue()-s.renderingStartTime>Zi&&n!==1073741824&&(e.flags|=128,r=!0,Ds(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,n=be.current,Ce(be,r?n&1|2:n&1),e):(ut(e),null);case 22:case 23:return Tf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Rt&1073741824)!==0&&(ut(e),e.subtreeFlags&6&&(e.flags|=8192)):ut(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function C1(t,e){switch(lf(e),e.tag){case 1:return kt(e.type)&&da(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xi(),ke(xt),ke(ht),gf(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return mf(e),null;case 13:if(ke(be),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));Yi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(be),null;case 4:return Xi(),null;case 10:return df(e.type._context),null;case 22:case 23:return Tf(),null;case 24:return null;default:return null}}var Rl=!1,ct=!1,E1=typeof WeakSet=="function"?WeakSet:Set,M=null;function Ai(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(t,e,r)}else n.current=null}function Kd(t,e,n){try{n()}catch(r){Fe(t,e,r)}}var sg=!1;function S1(t,e){if(Pd=la,t=Bv(),sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var m;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(m=c.firstChild)!==null;)h=c,c=m;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(m=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=m}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nd={focusedElem:t,selectionRange:n},la=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,E=g.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:Zt(e.type,y),E);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(w){Fe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return g=sg,sg=!1,g}function Js(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kd(e,n,s)}i=i.next}while(i!==r)}}function du(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zy(t){var e=t.alternate;e!==null&&(t.alternate=null,zy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mn],delete e[Co],delete e[Dd],delete e[s1],delete e[o1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jy(t){return t.tag===5||t.tag===3||t.tag===4}function og(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ca));else if(r!==4&&(t=t.child,t!==null))for(Yd(t,e,n),t=t.sibling;t!==null;)Yd(t,e,n),t=t.sibling}function qd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qd(t,e,n),t=t.sibling;t!==null;)qd(t,e,n),t=t.sibling}var rt=null,en=!1;function Bn(t,e,n){for(n=n.child;n!==null;)Hy(t,e,n),n=n.sibling}function Hy(t,e,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(ru,n)}catch{}switch(n.tag){case 5:ct||Ai(n,e);case 6:var r=rt,i=en;rt=null,Bn(t,e,n),rt=r,en=i,rt!==null&&(en?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(en?(t=rt,n=n.stateNode,t.nodeType===8?Nc(t.parentNode,n):t.nodeType===1&&Nc(t,n),go(t)):Nc(rt,n.stateNode));break;case 4:r=rt,i=en,rt=n.stateNode.containerInfo,en=!0,Bn(t,e,n),rt=r,en=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Kd(n,e,o),i=i.next}while(i!==r)}Bn(t,e,n);break;case 1:if(!ct&&(Ai(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Fe(n,e,l)}Bn(t,e,n);break;case 21:Bn(t,e,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,Bn(t,e,n),ct=r):Bn(t,e,n);break;default:Bn(t,e,n)}}function lg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new E1),e.forEach(function(r){var i=O1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Jt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:rt=l.stateNode,en=!1;break e;case 3:rt=l.stateNode.containerInfo,en=!0;break e;case 4:rt=l.stateNode.containerInfo,en=!0;break e}l=l.return}if(rt===null)throw Error(x(160));Hy(s,o,i),rt=null,en=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){Fe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)By(e,t),e=e.sibling}function By(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jt(e,t),fn(t),r&4){try{Js(3,t,t.return),du(3,t)}catch(y){Fe(t,t.return,y)}try{Js(5,t,t.return)}catch(y){Fe(t,t.return,y)}}break;case 1:Jt(e,t),fn(t),r&512&&n!==null&&Ai(n,n.return);break;case 5:if(Jt(e,t),fn(t),r&512&&n!==null&&Ai(n,n.return),t.flags&32){var i=t.stateNode;try{ho(i,"")}catch(y){Fe(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&cv(i,s),wd(l,o);var u=wd(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?mv(i,c):d==="dangerouslySetInnerHTML"?fv(i,c):d==="children"?ho(i,c):Vh(i,d,c,u)}switch(l){case"input":md(i,s);break;case"textarea":dv(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Fi(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Fi(i,!!s.multiple,s.defaultValue,!0):Fi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Co]=s}catch(y){Fe(t,t.return,y)}}break;case 6:if(Jt(e,t),fn(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){Fe(t,t.return,y)}}break;case 3:if(Jt(e,t),fn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{go(e.containerInfo)}catch(y){Fe(t,t.return,y)}break;case 4:Jt(e,t),fn(t);break;case 13:Jt(e,t),fn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(kf=Ue())),r&4&&lg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ct=(u=ct)||d,Jt(e,t),ct=u):Jt(e,t),fn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&(t.mode&1)!==0)for(M=t,d=t.child;d!==null;){for(c=M=d;M!==null;){switch(h=M,m=h.child,h.tag){case 0:case 11:case 14:case 15:Js(4,h,h.return);break;case 1:Ai(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){Fe(r,n,y)}}break;case 5:Ai(h,h.return);break;case 22:if(h.memoizedState!==null){ug(c);continue}}m!==null?(m.return=h,M=m):ug(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=pv("display",o))}catch(y){Fe(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){Fe(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Jt(e,t),fn(t),r&4&&lg(t);break;case 21:break;default:Jt(e,t),fn(t)}}function fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jy(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ho(i,""),r.flags&=-33);var s=og(t);qd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=og(t);Yd(t,l,o);break;default:throw Error(x(161))}}catch(a){Fe(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function x1(t,e,n){M=t,Wy(t)}function Wy(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Rl;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ct;l=Rl;var u=ct;if(Rl=o,(ct=a)&&!u)for(M=i;M!==null;)o=M,a=o.child,o.tag===22&&o.memoizedState!==null?cg(i):a!==null?(a.return=o,M=a):cg(i);for(;s!==null;)M=s,Wy(s),s=s.sibling;M=i,Rl=l,ct=u}ag(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,M=s):ag(t)}}function ag(t){for(;M!==null;){var e=M;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:ct||du(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&go(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ct||e.flags&512&&Qd(e)}catch(h){Fe(e,e.return,h)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function ug(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function cg(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{du(4,e)}catch(a){Fe(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){Fe(e,i,a)}}var s=e.return;try{Qd(e)}catch(a){Fe(e,s,a)}break;case 5:var o=e.return;try{Qd(e)}catch(a){Fe(e,o,a)}}}catch(a){Fe(e,e.return,a)}if(e===t){M=null;break}var l=e.sibling;if(l!==null){l.return=e.return,M=l;break}M=e.return}}var k1=Math.ceil,Ca=Un.ReactCurrentDispatcher,Sf=Un.ReactCurrentOwner,Bt=Un.ReactCurrentBatchConfig,ae=0,et=null,He=null,it=0,Rt=0,Di=Rr(0),Qe=0,To=null,Jr=0,hu=0,xf=0,Zs=null,Ct=null,kf=0,Zi=1/0,kn=null,Ea=!1,Xd=null,ur=null,bl=!1,er=null,Sa=0,eo=0,Jd=null,Kl=-1,Ql=0;function _t(){return(ae&6)!==0?Ue():Kl!==-1?Kl:Kl=Ue()}function cr(t){return(t.mode&1)===0?1:(ae&2)!==0&&it!==0?it&-it:a1.transition!==null?(Ql===0&&(Ql=Tv()),Ql):(t=fe,t!==0||(t=window.event,t=t===void 0?16:Dv(t.type)),t)}function on(t,e,n,r){if(50<eo)throw eo=0,Jd=null,Error(x(185));Ho(t,n,r),((ae&2)===0||t!==et)&&(t===et&&((ae&2)===0&&(hu|=n),Qe===4&&Qn(t,it)),It(t,r),n===1&&ae===0&&(e.mode&1)===0&&(Zi=Ue()+500,au&&br()))}function It(t,e){var n=t.callbackNode;aS(t,e);var r=oa(t,t===et?it:0);if(r===0)n!==null&&ym(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ym(n),e===1)t.tag===0?l1(dg.bind(null,t)):Zv(dg.bind(null,t)),r1(function(){(ae&6)===0&&br()}),n=null;else{switch(Rv(r)){case 1:n=qh;break;case 4:n=kv;break;case 16:n=sa;break;case 536870912:n=Iv;break;default:n=sa}n=Jy(n,Vy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Vy(t,e){if(Kl=-1,Ql=0,(ae&6)!==0)throw Error(x(327));var n=t.callbackNode;if(Hi()&&t.callbackNode!==n)return null;var r=oa(t,t===et?it:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=xa(t,r);else{e=r;var i=ae;ae|=2;var s=Ky();(et!==t||it!==e)&&(kn=null,Zi=Ue()+500,Wr(t,e));do try{R1();break}catch(l){Gy(t,l)}while(1);cf(),Ca.current=s,ae=i,He!==null?e=0:(et=null,it=0,e=Qe)}if(e!==0){if(e===2&&(i=kd(t),i!==0&&(r=i,e=Zd(t,i))),e===1)throw n=To,Wr(t,0),Qn(t,r),It(t,Ue()),n;if(e===6)Qn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!I1(i)&&(e=xa(t,r),e===2&&(s=kd(t),s!==0&&(r=s,e=Zd(t,s))),e===1))throw n=To,Wr(t,0),Qn(t,r),It(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:Mr(t,Ct,kn);break;case 3:if(Qn(t,r),(r&130023424)===r&&(e=kf+500-Ue(),10<e)){if(oa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){_t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ad(Mr.bind(null,t,Ct,kn),e);break}Mr(t,Ct,kn);break;case 4:if(Qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-sn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*k1(r/1960))-r,10<r){t.timeoutHandle=Ad(Mr.bind(null,t,Ct,kn),r);break}Mr(t,Ct,kn);break;case 5:Mr(t,Ct,kn);break;default:throw Error(x(329))}}}return It(t,Ue()),t.callbackNode===n?Vy.bind(null,t):null}function Zd(t,e){var n=Zs;return t.current.memoizedState.isDehydrated&&(Wr(t,e).flags|=256),t=xa(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&eh(e)),t}function eh(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function I1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!an(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qn(t,e){for(e&=~xf,e&=~hu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-sn(e),r=1<<n;t[n]=-1,e&=~r}}function dg(t){if((ae&6)!==0)throw Error(x(327));Hi();var e=oa(t,0);if((e&1)===0)return It(t,Ue()),null;var n=xa(t,e);if(t.tag!==0&&n===2){var r=kd(t);r!==0&&(e=r,n=Zd(t,r))}if(n===1)throw n=To,Wr(t,0),Qn(t,e),It(t,Ue()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,Ct,kn),It(t,Ue()),null}function If(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(Zi=Ue()+500,au&&br())}}function Zr(t){er!==null&&er.tag===0&&(ae&6)===0&&Hi();var e=ae;ae|=1;var n=Bt.transition,r=fe;try{if(Bt.transition=null,fe=1,t)return t()}finally{fe=r,Bt.transition=n,ae=e,(ae&6)===0&&br()}}function Tf(){Rt=Di.current,ke(Di)}function Wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,n1(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(lf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&da();break;case 3:Xi(),ke(xt),ke(ht),gf();break;case 5:mf(r);break;case 4:Xi();break;case 13:ke(be);break;case 19:ke(be);break;case 10:df(r.type._context);break;case 22:case 23:Tf()}n=n.return}if(et=t,He=t=dr(t.current,null),it=Rt=e,Qe=0,To=null,xf=hu=Jr=0,Ct=Zs=null,jr!==null){for(e=0;e<jr.length;e++)if(n=jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}jr=null}return t}function Gy(t,e){do{var n=He;try{if(cf(),Wl.current=wa,ya){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ya=!1}if(Xr=0,Xe=Ge=Ne=null,Xs=!1,xo=0,Sf.current=null,n===null||n.return===null){Qe=1,To=e,He=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=it,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if((d.mode&1)===0&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Jm(o);if(m!==null){m.flags&=-257,Zm(m,o,l,s,e),m.mode&1&&Xm(s,u,e),e=m,a=u;var g=e.updateQueue;if(g===null){var y=new Set;y.add(a),e.updateQueue=y}else g.add(a);break e}else{if((e&1)===0){Xm(s,u,e),Rf();break e}a=Error(x(426))}}else if(Ie&&l.mode&1){var E=Jm(o);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),Zm(E,o,l,s,e),af(Ji(a,l));break e}}s=a=Ji(a,l),Qe!==4&&(Qe=2),Zs===null?Zs=[s]:Zs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=by(s,a,e);Wm(s,p);break e;case 1:l=a;var f=s.type,_=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ur===null||!ur.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Py(s,l,e);Wm(s,w);break e}}s=s.return}while(s!==null)}Yy(n)}catch(S){e=S,He===n&&n!==null&&(He=n=n.return);continue}break}while(1)}function Ky(){var t=Ca.current;return Ca.current=wa,t===null?wa:t}function Rf(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),et===null||(Jr&268435455)===0&&(hu&268435455)===0||Qn(et,it)}function xa(t,e){var n=ae;ae|=2;var r=Ky();(et!==t||it!==e)&&(kn=null,Wr(t,e));do try{T1();break}catch(i){Gy(t,i)}while(1);if(cf(),ae=n,Ca.current=r,He!==null)throw Error(x(261));return et=null,it=0,Qe}function T1(){for(;He!==null;)Qy(He)}function R1(){for(;He!==null&&!ZE();)Qy(He)}function Qy(t){var e=Xy(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?Yy(t):He=e,Sf.current=null}function Yy(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=w1(n,e,Rt),n!==null){He=n;return}}else{if(n=C1(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,He=null;return}}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Qe===0&&(Qe=5)}function Mr(t,e,n){var r=fe,i=Bt.transition;try{Bt.transition=null,fe=1,b1(t,e,n,r)}finally{Bt.transition=i,fe=r}return null}function b1(t,e,n,r){do Hi();while(er!==null);if((ae&6)!==0)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(uS(t,s),t===et&&(He=et=null,it=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||bl||(bl=!0,Jy(sa,function(){return Hi(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Bt.transition,Bt.transition=null;var o=fe;fe=1;var l=ae;ae|=4,Sf.current=null,S1(t,n),By(n,t),YS(Nd),la=!!Pd,Nd=Pd=null,t.current=n,x1(n),eS(),ae=l,fe=o,Bt.transition=s}else t.current=n;if(bl&&(bl=!1,er=t,Sa=i),s=t.pendingLanes,s===0&&(ur=null),rS(n.stateNode),It(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ea)throw Ea=!1,t=Xd,Xd=null,t;return(Sa&1)!==0&&t.tag!==0&&Hi(),s=t.pendingLanes,(s&1)!==0?t===Jd?eo++:(eo=0,Jd=t):eo=0,br(),null}function Hi(){if(er!==null){var t=Rv(Sa),e=Bt.transition,n=fe;try{if(Bt.transition=null,fe=16>t?16:t,er===null)var r=!1;else{if(t=er,er=null,Sa=0,(ae&6)!==0)throw Error(x(331));var i=ae;for(ae|=4,M=t.current;M!==null;){var s=M,o=s.child;if((M.flags&16)!==0){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(M=u;M!==null;){var d=M;switch(d.tag){case 0:case 11:case 15:Js(8,d,s)}var c=d.child;if(c!==null)c.return=d,M=c;else for(;M!==null;){d=M;var h=d.sibling,m=d.return;if(zy(d),d===u){M=null;break}if(h!==null){h.return=m,M=h;break}M=m}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}M=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Js(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,M=p;break e}M=s.return}}var f=t.current;for(M=f;M!==null;){o=M;var _=o.child;if((o.subtreeFlags&2064)!==0&&_!==null)_.return=o,M=_;else e:for(o=f;M!==null;){if(l=M,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:du(9,l)}}catch(S){Fe(l,l.return,S)}if(l===o){M=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,M=w;break e}M=l.return}}if(ae=i,br(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(ru,t)}catch{}r=!0}return r}finally{fe=n,Bt.transition=e}}return!1}function hg(t,e,n){e=Ji(n,e),e=by(t,e,1),t=ar(t,e,1),e=_t(),t!==null&&(Ho(t,1,e),It(t,e))}function Fe(t,e,n){if(t.tag===3)hg(t,t,n);else for(;e!==null;){if(e.tag===3){hg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ur===null||!ur.has(r))){t=Ji(n,t),t=Py(e,t,1),e=ar(e,t,1),t=_t(),e!==null&&(Ho(e,1,t),It(e,t));break}}e=e.return}}function P1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=_t(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(it&n)===n&&(Qe===4||Qe===3&&(it&130023424)===it&&500>Ue()-kf?Wr(t,0):xf|=n),It(t,e)}function qy(t,e){e===0&&((t.mode&1)===0?e=1:(e=yl,yl<<=1,(yl&130023424)===0&&(yl=4194304)));var n=_t();t=Ln(t,e),t!==null&&(Ho(t,e,n),It(t,n))}function N1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qy(t,n)}function O1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),qy(t,n)}var Xy;Xy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xt.current)Et=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Et=!1,y1(t,e,n);Et=(t.flags&131072)!==0}else Et=!1,Ie&&(e.flags&1048576)!==0&&ey(e,pa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Gl(t,e),t=e.pendingProps;var i=Qi(e,ht.current);ji(e,n),i=vf(null,e,r,t,i,n);var s=yf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(s=!0,ha(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ff(e),i.updater=uu,e.stateNode=i,i._reactInternals=e,zd(e,r,t,n),e=Bd(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&of(e),mt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Gl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=D1(r),t=Zt(r,t),i){case 0:e=Hd(null,e,r,t,n);break e;case 1:e=ng(null,e,r,t,n);break e;case 11:e=eg(null,e,r,t,n);break e;case 14:e=tg(null,e,r,Zt(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Hd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),ng(t,e,r,i,n);case 3:e:{if(Dy(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,iy(t,e),_a(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ji(Error(x(423)),e),e=rg(t,e,r,n,i);break e}else if(r!==i){i=Ji(Error(x(424)),e),e=rg(t,e,r,n,i);break e}else for(Pt=lr(e.stateNode.containerInfo.firstChild),Nt=e,Ie=!0,tn=null,n=ay(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yi(),r===i){e=Mn(t,e,n);break e}mt(t,e,r,n)}e=e.child}return e;case 5:return uy(e),t===null&&Fd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Od(r,i)?o=null:s!==null&&Od(r,s)&&(e.flags|=32),Ay(t,e),mt(t,e,o,n),e.child;case 6:return t===null&&Fd(e),null;case 13:return Ly(t,e,n);case 4:return pf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=qi(e,null,r,n):mt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),eg(t,e,r,i,n);case 7:return mt(t,e,e.pendingProps,n),e.child;case 8:return mt(t,e,e.pendingProps.children,n),e.child;case 12:return mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ce(ma,r._currentValue),r._currentValue=o,s!==null)if(an(s.value,o)){if(s.children===i.children&&!xt.current){e=Mn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=On(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),$d(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$d(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}mt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ji(e,n),i=Vt(i),r=r(i),e.flags|=1,mt(t,e,r,n),e.child;case 14:return r=e.type,i=Zt(r,e.pendingProps),i=Zt(r.type,i),tg(t,e,r,i,n);case 15:return Ny(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Gl(t,e),e.tag=1,kt(r)?(t=!0,ha(e)):t=!1,ji(e,n),oy(e,r,i),zd(e,r,i,n),Bd(null,e,r,!0,t,n);case 19:return My(t,e,n);case 22:return Oy(t,e,n)}throw Error(x(156,e.tag))};function Jy(t,e){return xv(t,e)}function A1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new A1(t,e,n,r)}function bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function D1(t){if(typeof t=="function")return bf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kh)return 11;if(t===Qh)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")bf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xi:return Vr(n.children,i,s,e);case Gh:o=8,i|=8;break;case cd:return t=jt(12,n,e,i|2),t.elementType=cd,t.lanes=s,t;case dd:return t=jt(13,n,e,i),t.elementType=dd,t.lanes=s,t;case hd:return t=jt(19,n,e,i),t.elementType=hd,t.lanes=s,t;case lv:return fu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case sv:o=10;break e;case ov:o=9;break e;case Kh:o=11;break e;case Qh:o=14;break e;case Vn:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Vr(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function fu(t,e,n,r){return t=jt(22,t,r,e),t.elementType=lv,t.lanes=n,t.stateNode={isHidden:!1},t}function Uc(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function zc(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function L1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wc(0),this.expirationTimes=wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pf(t,e,n,r,i,s,o,l,a){return t=new L1(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ff(s),t}function M1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Si,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Zy(t){if(!t)return Cr;t=t._reactInternals;e:{if(di(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(kt(n))return Jv(t,n,e)}return e}function e0(t,e,n,r,i,s,o,l,a){return t=Pf(n,r,!0,t,i,s,o,l,a),t.context=Zy(null),n=t.current,r=_t(),i=cr(n),s=On(r,i),s.callback=e!=null?e:null,ar(n,s,i),t.current.lanes=i,Ho(t,i,r),It(t,r),t}function pu(t,e,n,r){var i=e.current,s=_t(),o=cr(i);return n=Zy(n),e.context===null?e.context=n:e.pendingContext=n,e=On(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ar(i,e,o),t!==null&&(on(t,i,o,s),Bl(t,i,o)),o}function ka(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nf(t,e){fg(t,e),(t=t.alternate)&&fg(t,e)}function F1(){return null}var t0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Of(t){this._internalRoot=t}mu.prototype.render=Of.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));pu(t,e,null,null)};mu.prototype.unmount=Of.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(function(){pu(null,t,null,null)}),e[Dn]=null}};function mu(t){this._internalRoot=t}mu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Nv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kn.length&&e!==0&&e<Kn[n].priority;n++);Kn.splice(n,0,t),n===0&&Av(t)}};function Af(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pg(){}function $1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ka(o);s.call(u)}}var o=e0(e,r,t,0,null,!1,!1,"",pg);return t._reactRootContainer=o,t[Dn]=o.current,yo(t.nodeType===8?t.parentNode:t),Zr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=ka(a);l.call(u)}}var a=Pf(t,0,!1,null,null,!1,!1,"",pg);return t._reactRootContainer=a,t[Dn]=a.current,yo(t.nodeType===8?t.parentNode:t),Zr(function(){pu(e,a,n,r)}),a}function _u(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=ka(o);l.call(a)}}pu(e,o,t,i)}else o=$1(n,e,t,i,r);return ka(o)}bv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Hs(e.pendingLanes);n!==0&&(Xh(e,n|1),It(e,Ue()),(ae&6)===0&&(Zi=Ue()+500,br()))}break;case 13:Zr(function(){var r=Ln(t,1);if(r!==null){var i=_t();on(r,t,1,i)}}),Nf(t,1)}};Jh=function(t){if(t.tag===13){var e=Ln(t,134217728);if(e!==null){var n=_t();on(e,t,134217728,n)}Nf(t,134217728)}};Pv=function(t){if(t.tag===13){var e=cr(t),n=Ln(t,e);if(n!==null){var r=_t();on(n,t,e,r)}Nf(t,e)}};Nv=function(){return fe};Ov=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Ed=function(t,e,n){switch(e){case"input":if(md(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=lu(r);if(!i)throw Error(x(90));uv(r),md(r,i)}}}break;case"textarea":dv(t,n);break;case"select":e=n.value,e!=null&&Fi(t,!!n.multiple,e,!1)}};vv=If;yv=Zr;var U1={usingClientEntryPoint:!1,Events:[Wo,Ri,lu,gv,_v,If]},Ls={findFiberByHostInstance:zr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},z1={bundleType:Ls.bundleType,version:Ls.version,rendererPackageName:Ls.rendererPackageName,rendererConfig:Ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ev(t),t===null?null:t.stateNode},findFiberByHostInstance:Ls.findFiberByHostInstance||F1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{ru=Pl.inject(z1),_n=Pl}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U1;Dt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Af(e))throw Error(x(200));return M1(t,e,null,n)};Dt.createRoot=function(t,e){if(!Af(t))throw Error(x(299));var n=!1,r="",i=t0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pf(t,1,!1,null,null,n,!1,r,i),t[Dn]=e.current,yo(t.nodeType===8?t.parentNode:t),new Of(e)};Dt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=Ev(e),t=t===null?null:t.stateNode,t};Dt.flushSync=function(t){return Zr(t)};Dt.hydrate=function(t,e,n){if(!gu(e))throw Error(x(200));return _u(null,t,e,!0,n)};Dt.hydrateRoot=function(t,e,n){if(!Af(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=t0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=e0(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Dn]=e.current,yo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new mu(e)};Dt.render=function(t,e,n){if(!gu(e))throw Error(x(200));return _u(null,t,e,!1,n)};Dt.unmountComponentAtNode=function(t){if(!gu(t))throw Error(x(40));return t._reactRootContainer?(Zr(function(){_u(null,null,t,!1,function(){t._reactRootContainer=null,t[Dn]=null})}),!0):!1};Dt.unstable_batchedUpdates=If;Dt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!gu(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return _u(t,e,n,!1,r)};Dt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Dt})(ev);var mg=ev.exports;ad.createRoot=mg.createRoot,ad.hydrateRoot=mg.hydrateRoot;/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ia(){return Ia=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ia.apply(this,arguments)}var tr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(tr||(tr={}));const gg="popstate";function j1(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return th("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:nh(i)}return B1(e,n,null,t)}function H1(){return Math.random().toString(36).substr(2,8)}function _g(t){return{usr:t.state,key:t.key}}function th(t,e,n,r){return n===void 0&&(n=null),Ia({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ms(e):e,{state:n,key:e&&e.key||r||H1()})}function nh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ms(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function B1(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=tr.Pop,a=null;function u(){l=tr.Pop,a&&a({action:l,location:h.location})}function d(m,g){l=tr.Push;let y=th(h.location,m,g);n&&n(y,m);let E=_g(y),p=h.createHref(y);try{o.pushState(E,"",p)}catch{i.location.assign(p)}s&&a&&a({action:l,location:y})}function c(m,g){l=tr.Replace;let y=th(h.location,m,g);n&&n(y,m);let E=_g(y),p=h.createHref(y);o.replaceState(E,"",p),s&&a&&a({action:l,location:y})}let h={get action(){return l},get location(){return t(i,o)},listen(m){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(gg,u),a=m,()=>{i.removeEventListener(gg,u),a=null}},createHref(m){return e(i,m)},push:d,replace:c,go(m){return o.go(m)}};return h}var vg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(vg||(vg={}));function W1(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ms(e):e,i=r0(r.pathname||"/",n);if(i==null)return null;let s=n0(t);V1(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=ex(s[l],i);return o}function n0(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(Be(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let l=hr([r,o.relativePath]),a=n.concat(o);i.children&&i.children.length>0&&(Be(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),n0(i.children,e,a,l)),!(i.path==null&&!i.index)&&e.push({path:l,score:J1(l,i.index),routesMeta:a})}),e}function V1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Z1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const G1=/^:\w+$/,K1=3,Q1=2,Y1=1,q1=10,X1=-2,yg=t=>t==="*";function J1(t,e){let n=t.split("/"),r=n.length;return n.some(yg)&&(r+=X1),e&&(r+=Q1),n.filter(i=>!yg(i)).reduce((i,s)=>i+(G1.test(s)?K1:s===""?Y1:q1),r)}function Z1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function ex(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=Df({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!d)return null;Object.assign(r,d.params);let c=l.route;s.push({params:r,pathname:hr([i,d.pathname]),pathnameBase:sx(hr([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=hr([i,d.pathnameBase]))}return s}function Df(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=tx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let h=l[c]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[d]=nx(l[c]||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function tx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),i0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,l)=>(r.push(l),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function nx(t,e){try{return decodeURIComponent(t)}catch(n){return i0(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function r0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function i0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function rx(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ms(t):t;return{pathname:n?n.startsWith("/")?n:ix(n,e):e,search:ox(r),hash:lx(i)}}function ix(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function jc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function s0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ms(t):(i=Ia({},t),Be(!i.pathname||!i.pathname.includes("?"),jc("?","pathname","search",i)),Be(!i.pathname||!i.pathname.includes("#"),jc("#","pathname","hash",i)),Be(!i.search||!i.search.includes("#"),jc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let c=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}l=c>=0?e[c]:"/"}let a=rx(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const hr=t=>t.join("/").replace(/\/\/+/g,"/"),sx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ox=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,lx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class ax{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function ux(t){return t instanceof ax}var vu={exports:{}},yu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cx=v.exports,dx=Symbol.for("react.element"),hx=Symbol.for("react.fragment"),fx=Object.prototype.hasOwnProperty,px=cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mx={key:!0,ref:!0,__self:!0,__source:!0};function o0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)fx.call(e,r)&&!mx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:dx,type:t,key:s,ref:o,props:i,_owner:px.current}}yu.Fragment=hx;yu.jsx=o0;yu.jsxs=o0;(function(t){t.exports=yu})(vu);const hi=vu.exports.Fragment,N=vu.exports.jsx,Ee=vu.exports.jsxs;/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rh(){return rh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rh.apply(this,arguments)}function gx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const _x=typeof Object.is=="function"?Object.is:gx,{useState:vx,useEffect:yx,useLayoutEffect:wx,useDebugValue:Cx}=ld;function Ex(t,e,n){const r=e(),[{inst:i},s]=vx({inst:{value:r,getSnapshot:e}});return wx(()=>{i.value=r,i.getSnapshot=e,Hc(i)&&s({inst:i})},[t,r,e]),yx(()=>(Hc(i)&&s({inst:i}),t(()=>{Hc(i)&&s({inst:i})})),[t]),Cx(r),r}function Hc(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!_x(n,r)}catch{return!0}}function Sx(t,e,n){return e()}const xx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kx=!xx,Ix=kx?Sx:Ex;"useSyncExternalStore"in ld&&(t=>t.useSyncExternalStore)(ld);const Tx=v.exports.createContext(null),Rx=v.exports.createContext(null),wu=v.exports.createContext(null),Lf=v.exports.createContext(null),Cu=v.exports.createContext(null),Go=v.exports.createContext({outlet:null,matches:[]}),l0=v.exports.createContext(null);function bx(t,e){let{relative:n}=e===void 0?{}:e;fi()||Be(!1);let{basename:r,navigator:i}=v.exports.useContext(Lf),{hash:s,pathname:o,search:l}=Ta(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:hr([r,o])),i.createHref({pathname:a,search:l,hash:s})}function fi(){return v.exports.useContext(Cu)!=null}function gs(){return fi()||Be(!1),v.exports.useContext(Cu).location}function Px(t){fi()||Be(!1);let{pathname:e}=gs();return v.exports.useMemo(()=>Df(t,e),[e,t])}function a0(t){return t.filter((e,n)=>n===0||!e.route.index&&e.pathnameBase!==t[n-1].pathnameBase)}function Eu(){fi()||Be(!1);let{basename:t,navigator:e}=v.exports.useContext(Lf),{matches:n}=v.exports.useContext(Go),{pathname:r}=gs(),i=JSON.stringify(a0(n).map(l=>l.pathnameBase)),s=v.exports.useRef(!1);return v.exports.useEffect(()=>{s.current=!0}),v.exports.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){e.go(l);return}let u=s0(l,JSON.parse(i),r,a.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:hr([t,u.pathname])),(a.replace?e.replace:e.push)(u,a.state,a)},[t,e,i,r])}function Ta(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=v.exports.useContext(Go),{pathname:i}=gs(),s=JSON.stringify(a0(r).map(o=>o.pathnameBase));return v.exports.useMemo(()=>s0(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Nx(t,e){fi()||Be(!1);let n=v.exports.useContext(wu),{matches:r}=v.exports.useContext(Go),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let l=gs(),a;if(e){var u;let g=typeof e=="string"?ms(e):e;o==="/"||((u=g.pathname)==null?void 0:u.startsWith(o))||Be(!1),a=g}else a=l;let d=a.pathname||"/",c=o==="/"?d:d.slice(o.length)||"/",h=W1(t,{pathname:c}),m=Lx(h&&h.map(g=>Object.assign({},g,{params:Object.assign({},s,g.params),pathname:hr([o,g.pathname]),pathnameBase:g.pathnameBase==="/"?o:hr([o,g.pathnameBase])})),r,n||void 0);return e?N(Cu.Provider,{value:{location:rh({pathname:"/",search:"",hash:"",state:null,key:"default"},a),navigationType:tr.Pop},children:m}):m}function Ox(){let t=Fx(),e=ux(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return Ee(hi,{children:[N("h2",{children:"Unhandled Thrown Error!"}),N("h3",{style:{fontStyle:"italic"},children:e}),n?N("pre",{style:i,children:n}):null,N("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),Ee("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",N("code",{style:s,children:"errorElement"})," props on\xA0",N("code",{style:s,children:"<Route>"})]})]})}class Ax extends v.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?N(l0.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function Dx(t){let{routeContext:e,match:n,children:r}=t,i=v.exports.useContext(Tx);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),N(Go.Provider,{value:e,children:r})}function Lx(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Be(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||N(Ox,{}):null,d=()=>N(Dx,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,l+1))},children:a?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||l===0)?N(Ax,{location:n.location,component:u,error:a,children:d()}):d()},null)}var wg;(function(t){t.UseRevalidator="useRevalidator"})(wg||(wg={}));var ih;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(ih||(ih={}));function Mx(t){let e=v.exports.useContext(wu);return e||Be(!1),e}function Fx(){var t;let e=v.exports.useContext(l0),n=Mx(ih.UseRouteError),r=v.exports.useContext(Go),i=r.matches[r.matches.length-1];return e||(r||Be(!1),i.route.id||Be(!1),(t=n.errors)==null?void 0:t[i.route.id])}function Mf(t){let{to:e,replace:n,state:r,relative:i}=t;fi()||Be(!1);let s=v.exports.useContext(wu),o=Eu();return v.exports.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function Gr(t){Be(!1)}function $x(t){let{basename:e="/",children:n=null,location:r,navigationType:i=tr.Pop,navigator:s,static:o=!1}=t;fi()&&Be(!1);let l=e.replace(/^\/*/,"/"),a=v.exports.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=ms(r));let{pathname:u="/",search:d="",hash:c="",state:h=null,key:m="default"}=r,g=v.exports.useMemo(()=>{let y=r0(u,l);return y==null?null:{pathname:y,search:d,hash:c,state:h,key:m}},[l,u,d,c,h,m]);return g==null?null:N(Lf.Provider,{value:a,children:N(Cu.Provider,{children:n,value:{location:g,navigationType:i}})})}function u0(t){let{children:e,location:n}=t,r=v.exports.useContext(Rx),i=r&&!e?r.router.routes:sh(e);return Nx(i,n)}var Cg;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Cg||(Cg={}));new Promise(()=>{});function sh(t,e){e===void 0&&(e=[]);let n=[];return v.exports.Children.forEach(t,(r,i)=>{if(!v.exports.isValidElement(r))return;if(r.type===v.exports.Fragment){n.push.apply(n,sh(r.props.children,e));return}r.type!==Gr&&Be(!1),!r.props.index||!r.props.children||Be(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=sh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function c0(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Ux(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function zx(t,e){return t.button===0&&(!e||e==="_self")&&!Ux(t)}const jx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Hx=["aria-current","caseSensitive","className","end","style","to","children"];function Bx(t){let{basename:e,children:n,window:r}=t,i=v.exports.useRef();i.current==null&&(i.current=j1({window:r,v5Compat:!0}));let s=i.current,[o,l]=v.exports.useState({action:s.action,location:s.location});return v.exports.useLayoutEffect(()=>s.listen(l),[s]),N($x,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const Su=v.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:d}=e,c=c0(e,jx),h=bx(u,{relative:i}),m=Wx(u,{replace:o,state:l,target:a,preventScrollReset:d,relative:i});function g(y){r&&r(y),y.defaultPrevented||m(y)}return N("a",{...c,href:h,onClick:s?r:g,ref:n,target:a})}),Ra=v.exports.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:a,children:u}=e,d=c0(e,Hx),c=Ta(a),h=Px({path:c.pathname,end:o,caseSensitive:i}),m=v.exports.useContext(wu),g=m==null?void 0:m.navigation.location,y=Ta(g||""),p=v.exports.useMemo(()=>g?Df({path:c.pathname,end:o,caseSensitive:i},y.pathname):null,[g,c.pathname,i,o,y.pathname])!=null,f=h!=null,_=f?r:void 0,w;typeof s=="function"?w=s({isActive:f,isPending:p}):w=[s,f?"active":null,p?"pending":null].filter(Boolean).join(" ");let S=typeof l=="function"?l({isActive:f,isPending:p}):l;return N(Su,{...d,"aria-current":_,className:w,ref:n,style:S,to:a,children:typeof u=="function"?u({isActive:f,isPending:p}):u})});var Eg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Eg||(Eg={}));var Sg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Sg||(Sg={}));function Wx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,l=Eu(),a=gs(),u=Ta(t,{relative:o});return v.exports.useCallback(d=>{if(zx(d,n)){d.preventDefault();let c=r!==void 0?r:nh(a)===nh(u);l(t,{replace:c,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,t,s,o])}const pi=v.exports.createContext(),to={login:"[Auth] Login",logout:"[Auth] Logout"},Vx=(t={},e)=>{switch(e.type){case to.login:return{...t,logged:!0,user:e.payload};case to.logout:return{logged:!1};default:return t}};/**
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
 */const d0={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const R=function(t,e){if(!t)throw _s(e)},_s=function(t){return new Error("Firebase Database ("+d0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const h0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Gx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ff={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,m=u&63;a||(m=64,o||(h=64)),r.push(n[d],n[c],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(h0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Gx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw Error();const h=s<<2|l>>4;if(r.push(h),u!==64){const m=l<<4&240|u>>2;if(r.push(m),c!==64){const g=u<<6&192|c;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},f0=function(t){const e=h0(t);return Ff.encodeByteArray(e,!0)},ba=function(t){return f0(t).replace(/\./g,"")},Pa=function(t){try{return Ff.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Kx(t){return p0(void 0,t)}function p0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Qx(n)||(t[n]=p0(t[n],e[n]));return t}function Qx(t){return t!=="__proto__"}/**
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
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $f(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function Yx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function m0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qx(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g0(){return d0.NODE_ADMIN===!0}function Xx(){return typeof indexedDB=="object"}function Jx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Zx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ek=()=>Zx().__FIREBASE_DEFAULTS__,tk=()=>{if(typeof process>"u")return;const t=process.env.__FIREBASE_DEFAULTS__,e=process.env.__FIREBASE_DEFAULTS_PATH__;if(t)return e&&console.warn("Values were provided for both __FIREBASE_DEFAULTS__ and __FIREBASE_DEFAULTS_PATH__. __FIREBASE_DEFAULTS_PATH__ will be ignored."),JSON.parse(t);if(e&&typeof require<"u")try{return require(e)}catch{console.warn(`Unable to read defaults from file provided to __FIREBASE_DEFAULTS_PATH__: ${e}`)}},nk=()=>{if(typeof document>"u")return;const t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/),e=t&&Pa(t[1]);return e&&JSON.parse(e)},Uf=()=>ek()||tk()||nk(),_0=t=>{var e,n;return(n=(e=Uf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rk=()=>{var t;return(t=Uf())===null||t===void 0?void 0:t.config},v0=t=>{var e;return(e=Uf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class bt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ik(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[ba(JSON.stringify(n)),ba(JSON.stringify(o)),l].join(".")}/**
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
 */const sk="FirebaseError";class Pr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sk,Object.setPrototypeOf(this,Pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ko.prototype.create)}}class Ko{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ok(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Pr(i,l,r)}}function ok(t,e){return t.replace(lk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const lk=/\{\$([^}]+)}/g;/**
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
 */function Ro(t){return JSON.parse(t)}function Ke(t){return JSON.stringify(t)}/**
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
 */const y0=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ro(Pa(s[0])||""),n=Ro(Pa(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},ak=function(t){const e=y0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},uk=function(t){const e=y0(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function cn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ei(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Na(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oa(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Aa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(xg(s)&&xg(o)){if(!Aa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xg(t){return t!==null&&typeof t=="object"}/**
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
 */function vs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ws(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Vs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class ck{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function dk(t,e){const n=new hk(t,e);return n.subscribe.bind(n)}class hk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Bc),i.error===void 0&&(i.error=Bc),i.complete===void 0&&(i.complete=Bc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bc(){}function ti(t,e){return`${t} failed: ${e} argument `}/**
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
 */const pk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class ni{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fr="[DEFAULT]";/**
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
 */class mk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_k(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gk(t){return t===Fr?void 0:t}function _k(t){return t.instantiationMode==="EAGER"}/**
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
 */class vk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const yk={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},wk=ve.INFO,Ck={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},Ek=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ck[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zf{constructor(e){this.name=e,this._logLevel=wk,this._logHandler=Ek,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const Sk=(t,e)=>e.some(n=>t instanceof n);let kg,Ig;function xk(){return kg||(kg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kk(){return Ig||(Ig=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const w0=new WeakMap,oh=new WeakMap,C0=new WeakMap,Wc=new WeakMap,jf=new WeakMap;function Ik(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(fr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&w0.set(n,t)}).catch(()=>{}),jf.set(e,t),e}function Tk(t){if(oh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});oh.set(t,e)}let lh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||C0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rk(t){lh=t(lh)}function bk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Vc(this),e,...n);return C0.set(r,e.sort?e.sort():[e]),fr(r)}:kk().includes(t)?function(...e){return t.apply(Vc(this),e),fr(w0.get(this))}:function(...e){return fr(t.apply(Vc(this),e))}}function Pk(t){return typeof t=="function"?bk(t):(t instanceof IDBTransaction&&Tk(t),Sk(t,xk())?new Proxy(t,lh):t)}function fr(t){if(t instanceof IDBRequest)return Ik(t);if(Wc.has(t))return Wc.get(t);const e=Pk(t);return e!==t&&(Wc.set(t,e),jf.set(e,t)),e}const Vc=t=>jf.get(t);function Nk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=fr(o);return r&&o.addEventListener("upgradeneeded",a=>{r(fr(o.result),a.oldVersion,a.newVersion,fr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Ok=["get","getKey","getAll","getAllKeys","count"],Ak=["put","add","delete","clear"],Gc=new Map;function Tg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gc.get(e))return Gc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Ak.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ok.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Gc.set(e,s),s}Rk(t=>({...t,get:(e,n,r)=>Tg(e,n)||t.get(e,n,r),has:(e,n)=>!!Tg(e,n)||t.has(e,n)}));/**
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
 */class Dk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Lk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ah="@firebase/app",Rg="0.8.0";/**
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
 */const ri=new zf("@firebase/app"),Mk="@firebase/app-compat",Fk="@firebase/analytics-compat",$k="@firebase/analytics",Uk="@firebase/app-check-compat",zk="@firebase/app-check",jk="@firebase/auth",Hk="@firebase/auth-compat",Bk="@firebase/database",Wk="@firebase/database-compat",Vk="@firebase/functions",Gk="@firebase/functions-compat",Kk="@firebase/installations",Qk="@firebase/installations-compat",Yk="@firebase/messaging",qk="@firebase/messaging-compat",Xk="@firebase/performance",Jk="@firebase/performance-compat",Zk="@firebase/remote-config",eI="@firebase/remote-config-compat",tI="@firebase/storage",nI="@firebase/storage-compat",rI="@firebase/firestore",iI="@firebase/firestore-compat",sI="firebase",oI="9.11.0";/**
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
 */const uh="[DEFAULT]",lI={[ah]:"fire-core",[Mk]:"fire-core-compat",[$k]:"fire-analytics",[Fk]:"fire-analytics-compat",[zk]:"fire-app-check",[Uk]:"fire-app-check-compat",[jk]:"fire-auth",[Hk]:"fire-auth-compat",[Bk]:"fire-rtdb",[Wk]:"fire-rtdb-compat",[Vk]:"fire-fn",[Gk]:"fire-fn-compat",[Kk]:"fire-iid",[Qk]:"fire-iid-compat",[Yk]:"fire-fcm",[qk]:"fire-fcm-compat",[Xk]:"fire-perf",[Jk]:"fire-perf-compat",[Zk]:"fire-rc",[eI]:"fire-rc-compat",[tI]:"fire-gcs",[nI]:"fire-gcs-compat",[rI]:"fire-fst",[iI]:"fire-fst-compat","fire-js":"fire-js",[sI]:"fire-js-all"};/**
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
 */const Da=new Map,ch=new Map;function aI(t,e){try{t.container.addComponent(e)}catch(n){ri.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function es(t){const e=t.name;if(ch.has(e))return ri.debug(`There were multiple attempts to register component ${e}.`),!1;ch.set(e,t);for(const n of Da.values())aI(n,t);return!0}function Hf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const uI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pr=new Ko("app","Firebase",uI);/**
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
 */class cI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ni("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}}/**
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
 */const Qo=oI;function E0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:uh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw pr.create("bad-app-name",{appName:String(i)});if(n||(n=rk()),!n)throw pr.create("no-options");const s=Da.get(i);if(s){if(Aa(n,s.options)&&Aa(r,s.config))return s;throw pr.create("duplicate-app",{appName:i})}const o=new vk(i);for(const a of ch.values())o.addComponent(a);const l=new cI(n,r,o);return Da.set(i,l),l}function S0(t=uh){const e=Da.get(t);if(!e&&t===uh)return E0();if(!e)throw pr.create("no-app",{appName:t});return e}function mr(t,e,n){var r;let i=(r=lI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ri.warn(l.join(" "));return}es(new ni(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const dI="firebase-heartbeat-database",hI=1,bo="firebase-heartbeat-store";let Kc=null;function x0(){return Kc||(Kc=Nk(dI,hI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bo)}}}).catch(t=>{throw pr.create("idb-open",{originalErrorMessage:t.message})})),Kc}async function fI(t){var e;try{return(await x0()).transaction(bo).objectStore(bo).get(k0(t))}catch(n){if(n instanceof Pr)ri.warn(n.message);else{const r=pr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});ri.warn(r.message)}}}async function bg(t,e){var n;try{const i=(await x0()).transaction(bo,"readwrite");return await i.objectStore(bo).put(e,k0(t)),i.done}catch(r){if(r instanceof Pr)ri.warn(r.message);else{const i=pr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});ri.warn(i.message)}}}function k0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pI=1024,mI=30*24*60*60*1e3;class gI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Pg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=mI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Pg(),{heartbeatsToSend:n,unsentEntries:r}=_I(this._heartbeatsCache.heartbeats),i=ba(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Pg(){return new Date().toISOString().substring(0,10)}function _I(t,e=pI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ng(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ng(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xx()?Jx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await fI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ng(t){return ba(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function yI(t){es(new ni("platform-logger",e=>new Dk(e),"PRIVATE")),es(new ni("heartbeat",e=>new gI(e),"PRIVATE")),mr(ah,Rg,t),mr(ah,Rg,"esm2017"),mr("fire-js","")}yI("");function Bf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function I0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wI=I0,T0=new Ko("auth","Firebase",I0());/**
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
 */const Og=new zf("@firebase/auth");function ql(t,...e){Og.logLevel<=ve.ERROR&&Og.error(`Auth (${Qo}): ${t}`,...e)}/**
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
 */function un(t,...e){throw Wf(t,...e)}function yn(t,...e){return Wf(t,...e)}function CI(t,e,n){const r=Object.assign(Object.assign({},wI()),{[e]:n});return new Ko("auth","Firebase",r).create(e,{appName:t.name})}function Wf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return T0.create(t,...e)}function V(t,e,...n){if(!t)throw Wf(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ql(e),new Error(e)}function Fn(t,e){t||bn(e)}/**
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
 */const Ag=new Map;function Pn(t){Fn(t instanceof Function,"Expected a class definition");let e=Ag.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ag.set(t,e),e)}/**
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
 */function EI(t,e){const n=Hf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Aa(s,e!=null?e:{}))return i;un(i,"already-initialized")}return n.initialize({options:e})}function SI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function dh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xI(){return Dg()==="http:"||Dg()==="https:"}function Dg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function kI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xI()||Yx()||"connection"in navigator)?navigator.onLine:!0}function II(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=$f()||m0()}get(){return kI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vf(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class R0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const TI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const RI=new Yo(3e4,6e4);function qo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xo(t,e,n,r,i={}){return b0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=vs(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),R0.fetch()(P0(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function b0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},TI),e);try{const i=new bI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Nl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nl(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Nl(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Nl(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw CI(t,d,u);un(t,d)}}catch(i){if(i instanceof Pr)throw i;un(t,"network-request-failed")}}async function Jo(t,e,n,r,i={}){const s=await Xo(t,e,n,r,i);return"mfaPendingCredential"in s&&un(t,"multi-factor-auth-required",{_serverResponse:s}),s}function P0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Vf(t.config,i):`${t.config.apiScheme}://${i}`}class bI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yn(this.auth,"network-request-failed")),RI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Nl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function PI(t,e){return Xo(t,"POST","/v1/accounts:delete",e)}async function NI(t,e){return Xo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function no(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OI(t,e=!1){const n=$e(t),r=await n.getIdToken(e),i=Gf(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:no(Qc(i.auth_time)),issuedAtTime:no(Qc(i.iat)),expirationTime:no(Qc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qc(t){return Number(t)*1e3}function Gf(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return ql("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pa(r);return s?JSON.parse(s):(ql("Failed to decode base64 JWT payload"),null)}catch(s){return ql("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function AI(t){const e=Gf(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Po(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pr&&DI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function DI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class LI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class N0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=no(this.lastLoginAt),this.creationTime=no(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function La(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Po(t,NI(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$I(s.providerUserInfo):[],l=FI(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new N0(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function MI(t){const e=$e(t);await La(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $I(t){return t.map(e=>{var{providerId:n}=e,r=Bf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function UI(t,e){const n=await b0(t,{},async()=>{const r=vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=P0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",R0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class No{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):AI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await UI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new No;return r&&(V(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new No,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
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
 */function Wn(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Bf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new N0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Po(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return OI(this,e)}reload(){return MI(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await La(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Po(this,PI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,E=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:_,emailVerified:w,isAnonymous:S,providerData:P,stsTokenManager:k}=n;V(_&&k,e,"internal-error");const I=No.fromJSON(this.name,k);V(typeof _=="string",e,"internal-error"),Wn(c,e.name),Wn(h,e.name),V(typeof w=="boolean",e,"internal-error"),V(typeof S=="boolean",e,"internal-error"),Wn(m,e.name),Wn(g,e.name),Wn(y,e.name),Wn(E,e.name),Wn(p,e.name),Wn(f,e.name);const K=new Kr({uid:_,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:S,photoURL:g,phoneNumber:m,tenantId:y,stsTokenManager:I,createdAt:p,lastLoginAt:f});return P&&Array.isArray(P)&&(K.providerData=P.map(F=>Object.assign({},F))),E&&(K._redirectEventId=E),K}static async _fromIdTokenResponse(e,n,r=!1){const i=new No;i.updateFromServerResponse(n);const s=new Kr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await La(s),s}}/**
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
 */class O0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}O0.type="NONE";const Lg=O0;/**
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
 */function Xl(t,e,n){return`firebase:${t}:${e}:${n}`}class Bi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Xl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bi(Pn(Lg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Pn(Lg);const o=Xl(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Kr._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Bi(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Bi(s,e,r))}}/**
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
 */function Mg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(L0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(A0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(F0(e))return"Blackberry";if($0(e))return"Webos";if(Kf(e))return"Safari";if((e.includes("chrome/")||D0(e))&&!e.includes("edge/"))return"Chrome";if(M0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function A0(t=ft()){return/firefox\//i.test(t)}function Kf(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function D0(t=ft()){return/crios\//i.test(t)}function L0(t=ft()){return/iemobile/i.test(t)}function M0(t=ft()){return/android/i.test(t)}function F0(t=ft()){return/blackberry/i.test(t)}function $0(t=ft()){return/webos/i.test(t)}function ku(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zI(t=ft()){var e;return ku(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jI(){return qx()&&document.documentMode===10}function U0(t=ft()){return ku(t)||M0(t)||$0(t)||F0(t)||/windows phone/i.test(t)||L0(t)}function HI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function z0(t,e=[]){let n;switch(t){case"Browser":n=Mg(ft());break;case"Worker":n=`${Mg(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qo}/${r}`}/**
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
 */class BI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class WI{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fg(this),this.idTokenSubscription=new Fg(this),this.beforeStateQueue=new BI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=T0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a==null?void 0:a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await La(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=II()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$e(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ko("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Bi.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=z0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Zo(t){return $e(t)}class Fg{constructor(e){this.auth=e,this.observer=null,this.addObserver=dk(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function VI(t,e,n){const r=Zo(t);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=j0(e),{host:o,port:l}=GI(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||KI()}function j0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GI(t){const e=j0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:$g(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:$g(o)}}}function $g(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function KI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Qf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}async function QI(t,e){return Xo(t,"POST","/v1/accounts:update",e)}/**
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
 */async function YI(t,e){return Jo(t,"POST","/v1/accounts:signInWithPassword",qo(t,e))}/**
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
 */async function qI(t,e){return Jo(t,"POST","/v1/accounts:signInWithEmailLink",qo(t,e))}async function XI(t,e){return Jo(t,"POST","/v1/accounts:signInWithEmailLink",qo(t,e))}/**
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
 */class Oo extends Qf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Oo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Oo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return YI(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return qI(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return QI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return XI(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Wi(t,e){return Jo(t,"POST","/v1/accounts:signInWithIdp",qo(t,e))}/**
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
 */const JI="http://localhost";class ii extends Qf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ii(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Bf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ii(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wi(e,n)}buildRequest(){const e={requestUri:JI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vs(n)}return e}}/**
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
 */function ZI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eT(t){const e=Ws(Vs(t)).link,n=e?Ws(Vs(e)).deep_link_id:null,r=Ws(Vs(t)).deep_link_id;return(r?Ws(Vs(r)).link:null)||r||n||e||t}class Yf{constructor(e){var n,r,i,s,o,l;const a=Ws(Vs(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,c=ZI((i=a.mode)!==null&&i!==void 0?i:null);V(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=eT(e);try{return new Yf(n)}catch{return null}}}/**
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
 */class ys{constructor(){this.providerId=ys.PROVIDER_ID}static credential(e,n){return Oo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Yf.parseLink(n);return V(r,"argument-error"),Oo._fromEmailAndCode(e,r.code,r.tenantId)}}ys.PROVIDER_ID="password";ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class H0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class el extends H0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends el{constructor(){super("facebook.com")}static credential(e){return ii._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class qn extends el{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ii._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
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
 */class Xn extends el{constructor(){super("github.com")}static credential(e){return ii._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
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
 */class Jn extends el{constructor(){super("twitter.com")}static credential(e,n){return ii._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
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
 */async function tT(t,e){return Jo(t,"POST","/v1/accounts:signUp",qo(t,e))}/**
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
 */class si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Kr._fromIdTokenResponse(e,r,i),o=Ug(r);return new si({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ug(r);return new si({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ug(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ma extends Pr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ma.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ma(e,n,r,i)}}function B0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ma._fromErrorAndOperation(t,s,e,r):s})}async function nT(t,e,n=!1){const r=await Po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return si._forOperation(t,"link",r)}/**
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
 */async function rT(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Po(t,B0(i,s,e,t),n);V(o.idToken,i,"internal-error");const l=Gf(o.idToken);V(l,i,"internal-error");const{sub:a}=l;return V(t.uid===a,i,"user-mismatch"),si._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&un(i,"user-mismatch"),o}}/**
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
 */async function W0(t,e,n=!1){const r="signIn",i=await B0(t,r,e),s=await si._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function iT(t,e){return W0(Zo(t),e)}async function sT(t,e,n){const r=Zo(t),i=await tT(r,{returnSecureToken:!0,email:e,password:n}),s=await si._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function oT(t,e,n){return iT($e(t),ys.credential(e,n))}function lT(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function aT(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function uT(t){return $e(t).signOut()}const Fa="__sak";/**
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
 */class V0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fa,"1"),this.storage.removeItem(Fa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function cT(){const t=ft();return Kf(t)||ku(t)}const dT=1e3,hT=10;class G0 extends V0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cT()&&HI(),this.fallbackToPolling=U0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);jI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,hT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}G0.type="LOCAL";const fT=G0;/**
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
 */class K0 extends V0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}K0.type="SESSION";const Q0=K0;/**
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
 */function pT(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Iu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Iu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await pT(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Iu.receivers=[];/**
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
 */function qf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class mT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=qf("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function wn(){return window}function gT(t){wn().location.href=t}/**
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
 */function Y0(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function _T(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yT(){return Y0()?self:null}/**
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
 */const q0="firebaseLocalStorageDb",wT=1,$a="firebaseLocalStorage",X0="fbase_key";class tl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tu(t,e){return t.transaction([$a],e?"readwrite":"readonly").objectStore($a)}function CT(){const t=indexedDB.deleteDatabase(q0);return new tl(t).toPromise()}function hh(){const t=indexedDB.open(q0,wT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($a,{keyPath:X0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($a)?e(r):(r.close(),await CT(),e(await hh()))})})}async function zg(t,e,n){const r=Tu(t,!0).put({[X0]:e,value:n});return new tl(r).toPromise()}async function ET(t,e){const n=Tu(t,!1).get(e),r=await new tl(n).toPromise();return r===void 0?null:r.value}function jg(t,e){const n=Tu(t,!0).delete(e);return new tl(n).toPromise()}const ST=800,xT=3;class J0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Y0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Iu._getInstance(yT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _T(),!this.activeServiceWorker)return;this.sender=new mT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hh();return await zg(e,Fa,"1"),await jg(e,Fa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ET(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Tu(i,!1).getAll();return new tl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ST)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}J0.type="LOCAL";const kT=J0;/**
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
 */function IT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function TT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=yn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",IT().appendChild(r)})}function RT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Yo(3e4,6e4);/**
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
 */function bT(t,e){return e?Pn(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xf extends Qf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PT(t){return W0(t.auth,new Xf(t),t.bypassAuthState)}function NT(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),rT(n,new Xf(t),t.bypassAuthState)}async function OT(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),nT(n,new Xf(t),t.bypassAuthState)}/**
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
 */class Z0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PT;case"linkViaPopup":case"linkViaRedirect":return OT;case"reauthViaPopup":case"reauthViaRedirect":return NT;default:un(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const AT=new Yo(2e3,1e4);class Li extends Z0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Li.currentPopupAction&&Li.currentPopupAction.cancel(),Li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=qf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Li.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,AT.get())};e()}}Li.currentPopupAction=null;/**
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
 */const DT="pendingRedirect",Jl=new Map;class LT extends Z0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jl.get(this.auth._key());if(!e){try{const r=await MT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jl.set(this.auth._key(),e)}return this.bypassAuthState||Jl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MT(t,e){const n=UT(e),r=$T(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function FT(t,e){Jl.set(t._key(),e)}function $T(t){return Pn(t._redirectPersistence)}function UT(t){return Xl(DT,t.config.apiKey,t.name)}async function zT(t,e,n=!1){const r=Zo(t),i=bT(r,e),o=await new LT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const jT=10*60*1e3;class HT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ew(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hg(e))}saveEventToCache(e){this.cachedEventUids.add(Hg(e)),this.lastProcessedEventTime=Date.now()}}function Hg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ew({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ew(t);default:return!1}}/**
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
 */async function WT(t,e={}){return Xo(t,"GET","/v1/projects",e)}/**
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
 */const VT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GT=/^https?/;async function KT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WT(t);for(const n of e)try{if(QT(n))return}catch{}un(t,"unauthorized-domain")}function QT(t){const e=dh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!GT.test(n))return!1;if(VT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const YT=new Yo(3e4,6e4);function Bg(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qT(t){return new Promise((e,n)=>{var r,i,s;function o(){Bg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bg(),n(yn(t,"network-request-failed"))},timeout:YT.get()})}if(!((i=(r=wn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wn().gapi)===null||s===void 0)&&s.load)o();else{const l=RT("iframefcb");return wn()[l]=()=>{gapi.load?o():n(yn(t,"network-request-failed"))},TT(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Zl=null,e})}let Zl=null;function XT(t){return Zl=Zl||qT(t),Zl}/**
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
 */const JT=new Yo(5e3,15e3),ZT="__/auth/iframe",eR="emulator/auth/iframe",tR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rR(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vf(e,eR):`https://${t.config.authDomain}/${ZT}`,r={apiKey:e.apiKey,appName:t.name,v:Qo},i=nR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${vs(r).slice(1)}`}async function iR(t){const e=await XT(t),n=wn().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:rR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),l=wn().setTimeout(()=>{s(o)},JT.get());function a(){wn().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const sR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oR=500,lR=600,aR="_blank",uR="http://localhost";class Wg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cR(t,e,n,r=oR,i=lR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},sR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ft().toLowerCase();n&&(l=D0(u)?aR:n),A0(u)&&(e=e||uR,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[m,g])=>`${h}${m}=${g},`,"");if(zI(u)&&l!=="_self")return dR(e||"",l),new Wg(null);const c=window.open(e||"",l,d);V(c,t,"popup-blocked");try{c.focus()}catch{}return new Wg(c)}function dR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const hR="__/auth/handler",fR="emulator/auth/handler";function Vg(t,e,n,r,i,s){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qo,eventId:i};if(e instanceof H0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Na(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(e instanceof el){const a=e.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${pR(t)}?${vs(l).slice(1)}`}function pR({config:t}){return t.emulator?Vf(t,fR):`https://${t.authDomain}/${hR}`}/**
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
 */const Yc="webStorageSupport";class mR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Q0,this._completeRedirectFn=zT,this._overrideRedirectResult=FT}async _openPopup(e,n,r,i){var s;Fn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Vg(e,n,r,dh(),i);return cR(e,o,qf())}async _openRedirect(e,n,r,i){return await this._originValidation(e),gT(Vg(e,n,r,dh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Fn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await iR(e),r=new HT(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yc,{type:Yc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Yc];o!==void 0&&n(!!o),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return U0()||Kf()||ku()}}const gR=mR;var Gg="@firebase/auth",Kg="0.20.8";/**
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
 */class _R{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function yR(t){es(new ni("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{V(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),V(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:z0(t)},d=new WI(l,a,u);return SI(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),es(new ni("auth-internal",e=>{const n=Zo(e.getProvider("auth").getImmediate());return(r=>new _R(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mr(Gg,Kg,vR(t)),mr(Gg,Kg,"esm2017")}/**
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
 */const wR=5*60,CR=v0("authIdTokenMaxAge")||wR;let Qg=null;const ER=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>CR)return;const i=n==null?void 0:n.token;Qg!==i&&(Qg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function SR(t=S0()){const e=Hf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=EI(t,{popupRedirectResolver:gR,persistence:[kT,fT,Q0]}),r=v0("authTokenSyncURL");if(r){const s=ER(r);aT(n,s,()=>s(n.currentUser)),lT(n,o=>s(o))}const i=_0("auth");return i&&VI(n,`http://${i}`),n}yR("Browser");var xR="firebase",kR="9.11.0";/**
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
 */mr(xR,kR,"app");const Yg="@firebase/database",qg="0.13.7";/**
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
 */let tw="";function nw(t){tw=t}/**
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
 */class IR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ro(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class TR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return cn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const rw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new IR(e)}}catch{}return new TR},Br=rw("localStorage"),fh=rw("sessionStorage");/**
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
 */const Vi=new zf("@firebase/database"),iw=function(){let t=1;return function(){return t++}}(),sw=function(t){const e=pk(t),n=new ck;n.update(e);const r=n.digest();return Ff.encodeByteArray(r)},nl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=nl.apply(null,r):typeof r=="object"?e+=Ke(r):e+=r,e+=" "}return e};let Qr=null,Xg=!0;const ow=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Vi.logLevel=ve.VERBOSE,Qr=Vi.log.bind(Vi),e&&fh.set("logging_enabled",!0)):typeof t=="function"?Qr=t:(Qr=null,fh.remove("logging_enabled"))},Ze=function(...t){if(Xg===!0&&(Xg=!1,Qr===null&&fh.get("logging_enabled")===!0&&ow(!0)),Qr){const e=nl.apply(null,t);Qr(e)}},rl=function(t){return function(...e){Ze(t,...e)}},ph=function(...t){const e="FIREBASE INTERNAL ERROR: "+nl(...t);Vi.error(e)},En=function(...t){const e=`FIREBASE FATAL ERROR: ${nl(...t)}`;throw Vi.error(e),new Error(e)},dt=function(...t){const e="FIREBASE WARNING: "+nl(...t);Vi.warn(e)},RR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ru=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},bR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},$n="[MIN_NAME]",Sn="[MAX_NAME]",mi=function(t,e){if(t===e)return 0;if(t===$n||e===Sn)return-1;if(e===$n||t===Sn)return 1;{const n=Ua(t),r=Ua(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},PR=function(t,e){return t===e?0:t<e?-1:1},Ms=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ke(e))},Jf=function(t){if(typeof t!="object"||t===null)return Ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ke(e[r]),n+=":",n+=Jf(t[e[r]]);return n+="}",n},lw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function tt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const aw=function(t){R(!Ru(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},NR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},OR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function AR(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const DR=new RegExp("^-?(0*)\\d{1,10}$"),uw=-2147483648,Zf=2147483647,Ua=function(t){if(DR.test(t)){const e=Number(t);if(e>=uw&&e<=Zf)return e}return null},ws=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},LR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ro=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class MR{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){dt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class FR{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dt(e)}}class Gi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Gi.OWNER="owner";/**
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
 */const ep="5",cw="v",dw="s",hw="r",fw="f",pw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,mw="ls",gw="p",mh="ac",_w="websocket",vw="long_polling";/**
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
 */class yw{constructor(e,n,r,i,s=!1,o="",l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Br.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Br.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $R(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ww(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(e===_w)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===vw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$R(t)&&(n.ns=t.namespace);const i=[];return tt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class UR{constructor(){this.counters_={}}incrementCounter(e,n=1){cn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Kx(this.counters_)}}/**
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
 */const qc={},Xc={};function tp(t){const e=t.toString();return qc[e]||(qc[e]=new UR),qc[e]}function zR(t,e){const n=t.toString();return Xc[n]||(Xc[n]=e()),Xc[n]}/**
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
 */class jR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ws(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Jg="start",HR="close",BR="pLPCommand",WR="pRTLPCB",Cw="id",Ew="pw",Sw="ser",VR="cb",GR="seg",KR="ts",QR="d",YR="dframe",xw=1870,kw=30,qR=xw-kw,XR=25e3,JR=3e4;class nr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=rl(e),this.stats_=tp(n),this.urlFn=a=>(this.appCheckToken&&(a[mh]=this.appCheckToken),ww(n,vw,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new jR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(JR)),bR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new np((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Jg)this.id=l,this.password=a;else if(o===HR)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Jg]="t",r[Sw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[VR]=this.scriptTagHolder.uniqueCallbackIdentifier),r[cw]=ep,this.transportSessionId&&(r[dw]=this.transportSessionId),this.lastSessionId&&(r[mw]=this.lastSessionId),this.applicationId&&(r[gw]=this.applicationId),this.appCheckToken&&(r[mh]=this.appCheckToken),typeof location<"u"&&location.hostname&&pw.test(location.hostname)&&(r[hw]=fw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){nr.forceAllow_=!0}static forceDisallow(){nr.forceDisallow_=!0}static isAvailable(){return nr.forceAllow_?!0:!nr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!NR()&&!OR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=f0(n),i=lw(r,qR);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[YR]="t",r[Cw]=e,r[Ew]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class np{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=iw(),window[BR+this.uniqueCallbackIdentifier]=e,window[WR+this.uniqueCallbackIdentifier]=n,this.myIFrame=np.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;s='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ze("frame writing exception"),l.stack&&Ze(l.stack),Ze(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ze("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Cw]=this.myID,e[Ew]=this.myPW,e[Sw]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+kw+r.length<=xw;){const o=this.pendingSegs.shift();r=r+"&"+GR+i+"="+o.seg+"&"+KR+i+"="+o.ts+"&"+QR+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(XR)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const ZR=16384,eb=45e3;let za=null;typeof MozWebSocket<"u"?za=MozWebSocket:typeof WebSocket<"u"&&(za=WebSocket);class zt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=rl(this.connId),this.stats_=tp(n),this.connURL=zt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[cw]=ep,typeof location<"u"&&location.hostname&&pw.test(location.hostname)&&(o[hw]=fw),n&&(o[dw]=n),r&&(o[mw]=r),i&&(o[mh]=i),s&&(o[gw]=s),ww(e,_w,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Br.set("previous_websocket_failure",!0);try{let r;g0(),this.mySock=new za(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&za!==null&&!zt.forceDisallow_}static previouslyFailed(){return Br.isInMemoryStorage||Br.get("previous_websocket_failure")===!0}markConnectionHealthy(){Br.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ro(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=lw(n,ZR);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(eb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}zt.responsesRequiredToBeHealthy=2;zt.healthyTimeout=3e4;/**
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
 */class ts{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[nr,zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=zt&&zt.isAvailable();let r=n&&!zt.previouslyFailed();if(e.webSocketOnly&&(n||dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[zt];else{const i=this.transports_=[];for(const s of ts.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ts.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ts.globalTransportInitialized_=!1;/**
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
 */const tb=6e4,nb=5e3,rb=10*1024,ib=100*1024,Jc="t",Zg="d",sb="s",e_="r",ob="e",t_="o",n_="a",r_="n",i_="p",lb="h";class ab{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=rl("c:"+this.id+":"),this.transportManager_=new ts(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ro(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ib?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jc in e){const n=e[Jc];n===n_?this.upgradeIfSecondaryHealthy_():n===e_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===t_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ms("t",e),r=Ms("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:i_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:n_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:r_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ms("t",e),r=Ms("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ms(Jc,e);if(Zg in e){const r=e[Zg];if(n===lb)this.onHandshake_(r);else if(n===r_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===sb?this.onConnectionShutdown_(r):n===e_?this.onReset_(r):n===ob?ph("Server Error: "+r):n===t_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ph("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ep!==r&&dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ro(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(tb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ro(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(nb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:i_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Br.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Iw{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Tw{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ja extends Tw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$f()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ja}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const s_=32,o_=768;class de{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ue(){return new de("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Er(t){return t.pieces_.length-t.pieceNum_}function ye(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new de(t.pieces_,e)}function rp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ub(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ao(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Rw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new de(e,0)}function Te(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof de)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new de(n,0)}function X(t){return t.pieceNum_>=t.pieces_.length}function gt(t,e){const n=q(t),r=q(e);if(n===null)return e;if(n===r)return gt(ye(t),ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function cb(t,e){const n=Ao(t,0),r=Ao(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=mi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function ip(t,e){if(Er(t)!==Er(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ht(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Er(t)>Er(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class db{constructor(e,n){this.errorPrefix_=n,this.parts_=Ao(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=xu(this.parts_[r]);bw(this)}}function hb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=xu(e),bw(t)}function fb(t){const e=t.parts_.pop();t.byteLength_-=xu(e),t.parts_.length>0&&(t.byteLength_-=1)}function bw(t){if(t.byteLength_>o_)throw new Error(t.errorPrefix_+"has a key path longer than "+o_+" bytes ("+t.byteLength_+").");if(t.parts_.length>s_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+s_+") or object contains a cycle "+$r(t))}function $r(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class sp extends Tw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new sp}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Fs=1e3,pb=60*5*1e3,l_=30*1e3,mb=1.3,gb=3e4,_b="server_kill",a_=3;class Wt extends Iw{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Wt.nextPersistentConnectionId_++,this.log_=rl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fs,this.maxReconnectDelay_=pb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!g0())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ja.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ke(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new bt,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Wt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&cn(e,"w")){const r=ei(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||uk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=l_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ak(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ph("Unrecognized action received from server: "+Ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gb&&(this.reconnectDelay_=Fs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Wt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){R(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ze("getToken() completed but was canceled"):(Ze("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new ab(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{dt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(_b)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&dt(c),a())}}}interrupt(e){Ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Na(this.interruptReasons_)&&(this.reconnectDelay_=Fs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Jf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new de(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ze("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=a_&&(this.reconnectDelay_=l_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ze("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=a_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+tw.replace(/\./g,"-")]=1,$f()?e["framework.cordova"]=1:m0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ja.getInstance().currentlyOnline();return Na(this.interruptReasons_)&&e}}Wt.nextPersistentConnectionId_=0;Wt.nextConnectionId_=0;/**
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
 */class te{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new te(e,n)}}/**
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
 */class bu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new te($n,e),i=new te($n,n);return this.compare(r,i)!==0}minPost(){return te.MIN}}/**
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
 */let Ol;class Pw extends bu{static get __EMPTY_NODE(){return Ol}static set __EMPTY_NODE(e){Ol=e}compare(e,n){return mi(e.name,n.name)}isDefinedOn(e){throw _s("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return te.MIN}maxPost(){return new te(Sn,Ol)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,Ol)}toString(){return".key"}}const Cn=new Pw;/**
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
 */class Al{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Je.RED,this.left=i!=null?i:St.EMPTY_NODE,this.right=s!=null?s:St.EMPTY_NODE}copy(e,n,r,i,s){return new Je(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return St.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return St.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Je.RED=!0;Je.BLACK=!1;class vb{copy(e,n,r,i,s){return this}insert(e,n,r){return new Je(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class St{constructor(e,n=St.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new St(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Je.BLACK,null,null))}remove(e){return new St(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Je.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Al(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Al(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Al(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Al(this.root_,null,this.comparator_,!0,e)}}St.EMPTY_NODE=new vb;/**
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
 */function yb(t,e){return mi(t.name,e.name)}function op(t,e){return mi(t,e)}/**
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
 */let gh;function wb(t){gh=t}const Nw=function(t){return typeof t=="number"?"number:"+aw(t):"string:"+t},Ow=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&cn(e,".sv"),"Priority must be a string or number.")}else R(t===gh||t.isEmpty(),"priority of unexpected type.");R(t===gh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let u_;class qe{constructor(e,n=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ow(this.priorityNode_)}static set __childrenNodeConstructor(e){u_=e}static get __childrenNodeConstructor(){return u_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return X(e)?this:q(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||Er(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ye(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Nw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=aw(this.value_):e+=this.value_,this.lazyHash_=sw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=qe.VALUE_TYPE_ORDER.indexOf(n),s=qe.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Aw,Dw;function Cb(t){Aw=t}function Eb(t){Dw=t}class Sb extends bu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?mi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return te.MIN}maxPost(){return new te(Sn,new qe("[PRIORITY-POST]",Dw))}makePost(e,n){const r=Aw(e);return new te(n,new qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Se=new Sb;/**
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
 */const xb=Math.log(2);class kb{constructor(e){const n=s=>parseInt(Math.log(s)/xb,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ha=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new Je(h,c.node,Je.BLACK,null,null);{const m=parseInt(d/2,10)+a,g=i(a,m),y=i(m+1,u);return c=t[m],h=n?n(c):c,new Je(h,c.node,Je.BLACK,g,y)}},s=function(a){let u=null,d=null,c=t.length;const h=function(g,y){const E=c-g,p=c;c-=g;const f=i(E+1,p),_=t[E],w=n?n(_):_;m(new Je(w,_.node,y,null,f))},m=function(g){u?(u.left=g,u=g):(d=g,u=g)};for(let g=0;g<a.count;++g){const y=a.nextBitIsOne(),E=Math.pow(2,a.count-(g+1));y?h(E,Je.BLACK):(h(E,Je.BLACK),h(E,Je.RED))}return d},o=new kb(t.length),l=s(o);return new St(r||e,l)};/**
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
 */let Zc;const Ei={};class Nn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(Ei&&Se,"ChildrenNode.ts has not been loaded"),Zc=Zc||new Nn({".priority":Ei},{".priority":Se}),Zc}get(e){const n=ei(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof St?n:null}hasIndex(e){return cn(this.indexSet_,e.toString())}addIndex(e,n){R(e!==Cn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(te.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Ha(r,e.getCompare()):l=Ei;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Nn(d,u)}addToIndexes(e,n){const r=Oa(this.indexes_,(i,s)=>{const o=ei(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===Ei)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(te.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Ha(l,o.getCompare())}else return Ei;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new te(e.name,l))),a.insert(e,e.node)}});return new Nn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Oa(this.indexes_,i=>{if(i===Ei)return i;{const s=n.get(e.name);return s?i.remove(new te(e.name,s)):i}});return new Nn(r,this.indexSet_)}}/**
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
 */let $s;class z{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Ow(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $s||($s=new z(new St(op),null,Nn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$s}updatePriority(e){return this.children_.isEmpty()?this:new z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$s:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new te(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?$s:this.priorityNode_;return new z(i,o,s)}}updateChild(e,n){const r=q(e);if(r===null)return n;{R(q(e)!==".priority"||Er(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ye(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Se,(o,l)=>{n[o]=l.val(e),r++,s&&z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Nw(this.getPriority().val())+":"),this.forEachChild(Se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":sw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new te(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new te(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===il?-1:0}withIndex(e){if(e===Cn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Cn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Se),i=n.getIterator(Se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Cn?null:this.indexMap_.get(e.toString())}}z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ib extends z{constructor(){super(new St(op),z.EMPTY_NODE,Nn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return z.EMPTY_NODE}isEmpty(){return!1}}const il=new Ib;Object.defineProperties(te,{MIN:{value:new te($n,z.EMPTY_NODE)},MAX:{value:new te(Sn,il)}});Pw.__EMPTY_NODE=z.EMPTY_NODE;qe.__childrenNodeConstructor=z;wb(il);Eb(il);/**
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
 */const Tb=!0;function Pe(t,e=null){if(t===null)return z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new qe(n,Pe(e))}if(!(t instanceof Array)&&Tb){const n=[];let r=!1;if(tt(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Pe(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new te(o,a)))}}),n.length===0)return z.EMPTY_NODE;const s=Ha(n,yb,o=>o.name,op);if(r){const o=Ha(n,Se.getCompare());return new z(s,Pe(e),new Nn({".priority":o},{".priority":Se}))}else return new z(s,Pe(e),Nn.Default)}else{let n=z.EMPTY_NODE;return tt(t,(r,i)=>{if(cn(t,r)&&r.substring(0,1)!=="."){const s=Pe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Pe(e))}}Cb(Pe);/**
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
 */class lp extends bu{constructor(e){super(),this.indexPath_=e,R(!X(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?mi(e.name,n.name):s}makePost(e,n){const r=Pe(e),i=z.EMPTY_NODE.updateChild(this.indexPath_,r);return new te(n,i)}maxPost(){const e=z.EMPTY_NODE.updateChild(this.indexPath_,il);return new te(Sn,e)}toString(){return Ao(this.indexPath_,0).join("/")}}/**
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
 */class Rb extends bu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?mi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,n){const r=Pe(e);return new te(n,r)}toString(){return".value"}}const ap=new Rb;/**
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
 */const ns="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",_h="-",Lw="z",Mw=786,bb=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=ns.charAt(n%64),n=Math.floor(n/64);R(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ns.charAt(e[i]);return R(o.length===20,"nextPushId: Length should be 20."),o}}(),c_=function(t){if(t===""+Zf)return _h;const e=Ua(t);if(e!=null)return""+(e+1);const n=new Array(t.length);for(let o=0;o<n.length;o++)n[o]=t.charAt(o);if(n.length<Mw)return n.push(_h),n.join("");let r=n.length-1;for(;r>=0&&n[r]===Lw;)r--;if(r===-1)return Sn;const i=n[r],s=ns.charAt(ns.indexOf(i)+1);return n[r]=s,n.slice(0,r+1).join("")},d_=function(t){if(t===""+uw)return $n;const e=Ua(t);if(e!=null)return""+(e-1);const n=new Array(t.length);for(let r=0;r<n.length;r++)n[r]=t.charAt(r);return n[n.length-1]===_h?n.length===1?""+Zf:(delete n[n.length-1],n.join("")):(n[n.length-1]=ns.charAt(ns.indexOf(n[n.length-1])-1),n.join("")+Lw.repeat(Mw-n.length))};/**
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
 */function Fw(t){return{type:"value",snapshotNode:t}}function rs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Do(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Lo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Pb(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class up{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Do(n,l)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(rs(n,r)):o.trackChildChange(Lo(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Se,(i,s)=>{n.hasChild(i)||r.trackChildChange(Do(i,s))}),n.isLeafNode()||n.forEachChild(Se,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Lo(i,s,o))}else r.trackChildChange(rs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Mo{constructor(e){this.indexedFilter_=new up(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Mo.getStartPost_(e),this.endPost_=Mo.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new te(n,r))||(r=z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=z.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(z.EMPTY_NODE);const s=this;return n.forEachChild(Se,(o,l)=>{s.matches(new te(o,l))||(i=i.updateImmediateChild(o,z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Nb{constructor(e){this.rangedFilter_=new Mo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new te(n,r))||(r=z.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=z.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(z.EMPTY_NODE);let s,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const c=this.index_.getCompare();l=(h,m)=>c(m,h)}else a=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let u=0,d=!1;for(;a.hasNext();){const c=a.getNext();!d&&l(s,c)<=0&&(d=!0),d&&u<this.limit_&&l(c,o)<=0?u++:i=i.updateImmediateChild(c.name,z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,m)=>c(m,h)}else o=this.index_.getCompare();const l=e;R(l.numChildren()===this.limit_,"");const a=new te(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,a);if(d&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Lo(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Do(n,c));const y=l.updateImmediateChild(n,z.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(rs(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Do(u.name,u.node)),s.trackChildChange(rs(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,z.EMPTY_NODE)):e}}/**
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
 */class Pu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Se}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$n}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Sn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Se}copy(){const e=new Pu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ob(t){return t.loadsAllData()?new up(t.getIndex()):t.hasLimit()?new Nb(t):new Mo(t)}function Ab(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function Db(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function vh(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function Lb(t,e,n){let r;if(t.index_===Cn)typeof e=="string"&&(e=c_(e)),r=vh(t,e,n);else{let i;n==null?i=Sn:i=c_(n),r=vh(t,e,i)}return r.startAfterSet_=!0,r}function yh(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Mb(t,e,n){let r,i;return t.index_===Cn?(typeof e=="string"&&(e=d_(e)),i=yh(t,e,n)):(n==null?r=$n:r=d_(n),i=yh(t,e,r)),i.endBeforeSet_=!0,i}function Nu(t,e){const n=t.copy();return n.index_=e,n}function h_(t){const e={};if(t.isDefault())return e;let n;return t.index_===Se?n="$priority":t.index_===ap?n="$value":t.index_===Cn?n="$key":(R(t.index_ instanceof lp,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ke(n),t.startSet_&&(e.startAt=Ke(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Ke(t.indexStartName_))),t.endSet_&&(e.endAt=Ke(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Ke(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function f_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Se&&(e.i=t.index_.toString()),e}/**
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
 */class Ba extends Iw{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=rl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ba.getListenId_(e,r),l={};this.listens_[o]=l;const a=h_(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),ei(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Ba.getListenId_(e,n);delete this.listens_[r]}get(e){const n=h_(e._queryParams),r=e._path.toString(),i=new bt;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+vs(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ro(l.responseText)}catch{dt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&dt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class Fb{constructor(){this.rootNode_=z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Wa(){return{value:null,children:new Map}}function Cs(t,e,n){if(X(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=q(e);t.children.has(r)||t.children.set(r,Wa());const i=t.children.get(r);e=ye(e),Cs(i,e,n)}}function wh(t,e){if(X(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Se,(r,i)=>{Cs(t,new de(r),i)}),wh(t,e)}}else if(t.children.size>0){const n=q(e);return e=ye(e),t.children.has(n)&&wh(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Ch(t,e,n){t.value!==null?n(e,t.value):$b(t,(r,i)=>{const s=new de(e.toString()+"/"+r);Ch(i,s,n)})}function $b(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class Ub{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&tt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const p_=10*1e3,zb=30*1e3,jb=5*60*1e3;class Hb{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ub(e);const r=p_+(zb-p_)*Math.random();ro(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;tt(e,(i,s)=>{s>0&&cn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ro(this.reportStats_.bind(this),Math.floor(Math.random()*2*jb))}}/**
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
 */var nn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nn||(nn={}));function cp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function dp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Va{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=nn.ACK_USER_WRITE,this.source=cp()}operationForChild(e){if(X(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new de(e));return new Va(ue(),n,this.revert)}}else return R(q(this.path)===e,"operationForChild called for unrelated child."),new Va(ye(this.path),this.affectedTree,this.revert)}}/**
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
 */class Fo{constructor(e,n){this.source=e,this.path=n,this.type=nn.LISTEN_COMPLETE}operationForChild(e){return X(this.path)?new Fo(this.source,ue()):new Fo(this.source,ye(this.path))}}/**
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
 */class oi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=nn.OVERWRITE}operationForChild(e){return X(this.path)?new oi(this.source,ue(),this.snap.getImmediateChild(e)):new oi(this.source,ye(this.path),this.snap)}}/**
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
 */class is{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=nn.MERGE}operationForChild(e){if(X(this.path)){const n=this.children.subtree(new de(e));return n.isEmpty()?null:n.value?new oi(this.source,ue(),n.value):new is(this.source,ue(),n)}else return R(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new is(this.source,ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Sr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(X(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Bb{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Wb(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Pb(o.childName,o.snapshotNode))}),Us(t,i,"child_removed",e,r,n),Us(t,i,"child_added",e,r,n),Us(t,i,"child_moved",s,r,n),Us(t,i,"child_changed",e,r,n),Us(t,i,"value",e,r,n),i}function Us(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>Gb(t,l,a)),o.forEach(l=>{const a=Vb(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function Vb(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Gb(t,e,n){if(e.childName==null||n.childName==null)throw _s("Should only compare child_ events.");const r=new te(e.childName,e.snapshotNode),i=new te(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Ou(t,e){return{eventCache:t,serverCache:e}}function io(t,e,n,r){return Ou(new Sr(e,n,r),t.serverCache)}function $w(t,e,n,r){return Ou(t.eventCache,new Sr(e,n,r))}function Ga(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function li(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let ed;const Kb=()=>(ed||(ed=new St(PR)),ed);class we{constructor(e,n=Kb()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return tt(e,(r,i)=>{n=n.set(new de(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ue(),value:this.value};if(X(e))return null;{const r=q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ye(e),n);return s!=null?{path:Te(new de(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(X(e))return this;{const n=q(e),r=this.children.get(n);return r!==null?r.subtree(ye(e)):new we(null)}}set(e,n){if(X(e))return new we(n,this.children);{const r=q(e),s=(this.children.get(r)||new we(null)).set(ye(e),n),o=this.children.insert(r,s);return new we(this.value,o)}}remove(e){if(X(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=q(e),r=this.children.get(n);if(r){const i=r.remove(ye(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new we(null):new we(this.value,s)}else return this}}get(e){if(X(e))return this.value;{const n=q(e),r=this.children.get(n);return r?r.get(ye(e)):null}}setTree(e,n){if(X(e))return n;{const r=q(e),s=(this.children.get(r)||new we(null)).setTree(ye(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new we(this.value,o)}}fold(e){return this.fold_(ue(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Te(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ue(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(X(e))return null;{const s=q(e),o=this.children.get(s);return o?o.findOnPath_(ye(e),Te(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ue(),n)}foreachOnPath_(e,n,r){if(X(e))return this;{this.value&&r(n,this.value);const i=q(e),s=this.children.get(i);return s?s.foreachOnPath_(ye(e),Te(n,i),r):new we(null)}}foreach(e){this.foreach_(ue(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Te(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class ln{constructor(e){this.writeTree_=e}static empty(){return new ln(new we(null))}}function so(t,e,n){if(X(e))return new ln(new we(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=gt(i,e);return s=s.updateChild(o,n),new ln(t.writeTree_.set(i,s))}else{const i=new we(n),s=t.writeTree_.setTree(e,i);return new ln(s)}}}function Eh(t,e,n){let r=t;return tt(n,(i,s)=>{r=so(r,Te(e,i),s)}),r}function m_(t,e){if(X(e))return ln.empty();{const n=t.writeTree_.setTree(e,new we(null));return new ln(n)}}function Sh(t,e){return gi(t,e)!=null}function gi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(gt(n.path,e)):null}function g_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Se,(r,i)=>{e.push(new te(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new te(r,i.value))}),e}function gr(t,e){if(X(e))return t;{const n=gi(t,e);return n!=null?new ln(new we(n)):new ln(t.writeTree_.subtree(e))}}function xh(t){return t.writeTree_.isEmpty()}function ss(t,e){return Uw(ue(),t.writeTree_,e)}function Uw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Uw(Te(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Te(t,".priority"),r)),n}}/**
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
 */function Au(t,e){return Bw(e,t)}function Qb(t,e,n,r,i){R(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=so(t.visibleWrites,e,n)),t.lastWriteId=r}function Yb(t,e,n,r){R(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Eh(t.visibleWrites,e,n),t.lastWriteId=r}function qb(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Xb(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Jb(l,r.path)?i=!1:Ht(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return Zb(t),!0;if(r.snap)t.visibleWrites=m_(t.visibleWrites,r.path);else{const l=r.children;tt(l,a=>{t.visibleWrites=m_(t.visibleWrites,Te(r.path,a))})}return!0}else return!1}function Jb(t,e){if(t.snap)return Ht(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ht(Te(t.path,n),e))return!0;return!1}function Zb(t){t.visibleWrites=zw(t.allWrites,eP,ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function eP(t){return t.visible}function zw(t,e,n){let r=ln.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Ht(n,o)?(l=gt(n,o),r=so(r,l,s.snap)):Ht(o,n)&&(l=gt(o,n),r=so(r,ue(),s.snap.getChild(l)));else if(s.children){if(Ht(n,o))l=gt(n,o),r=Eh(r,l,s.children);else if(Ht(o,n))if(l=gt(o,n),X(l))r=Eh(r,ue(),s.children);else{const a=ei(s.children,q(l));if(a){const u=a.getChild(ye(l));r=so(r,ue(),u)}}}else throw _s("WriteRecord should have .snap or .children")}}return r}function jw(t,e,n,r,i){if(!r&&!i){const s=gi(t.visibleWrites,e);if(s!=null)return s;{const o=gr(t.visibleWrites,e);if(xh(o))return n;if(n==null&&!Sh(o,ue()))return null;{const l=n||z.EMPTY_NODE;return ss(o,l)}}}else{const s=gr(t.visibleWrites,e);if(!i&&xh(s))return n;if(!i&&n==null&&!Sh(s,ue()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Ht(u.path,e)||Ht(e,u.path))},l=zw(t.allWrites,o,e),a=n||z.EMPTY_NODE;return ss(l,a)}}}function tP(t,e,n){let r=z.EMPTY_NODE;const i=gi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=gr(t.visibleWrites,e);return n.forEachChild(Se,(o,l)=>{const a=ss(gr(s,new de(o)),l);r=r.updateImmediateChild(o,a)}),g_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=gr(t.visibleWrites,e);return g_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function nP(t,e,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Te(e,n);if(Sh(t.visibleWrites,s))return null;{const o=gr(t.visibleWrites,s);return xh(o)?i.getChild(n):ss(o,i.getChild(n))}}function rP(t,e,n,r){const i=Te(e,n),s=gi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=gr(t.visibleWrites,i);return ss(o,r.getNode().getImmediateChild(n))}else return null}function iP(t,e){return gi(t.visibleWrites,e)}function sP(t,e,n,r,i,s,o){let l;const a=gr(t.visibleWrites,e),u=gi(a,ue());if(u!=null)l=u;else if(n!=null)l=ss(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let m=h.getNext();for(;m&&d.length<i;)c(m,r)!==0&&d.push(m),m=h.getNext();return d}else return[]}function oP(){return{visibleWrites:ln.empty(),allWrites:[],lastWriteId:-1}}function Ka(t,e,n,r){return jw(t.writeTree,t.treePath,e,n,r)}function fp(t,e){return tP(t.writeTree,t.treePath,e)}function __(t,e,n,r){return nP(t.writeTree,t.treePath,e,n,r)}function Qa(t,e){return iP(t.writeTree,Te(t.treePath,e))}function lP(t,e,n,r,i,s){return sP(t.writeTree,t.treePath,e,n,r,i,s)}function pp(t,e,n){return rP(t.writeTree,t.treePath,e,n)}function Hw(t,e){return Bw(Te(t.treePath,e),t.writeTree)}function Bw(t,e){return{treePath:t,writeTree:e}}/**
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
 */class aP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Lo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Do(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,rs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Lo(r,e.snapshotNode,i.oldSnap));else throw _s("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class uP{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Ww=new uP;class mp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Sr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:li(this.viewCache_),s=lP(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function cP(t){return{filter:t}}function dP(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function hP(t,e,n,r,i){const s=new aP;let o,l;if(n.type===nn.OVERWRITE){const u=n;u.source.fromUser?o=kh(t,e,u.path,u.snap,r,i,s):(R(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!X(u.path),o=Ya(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===nn.MERGE){const u=n;u.source.fromUser?o=pP(t,e,u.path,u.children,r,i,s):(R(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Ih(t,e,u.path,u.children,r,i,l,s))}else if(n.type===nn.ACK_USER_WRITE){const u=n;u.revert?o=_P(t,e,u.path,r,i,s):o=mP(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===nn.LISTEN_COMPLETE)o=gP(t,e,n.path,r,s);else throw _s("Unknown operation type: "+n.type);const a=s.getChanges();return fP(e,o,a),{viewCache:o,changes:a}}function fP(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ga(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Fw(Ga(e)))}}function Vw(t,e,n,r,i,s){const o=e.eventCache;if(Qa(r,n)!=null)return e;{let l,a;if(X(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=li(e),d=u instanceof z?u:z.EMPTY_NODE,c=fp(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Ka(r,li(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=q(n);if(u===".priority"){R(Er(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=__(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=ye(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=__(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=pp(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return io(e,l,o.isFullyInitialized()||X(n),t.filter.filtersNodes())}}function Ya(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(X(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),m,null)}else{const m=q(n);if(!a.isCompleteForPath(n)&&Er(n)>1)return e;const g=ye(n),E=a.getNode().getImmediateChild(m).updateChild(g,r);m===".priority"?u=d.updatePriority(a.getNode(),E):u=d.updateChild(a.getNode(),m,E,g,Ww,null)}const c=$w(e,u,a.isFullyInitialized()||X(n),d.filtersNodes()),h=new mp(i,c,s);return Vw(t,c,n,i,h,l)}function kh(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new mp(i,e,s);if(X(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=io(e,u,!0,t.filter.filtersNodes());else{const c=q(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=io(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=ye(n),m=l.getNode().getImmediateChild(c);let g;if(X(h))g=r;else{const y=d.getCompleteChild(c);y!=null?rp(h)===".priority"&&y.getChild(Rw(h)).isEmpty()?g=y:g=y.updateChild(h,r):g=z.EMPTY_NODE}if(m.equals(g))a=e;else{const y=t.filter.updateChild(l.getNode(),c,g,h,d,o);a=io(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function v_(t,e){return t.eventCache.isCompleteForChild(e)}function pP(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=Te(n,a);v_(e,q(d))&&(l=kh(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=Te(n,a);v_(e,q(d))||(l=kh(t,l,d,u,i,s,o))}),l}function y_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ih(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;X(n)?u=r:u=new we(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const m=e.serverCache.getNode().getImmediateChild(c),g=y_(t,m,h);a=Ya(t,a,new de(c),g,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const m=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!m){const g=e.serverCache.getNode().getImmediateChild(c),y=y_(t,g,h);a=Ya(t,a,new de(c),y,i,s,o,l)}}),a}function mP(t,e,n,r,i,s,o){if(Qa(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(X(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ya(t,e,n,a.getNode().getChild(n),i,s,l,o);if(X(n)){let u=new we(null);return a.getNode().forEachChild(Cn,(d,c)=>{u=u.set(new de(d),c)}),Ih(t,e,n,u,i,s,l,o)}else return e}else{let u=new we(null);return r.foreach((d,c)=>{const h=Te(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),Ih(t,e,n,u,i,s,l,o)}}function gP(t,e,n,r,i){const s=e.serverCache,o=$w(e,s.getNode(),s.isFullyInitialized()||X(n),s.isFiltered());return Vw(t,o,n,r,Ww,i)}function _P(t,e,n,r,i,s){let o;if(Qa(r,n)!=null)return e;{const l=new mp(r,e,i),a=e.eventCache.getNode();let u;if(X(n)||q(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ka(r,li(e));else{const c=e.serverCache.getNode();R(c instanceof z,"serverChildren would be complete if leaf node"),d=fp(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=q(n);let c=pp(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,ye(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,z.EMPTY_NODE,ye(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ka(r,li(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Qa(r,ue())!=null,io(e,u,o,t.filter.filtersNodes())}}/**
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
 */class vP{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new up(r.getIndex()),s=Ob(r);this.processor_=cP(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(z.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(z.EMPTY_NODE,l.getNode(),null),d=new Sr(a,o.isFullyInitialized(),i.filtersNodes()),c=new Sr(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ou(c,d),this.eventGenerator_=new Bb(this.query_)}get query(){return this.query_}}function yP(t){return t.viewCache_.serverCache.getNode()}function wP(t){return Ga(t.viewCache_)}function CP(t,e){const n=li(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!X(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function w_(t){return t.eventRegistrations_.length===0}function EP(t,e){t.eventRegistrations_.push(e)}function C_(t,e,n){const r=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function E_(t,e,n,r){e.type===nn.MERGE&&e.source.queryId!==null&&(R(li(t.viewCache_),"We should always have a full cache before handling merges"),R(Ga(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=hP(t.processor_,i,e,n,r);return dP(t.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Gw(t,s.changes,s.viewCache.eventCache.getNode(),null)}function SP(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Se,(s,o)=>{r.push(rs(s,o))}),n.isFullyInitialized()&&r.push(Fw(n.getNode())),Gw(t,r,n.getNode(),e)}function Gw(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Wb(t.eventGenerator_,e,n,i)}/**
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
 */let qa;class Kw{constructor(){this.views=new Map}}function xP(t){R(!qa,"__referenceConstructor has already been defined"),qa=t}function kP(){return R(qa,"Reference.ts has not been loaded"),qa}function IP(t){return t.views.size===0}function gp(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),E_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(E_(o,e,n,r));return s}}function Qw(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Ka(n,i?r:null),a=!1;l?a=!0:r instanceof z?(l=fp(n,r),a=!1):(l=z.EMPTY_NODE,a=!1);const u=Ou(new Sr(l,a,!1),new Sr(r,i,!1));return new vP(e,u)}return o}function TP(t,e,n,r,i,s){const o=Qw(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),EP(o,n),SP(o,n)}function RP(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=xr(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(C_(u,n,r)),w_(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(C_(a,n,r)),w_(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!xr(t)&&s.push(new(kP())(e._repo,e._path)),{removed:s,events:o}}function Yw(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function _r(t,e){let n=null;for(const r of t.views.values())n=n||CP(r,e);return n}function qw(t,e){if(e._queryParams.loadsAllData())return Du(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Xw(t,e){return qw(t,e)!=null}function xr(t){return Du(t)!=null}function Du(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Xa;function bP(t){R(!Xa,"__referenceConstructor has already been defined"),Xa=t}function PP(){return R(Xa,"Reference.ts has not been loaded"),Xa}let NP=1;class S_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=oP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _p(t,e,n,r,i){return Qb(t.pendingWriteTree_,e,n,r,i),i?Es(t,new oi(cp(),e,n)):[]}function OP(t,e,n,r){Yb(t.pendingWriteTree_,e,n,r);const i=we.fromObject(n);return Es(t,new is(cp(),e,i))}function rr(t,e,n=!1){const r=qb(t.pendingWriteTree_,e);if(Xb(t.pendingWriteTree_,e)){let s=new we(null);return r.snap!=null?s=s.set(ue(),!0):tt(r.children,o=>{s=s.set(new de(o),!0)}),Es(t,new Va(r.path,s,n))}else return[]}function sl(t,e,n){return Es(t,new oi(dp(),e,n))}function AP(t,e,n){const r=we.fromObject(n);return Es(t,new is(dp(),e,r))}function DP(t,e){return Es(t,new Fo(dp(),e))}function LP(t,e,n){const r=vp(t,n);if(r){const i=yp(r),s=i.path,o=i.queryId,l=gt(s,e),a=new Fo(hp(o),l);return wp(t,s,a)}else return[]}function Ja(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Xw(o,e))){const a=RP(o,e,n,r);IP(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,m)=>xr(m));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const m=$P(h);for(let g=0;g<m.length;++g){const y=m[g],E=y.query,p=tC(t,y);t.listenProvider_.startListening(oo(E),$o(t,E),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(oo(e),null):u.forEach(h=>{const m=t.queryToTagMap.get(Mu(h));t.listenProvider_.stopListening(oo(h),m)}))}UP(t,u)}return l}function Jw(t,e,n,r){const i=vp(t,r);if(i!=null){const s=yp(i),o=s.path,l=s.queryId,a=gt(o,e),u=new oi(hp(l),a,n);return wp(t,o,u)}else return[]}function MP(t,e,n,r){const i=vp(t,r);if(i){const s=yp(i),o=s.path,l=s.queryId,a=gt(o,e),u=we.fromObject(n),d=new is(hp(l),a,u);return wp(t,o,d)}else return[]}function Th(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const g=gt(h,i);s=s||_r(m,g),o=o||xr(m)});let l=t.syncPointTree_.get(i);l?(o=o||xr(l),s=s||_r(l,ue())):(l=new Kw,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=z.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,g)=>{const y=_r(g,ue());y&&(s=s.updateImmediateChild(m,y))}));const u=Xw(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Mu(e);R(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=zP();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const d=Au(t.pendingWriteTree_,i);let c=TP(l,e,n,d,s,a);if(!u&&!o&&!r){const h=qw(l,e);c=c.concat(jP(t,e,h))}return c}function Lu(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=gt(o,e),u=_r(l,a);if(u)return u});return jw(i,e,s,n,!0)}function FP(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=gt(u,n);r=r||_r(d,c)});let i=t.syncPointTree_.get(n);i?r=r||_r(i,ue()):(i=new Kw,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Sr(r,!0,!1):null,l=Au(t.pendingWriteTree_,e._path),a=Qw(i,e,l,s?o.getNode():z.EMPTY_NODE,s);return wP(a)}function Es(t,e){return Zw(e,t.syncPointTree_,null,Au(t.pendingWriteTree_,ue()))}function Zw(t,e,n,r){if(X(t.path))return eC(t,e,n,r);{const i=e.get(ue());n==null&&i!=null&&(n=_r(i,ue()));let s=[];const o=q(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=Hw(r,o);s=s.concat(Zw(l,a,u,d))}return i&&(s=s.concat(gp(i,t,r,n))),s}}function eC(t,e,n,r){const i=e.get(ue());n==null&&i!=null&&(n=_r(i,ue()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Hw(r,o),d=t.operationForChild(o);d&&(s=s.concat(eC(d,l,a,u)))}),i&&(s=s.concat(gp(i,t,r,n))),s}function tC(t,e){const n=e.query,r=$o(t,n);return{hashFn:()=>(yP(e)||z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?LP(t,n._path,r):DP(t,n._path);{const s=AR(i,n);return Ja(t,n,null,s)}}}}function $o(t,e){const n=Mu(e);return t.queryToTagMap.get(n)}function Mu(t){return t._path.toString()+"$"+t._queryIdentifier}function vp(t,e){return t.tagToQueryMap.get(e)}function yp(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new de(t.substr(0,e))}}function wp(t,e,n){const r=t.syncPointTree_.get(e);R(r,"Missing sync point for query tag that we're tracking");const i=Au(t.pendingWriteTree_,e);return gp(r,n,i,null)}function $P(t){return t.fold((e,n,r)=>{if(n&&xr(n))return[Du(n)];{let i=[];return n&&(i=Yw(n)),tt(r,(s,o)=>{i=i.concat(o)}),i}})}function oo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(PP())(t._repo,t._path):t}function UP(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Mu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function zP(){return NP++}function jP(t,e,n){const r=e._path,i=$o(t,e),s=tC(t,n),o=t.listenProvider_.startListening(oo(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)R(!xr(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!X(u)&&d&&xr(d))return[Du(d).query];{let h=[];return d&&(h=h.concat(Yw(d).map(m=>m.query))),tt(c,(m,g)=>{h=h.concat(g)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(oo(d),$o(t,d))}}return o}/**
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
 */class Cp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Cp(n)}node(){return this.node_}}class Ep{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Te(this.path_,e);return new Ep(this.syncTree_,n)}node(){return Lu(this.syncTree_,this.path_)}}const HP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},x_=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return BP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return WP(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},BP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},WP=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},nC=function(t,e,n,r){return xp(e,new Ep(n,t),r)},Sp=function(t,e,n){return xp(t,new Cp(e),n)};function xp(t,e,n){const r=t.getPriority().val(),i=x_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=x_(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new qe(l,Pe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new qe(i))),o.forEachChild(Se,(l,a)=>{const u=xp(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class kp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Fu(t,e){let n=e instanceof de?e:new de(e),r=t,i=q(n);for(;i!==null;){const s=ei(r.node.children,i)||{children:{},childCount:0};r=new kp(i,r,s),n=ye(n),i=q(n)}return r}function _i(t){return t.node.value}function Ip(t,e){t.node.value=e,Rh(t)}function rC(t){return t.node.childCount>0}function VP(t){return _i(t)===void 0&&!rC(t)}function $u(t,e){tt(t.node.children,(n,r)=>{e(new kp(n,t,r))})}function iC(t,e,n,r){n&&!r&&e(t),$u(t,i=>{iC(i,e,!0,r)}),n&&r&&e(t)}function GP(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ol(t){return new de(t.parent===null?t.name:ol(t.parent)+"/"+t.name)}function Rh(t){t.parent!==null&&KP(t.parent,t.name,t)}function KP(t,e,n){const r=VP(n),i=cn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Rh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Rh(t))}/**
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
 */const QP=/[\[\].#$\/\u0000-\u001F\u007F]/,YP=/[\[\].#$\u0000-\u001F\u007F]/,td=10*1024*1024,Uu=function(t){return typeof t=="string"&&t.length!==0&&!QP.test(t)},sC=function(t){return typeof t=="string"&&t.length!==0&&!YP.test(t)},qP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),sC(t)},Uo=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ru(t)||t&&typeof t=="object"&&cn(t,".sv")},xn=function(t,e,n,r){r&&e===void 0||ll(ti(t,"value"),e,n)},ll=function(t,e,n){const r=n instanceof de?new db(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$r(r));if(typeof e=="function")throw new Error(t+"contains a function "+$r(r)+" with contents = "+e.toString());if(Ru(e))throw new Error(t+"contains "+e.toString()+" "+$r(r));if(typeof e=="string"&&e.length>td/3&&xu(e)>td)throw new Error(t+"contains a string greater than "+td+" utf8 bytes "+$r(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(tt(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Uu(o)))throw new Error(t+" contains an invalid key ("+o+") "+$r(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hb(r,o),ll(t,l,r),fb(r)}),i&&s)throw new Error(t+' contains ".value" child '+$r(r)+" in addition to actual children.")}},XP=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Ao(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Uu(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(cb);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Ht(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},oC=function(t,e,n,r){if(r&&e===void 0)return;const i=ti(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];tt(e,(o,l)=>{const a=new de(o);if(ll(i,l,Te(n,a)),rp(a)===".priority"&&!Uo(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),XP(i,s)},Tp=function(t,e,n){if(!(n&&e===void 0)){if(Ru(e))throw new Error(ti(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Uo(e))throw new Error(ti(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},al=function(t,e,n,r){if(!(r&&n===void 0)&&!Uu(n))throw new Error(ti(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},zu=function(t,e,n,r){if(!(r&&n===void 0)&&!sC(n))throw new Error(ti(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},JP=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zu(t,e,n,r)},rn=function(t,e){if(q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},lC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Uu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!qP(n))throw new Error(ti(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class ZP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ju(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!ip(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function aC(t,e,n){ju(t,n),uC(t,r=>ip(r,e))}function At(t,e,n){ju(t,n),uC(t,r=>Ht(r,e)||Ht(e,r))}function uC(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(eN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function eN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Qr&&Ze("event: "+n.toString()),ws(r)}}}/**
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
 */const cC="repo_interrupt",tN=25;class nN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ZP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Wa(),this.transactionQueueTree_=new kp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rN(t,e,n){if(t.stats_=tp(t.repoInfo_),t.forceRestClient_||LR())t.server_=new Ba(t.repoInfo_,(r,i,s,o)=>{k_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>I_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Wt(t.repoInfo_,e,(r,i,s,o)=>{k_(t,r,i,s,o)},r=>{I_(t,r)},r=>{iN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=zR(t.repoInfo_,()=>new Hb(t.stats_,t.server_)),t.infoData_=new Fb,t.infoSyncTree_=new S_({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=sl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Rp(t,"connected",!1),t.serverSyncTree_=new S_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);At(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function dC(t){const n=t.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ul(t){return HP({timestamp:dC(t)})}function k_(t,e,n,r,i){t.dataUpdateCount++;const s=new de(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Oa(n,u=>Pe(u));o=MP(t.serverSyncTree_,s,a,i)}else{const a=Pe(n);o=Jw(t.serverSyncTree_,s,a,i)}else if(r){const a=Oa(n,u=>Pe(u));o=AP(t.serverSyncTree_,s,a)}else{const a=Pe(n);o=sl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=os(t,s)),At(t.eventQueue_,l,o)}function I_(t,e){Rp(t,"connected",e),e===!1&&lN(t)}function iN(t,e){tt(e,(n,r)=>{Rp(t,n,r)})}function Rp(t,e,n){const r=new de("/.info/"+e),i=Pe(n);t.infoData_.updateSnapshot(r,i);const s=sl(t.infoSyncTree_,r,i);At(t.eventQueue_,r,s)}function Hu(t){return t.nextWriteId_++}function sN(t,e,n){const r=FP(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Pe(i).withIndex(e._queryParams.getIndex());Th(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=sl(t.serverSyncTree_,e._path,s);else{const l=$o(t.serverSyncTree_,e);o=Jw(t.serverSyncTree_,e._path,s,l)}return At(t.eventQueue_,e._path,o),Ja(t.serverSyncTree_,e,n,null,!0),s},i=>(Ss(t,"get for query "+Ke(e)+" failed: "+i),Promise.reject(new Error(i))))}function bp(t,e,n,r,i){Ss(t,"set",{path:e.toString(),value:n,priority:r});const s=ul(t),o=Pe(n,r),l=Lu(t.serverSyncTree_,e),a=Sp(o,l,s),u=Hu(t),d=_p(t.serverSyncTree_,e,a,u,!0);ju(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const g=h==="ok";g||dt("set at "+e+" failed: "+h);const y=rr(t.serverSyncTree_,u,!g);At(t.eventQueue_,e,y),kr(t,i,h,m)});const c=Np(t,e);os(t,c),At(t.eventQueue_,c,[])}function oN(t,e,n,r){Ss(t,"update",{path:e.toString(),value:n});let i=!0;const s=ul(t),o={};if(tt(n,(l,a)=>{i=!1,o[l]=nC(Te(e,l),Pe(a),t.serverSyncTree_,s)}),i)Ze("update() called with empty data.  Don't do anything."),kr(t,r,"ok",void 0);else{const l=Hu(t),a=OP(t.serverSyncTree_,e,o,l);ju(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||dt("update at "+e+" failed: "+u);const h=rr(t.serverSyncTree_,l,!c),m=h.length>0?os(t,e):e;At(t.eventQueue_,m,h),kr(t,r,u,d)}),tt(n,u=>{const d=Np(t,Te(e,u));os(t,d)}),At(t.eventQueue_,e,[])}}function lN(t){Ss(t,"onDisconnectEvents");const e=ul(t),n=Wa();Ch(t.onDisconnect_,ue(),(i,s)=>{const o=nC(i,s,t.serverSyncTree_,e);Cs(n,i,o)});let r=[];Ch(n,ue(),(i,s)=>{r=r.concat(sl(t.serverSyncTree_,i,s));const o=Np(t,i);os(t,o)}),t.onDisconnect_=Wa(),At(t.eventQueue_,ue(),r)}function aN(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&wh(t.onDisconnect_,e),kr(t,n,r,i)})}function T_(t,e,n,r){const i=Pe(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&Cs(t.onDisconnect_,e,i),kr(t,r,s,o)})}function uN(t,e,n,r,i){const s=Pe(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,l)=>{o==="ok"&&Cs(t.onDisconnect_,e,s),kr(t,i,o,l)})}function cN(t,e,n,r){if(Na(n)){Ze("onDisconnect().update() called with empty data.  Don't do anything."),kr(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&tt(n,(o,l)=>{const a=Pe(l);Cs(t.onDisconnect_,Te(e,o),a)}),kr(t,r,i,s)})}function dN(t,e,n){let r;q(e._path)===".info"?r=Th(t.infoSyncTree_,e,n):r=Th(t.serverSyncTree_,e,n),aC(t.eventQueue_,e._path,r)}function bh(t,e,n){let r;q(e._path)===".info"?r=Ja(t.infoSyncTree_,e,n):r=Ja(t.serverSyncTree_,e,n),aC(t.eventQueue_,e._path,r)}function hC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(cC)}function hN(t){t.persistentConnection_&&t.persistentConnection_.resume(cC)}function Ss(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ze(n,...e)}function kr(t,e,n,r){e&&ws(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function fN(t,e,n,r,i,s){Ss(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:iw(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},l=Pp(t,e,void 0);o.currentInputSnapshot=l;const a=o.update(l.val());if(a===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{ll("transaction failed: Data returned ",a,o.path),o.status=0;const u=Fu(t.transactionQueueTree_,e),d=_i(u)||[];d.push(o),Ip(u,d);let c;typeof a=="object"&&a!==null&&cn(a,".priority")?(c=ei(a,".priority"),R(Uo(c),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):c=(Lu(t.serverSyncTree_,e)||z.EMPTY_NODE).getPriority().val();const h=ul(t),m=Pe(a,c),g=Sp(m,l,h);o.currentOutputSnapshotRaw=m,o.currentOutputSnapshotResolved=g,o.currentWriteId=Hu(t);const y=_p(t.serverSyncTree_,e,g,o.currentWriteId,o.applyLocally);At(t.eventQueue_,e,y),Bu(t,t.transactionQueueTree_)}}function Pp(t,e,n){return Lu(t.serverSyncTree_,e,n)||z.EMPTY_NODE}function Bu(t,e=t.transactionQueueTree_){if(e||Wu(t,e),_i(e)){const n=pC(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&pN(t,ol(e),n)}else rC(e)&&$u(e,n=>{Bu(t,n)})}function pN(t,e,n){const r=n.map(u=>u.currentWriteId),i=Pp(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];R(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=gt(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Ss(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(rr(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Wu(t,Fu(t.transactionQueueTree_,e)),Bu(t,t.transactionQueueTree_),At(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)ws(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{dt("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}os(t,e)}},o)}function os(t,e){const n=fC(t,e),r=ol(n),i=pC(t,n);return mN(t,i,r),r}function mN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=gt(n,a.path);let d=!1,c;if(R(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(rr(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=tN)d=!0,c="maxretry",i=i.concat(rr(t.serverSyncTree_,a.currentWriteId,!0));else{const h=Pp(t,a.path,o);a.currentInputSnapshot=h;const m=e[l].update(h.val());if(m!==void 0){ll("transaction failed: Data returned ",m,a.path);let g=Pe(m);typeof m=="object"&&m!=null&&cn(m,".priority")||(g=g.updatePriority(h.getPriority()));const E=a.currentWriteId,p=ul(t),f=Sp(g,h,p);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=f,a.currentWriteId=Hu(t),o.splice(o.indexOf(E),1),i=i.concat(_p(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(rr(t.serverSyncTree_,E,!0))}else d=!0,c="nodata",i=i.concat(rr(t.serverSyncTree_,a.currentWriteId,!0))}At(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Wu(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ws(r[l]);Bu(t,t.transactionQueueTree_)}function fC(t,e){let n,r=t.transactionQueueTree_;for(n=q(e);n!==null&&_i(r)===void 0;)r=Fu(r,n),e=ye(e),n=q(e);return r}function pC(t,e){const n=[];return mC(t,e,n),n.sort((r,i)=>r.order-i.order),n}function mC(t,e,n){const r=_i(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);$u(e,i=>{mC(t,i,n)})}function Wu(t,e){const n=_i(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Ip(e,n.length>0?n:void 0)}$u(e,r=>{Wu(t,r)})}function Np(t,e){const n=ol(fC(t,e)),r=Fu(t.transactionQueueTree_,e);return GP(r,i=>{nd(t,i)}),nd(t,r),iC(r,i=>{nd(t,i)}),n}function nd(t,e){const n=_i(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(rr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Ip(e,void 0):n.length=s+1,At(t.eventQueue_,ol(e),i);for(let o=0;o<r.length;o++)ws(r[o])}}/**
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
 */function gN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _N(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):dt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ph=function(t,e){const n=vN(t),r=n.namespace;n.domain==="firebase.com"&&En(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&En("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||RR();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new yw(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new de(n.pathString)}},vN=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=gN(t.substring(d,c)));const h=_N(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class gC{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ke(this.snapshot.exportVal())}}class _C{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Op{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class vC{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new bt;return aN(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){rn("OnDisconnect.remove",this._path);const e=new bt;return T_(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){rn("OnDisconnect.set",this._path),xn("OnDisconnect.set",e,this._path,!1);const n=new bt;return T_(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){rn("OnDisconnect.setWithPriority",this._path),xn("OnDisconnect.setWithPriority",e,this._path,!1),Tp("OnDisconnect.setWithPriority",n,!1);const r=new bt;return uN(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){rn("OnDisconnect.update",this._path),oC("OnDisconnect.update",e,this._path,!1);const n=new bt;return cN(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class Tt{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return X(this._path)?null:rp(this._path)}get ref(){return new Kt(this._repo,this._path)}get _queryIdentifier(){const e=f_(this._queryParams),n=Jf(e);return n==="{}"?"default":n}get _queryObject(){return f_(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof Tt))return!1;const n=this._repo===e._repo,r=ip(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ub(this._path)}}function Vu(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Nr(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Cn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==$n)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Sn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Se){if(e!=null&&!Uo(e)||n!=null&&!Uo(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(R(t.getIndex()instanceof lp||t.getIndex()===ap,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Gu(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Kt extends Tt{constructor(e,n){super(e,n,new Pu,!1)}get parent(){const e=Rw(this._path);return e===null?null:new Kt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ir{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new de(e),r=ai(this.ref,e);return new Ir(this._node.getChild(n),r,Se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ir(i,ai(this.ref,r),Se)))}hasChild(e){const n=new de(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function yC(t,e){return t=$e(t),t._checkNotDeleted("ref"),e!==void 0?ai(t._root,e):t._root}function yN(t,e){t=$e(t),t._checkNotDeleted("refFromURL");const n=Ph(e,t._repo.repoInfo_.nodeAdmin);lC("refFromURL",n);const r=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&r.host!==t._repo.repoInfo_.host&&En("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+t._repo.repoInfo_.host+")"),yC(t,n.path.toString())}function ai(t,e){return t=$e(t),q(t._path)===null?JP("child","path",e,!1):zu("child","path",e,!1),new Kt(t._repo,Te(t._path,e))}function wN(t){return t=$e(t),new vC(t._repo,t._path)}function CN(t,e){t=$e(t),rn("push",t._path),xn("push",e,t._path,!0);const n=dC(t._repo),r=bb(n),i=ai(t,r),s=ai(t,r);let o;return e!=null?o=Ap(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function EN(t){return rn("remove",t._path),Ap(t,null)}function Ap(t,e){t=$e(t),rn("set",t._path),xn("set",e,t._path,!1);const n=new bt;return bp(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function SN(t,e){t=$e(t),rn("setPriority",t._path),Tp("setPriority",e,!1);const n=new bt;return bp(t._repo,Te(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function xN(t,e,n){if(rn("setWithPriority",t._path),xn("setWithPriority",e,t._path,!1),Tp("setWithPriority",n,!1),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const r=new bt;return bp(t._repo,t._path,e,n,r.wrapCallback(()=>{})),r.promise}function kN(t,e){oC("update",e,t._path,!1);const n=new bt;return oN(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function IN(t){t=$e(t);const e=new Op(()=>{}),n=new cl(e);return sN(t._repo,t,n).then(r=>new Ir(r,new Kt(t._repo,t._path),t._queryParams.getIndex()))}class cl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new gC("value",this,new Ir(e.snapshotNode,new Kt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new _C(this,e,n):null}matches(e){return e instanceof cl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ku{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new _C(this,e,n):null}createEvent(e,n){R(e.childName!=null,"Child events should have a childName.");const r=ai(new Kt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new gC(e.type,this,new Ir(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ku?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function dl(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{bh(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Op(n,s||void 0),l=e==="value"?new cl(o):new Ku(e,o);return dN(t._repo,t,l),()=>bh(t._repo,t,l)}function wC(t,e,n,r){return dl(t,"value",e,n,r)}function TN(t,e,n,r){return dl(t,"child_added",e,n,r)}function RN(t,e,n,r){return dl(t,"child_changed",e,n,r)}function bN(t,e,n,r){return dl(t,"child_moved",e,n,r)}function PN(t,e,n,r){return dl(t,"child_removed",e,n,r)}function NN(t,e,n){let r=null;const i=n?new Op(n):null;e==="value"?r=new cl(i):e&&(r=new Ku(e,i)),bh(t._repo,t,r)}class Qt{}class CC extends Qt{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){xn("endAt",this._value,e._path,!0);const n=yh(e._queryParams,this._value,this._key);if(Gu(n),Nr(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Tt(e._repo,e._path,n,e._orderByCalled)}}function ON(t,e){return al("endAt","key",e,!0),new CC(t,e)}class AN extends Qt{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){xn("endBefore",this._value,e._path,!1);const n=Mb(e._queryParams,this._value,this._key);if(Gu(n),Nr(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Tt(e._repo,e._path,n,e._orderByCalled)}}function DN(t,e){return al("endBefore","key",e,!0),new AN(t,e)}class EC extends Qt{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){xn("startAt",this._value,e._path,!0);const n=vh(e._queryParams,this._value,this._key);if(Gu(n),Nr(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Tt(e._repo,e._path,n,e._orderByCalled)}}function LN(t=null,e){return al("startAt","key",e,!0),new EC(t,e)}class MN extends Qt{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){xn("startAfter",this._value,e._path,!1);const n=Lb(e._queryParams,this._value,this._key);if(Gu(n),Nr(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Tt(e._repo,e._path,n,e._orderByCalled)}}function FN(t,e){return al("startAfter","key",e,!0),new MN(t,e)}class $N extends Qt{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Tt(e._repo,e._path,Ab(e._queryParams,this._limit),e._orderByCalled)}}function UN(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new $N(t)}class zN extends Qt{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Tt(e._repo,e._path,Db(e._queryParams,this._limit),e._orderByCalled)}}function jN(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new zN(t)}class HN extends Qt{constructor(e){super(),this._path=e}_apply(e){Vu(e,"orderByChild");const n=new de(this._path);if(X(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new lp(n),i=Nu(e._queryParams,r);return Nr(i),new Tt(e._repo,e._path,i,!0)}}function BN(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return zu("orderByChild","path",t,!1),new HN(t)}class WN extends Qt{_apply(e){Vu(e,"orderByKey");const n=Nu(e._queryParams,Cn);return Nr(n),new Tt(e._repo,e._path,n,!0)}}function VN(){return new WN}class GN extends Qt{_apply(e){Vu(e,"orderByPriority");const n=Nu(e._queryParams,Se);return Nr(n),new Tt(e._repo,e._path,n,!0)}}function KN(){return new GN}class QN extends Qt{_apply(e){Vu(e,"orderByValue");const n=Nu(e._queryParams,ap);return Nr(n),new Tt(e._repo,e._path,n,!0)}}function YN(){return new QN}class qN extends Qt{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){if(xn("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new CC(this._value,this._key)._apply(new EC(this._value,this._key)._apply(e))}}function XN(t,e){return al("equalTo","key",e,!0),new qN(t,e)}function JN(t,...e){let n=$e(t);for(const r of e)n=r._apply(n);return n}xP(Kt);bP(Kt);/**
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
 */const ZN="FIREBASE_DATABASE_EMULATOR_HOST",Nh={};let SC=!1;function eO(t,e,n,r){t.repoInfo_=new yw(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function xC(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||En("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ze("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ph(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[ZN]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Ph(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new Gi(Gi.OWNER):new FR(t.name,t.options,e);lC("Invalid Firebase Database URL",o),X(o.path)||En("Database URL must point to the root of a Firebase Database (not including a child path).");const c=nO(l,t,d,new MR(t.name,n));return new kC(c,t)}function tO(t,e){const n=Nh[e];(!n||n[t.key]!==t)&&En(`Database ${e}(${t.repoInfo_}) has already been deleted.`),hC(t),delete n[t.key]}function nO(t,e,n,r){let i=Nh[e.name];i||(i={},Nh[e.name]=i);let s=i[t.toURLString()];return s&&En("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new nN(t,SC,n,r),i[t.toURLString()]=s,s}function rO(t){SC=t}class kC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Kt(this._repo,ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(tO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&En("Cannot call "+e+" on a deleted database.")}}function IC(){ts.IS_TRANSPORT_INITIALIZED&&dt("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function iO(){IC(),nr.forceDisallow()}function sO(){IC(),zt.forceDisallow(),nr.forceAllow()}function oO(t=S0(),e){const n=Hf(t,"database").getImmediate({identifier:e}),r=_0("database");if(r){const[i,s]=r.split(":");TC(n,i,parseInt(s,10))}return n}function TC(t,e,n,r={}){t=$e(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&En("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&En('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Gi(Gi.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:ik(r.mockUserToken,t.app.options.projectId);s=new Gi(o)}eO(i,e,n,s)}function lO(t){t=$e(t),t._checkNotDeleted("goOffline"),hC(t._repo)}function aO(t){t=$e(t),t._checkNotDeleted("goOnline"),hN(t._repo)}function uO(t,e){ow(t,e)}/**
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
 */function cO(t){nw(Qo),es(new ni("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return xC(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),mr(Yg,qg,t),mr(Yg,qg,"esm2017")}/**
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
 */const dO={".sv":"timestamp"};function hO(){return dO}function fO(t){return{".sv":{increment:t}}}/**
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
 */class RC{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function pO(t,e,n){var r;if(t=$e(t),rn("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,s=new bt,o=(a,u,d)=>{let c=null;a?s.reject(a):(c=new Ir(d,new Kt(t._repo,t._path),Se),s.resolve(new RC(u,c)))},l=wC(t,()=>{});return fN(t._repo,t._path,e,o,l,i),s.promise}Wt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Wt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};const mO=function(t){const e=Wt.prototype.put;return Wt.prototype.put=function(n,r,i,s){s!==void 0&&(s=t()),e.call(this,n,r,i,s)},function(){Wt.prototype.put=e}},gO=function(t){rO(t)};cO();const _O=Object.freeze(Object.defineProperty({__proto__:null,DataSnapshot:Ir,Database:kC,OnDisconnect:vC,QueryConstraint:Qt,TransactionResult:RC,_QueryImpl:Tt,_QueryParams:Pu,_ReferenceImpl:Kt,_TEST_ACCESS_forceRestClient:gO,_TEST_ACCESS_hijackHash:mO,_repoManagerDatabaseFromApp:xC,_setSDKVersion:nw,_validatePathString:zu,_validateWritablePath:rn,child:ai,connectDatabaseEmulator:TC,enableLogging:uO,endAt:ON,endBefore:DN,equalTo:XN,forceLongPolling:sO,forceWebSockets:iO,get:IN,getDatabase:oO,goOffline:lO,goOnline:aO,increment:fO,limitToFirst:UN,limitToLast:jN,off:NN,onChildAdded:TN,onChildChanged:RN,onChildMoved:bN,onChildRemoved:PN,onDisconnect:wN,onValue:wC,orderByChild:BN,orderByKey:VN,orderByPriority:KN,orderByValue:YN,push:CN,query:JN,ref:yC,refFromURL:yN,remove:EN,runTransaction:pO,serverTimestamp:hO,set:Ap,setPriority:SN,setWithPriority:xN,startAfter:FN,startAt:LN,update:kN},Symbol.toStringTag,{value:"Module"})),vO={apiKey:"AIzaSyAmrboSjyDCN8_KVTNFgYn_LQ0OeNqjtkc",authDomain:"agrobimedatos.firebaseapp.com",databaseURL:"https://agrobimedatos-default-rtdb.firebaseio.com",projectId:"agrobimedatos",storageBucket:"agrobimedatos.appspot.com",messagingSenderId:"376110261171",appId:"1:376110261171:web:80d3e641ddc3e36b8de1c6"},yO=E0(vO),rd=SR(yO),wO=_O,CO=()=>{const t=JSON.parse(localStorage.getItem("user"));return{logged:!!t,user:t}},EO=({children:t})=>{const[e,n]=v.exports.useReducer(Vx,{},CO),r=async o=>{const l={type:to.login,payload:o};localStorage.setItem("user",JSON.stringify(o));try{await sT(rd,o.email,o.password),n(l)}catch(a){throw localStorage.removeItem("user"),new Error(a.code)}},i=async()=>{const o={type:to.logout};localStorage.removeItem("user"),await uT(rd),n(o)},s=async o=>{const l={type:to.login,payload:o};localStorage.setItem("user",JSON.stringify(o));try{await oT(rd,o.email,o.password),n(l)}catch(a){throw localStorage.removeItem("user"),new Error(a.code)}};return N(pi.Provider,{value:{...e,register:r,logout:i,login:s},children:t})},bC=()=>{const{user:t}=v.exports.useContext(pi);return Ee(hi,{children:[Ee("h2",{children:["Bienvenido ",N("span",{className:"text-success",children:t==null?void 0:t.email}),"!"]}),N("hr",{})]})};var Dp={exports:{}},pe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp=Symbol.for("react.element"),Mp=Symbol.for("react.portal"),Qu=Symbol.for("react.fragment"),Yu=Symbol.for("react.strict_mode"),qu=Symbol.for("react.profiler"),Xu=Symbol.for("react.provider"),Ju=Symbol.for("react.context"),SO=Symbol.for("react.server_context"),Zu=Symbol.for("react.forward_ref"),ec=Symbol.for("react.suspense"),tc=Symbol.for("react.suspense_list"),nc=Symbol.for("react.memo"),rc=Symbol.for("react.lazy"),xO=Symbol.for("react.offscreen"),PC;PC=Symbol.for("react.module.reference");function Yt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Lp:switch(t=t.type,t){case Qu:case qu:case Yu:case ec:case tc:return t;default:switch(t=t&&t.$$typeof,t){case SO:case Ju:case Zu:case rc:case nc:case Xu:return t;default:return e}}case Mp:return e}}}pe.ContextConsumer=Ju;pe.ContextProvider=Xu;pe.Element=Lp;pe.ForwardRef=Zu;pe.Fragment=Qu;pe.Lazy=rc;pe.Memo=nc;pe.Portal=Mp;pe.Profiler=qu;pe.StrictMode=Yu;pe.Suspense=ec;pe.SuspenseList=tc;pe.isAsyncMode=function(){return!1};pe.isConcurrentMode=function(){return!1};pe.isContextConsumer=function(t){return Yt(t)===Ju};pe.isContextProvider=function(t){return Yt(t)===Xu};pe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Lp};pe.isForwardRef=function(t){return Yt(t)===Zu};pe.isFragment=function(t){return Yt(t)===Qu};pe.isLazy=function(t){return Yt(t)===rc};pe.isMemo=function(t){return Yt(t)===nc};pe.isPortal=function(t){return Yt(t)===Mp};pe.isProfiler=function(t){return Yt(t)===qu};pe.isStrictMode=function(t){return Yt(t)===Yu};pe.isSuspense=function(t){return Yt(t)===ec};pe.isSuspenseList=function(t){return Yt(t)===tc};pe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Qu||t===qu||t===Yu||t===ec||t===tc||t===xO||typeof t=="object"&&t!==null&&(t.$$typeof===rc||t.$$typeof===nc||t.$$typeof===Xu||t.$$typeof===Ju||t.$$typeof===Zu||t.$$typeof===PC||t.getModuleId!==void 0)};pe.typeOf=Yt;(function(t){t.exports=pe})(Dp);function kO(t){function e(b,L,D,U,C){for(var Q=0,A=0,_e=0,se=0,Z,H,Le=0,We=0,re,je=re=Z=0,oe=0,Y=0,Or=0,Me=0,Ar=D.length,zn=Ar-1,wt,B="",Re="",ks="",vi="",Ft;oe<Ar;){if(H=D.charCodeAt(oe),oe===zn&&A+se+_e+Q!==0&&(A!==0&&(H=A===47?10:47),se=_e=Q=0,Ar++,zn++),A+se+_e+Q===0){if(oe===zn&&(0<Y&&(B=B.replace(h,"")),0<B.trim().length)){switch(H){case 32:case 9:case 59:case 13:case 10:break;default:B+=D.charAt(oe)}H=59}switch(H){case 123:for(B=B.trim(),Z=B.charCodeAt(0),re=1,Me=++oe;oe<Ar;){switch(H=D.charCodeAt(oe)){case 123:re++;break;case 125:re--;break;case 47:switch(H=D.charCodeAt(oe+1)){case 42:case 47:e:{for(je=oe+1;je<zn;++je)switch(D.charCodeAt(je)){case 47:if(H===42&&D.charCodeAt(je-1)===42&&oe+2!==je){oe=je+1;break e}break;case 10:if(H===47){oe=je+1;break e}}oe=je}}break;case 91:H++;case 40:H++;case 34:case 39:for(;oe++<zn&&D.charCodeAt(oe)!==H;);}if(re===0)break;oe++}switch(re=D.substring(Me,oe),Z===0&&(Z=(B=B.replace(c,"").trim()).charCodeAt(0)),Z){case 64:switch(0<Y&&(B=B.replace(h,"")),H=B.charCodeAt(1),H){case 100:case 109:case 115:case 45:Y=L;break;default:Y=ot}if(re=e(L,Y,re,H,C+1),Me=re.length,0<O&&(Y=n(ot,B,Or),Ft=l(3,re,Y,L,J,ge,Me,H,C,U),B=Y.join(""),Ft!==void 0&&(Me=(re=Ft.trim()).length)===0&&(H=0,re="")),0<Me)switch(H){case 115:B=B.replace(P,o);case 100:case 109:case 45:re=B+"{"+re+"}";break;case 107:B=B.replace(f,"$1 $2"),re=B+"{"+re+"}",re=Ae===1||Ae===2&&s("@"+re,3)?"@-webkit-"+re+"@"+re:"@"+re;break;default:re=B+re,U===112&&(re=(Re+=re,""))}else re="";break;default:re=e(L,n(L,B,Or),re,U,C+1)}ks+=re,re=Or=Y=je=Z=0,B="",H=D.charCodeAt(++oe);break;case 125:case 59:if(B=(0<Y?B.replace(h,""):B).trim(),1<(Me=B.length))switch(je===0&&(Z=B.charCodeAt(0),Z===45||96<Z&&123>Z)&&(Me=(B=B.replace(" ",":")).length),0<O&&(Ft=l(1,B,L,b,J,ge,Re.length,U,C,U))!==void 0&&(Me=(B=Ft.trim()).length)===0&&(B="\0\0"),Z=B.charCodeAt(0),H=B.charCodeAt(1),Z){case 0:break;case 64:if(H===105||H===99){vi+=B+D.charAt(oe);break}default:B.charCodeAt(Me-1)!==58&&(Re+=i(B,Z,H,B.charCodeAt(2)))}Or=Y=je=Z=0,B="",H=D.charCodeAt(++oe)}}switch(H){case 13:case 10:A===47?A=0:1+Z===0&&U!==107&&0<B.length&&(Y=1,B+="\0"),0<O*j&&l(0,B,L,b,J,ge,Re.length,U,C,U),ge=1,J++;break;case 59:case 125:if(A+se+_e+Q===0){ge++;break}default:switch(ge++,wt=D.charAt(oe),H){case 9:case 32:if(se+Q+A===0)switch(Le){case 44:case 58:case 9:case 32:wt="";break;default:H!==32&&(wt=" ")}break;case 0:wt="\\0";break;case 12:wt="\\f";break;case 11:wt="\\v";break;case 38:se+A+Q===0&&(Y=Or=1,wt="\f"+wt);break;case 108:if(se+A+Q+ze===0&&0<je)switch(oe-je){case 2:Le===112&&D.charCodeAt(oe-3)===58&&(ze=Le);case 8:We===111&&(ze=We)}break;case 58:se+A+Q===0&&(je=oe);break;case 44:A+_e+se+Q===0&&(Y=1,wt+="\r");break;case 34:case 39:A===0&&(se=se===H?0:se===0?H:se);break;case 91:se+A+_e===0&&Q++;break;case 93:se+A+_e===0&&Q--;break;case 41:se+A+Q===0&&_e--;break;case 40:if(se+A+Q===0){if(Z===0)switch(2*Le+3*We){case 533:break;default:Z=1}_e++}break;case 64:A+_e+se+Q+je+re===0&&(re=1);break;case 42:case 47:if(!(0<se+Q+_e))switch(A){case 0:switch(2*H+3*D.charCodeAt(oe+1)){case 235:A=47;break;case 220:Me=oe,A=42}break;case 42:H===47&&Le===42&&Me+2!==oe&&(D.charCodeAt(Me+2)===33&&(Re+=D.substring(Me,oe+1)),wt="",A=0)}}A===0&&(B+=wt)}We=Le,Le=H,oe++}if(Me=Re.length,0<Me){if(Y=L,0<O&&(Ft=l(2,Re,Y,b,J,ge,Me,U,C,U),Ft!==void 0&&(Re=Ft).length===0))return vi+Re+ks;if(Re=Y.join(",")+"{"+Re+"}",Ae*ze!==0){switch(Ae!==2||s(Re,2)||(ze=0),ze){case 111:Re=Re.replace(w,":-moz-$1")+Re;break;case 112:Re=Re.replace(_,"::-webkit-input-$1")+Re.replace(_,"::-moz-$1")+Re.replace(_,":-ms-input-$1")+Re}ze=0}}return vi+Re+ks}function n(b,L,D){var U=L.trim().split(E);L=U;var C=U.length,Q=b.length;switch(Q){case 0:case 1:var A=0;for(b=Q===0?"":b[0]+" ";A<C;++A)L[A]=r(b,L[A],D).trim();break;default:var _e=A=0;for(L=[];A<C;++A)for(var se=0;se<Q;++se)L[_e++]=r(b[se]+" ",U[A],D).trim()}return L}function r(b,L,D){var U=L.charCodeAt(0);switch(33>U&&(U=(L=L.trim()).charCodeAt(0)),U){case 38:return L.replace(p,"$1"+b.trim());case 58:return b.trim()+L.replace(p,"$1"+b.trim());default:if(0<1*D&&0<L.indexOf("\f"))return L.replace(p,(b.charCodeAt(0)===58?"":"$1")+b.trim())}return b+L}function i(b,L,D,U){var C=b+";",Q=2*L+3*D+4*U;if(Q===944){b=C.indexOf(":",9)+1;var A=C.substring(b,C.length-1).trim();return A=C.substring(0,b).trim()+A+";",Ae===1||Ae===2&&s(A,1)?"-webkit-"+A+A:A}if(Ae===0||Ae===2&&!s(C,1))return C;switch(Q){case 1015:return C.charCodeAt(10)===97?"-webkit-"+C+C:C;case 951:return C.charCodeAt(3)===116?"-webkit-"+C+C:C;case 963:return C.charCodeAt(5)===110?"-webkit-"+C+C:C;case 1009:if(C.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+C+C;case 978:return"-webkit-"+C+"-moz-"+C+C;case 1019:case 983:return"-webkit-"+C+"-moz-"+C+"-ms-"+C+C;case 883:if(C.charCodeAt(8)===45)return"-webkit-"+C+C;if(0<C.indexOf("image-set(",11))return C.replace(he,"$1-webkit-$2")+C;break;case 932:if(C.charCodeAt(4)===45)switch(C.charCodeAt(5)){case 103:return"-webkit-box-"+C.replace("-grow","")+"-webkit-"+C+"-ms-"+C.replace("grow","positive")+C;case 115:return"-webkit-"+C+"-ms-"+C.replace("shrink","negative")+C;case 98:return"-webkit-"+C+"-ms-"+C.replace("basis","preferred-size")+C}return"-webkit-"+C+"-ms-"+C+C;case 964:return"-webkit-"+C+"-ms-flex-"+C+C;case 1023:if(C.charCodeAt(8)!==99)break;return A=C.substring(C.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+A+"-webkit-"+C+"-ms-flex-pack"+A+C;case 1005:return g.test(C)?C.replace(m,":-webkit-")+C.replace(m,":-moz-")+C:C;case 1e3:switch(A=C.substring(13).trim(),L=A.indexOf("-")+1,A.charCodeAt(0)+A.charCodeAt(L)){case 226:A=C.replace(S,"tb");break;case 232:A=C.replace(S,"tb-rl");break;case 220:A=C.replace(S,"lr");break;default:return C}return"-webkit-"+C+"-ms-"+A+C;case 1017:if(C.indexOf("sticky",9)===-1)break;case 975:switch(L=(C=b).length-10,A=(C.charCodeAt(L)===33?C.substring(0,L):C).substring(b.indexOf(":",7)+1).trim(),Q=A.charCodeAt(0)+(A.charCodeAt(7)|0)){case 203:if(111>A.charCodeAt(8))break;case 115:C=C.replace(A,"-webkit-"+A)+";"+C;break;case 207:case 102:C=C.replace(A,"-webkit-"+(102<Q?"inline-":"")+"box")+";"+C.replace(A,"-webkit-"+A)+";"+C.replace(A,"-ms-"+A+"box")+";"+C}return C+";";case 938:if(C.charCodeAt(5)===45)switch(C.charCodeAt(6)){case 105:return A=C.replace("-items",""),"-webkit-"+C+"-webkit-box-"+A+"-ms-flex-"+A+C;case 115:return"-webkit-"+C+"-ms-flex-item-"+C.replace(I,"")+C;default:return"-webkit-"+C+"-ms-flex-line-pack"+C.replace("align-content","").replace(I,"")+C}break;case 973:case 989:if(C.charCodeAt(3)!==45||C.charCodeAt(4)===122)break;case 931:case 953:if(F.test(b)===!0)return(A=b.substring(b.indexOf(":")+1)).charCodeAt(0)===115?i(b.replace("stretch","fill-available"),L,D,U).replace(":fill-available",":stretch"):C.replace(A,"-webkit-"+A)+C.replace(A,"-moz-"+A.replace("fill-",""))+C;break;case 962:if(C="-webkit-"+C+(C.charCodeAt(5)===102?"-ms-"+C:"")+C,D+U===211&&C.charCodeAt(13)===105&&0<C.indexOf("transform",10))return C.substring(0,C.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+C}return C}function s(b,L){var D=b.indexOf(L===1?":":"{"),U=b.substring(0,L!==3?D:10);return D=b.substring(D+1,b.length-1),$(L!==2?U:U.replace(K,"$1"),D,L)}function o(b,L){var D=i(L,L.charCodeAt(0),L.charCodeAt(1),L.charCodeAt(2));return D!==L+";"?D.replace(k," or ($1)").substring(4):"("+L+")"}function l(b,L,D,U,C,Q,A,_e,se,Z){for(var H=0,Le=L,We;H<O;++H)switch(We=De[H].call(d,b,Le,D,U,C,Q,A,_e,se,Z)){case void 0:case!1:case!0:case null:break;default:Le=We}if(Le!==L)return Le}function a(b){switch(b){case void 0:case null:O=De.length=0;break;default:if(typeof b=="function")De[O++]=b;else if(typeof b=="object")for(var L=0,D=b.length;L<D;++L)a(b[L]);else j=!!b|0}return a}function u(b){return b=b.prefix,b!==void 0&&($=null,b?typeof b!="function"?Ae=1:(Ae=2,$=b):Ae=0),u}function d(b,L){var D=b;if(33>D.charCodeAt(0)&&(D=D.trim()),ce=D,D=[ce],0<O){var U=l(-1,L,D,D,J,ge,0,0,0,0);U!==void 0&&typeof U=="string"&&(L=U)}var C=e(ot,D,L,0,0);return 0<O&&(U=l(-2,C,D,D,J,ge,C.length,0,0,0),U!==void 0&&(C=U)),ce="",ze=0,ge=J=1,C}var c=/^\0+/g,h=/[\0\r\f]/g,m=/: */g,g=/zoo|gra/,y=/([,: ])(transform)/g,E=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,_=/::(place)/g,w=/:(read-only)/g,S=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,I=/-self|flex-/g,K=/[^]*?(:[rp][el]a[\w-]+)[^]*/,F=/stretch|:\s*\w+\-(?:conte|avail)/,he=/([^-])(image-set\()/,ge=1,J=1,ze=0,Ae=1,ot=[],De=[],O=0,$=null,j=0,ce="";return d.use=a,d.set=u,t!==void 0&&u(t),d}var IO={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function TO(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var RO=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,R_=TO(function(t){return RO.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),NC={exports:{}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nt=typeof Symbol=="function"&&Symbol.for,Fp=nt?Symbol.for("react.element"):60103,$p=nt?Symbol.for("react.portal"):60106,ic=nt?Symbol.for("react.fragment"):60107,sc=nt?Symbol.for("react.strict_mode"):60108,oc=nt?Symbol.for("react.profiler"):60114,lc=nt?Symbol.for("react.provider"):60109,ac=nt?Symbol.for("react.context"):60110,Up=nt?Symbol.for("react.async_mode"):60111,uc=nt?Symbol.for("react.concurrent_mode"):60111,cc=nt?Symbol.for("react.forward_ref"):60112,dc=nt?Symbol.for("react.suspense"):60113,bO=nt?Symbol.for("react.suspense_list"):60120,hc=nt?Symbol.for("react.memo"):60115,fc=nt?Symbol.for("react.lazy"):60116,PO=nt?Symbol.for("react.block"):60121,NO=nt?Symbol.for("react.fundamental"):60117,OO=nt?Symbol.for("react.responder"):60118,AO=nt?Symbol.for("react.scope"):60119;function Mt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Fp:switch(t=t.type,t){case Up:case uc:case ic:case oc:case sc:case dc:return t;default:switch(t=t&&t.$$typeof,t){case ac:case cc:case fc:case hc:case lc:return t;default:return e}}case $p:return e}}}function OC(t){return Mt(t)===uc}me.AsyncMode=Up;me.ConcurrentMode=uc;me.ContextConsumer=ac;me.ContextProvider=lc;me.Element=Fp;me.ForwardRef=cc;me.Fragment=ic;me.Lazy=fc;me.Memo=hc;me.Portal=$p;me.Profiler=oc;me.StrictMode=sc;me.Suspense=dc;me.isAsyncMode=function(t){return OC(t)||Mt(t)===Up};me.isConcurrentMode=OC;me.isContextConsumer=function(t){return Mt(t)===ac};me.isContextProvider=function(t){return Mt(t)===lc};me.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fp};me.isForwardRef=function(t){return Mt(t)===cc};me.isFragment=function(t){return Mt(t)===ic};me.isLazy=function(t){return Mt(t)===fc};me.isMemo=function(t){return Mt(t)===hc};me.isPortal=function(t){return Mt(t)===$p};me.isProfiler=function(t){return Mt(t)===oc};me.isStrictMode=function(t){return Mt(t)===sc};me.isSuspense=function(t){return Mt(t)===dc};me.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ic||t===uc||t===oc||t===sc||t===dc||t===bO||typeof t=="object"&&t!==null&&(t.$$typeof===fc||t.$$typeof===hc||t.$$typeof===lc||t.$$typeof===ac||t.$$typeof===cc||t.$$typeof===NO||t.$$typeof===OO||t.$$typeof===AO||t.$$typeof===PO)};me.typeOf=Mt;(function(t){t.exports=me})(NC);var zp=NC.exports,DO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},LO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},MO={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},AC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jp={};jp[zp.ForwardRef]=MO;jp[zp.Memo]=AC;function b_(t){return zp.isMemo(t)?AC:jp[t.$$typeof]||DO}var FO=Object.defineProperty,$O=Object.getOwnPropertyNames,P_=Object.getOwnPropertySymbols,UO=Object.getOwnPropertyDescriptor,zO=Object.getPrototypeOf,N_=Object.prototype;function DC(t,e,n){if(typeof e!="string"){if(N_){var r=zO(e);r&&r!==N_&&DC(t,r,n)}var i=$O(e);P_&&(i=i.concat(P_(e)));for(var s=b_(t),o=b_(e),l=0;l<i.length;++l){var a=i[l];if(!LO[a]&&!(n&&n[a])&&!(o&&o[a])&&!(s&&s[a])){var u=UO(e,a);try{FO(t,a,u)}catch{}}}}return t}var jO=DC;function gn(){return(gn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var O_=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},Oh=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Dp.exports.typeOf(t)},Za=Object.freeze([]),vr=Object.freeze({});function ls(t){return typeof t=="function"}function A_(t){return t.displayName||t.name||"Component"}function Hp(t){return t&&typeof t.styledComponentId=="string"}var as=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Bp=typeof window<"u"&&"HTMLElement"in window,HO=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function ui(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var BO=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&ui(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var l=s;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(n+1),u=0,d=r.length;u<d;u++)this.tag.insertRule(a,r[u])&&(this.groupSizes[n]++,a++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,l=s;l<o;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},t}(),ea=new Map,eu=new Map,lo=1,Dl=function(t){if(ea.has(t))return ea.get(t);for(;eu.has(lo);)lo++;var e=lo++;return ea.set(t,e),eu.set(e,t),e},WO=function(t){return eu.get(t)},VO=function(t,e){e>=lo&&(lo=e+1),ea.set(t,e),eu.set(e,t)},GO="style["+as+'][data-styled-version="5.3.6"]',KO=new RegExp("^"+as+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),QO=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},YO=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var l=o.match(KO);if(l){var a=0|parseInt(l[1],10),u=l[2];a!==0&&(VO(u,a),QO(t,u,l[3]),t.getTag().insertRules(a,r)),r.length=0}else r.push(o)}}},qO=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},LC=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){for(var a=l.childNodes,u=a.length;u>=0;u--){var d=a[u];if(d&&d.nodeType===1&&d.hasAttribute(as))return d}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(as,"active"),r.setAttribute("data-styled-version","5.3.6");var o=qO();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},XO=function(){function t(n){var r=this.element=LC(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,l=s.length;o<l;o++){var a=s[o];if(a.ownerNode===i)return a}ui(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),JO=function(){function t(n){var r=this.element=LC(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),ZO=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),D_=Bp,eA={isServer:!Bp,useCSSOMInjection:!HO},MC=function(){function t(n,r,i){n===void 0&&(n=vr),r===void 0&&(r={}),this.options=gn({},eA,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Bp&&D_&&(D_=!1,function(s){for(var o=document.querySelectorAll(GO),l=0,a=o.length;l<a;l++){var u=o[l];u&&u.getAttribute(as)!=="active"&&(YO(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Dl(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(gn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new ZO(o):s?new XO(o):new JO(o),new BO(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Dl(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Dl(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Dl(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var l=WO(o);if(l!==void 0){var a=n.names.get(l),u=r.getGroup(o);if(a&&u&&a.size){var d=as+".g"+o+'[id="'+l+'"]',c="";a!==void 0&&a.forEach(function(h){h.length>0&&(c+=h+",")}),s+=""+u+d+'{content:"'+c+`"}/*!sc*/
`}}}return s}(this)},t}(),tA=/(a)(d)/gi,L_=function(t){return String.fromCharCode(t+(t>25?39:97))};function Ah(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=L_(e%52)+n;return(L_(e%52)+n).replace(tA,"$1-$2")}var Mi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},FC=function(t){return Mi(5381,t)};function nA(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ls(n)&&!Hp(n))return!1}return!0}var rA=FC("5.3.6"),iA=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&nA(e),this.componentId=n,this.baseHash=Mi(rA,n),this.baseStyle=r,MC.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=us(this.rules,e,n,r).join(""),l=Ah(Mi(this.baseHash,o)>>>0);if(!n.hasNameForId(i,l)){var a=r(o,"."+l,void 0,i);n.insertRules(i,l,a)}s.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,d=Mi(this.baseHash,r.hash),c="",h=0;h<u;h++){var m=this.rules[h];if(typeof m=="string")c+=m;else if(m){var g=us(m,e,n,r),y=Array.isArray(g)?g.join(""):g;d=Mi(d,y+h),c+=y}}if(c){var E=Ah(d>>>0);if(!n.hasNameForId(i,E)){var p=r(c,"."+E,void 0,i);n.insertRules(i,E,p)}s.push(E)}}return s.join(" ")},t}(),sA=/^\s*\/\/.*$/gm,oA=[":","[",".","#"];function lA(t){var e,n,r,i,s=t===void 0?vr:t,o=s.options,l=o===void 0?vr:o,a=s.plugins,u=a===void 0?Za:a,d=new kO(l),c=[],h=function(y){function E(p){if(p)try{y(p+"}")}catch{}}return function(p,f,_,w,S,P,k,I,K,F){switch(p){case 1:if(K===0&&f.charCodeAt(0)===64)return y(f+";"),"";break;case 2:if(I===0)return f+"/*|*/";break;case 3:switch(I){case 102:case 112:return y(_[0]+f),"";default:return f+(F===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(E)}}}(function(y){c.push(y)}),m=function(y,E,p){return E===0&&oA.indexOf(p[n.length])!==-1||p.match(i)?y:"."+e};function g(y,E,p,f){f===void 0&&(f="&");var _=y.replace(sA,""),w=E&&p?p+" "+E+" { "+_+" }":_;return e=f,n=E,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(p||!E?"":E,w)}return d.use([].concat(u,[function(y,E,p){y===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,m))},h,function(y){if(y===-2){var E=c;return c=[],E}}])),g.hash=u.length?u.reduce(function(y,E){return E.name||ui(15),Mi(y,E.name)},5381).toString():"",g}var $C=ee.createContext();$C.Consumer;var UC=ee.createContext(),aA=(UC.Consumer,new MC),Dh=lA();function uA(){return v.exports.useContext($C)||aA}function cA(){return v.exports.useContext(UC)||Dh}var dA=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Dh);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return ui(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Dh),this.name+e.hash},t}(),hA=/([A-Z])/,fA=/([A-Z])/g,pA=/^ms-/,mA=function(t){return"-"+t.toLowerCase()};function M_(t){return hA.test(t)?t.replace(fA,mA).replace(pA,"-ms-"):t}var F_=function(t){return t==null||t===!1||t===""};function us(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,l=t.length;o<l;o+=1)(i=us(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(F_(t))return"";if(Hp(t))return"."+t.styledComponentId;if(ls(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var a=t(e);return us(a,e,n,r)}var u;return t instanceof dA?n?(t.inject(n,r),t.getName(r)):t:Oh(t)?function d(c,h){var m,g,y=[];for(var E in c)c.hasOwnProperty(E)&&!F_(c[E])&&(Array.isArray(c[E])&&c[E].isCss||ls(c[E])?y.push(M_(E)+":",c[E],";"):Oh(c[E])?y.push.apply(y,d(c[E],E)):y.push(M_(E)+": "+(m=E,(g=c[E])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||m in IO?String(g).trim():g+"px")+";"));return h?[h+" {"].concat(y,["}"]):y}(t):t.toString()}var $_=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function Ye(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return ls(t)||Oh(t)?$_(us(O_(Za,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:$_(us(O_(t,n)))}var gA=function(t,e,n){return n===void 0&&(n=vr),t.theme!==n.theme&&t.theme||e||n.theme},_A=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,vA=/(^-|-$)/g;function id(t){return t.replace(_A,"-").replace(vA,"")}var yA=function(t){return Ah(FC(t)>>>0)};function Ll(t){return typeof t=="string"&&!0}var Lh=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},wA=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function CA(t,e,n){var r=t[n];Lh(e)&&Lh(r)?zC(r,e):t[n]=e}function zC(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Lh(o))for(var l in o)wA(l)&&CA(t,o[l],l)}return t}var tu=ee.createContext();tu.Consumer;function EA(t){var e=v.exports.useContext(tu),n=v.exports.useMemo(function(){return function(r,i){if(!r)return ui(14);if(ls(r)){var s=r(i);return s}return Array.isArray(r)||typeof r!="object"?ui(8):i?gn({},i,{},r):r}(t.theme,e)},[t.theme,e]);return t.children?ee.createElement(tu.Provider,{value:n},t.children):null}var sd={};function jC(t,e,n){var r=Hp(t),i=!Ll(t),s=e.attrs,o=s===void 0?Za:s,l=e.componentId,a=l===void 0?function(f,_){var w=typeof f!="string"?"sc":id(f);sd[w]=(sd[w]||0)+1;var S=w+"-"+yA("5.3.6"+w+sd[w]);return _?_+"-"+S:S}(e.displayName,e.parentComponentId):l,u=e.displayName,d=u===void 0?function(f){return Ll(f)?"styled."+f:"Styled("+A_(f)+")"}(t):u,c=e.displayName&&e.componentId?id(e.displayName)+"-"+e.componentId:e.componentId||a,h=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,m=e.shouldForwardProp;r&&t.shouldForwardProp&&(m=e.shouldForwardProp?function(f,_,w){return t.shouldForwardProp(f,_,w)&&e.shouldForwardProp(f,_,w)}:t.shouldForwardProp);var g,y=new iA(n,c,r?t.componentStyle:void 0),E=y.isStatic&&o.length===0,p=function(f,_){return function(w,S,P,k){var I=w.attrs,K=w.componentStyle,F=w.defaultProps,he=w.foldedComponentIds,ge=w.shouldForwardProp,J=w.styledComponentId,ze=w.target,Ae=function(U,C,Q){U===void 0&&(U=vr);var A=gn({},C,{theme:U}),_e={};return Q.forEach(function(se){var Z,H,Le,We=se;for(Z in ls(We)&&(We=We(A)),We)A[Z]=_e[Z]=Z==="className"?(H=_e[Z],Le=We[Z],H&&Le?H+" "+Le:H||Le):We[Z]}),[A,_e]}(gA(S,v.exports.useContext(tu),F)||vr,S,I),ot=Ae[0],De=Ae[1],O=function(U,C,Q,A){var _e=uA(),se=cA(),Z=C?U.generateAndInjectStyles(vr,_e,se):U.generateAndInjectStyles(Q,_e,se);return Z}(K,k,ot),$=P,j=De.$as||S.$as||De.as||S.as||ze,ce=Ll(j),b=De!==S?gn({},S,{},De):S,L={};for(var D in b)D[0]!=="$"&&D!=="as"&&(D==="forwardedAs"?L.as=b[D]:(ge?ge(D,R_,j):!ce||R_(D))&&(L[D]=b[D]));return S.style&&De.style!==S.style&&(L.style=gn({},S.style,{},De.style)),L.className=Array.prototype.concat(he,J,O!==J?O:null,S.className,De.className).filter(Boolean).join(" "),L.ref=$,v.exports.createElement(j,L)}(g,f,_,E)};return p.displayName=d,(g=ee.forwardRef(p)).attrs=h,g.componentStyle=y,g.displayName=d,g.shouldForwardProp=m,g.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Za,g.styledComponentId=c,g.target=r?t.target:t,g.withComponent=function(f){var _=e.componentId,w=function(P,k){if(P==null)return{};var I,K,F={},he=Object.keys(P);for(K=0;K<he.length;K++)I=he[K],k.indexOf(I)>=0||(F[I]=P[I]);return F}(e,["componentId"]),S=_&&_+"-"+(Ll(f)?f:id(A_(f)));return jC(f,gn({},w,{attrs:h,componentId:S}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?zC({},t.defaultProps,f):f}}),g.toString=function(){return"."+g.styledComponentId},i&&jO(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var Mh=function(t){return function e(n,r,i){if(i===void 0&&(i=vr),!Dp.exports.isValidElementType(r))return ui(1,String(r));var s=function(){return n(r,i,Ye.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,gn({},i,{},o))},s.attrs=function(o){return e(n,r,gn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(jC,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Mh[t]=Mh(t)});const ne=Mh;var yr;function cs(t,e){return t[e]}function Fh(t,e){return e.split(".").reduce((n,r)=>{const i=r.match(/[^\]\\[.]+/g);if(i&&i.length>1)for(let s=0;s<i.length;s++)return n[i[s]][i[s+1]];return n[r]},t)}function SA(t=[],e,n=0){return[...t.slice(0,n),e,...t.slice(n)]}function xA(t=[],e,n="id"){const r=t.slice(),i=cs(e,n);return i?r.splice(r.findIndex(s=>cs(s,n)===i),1):r.splice(r.findIndex(s=>s===e),1),r}function U_(t){return t.map((e,n)=>{const r=Object.assign(Object.assign({},e),{sortable:e.sortable||!!e.sortFunction||void 0});return e.id||(r.id=n+1),r})}function ao(t,e){return Math.ceil(t/e)}function od(t,e){return Math.min(t,e)}(function(t){t.ASC="asc",t.DESC="desc"})(yr||(yr={}));const Ve=()=>null;function HC(t,e=[],n=[]){let r={},i=[...n];return e.length&&e.forEach(s=>{if(!s.when||typeof s.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');s.when(t)&&(r=s.style||{},s.classNames&&(i=[...i,...s.classNames]),typeof s.style=="function"&&(r=s.style(t)||{}))}),{style:r,classNames:i.join(" ")}}function ta(t,e=[],n="id"){const r=cs(t,n);return r?e.some(i=>cs(i,n)===r):e.some(i=>i===t)}function Ml(t,e){return e?t.findIndex(n=>uo(n.id,e)):-1}function uo(t,e){return t==e}function kA(t,e){const n=!t.toggleOnSelectedRowsChange;switch(e.type){case"SELECT_ALL_ROWS":{const{keyField:r,rows:i,rowCount:s,mergeSelections:o}=e,l=!t.allSelected,a=!t.toggleOnSelectedRowsChange;if(o){const u=l?[...t.selectedRows,...i.filter(d=>!ta(d,t.selectedRows,r))]:t.selectedRows.filter(d=>!ta(d,i,r));return Object.assign(Object.assign({},t),{allSelected:l,selectedCount:u.length,selectedRows:u,toggleOnSelectedRowsChange:a})}return Object.assign(Object.assign({},t),{allSelected:l,selectedCount:l?s:0,selectedRows:l?i:[],toggleOnSelectedRowsChange:a})}case"SELECT_SINGLE_ROW":{const{keyField:r,row:i,isSelected:s,rowCount:o,singleSelect:l}=e;return l?s?Object.assign(Object.assign({},t),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},t),{selectedCount:1,allSelected:!1,selectedRows:[i],toggleOnSelectedRowsChange:n}):s?Object.assign(Object.assign({},t),{selectedCount:t.selectedRows.length>0?t.selectedRows.length-1:0,allSelected:!1,selectedRows:xA(t.selectedRows,i,r),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},t),{selectedCount:t.selectedRows.length+1,allSelected:t.selectedRows.length+1===o,selectedRows:SA(t.selectedRows,i),toggleOnSelectedRowsChange:n})}case"SELECT_MULTIPLE_ROWS":{const{keyField:r,selectedRows:i,totalRows:s,mergeSelections:o}=e;if(o){const l=[...t.selectedRows,...i.filter(a=>!ta(a,t.selectedRows,r))];return Object.assign(Object.assign({},t),{selectedCount:l.length,allSelected:!1,selectedRows:l,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},t),{selectedCount:i.length,allSelected:i.length===s,selectedRows:i,toggleOnSelectedRowsChange:n})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:r}=e;return Object.assign(Object.assign({},t),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:r})}case"SORT_CHANGE":{const{sortDirection:r,selectedColumn:i,clearSelectedOnSort:s}=e;return Object.assign(Object.assign(Object.assign({},t),{selectedColumn:i,sortDirection:r,currentPage:1}),s&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:r,paginationServer:i,visibleOnly:s,persistSelectedOnPageChange:o}=e,l=i&&o,a=i&&!o||s;return Object.assign(Object.assign(Object.assign(Object.assign({},t),{currentPage:r}),l&&{allSelected:!1}),a&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:r,page:i}=e;return Object.assign(Object.assign({},t),{currentPage:i,rowsPerPage:r})}}}const IA=Ye`
	pointer-events: none;
	opacity: 0.4;
`,TA=ne.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:t})=>t&&IA};
	${({theme:t})=>t.table.style};
`,RA=Ye`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,bA=ne.div`
	display: flex;
	width: 100%;
	${({fixedHeader:t})=>t&&RA};
	${({theme:t})=>t.head.style};
`,PA=ne.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:t})=>t.headRow.style};
	${({dense:t,theme:e})=>t&&e.headRow.denseStyle};
`,BC=(t,...e)=>Ye`
		@media screen and (max-width: ${599}px) {
			${Ye(t,...e)}
		}
	`,NA=(t,...e)=>Ye`
		@media screen and (max-width: ${959}px) {
			${Ye(t,...e)}
		}
	`,OA=(t,...e)=>Ye`
		@media screen and (max-width: ${1280}px) {
			${Ye(t,...e)}
		}
	`,AA=t=>(e,...n)=>Ye`
				@media screen and (max-width: ${t}px) {
					${Ye(e,...n)}
				}
			`,xs=ne.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:t,headCell:e})=>t[e?"headCells":"cells"].style};
	${({noPadding:t})=>t&&"padding: 0"};
`,WC=ne(xs)`
	flex-grow: ${({button:t,grow:e})=>e===0||t?0:e||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:t})=>t||"100%"};
	min-width: ${({minWidth:t})=>t||"100px"};
	${({width:t})=>t&&Ye`
			min-width: ${t};
			max-width: ${t};
		`};
	${({right:t})=>t&&"justify-content: flex-end"};
	${({button:t,center:e})=>(e||t)&&"justify-content: center"};
	${({compact:t,button:e})=>(t||e)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:t})=>t&&t==="sm"&&BC`
    display: none;
  `};
	${({hide:t})=>t&&t==="md"&&NA`
    display: none;
  `};
	${({hide:t})=>t&&t==="lg"&&OA`
    display: none;
  `};
	${({hide:t})=>t&&Number.isInteger(t)&&AA(t)`
    display: none;
  `};
`,DA=Ye`
	div:first-child {
		white-space: ${({wrapCell:t})=>t?"normal":"nowrap"};
		overflow: ${({allowOverflow:t})=>t?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,LA=ne(WC).attrs(t=>({style:t.style}))`
	${({renderAsCell:t})=>!t&&DA};
	${({theme:t,isDragging:e})=>e&&t.cells.draggingStyle};
	${({cellStyle:t})=>t};
`;var MA=v.exports.memo(function({id:t,column:e,row:n,rowIndex:r,dataTag:i,isDragging:s,onDragStart:o,onDragOver:l,onDragEnd:a,onDragEnter:u,onDragLeave:d}){const{style:c,classNames:h}=HC(n,e.conditionalCellStyles,["rdt_TableCell"]);return v.exports.createElement(LA,{id:t,"data-column-id":e.id,role:"cell",className:h,"data-tag":i,cellStyle:e.style,renderAsCell:!!e.cell,allowOverflow:e.allowOverflow,button:e.button,center:e.center,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,width:e.width,wrapCell:e.wrap,style:c,isDragging:s,onDragStart:o,onDragOver:l,onDragEnd:a,onDragEnter:u,onDragLeave:d},!e.cell&&v.exports.createElement("div",{"data-tag":i},function(m,g,y,E){if(!g)return null;if(typeof g!="string"&&typeof g!="function")throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return y&&typeof y=="function"?y(m,E):g&&typeof g=="function"?g(m,E):Fh(m,g)}(n,e.selector,e.format,r)),e.cell&&e.cell(n,r,e,t))}),VC=v.exports.memo(function({name:t,component:e="input",componentOptions:n={style:{}},indeterminate:r=!1,checked:i=!1,disabled:s=!1,onClick:o=Ve}){const l=e,a=l!=="input"?n.style:(d=>Object.assign(Object.assign({fontSize:"18px"},!d&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(s),u=v.exports.useMemo(()=>function(d,...c){let h;return Object.keys(d).map(m=>d[m]).forEach((m,g)=>{typeof m=="function"&&(h=Object.assign(Object.assign({},d),{[Object.keys(d)[g]]:m(...c)}))}),h||d}(n,r),[n,r]);return v.exports.createElement(l,Object.assign({type:"checkbox",ref:d=>{d&&(d.indeterminate=r)},style:a,onClick:s?Ve:o,name:t,"aria-label":t,checked:i,disabled:s},u,{onChange:Ve}))});const FA=ne(xs)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function $A({name:t,keyField:e,row:n,rowCount:r,selected:i,selectableRowsComponent:s,selectableRowsComponentProps:o,selectableRowsSingle:l,selectableRowDisabled:a,onSelectedRow:u}){const d=!(!a||!a(n));return v.exports.createElement(FA,{onClick:c=>c.stopPropagation(),className:"rdt_TableCell",noPadding:!0},v.exports.createElement(VC,{name:t,component:s,componentOptions:o,checked:i,"aria-checked":i,onClick:()=>{u({type:"SELECT_SINGLE_ROW",row:n,isSelected:i,keyField:e,rowCount:r,singleSelect:l})},disabled:d}))}const UA=ne.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:t})=>t.expanderButton.style};
`;function zA({disabled:t=!1,expanded:e=!1,expandableIcon:n,id:r,row:i,onToggled:s}){const o=e?n.expanded:n.collapsed;return v.exports.createElement(UA,{"aria-disabled":t,onClick:()=>s&&s(i),"data-testid":`expander-button-${r}`,disabled:t,"aria-label":e?"Collapse Row":"Expand Row",role:"button",type:"button"},o)}const jA=ne(xs)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:t})=>t.expanderCell.style};
`;function HA({row:t,expanded:e=!1,expandableIcon:n,id:r,onToggled:i,disabled:s=!1}){return v.exports.createElement(jA,{onClick:o=>o.stopPropagation(),noPadding:!0},v.exports.createElement(zA,{id:r,row:t,expanded:e,expandableIcon:n,disabled:s,onToggled:i}))}const BA=ne.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:t})=>t.expanderRow.style};
	${({extendedRowStyle:t})=>t};
`;var WA=v.exports.memo(function({data:t,ExpanderComponent:e,expanderComponentProps:n,extendedRowStyle:r,extendedClassNames:i}){const s=["rdt_ExpanderRow",...i.split(" ").filter(o=>o!=="rdt_TableRow")].join(" ");return v.exports.createElement(BA,{className:s,extendedRowStyle:r},v.exports.createElement(e,Object.assign({data:t},n)))}),nu,$h,z_;(function(t){t.LTR="ltr",t.RTL="rtl",t.AUTO="auto"})(nu||(nu={})),function(t){t.LEFT="left",t.RIGHT="right",t.CENTER="center"}($h||($h={})),function(t){t.SM="sm",t.MD="md",t.LG="lg"}(z_||(z_={}));const VA=Ye`
	&:hover {
		${({highlightOnHover:t,theme:e})=>t&&e.rows.highlightOnHoverStyle};
	}
`,GA=Ye`
	&:hover {
		cursor: pointer;
	}
`,KA=ne.div.attrs(t=>({style:t.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:t})=>t.rows.style};
	${({dense:t,theme:e})=>t&&e.rows.denseStyle};
	${({striped:t,theme:e})=>t&&e.rows.stripedStyle};
	${({highlightOnHover:t})=>t&&VA};
	${({pointerOnHover:t})=>t&&GA};
	${({selected:t,theme:e})=>t&&e.rows.selectedHighlightStyle};
`;function QA({columns:t=[],conditionalRowStyles:e=[],defaultExpanded:n=!1,defaultExpanderDisabled:r=!1,dense:i=!1,expandableIcon:s,expandableRows:o=!1,expandableRowsComponent:l,expandableRowsComponentProps:a,expandableRowsHideExpander:u,expandOnRowClicked:d=!1,expandOnRowDoubleClicked:c=!1,highlightOnHover:h=!1,id:m,expandableInheritConditionalStyles:g,keyField:y,onRowClicked:E=Ve,onRowDoubleClicked:p=Ve,onRowMouseEnter:f=Ve,onRowMouseLeave:_=Ve,onRowExpandToggled:w=Ve,onSelectedRow:S=Ve,pointerOnHover:P=!1,row:k,rowCount:I,rowIndex:K,selectableRowDisabled:F=null,selectableRows:he=!1,selectableRowsComponent:ge,selectableRowsComponentProps:J,selectableRowsHighlight:ze=!1,selectableRowsSingle:Ae=!1,selected:ot,striped:De=!1,draggingColumnId:O,onDragStart:$,onDragOver:j,onDragEnd:ce,onDragEnter:b,onDragLeave:L}){const[D,U]=v.exports.useState(n);v.exports.useEffect(()=>{U(n)},[n]);const C=v.exports.useCallback(()=>{U(!D),w(!D,k)},[D,w,k]),Q=P||o&&(d||c),A=v.exports.useCallback(Y=>{Y.target&&Y.target.getAttribute("data-tag")==="allowRowEvents"&&(E(k,Y),!r&&o&&d&&C())},[r,d,o,C,E,k]),_e=v.exports.useCallback(Y=>{Y.target&&Y.target.getAttribute("data-tag")==="allowRowEvents"&&(p(k,Y),!r&&o&&c&&C())},[r,c,o,C,p,k]),se=v.exports.useCallback(Y=>{f(k,Y)},[f,k]),Z=v.exports.useCallback(Y=>{_(k,Y)},[_,k]),H=cs(k,y),{style:Le,classNames:We}=HC(k,e,["rdt_TableRow"]),re=ze&&ot,je=g?Le:{},oe=De&&K%2==0;return v.exports.createElement(v.exports.Fragment,null,v.exports.createElement(KA,{id:`row-${m}`,role:"row",striped:oe,highlightOnHover:h,pointerOnHover:!r&&Q,dense:i,onClick:A,onDoubleClick:_e,onMouseEnter:se,onMouseLeave:Z,className:We,selected:re,style:Le},he&&v.exports.createElement($A,{name:`select-row-${H}`,keyField:y,row:k,rowCount:I,selected:ot,selectableRowsComponent:ge,selectableRowsComponentProps:J,selectableRowDisabled:F,selectableRowsSingle:Ae,onSelectedRow:S}),o&&!u&&v.exports.createElement(HA,{id:H,expandableIcon:s,expanded:D,row:k,onToggled:C,disabled:r}),t.map(Y=>Y.omit?null:v.exports.createElement(MA,{id:`cell-${Y.id}-${H}`,key:`cell-${Y.id}-${H}`,dataTag:Y.ignoreRowClick||Y.button?null:"allowRowEvents",column:Y,row:k,rowIndex:K,isDragging:uo(O,Y.id),onDragStart:$,onDragOver:j,onDragEnd:ce,onDragEnter:b,onDragLeave:L}))),o&&D&&v.exports.createElement(WA,{key:`expander-${H}`,data:k,extendedRowStyle:je,extendedClassNames:We,ExpanderComponent:l,expanderComponentProps:a}))}const YA=ne.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:t})=>t?"opacity: 1":"opacity: 0"};
	${({sortDirection:t})=>t==="desc"&&"transform: rotate(180deg)"};
`,qA=({sortActive:t,sortDirection:e})=>ee.createElement(YA,{sortActive:t,sortDirection:e},"\u25B2"),XA=ne(WC)`
	${({button:t})=>t&&"text-align: center"};
	${({theme:t,isDragging:e})=>e&&t.headCells.draggingStyle};
`,JA=Ye`
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

	${({sortActive:t})=>!t&&Ye`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,ZA=ne.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:t})=>!t&&JA};
`,eD=ne.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var tD=v.exports.memo(function({column:t,disabled:e,draggingColumnId:n,selectedColumn:r={},sortDirection:i,sortIcon:s,sortServer:o,pagination:l,paginationServer:a,persistSelectedOnSort:u,selectableRowsVisibleOnly:d,onSort:c,onDragStart:h,onDragOver:m,onDragEnd:g,onDragEnter:y,onDragLeave:E}){v.exports.useEffect(()=>{typeof t.selector=="string"&&console.error(`Warning: ${t.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[p,f]=v.exports.useState(!1),_=v.exports.useRef(null);if(v.exports.useEffect(()=>{_.current&&f(_.current.scrollWidth>_.current.clientWidth)},[p]),t.omit)return null;const w=()=>{if(!t.sortable&&!t.selector)return;let J=i;uo(r.id,t.id)&&(J=i===yr.ASC?yr.DESC:yr.ASC),c({type:"SORT_CHANGE",sortDirection:J,selectedColumn:t,clearSelectedOnSort:l&&a&&!u||o||d})},S=J=>v.exports.createElement(qA,{sortActive:J,sortDirection:i}),P=()=>v.exports.createElement("span",{className:[i,"__rdt_custom_sort_icon__"].join(" ")},s),k=!(!t.sortable||!uo(r.id,t.id)),I=!t.sortable||e,K=t.sortable&&!s&&!t.right,F=t.sortable&&!s&&t.right,he=t.sortable&&s&&!t.right,ge=t.sortable&&s&&t.right;return v.exports.createElement(XA,{"data-column-id":t.id,className:"rdt_TableCol",headCell:!0,allowOverflow:t.allowOverflow,button:t.button,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,center:t.center,width:t.width,draggable:t.reorder,isDragging:uo(t.id,n),onDragStart:h,onDragOver:m,onDragEnd:g,onDragEnter:y,onDragLeave:E},t.name&&v.exports.createElement(ZA,{"data-column-id":t.id,"data-sort-id":t.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:I?void 0:w,onKeyPress:I?void 0:J=>{J.key==="Enter"&&w()},sortActive:!I&&k,disabled:I},!I&&ge&&P(),!I&&F&&S(k),typeof t.name=="string"?v.exports.createElement(eD,{title:p?t.name:void 0,ref:_,"data-column-id":t.id},t.name):t.name,!I&&he&&P(),!I&&K&&S(k)))});const nD=ne(xs)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function rD({headCell:t=!0,rowData:e,keyField:n,allSelected:r,mergeSelections:i,selectedRows:s,selectableRowsComponent:o,selectableRowsComponentProps:l,selectableRowDisabled:a,onSelectAllRows:u}){const d=s.length>0&&!r,c=a?e.filter(g=>!a(g)):e,h=c.length===0,m=Math.min(e.length,c.length);return v.exports.createElement(nD,{className:"rdt_TableCol",headCell:t,noPadding:!0},v.exports.createElement(VC,{name:"select-all-rows",component:o,componentOptions:l,onClick:()=>{u({type:"SELECT_ALL_ROWS",rows:c,rowCount:m,mergeSelections:i,keyField:n})},checked:r,indeterminate:d,disabled:h}))}function GC(t=nu.AUTO){const e=typeof window=="object",[n,r]=v.exports.useState(!1);return v.exports.useEffect(()=>{if(e)if(t!=="auto")r(t==="rtl");else{const i=!(!window.document||!window.document.createElement),s=document.getElementsByTagName("BODY")[0],o=document.getElementsByTagName("HTML")[0],l=s.dir==="rtl"||o.dir==="rtl";r(i&&l)}},[t,e]),n}const iD=ne.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:t})=>t.contextMenu.fontColor};
	font-size: ${({theme:t})=>t.contextMenu.fontSize};
	font-weight: 400;
`,sD=ne.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,j_=ne.div`
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
`;function oD({contextMessage:t,contextActions:e,contextComponent:n,selectedCount:r,direction:i}){const s=GC(i),o=r>0;return n?v.exports.createElement(j_,{visible:o},v.exports.cloneElement(n,{selectedCount:r})):v.exports.createElement(j_,{visible:o,rtl:s},v.exports.createElement(iD,null,((l,a,u)=>{if(a===0)return null;const d=a===1?l.singular:l.plural;return u?`${a} ${l.message||""} ${d}`:`${a} ${d} ${l.message||""}`})(t,r,s)),v.exports.createElement(sD,null,e))}const lD=ne.div`
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
`,aD=ne.div`
	flex: 1 0 auto;
	color: ${({theme:t})=>t.header.fontColor};
	font-size: ${({theme:t})=>t.header.fontSize};
	font-weight: 400;
`,uD=ne.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,cD=({title:t,actions:e=null,contextMessage:n,contextActions:r,contextComponent:i,selectedCount:s,direction:o,showMenu:l=!0})=>v.exports.createElement(lD,{className:"rdt_TableHeader",role:"heading","aria-level":1},v.exports.createElement(aD,null,t),e&&v.exports.createElement(uD,null,e),l&&v.exports.createElement(oD,{contextMessage:n,contextActions:r,contextComponent:i,direction:o,selectedCount:s}));function KC(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}const dD={left:"flex-start",right:"flex-end",center:"center"},hD=ne.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:t})=>dD[t]};
	flex-wrap: ${({wrapContent:t})=>t?"wrap":"nowrap"};
	${({theme:t})=>t.subHeader.style}
`,fD=t=>{var{align:e="right",wrapContent:n=!0}=t,r=KC(t,["align","wrapContent"]);return v.exports.createElement(hD,Object.assign({align:e,wrapContent:n},r))},pD=ne.div`
	display: flex;
	flex-direction: column;
`,mD=ne.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({responsive:t,fixedHeader:e})=>t&&Ye`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${e?"auto":"hidden"};
			min-height: 0;
		`};

	${({fixedHeader:t=!1,fixedHeaderScrollHeight:e="100vh"})=>t&&Ye`
			max-height: ${e};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:t})=>t.responsiveWrapper.style};
`,H_=ne.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${t=>t.theme.progress.style};
`,gD=ne.div`
	position: relative;
	width: 100%;
	${({theme:t})=>t.tableWrapper.style};
`,_D=ne(xs)`
	white-space: nowrap;
	${({theme:t})=>t.expanderCell.style};
`,vD=ne.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:t})=>t.noData.style};
`,yD=()=>ee.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},ee.createElement("path",{d:"M7 10l5 5 5-5z"}),ee.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),wD=ne.select`
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
`,CD=ne.div`
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
`,ED=t=>{var{defaultValue:e,onChange:n}=t,r=KC(t,["defaultValue","onChange"]);return v.exports.createElement(CD,null,v.exports.createElement(wD,Object.assign({onChange:n,defaultValue:e},r)),v.exports.createElement(yD,null))},T={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return ee.createElement("div",null,"To add an expander pass in a component instance via ",ee.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:ee.createElement(()=>ee.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},ee.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),ee.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:ee.createElement(()=>ee.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},ee.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),ee.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:ee.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:ee.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:$h.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:ee.createElement(()=>ee.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},ee.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),ee.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:ee.createElement(()=>ee.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},ee.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),ee.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:ee.createElement(()=>ee.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},ee.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),ee.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:ee.createElement(()=>ee.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},ee.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),ee.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:nu.AUTO,onChangePage:Ve,onChangeRowsPerPage:Ve,onRowClicked:Ve,onRowDoubleClicked:Ve,onRowMouseEnter:Ve,onRowMouseLeave:Ve,onRowExpandToggled:Ve,onSelectedRowsChange:Ve,onSort:Ve,onColumnOrderChange:Ve},SD={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},xD=ne.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:t})=>t.pagination.style};
`,Fl=ne.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:t})=>t.pagination.pageButtonsStyle};
	${({isRTL:t})=>t&&"transform: scale(-1, -1)"};
`,kD=ne.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${BC`
    width: 100%;
    justify-content: space-around;
  `};
`,QC=ne.span`
	flex-shrink: 1;
	user-select: none;
`,ID=ne(QC)`
	margin: 0 24px;
`,TD=ne(QC)`
	margin: 0 4px;
`;var RD=v.exports.memo(function({rowsPerPage:t,rowCount:e,currentPage:n,direction:r=T.direction,paginationRowsPerPageOptions:i=T.paginationRowsPerPageOptions,paginationIconLastPage:s=T.paginationIconLastPage,paginationIconFirstPage:o=T.paginationIconFirstPage,paginationIconNext:l=T.paginationIconNext,paginationIconPrevious:a=T.paginationIconPrevious,paginationComponentOptions:u=T.paginationComponentOptions,onChangeRowsPerPage:d=T.onChangeRowsPerPage,onChangePage:c=T.onChangePage}){const h=(()=>{const J=typeof window=="object";function ze(){return{width:J?window.innerWidth:void 0,height:J?window.innerHeight:void 0}}const[Ae,ot]=v.exports.useState(ze);return v.exports.useEffect(()=>{if(!J)return()=>null;function De(){ot(ze())}return window.addEventListener("resize",De),()=>window.removeEventListener("resize",De)},[]),Ae})(),m=GC(r),g=h.width&&h.width>599,y=ao(e,t),E=n*t,p=E-t+1,f=n===1,_=n===y,w=Object.assign(Object.assign({},SD),u),S=n===y?`${p}-${e} ${w.rangeSeparatorText} ${e}`:`${p}-${E} ${w.rangeSeparatorText} ${e}`,P=v.exports.useCallback(()=>c(n-1),[n,c]),k=v.exports.useCallback(()=>c(n+1),[n,c]),I=v.exports.useCallback(()=>c(1),[c]),K=v.exports.useCallback(()=>c(ao(e,t)),[c,e,t]),F=v.exports.useCallback(J=>d(Number(J.target.value),n),[n,d]),he=i.map(J=>v.exports.createElement("option",{key:J,value:J},J));w.selectAllRowsItem&&he.push(v.exports.createElement("option",{key:-1,value:e},w.selectAllRowsItemText));const ge=v.exports.createElement(ED,{onChange:F,defaultValue:t,"aria-label":w.rowsPerPageText},he);return v.exports.createElement(xD,{className:"rdt_Pagination"},!w.noRowsPerPage&&g&&v.exports.createElement(v.exports.Fragment,null,v.exports.createElement(TD,null,w.rowsPerPageText),ge),g&&v.exports.createElement(ID,null,S),v.exports.createElement(kD,null,v.exports.createElement(Fl,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":f,onClick:I,disabled:f,isRTL:m},o),v.exports.createElement(Fl,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":f,onClick:P,disabled:f,isRTL:m},a),!g&&ge,v.exports.createElement(Fl,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":_,onClick:k,disabled:_,isRTL:m},l),v.exports.createElement(Fl,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":_,onClick:K,disabled:_,isRTL:m},s)))});const Ur=(t,e)=>{const n=v.exports.useRef(!0);v.exports.useEffect(()=>{n.current?n.current=!1:t()},e)};var bD=function(t){return function(e){return!!e&&typeof e=="object"}(t)&&!function(e){var n=Object.prototype.toString.call(e);return n==="[object RegExp]"||n==="[object Date]"||function(r){return r.$$typeof===PD}(e)}(t)},PD=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function zo(t,e){return e.clone!==!1&&e.isMergeableObject(t)?ds((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function ND(t,e,n){return t.concat(e).map(function(r){return zo(r,n)})}function B_(t){return Object.keys(t).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(n){return e.propertyIsEnumerable(n)}):[]}(t))}function W_(t,e){try{return e in t}catch{return!1}}function OD(t,e,n){var r={};return n.isMergeableObject(t)&&B_(t).forEach(function(i){r[i]=zo(t[i],n)}),B_(e).forEach(function(i){(function(s,o){return W_(s,o)&&!(Object.hasOwnProperty.call(s,o)&&Object.propertyIsEnumerable.call(s,o))})(t,i)||(W_(t,i)&&n.isMergeableObject(e[i])?r[i]=function(s,o){if(!o.customMerge)return ds;var l=o.customMerge(s);return typeof l=="function"?l:ds}(i,n)(t[i],e[i],n):r[i]=zo(e[i],n))}),r}function ds(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||ND,n.isMergeableObject=n.isMergeableObject||bD,n.cloneUnlessOtherwiseSpecified=zo;var r=Array.isArray(e);return r===Array.isArray(t)?r?n.arrayMerge(t,e,n):OD(t,e,n):zo(e,n)}ds.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,r){return ds(n,r,e)},{})};var AD=ds;const V_={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},G_={default:V_,light:V_,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function DD(t,e,n,r){const[i,s]=v.exports.useState(()=>U_(t)),[o,l]=v.exports.useState(""),a=v.exports.useRef("");Ur(()=>{s(U_(t))},[t]);const u=v.exports.useCallback(E=>{var p,f,_;const{attributes:w}=E.target,S=(p=w.getNamedItem("data-column-id"))===null||p===void 0?void 0:p.value;S&&(a.current=((_=(f=i[Ml(i,S)])===null||f===void 0?void 0:f.id)===null||_===void 0?void 0:_.toString())||"",l(a.current))},[i]),d=v.exports.useCallback(E=>{var p;const{attributes:f}=E.target,_=(p=f.getNamedItem("data-column-id"))===null||p===void 0?void 0:p.value;if(_&&a.current&&_!==a.current){const w=Ml(i,a.current),S=Ml(i,_),P=[...i];P[w]=i[S],P[S]=i[w],s(P),e(P)}},[e,i]),c=v.exports.useCallback(E=>{E.preventDefault()},[]),h=v.exports.useCallback(E=>{E.preventDefault()},[]),m=v.exports.useCallback(E=>{E.preventDefault(),a.current="",l("")},[]),g=function(E=!1){return E?yr.ASC:yr.DESC}(r),y=v.exports.useMemo(()=>i[Ml(i,n==null?void 0:n.toString())]||{},[n,i]);return{tableColumns:i,draggingColumnId:o,handleDragStart:u,handleDragEnter:d,handleDragOver:c,handleDragLeave:h,handleDragEnd:m,defaultSortDirection:g,defaultSortColumn:y}}var LD=v.exports.memo(function(t){const{data:e=T.data,columns:n=T.columns,title:r=T.title,actions:i=T.actions,keyField:s=T.keyField,striped:o=T.striped,highlightOnHover:l=T.highlightOnHover,pointerOnHover:a=T.pointerOnHover,dense:u=T.dense,selectableRows:d=T.selectableRows,selectableRowsSingle:c=T.selectableRowsSingle,selectableRowsHighlight:h=T.selectableRowsHighlight,selectableRowsNoSelectAll:m=T.selectableRowsNoSelectAll,selectableRowsVisibleOnly:g=T.selectableRowsVisibleOnly,selectableRowSelected:y=T.selectableRowSelected,selectableRowDisabled:E=T.selectableRowDisabled,selectableRowsComponent:p=T.selectableRowsComponent,selectableRowsComponentProps:f=T.selectableRowsComponentProps,onRowExpandToggled:_=T.onRowExpandToggled,onSelectedRowsChange:w=T.onSelectedRowsChange,expandableIcon:S=T.expandableIcon,onChangeRowsPerPage:P=T.onChangeRowsPerPage,onChangePage:k=T.onChangePage,paginationServer:I=T.paginationServer,paginationServerOptions:K=T.paginationServerOptions,paginationTotalRows:F=T.paginationTotalRows,paginationDefaultPage:he=T.paginationDefaultPage,paginationResetDefaultPage:ge=T.paginationResetDefaultPage,paginationPerPage:J=T.paginationPerPage,paginationRowsPerPageOptions:ze=T.paginationRowsPerPageOptions,paginationIconLastPage:Ae=T.paginationIconLastPage,paginationIconFirstPage:ot=T.paginationIconFirstPage,paginationIconNext:De=T.paginationIconNext,paginationIconPrevious:O=T.paginationIconPrevious,paginationComponent:$=T.paginationComponent,paginationComponentOptions:j=T.paginationComponentOptions,responsive:ce=T.responsive,progressPending:b=T.progressPending,progressComponent:L=T.progressComponent,persistTableHead:D=T.persistTableHead,noDataComponent:U=T.noDataComponent,disabled:C=T.disabled,noTableHead:Q=T.noTableHead,noHeader:A=T.noHeader,fixedHeader:_e=T.fixedHeader,fixedHeaderScrollHeight:se=T.fixedHeaderScrollHeight,pagination:Z=T.pagination,subHeader:H=T.subHeader,subHeaderAlign:Le=T.subHeaderAlign,subHeaderWrap:We=T.subHeaderWrap,subHeaderComponent:re=T.subHeaderComponent,noContextMenu:je=T.noContextMenu,contextMessage:oe=T.contextMessage,contextActions:Y=T.contextActions,contextComponent:Or=T.contextComponent,expandableRows:Me=T.expandableRows,onRowClicked:Ar=T.onRowClicked,onRowDoubleClicked:zn=T.onRowDoubleClicked,onRowMouseEnter:wt=T.onRowMouseEnter,onRowMouseLeave:B=T.onRowMouseLeave,sortIcon:Re=T.sortIcon,onSort:ks=T.onSort,sortFunction:vi=T.sortFunction,sortServer:Ft=T.sortServer,expandableRowsComponent:YC=T.expandableRowsComponent,expandableRowsComponentProps:qC=T.expandableRowsComponentProps,expandableRowDisabled:Wp=T.expandableRowDisabled,expandableRowsHideExpander:Vp=T.expandableRowsHideExpander,expandOnRowClicked:XC=T.expandOnRowClicked,expandOnRowDoubleClicked:JC=T.expandOnRowDoubleClicked,expandableRowExpanded:Gp=T.expandableRowExpanded,expandableInheritConditionalStyles:ZC=T.expandableInheritConditionalStyles,defaultSortFieldId:eE=T.defaultSortFieldId,defaultSortAsc:tE=T.defaultSortAsc,clearSelectedRows:Kp=T.clearSelectedRows,conditionalRowStyles:nE=T.conditionalRowStyles,theme:Qp=T.theme,customStyles:Yp=T.customStyles,direction:Is=T.direction,onColumnOrderChange:rE=T.onColumnOrderChange,className:iE}=t,{tableColumns:qp,draggingColumnId:Xp,handleDragStart:Jp,handleDragEnter:Zp,handleDragOver:em,handleDragLeave:tm,handleDragEnd:nm,defaultSortDirection:sE,defaultSortColumn:oE}=DD(n,rE,eE,tE),[{rowsPerPage:jn,currentPage:qt,selectedRows:pc,allSelected:rm,selectedCount:im,selectedColumn:dn,sortDirection:yi,toggleOnSelectedRowsChange:lE},Dr]=v.exports.useReducer(kA,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:oE,toggleOnSelectedRowsChange:!1,sortDirection:sE,currentPage:he,rowsPerPage:J,selectedRowsFlag:!1,contextMessage:T.contextMessage}),{persistSelectedOnSort:sm=!1,persistSelectedOnPageChange:hl=!1}=K,om=!(!I||!hl&&!sm),aE=Z&&!b&&e.length>0,uE=$||RD,cE=v.exports.useMemo(()=>((G={},le="default",pt="default")=>{const Xt=G_[le]?le:pt;return AD({table:{style:{color:(W=G_[Xt]).text.primary,backgroundColor:W.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:W.text.primary,backgroundColor:W.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:W.background.default,minHeight:"52px"}},head:{style:{color:W.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:W.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:W.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:W.context.background,fontSize:"18px",fontWeight:400,color:W.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:W.text.primary,backgroundColor:W.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:W.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:W.selected.text,backgroundColor:W.selected.default,borderBottomColor:W.background.default}},highlightOnHoverStyle:{color:W.highlightOnHover.text,backgroundColor:W.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:W.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:W.background.default},stripedStyle:{color:W.striped.text,backgroundColor:W.striped.default}},expanderRow:{style:{color:W.text.primary,backgroundColor:W.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:W.button.default,fill:W.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:W.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:W.button.hover},"&:focus":{outline:"none",backgroundColor:W.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:W.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:W.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:W.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:W.button.default,fill:W.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:W.button.disabled,fill:W.button.disabled},"&:hover:not(:disabled)":{backgroundColor:W.button.hover},"&:focus":{outline:"none",backgroundColor:W.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:W.text.primary,backgroundColor:W.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:W.text.primary,backgroundColor:W.background.default}}},G);var W})(Yp,Qp),[Yp,Qp]),dE=v.exports.useMemo(()=>Object.assign({},Is!=="auto"&&{dir:Is}),[Is]),lt=v.exports.useMemo(()=>{if(Ft)return e;if((dn==null?void 0:dn.sortFunction)&&typeof dn.sortFunction=="function"){const G=dn.sortFunction,le=yi===yr.ASC?G:(pt,Xt)=>-1*G(pt,Xt);return[...e].sort(le)}return function(G,le,pt,Xt){return le?Xt&&typeof Xt=="function"?Xt(G.slice(0),le,pt):G.slice(0).sort((W,fl)=>{let Hn,hn;if(typeof le=="string"?(Hn=Fh(W,le),hn=Fh(fl,le)):(Hn=le(W),hn=le(fl)),pt==="asc"){if(Hn<hn)return-1;if(Hn>hn)return 1}if(pt==="desc"){if(Hn>hn)return-1;if(Hn<hn)return 1}return 0}):G}(e,dn==null?void 0:dn.selector,yi,vi)},[Ft,dn,yi,e,vi]),Ts=v.exports.useMemo(()=>{if(Z&&!I){const G=qt*jn,le=G-jn;return lt.slice(le,G)}return lt},[qt,Z,I,jn,lt]),hE=v.exports.useCallback(G=>{Dr(G)},[]),fE=v.exports.useCallback(G=>{Dr(G)},[]),pE=v.exports.useCallback(G=>{Dr(G)},[]),mE=v.exports.useCallback((G,le)=>Ar(G,le),[Ar]),gE=v.exports.useCallback((G,le)=>zn(G,le),[zn]),_E=v.exports.useCallback((G,le)=>wt(G,le),[wt]),vE=v.exports.useCallback((G,le)=>B(G,le),[B]),wi=v.exports.useCallback(G=>Dr({type:"CHANGE_PAGE",page:G,paginationServer:I,visibleOnly:g,persistSelectedOnPageChange:hl}),[I,hl,g]),yE=v.exports.useCallback(G=>{const le=ao(F||Ts.length,G),pt=od(qt,le);I||wi(pt),Dr({type:"CHANGE_ROWS_PER_PAGE",page:pt,rowsPerPage:G})},[qt,wi,I,F,Ts.length]);if(Z&&!I&&lt.length>0&&Ts.length===0){const G=ao(lt.length,jn),le=od(qt,G);wi(le)}Ur(()=>{w({allSelected:rm,selectedCount:im,selectedRows:pc.slice(0)})},[lE]),Ur(()=>{ks(dn,yi,lt.slice(0))},[dn,yi]),Ur(()=>{k(qt,F||lt.length)},[qt]),Ur(()=>{P(jn,qt)},[jn]),Ur(()=>{wi(he)},[he,ge]),Ur(()=>{if(Z&&I&&F>0){const G=ao(F,jn),le=od(qt,G);qt!==le&&wi(le)}},[F]),v.exports.useEffect(()=>{Dr({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:Kp})},[c,Kp]),v.exports.useEffect(()=>{if(!y)return;const G=lt.filter(pt=>y(pt)),le=c?G.slice(0,1):G;Dr({type:"SELECT_MULTIPLE_ROWS",keyField:s,selectedRows:le,totalRows:lt.length,mergeSelections:om})},[e,y]);const wE=g?Ts:lt,CE=hl||c||m;return v.exports.createElement(EA,{theme:cE},!A&&(!!r||!!i)&&v.exports.createElement(cD,{title:r,actions:i,showMenu:!je,selectedCount:im,direction:Is,contextActions:Y,contextComponent:Or,contextMessage:oe}),H&&v.exports.createElement(fD,{align:Le,wrapContent:We},re),v.exports.createElement(mD,Object.assign({responsive:ce,fixedHeader:_e,fixedHeaderScrollHeight:se,className:iE},dE),v.exports.createElement(gD,null,b&&!D&&v.exports.createElement(H_,null,L),v.exports.createElement(TA,{disabled:C,className:"rdt_Table",role:"table"},!Q&&(!!D||lt.length>0&&!b)&&v.exports.createElement(bA,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:_e},v.exports.createElement(PA,{className:"rdt_TableHeadRow",role:"row",dense:u},d&&(CE?v.exports.createElement(xs,{style:{flex:"0 0 48px"}}):v.exports.createElement(rD,{allSelected:rm,selectedRows:pc,selectableRowsComponent:p,selectableRowsComponentProps:f,selectableRowDisabled:E,rowData:wE,keyField:s,mergeSelections:om,onSelectAllRows:fE})),Me&&!Vp&&v.exports.createElement(_D,null),qp.map(G=>v.exports.createElement(tD,{key:G.id,column:G,selectedColumn:dn,disabled:b||lt.length===0,pagination:Z,paginationServer:I,persistSelectedOnSort:sm,selectableRowsVisibleOnly:g,sortDirection:yi,sortIcon:Re,sortServer:Ft,onSort:hE,onDragStart:Jp,onDragOver:em,onDragEnd:nm,onDragEnter:Zp,onDragLeave:tm,draggingColumnId:Xp})))),!lt.length&&!b&&v.exports.createElement(vD,null,U),b&&D&&v.exports.createElement(H_,null,L),!b&&lt.length>0&&v.exports.createElement(pD,{className:"rdt_TableBody",role:"rowgroup"},Ts.map((G,le)=>{const pt=cs(G,s),Xt=function(hn=""){return typeof hn!="number"&&(!hn||hn.length===0)}(pt)?le:pt,W=ta(G,pc,s),fl=!!(Me&&Gp&&Gp(G)),Hn=!!(Me&&Wp&&Wp(G));return v.exports.createElement(QA,{id:Xt,key:Xt,keyField:s,"data-row-id":Xt,columns:qp,row:G,rowCount:lt.length,rowIndex:le,selectableRows:d,expandableRows:Me,expandableIcon:S,highlightOnHover:l,pointerOnHover:a,dense:u,expandOnRowClicked:XC,expandOnRowDoubleClicked:JC,expandableRowsComponent:YC,expandableRowsComponentProps:qC,expandableRowsHideExpander:Vp,defaultExpanderDisabled:Hn,defaultExpanded:fl,expandableInheritConditionalStyles:ZC,conditionalRowStyles:nE,selected:W,selectableRowsHighlight:h,selectableRowsComponent:p,selectableRowsComponentProps:f,selectableRowDisabled:E,selectableRowsSingle:c,striped:o,onRowExpandToggled:_,onRowClicked:mE,onRowDoubleClicked:gE,onRowMouseEnter:_E,onRowMouseLeave:vE,onSelectedRow:pE,draggingColumnId:Xp,onDragStart:Jp,onDragOver:em,onDragEnd:nm,onDragEnter:Zp,onDragLeave:tm})}))))),aE&&v.exports.createElement("div",null,v.exports.createElement(uE,{onChangePage:wi,onChangeRowsPerPage:yE,rowCount:F||lt.length,currentPage:qt,rowsPerPage:jn,direction:Is,paginationRowsPerPageOptions:ze,paginationIconLastPage:Ae,paginationIconFirstPage:ot,paginationIconNext:De,paginationIconPrevious:O,paginationComponentOptions:j})))});const MD=()=>{const[t,e]=v.exports.useState([]),n=[{name:"id",selector:i=>i.id,sortable:!0},{name:"D\xEDa",selector:i=>i.A,sortable:!0},{name:"Hora",selector:i=>i.B,sortable:!0},{name:"V\xE1lvula on/off",selector:i=>i.C,sortable:!0},{name:"T\xB0 Ambiente",selector:i=>i.D,sortable:!0},{name:"H Ambiente ",selector:i=>i.E,sortable:!0},{name:"H Suelo",selector:i=>i.F,sortable:!0},{name:"T\xB0 Suelo",selector:i=>i.G,sortable:!0},{name:"Luminosidad Ambiente",selector:i=>i.H,sortable:!0}],r=async()=>{const{getDatabase:i,ref:s,child:o,get:l}=wO,a=s(i());return await l(o(a,"D")).then(d=>{if(d.exists()){const c=Object.values(d.val()).slice(1,15),h=c.map(m=>({id:c.indexOf(m),A:m.P.split("U")[0],B:m.P.split("U")[1],C:m.P.split("U")[2],D:m.S.split("U")[0],E:m.S.split("U")[1],F:m.S.split("U")[2],G:m.S.split("U")[3],H:m.S.split("U")[4]}));return e(...t,h),c}else console.error("Data NO DISPONIBLE")}).catch(d=>{console.error(d)})};return v.exports.useEffect(()=>{r()},[]),N(hi,{children:t.length>0?N(LD,{columns:n,data:t}):N("p",{children:" Cargando... "})})},FD=()=>Ee(hi,{children:[N(bC,{}),N("div",{className:"container",children:Ee("div",{className:"card p-5 my-3 text-center",children:[N("h2",{children:" Lectura de par\xE1metros en tiempo real "}),N("div",{className:"card-body",children:N(MD,{})})]})})]}),$D=()=>N("nav",{className:"navbar navbar-expand navbar-dark bg-dark rounded-3",children:Ee("div",{className:"container-fluid",children:[Ee(Su,{className:"navbar-brand",to:"/home",children:["Agrobime",N("img",{src:"/vite.svg",alt:"Logo",width:"30",height:"24",className:"d-inline-block align-text-top"})]}),N("div",{className:"navbar-collapse px-1 d-flex justify-content-end",children:N("ul",{className:"navbar-nav",children:N(Ra,{className:"mx-1 btn btn-success nav-link",to:"/auth",children:"Login"})})})]})}),UD=()=>(v.exports.useContext(pi),Ee("div",{children:[N($D,{}),N("hr",{}),N("h2",{children:"Home"}),N("p",{children:"Aqu\xED estar\xE1 la p\xE1gina de inicio y p\xFAblica de la aplicaci\xF3n"})]})),zD=()=>Ee("nav",{className:"navbar navbar-expand navbar-dark bg-dark rounded-3",children:[N("div",{className:"container-fluid",children:Ee(Su,{className:"navbar-brand",to:"/home",children:["Agrobime",N("img",{src:"/vite.svg",alt:"Logo",width:"30",height:"24",className:"d-inline-block align-text-top"})]})}),N("div",{className:"navbar-collapse d-flex justify-content-end",children:N("div",{className:"navbar-nav",children:N(Ra,{className:"btn btn-primary mx-2 nav-link",to:"/home",children:" Home "})})})]}),jD=()=>{const{register:t,login:e}=v.exports.useContext(pi),n=Eu(),[r,i]=v.exports.useState({email:"",password:""}),[s,o]=v.exports.useState(""),l=({target:{name:d,value:c}})=>{i({...r,[d]:c})};return Ee(hi,{children:[N(zD,{}),N("hr",{}),N("h1",{children:"Autorizaci\xF3n de usuario"}),s?N("p",{className:"fw-bold text-danger",children:s}):"",N("div",{className:"card",children:Ee("div",{className:"card-body",children:[Ee("div",{className:"form-floating mb-3",children:[N("input",{type:"email",name:"email",className:"form-control",id:"floatingInput",placeholder:"name@agrobime.com",onChange:l}),N("label",{htmlFor:"floatingInput",children:"Correo electr\xF3nico"})]}),Ee("div",{className:"form-floating",children:[N("input",{type:"password",name:"password",className:"form-control",id:"floatingPassword",placeholder:"Password",onChange:l}),N("label",{htmlFor:"floatingPassword",children:"Contrase\xF1a"})]}),Ee("div",{className:"mt-3",children:[N("button",{className:"me-2 btn btn-primary",type:"button",onClick:async d=>{d.preventDefault();const c=localStorage.getItem("lastPath")||"/dashboard";try{await e(r),n(c,{replace:!0})}catch(h){switch(console.log(h.message),h.message){case"auth/weak-password":o("El password debe tener al menos 6 caracteres");break;case"auth/wrong-password":o("La contrase\xF1a es incorrecta");break;case"auth/user-not-found":o("El usuario no existe");break;case"auth/invalid-email":o("El email no es v\xE1lido");break;default:o("Hubo un error al iniciar sesi\xF3n");break}}},children:"Iniciar Sesi\xF3n"}),N("button",{className:"me-2 btn btn-success",type:"button",onClick:async d=>{d.preventDefault();const c=localStorage.getItem("lastPath")||"/dashboard";try{await t(r),n(c,{replace:!0})}catch(h){switch(h.message){case"auth/weak-password":o("El password debe tener al menos 6 caracteres");break;case"auth/email-already-in-use":o("El email ya est\xE1 registrado");break;case"auth/invalid-email":o("El email no es v\xE1lido");break;default:o("Hubo un error al iniciar sesi\xF3n");break}}},children:"Registrarme"})]})]})})]})},HD=()=>Ee(hi,{children:[N(bC,{}),N("h1",{children:"Monitoreo"})]}),BD=()=>{const t=Eu(),{logout:e}=v.exports.useContext(pi);return N("nav",{className:"navbar navbar-expand navbar-dark bg-dark rounded-3",children:Ee("div",{className:"container-fluid",children:[Ee(Su,{className:"navbar-brand",to:"/home",children:["Agrobime",N("img",{src:"/vite.svg",alt:"Logo",width:"30",height:"24",className:"d-inline-block align-text-top"})]}),N("div",{className:"navbar-collapse",children:Ee("div",{className:"navbar-nav",children:[N(Ra,{className:({isActive:r})=>`nav-link ${r?"active":""}`,to:"/monitoreo",children:"Monitoreo"}),N(Ra,{className:({isActive:r})=>`nav-link ${r?"active":""}`,to:"/dashboard",children:"Dashboard"})]})}),N("div",{className:"navbar-collapse mx-2 d-flex justify-content-end",children:N("ul",{className:"navbar-nav ml-auto",children:N("button",{className:"nav-item nav-link btn btn-danger",onClick:async()=>{t("/auth",{replace:!0}),await e()},children:" Logout"})})})]})})},WD=()=>Ee(hi,{children:[N(BD,{}),N("hr",{}),Ee(u0,{children:[N(Gr,{path:"/dashboard",element:N(FD,{})}),N(Gr,{path:"/monitoreo",element:N(HD,{})}),N(Gr,{path:"/*",element:N(Mf,{to:"/home"})})]})]}),VD=({children:t})=>{const{logged:e}=v.exports.useContext(pi),{pathname:n}=gs();return localStorage.setItem("lastPath",n),e?t:N(Mf,{to:"/auth"})},GD=({children:t})=>{const{logged:e}=v.exports.useContext(pi);return e?N(Mf,{to:"/dashboard"}):t},KD=()=>N("div",{className:"container-fluid p-4",children:Ee(u0,{children:[N(Gr,{path:"/home",element:N(UD,{})}),N(Gr,{path:"/auth",element:Ee(GD,{children:[" ",N(jD,{})," "]})}),N(Gr,{path:"/*",element:Ee(VD,{children:[" ",N(WD,{})," "]})})]})}),QD=()=>N(EO,{children:N(KD,{})});ad.createRoot(document.getElementById("root")).render(Ee(Bx,{children:[" ",N(QD,{})]}));
