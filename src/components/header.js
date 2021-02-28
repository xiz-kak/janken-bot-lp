import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/logo_mark_letter.png"

const Header = ({siteTitle}) => (
    <header>
        <div className={"container"}>
            <div className={"top-menu"}>
                <div className={"logo"}>
                    <Link to="/" title={"slash janken"}>
                        <img alt={"Logo"} src={logo}/>
                    </Link>
                </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
