import Button from "../../../../components/button"
export default function Subscribe(){
    return(
        <div className="w-[348px] h-[144px] flex flex-col mt-4 gap-3 bg-[color:var(--background-section-primary)] px-4 py-3 rounded-2xl -z-1 border-[#16181c] ">
            <h6 className="text-xl font-extrabold font-style-normal leading-6 text-[color:var(--background-font-primary)] tracking-wide">Subscribe to Premium</h6>
            <span className="font-bold leading-5 text-[15px] font-style-normal text-[color:var(--background-font-primary)] tracking-wide">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</span>
            <div className="self-start -mt-1"> 
                <Button size="normal">Subscribe</Button>
            </div>
        </div>
    )
}