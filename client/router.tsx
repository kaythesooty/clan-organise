import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import { Clans } from './components/Clans'
import { ClanPage } from './components/ClanPage'
import { CatPage } from './components/Cat'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Clans />} />
      <Route path="/:clan" element={<ClanPage />} />
      <Route path="/:clan/:id" element={<CatPage />} />
    </Route>,
  ),
)

export default router
