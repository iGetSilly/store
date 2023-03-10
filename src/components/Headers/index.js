function MainHeader() {
    return (
        <div className="">
            <nav className="navBar">
                <a href="*"><img className="img-header-logo" alt="" src="img/logo-black.svg"></img></a>
                <img className="img-header-menu" alt="" src="img/hamburger-icon.svg"></img>
                <input type="text" placeholder="Pesquise aqui..." className="input-search"></input>
                <a href="*"><img className="img-header-login" alt="" src="img/login-icon.svg"></img></a>
                <a href="*"><img className="img-header-cart" alt="" src="img/Cart-icon.svg"></img></a>
            </nav>
        </div>
    )
}

export default MainHeader