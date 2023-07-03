import { FC, useEffect, useMemo } from 'react'

import { Header, PageStructure } from '../../../common/components/page'
import { EAppRoute } from '../../../../routes'
import { Container } from '../../../common/components/elements'
import { ComparisonTable } from '../../../common/features'
import { useComparisonTable } from '../../../common/features/ComparisonTable/hooks'
import { ComparisonTableSampleConfig } from './configs/ComparisonTableSampleConfig'

const ComparisonTableSample: FC = () => {
  const { initiateTable } = useComparisonTable()

  useEffect(() => {
    initiateTable(ComparisonTableSampleConfig)
  }, [])

  const subsectionList = useMemo(() => {
    return [
      { title: 'FEATURES', link: EAppRoute.Features },
      { title: 'COMPARISON TABLE', link: EAppRoute.FeaturesComparisonTable, isDisabled: true },
    ]
  }, [])

  return (
    <PageStructure
      header={<Header subsectionList={subsectionList} />}
      content={
        <Container title={'COMPARISON TABLE'}>
          <ComparisonTable
            builderId={ComparisonTableSampleConfig.id}
            tableName={ComparisonTableSampleConfig.id}
            options={{ isClearStoreOnUnmount: true }}
          />
        </Container>
      }
    />
  )
}

ComparisonTableSample.displayName = 'ComparisonTableSample'

export default ComparisonTableSample
