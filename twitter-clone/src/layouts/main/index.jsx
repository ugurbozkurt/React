import {Outlet} from "react-router-dom";
import Sidebar from "./sidebar";
import Rightbar from "./rightbar";

export default function MainLayout(){
    return (
        <div className="w-[1283px] mx-auto flex">
            <Sidebar></Sidebar>
            <main className="min-w-[600px] border-x float-left border-[#2f3336]">
                <Outlet></Outlet>
            </main>  
            <Rightbar></Rightbar>
        </div>
    )
}