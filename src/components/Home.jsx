// import axios from "axios";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
// import TpoHeader from "./TpoHeader";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbarbottom from "./Navbarbottom"
import { Link } from "react-router-dom"; 
import Footer from './Footer'


function Home() {
    const [slen, setslen] = useState(0);
    const [clen, setclen] = useState(0)
    async function getdata() {
        var res = await axios.get('/tpodata')
        setslen(res.data.slen); setclen(res.data.clen)
    }
    useEffect(() => {
        getdata();
    }, []);

    return (
        <div>
            <div className="frontpage">
                <section id="title">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <button
                            className="navbar-toggler "
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <b className="navbar-brand brandname mainname">
                            <i class="fas fa-user-graduate"></i> DDU Placement
                        </b>
                        <button
                            className="navbar-toggler searchbox"
                            type="button"
                            data-toggle=""
                            data-target=""
                            aria-controls=""
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <input
                                type="text"
                                name="search"
                                placeholder="Search.."
                                className="searchtext"
                            ></input>
                            <i className="fas fa-search searchbtn"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <form class="form-inline">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-light mr-2 my-2 my-sm-0" type="submit">Search</button>
                                </form>


                                <li className="nav-item">
                                    <form method="GET" action="/login">
                                        <button className="btn btn-light ">
                                            <Link to="/login">
                                                <b className="lbtn">Login</b>
                                            </Link>
                                        </button>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </section>
            </div>
            <Navbarbottom />

            {/* <div id="carouselExampleIndicators" class="carousel slide outcour" data-ride="carousel">

                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner ">
                    <div class="carousel-item active ">

                        <div className="" >
                            <img class="d-block w-100 h-100 bgimg1" src="../../Photos/bgfull1.jpg" alt="First slide" />
                        </div>
                        <div className="try1 carousel-caption d-none d-md-block">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum autem, hic dolorem perferendis expedita magni vel deserunt nostrum aut, dolores magnam voluptate accusamus distinctio alias reiciendis? Expedita voluptate quia id quibusdam velit minus nostrum blanditiis dignissimos, accusamus esse similique laboriosam a consequuntur omnis at necessitatibus iure obcaecati totam in!
                        </div>

                    </div>
                    <div class="carousel-item ">
                        <div className=" tryimg1 col-lg-8">
                            <img class="d-block w-100 h-100" src="../../Photos/bg2.jpg" alt="Second slide" />
                        </div>
                        <div className="try1 carousel-caption d-none d-md-block">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quod, aspernatur assumenda repellat corrupti, debitis consectetur quo animi numquam eveniet facere aut. Excepturi facere laudantium, praesentium, aliquam ipsum asperiores quae velit explicabo tenetur obcaecati quisquam, cumque maxime earum? Ratione corporis rerum sunt voluptatem impedit iusto expedita vitae eos velit at?
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <div className=" tryimg1 col-lg-8">
                            <img class="d-block w-100 h-100" src="../../Photos/bg3.jpg" alt="Third slide" />
                        </div>
                        <div className="try1 carousel-caption d-none d-md-block">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae officiis nobis blanditiis maiores odio incidunt, nam, minima voluptas repellat ea quia, rem neque dolorum optio maxime exercitationem atque doloribus accusantium aut quae earum? Modi eaque quisquam eligendi, officiis alias nulla nam repellat assumenda minima ullam numquam veritatis explicabo saepe culpa?
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div> */}

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 setsize" src="../../Photos/bgfull1.jpg" alt="First slide" />
                        <div class="carousel-caption caucap d-none d-md-block">
                            <p className="trytext2">Grow your career with a coach</p>
                            <p className="trytext1">sdf sdfsf sdfsdfd dsf</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 setsize" src="../../Photos/bgfull2.jpg" alt="Second slide" />
                        <div class="carousel-caption caucap d-none d-md-block">
                            <h5 className="trytext1">jhbn bhj bhjccyrchf tf</h5>
                            <p className="trytext1">gyjhgy fghn gjygyjg</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 setsize" src="../../Photos/bgfull3.jpg" alt="Third slide" />

                        <div class="carousel-caption caucap d-none d-md-block">
                            <h5 className="trytext1">gvh gyjhg hvg vh</h5>
                            <p className="trytext1">eds ds cdzc dzxc</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            {/* <div>
                <div class="container-fluid py-2">
                    <div class="row align-items-center">
                        <div class="col-auto">
                            <a class="h1" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span>&lt;</span>
                            </a>
                        </div>
                        <div class="col">
                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="row align-items-center">
                                            <div class="col-lg-3 py-2 ">
                                                <p className="trytext1"> Text text text here. Text here, here, here, here is the text. Text here, here, here, here is the text. </p>
                                                <button class="btn btn-primary">More here</button>
                                            </div>
                                            <div class="col-lg-9 py-2">
                                                <img class="d-block img-fluid" src="../../Photos/bg3.jpg" alt="First slide" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row align-items-center">
                                            <div class="col-lg-2">
                                                <p className="trytext1"> Text text text here. Text here, here, here, here is the text. Text here, here, here, here is the text. </p>
                                                <button class="btn btn-primary">More...</button>
                                            </div>
                                            <div class="col-lg-10">
                                                <img class="d-block img-fluid" src="../../Photos/bg2.jpg" alt="2nd slide" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row align-items-center">
                                            <div class="col-lg-4">
                                                <p className="trytext1"> Text text text here. Text here, here, here, here is the text. Text here, here, here, here is the text. </p>
                                                <button class="btn btn-primary">More...</button>
                                            </div>
                                            <div class="col-lg-8">
                                                <img class="d-block img-fluid" src="../../Photos/bg1.jpg" alt="3rd slide" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <a class="h1" href="#carouselExampleControls" role="button" data-slide="next">
                                <span>&gt;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}


            <div className="row featurehome">
                <h1 className="centertext"> <b>How Can We Help</b></h1>
                <h4 className="subtxt">Our College have seen it all. Achieve your goals with their support.</h4>
                <div className="col-lg-4 featureimgout">
                    <img className="featureimg" alt="job photos" src="../../Photos/job.png" />
                    <h3 className="featurename">Find Job.</h3>
                </div>
                <div className="col-lg-4 featureimgout">
                    <img className="featureimg" alt="manage png" src="../../Photos/manage.png" />
                    <h3 className="featurename">Manage Application .</h3>
                </div>
                <div className="col-lg-4 featureimgout">
                    <img className="featureimg" alt="resume png" src="../../Photos/resume.png" />
                    <h3 className="featurename">Upload Resume .</h3>
                </div>
            </div>



            <div className="row featurehome">
                <h1 className="centertext"> <b>Quick Insights</b></h1>
                
                <div className="col-lg-3 ml-5 featureimgout1 ">
                    <h1 className="setsize1">{slen}</h1>
                    <h3 className="featurename">Total Students</h3>
                </div>
                <div className="col-lg-3 ml-5 featureimgout1">
                    <h1 className="setsize1">{clen}</h1>
                    <h3 className="featurename">Total Recruiters</h3>
                </div>
                <div className="col-lg-3 ml-5 featureimgout1">
                    <h1 className="setsize1">{slen}</h1>
                    <h3 className="featurename">Students Placed</h3>
                </div>
            </div>


            <div className="clientmainpage">
                <div className="clientmain row">
                    <h1 className="clientheader"><b>Our Recruiters</b></h1>
                    <div className="col-lg-3 col-md-6">
                        <img className=" companyimg" alt="company" src="../../Photos/company2.png" />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <img className=" companyimg" alt="company" src="../../Photos/company1.png" />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <img className=" companyimg" alt="company" src="../../Photos/company3.png" />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <img className=" companyimg" alt="company" src="../../Photos/company4.png" />
                    </div>
                </div>
                <div className="clientmain row">
                    <div className="col-lg-3 col-md-6">
                        <img className=" companyimg" alt="company" src="../../Photos/company5.png" />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <img className=" companyimg" alt="company" src="../../Photos/company6.png" />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <img className=" companyimg" alt="company" src="../../Photos/company7.png" />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <img className=" companyimg" alt="company" src="../../Photos/company8.png" />
                    </div>
                </div>
            </div>

            <Footer />






        </div >

    )
}



export default Home;