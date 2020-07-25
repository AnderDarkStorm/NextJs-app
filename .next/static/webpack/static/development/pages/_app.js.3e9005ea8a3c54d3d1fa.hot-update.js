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
exports.push([module.i, "@font-face {\n  font-family: \"Overlock\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"OverlockBold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Overlock\";\n}\n* a {\n  text-decoration: none;\n}\n\n/* Header */\n.header {\n  width: 100%;\n  height: 15vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  background: #13293dff;\n  color: white;\n}\n.header div {\n  height: 13vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.header .search {\n  width: 300px;\n  height: 25px;\n  font-size: 20px;\n  padding: 5px;\n  border-radius: 4px;\n  border: 0;\n  padding-left: 10px;\n}\n.header .login-header {\n  color: white;\n}\n.header .logo1 {\n  width: 50px;\n  margin-right: 5px;\n}\n.header .logo2 {\n  position: absolute;\n  z-index: 10;\n  margin-left: 28%;\n  width: 25px;\n  cursor: pointer;\n}\n.header a {\n  margin-right: 30px;\n  text-decoration: none;\n}\n\n/* Index */\n.global-container {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 4fr 1fr;\n}\n\n/* Main */\n.main {\n  display: flex;\n  flex-direction: column;\n  background: #e8f1f2ff;\n  padding: 15px;\n  padding-bottom: 8px;\n}\n.main .article {\n  background: #1b98e0ff;\n  height: 18vh;\n  margin-bottom: 15px;\n  border-radius: 4px;\n  color: black;\n  padding-left: 25px;\n  transition: 400ms;\n  display: flex;\n  flex-direction: row;\n  border: 1px solid #13293dff;\n  box-shadow: 2px 2px 4px rgba(19, 41, 61, 0.6);\n  cursor: pointer;\n}\n.main .article div {\n  width: 50%;\n  margin-top: 5px;\n}\n.main .article h2 {\n  font-size: 26px;\n}\n.main .article h3 {\n  margin-left: 10px;\n}\n.main .article h4 {\n  margin-top: 4vh;\n  margin-left: 75%;\n}\n.main .article:hover {\n  background: #247ba0ff;\n  box-shadow: 4px 4px 8px rgba(19, 41, 61, 0.6);\n}\n.main .article .container-image {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  margin: 0;\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.main .article .container-image img {\n  height: 250px;\n  width: 100%;\n}\n\n/* Aside left */\n.aside_left {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  align-items: center;\n  background: #006494ff;\n}\n.aside_left a {\n  color: white;\n  transition: 400ms;\n}\n.aside_left a:hover {\n  color: #13293dff;\n}\n.aside_left .categories ul {\n  margin-left: 30px;\n}\n.aside_left .categories li {\n  margin-bottom: 5px;\n}\n\n/* Aside Right */\n.aside_right {\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  background: #e8f1f2ff;\n}\n.aside_right a {\n  color: black;\n  transition: 400ms;\n  margin-bottom: 10px;\n}\n.aside_right a:hover {\n  color: #006494ff;\n}\n.aside_right .button {\n  padding: 5px;\n  border-radius: 4px;\n  background: #1b98e0ff;\n  text-align: center;\n  border: 1px solid #13293dff;\n}\n.aside_right .button:hover {\n  color: #e8f1f2ff;\n  background: #13293dff;\n}\n\n/* Articles */\n.pag_article {\n  width: 100%;\n  display: flex;\n  flex: row 1;\n  display: grid;\n  height: 85vh;\n  grid-template-columns: 5fr 1fr;\n  background: #e8f1f2ff;\n}\n.pag_article .article {\n  padding: 30px;\n  display: flex;\n  flex-direction: row;\n}\n.pag_article .article div {\n  width: 70%;\n  padding-left: 30px;\n}\n.pag_article .article div div {\n  padding: 20px;\n  width: 80%;\n}\n.pag_article .article p {\n  font-size: 18px;\n  width: 80%;\n}\n.pag_article .article img {\n  width: 250px;\n  height: 350px;\n  border-radius: 4px;\n  margin-right: 20px;\n  box-shadow: 2px 2px 4px rgba(19, 41, 61, 0.6);\n}\n.pag_article .datos {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=global.css.map */\n", "",{"version":3,"sources":["F:/Users/Draco Dormiens/Desktop/Destruck/Web/NextJs/practica/styles/global.scss","F:/Users/Draco Dormiens/Desktop/Destruck/Web/NextJs/practica/styles/global.css"],"names":[],"mappings":"AAMA;EAEI,uBAAA;EACA,4CAAA;ACNJ;ADQA;EAEI,2BAAA;EACA,4CAAA;ACPJ;ADUA;EACI,SAAA;EACA,UAAA;EACA,uBAAA;ACRJ;ADUI;EACI,qBAAA;ACRR;;ADYA,WAAA;AACA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,mBAAA;EACA,qBAnCY;EAoCZ,YAAA;ACTJ;ADWI;EACI,YAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;ACTR;ADaI;EACI,YAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,kBAAA;ACXR;ADeI;EAEI,YAAA;ACdR;ADiBI;EACI,WAAA;EACA,iBAAA;ACfR;ADkBI;EAEI,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,WAAA;EACA,eAAA;ACjBR;ADoBG;EACK,kBAAA;EACA,qBAAA;AClBR;;ADsBA,UAAA;AACA;EACI,WAAA;EACA,aAAA;EACA,kCAAA;ACnBJ;;ADuBA,SAAA;AAEA;EAEI,aAAA;EACA,sBAAA;EACA,qBA5FmB;EA6FnB,aAAA;EACA,mBAAA;ACtBJ;ADwBI;EACI,qBAlGQ;EAmGR,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,6CAAA;EACA,eAAA;ACtBR;ADwBQ;EACI,UAAA;EACA,eAAA;ACtBZ;ADyBQ;EACI,eAAA;ACvBZ;AD0BQ;EACI,iBAAA;ACxBZ;AD2BQ;EACG,eAAA;EACA,gBAAA;ACzBX;AD4BQ;EAEI,qBApIG;EAqIH,6CAAA;AC3BZ;AD8BQ;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,SAAA;EACA,+BAAA;EACA,4BAAA;AC5BZ;AD6BY;EACI,aAAA;EACA,WAAA;AC3BhB;;ADkCA,eAAA;AAEA;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,mBAAA;EACA,qBAlKY;ACkIhB;ADkCI;EAEI,YAAA;EACA,iBAAA;ACjCR;ADmCQ;EAEI,gBA5KI;AC0IhB;ADwCQ;EACI,iBAAA;ACtCZ;ADyCQ;EACI,kBAAA;ACvCZ;;AD4CA,gBAAA;AAEA;EACI,aAAA;EACA,aAAA;EACA,sBAAA;EACA,qBA9LmB;ACoJvB;AD4CI;EACI,YAAA;EACA,iBAAA;EACA,mBAAA;AC1CR;AD2CQ;EACI,gBAxMI;AC+JhB;AD6CI;EACI,YAAA;EACA,kBAAA;EACA,qBA7MQ;EA8MR,kBAAA;EACA,2BAAA;AC3CR;AD6CQ;EACI,gBAjNW;EAkNX,qBAtNI;AC2KhB;;ADgDA,aAAA;AAEA;EACI,WAAA;EACA,aAAA;EACA,WAAA;EACA,aAAA;EACA,YAAA;EACA,8BAAA;EACA,qBAhOmB;ACkLvB;ADiDI;EACI,aAAA;EACA,aAAA;EACA,mBAAA;AC/CR;ADiDQ;EACI,UAAA;EACA,kBAAA;AC/CZ;ADgDY;EACI,aAAA;EACA,UAAA;AC9ChB;ADmDQ;EACI,eAAA;EACA,UAAA;ACjDZ;ADoDQ;EACI,YAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,6CAAA;AClDZ;ADsDI;EAEI,aAAA;EACA,mBAAA;EACA,8BAAA;ACrDR;;AAEA,qCAAqC","file":"global.css"}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvZ2xvYmFsLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRixzQ0FBc0MsbUJBQU8sQ0FBQywyR0FBbUQ7QUFDakcsb0NBQW9DLG1CQUFPLENBQUMsK0ZBQXlDO0FBQ3JGLG9DQUFvQyxtQkFBTyxDQUFDLHlGQUFzQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUyxlQUFlLDhCQUE4Qix5REFBeUQsR0FBRyxjQUFjLGtDQUFrQyx5REFBeUQsR0FBRyxLQUFLLGNBQWMsZUFBZSw4QkFBOEIsR0FBRyxPQUFPLDBCQUEwQixHQUFHLDJCQUEyQixnQkFBZ0IsaUJBQWlCLGtCQUFrQix3QkFBd0Isa0NBQWtDLHdCQUF3QiwwQkFBMEIsaUJBQWlCLEdBQUcsZUFBZSxpQkFBaUIsa0JBQWtCLHdCQUF3Qix3QkFBd0IsR0FBRyxtQkFBbUIsaUJBQWlCLGlCQUFpQixvQkFBb0IsaUJBQWlCLHVCQUF1QixjQUFjLHVCQUF1QixHQUFHLHlCQUF5QixpQkFBaUIsR0FBRyxrQkFBa0IsZ0JBQWdCLHNCQUFzQixHQUFHLGtCQUFrQix1QkFBdUIsZ0JBQWdCLHFCQUFxQixnQkFBZ0Isb0JBQW9CLEdBQUcsYUFBYSx1QkFBdUIsMEJBQTBCLEdBQUcsb0NBQW9DLGdCQUFnQixrQkFBa0IsdUNBQXVDLEdBQUcsdUJBQXVCLGtCQUFrQiwyQkFBMkIsMEJBQTBCLGtCQUFrQix3QkFBd0IsR0FBRyxrQkFBa0IsMEJBQTBCLGlCQUFpQix3QkFBd0IsdUJBQXVCLGlCQUFpQix1QkFBdUIsc0JBQXNCLGtCQUFrQix3QkFBd0IsZ0NBQWdDLGtEQUFrRCxvQkFBb0IsR0FBRyxzQkFBc0IsZUFBZSxvQkFBb0IsR0FBRyxxQkFBcUIsb0JBQW9CLEdBQUcscUJBQXFCLHNCQUFzQixHQUFHLHFCQUFxQixvQkFBb0IscUJBQXFCLEdBQUcsd0JBQXdCLDBCQUEwQixrREFBa0QsR0FBRyxtQ0FBbUMsa0JBQWtCLDRCQUE0Qix3QkFBd0IscUJBQXFCLGNBQWMsb0NBQW9DLGlDQUFpQyxHQUFHLHVDQUF1QyxrQkFBa0IsZ0JBQWdCLEdBQUcsbUNBQW1DLGlCQUFpQixrQkFBa0IsMkJBQTJCLGtCQUFrQix3QkFBd0IsMEJBQTBCLEdBQUcsaUJBQWlCLGlCQUFpQixzQkFBc0IsR0FBRyx1QkFBdUIscUJBQXFCLEdBQUcsOEJBQThCLHNCQUFzQixHQUFHLDhCQUE4Qix1QkFBdUIsR0FBRyxxQ0FBcUMsa0JBQWtCLGtCQUFrQiwyQkFBMkIsMEJBQTBCLEdBQUcsa0JBQWtCLGlCQUFpQixzQkFBc0Isd0JBQXdCLEdBQUcsd0JBQXdCLHFCQUFxQixHQUFHLHdCQUF3QixpQkFBaUIsdUJBQXVCLDBCQUEwQix1QkFBdUIsZ0NBQWdDLEdBQUcsOEJBQThCLHFCQUFxQiwwQkFBMEIsR0FBRyxrQ0FBa0MsZ0JBQWdCLGtCQUFrQixnQkFBZ0Isa0JBQWtCLGlCQUFpQixtQ0FBbUMsMEJBQTBCLEdBQUcseUJBQXlCLGtCQUFrQixrQkFBa0Isd0JBQXdCLEdBQUcsNkJBQTZCLGVBQWUsdUJBQXVCLEdBQUcsaUNBQWlDLGtCQUFrQixlQUFlLEdBQUcsMkJBQTJCLG9CQUFvQixlQUFlLEdBQUcsNkJBQTZCLGlCQUFpQixrQkFBa0IsdUJBQXVCLHVCQUF1QixrREFBa0QsR0FBRyx1QkFBdUIsa0JBQWtCLHdCQUF3QixtQ0FBbUMsR0FBRyxtREFBbUQsdU5BQXVOLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsV0FBVyxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFdBQVcsT0FBTyxXQUFXLEtBQUssVUFBVSxXQUFXLGFBQWEsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFFBQVEsV0FBVyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxZQUFZLEtBQUssVUFBVSxVQUFVLFdBQVcsYUFBYSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsV0FBVyxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLFFBQVEsV0FBVyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8saUNBQWlDO0FBQzUzTDtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjNlOTAwNWVhOGEzYzU0ZDNkMWZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vZnVlbnRlcy9PdmVybG9jay9PdmVybG9jay1SZWd1bGFyLnR0ZlwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCIuL2Z1ZW50ZXMvT3ZlcmxvY2svT3ZlcmxvY2stQm9sZC50dGZcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPdmVybG9ja1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPdmVybG9ja0JvbGRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIk92ZXJsb2NrXFxcIjtcXG59XFxuKiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuLmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTV2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzEzMjkzZGZmO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaGVhZGVyIGRpdiB7XFxuICBoZWlnaHQ6IDEzdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgLnNlYXJjaCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcbi5oZWFkZXIgLmxvZ2luLWhlYWRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5oZWFkZXIgLmxvZ28xIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5oZWFkZXIgLmxvZ28yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgbWFyZ2luLWxlZnQ6IDI4JTtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaGVhZGVyIGEge1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBJbmRleCAqL1xcbi5nbG9iYWwtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnI7XFxufVxcblxcbi8qIE1haW4gKi9cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6ICNlOGYxZjJmZjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbn1cXG4ubWFpbiAuYXJ0aWNsZSB7XFxuICBiYWNrZ3JvdW5kOiAjMWI5OGUwZmY7XFxuICBoZWlnaHQ6IDE4dmg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgdHJhbnNpdGlvbjogNDAwbXM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMzI5M2RmZjtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMTksIDQxLCA2MSwgMC42KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1haW4gLmFydGljbGUgZGl2IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi5tYWluIC5hcnRpY2xlIGgyIHtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuLm1haW4gLmFydGljbGUgaDMge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5tYWluIC5hcnRpY2xlIGg0IHtcXG4gIG1hcmdpbi10b3A6IDR2aDtcXG4gIG1hcmdpbi1sZWZ0OiA3NSU7XFxufVxcbi5tYWluIC5hcnRpY2xlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMyNDdiYTBmZjtcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IHJnYmEoMTksIDQxLCA2MSwgMC42KTtcXG59XFxuLm1haW4gLmFydGljbGUgLmNvbnRhaW5lci1pbWFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xcbn1cXG4ubWFpbiAuYXJ0aWNsZSAuY29udGFpbmVyLWltYWdlIGltZyB7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIEFzaWRlIGxlZnQgKi9cXG4uYXNpZGVfbGVmdCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzAwNjQ5NGZmO1xcbn1cXG4uYXNpZGVfbGVmdCBhIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDQwMG1zO1xcbn1cXG4uYXNpZGVfbGVmdCBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjMTMyOTNkZmY7XFxufVxcbi5hc2lkZV9sZWZ0IC5jYXRlZ29yaWVzIHVsIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG4uYXNpZGVfbGVmdCAuY2F0ZWdvcmllcyBsaSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi8qIEFzaWRlIFJpZ2h0ICovXFxuLmFzaWRlX3JpZ2h0IHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6ICNlOGYxZjJmZjtcXG59XFxuLmFzaWRlX3JpZ2h0IGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogNDAwbXM7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uYXNpZGVfcmlnaHQgYTpob3ZlciB7XFxuICBjb2xvcjogIzAwNjQ5NGZmO1xcbn1cXG4uYXNpZGVfcmlnaHQgLmJ1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiAjMWI5OGUwZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTMyOTNkZmY7XFxufVxcbi5hc2lkZV9yaWdodCAuYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjZThmMWYyZmY7XFxuICBiYWNrZ3JvdW5kOiAjMTMyOTNkZmY7XFxufVxcblxcbi8qIEFydGljbGVzICovXFxuLnBhZ19hcnRpY2xlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IHJvdyAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogODV2aDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmcjtcXG4gIGJhY2tncm91bmQ6ICNlOGYxZjJmZjtcXG59XFxuLnBhZ19hcnRpY2xlIC5hcnRpY2xlIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLnBhZ19hcnRpY2xlIC5hcnRpY2xlIGRpdiB7XFxuICB3aWR0aDogNzAlO1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbn1cXG4ucGFnX2FydGljbGUgLmFydGljbGUgZGl2IGRpdiB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuLnBhZ19hcnRpY2xlIC5hcnRpY2xlIHAge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuLnBhZ19hcnRpY2xlIC5hcnRpY2xlIGltZyB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgxOSwgNDEsIDYxLCAwLjYpO1xcbn1cXG4ucGFnX2FydGljbGUgLmRhdG9zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1nbG9iYWwuY3NzLm1hcCAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkY6L1VzZXJzL0RyYWNvIERvcm1pZW5zL0Rlc2t0b3AvRGVzdHJ1Y2svV2ViL05leHRKcy9wcmFjdGljYS9zdHlsZXMvZ2xvYmFsLnNjc3NcIixcIkY6L1VzZXJzL0RyYWNvIERvcm1pZW5zL0Rlc2t0b3AvRGVzdHJ1Y2svV2ViL05leHRKcy9wcmFjdGljYS9zdHlsZXMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFNQTtFQUVJLHVCQUFBO0VBQ0EsNENBQUE7QUNOSjtBRFFBO0VBRUksMkJBQUE7RUFDQSw0Q0FBQTtBQ1BKO0FEVUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FDUko7QURVSTtFQUNJLHFCQUFBO0FDUlI7O0FEWUEsV0FBQTtBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBbkNZO0VBb0NaLFlBQUE7QUNUSjtBRFdJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDVFI7QURhSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ1hSO0FEZUk7RUFFSSxZQUFBO0FDZFI7QURpQkk7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUNmUjtBRGtCSTtFQUVJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNqQlI7QURvQkc7RUFDSyxrQkFBQTtFQUNBLHFCQUFBO0FDbEJSOztBRHNCQSxVQUFBO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0FDbkJKOztBRHVCQSxTQUFBO0FBRUE7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkE1Rm1CO0VBNkZuQixhQUFBO0VBQ0EsbUJBQUE7QUN0Qko7QUR3Qkk7RUFDSSxxQkFsR1E7RUFtR1IsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkNBQUE7RUFDQSxlQUFBO0FDdEJSO0FEd0JRO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUN0Qlo7QUR5QlE7RUFDSSxlQUFBO0FDdkJaO0FEMEJRO0VBQ0ksaUJBQUE7QUN4Qlo7QUQyQlE7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7QUN6Qlg7QUQ0QlE7RUFFSSxxQkFwSUc7RUFxSUgsNkNBQUE7QUMzQlo7QUQ4QlE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7QUM1Qlo7QUQ2Qlk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQzNCaEI7O0FEa0NBLGVBQUE7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFsS1k7QUNrSWhCO0FEa0NJO0VBRUksWUFBQTtFQUNBLGlCQUFBO0FDakNSO0FEbUNRO0VBRUksZ0JBNUtJO0FDMEloQjtBRHdDUTtFQUNJLGlCQUFBO0FDdENaO0FEeUNRO0VBQ0ksa0JBQUE7QUN2Q1o7O0FENENBLGdCQUFBO0FBRUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBOUxtQjtBQ29KdkI7QUQ0Q0k7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQzFDUjtBRDJDUTtFQUNJLGdCQXhNSTtBQytKaEI7QUQ2Q0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkE3TVE7RUE4TVIsa0JBQUE7RUFDQSwyQkFBQTtBQzNDUjtBRDZDUTtFQUNJLGdCQWpOVztFQWtOWCxxQkF0Tkk7QUMyS2hCOztBRGdEQSxhQUFBO0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBaE9tQjtBQ2tMdkI7QURpREk7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDL0NSO0FEaURRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDL0NaO0FEZ0RZO0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUM5Q2hCO0FEbURRO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUNqRFo7QURvRFE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ2xEWjtBRHNESTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDckRSOztBQUVBLHFDQUFxQ1wiLFwiZmlsZVwiOlwiZ2xvYmFsLmNzc1wifV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==