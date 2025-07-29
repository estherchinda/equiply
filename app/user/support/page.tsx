import Heading from "@/ui/display/HeadingComponent";
import FAQ from "@/ui/support/FAQ";

export const metadata = {
    title: "Support & Help Center - Equiply",
    description: "Get help and support for your account and tools",
};

export default function SupportPage() {
    return (
        <section>
            <Heading content="Help Center" subtitle="Find answers to common questions or contact our support team for assistance"/>
            <FAQ />
        </section>
    )
}