import Logo from './logo'
import Menu from './menu'
export default function Sidebar(){
    return(
        <aside className="w-[275px] px-2  min-h-screen flex flex-col">
           <Logo></Logo>
           <Menu></Menu>
           <div className="mt-auto">
            Test
           </div>
        </aside>
    )
}