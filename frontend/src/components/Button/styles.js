import styled, { css } from 'styled-components'

const wrapperModifiers = {
  primary: (theme, textColor, palette, intensity, hover, pressed) => css`
    background-color: ${theme.colors[palette][intensity]};
    border-color: ${theme.colors[palette][intensity]};

    color: ${textColor === 'default'
      ? theme.colors['neutral'][100]
      : theme.colors[textColor][100]};

    > svg {
      path {
        fill: ${textColor === 'default'
          ? theme.colors['neutral'][100]
          : theme.colors[textColor][100]};
      }
    }

    &:hover {
      background-color: ${theme.colors[palette][hover]};
      border-color: ${theme.colors[palette][hover]};
    }

    &:focus,
    &:active {
      background-color: ${theme.colors[palette][pressed]};
      border-color: ${theme.colors[palette][pressed]};
      outline: none;
    }

    &:disabled {
      background-color: ${theme.colors.neutral[75]};
      border-color: ${theme.colors.neutral[75]};
      color: ${theme.colors.neutral[60]};

      > svg {
        path {
          fill: ${theme.colors.neutral[60]};
        }
      }
    }
  `,

  link: (theme, palette, textColor, intensity, hover) => css`
    padding: 0;
    background: transparent;
    outline: none;

    color: ${textColor === 'default'
      ? theme.colors[palette][100]
      : theme.colors[textColor][intensity]};

    > svg {
      path {
        fill: ${theme.colors[palette][100]};
      }
    }

    &:hover {
      color: ${theme.colors[palette][hover]};

      > svg {
        path {
          fill: ${theme.colors[palette][hover]};
        }
      }
    }

    &:focus,
    &:active {
      color: ${theme.colors[palette][60]};

      > svg {
        path {
          fill: ${theme.colors[palette][60]};
        }
      }
    }

    &:disabled {
      color: ${theme.colors.neutral[60]};

      > svg {
        path {
          fill: ${theme.colors.neutral[60]};
        }
      }
    }
  `,

  default: () => css`
    padding: 0;
    outline: none;
  `,

  // Paddings
  padds: (theme, icon, position, padding, paddingL) => css`
    padding-top: ${position === 'center'
      ? `calc(${theme.spacings[padding]} + 1px)`
      : `calc(${theme.spacings[padding]} - 1px)`};
    padding-bottom: ${position === 'center'
      ? `calc(${theme.spacings[padding]} + 1px)`
      : `calc(${theme.spacings[padding]} - 1px)`};

    padding-left: ${icon
      ? position === 'center'
        ? `calc(${theme.spacings[padding]} + 1px)`
        : position === 'left'
        ? `calc(${theme.spacings[padding]} + 1px)`
        : `calc(${theme.spacings[paddingL]} - 1px)`
      : `calc(${theme.spacings[paddingL]} - 1px)`};

    padding-right: ${icon
      ? position === 'center'
        ? `calc(${theme.spacings[padding]} + 1px)`
        : position === 'left'
        ? `calc(${theme.spacings[paddingL]} + 1px)`
        : `calc(${theme.spacings[padding]} - 1px)`
      : `calc(${theme.spacings[paddingL]} - 1px)`};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  iconLeft: (theme) => css`
    > svg {
      + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,

  iconRight: (theme) => css`
    flex-direction: row-reverse;

    > svg {
      + span {
        margin-right: ${theme.spacings.xxsmall};
      }
    }
  `,

  iconCenter: (theme) => css`
    > svg {
      + span {
        margin-right: ${theme.spacings.xsmall};
      }
    }
  `
}

export const Wrapper = styled.button`
  ${({
    theme,
    variant,
    textColor,
    palette,
    intensity,
    hover,
    pressed,
    size,
    spacing,
    icon,
    position,
    full
  }) => css`
    border: ${size !== 'link' || size !== 'default'
      ? `1px solid transparent`
      : 'none'};
    border-radius: ${size !== 'link' ? theme.border.radius : '0'};
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: ${theme.motion};
    margin-bottom: ${spacing ? theme.spacings[spacing] : 0};

    &:disabled {
      cursor: not-allowed;
    }

    ${!!variant &&
    size !== 'link' &&
    size !== 'default' &&
    wrapperModifiers[variant](
      theme,
      textColor,
      palette,
      intensity,
      hover,
      pressed
    )};

    ${!!full && wrapperModifiers.fullWidth()};
    ${position == 'left' && wrapperModifiers.iconLeft(theme)};
    ${position == 'right' && wrapperModifiers.iconRight(theme)};
    ${position == 'center' && wrapperModifiers.iconCenter(theme)};

    ${size === 'link' &&
    wrapperModifiers.link(theme, palette, textColor, intensity, hover)};

    ${size === 'default' && wrapperModifiers.default()};

    ${size === '' &&
    wrapperModifiers['padds'](theme, icon, position, 'small', 'xlarge')};

    ${size === 'thini' &&
    wrapperModifiers['padds'](theme, icon, position, 'xxsmall', 'medium')};

    ${size === 'medium' &&
    wrapperModifiers['padds'](theme, icon, position, 'xsmallM', 'medium')};
  `}
`
