import React, { Component } from "react";
import "./timeline.css";

export default class timeline extends Component {
  render() {
    return (
      <div>
        <div className="time" id="timelineLink">
          <div className="skill-inside">
            <h1 className="timelineHeading div-heading">TIMELINE</h1>

            <div className="row">
              <div className="col-sm-1">
                <h4 className="year">1996</h4>
              </div>
              <div className="col-sm-11">
                <h4 className="month">( JULY )</h4>
                <h3 className="time-description">
                  Begin school at <br></br>
                  <span className="institute-name">
                    L.K.Shinghania Education Center
                  </span>
                </h3>
                <h4 className="location">(Gotan, Rajastah, India)</h4>
              </div>
              <div className="col-sm-2 ">
                <h4 className="year">2011</h4>
              </div>
              <div className="col-sm-10">
                <h4 className="month">( MAY )</h4>
                <h3 className="time-description ">
                  graduated from high school
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                  <br></br>
                  <span className="month-between">( AUGUST )</span>
                  <br></br>
                  start persuing Bachloers degree in Informaton Technology from
                  <br></br>
                  <span className="institute-name">
                    Jaipur Engineering College and Research Center
                  </span>
                </h3>
                <h4 className="location">(Jaipur,Rajastah,India)</h4>
              </div>
              <div className="col-sm-3">
                <h4 className="year">2014</h4>
              </div>
              <div className="col-sm-9">
                <h4 className="month">( JUN - AUGUST )</h4>
                <h3 className="time-description">
                  internship at <br></br>
                  <span className="institute-name"> J.K.TECHNOSOFT</span>
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                  <br></br>
                  as Software Developer Intern
                </h3>
                <h4 className="location">(Delhi, India)</h4>
              </div>
              <div className="col-sm-4">
                <h4 className="year ">2015</h4>
              </div>
              <div className="col-sm-8">
                <h4 className="month">( MAY )</h4>
                <h3 className="time-description">
                  graduated with<br></br>{" "}
                  <span className="institute-name">Bachloers degree</span> in{" "}
                  <span className="institute-name">Information Technology</span>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                  <br></br>
                  from Jaipur Engineering College and Research Center
                </h3>
                <h4 className="location">(Jaipir,Rajastah,India)</h4>
              </div>
              <div className="col-sm-5">
                <h4 className="year">2016</h4>
              </div>
              <div className="col-sm-7">
                <h4 className="month">( SEPTEMBER )</h4>
                <h3 className="time-description">
                  start persuing Master Degree in Computer Science from{" "}
                  <br></br>
                  <span className="institute-name">
                    Northeastern University
                  </span>
                </h3>
                <h4 className="location">(Seattle,WA,USA)</h4>
              </div>
              <div className="col-sm-6">
                <h4 className="year">2017</h4>
              </div>
              <div className="col-sm-6">
                <h4 className="month">( AUGUST - DECEMBER )</h4>
                <h3 className="time-description">
                  worked as<br></br>
                  <span className="institute-name">
                    graduate Teaching Assistant{" "}
                  </span>
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                  <br></br>
                  at Northeastern University
                </h3>
                <h4 className="location">(Seattle,WA,USA)</h4>
              </div>
              <div className="col-sm-7">
                <h4 className="year">2018</h4>
              </div>
              <div className="col-sm-5">
                <h4 className="month">( MAY )</h4>
                <h3 className="time-description">
                  graduated with <br></br>{" "}
                  <span className="institute-name">Master degree</span> in{" "}
                  <span className="institute-name">Computer Science</span>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                  <br></br>
                  <span className="month-between">( DECEMBER )</span>
                  <br></br>
                  internship at startup <br></br>
                  <span className="institute-name">MyPeopleNow</span>
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                  <br></br>
                  as Software Developer Intern
                </h3>
                <h4 className="location">(Seattle,WA,USA)</h4>
              </div>
              <div className="col-sm-8">
                <h4 className="year">2019-Current</h4>
              </div>
              <div className="col-sm-4">
                <h4 className="month">( JANUARY )</h4>
                <h3 className="time-description">
                  working at <br></br>
                  <span className="institute-name">
                    Pacific Northwest National Laboratory
                  </span>
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                  <br></br>
                  as <br></br>
                  Post Master Research Associate
                </h3>
                <h4 className="location">(Richland,WA,USA)</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
