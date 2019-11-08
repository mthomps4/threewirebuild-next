import styled from '@emotion/styled';
import { color, ColorProps, compose, space, SpaceProps, TypographyProps, variant } from 'styled-system';
import { ThemeProps } from '../theme';

export interface TextBooleanProps {
  theme?: ThemeProps;
  success?: Boolean;
  info?: Boolean;
  warning?: Boolean;
  danger?: Boolean;
  primary?: Boolean;
  secondary?: Boolean;
  successBox?: Boolean;
  infoBox?: Boolean;
  warningBox?: Boolean;
  dangerBox?: Boolean;
}

export type TextProps = TextBooleanProps & ColorProps & TypographyProps & SpaceProps;

const applyBoolStyles = (props: TextBooleanProps) => {
  const {
    success,
    info,
    warning,
    danger,
    primary,
    secondary,
    theme,
    successBox,
    infoBox,
    warningBox,
    dangerBox
  } = props;

  if (success) return 'color: green';
  if (info) return 'color: blue';
  if (warning) return 'color: orange';
  if (danger) return 'color: red;';
  if (primary && theme) return `color: ${theme.colors.primary}`;
  if (secondary && theme) return `color: ${theme.colors.secondary}`;

  if (successBox) return 'color: green; background-color: lime;';
  if (infoBox) return 'color: blue; background-color: cyan;';
  if (warningBox) return 'color: red; background-color: orange;';
  if (dangerBox) return 'color: maroon; background-color: red;';
};

const Text = styled('div')<TextProps>(
  {
    boxSizing: 'border-box'
  },
  applyBoolStyles,
  compose(
    space,
    color,
    variant({
      variants: {
        dark: {
          backgroundColor: 'black',
          color: 'white'
        }
      }
    })
  )
);

Text.defaultProps = {};

export default Text;
