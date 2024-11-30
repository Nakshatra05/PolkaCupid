import React from 'react';
import { Profile } from '../types/Profile';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface ProfileCardProps {
  profile: Profile;
  onLike: () => void;
  onDislike: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onLike, onDislike }) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
      <div className="relative">
        <img 
          src={profile.imageURL} 
          alt={profile.name}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <h2 className="text-2xl font-bold text-white">
            {profile.name}, {profile.age}
          </h2>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 text-lg">{profile.bio}</p>
        
        <div className="mt-6 flex justify-center gap-6">
          <button
            onClick={onDislike}
            className="p-4 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors duration-200"
          >
            <ThumbsDown className="w-8 h-8" />
          </button>
          
          <button
            onClick={onLike}
            className="p-4 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors duration-200"
          >
            <ThumbsUp className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};