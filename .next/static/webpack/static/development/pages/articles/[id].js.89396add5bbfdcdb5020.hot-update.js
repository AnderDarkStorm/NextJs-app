webpackHotUpdate("static\\development\\pages\\articles\\[id].js",{

/***/ "./pages/articles/[id].js":
/*!********************************!*\
  !*** ./pages/articles/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Articles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Main */ "./components/Main.js");
var _jsxFileName = "F:\\Users\\Draco Dormiens\\Desktop\\Destruck\\Web\\NextJs\\practica\\pages\\articles\\[id].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Articles() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var id = router.query.id;
  var articles = [{
    id: 0,
    title: "Blackwork Tattoo Style",
    autor: "Arfox",
    text: "Stylistically speaking, blackwork is a very broad categorical term. It applies almost any body art that's created using solely black ink, but as you can imagine, a lot can be done with this versatile and striking color. Looking through blackwork artists portfolios, you'll see all kinds of tattoo types from ancient sacred geometry to modern abstract ornamental designs to extremely detailed illustrative pieces. It is hands down the style where the most experimentation is currently occurring in the industry, and some of the work being produced today is absolutely mind-blowing.",
    date: "20/07/20",
    images: ["/articles/black_work2.jpg", "/articles/black_work1.jpg"]
  }, {
    id: 1,
    title: "Neo Traditional Tattoo Style",
    autor: "Derfox",
    text: "Neo traditional, as the name implies, is an evolution of the traditional style. It features the core properties of its predecessor, like pronounced linework and extremely vibrant colors but it also has an illustrative quality to it. This is because Neo traditional artists are highly influenced by Art Nouveau and Art Deco aesthetics. The main difference between traditional tattoos and neo traditional tattoos is that neo traditional tattoos often have a broader color palette and a broader range of motifs. Pieces done in this style are known for their lush, decorative details as well as the use of natural imagery such as florals and animals.",
    date: "16/07/20",
    images: ["/articles/neotradi2.jpg", "/articles/neotradi1.jpg"]
  }, {
    id: 2,
    title: "New School Tattoo Style",
    autor: "Rednar",
    text: "Don't let the name fool you, new school isn't really all that new anymore. It rose to prominence in the weirdness that was the late '80s and early '90s, but lately it has waned in popularity. This is probably because it was very much a product of its time, featuring a highly animated aesthetic that takes after popular entertainment from that period in American history. The style is cartoonish and wacky, featuring caricatures and other exaggerated figures. If you're the sort of person who likes their body art injected with the spirit of Ren and Stimpy, then this comic style is for you.",
    date: "04/04/20",
    images: ["/articles/new_school1.jpg", "/articles/new_school2.jpg"]
  }, {
    id: 3,
    title: "Realism Tattoo Style",
    autor: "Ander",
    text: "Though classic realism has been a part of the fine art since as far back as the Renaissance, it only found its way to the world of tattoos recently, cropping up around the latter half of the 20th century. Since then, this new tattoo style has become increasingly refined and extremely popular. As it now stands, you can find jaw-dropping color and black and grey portraits of pretty much any celebrity you can think of as well as realistic depictions of nature and just about anything else imaginable, even the surreal.",
    date: "18/01/20",
    images: ["/articles/realism2.jpg", "/articles/realism.jpg"]
  }];
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, _components_Main__WEBPACK_IMPORTED_MODULE_2__["default"].articles[id].title));
}

