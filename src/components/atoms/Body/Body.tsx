import React from 'react';
import Text, { TextProps } from './Text';

export type ICustomBodyTextProps = Omit<TextProps, 'fontSize'>;

const B24 = ({ children, ...props }: ICustomBodyTextProps) => {
  return (
    <Text {...props} fontSize={24}>
      {children}
    </Text>
  );
};

export { B24 };
