import { FC } from 'react'

import { Header, PageStructure } from '../common/components/page'
import { Link } from 'react-router-dom'
import { EAppRoute } from '../../routes'
import { Tab } from '../common/components/elements'

const Home: FC = () => {
  return (
    <PageStructure
      header={
        <Header pageName={'HOME'}>
          <Link to={EAppRoute.Features}>
            <Tab>Features</Tab>
          </Link>
        </Header>
      }
    />
  )
}

Home.displayName = 'HomeModule'

export default Home
