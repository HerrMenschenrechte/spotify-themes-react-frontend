import { Fragment } from "react";


function Footer() {
   return(
        <footer className="footer bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <a className="nav-link" href="cookies"> Cookies</a>
                    </div>
                        
                    <div className="col-md">
                        <a className="nav-link" href="mailto:cmensahde@gmail.com"> Contact</a>
                    </div>
                    
                    <div className="col-md">
                        <span className="nav-link"> © 2023 Cedric Mensah</span>
            
                    </div>        </div>
                </div> 
        </footer>
   )
}


export default Footer;