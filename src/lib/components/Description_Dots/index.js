import React from 'react';
import { Box, Typography } from '@mui/material';
import { FiberManualRecord } from '@mui/icons-material';
import { activeDost, useStyles } from '../Slider.style';

export const DescriptionSection = ({
  sliderResource,
  activeIndex,
  dotColor,
}) => {
  const classes = useStyles();

  return (
    <Typography
      component='h6'
      variant='h6'
      sx={{ fontSize: '1rem', textAlign: 'justify' }}
      className={classes.descriptionGridLeftContent}
    >
      {sliderResource && sliderResource[activeIndex]?.description}
      <Box component='div' className={classes.descriptionGridLeftDots}>
        {sliderResource &&
          sliderResource.map((item, index) => (
            <FiberManualRecord
              sx={index === activeIndex && activeDost(dotColor)}
            />
          ))}
      </Box>
    </Typography>
  );
};
