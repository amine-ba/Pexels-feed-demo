import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import theme from 'styles/theme';

interface ImageProps {
  aspectRatio: number;
}

export const Image = styled(FastImage)<ImageProps>`
  width: 100%;
  border-radius: ${theme.radius.s3};
  aspect-ratio: ${props => props.aspectRatio};
`;

export const ImageBox = styled.Pressable`
  padding-horizontal: ${theme.spacing.s2};
  margin-bottom: ${theme.spacing.s8};
  shadow-color: ${theme.colors.main.gray_100};
  shadow-offset: {
    width: -${theme.spacing.s1};
    height: ${theme.spacing.s1};
  }
  shadow-opacity: 0.3;
  shadow-radius: ${theme.radius.s3};
`;
