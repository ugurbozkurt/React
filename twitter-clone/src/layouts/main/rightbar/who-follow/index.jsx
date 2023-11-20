
import SidebarSection from "../../../../components/sidebarsection"
import { useAccount } from "../../.../../../../store/auth/hooks"
import { whoFollowUsers } from "../../../../mock/index,js"
import Button from "../../../../components/button"
export default function WhoFollow() {

    const account = useAccount()
    return (
        <SidebarSection title="Who to Follow" more={"connect_people?user_id=" + account.id}>
            {whoFollowUsers.map((user, index) => (
                <button key={index} className="w-full h-[65px] px-3 py-4 flex items-center hover:bg-white/[0.03] transition-colors">
                    <img src={user.avatar} className="w-10 h-10 rounded-full"></img>
                    <div className="flex-1 flex flex-col text-left ml-3">
                        <div className="font-bold text-[15px]  text-[#e7e9ea]">{user.fullname}</div>
                        <div className="font-weight text-[15px] text-[#71767B] leading-5">@{user.username}</div>
                    </div>
                    <div>
                    <Button variant="white" size="small" >Follow</Button>
                    </div>
                </button>
            ))}
        </SidebarSection>
    )
}
