import { Link } from 'react-router-dom'
import { useClans } from '../hooks'

export function Clans() {
  const { data: clans, isPending, isError } = useClans()

  if (isPending) return <p>Loading clans...</p>
  if (isError) return <h2>Clan database error</h2>

  return (
    <main>
      <ul>
        {clans.map((clan) => (
          <li key={clan.id}>
            <Link to={`${clan.name.toLowerCase()}`}>{clan.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
