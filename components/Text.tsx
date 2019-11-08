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

  if (successBox) return 'color: green; background-color: lime; padding: 1em; margin-bottom: 1em;';
  if (infoBox) return 'color: blue; background-color: cyan; padding: 1em; margin-bottom: 1em;';
  if (warningBox) return 'color: red; background-color: orange; padding: 1em; margin-bottom: 1em;';
  if (dangerBox) return 'color: maroon; background-color: red; padding: 1em; margin-bottom: 1em;';
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
