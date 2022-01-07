"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _iconsMaterial = require("@mui/icons-material");

var _sliderData = require("./sliderData");

var _Slider = require("./Slider.style");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Slider = _ref => {
  var _sliderResource$activ, _sliderResource$activ2;

  let {
    sliderResource
  } = _ref;
  const classes = (0, _Slider.useStyles)();
  const [activeIndex, setActiveIndex] = (0, _react.useState)(0);

  const handlePrevious = () => {
    if (sliderResource) {
      if (activeIndex === 0) setActiveIndex(sliderResource.length - 1);else setActiveIndex(activeIndex => activeIndex - 1);
    } else {
      if (activeIndex === 0) setActiveIndex(_sliderData.data.length - 1);else setActiveIndex(activeIndex => activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (sliderResource) {
      if (activeIndex === sliderResource.length - 1) setActiveIndex(0);else setActiveIndex(activeIndex => activeIndex + 1);
    } else {
      if (activeIndex === _sliderData.data.length - 1) setActiveIndex(0);else setActiveIndex(activeIndex => activeIndex + 1);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_material.Paper, null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    component: "div",
    sx: sliderResource ? (0, _Slider.imageBox)((_sliderResource$activ = sliderResource[activeIndex]) === null || _sliderResource$activ === void 0 ? void 0 : _sliderResource$activ.image) : (0, _Slider.imageBox)(_sliderData.data[activeIndex].image)
  }), /*#__PURE__*/_react.default.createElement(_material.Box, {
    component: "div",
    className: classes.descriptionBox
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 12,
    sm: 10,
    md: 10,
    lg: 10,
    className: classes.descriptionGridLeft
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    component: "div",
    variant: "h6",
    className: classes.descriptionGridLeftContent
  }, sliderResource ? (_sliderResource$activ2 = sliderResource[activeIndex]) === null || _sliderResource$activ2 === void 0 ? void 0 : _sliderResource$activ2.description : _sliderData.data[activeIndex].description, /*#__PURE__*/_react.default.createElement(_material.Box, {
    component: "div",
    className: classes.descriptionGridLeftDots
  }, sliderResource ? sliderResource.map((item, index) => /*#__PURE__*/_react.default.createElement(_iconsMaterial.FiberManualRecord, {
    sx: index === activeIndex && (0, _Slider.activeDost)()
  })) : _sliderData.data.map((item, index) => /*#__PURE__*/_react.default.createElement(_iconsMaterial.FiberManualRecord, {
    sx: index === activeIndex && (0, _Slider.activeDost)()
  }))))), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 12,
    sm: 2,
    md: 2,
    lg: 2,
    className: classes.descriptionGridRight
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    className: classes.descriptionGridRightBox
  }, /*#__PURE__*/_react.default.createElement(_material.Fab, {
    "aria-label": "arrowLeft",
    sx: (0, _Slider.descriptionGridRightBoxArrows)(),
    onClick: handlePrevious
  }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.ArrowLeft, null)), /*#__PURE__*/_react.default.createElement(_material.Fab, {
    "aria-label": "arrowRight",
    sx: (0, _Slider.descriptionGridRightBoxArrows)(),
    onClick: handleNext
  }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.ArrowRight, null)))))));
};

var _default = Slider;
exports.default = _default;