import styled from '@emotion/styled';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  variant
} from 'styled-system';

type ResponsiveValue<T> =
  | T
  | (T | null)[]
  | {
      [key: string]: T;
    };

export interface BoxStyleProps {
  variant?: ResponsiveValue<string>;
}

type BoxProps = BoxStyleProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  GridProps &
  FlexboxProps &
  BackgroundProps &
  BorderProps &
  PositionProps;

const Box = styled('div')<BoxProps>(
  {
    boxSizing: 'border-box'
  },
  compose(
    space,
    layout,
    color,
    background,
    border,
    position,
    flexbox,
    grid,
    variant({
      variants: {
        row: {
          display: 'flex',
          flexDirection: 'row'
        },
        column: {
          display: 'flex',
          flexDirection: 'column'
        }
      }
    })
  )
);

export default Box;
