import { Button, Input } from '@openlite/ui'
import { Link } from 'wouter'
import { StoreIcon } from './icons/store'
import { SearchIcon } from './icons/search'
import { UserIcon } from './icons/user'
import { MenuIcon } from './icons/menu'

const menus = [
  { name: 'Shop', path: '/categories' },
  { name: 'On Sale', path: '#' },
  { name: 'New Arrivals', path: '#' },
  { name: 'Brands', path: '#' },
]

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-5 py-5 shadow lg:justify-start lg:gap-10 lg:px-10">
      <nav className="flex items-center gap-4">
        <Button size="icon" variant="ghost" className="block lg:hidden">
          <MenuIcon />
        </Button>
        <Link to="/">
          <img
            src="/logo.png"
            alt="logo official for shopped"
            className="w-32 lg:w-44"
          />
        </Link>
      </nav>
      <nav className="hidden items-center space-x-5 lg:flex">
        {menus.map((menuItem, _index) => (
          <Link to={menuItem.path} key={_index}>
            {menuItem.name}
          </Link>
        ))}
      </nav>
      <div className="hidden flex-1 lg:block">
        <div className="relative rounded-xl bg-[#F0F0F0] text-default-foreground">
          <SearchIcon className="absolute right-3 top-2.5 text-gray-500" />
          <Input
            placeholder="Search for products..."
            border="none"
            className="text-black"
          />
        </div>
      </div>

      <nav className="flex items-center justify-center gap-5 px-4 lg:px-8">
        <Button variant="ghost" size="icon" className="block lg:hidden">
          <SearchIcon />
        </Button>
        <Link to="#">
          <StoreIcon />
        </Link>

        <Link to="#">
          <UserIcon />
        </Link>
      </nav>
    </header>
  )
}
