import ProfileHeader from "@/ui/profile/ProfileHeader"
import TabContentRenderer from "@/ui/profile/TabContentRenderer"

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="md:mx-5">
            <ProfileHeader />
            <TabContentRenderer />
            {children}
        </section>
    )
}