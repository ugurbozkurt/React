import {NavLink} from "react-router-dom"
import classNames from "classnames"
import {MainMenu} from '../../../../utils/const';
export default function Menu(){
    return(
        <nav className="mt-0.5 mb-1">
            {MainMenu.map((item,index)=>
                        <NavLink to={item.path} key={index} className="py-1 block group">
                        {({isActive})=>(
                            <div className={classNames("p-3 rounded-full inline-flex items-center transition-colors gap-5 text-xl group-hover:bg-[#EFF3F41A]",
                            {
                                "font-bold":isActive
                            }
                            )}>
                                 {isActive && item.icons.active }
                                 
                                 {!isActive && item.icons.inactive }
                                 
                                 <div className="text-[#E7E9EA] text-xl pr-4" >
                                    {item.title}
                                 </div>
                            </div>
                        )}
                        </NavLink>
            )}
        </nav>
    )
}