'use strict'

import React from 'react'
import Counter from './index'
import { action, storiesOf } from '@kadira/storybook'

const stories = storiesOf('Counter', module)

stories.add('Counter', () => (
  <Counter
    counter={1}
    increment={action('increment')}
    decrement={action('decrement')}
  />
))
