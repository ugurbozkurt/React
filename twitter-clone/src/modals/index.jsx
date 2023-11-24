
import modals from "../routes/modals";
import {useModal} from "../store/modal/hooks";
export default function Modal(){
    const modal = useModal()
    const currentModal = modals.find(m => m.name === modal.name)
    return(
        <div className="fixed inset-0 bg-[#5b708366] flex items-center justify-center z-30">
            {currentModal &&(
                <currentModal.element/>
            )}
        </div>
    )
}