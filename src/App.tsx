import { useEffect, useState } from 'react';
import './App.css';

declare global {
  interface Window {
    electronAPI?: {
      sendAllowClose?: () => void;
    };
  }
}

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        window.electronAPI?.sendAllowClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
      <h1>Starsearch</h1>
  );
}

export default App;
