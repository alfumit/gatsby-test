import React from 'react'
import { stroiesOf } from '@storybook/react'

import Header from '../src/components/header'

storiesOf('Header', module).add('default', () => <Header setTitle="Test" />)
