import { Route, Switch } from 'wouter'
import { lazy, Suspense } from 'react'
import Loading from './loading'

const Home = lazy(() => import('./routes/home'))
const NotFound = lazy(() => import('./routes/not-found'))
const Products = lazy(() => import('./routes/products'))
const ProductByName = lazy(() => import('./routes/products/_name'))
const Categories = lazy(() => import('./routes/categories'))

export default function CreatePages() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/products/:name" component={ProductByName} />
          <Route path="/categories" component={Categories} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  )
}
