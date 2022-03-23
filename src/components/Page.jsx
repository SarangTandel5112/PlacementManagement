import React from "react";
import StudentHome from "./StudentHome";
import Login from "./Login";
import Register from "./Register";
import CompanyDashboard from "./CompanyHome";
import Tpo from "./Tpo";
import CompanyNewRequest from "./CompanyNewRequest";
import StudentJobPage from "./StudentJobPage";
import TpoIncomingRequest from "./TpoIncomingRequest";
import Companydetails from "./CompanyAllRequest";
import TpoDashboard from "./TpoHome";
import CompanyHome from "./CompanyHome";
import CompanyAllRequest from "./CompanyAllRequest";
import AddStudent from "./AddStudent";
import StudentProfile from "./StudentProfile";
import Studentregister from "./Studentregister"
import StudentRequest from "./StudentRequest";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import tpodashboard from "./Tpodashboard";
import Companyformat from "./Companyformat"
import Companydisplay from "./Companydisplay";
import Studentmyapplies from "./Studentmyapplies";
import Companypost from "./Companypost";
import Companyonedetails from "./Companyonedetails";
import Appliedstudentdetails from "./Appliedstudentdetails";
 

function Page() {
  return (
    <Router>
      <Route exact path="/studentHome" component={StudentHome} />
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
      <Switch>
        <Route exact path="/registercompany" component={Register} />
      </Switch>
      <Switch>
        <Route exact path="/companyHome" component={CompanyHome} />
      </Switch>
      <Switch>
        <Route exact path="/companyDashboard" component={CompanyDashboard} />
      </Switch>
      <Switch>
        <Route exact path="/companyAllRequest" component={CompanyAllRequest} />
      </Switch>

      <Switch>
        <Route exact path="/tpo" component={tpodashboard} />
      </Switch>
      <Switch>
        <Route exact path="/tporequests" component={Tpo} />
      </Switch>
      <Switch>
        <Route exact path="/companyNewRequest" component={CompanyNewRequest} />
      </Switch>
      <Switch>
        <Route exact path="/jobs" component={StudentJobPage} />
      </Switch>
      <Switch>
        <Route exact path="/jobs/:compId" component={Companydisplay} />
      </Switch>
      <Switch>
        <Route exact path="/tpoIncomingRequest" component={TpoIncomingRequest} />
      </Switch>
    
      <Switch>
        <Route exact path="/companyPreviousRequest" component={Companydetails} />
      </Switch>
      <Switch>
        <Route exact path="/tpoHome" component={TpoDashboard} />
      </Switch>
      <Switch>
        <Route exact path="/addStudent" component={AddStudent} />
      </Switch>
      <Switch>
        <Route exact path="/StudentProfile" component={StudentProfile} />
      </Switch>
      <Switch>
        <Route exact path="/Studentregister" component={Studentregister} />
      </Switch>
      <Switch>
        <Route exact path="/stuudentrequesttpo" component={StudentRequest} />
      </Switch>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Switch>
        <Route exact path="/companyformat" component={Companyformat} />
      </Switch>
      <Switch>
        <Route exact path="/companydisplay" component={Companydisplay} />
      </Switch>
      <Switch>
        <Route exact path="/myapplies" component={Studentmyapplies} />
      </Switch>
      <Switch>
        <Route exact path="/companypost" component={Companypost} />
      </Switch>
      <Switch>
        <Route exact path="/companypost/:onecomp" component={Companyonedetails} />
      </Switch>
      <Switch>
        <Route exact path="/companypost/:onecomp/studentdetails" component={Appliedstudentdetails} />
      </Switch>
      
    </Router>
  );
}

export default Page;
