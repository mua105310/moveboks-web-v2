

interface SectionComponentProps {
    title: string;
}

export default function SectionComponent({ children, title }: SectionComponentProps & { children: React.ReactNode }) {
    return (
        <div className="opacity-0 translate-y-[-20px] animate-slide-fade-in transition">
            <h2 className="mb-8 mt-8 text-2xl sm:text-3xl font-bold tracking-wide uppercase text-white/90 border-l-4 border-[var(--primary)] pl-4 ml-10">{title}</h2>
            {children}
        </div>
    );
}