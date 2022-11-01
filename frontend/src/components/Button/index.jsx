import React from 'react'

import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import * as S from './styles'

const Button = ({
  children,
  icon,
  variant,
  fullWidth,
  iconPosition,
  href,
  route,
  size,
  type,
  palette,
  intensity,
  hover,
  pressed,
  color,
  spacing,
  ...props
}) => {
  const router = useRouter()

  const handleClick = (e, url) => {
    e.preventDefault()
    router.push(url)
  }

  return (
    <S.Wrapper
      variant={variant}
      palette={palette}
      hover={hover}
      pressed={pressed}
      intensity={intensity}
      textColor={color}
      size={size}
      type={type}
      spacing={spacing}
      icon={icon ? true : false}
      position={children ? iconPosition : 'center'}
      {...props}
      {...(href && {
        href,
        as: 'a',
        role: 'link'
      })}
      {...(route && {
        onClick: (e) => handleClick(e, href)
      })}
      {...(fullWidth && {
        full: fullWidth
      })}
    >
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.node,
    PropTypes.elementType
  ]),
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'default']),
  palette: PropTypes.string,
  intensity: PropTypes.string,
  hover: PropTypes.string,
  pressed: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['', 'thini', 'medium', 'link']),
  spacing: PropTypes.oneOf([
    '',
    'xxsmall',
    'xsmallM',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge'
  ]),
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  iconPosition: PropTypes.oneOf(['', 'left', 'right', 'center']),
  type: PropTypes.string
}

Button.defaultProps = {
  children: '',
  icon: '',
  size: '', // Define a altura do botão
  variant: 'primary', // Define o design do botão
  palette: 'holding', // Define qual a paleta de cores vai ser utilizada
  intensity: '100', // pode ser utilizado nomenclaturas de cores (darknes, base...)
  hover: '75', // pode ser utilizado nomenclaturas de cores (darknes, base...)
  pressed: '85', // pode ser utilizado nomenclaturas de cores (darknes, base...)
  color: 'default', // cor da fonte, por padrão a cor branca, mas pode ser setado da mesma forma que pallete
  spacing: '', // O valor setado deve ser o mesmo de themes.spacings
  fullWidth: false,
  href: '',
  iconPosition: 'left',
  type: 'button'
}

export default Button
