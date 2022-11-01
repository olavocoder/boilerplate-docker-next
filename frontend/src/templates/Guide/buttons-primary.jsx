import Button from 'components/Button'
import { PlusIcon } from 'utils/icons'

export default function PrimaryButtons({ size }) {
  return (
    <div className="col">
      <strong className="subtitle">
        Botões primários ({size ? size : 'medium'})
      </strong>
      <br />

      <Button size={size} spacing="medium">
        Primary button
      </Button>

      <Button icon={<PlusIcon />} size={size} spacing="medium">
        Primary button
      </Button>

      <Button
        icon={<PlusIcon />}
        iconPosition="right"
        size={size}
        spacing="medium"
      >
        Primary button
      </Button>

      <Button icon={<PlusIcon />} size={size} spacing="medium"></Button>

      <Button
        palette="neutral"
        intensity="100"
        hover="85"
        pressed="offwhite"
        color="holding"
        size={size}
        spacing="medium"
      >
        Primary button
      </Button>

      <Button
        icon={<PlusIcon />}
        palette="neutral"
        intensity="100"
        hover="85"
        pressed="offwhite"
        color="holding"
        size={size}
        spacing="medium"
      >
        Primary button
      </Button>

      <Button
        icon={<PlusIcon />}
        palette="neutral"
        intensity="100"
        hover="85"
        pressed="offwhite"
        color="holding"
        iconPosition="right"
        size={size}
        spacing="medium"
      >
        Primary button
      </Button>

      <Button
        icon={<PlusIcon />}
        palette="neutral"
        intensity="100"
        hover="85"
        pressed="offwhite"
        color="holding"
        size={size}
        spacing="medium"
      ></Button>

      <Button size={size} disabled>
        Primary button
      </Button>
    </div>
  )
}
