'use client';
import { useEffect } from 'react';
import Home from './home/page';

export default function App() {
  useEffect(() => {
    document.title = "Checkmate";
  }, []);

  return (
    <>
      <Home />
    </>
  );
}
