import React from 'react';
import styled from 'styled-components';
import { RecommendedConfiguration } from '../../../model/recommended-configuration';
import { SliderContentConfiguration } from '../../../model/slider-content-configuration';
import SliderIndividualStepper from './slider-individual-stepper';
import { device } from '../../../config/device';

const SteppersContainer = styled.article`
  margin: 3.75rem 0 3.75rem 0;

  @media ${device.large} {
    display: none;
  }
`;

const createStepper = (key: string, index: number, styles: SliderContentConfiguration, windowWidth: number) => {
  let productSelected = false;
  const lowerLimit = (windowWidth / 100) * styles.sliderContainerPadding + styles.imageMargin * 16 + styles.width / 2;
  const imageAndMarginWidth = styles.width + styles.imageMargin * 16;
  const minTranslatePositionForVisibleProduct = lowerLimit + (index - 1) * imageAndMarginWidth;
  const productIsMostVisible =
    styles.translateValue > minTranslatePositionForVisibleProduct &&
    styles.translateValue < minTranslatePositionForVisibleProduct + imageAndMarginWidth;

  if (productIsMostVisible) productSelected = true;
  return <SliderIndividualStepper chosen={productSelected} key={key + index} />;
};

const SliderSteppers = ({
  windowWidth,
  values,
  images,
}: {
  windowWidth: number;
  values: SliderContentConfiguration;
  images: Array<RecommendedConfiguration>;
}) => {
  return <SteppersContainer>{images && images.map((image, index) => createStepper(image.name, index, values, windowWidth))}</SteppersContainer>;
};

export default SliderSteppers;
