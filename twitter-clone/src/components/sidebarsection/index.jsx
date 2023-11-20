import PropTypes from "prop-types"
import { Link } from "react-router-dom"
export default function SidebarSection({ title, children, more }) {
    return (
        <section className="w-[350px] min-h-auto bg-[#16181c] rounded-2xl flex flex-col  py-3 mt-4 ">
            <h6 className="text-[20px] font-bold text-[#E7EAE9] px-4 mb-2">{title}</h6>
            <div className="grid">
                {children}
            </div>
            {more && (
                <Link to={more} className="text-[15px] h-[52px] transition-colors flex items-center text-[#1D9BF0] px-4 hover:bg-white/[0.03]">Show more
                </Link>
            )}
        </section>
    )
}

SidebarSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

SidebarSection.defatultProps = {
    more: false
}