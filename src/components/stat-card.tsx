import PlusIcon from './icons/plus-icon'

interface StatCardProps {
  number: number
  desciption: string
}

export default function StatCars({ number, desciption }: StatCardProps) {
  return (
    <figure className="flex h-full flex-col items-center lg:items-start lg:justify-start">
      <h4 className="flex items-center gap-2 text-4xl font-semibold sm:text-5xl">
        { number } <PlusIcon className="size-8" />
      </h4>
      <p className="text-sm text-default-300 xl:text-base">{ desciption }</p>
    </figure>
  )
}
