const box = {
    position: "relative",
    width: "100%",
    height: "100%"
}

const center = {
    position: "absolute",
    margin: "auto",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0"
}

function Logo() {
  return <div style={box}>
      <img src="https://camo.githubusercontent.com/722a5cc12c7d40231ebeb8ca6facdc8547e2abf7/68747470733a2f2f64336a732e6f72672f6c6f676f2e737667" alt="next.js logo" style={center} />
  </div>
}

export default Logo
