export default function Section({children, title, id}: {children: React.ReactNode, title: string, id?: string}) {
    return (
        <div className="" id={id}>
            <h2 className="text-2xl font-bold mb-4 pt-10 pl-10 md:pl-0 md:pt-0">{title}</h2>
            {children}
        </div>
    );
}