export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="md:p-10 space-y-10">
            {children}
        </div>
    );
}