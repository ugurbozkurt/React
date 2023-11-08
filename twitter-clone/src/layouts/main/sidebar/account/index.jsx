import {Popover,Transition} from "@headlessui/react"
import { useAccount, useAccounts } from "../../../../store/auth/hooks"
import More from "./more"

export default function Account(){

    const account = useAccount()
    const accounts = useAccounts()
    return (
        <div className="mt-auto ">
            <Popover className="relative">
                    <Popover.Button className="my-3 rounded-full p-3 flex w-full text-left hover:bg-[#EFF3F41A] outline-none " >
                        <img src={account.avatar} className="w-10 h-10 rounded-full"></img>
                       <div className="mx-5 text-[15px] ml-3">
                            <div className="w-full h-5 flex">
                                <h6 className="font-bold white-space">{account.fullName}</h6>
                                {account.isLocked &&
                                 (
                                    <svg viewBox="0 0 24 24" width={18.75} height={18.75} className="my-0.5 ml-0.5">
                                        <path fill="#FFF" d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z"></path>
                                    </svg>
                                 )
                                }
                            </div>
                            <div className="text-[#71767b]">
                            @{account.username}</div>
                
                       </div>
                       <div>
                        <div className="w-[7px] h-[7px] flex absolute top-[21px] right-[9px]  rounded-full bg-[#1d9bf0]"></div>
                        <div className="ml-7 mt-3 relative">
                                    <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                                    <path fill="#FFF" d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                                </svg>
                            </div>
                        </div>
                    </Popover.Button>
                    <Transition
                        enter="transition duration-500 ease-out"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition duration-500 ease-out"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                    >
                <Popover.Panel className="w-[300px] bottom-[80px] left-1/2 -translate-x-1/2 py-4 mb-2 absolute bottom-full bg-black shadow-box transition-colors rounded-2xl overflow-hidden">
                
                                <More/>
                
                    <div className="w-[100%] h-px bg-[#2f3336] mb-3 mt-3 mx-auto"/> 
                    <button className="h-[44px] w-full flex items-center transition-colors justify-between px-4 font-bold hover:bg-[#EFF3F41A]">
                                Add an existing account
                    </button>
                    <button className="h-[44px] w-full flex items-center transition-colors justify-between px-4 font-bold hover:bg-[#EFF3F41A]">
                                Manage accounts
                    </button>
                    <button className="h-[44px] w-full flex items-center transition-colors justify-between px-4 font-bold hover:bg-[#EFF3F41A]">
                                Log out @{account.username}
                    </button>
                </Popover.Panel>
                </Transition>
            </Popover>
            
        </div>
    )
}