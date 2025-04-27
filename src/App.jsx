
import Banner from "./Banner/Banner";
import Brand from "./Brand/Brand";
import DownloadApps from "./DownloadApps/DownloadApps";
import FAQ from "./FAQ/FAQ";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import OurOffice from "./OurOffice/OurOffice";
import PeopleSay from "./PeopleSay/PeopleSay";
import For from "./Procrastinators/For";
import "./App.css"
import Primary from "./Primary/Primary";


function App() {
  return (
    <>
      <NavBar></NavBar>
       <Banner></Banner>
      <Brand></Brand>
      <Features></Features>
      <Primary></Primary>
      <For></For>
      <PeopleSay></PeopleSay>
      <OurOffice></OurOffice>
      <FAQ></FAQ>
      <DownloadApps></DownloadApps>
      <Footer></Footer>  
     
    </>
  );
}

export default App;
