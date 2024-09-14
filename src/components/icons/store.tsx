import { SVGProps } from 'react'

export function StoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2rem"
      height="1.2rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3.873 17.02L2.669 9.84c-.182-1.086-.273-1.628.019-1.984c.291-.356.827-.356 1.898-.356h14.828c1.071 0 1.607 0 1.898.356c.292.356.2.898.019 1.984l-1.204 7.18c-.399 2.38-.598 3.569-1.413 4.275C17.9 22 16.726 22 14.378 22H9.622c-2.348 0-3.522 0-4.336-.706c-.815-.705-1.014-1.895-1.413-4.275M17.5 7.5a5.5 5.5 0 1 0-11 0"
        color="currentColor"
      ></path>
    </svg>
  )
}
