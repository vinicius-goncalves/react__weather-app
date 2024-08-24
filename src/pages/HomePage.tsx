import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/weather');
    }, [navigate]);

    return null;
}

export default HomePage;
