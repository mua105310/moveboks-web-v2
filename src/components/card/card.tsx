import Image from 'next/image';

export default function Card({data}: {data: any}) {
    return (
        <div className="card p-4 flex flex-1 rounded-md">
            <div className='relative w-full h-full'>
                <div>
                    <p>Title</p>
                    <p>Short description</p>
                </div>
                <div>
        
                </div>
                <div className='absolute right-0 top-0 p-5 bg-[var(--secondary)] opacity-80 rounded-md'>
                    
                </div>
            </div>
        </div>
    )
}