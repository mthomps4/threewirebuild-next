import styled from '@emotion/styled';
import {
  BackgroundColorProps,
  BackgroundProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps
} from 'styled-system';

type BoxProps = ColorProps & BackgroundProps & BackgroundColorProps & LayoutProps & SpaceProps;

const Box = styled('div')<BoxProps>(
  {
    boxSizing: 'border-box'
  },
  space,
  layout,
  color
);

export default Box;
