webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./views/components/modal/SpeakerDetailModal/SpeakerDetailModal.tsx":
/*!**************************************************************************!*\
  !*** ./views/components/modal/SpeakerDetailModal/SpeakerDetailModal.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classcat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classcat */ "../node_modules/classcat/src/index.js");
/* harmony import */ var _SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakerDetailModal.scss */ "./views/components/modal/SpeakerDetailModal/SpeakerDetailModal.scss");
/* harmony import */ var _SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/data */ "./shared/data.ts");
/* harmony import */ var _shared_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/store */ "./shared/store/index.ts");
/* harmony import */ var _CloseBtn_CloseBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../CloseBtn/CloseBtn */ "./views/components/CloseBtn/CloseBtn.tsx");
var _jsxFileName = "/Users/codemilli/codemilli/feconf2019/src/views/components/modal/SpeakerDetailModal/SpeakerDetailModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var SpeakerDetailModal = function SpeakerDetailModal(_ref) {
  var speaker = _ref.speaker;

  var _useModal = Object(_shared_store__WEBPACK_IMPORTED_MODULE_4__["useModal"])(),
      changeSpeaker = _useModal.changeSpeaker,
      closeModal = _useModal.closeModal;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      rendered = _useState[0],
      setRendered = _useState[1];

  var onChangeSpeaker = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e, val) {
    e.preventDefault();
    e.stopPropagation();
    setRendered(false);
    setTimeout(function () {
      setRendered(true);
      changeSpeaker(speaker, val);
    }, 100);
  }, [speaker]);
  return __jsx("div", {
    className: Object(classcat__WEBPACK_IMPORTED_MODULE_1__["default"])([_SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SpeakerDetailModal, rendered ? _SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rendered : '']),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: Object(classcat__WEBPACK_IMPORTED_MODULE_1__["default"])([_SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.BottomWrap, 'kr-text']),
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("a", {
    className: _SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.MobileCloseBtn,
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      closeModal();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_CloseBtn_CloseBtn__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isStatic: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx("div", {
    className: _SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LeftBg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("div", {
    className: _SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LeftWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: Object(classcat__WEBPACK_IMPORTED_MODULE_1__["default"])([_SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ProfileWrap]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: _SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ProfileImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("img", {
    src: "/static/images/speakers/".concat(speaker.image),
    alt: speaker.nameEn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), __jsx("div", {
    className: _SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ProfileTextWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("h1", {
    className: _SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ProfileName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, speaker.name), speaker.company ? __jsx("a", {
    target: "_blank",
    href: speaker.company.link,
    className: _SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ProfileInfo,
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, speaker.company.name) : null), __jsx("div", {
    className: _SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ProfileSnsWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, speaker.sns.twitter ? __jsx("a", {
    href: speaker.sns.twitter,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("img", {
    src: '/static/images/icons/twitter.svg',
    alt: "Twitter Link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })) : null, speaker.sns.github ? __jsx("a", {
    href: speaker.sns.github,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("img", {
    src: '/static/images/icons/github.svg',
    alt: "GitHub Link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })) : null, speaker.sns.facebook ? __jsx("a", {
    href: speaker.sns.facebook,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("img", {
    src: '/static/images/icons/facebook.svg',
    alt: "Facebook Link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })) : null, speaker.sns.link ? __jsx("a", {
    href: speaker.sns.link,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("img", {
    src: '/static/images/icons/link.svg',
    alt: "Link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })) : null))), __jsx("div", {
    className: _SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.RightWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("div", {
    className: _SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.NavWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    onClick: function onClick(e) {
      return onChangeSpeaker(e, -1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "\u25C0\uFE0E \uC774\uC804 \uC2A4\uD53C\uCEE4"), __jsx("a", {
    href: "#",
    onClick: function onClick(e) {
      return onChangeSpeaker(e, 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "\uB2E4\uC74C \uC2A4\uD53C\uCEE4 \u25B6\uFE0E")), __jsx("div", {
    className: _SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ProfileWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("p", {
    className: _SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ProfileDesc,
    dangerouslySetInnerHTML: {
      __html: speaker.track.description
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx("p", {
    className: _SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ProfileTarget,
    dangerouslySetInnerHTML: {
      __html: '대상 : ' + speaker.track.target
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx("p", {
    className: _SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.TrackTime,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "2019\uB144 10\uC6D4 26\uC77C | ", _shared_data__WEBPACK_IMPORTED_MODULE_3__["timetable"][speaker.track.order], " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), "Track ", speaker.track.type === 'A' ? 1 : 2), __jsx("h2", {
    className: _SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.TrackTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, speaker.track.title), speaker.documentUrl ? __jsx("h2", {
    className: _SpeakerDetailModal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Document,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("a", {
    target: "_blank",
    href: speaker.documentUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "[\uBC1C\uD45C\uC790\uB8CC]"), __jsx("a", {
    target: "_blank",
    href: speaker.documentUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "[\uBC1C\uD45C\uC790\uB8CC]")) : null))));
};

/* harmony default export */ __webpack_exports__["default"] = (SpeakerDetailModal);

/***/ })

})
//# sourceMappingURL=_app.js.feae5462e8ca9854d9b7.hot-update.js.map