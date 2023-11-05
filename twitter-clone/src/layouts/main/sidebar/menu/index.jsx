import {NavLink} from "react-router-dom"
import classNames from "classnames"
import Button from "../../../../components/button"
import {MainMenu} from '../../../../utils/const';
import More from './more';
export default function Menu(){
    return(
        <nav className="mt-0.5 mb-1">
            {MainMenu.map((item,index)=>
                        <NavLink to={item.path} key={index} className="py-[3px] block group">
                        {({isActive})=>(
                            <div className={classNames("p-3 rounded-full inline-flex items-center transition-colors gap-5 text-xl group-hover:bg-[#EFF3F41A]",
                            {
                                "font-bold":isActive
                            }
                            )}>
                                <div className="w-[26.25px] h-[26.25px] relative">
                                    {item?.notification &&
                                        (
                                            <span className="w-[18px] h-[18px] absolute -top-1.5 -right-1 text-[11px] bg-[#1d9bf0] rounded-full flex justify-center items-center ">
                                                {item.notification}
                                            </span>
                                        )
                                    }
                                    <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block"> 
                                        {isActive && item.icons.active }
                                        {!isActive && item.icons.inactive }
                                    </svg>
                                </div>
                                 <div className="text-[#E7E9EA] text-xl pr-4" >
                                    {item.title}
                                 </div>
                            </div>
                        )}
                        </NavLink>       
            )}
        <More/>
            <div className="py-6 w-[90%]">
            <Button size="large">
               Post
            </Button>
            </div>
        </nav>
    )
}