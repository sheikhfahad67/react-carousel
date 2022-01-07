import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  descriptionGridLeft: {
    width: '100%',
    minHeight: '20vh',
  },
  descriptionGridLeftContent: {
    textAlign: 'left',
    color: 'white',
    margin: '5% !important',
  },
  descriptionGridLeftDots: {
    marginTop: '16px !important',
  },
  descriptionGridRight: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionGridRightBox: {
    width: '125px',
    justifyContent: 'space-between',
  },
}));

export const descriptionBox = backgroundColor => ({
  width: '100%',
  backgroundColor: backgroundColor || '#353C69',
});

export const imageBox = (imageUrl, transition) => ({
  width: '100%',
  height: '70vh',
  backgroundImage: `url(${imageUrl})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  transition: transition ? transition : '1s cubic-bezier(1,1,0,0)',
});

export const descriptionGridRightBoxArrows = (
  backgroundColor = undefined,
  foregroundColor = undefined
) => ({
  boxShadow: 'none',
  border: backgroundColor
    ? `1px solid ${backgroundColor}`
    : '1px solid #D1B000',
  backgroundColor: 'transparent',
  color: backgroundColor || '#D1B000',
  '&:hover': {
    color: foregroundColor || '#ffffff',
    backgroundColor: backgroundColor || '#D1B000',
  },
});

export const activeDost = color => ({
  color: color ? color : '#D1B000',
});
