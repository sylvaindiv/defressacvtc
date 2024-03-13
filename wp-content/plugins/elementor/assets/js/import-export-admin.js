/*! elementor - v3.20.0 - 11-03-2024 */
(()=>{var __webpack_modules__=({"@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
((module)=>{"use strict";module.exports=wp.i18n;}),"../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************/
((module)=>{function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
module.exports=_classCallCheck,module.exports.__esModule=true,module.exports["default"]=module.exports;}),"../node_modules/@babel/runtime/helpers/createClass.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{var toPropertyKey=__webpack_require__(/*! ./toPropertyKey.js */"../node_modules/@babel/runtime/helpers/toPropertyKey.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,toPropertyKey(descriptor.key),descriptor);}}
function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,"prototype",{writable:false});return Constructor;}
module.exports=_createClass,module.exports.__esModule=true,module.exports["default"]=module.exports;}),"../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{var toPropertyKey=__webpack_require__(/*! ./toPropertyKey.js */"../node_modules/@babel/runtime/helpers/toPropertyKey.js");function _defineProperty(obj,key,value){key=toPropertyKey(key);if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}
return obj;}
module.exports=_defineProperty,module.exports.__esModule=true,module.exports["default"]=module.exports;}),"../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************/
((module)=>{function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}
module.exports=_interopRequireDefault,module.exports.__esModule=true,module.exports["default"]=module.exports;}),"../node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \*************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{var _typeof=(__webpack_require__(/*! ./typeof.js */"../node_modules/@babel/runtime/helpers/typeof.js")["default"]);function _toPrimitive(input,hint){if(_typeof(input)!=="object"||input===null)return input;var prim=input[Symbol.toPrimitive];if(prim!==undefined){var res=prim.call(input,hint||"default");if(_typeof(res)!=="object")return res;throw new TypeError("@@toPrimitive must return a primitive value.");}
return(hint==="string"?String:Number)(input);}
module.exports=_toPrimitive,module.exports.__esModule=true,module.exports["default"]=module.exports;}),"../node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \***************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{var _typeof=(__webpack_require__(/*! ./typeof.js */"../node_modules/@babel/runtime/helpers/typeof.js")["default"]);var toPrimitive=__webpack_require__(/*! ./toPrimitive.js */"../node_modules/@babel/runtime/helpers/toPrimitive.js");function _toPropertyKey(arg){var key=toPrimitive(arg,"string");return _typeof(key)==="symbol"?key:String(key);}
module.exports=_toPropertyKey,module.exports.__esModule=true,module.exports["default"]=module.exports;}),"../node_modules/@babel/runtime/helpers/typeof.js":
/*!********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************/
((module)=>{function _typeof(o){"@babel/helpers - typeof";return(module.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},module.exports.__esModule=true,module.exports["default"]=module.exports),_typeof(o);}
module.exports=_typeof,module.exports.__esModule=true,module.exports["default"]=module.exports;})});var __webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(cachedModule!==undefined){return cachedModule.exports;}
var module=__webpack_module_cache__[moduleId]={exports:{}};__webpack_modules__[moduleId](module,module.exports,__webpack_require__);return module.exports;}
var __webpack_exports__={};(()=>{"use strict";
/*!*******************************************************!*\
  !*** ../app/modules/import-export/assets/js/admin.js ***!
  \*******************************************************/
var __=__webpack_require__(/*! @wordpress/i18n */"@wordpress/i18n")["__"];var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"../node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */"../node_modules/@babel/runtime/helpers/createClass.js"));var _defineProperty2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */"../node_modules/@babel/runtime/helpers/defineProperty.js"));var Admin=function(){function Admin(){(0,_classCallCheck2.default)(this,Admin);(0,_defineProperty2.default)(this,"KIT_DATA_KEY",'elementor-kit-data');(0,_defineProperty2.default)(this,"cachedKitData",void 0);(0,_defineProperty2.default)(this,"revertButton",void 0);(0,_defineProperty2.default)(this,"activeKitName",void 0);this.activeKitName=this.getActiveKitName();this.revertButton=document.getElementById('elementor-import-export__revert_kit');if(this.revertButton){this.revertButton.addEventListener('click',this.onRevertButtonClick.bind(this));this.maybeAddRevertBtnMargin();}
this.maybeShowReferrerKitDialog();}
(0,_createClass2.default)(Admin,[{key:"maybeAddRevertBtnMargin",value:function maybeAddRevertBtnMargin(){var referrerKitId=new URLSearchParams(this.revertButton.href).get('referrer_kit');if(!referrerKitId){return;}
this.revertButton.style.marginBottom=this.calculateMargin();this.scrollToBottom();}},{key:"calculateMargin",value:function calculateMargin(){var adminBar=document.getElementById('wpadminbar');var adminBarHeight=adminBar?adminBar.offsetHeight:0;var revertKitHeight=this.revertButton.parentElement.offsetHeight;return document.body.clientHeight-adminBarHeight-revertKitHeight-document.getElementById('wpfooter').offsetHeight-15
+'px';}},{key:"scrollToBottom",value:function scrollToBottom(){setTimeout(function(){window.scrollTo(0,document.body.scrollHeight);});}},{key:"onRevertButtonClick",value:function onRevertButtonClick(event){var _this=this;event.preventDefault();elementorCommon.dialogsManager.createWidget('confirm',{headerMessage:__('Are you sure?','elementor'),message:__('Removing %s will permanently delete changes made to the Kit\'s content and site settings','elementor').replace('%s',this.activeKitName),strings:{confirm:__('Delete','elementor'),cancel:__('Cancel','elementor')},onConfirm:function onConfirm(){return _this.onRevertConfirm();}}).show();}},{key:"onRevertConfirm",value:function onRevertConfirm(){var referrerKitId=new URLSearchParams(this.revertButton.href).get('referrer_kit');this.saveToCache(referrerKitId!==null&&referrerKitId!==void 0?referrerKitId:'');location.href=this.revertButton.href;}},{key:"maybeShowReferrerKitDialog",value:function maybeShowReferrerKitDialog(){var _this$getDataFromCach=this.getDataFromCache(),referrerKitId=_this$getDataFromCach.referrerKitId;if(undefined===referrerKitId){return;}
if(0===referrerKitId.length){this.createKitDeletedWidget({message:__('Try a different Kit or build your site from scratch.','elementor'),strings:{confirm:__('OK','elementor'),cancel:__('Kit Library','elementor')},onCancel:function onCancel(){location.href=elementorImportExport.appUrl;}});this.clearCache();return;}
this.createKitDeletedWidget({message:__('You\'re ready to apply a new Kit!','elementor'),strings:{confirm:__('Continue to new Kit','elementor'),cancel:__('Close','elementor')},onConfirm:function onConfirm(){location.href=elementorImportExport.appUrl+'/preview/'+referrerKitId;}});this.clearCache();}},{key:"createKitDeletedWidget",value:function createKitDeletedWidget(options){var _this$getDataFromCach2=this.getDataFromCache(),activeKitName=_this$getDataFromCach2.activeKitName;elementorCommon.dialogsManager.createWidget('confirm',{id:'e-revert-kit-deleted-dialog',headerMessage:__('%s was successfully deleted','elementor').replace('%s',activeKitName),message:options.message,strings:{confirm:options.strings.confirm,cancel:options.strings.cancel},onConfirm:options.onConfirm,onCancel:options.onCancel}).show();}},{key:"getActiveKitName",value:function getActiveKitName(){var lastKit=elementorImportExport.lastImportedSession;if(lastKit.kit_title){return lastKit.kit_title;}
if(lastKit.kit_name){return this.convertNameToTitle(lastKit.kit_name);}
return __('Your Kit','elementor');}},{key:"convertNameToTitle",value:function convertNameToTitle(name){return name.split(/[-_]+/).map(function(word){return word[0].toUpperCase()+word.substring(1);}).join(' ');}},{key:"saveToCache",value:function saveToCache(referrerKitId){sessionStorage.setItem(this.KIT_DATA_KEY,JSON.stringify({referrerKitId:referrerKitId,activeKitName:this.activeKitName}));}},{key:"getDataFromCache",value:function getDataFromCache(){var _this$cachedKitData;if(this.cachedKitData){return this.cachedKitData;}
try{this.cachedKitData=JSON.parse(sessionStorage.getItem(this.KIT_DATA_KEY));}catch(e){return{};}
return(_this$cachedKitData=this.cachedKitData)!==null&&_this$cachedKitData!==void 0?_this$cachedKitData:{};}},{key:"clearCache",value:function clearCache(){sessionStorage.removeItem(this.KIT_DATA_KEY);}}]);return Admin;}();window.addEventListener('load',function(){new Admin();});})();})();