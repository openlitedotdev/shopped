import { SVGProps } from 'react';

export default function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" { ...props } viewBox="0 0 24 24" ><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M12 4v16m8-8H4" color="currentColor"></path></svg>
  )
}