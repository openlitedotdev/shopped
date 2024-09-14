import { menus } from '@/constants/menu'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@openlite/ui'
import { Link } from 'wouter'
import Logo from './logo'

export default function SidebarMobile({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader className="pt-1">
          <Logo />
        </SheetHeader>
        <nav className="flex flex-col gap-7 pt-8">
          {menus.map((menuItem, _index) => (
            <Link to={menuItem.path} key={_index}>
              {menuItem.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
