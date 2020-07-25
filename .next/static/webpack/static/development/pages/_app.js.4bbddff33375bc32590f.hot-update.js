webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/global.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/global.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./fuentes/Overlock/Overlock-Regular.ttf */ "./styles/fuentes/Overlock/Overlock-Regular.ttf");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./fuentes/Overlock/Overlock-Bold.ttf */ "./styles/fuentes/Overlock/Overlock-Bold.ttf");
exports = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Overlock\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"OverlockBold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Overlock\";\n}\n* a {\n  text-decoration: none;\n}\n\n/* Header */\n.header {\n  width: 100%;\n  height: 15vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  background: #13293dff;\n  color: white;\n}\n.header a {\n  color: white;\n}\n.header div {\n  height: 13vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.header .search {\n  width: 300px;\n  height: 25px;\n  font-size: 20px;\n  padding: 5px;\n  border-radius: 4px;\n  border: 0;\n  padding-left: 10px;\n}\n.header .login-header {\n  color: white;\n}\n.header .logo1 {\n  width: 50px;\n  margin-right: 5px;\n}\n.header .logo2 {\n  position: absolute;\n  z-index: 10;\n  margin-left: 28%;\n  width: 25px;\n  cursor: pointer;\n}\n.header a {\n  margin-right: 30px;\n  text-decoration: none;\n}\n\n/* Index */\n.global-container {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 4fr 1fr;\n}\n\n/* Main */\n.main {\n  display: flex;\n  flex-direction: column;\n  background: #e8f1f2ff;\n  padding: 15px;\n  padding-bottom: 8px;\n}\n.main .article {\n  background: #1b98e0ff;\n  height: 18vh;\n  margin-bottom: 15px;\n  border-radius: 4px;\n  color: black;\n  padding-left: 25px;\n  transition: 400ms;\n  display: flex;\n  flex-direction: row;\n  border: 1px solid #13293dff;\n  box-shadow: 2px 2px 4px rgba(19, 41, 61, 0.6);\n  cursor: pointer;\n}\n.main .article div {\n  width: 50%;\n  margin-top: 5px;\n}\n.main .article h2 {\n  font-size: 26px;\n}\n.main .article h3 {\n  margin-left: 10px;\n}\n.main .article h4 {\n  margin-top: 4vh;\n  margin-left: 75%;\n}\n.main .article:hover {\n  background: #247ba0ff;\n  box-shadow: 4px 4px 8px rgba(19, 41, 61, 0.6);\n}\n.main .article .container-image {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  margin: 0;\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.main .article .container-image img {\n  height: 250px;\n  width: 100%;\n}\n\n/* Aside left */\n.aside_left {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  align-items: center;\n  background: #006494ff;\n}\n.aside_left a {\n  color: white;\n  transition: 400ms;\n}\n.aside_left a:hover {\n  color: #13293dff;\n}\n.aside_left .categories ul {\n  margin-left: 30px;\n}\n.aside_left .categories li {\n  margin-bottom: 5px;\n}\n\n/* Aside Right */\n.aside_right {\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  background: #e8f1f2ff;\n}\n.aside_right a {\n  color: black;\n  transition: 400ms;\n  margin-bottom: 10px;\n}\n.aside_right a:hover {\n  color: #006494ff;\n}\n.aside_right .button {\n  padding: 5px;\n  border-radius: 4px;\n  background: #1b98e0ff;\n  text-align: center;\n  border: 1px solid #13293dff;\n}\n.aside_right .button:hover {\n  color: #e8f1f2ff;\n  background: #13293dff;\n}\n\n/* Articles */\n.pag_article {\n  width: 100%;\n  display: flex;\n  flex: row 1;\n  display: grid;\n  height: 85vh;\n  grid-template-columns: 5fr 1fr;\n  background: #e8f1f2ff;\n}\n.pag_article .article {\n  padding-top: 20px;\n  padding: 30px;\n  display: flex;\n  flex-direction: row;\n}\n.pag_article .article div {\n  width: 70%;\n  padding-left: 30px;\n}\n.pag_article .article div div {\n  padding: 20px;\n  width: 80%;\n}\n.pag_article .article p {\n  font-size: 18px;\n  width: 80%;\n}\n.pag_article .article img {\n  margin-top: 30px;\n  width: 250px;\n  height: 350px;\n  border-radius: 4px;\n  margin-right: 20px;\n  box-shadow: 2px 2px 4px rgba(19, 41, 61, 0.6);\n}\n.pag_article .datos {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=global.css.map */\n", "",{"version":3,"sources":["F:/Users/Draco Dormiens/Desktop/Destruck/Web/NextJs/practica/styles/global.scss","F:/Users/Draco Dormiens/Desktop/Destruck/Web/NextJs/practica/styles/global.css"],"names":[],"mappings":"AAMA;EAEI,uBAAA;EACA,4CAAA;ACNJ;ADQA;EAEI,2BAAA;EACA,4CAAA;ACPJ;ADUA;EACI,SAAA;EACA,UAAA;EACA,uBAAA;ACRJ;ADUI;EACI,qBAAA;ACRR;;ADYA,WAAA;AACA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,mBAAA;EACA,qBAnCY;EAoCZ,YAAA;ACTJ;ADWI;EACI,YAAA;ACTR;ADaI;EACI,YAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;ACXR;ADeI;EACI,YAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,kBAAA;ACbR;ADiBI;EAEI,YAAA;AChBR;ADmBI;EACI,WAAA;EACA,iBAAA;ACjBR;ADoBI;EAEI,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,WAAA;EACA,eAAA;ACnBR;ADsBG;EACK,kBAAA;EACA,qBAAA;ACpBR;;ADwBA,UAAA;AACA;EACI,WAAA;EACA,aAAA;EACA,kCAAA;ACrBJ;;ADyBA,SAAA;AAEA;EAEI,aAAA;EACA,sBAAA;EACA,qBAjGmB;EAkGnB,aAAA;EACA,mBAAA;ACxBJ;AD0BI;EACI,qBAvGQ;EAwGR,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,6CAAA;EACA,eAAA;ACxBR;AD0BQ;EACI,UAAA;EACA,eAAA;ACxBZ;AD2BQ;EACI,eAAA;ACzBZ;AD4BQ;EACI,iBAAA;AC1BZ;AD6BQ;EACG,eAAA;EACA,gBAAA;AC3BX;AD8BQ;EAEI,qBAzIG;EA0IH,6CAAA;AC7BZ;ADgCQ;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,SAAA;EACA,+BAAA;EACA,4BAAA;AC9BZ;AD+BY;EACI,aAAA;EACA,WAAA;AC7BhB;;ADoCA,eAAA;AAEA;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,mBAAA;EACA,qBAvKY;ACqIhB;ADoCI;EAEI,YAAA;EACA,iBAAA;ACnCR;ADqCQ;EAEI,gBAjLI;AC6IhB;AD0CQ;EACI,iBAAA;ACxCZ;AD2CQ;EACI,kBAAA;ACzCZ;;AD8CA,gBAAA;AAEA;EACI,aAAA;EACA,aAAA;EACA,sBAAA;EACA,qBAnMmB;ACuJvB;AD8CI;EACI,YAAA;EACA,iBAAA;EACA,mBAAA;AC5CR;AD6CQ;EACI,gBA7MI;ACkKhB;AD+CI;EACI,YAAA;EACA,kBAAA;EACA,qBAlNQ;EAmNR,kBAAA;EACA,2BAAA;AC7CR;AD+CQ;EACI,gBAtNW;EAuNX,qBA3NI;AC8KhB;;ADkDA,aAAA;AAEA;EACI,WAAA;EACA,aAAA;EACA,WAAA;EACA,aAAA;EACA,YAAA;EACA,8BAAA;EACA,qBArOmB;ACqLvB;ADmDI;EACI,iBAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;ACjDR;ADmDQ;EACI,UAAA;EACA,kBAAA;ACjDZ;ADkDY;EACI,aAAA;EACA,UAAA;AChDhB;ADqDQ;EACI,eAAA;EACA,UAAA;ACnDZ;ADsDQ;EACI,gBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,6CAAA;ACpDZ;ADwDI;EAEI,aAAA;EACA,mBAAA;EACA,8BAAA;ACvDR;;AAEA,qCAAqC","file":"global.css"}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvZ2xvYmFsLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRixzQ0FBc0MsbUJBQU8sQ0FBQywyR0FBbUQ7QUFDakcsb0NBQW9DLG1CQUFPLENBQUMsK0ZBQXlDO0FBQ3JGLG9DQUFvQyxtQkFBTyxDQUFDLHlGQUFzQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUyxlQUFlLDhCQUE4Qix5REFBeUQsR0FBRyxjQUFjLGtDQUFrQyx5REFBeUQsR0FBRyxLQUFLLGNBQWMsZUFBZSw4QkFBOEIsR0FBRyxPQUFPLDBCQUEwQixHQUFHLDJCQUEyQixnQkFBZ0IsaUJBQWlCLGtCQUFrQix3QkFBd0Isa0NBQWtDLHdCQUF3QiwwQkFBMEIsaUJBQWlCLEdBQUcsYUFBYSxpQkFBaUIsR0FBRyxlQUFlLGlCQUFpQixrQkFBa0Isd0JBQXdCLHdCQUF3QixHQUFHLG1CQUFtQixpQkFBaUIsaUJBQWlCLG9CQUFvQixpQkFBaUIsdUJBQXVCLGNBQWMsdUJBQXVCLEdBQUcseUJBQXlCLGlCQUFpQixHQUFHLGtCQUFrQixnQkFBZ0Isc0JBQXNCLEdBQUcsa0JBQWtCLHVCQUF1QixnQkFBZ0IscUJBQXFCLGdCQUFnQixvQkFBb0IsR0FBRyxhQUFhLHVCQUF1QiwwQkFBMEIsR0FBRyxvQ0FBb0MsZ0JBQWdCLGtCQUFrQix1Q0FBdUMsR0FBRyx1QkFBdUIsa0JBQWtCLDJCQUEyQiwwQkFBMEIsa0JBQWtCLHdCQUF3QixHQUFHLGtCQUFrQiwwQkFBMEIsaUJBQWlCLHdCQUF3Qix1QkFBdUIsaUJBQWlCLHVCQUF1QixzQkFBc0Isa0JBQWtCLHdCQUF3QixnQ0FBZ0Msa0RBQWtELG9CQUFvQixHQUFHLHNCQUFzQixlQUFlLG9CQUFvQixHQUFHLHFCQUFxQixvQkFBb0IsR0FBRyxxQkFBcUIsc0JBQXNCLEdBQUcscUJBQXFCLG9CQUFvQixxQkFBcUIsR0FBRyx3QkFBd0IsMEJBQTBCLGtEQUFrRCxHQUFHLG1DQUFtQyxrQkFBa0IsNEJBQTRCLHdCQUF3QixxQkFBcUIsY0FBYyxvQ0FBb0MsaUNBQWlDLEdBQUcsdUNBQXVDLGtCQUFrQixnQkFBZ0IsR0FBRyxtQ0FBbUMsaUJBQWlCLGtCQUFrQiwyQkFBMkIsa0JBQWtCLHdCQUF3QiwwQkFBMEIsR0FBRyxpQkFBaUIsaUJBQWlCLHNCQUFzQixHQUFHLHVCQUF1QixxQkFBcUIsR0FBRyw4QkFBOEIsc0JBQXNCLEdBQUcsOEJBQThCLHVCQUF1QixHQUFHLHFDQUFxQyxrQkFBa0Isa0JBQWtCLDJCQUEyQiwwQkFBMEIsR0FBRyxrQkFBa0IsaUJBQWlCLHNCQUFzQix3QkFBd0IsR0FBRyx3QkFBd0IscUJBQXFCLEdBQUcsd0JBQXdCLGlCQUFpQix1QkFBdUIsMEJBQTBCLHVCQUF1QixnQ0FBZ0MsR0FBRyw4QkFBOEIscUJBQXFCLDBCQUEwQixHQUFHLGtDQUFrQyxnQkFBZ0Isa0JBQWtCLGdCQUFnQixrQkFBa0IsaUJBQWlCLG1DQUFtQywwQkFBMEIsR0FBRyx5QkFBeUIsc0JBQXNCLGtCQUFrQixrQkFBa0Isd0JBQXdCLEdBQUcsNkJBQTZCLGVBQWUsdUJBQXVCLEdBQUcsaUNBQWlDLGtCQUFrQixlQUFlLEdBQUcsMkJBQTJCLG9CQUFvQixlQUFlLEdBQUcsNkJBQTZCLHFCQUFxQixpQkFBaUIsa0JBQWtCLHVCQUF1Qix1QkFBdUIsa0RBQWtELEdBQUcsdUJBQXVCLGtCQUFrQix3QkFBd0IsbUNBQW1DLEdBQUcsbURBQW1ELHVOQUF1TixXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxXQUFXLE9BQU8sV0FBVyxLQUFLLFVBQVUsV0FBVyxhQUFhLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxRQUFRLFdBQVcsS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sWUFBWSxLQUFLLFVBQVUsVUFBVSxXQUFXLGFBQWEsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxRQUFRLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxhQUFhLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxpQ0FBaUM7QUFDci9MO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuNGJiZGRmZjMzMzc1YmMzMjU5MGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi9mdWVudGVzL092ZXJsb2NrL092ZXJsb2NrLVJlZ3VsYXIudHRmXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4vZnVlbnRlcy9PdmVybG9jay9PdmVybG9jay1Cb2xkLnR0ZlwiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk92ZXJsb2NrXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk92ZXJsb2NrQm9sZFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3ZlcmxvY2tcXFwiO1xcbn1cXG4qIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG4uaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMTMyOTNkZmY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5oZWFkZXIgYSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5oZWFkZXIgZGl2IHtcXG4gIGhlaWdodDogMTN2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAuc2VhcmNoIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuLmhlYWRlciAubG9naW4taGVhZGVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhlYWRlciAubG9nbzEge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmhlYWRlciAubG9nbzIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTA7XFxuICBtYXJnaW4tbGVmdDogMjglO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5oZWFkZXIgYSB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIEluZGV4ICovXFxuLmdsb2JhbC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDFmcjtcXG59XFxuXFxuLyogTWFpbiAqL1xcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogI2U4ZjFmMmZmO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxufVxcbi5tYWluIC5hcnRpY2xlIHtcXG4gIGJhY2tncm91bmQ6ICMxYjk4ZTBmZjtcXG4gIGhlaWdodDogMTh2aDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICB0cmFuc2l0aW9uOiA0MDBtcztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzEzMjkzZGZmO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgxOSwgNDEsIDYxLCAwLjYpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWFpbiAuYXJ0aWNsZSBkaXYge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuLm1haW4gLmFydGljbGUgaDIge1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG4ubWFpbiAuYXJ0aWNsZSBoMyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLm1haW4gLmFydGljbGUgaDQge1xcbiAgbWFyZ2luLXRvcDogNHZoO1xcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcXG59XFxuLm1haW4gLmFydGljbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzI0N2JhMGZmO1xcbiAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgxOSwgNDEsIDYxLCAwLjYpO1xcbn1cXG4ubWFpbiAuYXJ0aWNsZSAuY29udGFpbmVyLWltYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XFxufVxcbi5tYWluIC5hcnRpY2xlIC5jb250YWluZXItaW1hZ2UgaW1nIHtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogQXNpZGUgbGVmdCAqL1xcbi5hc2lkZV9sZWZ0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMDA2NDk0ZmY7XFxufVxcbi5hc2lkZV9sZWZ0IGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogNDAwbXM7XFxufVxcbi5hc2lkZV9sZWZ0IGE6aG92ZXIge1xcbiAgY29sb3I6ICMxMzI5M2RmZjtcXG59XFxuLmFzaWRlX2xlZnQgLmNhdGVnb3JpZXMgdWwge1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVxcbi5hc2lkZV9sZWZ0IC5jYXRlZ29yaWVzIGxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLyogQXNpZGUgUmlnaHQgKi9cXG4uYXNpZGVfcmlnaHQge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogI2U4ZjFmMmZmO1xcbn1cXG4uYXNpZGVfcmlnaHQgYSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0cmFuc2l0aW9uOiA0MDBtcztcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5hc2lkZV9yaWdodCBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDA2NDk0ZmY7XFxufVxcbi5hc2lkZV9yaWdodCAuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQ6ICMxYjk4ZTBmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMzI5M2RmZjtcXG59XFxuLmFzaWRlX3JpZ2h0IC5idXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNlOGYxZjJmZjtcXG4gIGJhY2tncm91bmQ6ICMxMzI5M2RmZjtcXG59XFxuXFxuLyogQXJ0aWNsZXMgKi9cXG4ucGFnX2FydGljbGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogcm93IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyO1xcbiAgYmFja2dyb3VuZDogI2U4ZjFmMmZmO1xcbn1cXG4ucGFnX2FydGljbGUgLmFydGljbGUge1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5wYWdfYXJ0aWNsZSAuYXJ0aWNsZSBkaXYge1xcbiAgd2lkdGg6IDcwJTtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG59XFxuLnBhZ19hcnRpY2xlIC5hcnRpY2xlIGRpdiBkaXYge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbi5wYWdfYXJ0aWNsZSAuYXJ0aWNsZSBwIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbi5wYWdfYXJ0aWNsZSAuYXJ0aWNsZSBpbWcge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDE5LCA0MSwgNjEsIDAuNik7XFxufVxcbi5wYWdfYXJ0aWNsZSAuZGF0b3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWdsb2JhbC5jc3MubWFwICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiRjovVXNlcnMvRHJhY28gRG9ybWllbnMvRGVza3RvcC9EZXN0cnVjay9XZWIvTmV4dEpzL3ByYWN0aWNhL3N0eWxlcy9nbG9iYWwuc2Nzc1wiLFwiRjovVXNlcnMvRHJhY28gRG9ybWllbnMvRGVza3RvcC9EZXN0cnVjay9XZWIvTmV4dEpzL3ByYWN0aWNhL3N0eWxlcy9nbG9iYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU1BO0VBRUksdUJBQUE7RUFDQSw0Q0FBQTtBQ05KO0FEUUE7RUFFSSwyQkFBQTtFQUNBLDRDQUFBO0FDUEo7QURVQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUNSSjtBRFVJO0VBQ0kscUJBQUE7QUNSUjs7QURZQSxXQUFBO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFuQ1k7RUFvQ1osWUFBQTtBQ1RKO0FEV0k7RUFDSSxZQUFBO0FDVFI7QURhSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ1hSO0FEZUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNiUjtBRGlCSTtFQUVJLFlBQUE7QUNoQlI7QURtQkk7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUNqQlI7QURvQkk7RUFFSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDbkJSO0FEc0JHO0VBQ0ssa0JBQUE7RUFDQSxxQkFBQTtBQ3BCUjs7QUR3QkEsVUFBQTtBQUNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBQ3JCSjs7QUR5QkEsU0FBQTtBQUVBO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBakdtQjtFQWtHbkIsYUFBQTtFQUNBLG1CQUFBO0FDeEJKO0FEMEJJO0VBQ0kscUJBdkdRO0VBd0dSLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDZDQUFBO0VBQ0EsZUFBQTtBQ3hCUjtBRDBCUTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FDeEJaO0FEMkJRO0VBQ0ksZUFBQTtBQ3pCWjtBRDRCUTtFQUNJLGlCQUFBO0FDMUJaO0FENkJRO0VBQ0csZUFBQTtFQUNBLGdCQUFBO0FDM0JYO0FEOEJRO0VBRUkscUJBeklHO0VBMElILDZDQUFBO0FDN0JaO0FEZ0NRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FDOUJaO0FEK0JZO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUM3QmhCOztBRG9DQSxlQUFBO0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBdktZO0FDcUloQjtBRG9DSTtFQUVJLFlBQUE7RUFDQSxpQkFBQTtBQ25DUjtBRHFDUTtFQUVJLGdCQWpMSTtBQzZJaEI7QUQwQ1E7RUFDSSxpQkFBQTtBQ3hDWjtBRDJDUTtFQUNJLGtCQUFBO0FDekNaOztBRDhDQSxnQkFBQTtBQUVBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQW5NbUI7QUN1SnZCO0FEOENJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUM1Q1I7QUQ2Q1E7RUFDSSxnQkE3TUk7QUNrS2hCO0FEK0NJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBbE5RO0VBbU5SLGtCQUFBO0VBQ0EsMkJBQUE7QUM3Q1I7QUQrQ1E7RUFDSSxnQkF0Tlc7RUF1TlgscUJBM05JO0FDOEtoQjs7QURrREEsYUFBQTtBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQXJPbUI7QUNxTHZCO0FEbURJO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDakRSO0FEbURRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDakRaO0FEa0RZO0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUNoRGhCO0FEcURRO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUNuRFo7QURzRFE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDcERaO0FEd0RJO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUN2RFI7O0FBRUEscUNBQXFDXCIsXCJmaWxlXCI6XCJnbG9iYWwuY3NzXCJ9XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9