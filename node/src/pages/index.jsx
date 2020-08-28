import Logo from 'modules/logo'

const box = {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#aaaaaa',
    border: '2px solid white',
    padding: '8px',
    width: 'calc(100% - 20px)',
    height: 'calc(100% - 20px)'
}

function HomePage({ stars }) {
    return <div style={box}>
        <Logo />
        <ul>
            <li><a href="./selection-element">Selection : select element</a></li>
            <li><a href="./barchart">Selection : create BarChart</a></li>
            <li><a href="./selection-join">Selection : join random text</a></li>
            <li><a href="./selection-join-random-text-animate">Selection : join random text with animate</a></li>
            <li><a href="./fetches">Fetches</a></li>
        </ul>
    </div>
}

export default HomePage
