import React, { useState } from 'react';
import { Paper, Box, Grid } from '@mui/material';

import { data } from './sliderData';
import { useStyles, imageBox, descriptionBox } from './Slider.style';
import { DescriptionSection } from './Description_Dots';
import { ArrowsHandler } from './Arrows_Handler';

const Slider = ({
  sliderResource,
  backgroundColor,
  dotColor,
  arrowsColor,
  arrowHoverColor,
  imageHeight,
  imageTransition,
  size,
}) => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    if (sliderResource) {
      if (activeIndex === 0) setActiveIndex(sliderResource.length - 1);
      else setActiveIndex(activeIndex => activeIndex - 1);
    } else {
      if (activeIndex === 0) setActiveIndex(data.length - 1);
      else setActiveIndex(activeIndex => activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (sliderResource) {
      if (activeIndex === sliderResource.length - 1) setActiveIndex(0);
      else setActiveIndex(activeIndex => activeIndex + 1);
    } else {
      if (activeIndex === data.length - 1) setActiveIndex(0);
      else setActiveIndex(activeIndex => activeIndex + 1);
    }
  };

  return (
    <Paper sx={{ backgroundColor: backgroundColor || '#353C69' }}>
      <Box
        component='div'
        sx={
          sliderResource
            ? imageBox(
                sliderResource[activeIndex]?.image,
                imageTransition || '',
                imageHeight || '50vh'
              )
            : imageBox(
                data[activeIndex].image,
                imageTransition || '',
                imageHeight || '50vh'
              )
        }
      />
      <Box component='div' sx={descriptionBox(backgroundColor)}>
        <DescriptionSection
          sliderResource={sliderResource}
          activeIndex={activeIndex}
          dotColor={dotColor}
        />

        <ArrowsHandler
          arrowHoverColor={arrowHoverColor}
          size={size}
          arrowsColor={arrowsColor}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      </Box>
    </Paper>
  );
};

export default Slider;
