var React = require('react');
var QRCode = require('qrcode.react');
//var imageName = require('../asset/youtube.png')
const Home =()=>{
  return (
    // eslint-disable-next-line no-undef
    <div >
      <p>Helol</p>
      <div style={{textAlign: 'center', alignItems: 'center'}}>
        <QRCode value={"Faislami paicho tumi ?"}
          size={128}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"L"}
          includeMargin={false}
          renderAs={"svg"}
          imageSettings={{
            src: 'https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png',
            x: null,
            y: null,
            height: 24,
            width: 24,
            excavate: true,
          }} 
        />,
      </div>
      
      {/* <img src='https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png' alt='kumol' /> */}
    </div>
  )
}

export default Home;