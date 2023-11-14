import Search from "./search";
import Subscribe from "./subscribe/index,";
import TrendTopics from "./trendtopics";

export default function Rightbar(){
    return(
        <aside className="w-[350px] min-h-screen ml-[30px] float-right">
           <Search></Search>
           <Subscribe></Subscribe>
           <TrendTopics></TrendTopics>
        </aside>
    )
}