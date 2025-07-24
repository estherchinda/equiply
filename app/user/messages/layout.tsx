import MessageSidebar from "@/ui/messages/MessagesSideBar";

export default function MessageLayout({children}: { children: React.ReactNode;}) {
  return (
    <section className="flex h-full">
        <MessageSidebar />
        <div className="flex-1 overflow-y-auto">{children}</div>
    </section>
  );
}