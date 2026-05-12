import Link from "next/link"

export function Navbar() {
  return (
    <nav className="w-full h-16 border-b bg-white dark:bg-black flex items-center px-6">
      <Link href="/" className="text-xl font-semibold">
        CoreLink
      </Link>
    </nav>
  )
}
