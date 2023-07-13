import React from 'react';
import ImageContainer from 'components/molecules/ImageContainer/ImageContainer';
import { RouteProp, useRoute } from '@react-navigation/native';
import { AppStackParamList, AppStacks } from 'navigation/screens';
import { SpacingContainer, SpacingType } from 'styles/shared';

type ImageDetailsScreenRootProps = RouteProp<
  AppStackParamList,
  AppStacks.ImageDetails
>;

const ImageDetails = () => {
  const {
    params: { photo },
  } = useRoute<ImageDetailsScreenRootProps>();

  return (
    <SpacingContainer mTop={SpacingType.s4}>
      <ImageContainer photo={photo} />
    </SpacingContainer>
  );
};

export default ImageDetails;
