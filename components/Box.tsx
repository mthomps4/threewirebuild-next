import styled from '@emotion/styled';
import { color, ColorProps, layout, LayoutProps, space, SpaceProps, variant } from 'styled-system';

type ResponsiveValue<T> =
  | T
  | (T | null)[]
  | {
      [key: string]: T;
    };

export interface BoxStyleProps {
  variant?: ResponsiveValue<string>;
}

type BoxProps = ColorProps & LayoutProps & SpaceProps & BoxStyleProps;

const Box = styled('div')<BoxProps>(
  {
    boxSizing: 'border-box'
  },
  space,
  layout,
  color,
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
);

export default Box;
