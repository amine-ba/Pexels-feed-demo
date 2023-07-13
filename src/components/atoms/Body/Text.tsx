import styled from 'styled-components/native';
import { TextProps as TextPropsBase } from 'react-native';
import theme from 'styles/theme';

export type FontWeight =
  | 'Light'
  | 'Regular'
  | 'Medium'
  | 'SemiBold'
  | 'Bold'
  | 'ExtraBold';

export type TextProps = TextPropsBase & {
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: FontWeight;
  color?: string;
  fontStyle?: 'normal' | 'italic';
  lineHeight?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
};

const Text = styled.Text<TextProps>`
  ${({ fontSize = 16 }) => `font-size : ${fontSize}px`};
  ${({ fontFamily = 'OpenSans', fontWeight = 'Bold' }) =>
    `font-family : ${fontFamily}-${fontWeight}`};
  ${({ fontStyle = 'normal' }) => `font-style : ${fontStyle}`};
  ${({ color = theme.colors.main.black }) => `color : ${color}`};
  ${({ lineHeight }) => (lineHeight ? `line-height : ${lineHeight}px` : '')};
  ${({ textAlign = 'auto' }) => `text-align : ${textAlign}`};
`;

export default Text;
