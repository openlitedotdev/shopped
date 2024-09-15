import StatCars from '@/components/stat-card'
import { Button } from '@openlite/ui'
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
    <section className="relative grid grid-cols-1 gap-5 rounded-3xl bg-default-50 px-5 pt-5 lg:grid-cols-2 lg:px-10">
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
      <div className="px-5 md:pt-5">
        <img
          src="/heroImage.webp"
          alt="Imagen del hero"
          className="container m-auto aspect-auto"
          loading="lazy"
        />
      </div>
    </section>
  )
}
