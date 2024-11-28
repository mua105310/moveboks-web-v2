export default function Form() {
    return (
        <div className="">
            <p className="pb-5">Informationer</p>
            <div className="text-sm">
                <input type="text" placeholder="Navn" className="w-full p-3 border border-white/20 rounded-lg mb-5 bg-white/5 outline-none"/>
                <input type="text" placeholder="Email" className="w-full p-3 border border-white/20 rounded-lg mb-5 bg-white/5 outline-none"/>
                <input type="text" placeholder="Gentag email" className="w-full p-3 border border-white/20 rounded-lg mb-5 bg-white/5 outline-none"/>
            </div>
        </div>
    );
}