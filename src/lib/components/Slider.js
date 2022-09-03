import React, { useCallback, useEffect, useState } from 'react';
import { Paper, Box } from '@mui/material';

import { data } from './sliderData';
import { imageBox, descriptionBox } from './Slider.style';
import { DescriptionSection } from './Description_Dots';
import { ArrowsHandler } from './Arrows_Handler';
import ImageViewer from 'react-simple-image-viewer';

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
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [imageList, setImageList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (sliderResource && Object.keys(sliderResource).length > 0) {
      const images = sliderResource?.map(image => image?.image);
      setImageList(images);
    }
  }, [sliderResource]);

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

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
        onClick={() => openImageViewer(activeIndex)}
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
      {isViewerOpen && (
        <ImageViewer
          src={imageList}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </Paper>
  );
};

export default Slider;
