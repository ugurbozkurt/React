import Button from "../../components/button"
import { removeModal } from '../../store/modal/actions'
export default function AppearanceModal() {
  return (
    <div className="w-[600px] h-[625px] bg-black rounded-2xl  ">
      <h6 className="text-[23px] font-bold">Customize your view</h6>
      <div>content</div>
      <Button onClick={()=>removeModal(false)}>Done</Button>
    </div>
  )
}