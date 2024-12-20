import { useNavigate, useParams } from 'react-router-dom'
import { useCat } from '../hooks'
import { useState } from 'react'
import { Cat, Loner } from '../../models/cats'
import { EditCatForm } from './CatChangeForm'

export function CatPage() {
  const { clan, id } = useParams()
  const cat = useCat(Number(id))
  const navigate = useNavigate()
  const [edit, setEdit] = useState(false)

  if (cat.isPending) return <p>Loading...</p>
  if (cat.isError) return <p>Error</p>

  const handleDelete = () => {
    cat.delete.mutate(Number(id))
    navigate(`/${clan}`)
  }

  const flipEdit = () => {
    setEdit(!edit)
    // console.log('fipp')
  }

  const handleSubmit = async (update: Loner) => {
    console.log('yes')
    const newCat: Cat = { ...update, id: cat.data.id, clanId: cat.data.clanId }
    await cat.update.mutateAsync(newCat)
    setEdit(false)
  }

  return (
    <main>
      <h2>{cat.data.name}</h2>
      <h3>{cat.data.rank}</h3>
      <p>{`${cat.data.moons} moons`}</p>
      <button onClick={flipEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      {edit ? (
        <EditCatForm
          name={cat.data.name}
          moons={cat.data.moons}
          rank={cat.data.rank}
          onSubmit={handleSubmit}
        />
      ) : null}
    </main>
  )
}
