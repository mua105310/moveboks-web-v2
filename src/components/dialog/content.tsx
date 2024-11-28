import { useOrderContext } from "@/provider/orderProvider";
import PackageCard from "../card/packageCard/packageCard";
import Card from "../card/card/card";
import Form from "./form";

export default function Content() {
    const { order } = useOrderContext();
    if (!order) return null;

    // Check if any accessory exists with a quantity > 0
    const hasAccessories = order.selectedOptions?.some(item =>
        item.accessories?.some(accessory => accessory.quantity > 0)
    );

    return (
        <div className="flex flex-col gap-5 mt-5 flex-1 overflow-y-auto">
            <div>
                {order.package.id && (
                    <PackageCard pack={order.package} card={true} />
                )}
            </div>
            <div>
                {order.selectedOptions?.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>
            
            {/* Render line only if accessories exist */}
            {hasAccessories && (
            <div>
                <div className="w-full bg-white/20 h-[1px] mb-5" />
                <p className="pb-5">Tilbehør</p>
                <div className="flex flex-col gap-5">
                    {order.selectedOptions?.map((item, index) => (
                        item.accessories?.map((accessory, accessoryIndex) => (
                            accessory.quantity > 0 && (
                                <Card key={accessoryIndex} item={accessory} />
                            )
                        ))
                    ))}
                </div>
            </div>
            )}
            <div className="w-full bg-white/20 h-[1px]" />
            <Form />
        </div>
    );
}
