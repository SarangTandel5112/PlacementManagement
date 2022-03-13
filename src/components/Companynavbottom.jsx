import React from "react";


function Companynavbottom() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/companyDashboard">Home <span class="sr-only">(current)</span></a>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categories
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item">CS/IT</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item">Mechanical</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item">Civil</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item">EC</a>
                        </div>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" >Blogs <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" >FAQs <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" >About Us <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" >Contact Us <span class="sr-only">(current)</span></a>
                    </li>
                </ul>
                
            </div>
        </nav>
  );
}
export default Companynavbottom;
