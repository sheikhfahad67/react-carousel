import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  descriptionGridLeft: {
    width: '100%',
    minHeight: '20vh',
  },
  descriptionGridLeftContent: {
    textAlign: 'left',
    color: 'white',
    paddingTop: '1rem',
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
    width: '7.813rem',
    gap: '1rem',
    justifyContent: 'space-between',
  },
}));

export const descriptionBox = backgroundColor => ({
  backgroundColor: backgroundColor || '#353C69',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '95%',
  gap: '1rem',
  margin: 'auto',
});

export const imageBox = (imageUrl, transition, height) => ({
  width: '100%',
  height: height,
  backgroundImage: `url(${imageUrl})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  transition: transition ? transition : '1s cubic-bezier(1,1,0,0)',
});

export const descriptionGridRightBoxArrows = (
  backgroundColor = undefined,
  foregroundColor = undefined,
  size = { height: 3.5, width: 3.5 }
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
  height: `${size?.height}rem`,
  width: `${size?.width}rem`,
});

export const activeDost = color => ({
  color: color ? color : '#D1B000',
});
