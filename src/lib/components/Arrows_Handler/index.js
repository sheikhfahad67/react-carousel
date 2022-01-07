import { Box, Fab } from '@mui/material';
import {
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
} from '@mui/icons-material';
import { useStyles, descriptionGridRightBoxArrows } from './Slider.style';
import React from 'react';

export const ArrowsHandler = ({
  arrowsColor,
  arrowHoverColor,
  handlePrevious,
  handleNext,
}) => {
  const classes = useStyles();
  return (
    <Box display='flex' className={classes.descriptionGridRightBox}>
      <Fab
        aria-label='arrowLeft'
        sx={descriptionGridRightBoxArrows(arrowsColor, arrowHoverColor)}
        onClick={handlePrevious}
      >
        <ArrowLeftIcon />
      </Fab>
      <Fab
        aria-label='arrowRight'
        sx={descriptionGridRightBoxArrows(arrowsColor, arrowHoverColor)}
        onClick={handleNext}
      >
        <ArrowRightIcon />
      </Fab>
    </Box>
  );
};
