import { FC } from 'react'

import { Kanban } from '../components/Kanban'

export const Home: FC = () => {
  return (
    <main className='h-full pt-24 flex items-stretch justify-center'>
      <Kanban />
    </main>
  )
}
