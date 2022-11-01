import Button from 'components/Button'
import { PlusIcon } from 'utils/icons'

export default function SecondaryButtons({ size }) {
  return (
    <div className="col">
      <strong className="subtitle">
        Botões Secundários ({size ? size : 'medium'})
      </strong>
      <br />
      <Button variant="secondary" size={size} spacing="medium">
        Secondary button
      </Button>

      <Button
        icon={<PlusIcon />}
        variant="secondary"
        size={size}
        spacing="medium"
      >
        Secondary button
      </Button>

      <Button
        icon={<PlusIcon />}
        variant="secondary"
        iconPosition="right"
        size={size}
        spacing="medium"
      >
        Secondary button
      </Button>

      <Button
        icon={<PlusIcon />}
        variant="secondary"
        size={size}
        spacing="medium"
      ></Button>

      <Button
        variant="secondary"
        size={size}
        palette="neutral"
        intensity="100"
        spacing="medium"
      >
        Secondary button
      </Button>

      <Button
        icon={<PlusIcon />}
        variant="secondary"
        size={size}
        palette="neutral"
        intensity="100"
        spacing="medium"
      >
        Secondary button
      </Button>

      <Button
        icon={<PlusIcon />}
        variant="secondary"
        iconPosition="right"
        size={size}
        palette="neutral"
        intensity="100"
        spacing="medium"
      >
        Secondary button
      </Button>

      <Button
        icon={<PlusIcon />}
        variant="secondary"
        size={size}
        palette="neutral"
        intensity="100"
        spacing="medium"
      ></Button>

      <Button variant="secondary" size={size} disabled>
        Secondary button
      </Button>
    </div>
  )
}
