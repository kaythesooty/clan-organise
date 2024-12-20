import { ChangeEvent, FormEvent, useState } from 'react'
import { Loner } from '../../models/cats'

interface Props {
  name: string
  moons: number
  rank: string
  onSubmit: (_: Loner) => void
}

export function EditCatForm({ name, moons, rank, onSubmit }: Props) {
  const [formState, setFormState] = useState({
    name,
    moons,
    rank,
  })

  console.log(formState)

  const handleChange = (
    evt: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = evt.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    onSubmit(formState)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{' '}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formState.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Rank:{' '}
          <input
            type="text"
            id="rank"
            name="rank"
            placeholder="Rank"
            value={formState.rank}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Moons:{' '}
          <input
            type="number"
            id="moons"
            name="moons"
            max={512}
            min={0}
            value={formState.moons}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Done</button>
      </form>
    </div>
  )
}
