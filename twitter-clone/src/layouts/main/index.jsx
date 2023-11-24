import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Rightbar from "./rightbar";
import {useModal} from "../../store/modal/hooks";
import Modal from "../../modals/"
export default function MainLayout() {
  
    const modal = useModal()
   
    return (
        <div className="w-[1265px] mx-auto flex">
             {modal && <Modal></Modal>}
            <Sidebar></Sidebar>
            <main className="min-w-[600px] border-x float-left border-[#2f3336]">
                <Outlet></Outlet>
            </main>
            <Rightbar></Rightbar>
        </div>
    )
}