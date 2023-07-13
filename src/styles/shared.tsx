import styled from 'styled-components/native';
import { FlexStyle } from 'react-native';
import theme from './theme';

export enum SpacingType {
  s1 = 's1',
  s2 = 's2',
  s3 = 's3',
  s4 = 's4',
}

export interface SpacingContainerProps {
  mLeft?: SpacingType;
  mRight?: SpacingType;
  mTop?: SpacingType;
  mBottom?: SpacingType;
  mVertical?: SpacingType;
  mHorizontal?: SpacingType;
  mAll?: SpacingType;
  theme: any;
  align?: 'center' | 'flex-end' | 'flex-start';
  height?: FlexStyle['height'];
  width?: FlexStyle['width'];
  justify?:
    | 'center'
    | 'space-between'
    | 'space-evenly'
    | 'flex-end'
    | 'flex-start';
  bgColor?: any;
}

const generateMargins = (props: SpacingContainerProps) => {
  let top = '0px';
  if (props.mAll) {
    top = theme.spacing[props.mAll];
  } else if (props.mVertical) {
    top = theme.spacing[props.mVertical];
  } else if (props.mTop) {
    top = theme.spacing[props.mTop];
  }

  let bottom = '0px';

  if (props.mAll) {
    bottom = theme.spacing[props.mAll];
  } else if (props.mVertical) {
    bottom = theme.spacing[props.mVertical];
  } else if (props.mBottom) {
    bottom = theme.spacing[props.mBottom];
  }

  let left = '0px';

  if (props.mAll) {
    left = theme.spacing[props.mAll];
  } else if (props.mHorizontal) {
    left = theme.spacing[props.mHorizontal];
  } else if (props.mLeft) {
    left = theme.spacing[props.mLeft] || props.mLeft;
  }

  let right = '0px';

  if (props.mAll) {
    right = theme.spacing[props.mAll];
  } else if (props.mHorizontal) {
    right = theme.spacing[props.mHorizontal];
  } else if (props.mRight) {
    right = theme.spacing[props.mRight] || props.mRight;
  }

  return `
          margin-left: ${left};
          margin-right: ${right};
          margin-top: ${top};
          margin-bottom: ${bottom};
          align-items: ${props.align};
          justify-content: ${props.justify};
          height: ${
            typeof props.height === 'number'
              ? props.height + 'px'
              : props.height
          };
          width: ${
            typeof props.width === 'number' ? props.width + 'px' : props.width
          };
      `;
};

export const SpacingContainer = styled.View<SpacingContainerProps>`
  ${props => generateMargins(props)};
`;

export const FlexSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;
