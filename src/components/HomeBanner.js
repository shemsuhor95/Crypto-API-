import styled from "styled-components";
import Lottie from 'react-lottie';
import animationData from '../animations/63309-crypto-exchange.json';
import Doodle from "../doodle";

function HomeBanner() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <Banner>
            <Doodie className='doodle'>
                <Doodle rule={`
            :doodle {
  @grid: 20 / 100%;
  @shape: sqare;
}

// border-radius: @pick(100%);
transform: scale(@r(0.1));


background-color: #63d471;
background-image: linear-gradient(315deg, #63d471 0%, #233329 74%);

@size:2em;
height:2em;
animation:glow 3s  infinite;
  animation-delay: calc(3s / @size() * @i());

@keyframes glow {
0%{
translateY: -@size();
}

100%{
opacity: 0;
}
}



`
                }/>
            </Doodie>
<Content className="d-flex flex-column align-self-center">
    <BannerTitle>
        Welcome To  crypto API
    </BannerTitle>
<p> Enjoy One of the Fastest Market Cap API coins.</p>
</Content>
<Animation>
    <Lottie
        options={defaultOptions}
        height={'100%'}
        width={'100%'}
    />
</Animation>

        </Banner>
    )
}

const Banner = styled.div`
  max-width: 1200px;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top:4em;
  display: flex;
justify-content:space-between;
  gap: 3em;
`
const Content = styled.div`
gap: 1em;
`

const Animation = styled.div`
flex: 1 1 auto;
  max-width: 50%;
  max-height: 50%;
  
`

const BannerTitle=styled.h1`
  flex: 1 1 auto;
  align-self: center;
  background: linear-gradient(315deg, #05e8ba 0%, #087ee1 74%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size:clamp(1em,3vw,2em);

`
const Doodie = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

`




export default HomeBanner;