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
    <Paper>
      <Box
        component='div'
        sx={
          sliderResource
            ? imageBox(sliderResource[activeIndex]?.image)
            : imageBox(data[activeIndex].image)
        }
      />
      <Box component='div' sx={descriptionBox(backgroundColor)}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={10}
            md={10}
            lg={10}
            className={classes.descriptionGridLeft}
          >
            <DescriptionSection
              sliderResource={sliderResource}
              activeIndex={activeIndex}
              dotColor={dotColor}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={2}
            md={2}
            lg={2}
            className={classes.descriptionGridRight}
          >
            <ArrowsHandler
              arrowHoverColor={arrowHoverColor}
              arrowsColor={arrowsColor}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Slider;
