/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/6zk0C5obFbl
 */

import { Button } from "@/components/ui/button"
import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

export function NavBar() {
  return (
    <header className="flex items-center h-14 px-4 border-b bg-white md:px-6 dark:bg-gray-950">
      <a className="flex items-center gap-2 mr-4" href="#">
        <SunIcon className="w-5 h-5 fill-current" />
        <span className="font-semibold">Acme Inc</span>
      </a>
      <nav className="hidden md:flex items-center space-x-4 flex-1">
        <a className="font-medium" href="#">
          Home
        </a>
        <a className="font-medium" href="#">
          Services
        </a>
        <a className="font-medium" href="#">
          About
        </a>
        <a className="font-medium" href="#">
          Contact
        </a>
      </nav>
      <Button size="sm" variant="outline">
        Sign in
      </Button>
    </header>
  )
}


function SunIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}
