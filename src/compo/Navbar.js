import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import '../App.css';
export default class Navbar extends Component {
  render() {
    return (
      <div>
            <nav className="navbar navbar-expand-lg bg-dark" style={{text: "white"}} >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{color:"white" }}><b>NewsApp</b></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                  < li className="nav-item"><Link className="nav-link " style={{color:"white"}} aria-current="page" to="/business"><b>Business</b></Link></li>
                  < li className="nav-item"><Link className="nav-link " style={{color:"white"}} aria-current="page" to="/technology"><b>Technology</b></Link></li>
                  < li className="nav-item"><Link className="nav-link " style={{color:"white"}} aria-current="page" to="/sports"><b>Sports</b></Link></li>
                  < li className="nav-item"><Link className="nav-link " style={{color:"white"}} aria-current="page" to="/science"><b>Science</b></Link></li>
                  < li className="nav-item"><Link className="nav-link " style={{color:"white"}} aria-current="page" to="/entertainment"><b>Entertainment</b></Link></li>
                  < li className="nav-item"><Link className="nav-link " style={{color:"white"}} aria-current="page" to="/health"><b>Health</b></Link></li>
                  </ul>        
                </div>
            </div>
            </nav>
      </div>
    )
  }
}
