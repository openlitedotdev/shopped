import { Separator } from '@openlite/ui'
import { GithubIcon } from './icons/github'
import Logo from './logo'
import { Link } from 'wouter'

export default function LatestOffer() {
  return (
    <footer className="bg-white py-8 text-gray-600">
      <div className="flex items-center justify-between px-8">
        <Logo />
        <Link to="https://github.com/openlitedotdev" target="_blank">
          <GithubIcon />
        </Link>
      </div>
      <div className="container mx-auto mt-7">
        <Separator />
        <small className="block gap-2 pt-2 text-center">
          Shopped.co © 2004-2024, All Rights Reserved. <br />
        </small>
      </div>
    </footer>
  )
}
