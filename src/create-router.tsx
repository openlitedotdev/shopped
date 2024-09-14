import { Route, Switch } from 'wouter'
import { lazy } from 'react'

const Home = lazy(() => import('./routes/home'))
const NotFound = lazy(() => import('./routes/not-found'))
const ProductByName = lazy(() => import('./routes/products/_name'))
const Products = lazy(() => import('./routes/products'))
const Categories = lazy(() => import('./routes/categories'))

export default function CreateRouter() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/products/:name" component={ProductByName} />
        <Route path="/categories" component={Categories} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}
