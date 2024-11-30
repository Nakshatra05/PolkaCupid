import React from 'react';
import { CardStack } from './components/CardStack';
import { profiles } from './data/profiles';
import { Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <header className="py-4 px-6 flex items-center justify-center border-b bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-pink-500" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            PolkaCupid
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <CardStack initialProfiles={profiles} />
      </main>
    </div>
  );
}

export default App;