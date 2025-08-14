'use client';

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // Ferme la fenêtre si elle a été ouverte via window.open()
    if (window.opener) {
      window.close(); // Essaie de fermer la fenêtre
    } else {
      // Si la page a été ouverte directement, redirige vers une autre page
 window.close();    }
  }, []);

  return null; // Aucun contenu à afficher
}
