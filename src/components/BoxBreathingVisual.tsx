import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import DropdownJF from './Dropdown';

const BoxBreathingVisual: React.FC = () => {
  
  const [phases, setPhases] = useState(['Hold', 'Inhale', 'Hold', 'Exhale']);
  const easyphases = ['Exhale', 'Inhale', 'Exhale', 'Inhale'];
  const phaseDuration = 4000; // 4s per phase
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [position, setPosition] = useState({ top: -16, left: -16 });
  const [difficulty, setDifficulty] = useState('easy');

  useEffect(() => {
        // Fetch difficulty setting from localStorage or default to 'easy'
        const storedDifficulty = localStorage.getItem('difficulty') || 'easy';
        setDifficulty(storedDifficulty);
        setPhases(storedDifficulty === 'easy' ? easyphases : ['Hold', 'Inhale', 'Hold', 'Exhale']);
  }, [difficulty]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhaseIndex((prev) => (prev + 1) % phases.length);
    }, phaseDuration);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const size = 256;
    const offset = 16;

    const positions = [
      { top: -16, left: -16 },                         // Top-left (start)
      { top: -16, left: size - offset },             // Top-right
      { top: size - offset, left: size - offset }, // Bottom-right
      { top: size - offset, left: -16 }              // Bottom-left
    ];

    setPosition(positions[phaseIndex]);
  }, [phaseIndex]);

  return (
    <>
    <DropdownJF setDifficulty={setDifficulty} />
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light text-center"
    >
      <h2 className="mb-4 text-primary">{phases[phaseIndex]}</h2>

      <div
        style={{
          width: 256,
          height: 256,
          position: 'relative',
          border: '4px solid #007bff',
          borderRadius: '8px',
        }}
      >
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, #ffffff, #007bff)',
            position: 'absolute',
            transition: `top ${phaseDuration}ms ease-in-out, left ${phaseDuration}ms ease-in-out`,
            top: position.top,
            left: position.left,
            boxShadow: '0 0 12px rgba(0, 123, 255, 0.6)',
          }}
        />
      </div>

      <p className="mt-4 text-muted">Follow the circle with your breath.</p>
    </Container>
    </>
  );
};

export default BoxBreathingVisual;