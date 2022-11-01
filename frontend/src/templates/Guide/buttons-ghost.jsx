import Button from 'components/Button'
import { PlusIcon } from 'utils/icons'

export default function GhostButtons({ size }) {
  return (
    <div className="col">
      <strong className="subtitle">
        Botões Ghost ({size ? size : 'medium'})
      </strong>
      <br />
      <Button variant="ghost" intensity="70" size={size} spacing="medium">
        Ghost button
      </Button>
      <Button icon={<PlusIcon />} variant="ghost" size={size} spacing="medium">
        Ghost button
      </Button>
      <Button
        icon={<PlusIcon />}
        variant="ghost"
        size={size}
        iconPosition="right"
        spacing="medium"
      >
        Ghost button
      </Button>
      <Button
        icon={<PlusIcon />}
        variant="ghost"
        size={size}
        spacing="medium"
      />

      <Button variant="ghost" palette="neutral" size={size} spacing="medium">
        Ghost button
      </Button>
      <Button
        icon={<PlusIcon />}
        variant="ghost"
        palette="neutral"
        size={size}
        spacing="medium"
      >
        Ghost button
      </Button>
      <Button
        icon={<PlusIcon />}
        variant="ghost"
        palette="neutral"
        size={size}
        iconPosition="right"
        spacing="medium"
      >
        Ghost button
      </Button>
      <Button
        icon={<PlusIcon />}
        variant="ghost"
        palette="neutral"
        size={size}
        spacing="medium"
      />
      <Button disabled size={size} palette="neutral" variant="ghost">
        Ghost button
      </Button>
    </div>
  )
}
