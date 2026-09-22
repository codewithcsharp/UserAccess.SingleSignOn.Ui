import { useState } from 'react';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import DestinationSection from './components/DestinationSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

const App = () => {
    const [isDashboardVisible, setDashboardVisible] = useState(false);

    const toggleDashboard = () => {
        setDashboardVisible((isVisible) => !isVisible);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Navbar onDashboardClick={toggleDashboard} />
            {isDashboardVisible ? (
                <Dashboard />
            ) : (
                <>
                    <ImageSlider />
                    <DestinationSection />
                    <TestimonialSection />
                    <Footer />
                </>
            )}
        </>
    )
}

export default App
