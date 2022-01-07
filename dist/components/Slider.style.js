"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = exports.imageBox = exports.descriptionGridRightBoxArrows = exports.activeDost = void 0;

var _styles = require("@mui/styles");

const useStyles = (0, _styles.makeStyles)(() => ({
  descriptionBox: {
    width: '100%',
    backgroundColor: '#353C69'
  },
  descriptionGridLeft: {
    width: '100%',
    minHeight: '20vh'
  },
  descriptionGridLeftContent: {
    textAlign: 'left',
    color: 'white',
    margin: '5% !important'
  },
  descriptionGridLeftDots: {
    marginTop: '16px !important'
  },
  descriptionGridRight: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionGridRightBox: {
    width: '125px',
    justifyContent: 'space-between'
  }
}));
exports.useStyles = useStyles;

const imageBox = (imageUrl, transition) => ({
  width: '100%',
  height: '70vh',
  backgroundImage: "url(".concat(imageUrl, ")"),
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  transition: transition ? transition : '1s cubic-bezier(1,1,0,0)'
});

exports.imageBox = imageBox;

const descriptionGridRightBoxArrows = color => ({
  boxShadow: 'none',
  border: '1px solid #D1B000',
  backgroundColor: 'transparent',
  color: color ? color : '#D1B000',
  '&:hover': {
    color: 'white',
    backgroundColor: '#D1B000'
  }
});

exports.descriptionGridRightBoxArrows = descriptionGridRightBoxArrows;

const activeDost = color => ({
  color: color ? color : '#D1B000'
});

exports.activeDost = activeDost;