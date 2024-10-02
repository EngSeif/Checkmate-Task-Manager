'use client';
import { useEffect } from 'react';
import Home from './home/page';
import logo from './favicon.ico';

export default function App() {
  useEffect(()=> {
    document.title = "Checkmate"
  })
  return (
      <>
          <Home />
      </>
  );
}
