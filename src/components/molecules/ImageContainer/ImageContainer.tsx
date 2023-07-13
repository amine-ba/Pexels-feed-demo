import React, { useMemo } from 'react';
import { Body } from 'components/atoms';
import { Photo } from 'pexels';
import FastImage from 'react-native-fast-image';
import { Image, ImageBox } from './ImageContainer.styles';
import { AppStacks, useMainNavigation } from 'navigation/screens';
import { SpacingContainer, SpacingType } from 'styles/shared';

interface ImageContainerProps {
  photo: Photo;
}

const ImageContainer = ({ photo }: ImageContainerProps) => {
  const navigation = useMainNavigation();
  const aspectRatio = useMemo(() => photo.height / photo.width, [photo]);

  return (
    <ImageBox
      onPress={() => navigation.navigate(AppStacks.ImageDetails, { photo })}>
      <Image
        source={{
          uri: photo.src.medium,
          cache: FastImage.cacheControl.immutable,
        }}
        resizeMode={FastImage.resizeMode.cover}
        aspectRatio={aspectRatio}
      />
      <SpacingContainer mBottom={SpacingType.s4} />
      <Body.B24>{photo.photographer}</Body.B24>
    </ImageBox>
  );
};

export default ImageContainer;
