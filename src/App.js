import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const canvasWidth = 1024;
const canvasHeight = 768;

class App extends Component {
  state = {
    ctx: null,
    altitude: 0,
    fov: 60
  };

  componentDidMount() {
    this.setState({ ctx: this.refs.canvas.getContext("2d") });
  }

  componentDidUpdate() {
    this.renderCanvas();
  }

  renderCanvas = () => {
    const ctx = this.state.ctx;

    let hHOV = (this.state.fov * (Math.PI / 180)) / 2;

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
    this.setState({ altitude: Math.max(e.target.value, 0) });
  };
  handleFOVChange = e => {
    this.setState({ fov: Math.max(Math.min(e.target.value, 180), 1) });
  };
  getHorizonDistance = () => {
    const altitude = Math.max(this.getAltitude(), 0.001);
    const radius = this.getEarthRadius();
    return Math.sqrt(Math.pow(altitude, 2) + 2 * radius * altitude);
  };
  getHorizonLength = () => {
    const fov = Math.min(this.state.fov, 179.9) * (Math.PI / 180);
    const distance = this.getHorizonDistance();
    return distance * Math.tan(fov / 2) * 2;
  };
  getEarthRadius = () => {
    return 3959;
  };
  getAltitude = () => {
    return this.state.altitude;
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
        <p>
          This is a visualizer to give you a rough idea of how curved the
          horizon should appear at a given altitude with a known camera FOV.
          <br />
          This is a work in progress and will continue to be improved. It makes
          some estimates and does not take into account fish eye lenses for the
          sake of simplicity.
        </p>
        <br />
        <p>
          <label>FOV:</label>
          <input
            name="FOV"
            type="number"
            value={this.state.fov}
            onChange={this.handleFOVChange}
          />
          <i> degrees</i>
        </p>
        <p>
          <label>Altitude:</label>
          <input
            name="altitude"
            type="number"
            value={this.state.altitude}
            onChange={this.handleAltitudeChange}
          />
          <i> miles</i>
        </p>
        <div
          style={{
            border: "1px solid gray",
            display: "inline-block"
          }}
        >
          <div style={{ position: "absolute", padding: 8 }}>
            Horizon Distance: &nbsp;
            {this.getHorizonDistance(this.state.altitude).toFixed(2)} miles
            <br />
            Horizon length: &nbsp;
            {this.getHorizonLength(this.state.altitude).toFixed(2)} miles
            <br />
          </div>
          <canvas ref="canvas" width={canvasWidth} height={canvasHeight} />
        </div>
      </div>
    );
  }
}

export default App;
