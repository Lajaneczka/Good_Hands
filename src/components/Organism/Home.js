import { HomeWelcome } from "./HomeWelcome";
import { HomeThreeColumns } from "./HomeThreeColumns";
import { HomeSteps } from "./HomeSteps";
import { AboutUs } from "./AboutUs";
import { WhoWeHelp } from "./WhoWeHelp";
import { Contact } from "./Contact";
import { Footer } from "../Molecules/Footer";






export const Home = () => {
    return (
        <>
      <HomeWelcome />
      <HomeThreeColumns />
      <HomeSteps />
      <AboutUs />
      <WhoWeHelp />
      <Contact />
      <Footer />
    </>
    )
}