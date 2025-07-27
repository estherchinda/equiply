import ProfileHeader from "@/ui/profile/ProfileHeader";

export const metadata = {
  title: "Profile - Equiply",
  description: "View your profile and monitor activities in your account",
};

export default function ProfilePage() {
  return (
    <section className="mt-10 space-y-10">
      <ProfileHeader />
    </section>
  );
}