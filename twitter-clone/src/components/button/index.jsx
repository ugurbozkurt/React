import {createElement} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({children,size}){
    return createElement('button',{
        className:classNames("bg-[#1d9bf0] rounded-full flex items-center justify-center transition-colors font-bold hover:bg-[#1A8CD8]",{
            "px-4 h-9":size === 'normal',
            "px-4 text-[17px] h-[52px] w-full":size === 'large',
           
        })
    },children)
}

Button.propTypes = {
    size: PropTypes.oneOf(['small', 'normal', 'large']),
}

Button.defaultProps = {
	as: 'button',
	size: 'normal',
	variant: 'primary'
}
