import Item from "./item"
import Items from "./items"
import Content from "./content"
import { TabContext } from "./context"
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
export default function Tab({ children, activeTab }) {
    const content = children.filter(c => c.type === Content)
    const items = children.filter(c => c.type === Items)

    const [active, setActive] = useState(activeTab)
    
    const data = {
        active,
        setActive
    }
    useEffect(() => {
        setActive(activeTab)
    }, [activeTab])

    return (
        <TabContext.Provider value={data}>
            {items}
        </TabContext.Provider>
    )
}

Tab.Items = Items
Tab.Item = Item
Tab.Content = Content
Tab.propTypes = {
    children: PropTypes.arrayOf(
        PropTypes.node
    ),
    activeTab: PropTypes.string.isRequired
}