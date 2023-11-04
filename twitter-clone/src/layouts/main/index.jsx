import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Rightbar from "./rightbar";

export default function MainLayout(){
    return (
        <div className="w-[1285px] mx-auto flex">
            <Sidebar></Sidebar>
            <centermain className="flex">
            <main className="w-[600px] border-x float-left border-[#2f3336]">
                <Outlet></Outlet>
            </main>  
            <Rightbar></Rightbar>
            </centermain>
        </div>
    )
}