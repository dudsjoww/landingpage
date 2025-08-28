import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header"
import Landing from "../../components/Landing/Landing"
import MainContainer from "../../components/MainContainer/MainContainer"
import DivisorQuote from "../../components/DivisorQuote/DivisorQuote"
import Footer from "../../components/Footer/Footer"

export default function Curriculum() {
  const { id } = useParams();
    return (
      <>
        <Header />
        <Landing />
        <DivisorQuote />
        <MainContainer />
        <Footer />
      </>
    );
  }