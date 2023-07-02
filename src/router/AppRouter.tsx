import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { EAppRoute } from '../routes'
import { Features, Home } from '../modules'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route
        path={'/'}
        element={<Home />}
      />

      <Route
        path={EAppRoute.Features}
        element={<Features />}
      />
    </Routes>
  )
}

AppRouter.displayName = 'AppRouter'

export default AppRouter
