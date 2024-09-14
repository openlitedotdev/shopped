// import { IconsPlus } from './icons/icon-plus';

import PlusIcon from './icons/plus-icon'

interface StatCardProps {
  number: number
  desciption: string
}

export default function StatCars({ number, desciption }: StatCardProps) {
  return (
    <figure className="flex flex-col items-center">
      <h4 className="flex items-center gap-2 text-3xl font-semibold">
        {number} <PlusIcon />{' '}
      </h4>
      <p className="text-sm text-default-300">{desciption}</p>
    </figure>
  )
}
