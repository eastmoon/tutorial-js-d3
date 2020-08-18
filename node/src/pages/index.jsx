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
    </div>
}

export default HomePage
