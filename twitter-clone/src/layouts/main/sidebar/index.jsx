import Logo from './logo'
import Menu from './menu'
export default function Sidebar(){
    return(
        <aside className="w-[275px] px-2  min-h-screen">
           <Logo></Logo>
           <Menu></Menu>
        </aside>
    )
}