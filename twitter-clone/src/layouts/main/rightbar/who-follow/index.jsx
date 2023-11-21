
import SidebarSection from "../../../../components/sidebarsection"
import { whoFollowUsers } from "../../../../mock/index,js"
import ProfileCard from "../../../../components/profile-card";
import {useAccount} from "../../../../store/auth/hooks"
export default function WhoFollow() {
  
    const account = useAccount()
    return (
        <SidebarSection title="Who to Follow" more={"connect_people?user_id=" + account.id}>
            {whoFollowUsers.map(user =>  <ProfileCard user={user} key={account.id}></ProfileCard>)}
        </SidebarSection>
    )
}
