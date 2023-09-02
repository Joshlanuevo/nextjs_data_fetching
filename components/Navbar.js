import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Link href="/">Photo Album</Link>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/photos">Photos</Link>
        </nav>
     );
}
 
export default Navbar;