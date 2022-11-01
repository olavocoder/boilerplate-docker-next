import { render } from 'utils/test-utils'

import Base from '.'

describe('<Base />', () => {
  it('should render the heading', () => {
    render(
      <Base>
        <h1>base</h1>
      </Base>
    )
  })
})
