interface NavLink {
    id: number,
    title: string,
    url: string
}

type NavLinks = NavLink[]

export const NavLinksData: NavLinks = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "About US",
        url: "/aboutUs"
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog"
    }
]