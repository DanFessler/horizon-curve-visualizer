import React, { Component } from "react";
import { view } from "react-easy-state";
import { params, path } from "react-easy-params";
import logo from "./logo.svg";
import "./App.css";

const canvasWidth = 1024;
const canvasHeight = 768;

class App extends Component {
  state = {
    ctx: null
  };

  componentDidMount() {
    this.setState({ ctx: this.refs.canvas.getContext("2d") });
    params.fov = params.fov ? params.fov : 60;
    params.alt = params.alt ? params.alt : 0;
  }

  componentDidUpdate() {
    this.renderCanvas();
  }

  renderCanvas = () => {
    const ctx = this.state.ctx;

    let hHOV = (params.fov * (Math.PI / 180)) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.strokeStyle = "rgba(0, 0, 0, 1)";
    ctx.beginPath();
    ctx.arc(
      canvasWidth / 2,
      canvasHeight / 2 + this.getPixelRadius(),
      this.getPixelRadius(),
      0,
      2 * Math.PI
    );
    ctx.stroke();
    ctx.strokeStyle = "rgba(0, 0, 0, 0.125)";
    ctx.moveTo(0, canvasHeight / 2 - 0.5);
    ctx.lineTo(canvasWidth, canvasHeight / 2 - 0.5);
    ctx.stroke();
  };

  handleAltitudeChange = e => {
    // this.setState({ altitude: Math.max(e.target.value, 0) });
    params.alt = Math.max(e.target.value, 0);
  };
  handleFOVChange = e => {
    // this.setState({ fov: Math.max(Math.min(e.target.value, 180), 1) });
    params.fov = Math.max(Math.min(e.target.value, 175), 1);
  };
  getHorizonDistance = () => {
    const altitude = Math.max(this.getAltitude(), 0.001);
    const radius = this.getEarthRadius();
    return Math.sqrt(Math.pow(altitude, 2) + 2 * radius * altitude);
  };
  getHorizonLength = () => {
    const fov = Math.min(params.fov, 179.9) * (Math.PI / 180);
    const distance = this.getHorizonDistance();
    return distance * Math.tan(fov / 2) * 2;
  };
  getEarthRadius = () => {
    return 3959;
  };
  getAltitude = () => {
    return params.alt;
  };
  getPixelRadius = () => {
    const radius = this.getEarthRadius();
    const halfLength = this.getHorizonLength() / 2;
    const halfWidth = canvasWidth / 2;
    // const result = (radius / halfLength) * halfWidth
    const result = (halfWidth * radius) / halfLength;
    // const result = 1000;
    console.log(result);
    return result;
  };
  render() {
    return (
      <div className="App">
        <h1>Horizon Curvature Visualizer</h1>
        Source code:{" "}
        <a href="https://github.com/DanFessler/horizon-curve-visualizer">
          https://github.com/DanFessler/horizon-curve-visualizer
        </a>
        <p>
          This is a visualizer to give you a rough idea of how curved the
          horizon should appear at a given altitude with a known camera FOV.
          <br />
          This is a work in progress and will continue to be improved. It makes
          some estimates and does not take into account fish eye lenses for the
          sake of simplicity.
        </p>
        <br />
        <div style={{ display: "flex" }}>
          <div style={{ paddingRight: 32 }}>
            <label>FOV:</label>
            <br />
            <input
              name="FOV"
              type="number"
              value={params.fov}
              onChange={this.handleFOVChange}
            />
            <i> degrees</i>
          </div>
          <div>
            <label>Altitude:</label>
            <br />
            <input
              style={{ height: 21, boxSizing: "border-box" }}
              name="altitude"
              type="number"
              value={params.alt}
              onChange={this.handleAltitudeChange}
            />
            {/* <i> miles</i> */}
            <select style={{ height: 21, boxSizing: "border-box" }}>
              <option>miles</option>
              <option>feet</option>
              <option>meters</option>
              <option>kilometers</option>
            </select>
          </div>
        </div>
        <br />
        <div
          style={{
            border: "1px solid gray",
            display: "inline-block"
          }}
        >
          <div style={{ position: "absolute", padding: 8 }}>
            Horizon Distance: &nbsp;
            {this.getHorizonDistance(params.alt).toFixed(2)} miles
            <br />
            Horizon length: &nbsp;
            {this.getHorizonLength(params.alt).toFixed(2)} miles
            <br />
          </div>
          <canvas ref="canvas" width={canvasWidth} height={canvasHeight} />
        </div>
      </div>
    );
  }
}

export default view(App);
