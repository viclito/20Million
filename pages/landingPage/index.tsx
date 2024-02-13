import Partner from '../../Components/Home/Partner/Partner';
import ChooseUs from '../../Components/Home/chooseUs/ChooseUs';
import Expertise from '../../Components/Home/expertise/Expertise';
// import About from '../../Components/about/about';
import Contact from '../../Components/contact/contact';
import Footer from '../../Components/footer/footer';
import Header from '../../Components/header/header';
// import Mentors from '../../Components/mentor/mentor';
import Navbar from '../../Components/navBar/navBar';

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <Header />
            {/* <About /> */}
            {/* <Mentors /> */}
            <Expertise/>
            <ChooseUs/>
            <Partner/>
            <Footer />
            <Contact />
        </>
    );
}
