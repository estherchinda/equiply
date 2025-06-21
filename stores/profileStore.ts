import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProfileState {
  activeTab: number;
  setActiveTab: (tab: number) => void;
  userProfile: {
    name: string;
    location: string;
    avatar: string;
  };
  setUserProfile: (profile: Partial<ProfileState['userProfile']>) => void;
}

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      activeTab: 1,
      setActiveTab: (tab) => set({ activeTab: tab }),
      userProfile: {
        name: "Ethan Carter",
        location: "Farmer in Kastina, Nigeria",
        avatar: "/pfp.jpeg"
      },
      setUserProfile: (profile) => 
        set((state) => ({ 
          userProfile: { ...state.userProfile, ...profile } 
        })),
    }),
    {
      name: 'profile-storage', // localStorage key
      partialize: (state) => ({ activeTab: state.activeTab }), // Only persist activeTab
    }
  )
);