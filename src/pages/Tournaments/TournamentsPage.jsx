// src/pages/LandingPage.js
import Navbar from '../Home/Navbar';
import Tournaments from './Tournaments';
import Footer from '../Home/Footer';

const TournamentsPage = () => {
    return (
        <div>
        <Navbar />
        <Tournaments />
        <Footer />
        </div>
    );
};

export default TournamentsPage;