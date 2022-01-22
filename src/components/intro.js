import { Parallax } from 'react-parallax'
import IntroImage from '../images/Intro.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


// Set the date we're counting down to
var countDownDate = new Date("Nov 21, 2023 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    

  document.getElementById("days").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24))
  document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  document.getElementById("minutes").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  document.getElementById("seconds").innerHTML = Math.floor((distance % (1000 * 60)) / 1000)

    
  // If the count down is over, write some text 
  if (distance < 0) {
    document.getElementById("headline").innerText = "It's the Wedding Day!";
    document.getElementById("countdown").style.display = "none";
    // document.getElementById("content").style.display = "block";
    clearInterval(x);
  }
}, 1000);

function Intro(){
return  (
    <Parallax className='image' bgImage={IntroImage} strength={600}>
        <div className="intro-container animated animatedFadeInUp fadeInUp">
            <Container>
            {/* <div class="center"> */}
                <Row className="justify-content-md-center mb-3">
                    <h1 id="mainTitle">Marge &amp; Homer</h1>
                    {/* <h2 id="subTitle">We're getting married</h2> */}
                </Row>
                <Row className="justify-content-md-center">
                    {/* <h1 id="mainTitle">Puti &amp; Athhar</h1> */}
                    <h2 id="subTitle">We're getting married!</h2>
                </Row>
                <div className="container-timer">
                    <div id="countdown"> 
                        <ul> 
                            <li><span id="days"></span>days</li>
                            <li><span id="hours"></span>hours</li>
                            <li><span id="minutes"></span>minutes</li>
                            <li><span id="seconds"></span>seconds</li>
                        </ul>
                    </div>
                    <h1 id="headline"></h1>
                </div>
            </Container>
        </div>
 
    </Parallax>
)
            }

export default Intro