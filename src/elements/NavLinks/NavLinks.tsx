import { NavLinksData } from "./data";
import Link from "next/link";
const NavLinks = () => {
  return (
    <div className="flex justify-between gap-9 items-center text-xl font-bold">
      {NavLinksData.map((link)=>{
        return(
            <Link className="  hover:text-blue-400 transition-all duration-300 hover:tracking-wider " href={link.url} key={link.id}><p>{link.title}</p></Link>
        )
      })}
    </div>
  );
}

export default NavLinks;
