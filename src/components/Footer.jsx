import React from "react";


function Footer() {

    return (

        <footer className="footer">
                <div className="container bottom_border">
                    <div className="row">
                        <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">Categories</h5>


                            <ul className="footer_ul_amrc">
                                <li><a href="http://webenlance.com">CE/IT</a></li>
                                <li><a href="http://webenlance.com">MECHANICAL</a></li>
                                <li><a href="http://webenlance.com">CIVIL</a></li>
                                <li><a href="http://webenlance.com">EC</a></li>

                            </ul>
                        </div>


                        <div className=" col-sm-4 col-md  col-6 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">Help</h5>

                            <ul className="footer_ul_amrc">
                                <li><a href="http://webenlance.com">My Applies</a></li>
                                <li><a href="http://webenlance.com">About Company</a></li>
                                <li><a href="http://webenlance.com">My Details</a></li>
                                <li><a href="http://webenlance.com">FAQs</a></li>

                            </ul>

                        </div>
                        
                        <div className=" col-sm-4 col-md-5  col-lg-6 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">About Us :</h5>
                            <p>
                                &nbsp; &nbsp; &nbsp; &nbsp;The Placement Cell at DDU is a concept in
                                its own form. It has the following structure comprising of three
                                important parts viz. the placement office comprising of the Manager
                                (Placements) and placement secretary, the faculty members and finally
                                the student representatives from each stream. The structure aims at
                                touching all the aspects required for the smooth functioning of placement
                                process.
                            </p>

                        </div>

                        

                        <div>
                            <ul className="social_footer_ul">
                                <li className=""><a href="/#" ><i className="smlogo fab fa-facebook-f"></i></a></li>
                                <li className=""><a href="/#" ><i className="smlogo fab fa-twitter"></i></a></li>
                                <li className=""><a href="/#" ><i className="smlogo fab fa-linkedin"></i></a></li>
                                <li className=""><a href="/#" ><i className="smlogo fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>



    )
}

export default Footer;