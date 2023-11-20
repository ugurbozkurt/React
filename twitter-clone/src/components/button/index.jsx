import {createElement} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({children,variant,size}){
    return createElement('button',{
        className:classNames(" rounded-full flex items-center justify-center transition-colors font-bold ",{
            "px-4 h-9":size === 'normal',
            "px-4 text-[17px] h-[52px] w-full":size === 'large',
            "px-4 text=[14px] h-[32px] w-full":size === 'small',
            "bg-[#1d9bf0] hover:bg-[#1A8CD8]":variant =="primary",
            "bg-[#EFF3F4] text-[#0F1419] hover:bg-[#d7dbdc] ":variant =="white"


        })
    },children)
}

Button.propTypes = {
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    variant : PropTypes.oneOf(['primary','white'])
}

Button.defaultProps = {
	as: 'button',
	size: 'normal',
	variant: 'primary'
}
