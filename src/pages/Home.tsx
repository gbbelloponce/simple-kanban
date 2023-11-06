import { FC } from 'react'

import { Kanban } from '../components/Kanban'

export const Home: FC = () => {
  return (
    <main className='h-full flex items-start justify-center mt-24'>
      <Kanban />
    </main>
  )
}
