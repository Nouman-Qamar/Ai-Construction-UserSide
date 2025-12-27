import { Card, Tag } from "antd";
import logo from "./images/profilepic.png"
import client from "./images/clinet.png"
import contractor from "./images/contractor.png"
import Labour from "./images/labour.png"
import Post from "./images/postorapply.png"
import track from "./images/track.png"
import "./work.css";
function Work() {
  return (
    <div>
      <div className="parent">
        <div>
          <h1 className="heading">How BuildFlow Works</h1>
        </div>
        <div className="heading-content">
          Get started in 4 simple steps and transform the way you manage
          construction projects
        </div>
      </div>
      {/* 1st card */}
      <div className="cardparent">
        <Card className="carditem">
          <div className="card-parent">
            <div>
              <div className="card-parent">
                <button className="circle">1</button>
                <Tag
                  style={{
                    background: "#bfbebeff",
                    color: "white",
                    borderRadius: "0px 12px 12px  0px",
                    height: "25px",
                    fontSize: "15px",
                    alignContent: "center",
                  }}
                >
                  1 of 4
                </Tag>
              </div>
              <div className="createacount"> Create Your account</div>
              <div className="createcontent">
                Create your free account in minutes. Quick and simple
                registration process with no hidden fees.
              </div>
              <button className="button"> GET STARTED</button>
            </div>
            <div className="cardfix">
              <Card className="card">
                <div>
                  <img src={logo} alt="Profile" />
                </div>
                <div className="cardheading">Quick Registration</div>
                <div className="createcontent">
                  Secure & easy signup process
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
      {/* 2nd card */}
      <div className="cardparent">
        <Card className="carditem">
          <div className="card-parent">
            <div>
              <div className="card-parent">
                <button className="circle2">2</button>
                <Tag
                  style={{
                    background: "#bfbebeff",
                    color: "white",
                    borderRadius: "0px 12px 12px  0px",
                    height: "25px",
                    fontSize: "15px",
                    alignContent: "center",
                  }}
                >
                  2 of 4
                </Tag>
              </div>
              <div className="createacount"> Chose your Role</div>
              <div className="createcontent">
                Select whether you're a Client posting projects, a Contractor
                building on work ,or a Labour seeking opportunities.
              </div>
            </div>
            <div>
              <div>
                <div className="triplecard">
                  <Card className="tripplecardfix">
                    <div>
                      <img src={client} alt="client" />
                    </div>
                    <div className="cardheading">Client</div>
                    <div className="createcontent">Post Project</div>
                  </Card>
                  <Card className="tripplecardfix">
                    <div>
                      <img src={contractor} alt="Profile" />
                    </div>
                    <div className="cardheading">Contractor</div>
                    <div className="createcontent">Bid on Work</div>
                  </Card>
                  <Card className="tripplecardfix">
                    <div>
                      <img src={Labour} alt="Profile" />
                    </div>
                    <div className="cardheading"> Labour</div>
                    <div className="createcontent">Find opportunities</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      {/* 3rd card */}
      <div className="cardparent">
        <Card className="carditem">
          <div className="card-parent">
            <div>
              <div className="card-parent">
                <button className="circle">3</button>
                <Tag
                  style={{
                    background: "#bfbebeff",
                    color: "white",
                    borderRadius: "0px 12px 12px  0px",
                    height: "25px",
                    fontSize: "15px",
                    alignContent: "center",
                  }}
                >
                  3 of 4
                </Tag>
              </div>
              <div className="createacount"> Post or Apply</div>
              <div className="createcontent">
                Client post deatailed project requirements.Contractor and Labour
                browse and apply for jobs that much their skills.
              </div>
            </div>
            <div className="cardfix">
              <Card className="card">
                <div>
                  <img src={Post} alt="Profile" />
                </div>
                <div className="cardheading">Post or Apply</div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
      {/* 4th card */}
      <div className="cardparent">
        <Card className="carditem">
          <div className="card-parent">
            <div>
              <div className="card-parent">
                <button className="circle2">4</button>
                <Tag
                  style={{
                    background: "#bfbebeff",
                    color: "white",
                    borderRadius: "0px 12px 12px  0px",
                    height: "25px",
                    fontSize: "15px",
                    alignContent: "center",
                  }}
                >
                  4 of 4
                </Tag>
              </div>
              <div className="createacount"> Track And Get Paid</div>
              <div className="createcontent">
                Monitor project progress with real-time updates. Secure payment
                processing ensures everyone gets paid on time.
              </div>
            </div>
            <divc className="cardfix">
              <Card className="card">
                <div>
                  <img src={track} alt="Profile" />
                </div>
                <div className="cardheading">Track And Get Paid</div>
              </Card>
            </divc>
          </div>
        </Card>
        <div className="parent">
          <div>
            <h1 className="heading">Tailored Experience for Every Role</h1>
          </div>
          <div className="heading-content">
            Each user type gets a customized workflow designed for their needs
          </div>
        </div>
      </div>
      <div className="cardheader">
        <Card style={{ width: "33%", margin: "20px" }}>
          <button className="button2"> For Client</button>
          <div className="lastcard"> Post your construction project </div>
          <div className="lastcard">Review contractor proposals</div>
          <div className="lastcard">Select the best fit</div>
          <div className="lastcard">Track project progress</div>
          <div className="lastcard"> Release payments securely</div>
        </Card>

        <Card style={{ width: "33%", margin: "20px" }}>
          <button className="button2-1"> For Contructor</button>
          <div className="lastcard"> Browse available projects </div>
          <div className="lastcard">Submit competitive bids</div>
          <div className="lastcard">Get hired by clients</div>
          <div className="lastcard"> Manage project delivery</div>
          <div className="lastcard"> Receive secure payments</div>
        </Card>

        <Card style={{ width: "33%", margin: "20px" }}>
          <button className="button2"> For Labour</button>
          <div className="lastcard"> Search job opportunities</div>
          <div className="lastcard">Apply with your profile</div>
          <div className="lastcard">Connect with contractors</div>
          <div className="lastcard">Complete assigned work</div>
          <div className="lastcard"> Get paid promptly</div>
        </Card>
      </div>
    </div>
  );
}
export default Work;

 
