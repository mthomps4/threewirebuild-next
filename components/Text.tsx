import styled from '@emotion/styled';
import { color, ColorProps, compose, space, SpaceProps, typography, TypographyProps } from 'styled-system';
import { ThemeProps } from '../theme';

export interface TextBooleanProps {
  // theme is passed as a prop from ThemeProvider via App
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

  if (success && theme) return `color: ${theme.colors.success};`;
  if (info && theme) return `color: ${theme.colors.info};`;
  if (warning && theme) return `color: ${theme.colors.warning};`;
  if (danger && theme) return `color: ${theme.colors.danger};`;
  if (primary && theme) return `color: ${theme.colors.primary}`;
  if (secondary && theme) return `color: ${theme.colors.secondary}`;

  if (successBox && theme)
    return `color: ${theme.colors.success}; background-color: ${theme.bg.success}; padding: 1em; margin-bottom: 1em;`;
  if (infoBox && theme)
    return `color: ${theme.colors.info}; background-color: ${theme.bg.info}; padding: 1em; margin-bottom: 1em;`;
  if (warningBox && theme)
    return `color: ${theme.colors.warning}; background-color: ${theme.bg.warning}; padding: 1em; margin-bottom: 1em;`;
  if (dangerBox && theme)
    return `color: ${theme.colors.danger}; background-color: ${theme.bg.danger}; padding: 1em; margin-bottom: 1em;`;
  return;
};

const Text = styled('div')<TextProps>(
  applyBoolStyles,
  compose(
    space,
    color,
    typography
  )
);

Text.defaultProps = {};

export default Text;
