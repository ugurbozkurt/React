import {TrendTopicsList} from "../../../../utils/const"
import {numberFormat} from "../../../../utils/format"
import  {Link} from "react-router-dom"
export default function TrendTopics() {
    return (
        <section className="w-[350px] min-h-[880px] bg-[#16181c] rounded-2xl flex flex-col  py-3 mt-4 ">
            <h6 className="text-[20px] font-bold text-[#E7EAE9] px-4 mb-2">Trends for you</h6>
            {TrendTopicsList.map((item,index)=>
                    <Link to="/" key={index} className="h-[82px] w-full flex items-center hover:bg-white/[0.03] transition-colors">
                    <div className="w-full px-4 text-left  ">
                        <h1 className="text-[#71767b] text-[13px]">{item.title}</h1>
                        <h1 className="text-[15px] font-extrabold">#{item.topic.value}</h1>
                        <span className="text-[#71767b] text-[13px]">{numberFormat(item.postCount)} posts</span>
                    </div>
                    <button 
                    type="button"
                    onClick={(e)=>{
                        e.preventDefault()
                        console.log('tikladin')
                    }} 
                    className="w-[40px] h-[34.75px] mr-2.5 -mt-7 text-[#71767b] transition-colors rounded-full flex items-center justify-center hover:bg-[#1d9bf01a] hover:text-[#1d9bf0]">
                        <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                            <path fill="currentColor" d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                        </svg>
                    </button>
                </Link>
            )}
            

        </section>
    )
}