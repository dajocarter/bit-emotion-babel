import React from 'react'
import { shallow } from 'enzyme'

import Spinner from '../src/index.js'

it('renders without props', () => {
  shallow(<Spinner />)
})
