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

export interface ContainerStyleProps {
  variant?: ResponsiveValue<string>;
  centerContent?: Boolean;
  red?: Boolean;
}

export type ContainerProps = ContainerStyleProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  GridProps &
  FlexboxProps &
  BackgroundProps &
  BorderProps &
  PositionProps;

const applyBoolStyles = ({ centerContent, red }: ContainerStyleProps) => {
  let styles = '';
  if (centerContent) styles = styles + 'display: flex; justify-content: center; align-items: center;';
  if (red) styles = styles + 'background: red;';
  return styles;
};

const Container = styled.div<ContainerProps>`
    ${`box-sizing: 'border-box';`}
    ${props => applyBoolStyles(props)}
    /* Componsed From Styled-System */
    ${compose(
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
    )}
`;

Container.defaultProps = {};

export default Container;
