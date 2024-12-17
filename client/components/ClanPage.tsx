import { Link, useParams } from 'react-router-dom'
import { useClanCats } from '../hooks'
import { EditCatForm } from './CatChangeForm'
import { useState } from 'react'
import { Cat, CatData, Loner } from '../../models/cats'

export function ClanPage() {
  const { clan } = useParams()
  const clanCats = useClanCats(clan as string)
  const [add, setAdd] = useState(false)

  const { data: cats, isPending, isError } = clanCats
  if (isPending) return <p>Loading cats...</p>
  if (isError) return <p>Database Error</p>

  const toggleAdd = () => {
    setAdd(!add)
  }

  const handleSubmit = async (update: Loner) => {
    console.log('yes')
    const newCat = { ...update, clan }
    await clanCats.add.mutateAsync(newCat)
    setAdd(false)
  }

  return (
    <main>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            <Link to={String(cat.id)}>{`${cat.name}: ${cat.rank}`}</Link>
          </li>
        ))}
      </ul>
      <button onClick={toggleAdd}>Add Cat</button>
      {add && <EditCatForm name="" moons={0} rank="" onSubmit={handleSubmit} />}
    </main>
  )
}
