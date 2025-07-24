import type { ReactNode } from "react";

type EmptyStateProps = {
    text: string;
    icon: ReactNode;
}

export default function EmptyState({
    text,
    icon,
}: EmptyStateProps) {
    return (
        <section className="flex flex-col justify-center items-center h-full">
            <div className="text-7xl">{icon}</div>
            <h2 className="text-2xl">{text}</h2>
        </section>
    )
}