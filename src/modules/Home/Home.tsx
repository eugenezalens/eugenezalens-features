import { FC, useMemo } from 'react'
import { Link } from 'react-router-dom'

import { Header, PageStructure } from '../common/components/page'
import { EAppRoute } from '../../routes'
import { Tab } from '../common/components/elements'

const Home: FC = () => {
  const subsectionList = useMemo(() => {
    return [{ title: 'HOME', link: EAppRoute.Home, isDisabled: true }]
  }, [])

  return (
    <PageStructure
      header={
        <Header subsectionList={subsectionList}>
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
