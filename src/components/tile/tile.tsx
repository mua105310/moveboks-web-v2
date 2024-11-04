
export interface TitleProps {
    title: string;
    subtitle: string;
}

export default function Tile({ title, subtitle }: TitleProps) {
    return (
        <div className="w-full flex justify-center items-center text-center font-sans tracking-[1.5px] mt-20 mb-10" >
            <div className="space-y-8">
                <h2 className="-mb-2 text-xs leading-6">{title}</h2>
                <p className="text-4xl lg:text-5xl  italic font-semibold">{subtitle}</p>
                <div className="h-[4px] w-[100px] mx-auto bg-[var(--secondary)]"></div>
            </div>
        </div>
    );
}