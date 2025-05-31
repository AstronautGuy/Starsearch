import { useEffect} from 'react';
import './App.css';
import { Input } from "@/components/ui/input";

declare global {
  interface Window {
    electronAPI?: {
      sendAllowClose?: () => void;
      sendOpenWindow?: () => void;
    };
  }
}

function App() {

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
      <Input type={"text"} placeholder={"Starsearch"} className={"text-2xl h-full py-0 px-6 placeholder:text-[#333] bg-[#1c1c1c] text-white"}/>
  );
}

export default App;
