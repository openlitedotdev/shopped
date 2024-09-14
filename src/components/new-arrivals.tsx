import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@openlite/ui'
import { StarIcon } from './icons/star'

const products = [
  {
    name: 'T-shirt with Tape Details',
    image: '/t-shirt-black.png',
    rating: 4.5,
    price: 120,
    discountedPrice: null,
  },
  {
    name: 'Skinny Fit Jeans',
    image: '/skinny-fit.png',
    rating: 3.5,
    price: 240,
    discountedPrice: 260,
    discount: '-20%',
  },
  {
    name: 'Checkered Shirt',
    image: '/chekered-shirt.png',
    rating: 4.5,
    price: 180,
    discountedPrice: null,
  },
  {
    name: 'Sleeve Striped T-shirt',
    image: '/sleve-shirt.png',
    rating: 4.5,
    price: 130,
    discountedPrice: 160,
    discount: '-30%',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(rating)
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-gray-300'
          }`}
        />
      ))}
      <span className="ml-1 text-sm text-gray-600">{rating}/5</span>
    </div>
  )
}

export default function NewArrivals() {
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
