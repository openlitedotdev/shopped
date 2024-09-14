import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@openlite/ui'
import { StarRating } from './utilities/star-rating'

const products = [
  {
    name: 'T-shirt with Tape Details',
    image: '/vertical-shirt.png',
    rating: 4.5,
    price: 120,
    discountedPrice: null,
  },
  {
    name: 'Skinny Fit Jeans',
    image: '/graphic-shirt.png',
    rating: 3.5,
    price: 240,
    discountedPrice: 260,
    discount: '-20%',
  },
  {
    name: 'Checkered Shirt',
    image: '/faded-jeans.png',
    rating: 4.5,
    price: 180,
    discountedPrice: null,
  },
  {
    name: 'Sleeve Striped T-shirt',
    image: '/loot-fit.png',
    rating: 4.5,
    price: 130,
    discountedPrice: 160,
    discount: '-30%',
  },
]

export default function TopSelling() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">NEW ARRIVALS</h1>
      <div className="flex flex-wrap items-center justify-center gap-10 md:justify-around">
        {products.map((product, index) => (
          <Card
            key={index}
            className="w-max overflow-hidden border-none transition-transform hover:scale-[1.1]"
          >
            <CardHeader className="w-full p-0">
              <img
                src={product.image}
                alt={product.name}
                className="h-64 object-contain"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="mb-2 text-lg">{product.name}</CardTitle>
              <StarRating rating={product.rating} />
            </CardContent>
            <CardFooter className="flex items-center justify-between p-4 pt-0">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">${product.price}</span>
                {product.discountedPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.discountedPrice}
                  </span>
                )}
              </div>
              {product.discount && (
                <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-600">
                  {product.discount}
                </span>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button outline="default" className="px-8 py-2">
          View All
        </Button>
      </div>
    </div>
  )
}
