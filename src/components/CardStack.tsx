import React, { useState } from 'react';
import { Profile } from '../types/Profile';
import { ProfileCard } from './ProfileCard';
import { Heart } from 'lucide-react';

interface CardStackProps {
  initialProfiles: Profile[];
}

export const CardStack: React.FC<CardStackProps> = ({ initialProfiles }) => {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [lastAction, setLastAction] = useState<'like' | 'dislike' | null>(null);

  const handleLike = () => {
    setLastAction('like');
    setProfiles((prev) => prev.slice(1));
  };

  const handleDislike = () => {
    setLastAction('dislike');
    setProfiles((prev) => prev.slice(1));
  };

  if (profiles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[600px] text-center p-8">
        <Heart className="w-16 h-16 text-pink-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">No More Profiles</h2>
        <p className="text-gray-600">Check back later for more matches!</p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {profiles.map((profile, index) => (
        <div
          key={profile.id}
          className={`absolute w-full transition-all duration-500 ${
            index === 0
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-4'
          }`}
          style={{ zIndex: profiles.length - index }}
        >
          <ProfileCard
            profile={profile}
            onLike={handleLike}
            onDislike={handleDislike}
          />
        </div>
      ))}
    </div>
  );
};