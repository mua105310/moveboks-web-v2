

interface SectionComponentProps {
    title: string;
}

export default function SectionComponent({ children, title }: SectionComponentProps & { children: React.ReactNode }) {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    );
}