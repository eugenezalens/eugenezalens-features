import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { EAppRoute } from '../routes'
import { Features, Home } from '../modules'
import { ComparisonTableSample } from '../modules/Features/modules'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route
        path={EAppRoute.Home}
        element={<Home />}
      />

      <Route
        path={EAppRoute.Features}
        element={<Features />}
      />

      <Route
        path={EAppRoute.FeaturesComparisonTable}
        element={<ComparisonTableSample />}
      />
    </Routes>
  )
}

AppRouter.displayName = 'AppRouter'

export default AppRouter
