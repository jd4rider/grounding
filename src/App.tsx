import { useEffect, useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import Carousel from 'react-bootstrap/Carousel';
//import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  type Step = { label: string; prompt: string; [key: string]: any };
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
    /*<>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>*/
}

export default App
