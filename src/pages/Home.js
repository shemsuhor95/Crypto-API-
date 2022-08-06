import HomeBanner from "../components/HomeBanner";
import styled from 'styled-components';
import HomeMarketView from "../components/HomeMarketView";
import Doodle from "../doodle";

function Home() {
    return (


            <HomeContainer>
                <HomeBanner/>
                <HomeMarketView/>
            </HomeContainer>

    )

}


const Doodie = styled.div`
  position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
  
`

const HomeContainer = styled.div`

  display: flex;
  flex-direction: column;
  gap: 4em;
  max-width: 1400px;
  margin: 0 auto;
`;
export default Home;