import {Popover} from "@headlessui/react"
import { useAccount } from "../../../../store/auth/hooks"
export default function Account(){

    const account = useAccount()
    return (
        <div className="mt-auto">
            <Popover>
                    <Popover.Button className="my-3 rounded-full p-3 flex w-full text-left hover:bg-[#EFF3F41A] " >
                        
                        <img src={account.avatar} className="w-10 h-10 rounded-full"></img>
                       <div className="mx-3 text-[15px]">
                        <h6 className="font-bold">{account.fullName}</h6>
                        <div className="text-[#71767b]">
                        @{account.username}</div>
                       </div>
                    </Popover.Button>
                <Popover.Panel>   
                </Popover.Panel>
            </Popover>
            
        </div>
    )
}