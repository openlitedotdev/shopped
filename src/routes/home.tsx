import BannerMark from '@/components/banners/banner-mark'
import CategoriesStyle from '@/components/categories-style'
import Comments from '@/components/comments'
import Hero from '@/components/hero'
import NewArrivals from '@/components/new-arrivals'
import TopSelling from '@/components/top-selling'
import { Separator } from '@openlite/ui'

export default function Home() {
  return (
    <>
      <Hero />
      <BannerMark />
      <NewArrivals />

      <div className="container mx-auto my-10">
        <Separator />
      </div>

      <TopSelling />
      <CategoriesStyle />
      <Comments />
    </>
  )
}
