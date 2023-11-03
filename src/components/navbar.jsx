import { Fragment } from "react"

function Navbar() { 
   return <Fragment>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"> 
            <div className="container-fluid">
                <a className="navbar-brand" href="/"> 
                    <img className="responsive" src="/src/assets/images/Spotify_Icon_RGB_Green.png" alt="Logo" height="40" ></img>
                </a>
                <a className="navbar-brand" href="/"> Spotify Themes App</a>
            </div>       
        </nav>
    </Fragment>
}

export default Navbar; 