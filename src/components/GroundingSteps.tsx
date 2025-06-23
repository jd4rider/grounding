import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

const GroundingSteps = () => {
    const [steps, setSteps] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        // Increment index, looping back to 0 if at the end of the data array
        setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
    };

    useEffect(() => {
        fetch('/data/groundingSteps.json')
            .then((res) => res.json())
            .then((data) => setSteps(data))
            .catch((err) => console.error('Error loading steps:', err));
    }, [])
    
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="zen.webp" />
        <Card.Body>
            <Card.Title>{steps[currentIndex]?.label || 'Loading...'}</Card.Title>
            <Card.Text>
            {steps[currentIndex]?.prompt || 'Loading...'}
            </Card.Text>
            <Button variant="primary" onClick={handleNext} >Next Step</Button>
        </Card.Body>
        </Card>
    );
};

export default GroundingSteps;