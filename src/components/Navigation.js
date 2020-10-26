import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'
import NavigationMenu from './NavigationMenu'


function Navigation() {
    const [showMenu, setShowMenu] = useState(false)

    const menu = useTransition(showMenu, null, {
        from: { transform: 'translateX(-100%)' },
        enter: { transform: 'translateX(0)' },
        leave: { transform: 'translateX(-100%)' },
    })

    const maskMenu = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    return (
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>
            {
                maskMenu.map(({ item, props, key }) =>
                    item &&
                    <animated.div
                        key={key}
                        style={props}
                        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={() => setShowMenu(false)}>
                    </animated.div>)
            }

            {
                menu.map(({ item, props, key }) =>
                    item &&
                    <animated.div
                        kkey={key}
                        style={props}
                        className="fixed bg-white top-0 left-0 w-2/3 md:w-1/4 h-full z-50 shadow p-5">
                        <NavigationMenu closeMenu={() => setShowMenu(false)}/>
                    </animated.div>)
            }
        </nav>
    )
}

export default Navigation