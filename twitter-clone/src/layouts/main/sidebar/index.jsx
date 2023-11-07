import Logo from './logo'
import Menu from './menu'
import Account from './account'
export default function Sidebar(){
    return(
        <aside className="w-[275px] px-2  min-h-screen flex flex-col">
           <Logo></Logo>
           <Menu></Menu>
           <Account></Account>
        </aside>
    )
}