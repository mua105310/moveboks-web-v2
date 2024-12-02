"use client";

import { useOrderContext } from "@/provider/orderProvider";
import Select from "react-select";

export default function Form() {
    const { order } = useOrderContext();
    const pickupPoints = order?.package?.pickupPoints;
    const fixedPackageInfo = order?.event?.fixedPackageInfo;

    // Map pickup points to options format required by react-select
    const pickupOptions = pickupPoints?.map((point) => ({
        value: point,
        label: point,
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
                <input
                    type="text"
                    placeholder="Navn"
                    className="w-full p-3 border border-white/20 rounded-lg mb-5 bg-white/5 outline-none"
                />
                <input
                    type="text"
                    placeholder="Email"
                    className="w-full p-3 border border-white/20 rounded-lg mb-5 bg-white/5 outline-none"
                />
                <input
                    type="text"
                    placeholder="Gentag email"
                    className="w-full p-3 border border-white/20 rounded-lg mb-5 bg-white/5 outline-none"
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
                            <Select
                                options={pickupOptions}
                                placeholder="afhentning"
                                className="text-white"
                                classNamePrefix="react-select bg-black"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: "rgba(255, 255, 255, 0.05)", // bg-white/5 equivalent
                                        borderColor: state.isFocused
                                            ? "transparent" // No border when selected
                                            : "rgba(255, 255, 255, 0.2)", // Default border color
                                        color: "white", // Text color in control
                                        boxShadow: "none", // Removes focus box shadow
                                        "&:hover": {
                                            borderColor: "rgba(255, 255, 255, 0.3)", // Slightly lighter border on hover
                                        },
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        backgroundColor: "#1e1e1e", // Darker background for menu
                                        color: "white", // Ensure white text in menu
                                    }),
                                    option: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: state.isFocused
                                            ? "rgba(255, 255, 255, 0.1)" // Slightly lighter for focused option
                                            : "#1e1e1e", // Match menu background
                                        color: "white", // Always white text for options
                                        cursor: "pointer",
                                    }),
                                    singleValue: (provided) => ({
                                        ...provided,
                                        color: "white", // Ensure selected value text is white
                                    }),
                                    placeholder: (provided) => ({
                                        ...provided,
                                        color: "rgba(255, 255, 255, 0.6)", // Slightly dimmed placeholder text
                                    }),
                                }}
                            />
                        </div>
                        <div className="mb-5">
                            <p className="mb-2 font-bold">Vælg Aflevering</p>
                            <Select
                                options={pickupOptions}
                                placeholder="Aflevering"
                                className="text-white"
                                classNamePrefix="react-select"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: "rgba(255, 255, 255, 0.05)", // bg-white/5 equivalent
                                        borderColor: state.isFocused
                                            ? "transparent" // No border when selected
                                            : "rgba(255, 255, 255, 0.2)", // Default border color
                                        color: "white", // Text color in control
                                        boxShadow: "none", // Removes focus box shadow
                                        "&:hover": {
                                            borderColor: "rgba(255, 255, 255, 0.3)", // Slightly lighter border on hover
                                        },
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        backgroundColor: "#1e1e1e", // Darker background for menu
                                        color: "white", // Ensure white text in menu
                                    }),
                                    option: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: state.isFocused
                                            ? "rgba(255, 255, 255, 0.1)" // Slightly lighter for focused option
                                            : "#1e1e1e", // Match menu background
                                        color: "white", // Always white text for options
                                        cursor: "pointer",
                                    }),
                                    singleValue: (provided) => ({
                                        ...provided,
                                        color: "white", // Ensure selected value text is white
                                    }),
                                    placeholder: (provided) => ({
                                        ...provided,
                                        color: "rgba(255, 255, 255, 0.6)", // Slightly dimmed placeholder text
                                    }),
                                }}
                            />
                        </div>
                        <div className="mb-5">
                            <p className="mb-2 font-bold">Vælg dato</p>
                            <input
                                type="date"
                                className="w-full p-3 border border-white/20 rounded-lg bg-white/5 text-white outline-none appearance-none"
                                style={{
                                    colorScheme: "dark", // Ensures white icons for browsers that respect this property
                                    backgroundColor: "rgba(255, 255, 255, 0.05)", // Matches bg-white/5
                                    color: "white", // Text color
                                }}
                            />
                        </div>
                        <div className="mb-5">
                            <p className="mb-2 font-bold">Vælg tidspunkt</p>
                            <input
                                type="time"
                                className="w-full p-3 border border-white/20 rounded-lg bg-white/5 text-white outline-none appearance-none"
                                style={{
                                    colorScheme: "dark", // Ensures white icons for browsers that respect this property
                                    backgroundColor: "rgba(255, 255, 255, 0.05)", // Matches bg-white/5
                                    color: "white", // Text color
                                }}
                            />
                        </div>
                        <div className="mb-5">
                            <p className="mb-2 font-bold">Varighed</p>
                            <Select
                                options={durationOptions}
                                placeholder="Vælg varighed"
                                className="text-white"
                                classNamePrefix="react-select"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: "rgba(255, 255, 255, 0.05)", // bg-white/5 equivalent
                                        borderColor: state.isFocused
                                            ? "transparent" // No border when selected
                                            : "rgba(255, 255, 255, 0.2)", // Default border color
                                        color: "white", // Text color in control
                                        boxShadow: "none", // Removes focus box shadow
                                        "&:hover": {
                                            borderColor: "rgba(255, 255, 255, 0.3)", // Slightly lighter border on hover
                                        },
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        backgroundColor: "#1e1e1e", // Darker background for menu
                                        color: "white", // Ensure white text in menu
                                    }),
                                    option: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: state.isFocused
                                            ? "rgba(255, 255, 255, 0.1)" // Slightly lighter for focused option
                                            : "#1e1e1e", // Match menu background
                                        color: "white", // Always white text for options
                                        cursor: "pointer",
                                    }),
                                    singleValue: (provided) => ({
                                        ...provided,
                                        color: "white", // Ensure selected value text is white
                                    }),
                                    placeholder: (provided) => ({
                                        ...provided,
                                        color: "rgba(255, 255, 255, 0.6)", // Slightly dimmed placeholder text
                                    }),
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
