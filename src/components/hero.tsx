import StatCars from '@/components/stat-card'
import { Button } from '@openlite/ui'
import { Suspense, lazy } from 'react'

const LazyHeroImage = lazy(() => import('./hero-image.lazy'))

const StatCard = [
  {
    number: 200,
    description: 'International Brands',
  },
  {
    number: 2000,
    description: 'High-Quality Products',
  },
  {
    number: 30000,
    description: 'Happy Customers',
  },
]

export default function Hero() {
  return (
    <section className="relative grid grid-cols-1 gap-5 space-x-4 rounded-3xl bg-default-50 px-5 pt-5 lg:grid-cols-2 lg:px-10">
      <div className="flex flex-col justify-center gap-7">
        <h1 className="space text-3xl font-bold sm:text-4xl lg:w-10/12 xl:text-6xl">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-md sm:text-2xl md:text-base xl:text-xl">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button rippleColor="light" rounded="full" className="px-10 md:w-fit">
          Shop Now
        </Button>
        <article className="grid grid-cols-2 items-start gap-5 md:grid-cols-3 [&>figure:last-child]:col-span-2 [&>figure:last-child]:m-auto md:[&>figure:last-child]:col-span-1">
          {StatCard.map((stat, index) => (
            <StatCars
              key={index}
              number={stat.number}
              desciption={stat.description}
            />
          ))}
        </article>
      </div>
        <Suspense fallback={<SuspenseHeroImage />}>
      <LazyHeroImage />
      </Suspense>
    </section>
  )
}

function SuspenseHeroImage() {
  return (
   <div className="relative aspect-video w-full h-[478px] bg-gray-200 animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
      </div>
  )
}
