import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <>
            <hr className="mt-5 mb-5 border-[#16181C] border-[0.1px]" />

            <div className="w-[350px] h-[60px] px-4 mb-5 leading-5 relative">
                <Link to="/" className="text-[13px] text-[#71767b] hover:underline transition-color mr-4">Privacy Policy</Link>
                <Link to="/" className="text-[13px] text-[#71767b] hover:underline transition-color mr-4">Terms of Service</Link>
                <Link to="/" className="text-[13px] text-[#71767b] hover:underline transition-color mr-4">Cookie Policy</Link>
                <Link to="/" className="text-[13px] text-[#71767b] hover:underline transition-color mr-4">Imprint</Link>
                <Link to="/" className="text-[13px] text-[#71767b] hover:underline transition-color mr-4">Accessibility</Link>
                <Link to="/" className="text-[13px] text-[#71767b] hover:underline transition-color mr-4">Ads info</Link>
                <Link to="/" className="text-[13px] text-[#71767b] hover:underline transition-color mr-4">More...</Link>
                <Link to="/" className=" text-[13px] text-[#71767b] hover:underline transition-color mr-4">© 2023 ugurbozkurt.</Link>
            </div>
        </>
    )
}