_s(Articles, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Articles;

var _c;

$RefreshReg$(_c, "Articles");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcnRpY2xlcy8uanMiXSwibmFtZXMiOlsiQXJ0aWNsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiYXJ0aWNsZXMiLCJ0aXRsZSIsImF1dG9yIiwidGV4dCIsImRhdGUiLCJpbWFnZXMiLCJNYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBbUI7QUFBQTs7QUFFOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUY4QixNQUd2QkMsRUFIdUIsR0FHakJGLE1BQU0sQ0FBQ0csS0FIVSxDQUd2QkQsRUFIdUI7QUFLOUIsTUFBSUUsUUFBUSxHQUFHLENBQ1g7QUFDSUYsTUFBRSxFQUFFLENBRFI7QUFFSUcsU0FBSyxFQUFFLHdCQUZYO0FBR0lDLFNBQUssRUFBRSxPQUhYO0FBSUlDLFFBQUksRUFBRSxza0JBSlY7QUFLSUMsUUFBSSxFQUFFLFVBTFY7QUFNSUMsVUFBTSxFQUFFLENBQUMsMkJBQUQsRUFBNkIsMkJBQTdCO0FBTlosR0FEVyxFQVNYO0FBQ0lQLE1BQUUsRUFBRSxDQURSO0FBRUlHLFNBQUssRUFBRSw4QkFGWDtBQUdJQyxTQUFLLEVBQUUsUUFIWDtBQUlJQyxRQUFJLEVBQUUsd29CQUpWO0FBS0lDLFFBQUksRUFBRSxVQUxWO0FBTUlDLFVBQU0sRUFBRSxDQUFDLHlCQUFELEVBQTJCLHlCQUEzQjtBQU5aLEdBVFcsRUFpQlg7QUFDSVAsTUFBRSxFQUFFLENBRFI7QUFFSUcsU0FBSyxFQUFFLHlCQUZYO0FBR0lDLFNBQUssRUFBRSxRQUhYO0FBSUlDLFFBQUksRUFBRSxpbEJBSlY7QUFLSUMsUUFBSSxFQUFFLFVBTFY7QUFNSUMsVUFBTSxFQUFFLENBQUMsMkJBQUQsRUFBNkIsMkJBQTdCO0FBTlosR0FqQlcsRUF5Qlg7QUFDSVAsTUFBRSxFQUFFLENBRFI7QUFFSUcsU0FBSyxFQUFFLHNCQUZYO0FBR0lDLFNBQUssRUFBRSxPQUhYO0FBSUlDLFFBQUksRUFBRSx5Z0JBSlY7QUFLSUMsUUFBSSxFQUFFLFVBTFY7QUFNSUMsVUFBTSxFQUFFLENBQUMsd0JBQUQsRUFBMEIsdUJBQTFCO0FBTlosR0F6QlcsQ0FBZjtBQXFDQSxTQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtDLHdEQUFJLENBQUNOLFFBQUwsQ0FBY0YsRUFBZCxFQUFrQkcsS0FBdkIsQ0FEQSxDQUZKO0FBU0g7O0dBbkR1Qk4sUTtVQUVMRSxxRDs7O0tBRktGLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFydGljbGVzXFxbaWRdLmpzLjg5Mzk2YWRkNWJiZmRjZGI1MDIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBNYWluIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWFpbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGljbGVzKCl7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5OyBcclxuXHJcbiAgICB2YXIgYXJ0aWNsZXMgPSBbXHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgICAgdGl0bGU6IFwiQmxhY2t3b3JrIFRhdHRvbyBTdHlsZVwiLCBcclxuICAgICAgICAgICAgYXV0b3I6IFwiQXJmb3hcIiwgXHJcbiAgICAgICAgICAgIHRleHQ6IFwiU3R5bGlzdGljYWxseSBzcGVha2luZywgYmxhY2t3b3JrIGlzIGEgdmVyeSBicm9hZCBjYXRlZ29yaWNhbCB0ZXJtLiBJdCBhcHBsaWVzIGFsbW9zdCBhbnkgYm9keSBhcnQgdGhhdCdzIGNyZWF0ZWQgdXNpbmcgc29sZWx5IGJsYWNrIGluaywgYnV0IGFzIHlvdSBjYW4gaW1hZ2luZSwgYSBsb3QgY2FuIGJlIGRvbmUgd2l0aCB0aGlzIHZlcnNhdGlsZSBhbmQgc3RyaWtpbmcgY29sb3IuIExvb2tpbmcgdGhyb3VnaCBibGFja3dvcmsgYXJ0aXN0cyBwb3J0Zm9saW9zLCB5b3UnbGwgc2VlIGFsbCBraW5kcyBvZiB0YXR0b28gdHlwZXMgZnJvbSBhbmNpZW50IHNhY3JlZCBnZW9tZXRyeSB0byBtb2Rlcm4gYWJzdHJhY3Qgb3JuYW1lbnRhbCBkZXNpZ25zIHRvIGV4dHJlbWVseSBkZXRhaWxlZCBpbGx1c3RyYXRpdmUgcGllY2VzLiBJdCBpcyBoYW5kcyBkb3duIHRoZSBzdHlsZSB3aGVyZSB0aGUgbW9zdCBleHBlcmltZW50YXRpb24gaXMgY3VycmVudGx5IG9jY3VycmluZyBpbiB0aGUgaW5kdXN0cnksIGFuZCBzb21lIG9mIHRoZSB3b3JrIGJlaW5nIHByb2R1Y2VkIHRvZGF5IGlzIGFic29sdXRlbHkgbWluZC1ibG93aW5nLlwiLCBcclxuICAgICAgICAgICAgZGF0ZTogXCIyMC8wNy8yMFwiLCBcclxuICAgICAgICAgICAgaW1hZ2VzOiBbXCIvYXJ0aWNsZXMvYmxhY2tfd29yazIuanBnXCIsXCIvYXJ0aWNsZXMvYmxhY2tfd29yazEuanBnXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJOZW8gVHJhZGl0aW9uYWwgVGF0dG9vIFN0eWxlXCIsIFxyXG4gICAgICAgICAgICBhdXRvcjogXCJEZXJmb3hcIiwgXHJcbiAgICAgICAgICAgIHRleHQ6IFwiTmVvIHRyYWRpdGlvbmFsLCBhcyB0aGUgbmFtZSBpbXBsaWVzLCBpcyBhbiBldm9sdXRpb24gb2YgdGhlIHRyYWRpdGlvbmFsIHN0eWxlLiBJdCBmZWF0dXJlcyB0aGUgY29yZSBwcm9wZXJ0aWVzIG9mIGl0cyBwcmVkZWNlc3NvciwgbGlrZSBwcm9ub3VuY2VkIGxpbmV3b3JrIGFuZCBleHRyZW1lbHkgdmlicmFudCBjb2xvcnMgYnV0IGl0IGFsc28gaGFzIGFuIGlsbHVzdHJhdGl2ZSBxdWFsaXR5IHRvIGl0LiBUaGlzIGlzIGJlY2F1c2UgTmVvIHRyYWRpdGlvbmFsIGFydGlzdHMgYXJlIGhpZ2hseSBpbmZsdWVuY2VkIGJ5IEFydCBOb3V2ZWF1IGFuZCBBcnQgRGVjbyBhZXN0aGV0aWNzLiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gdHJhZGl0aW9uYWwgdGF0dG9vcyBhbmQgbmVvIHRyYWRpdGlvbmFsIHRhdHRvb3MgaXMgdGhhdCBuZW8gdHJhZGl0aW9uYWwgdGF0dG9vcyBvZnRlbiBoYXZlIGEgYnJvYWRlciBjb2xvciBwYWxldHRlIGFuZCBhIGJyb2FkZXIgcmFuZ2Ugb2YgbW90aWZzLiBQaWVjZXMgZG9uZSBpbiB0aGlzIHN0eWxlIGFyZSBrbm93biBmb3IgdGhlaXIgbHVzaCwgZGVjb3JhdGl2ZSBkZXRhaWxzIGFzIHdlbGwgYXMgdGhlIHVzZSBvZiBuYXR1cmFsIGltYWdlcnkgc3VjaCBhcyBmbG9yYWxzIGFuZCBhbmltYWxzLlwiLCBcclxuICAgICAgICAgICAgZGF0ZTogXCIxNi8wNy8yMFwiLCBcclxuICAgICAgICAgICAgaW1hZ2VzOiBbXCIvYXJ0aWNsZXMvbmVvdHJhZGkyLmpwZ1wiLFwiL2FydGljbGVzL25lb3RyYWRpMS5qcGdcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgICBcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk5ldyBTY2hvb2wgVGF0dG9vIFN0eWxlXCIsIFxyXG4gICAgICAgICAgICBhdXRvcjogXCJSZWRuYXJcIiwgXHJcbiAgICAgICAgICAgIHRleHQ6IFwiRG9uJ3QgbGV0IHRoZSBuYW1lIGZvb2wgeW91LCBuZXcgc2Nob29sIGlzbid0IHJlYWxseSBhbGwgdGhhdCBuZXcgYW55bW9yZS4gSXQgcm9zZSB0byBwcm9taW5lbmNlIGluIHRoZSB3ZWlyZG5lc3MgdGhhdCB3YXMgdGhlIGxhdGUgJzgwcyBhbmQgZWFybHkgJzkwcywgYnV0IGxhdGVseSBpdCBoYXMgd2FuZWQgaW4gcG9wdWxhcml0eS4gVGhpcyBpcyBwcm9iYWJseSBiZWNhdXNlIGl0IHdhcyB2ZXJ5IG11Y2ggYSBwcm9kdWN0IG9mIGl0cyB0aW1lLCBmZWF0dXJpbmcgYSBoaWdobHkgYW5pbWF0ZWQgYWVzdGhldGljIHRoYXQgdGFrZXMgYWZ0ZXIgcG9wdWxhciBlbnRlcnRhaW5tZW50IGZyb20gdGhhdCBwZXJpb2QgaW4gQW1lcmljYW4gaGlzdG9yeS4gVGhlIHN0eWxlIGlzIGNhcnRvb25pc2ggYW5kIHdhY2t5LCBmZWF0dXJpbmcgY2FyaWNhdHVyZXMgYW5kIG90aGVyIGV4YWdnZXJhdGVkIGZpZ3VyZXMuIElmIHlvdSdyZSB0aGUgc29ydCBvZiBwZXJzb24gd2hvIGxpa2VzIHRoZWlyIGJvZHkgYXJ0IGluamVjdGVkIHdpdGggdGhlIHNwaXJpdCBvZiBSZW4gYW5kIFN0aW1weSwgdGhlbiB0aGlzIGNvbWljIHN0eWxlIGlzIGZvciB5b3UuXCIsIFxyXG4gICAgICAgICAgICBkYXRlOiBcIjA0LzA0LzIwXCIsIFxyXG4gICAgICAgICAgICBpbWFnZXM6IFtcIi9hcnRpY2xlcy9uZXdfc2Nob29sMS5qcGdcIixcIi9hcnRpY2xlcy9uZXdfc2Nob29sMi5qcGdcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgICBcclxuICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlJlYWxpc20gVGF0dG9vIFN0eWxlXCIsIFxyXG4gICAgICAgICAgICBhdXRvcjogXCJBbmRlclwiLCBcclxuICAgICAgICAgICAgdGV4dDogXCJUaG91Z2ggY2xhc3NpYyByZWFsaXNtIGhhcyBiZWVuIGEgcGFydCBvZiB0aGUgZmluZSBhcnQgc2luY2UgYXMgZmFyIGJhY2sgYXMgdGhlIFJlbmFpc3NhbmNlLCBpdCBvbmx5IGZvdW5kIGl0cyB3YXkgdG8gdGhlIHdvcmxkIG9mIHRhdHRvb3MgcmVjZW50bHksIGNyb3BwaW5nIHVwIGFyb3VuZCB0aGUgbGF0dGVyIGhhbGYgb2YgdGhlIDIwdGggY2VudHVyeS4gU2luY2UgdGhlbiwgdGhpcyBuZXcgdGF0dG9vIHN0eWxlIGhhcyBiZWNvbWUgaW5jcmVhc2luZ2x5IHJlZmluZWQgYW5kIGV4dHJlbWVseSBwb3B1bGFyLiBBcyBpdCBub3cgc3RhbmRzLCB5b3UgY2FuIGZpbmQgamF3LWRyb3BwaW5nIGNvbG9yIGFuZCBibGFjayBhbmQgZ3JleSBwb3J0cmFpdHMgb2YgcHJldHR5IG11Y2ggYW55IGNlbGVicml0eSB5b3UgY2FuIHRoaW5rIG9mIGFzIHdlbGwgYXMgcmVhbGlzdGljIGRlcGljdGlvbnMgb2YgbmF0dXJlIGFuZCBqdXN0IGFib3V0IGFueXRoaW5nIGVsc2UgaW1hZ2luYWJsZSwgZXZlbiB0aGUgc3VycmVhbC5cIiwgXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMTgvMDEvMjBcIiwgXHJcbiAgICAgICAgICAgIGltYWdlczogW1wiL2FydGljbGVzL3JlYWxpc20yLmpwZ1wiLFwiL2FydGljbGVzL3JlYWxpc20uanBnXCJdXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICBdO1xyXG5cclxuIFxyXG4gICAgcmV0dXJuKFxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj57TWFpbi5hcnRpY2xlc1tpZF0udGl0bGUgfTwvaDI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=