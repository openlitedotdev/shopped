// import { IconsPlus } from './icons/icon-plus';

import PlusIcon from './icons/plus-icon';

interface StatCardProps {
  number: number;
  desciption: string;
}

export default function StatCars({ number, desciption }: StatCardProps) {
  return (
    <figure className='flex flex-col items-center'>
      <h4 className='font-semibold text-3xl flex items-center gap-2'>{ number } <PlusIcon /> </h4>
      <p className='text-default-300 text-sm'>{ desciption }</p>
    </figure>
  )
}