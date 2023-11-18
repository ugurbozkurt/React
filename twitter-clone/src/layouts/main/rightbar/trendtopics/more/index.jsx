export default function More({close,index,handleRemoveTrend}){
    

        return (
            <div className="w-[295px] h-[88px] bg-black shadow-box rounded-xl">
                                          
            <button
                type="button"
                onClick={(e) => {
                    e.preventDefault();
                    handleRemoveTrend(index)
                    close();
                }}
                
                className="w-full h-11 flex flex-row items-center px-3 hover:bg-white/[0.03]">
                <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                    <path fill="#FFF" d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z" />
                </svg>
                <h1 className="ml-3 font-extrabold text-[15px] text-[#E7E9EA]">Not interested in this</h1>
            </button>
            <button
                type="button"
                onClick={(e) => {
                    e.preventDefault()
                    handleRemoveTrend(index)
                    close()
                }}
                className="w-full h-11 flex flex-row items-center px-3 hover:bg-white/[0.03]">
                <svg viewBox="0 0 24 24 " width={18.75} height={18.75}>
                    <path fill="#FFF" d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z" />
                </svg>
                <h1 className="ml-3 font-extrabold text-[15px] text-[#E7E9EA]">This trend is harmful or spammy</h1>
            </button>
        </div>

    )
}