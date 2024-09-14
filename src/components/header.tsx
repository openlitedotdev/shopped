import { Input } from '@openlite/ui'
import { Link } from 'wouter'
import { StoreIcon } from './icons/store'

const menus = [
  { name: 'Shop', path: '/categories' },
  { name: 'On Sale', path: '#' },
  { name: 'New Arrivals', path: '#' },
  { name: 'Brands', path: '#' },
]

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-8 py-5 shadow">
      <Link to="/">
        <img src="/logo.png" alt="logo official for shopped" className="w-44" />
      </Link>
      <nav>
        {menus.map((menuItem) => (
          <Link to={menuItem.path}>{menuItem.name}</Link>
        ))}
      </nav>

      <Input placeholder="Search for products..." />

      <Link to="/storage">
        <StoreIcon />
      </Link>
    </header>
  )
}
