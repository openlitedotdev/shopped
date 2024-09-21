import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@openlite/ui'
import { StarRating } from './utilities/star-rating'
import { LeftIcon } from './icons/left'
import { RightIcon } from './icons/right'

const CommentsMock = [
  {
    id: 1,
    title: 'Sarah M.',
    descriotion:
      "I'm blown away by the quality and style of the clothes I received from Shop.co.From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
  },
  {
    id: 2,
    title: 'Alex K.',
    descriotion:
      'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
    rating: 4,
  },
  {
    id: 3,
    title: 'James L.',
    descriotion:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 4.5,
  },
  {
    id: 4,
    title: 'Mooen',
    descriotion:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 3.5,
  },
  {
    id: 5,
    title: 'Shara M.',
    descriotion:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
  },
]

export default function Comments() {
  return (
    <section className="p-5 lg:p-10">
      <h2 className="pb-10 text-2xl font-bold sm:text-4xl">
        OUR HAPPY CUSTOMERS
      </h2>
      <Carousel className="py-7">
        <CarouselContent>
          {CommentsMock.map((items) => (
            <CarouselItem className="sm:basis-1/2 lg:basis-1/3" key={items.id}>
              <Card className="h-full justify-center">
                <CardHeader className="w-full">
                  <StarRating rating={items.rating} />
                  <CardTitle className="text-start font-bold">
                    {items.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 py-0">
                  <CardDescription className="p-0 pb-2">
                    {items.descriotion}
                  </CardDescription>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute right-12 top-0">
          <CarouselPrevious>
            <LeftIcon />
          </CarouselPrevious>
          <CarouselNext>
            <RightIcon />
          </CarouselNext>
        </div>
      </Carousel>
    </section>
  )
}
