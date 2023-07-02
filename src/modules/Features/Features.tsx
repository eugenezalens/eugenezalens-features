import { FC } from 'react'

import { Header, PageStructure } from '../common/components/page'
import { Link } from 'react-router-dom'
import { Tab } from '../common/components/elements'

const Features: FC = () => {
  return (
    <PageStructure
      header={
        <Header
          pageName={'FEATURES'}
          children={
            <Link to={'/'}>
              <Tab>Home</Tab>
            </Link>
          }
        />
      }
    />
  )
}

Features.displayName = 'FeaturesModule'

export default Features
