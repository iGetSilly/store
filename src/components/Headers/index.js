import hamburgerIcon from '../../images/hamburger-icon.svg'
import logoBlack from '../../images/logo-black.svg'
import loginIcon from '../../images/login-icon.svg'
import cartIcon from '../../images/Cart-icon.svg'

function MainHeader() {
    return (
        <div className="">
            <nav className="navBar">
                <a href="*"><img className="img-header-logo" alt="" src={logoBlack}></img></a>
                <img className="img-header-menu" alt="" src={hamburgerIcon}></img>
                <input type="text" placeholder="Pesquise aqui..." className="input-search"></input>
                <a href="*"><img className="img-header-login" alt="" src={loginIcon}></img></a>
                <a href="*"><img className="img-header-cart" alt="" src={cartIcon}></img></a>
            </nav>
        </div>
    )
}

export default MainHeader