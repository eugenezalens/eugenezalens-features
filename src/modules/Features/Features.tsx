import { FC, useMemo } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { Header, PageStructure } from '../common/components/page'
import { Tab } from '../common/components/elements'
import { EAppRoute } from '../../routes'

const Features: FC = () => {
  const subsectionList = useMemo(() => {
    return [{ title: 'FEATURES', link: EAppRoute.Features, isDisabled: true }]
  }, [])

  return (
    <PageStructure
      header={
        <Header
          subsectionList={subsectionList}
          children={
            <Link to={EAppRoute.FeaturesComparisonTable}>
              <Tab>Comparison table</Tab>
            </Link>
          }
        />
      }
      content={<Outlet />}
    />
  )
}

Features.displayName = 'FeaturesModule'

export default Features
