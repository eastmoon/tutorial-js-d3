const box = {
    position: "relative",
    width: "100%"
}

const logo = {
    fontSize: "128px",
    letterSpacing: "-5px",
    marginTop: "10px",
    marginBottom: "10px"
}

function Logo() {
  return <div style={box}>
      <h1 style={logo}>
          <img src="https://camo.githubusercontent.com/722a5cc12c7d40231ebeb8ca6facdc8547e2abf7/68747470733a2f2f64336a732e6f72672f6c6f676f2e737667" alt="d3.js logo" /> Data-Driven Documents
      </h1>
  </div>
}

export default Logo
