import { useClans } from '../hooks'
import { Outlet } from 'react-router-dom'

function App() {
  const { data: clans, isPending, isError } = useClans()

  if (isPending) return <p>Loading clans...</p>
  if (isError) return <h2>Clan database error</h2>

  console.log(clans)

  return (
    <>
      <header className="header">
        <h1>Warrior Clans of the Forest</h1>
      </header>
      <Outlet />
    </>
  )
}

export default App
