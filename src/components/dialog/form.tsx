"use client";

import { useOrderContext } from "@/provider/orderProvider";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';

export default function Form() {
    const { order } = useOrderContext();
    const fixedPackageInfo = order?.event?.fixedPackageInfo;

    // Map pickup points to the options format required by PrimeNG Dropdown
    const pickupOptions = order?.package?.pickupPoints?.map((point, index) => ({
        label: `${point.address}, ${point.city}, ${point.zip}`,
        value: index, // or use a unique identifier if available
    }));

    const durationOptions = [
        { value: 24, label: "24 time" },
        { value: 48, label: "48 timer" },
        { value: 72, label: "72 timer" },
    ];

    return (
        <div>
            <p className="pb-5">Informationer</p>
            <div className="text-sm">
                <InputText
                    placeholder="Navn"
                    className="w-full p-3 border border-white/20 rounded-lg mb-5 bg-white/5"
                />
                <InputText
                    placeholder="Email"
                    className="w-full p-3 border border-white/20 rounded-lg mb-5 bg-white/5"
                />
                <InputText
                    placeholder="Gentag email"
                    className="w-full p-3 border border-white/20 rounded-lg mb-5 bg-white/5"
                />
                {fixedPackageInfo?.pickupPoint ? (
                    // Show fixed pickup point as static information
                    <div>
                        <div className="p-3 border border-white/20 rounded-lg mb-5 bg-white/5">
                            <p className="font-bold">Afhentningssted</p>
                            <p>{fixedPackageInfo.pickupPoint.address}</p>
                            <p>
                                {fixedPackageInfo.pickupPoint.city},{" "}
                                {fixedPackageInfo.pickupPoint.zip}
                            </p>
                        </div>

                        <div className="p-3 border border-white/20 rounded-lg mb-5 bg-white/5">
                            <p className="font-bold">Aflevering</p>
                            <p>{fixedPackageInfo.pickupPoint.address}</p>
                            <p>
                                {fixedPackageInfo.pickupPoint.city},{" "}
                                {fixedPackageInfo.pickupPoint.zip}
                            </p>
                        </div>
                    </div>
                ) : (
                    // Show react-select dropdowns if no fixed pickup point is set
                    <div>
                        <div className="mb-5">
                            <p className="mb-2 font-bold">Vælg afhentningssted</p>
                            <Dropdown
                                options={pickupOptions}
                                placeholder="Vælg afhentningssted"
                                className="w-full bg-white/5 border border-white/20 rounded-lg hover:border-white/40"
                            />
                        </div>
                        <div className="mb-5">
                            <p className="mb-2 font-bold">Vælg Aflevering</p>
                            <Dropdown
                                options={pickupOptions}
                                placeholder="Vælg afhentningssted"
                                className="w-full bg-white/5 border border-white/20 rounded-lg hover:border-white/40"
                            />
                        </div>
                        <div className="mb-5">
                            <p className="mb-2 font-bold">Vælg dato</p>
                            <Calendar
                                className="w-full"
                                placeholder="Vælg dato"
                            />
                        </div>
                        <div className="mb-5">
                            <p className="mb-2 font-bold">Varighed</p>
                            <Dropdown
                                options={durationOptions}
                                placeholder="Vælh varighed"
                                className="w-full bg-white/5 border border-white/20 rounded-lg hover:border-white/40"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
