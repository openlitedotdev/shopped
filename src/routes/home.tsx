import BannerMark from '@/components/banners/banner-mark'
import StatCars from '@/components/stat-card'
import { Button } from '@openlite/ui'
const StatCard = [
  {
    number: 200,
    description: 'International Brands'
  },
  {
    number: 2000,
    description: 'High-Quality Products'
  },
  {
    number: 30000,
    description: 'Happy Customers'
  }
]

export default function Home() {
  return (
    <>
      <section className="relative grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 lg:px-10 pt-5">
        <div className='flex flex-col justify-center gap-7'>
          <h1 className='text-3xl md:text-6xl font-bold space md:w-10/12'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className='text-sm sm:text-lg'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <Button rippleColor='light' rounded="full" className='md:w-fit px-10'>Shop Now</Button>
          <article className='grid grid-cols-2 md:grid-cols-3 gap-5 items-start [&>figure:last-child]:col-span-2 md:[&>figure:last-child]:col-span-1 [&>figure:last-child]:m-auto'>
            {
              StatCard.map((stat, index) => (
                <StatCars key={ index } number={ stat.number } desciption={ stat.description } />
              ))
            }
          </article>
        </div>
        <div className='md:pt-5 px-5'>
          <img src="/public/heroImage.png" alt='Imagen del hero' className='aspect-auto container m-auto' />
        </div>
      </section>
      <BannerMark />
    </>
  )
}
