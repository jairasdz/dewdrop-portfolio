import Link from "next/link";

const navLinks = [
    { href: '/about', label: 'About Me' },
    { href: '/performances', label: 'Performances' },
    { href: '/gallery', label: 'Gallery' }
];

export default function NavBar() {
    return (
        <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 gap-4 text-white">
                {/* brand or log */}
                <Link href="/" className="text-sm font-semibold tracking-[0.25em] uppercase text-pink-300 hover:text-white transition duration-700">
                    DewDrop
                </Link>

                {/* navigation links */}
                <div className="flex gap-6 text-sm lowercase">
                    {navLinks.map((link) => (
                        <Link
                        key={link.href}
                        href={link.href}
                        className="text-slate-300 hover:text-pink-300 transition duration-700">
                            {link.label}
                        </Link>
                    ))}     
                </div>
            </div>
        </nav>
    )
}