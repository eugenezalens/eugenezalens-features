import { IComparisonTableConfig } from '../../../../../common/features/ComparisonTable/models/configs'

const ComparisonTableSampleConfig: IComparisonTableConfig = {
  id: 'sample',
  name: 'sample',
  headerConfig: {
    autoRenderConfig: {
      preset: 'dashed',
    },
  },
  columnConfigList: [
    {
      id: 'main',
      width: '269px',
      isFixed: true,
      autoRenderConfig: {
        preset: 'default',
      },
    },
    {
      id: 'plan',
      width: '1fr',
      isFixed: true,
      autoRenderConfig: {
        preset: 'secondary',
        name: 'Plan',
      },
    },
    {
      id: 'fact',
      width: '1fr',
      isFixed: true,
      autoRenderConfig: {
        preset: 'secondary',
        name: 'Fact',
      },
    },
    {
      id: 'deviations',
      width: '1fr',
      isFixed: true,
      autoRenderConfig: {
        preset: 'secondary',
        name: 'Deviations',
      },
    },
  ],
  rowsGroupConfigList: [
    {
      id: 'first',
      rowConfigList: [
        {
          id: 'planStartDate',
          autoRenderConfig: {
            name: 'Plan start date',
            preset: 'default',
          },
        },
        {
          id: 'planEndDate',
          autoRenderConfig: {
            name: 'Plan end date',
            preset: 'default',
          },
        },
        {
          id: 'phenophaseStart',
          autoRenderConfig: {
            name: 'Phenophase start',
            preset: 'default',
          },
        },
        {
          id: 'phenophaseEnd',
          autoRenderConfig: {
            name: 'Phenophase end',
            preset: 'default',
          },
        },
        {
          id: 'servicePricePerArea',
          autoRenderConfig: {
            name: 'Service price per area',
            preset: 'default',
          },
        },
      ],
      autoRenderConfig: {
        preset: 'cleared',
      },
    },
  ],
}

export default ComparisonTableSampleConfig
