import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Header.css"
function Header() {


    return (
        <>
            <header>
                <div className="navbar">
                    <div className="nav-logo border">
                        <div className="logo">

                        </div>
                    </div>


                    <div className="nav-address border">
                        <p className="add-first">Deliver to</p>
                        <div className="add-icon">
                            <i className="fa-solid fa-location-dot"></i>
                            <p className="add-second">Pakistan</p>
                        </div>
                    </div>

                    <div className="nav-search">
                        <select className="search-select">
                            <option>All</option>
                        </select>
                        <input placeholder="Search Amazon" className="search-input" />
                        <div className="search-icon">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>

                    <div className="nav-signin border">
                        <p><span>Hello, sign in</span></p>
                        <p className="nav-second">Accounts & Lists</p>
                    </div>


                    <div className="nav-signin border">
                        <p><span>Returns</span></p>
                        <p className="nav-second">& Orders</p>
                    </div>


                    <div className="nav-cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                        Cart
                    </div>
                </div>

                <div className="panel">
                    <div className="panel-all">
                        <i className="fa-solid fa-bars"></i>
                        All
                    </div>
                    <div className="panel-ops">
                        <p> Today's Deals</p>
                        <p> Customer Service</p>
                        <p> Registry</p>
                        <p> Gift Cards</p>
                        <p> Sell</p>
                    </div>

                    <div className="panel-deals">
                        Shop deals in Electronics
                    </div>
                </div>

                <div className="heading1">
                    <h1> FEATURED PRODUTS</h1>
                </div>

            </header>
        </>
    )
}

export default Header