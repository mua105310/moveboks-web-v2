import { useOrderContext } from "@/provider/orderProvider";
import PackageCard from "../card/packageCard/packageCard";
import Card from "../card/card/card";

export default function Content() {
    const { order } = useOrderContext();
    if(!order) return
    return (
        <div className="flex flex-col gap-5 mt-5 flex-1 overflow-y-auto">
            <div>
                {order.package.id &&
                    <PackageCard pack={order.package} card={true}/>
                }
            </div>
            <div className="">
                {order.selectedOptions?.map((item, index) => (
                    <Card key={index} item={item}/>
                ))}
            </div>
            <div className="w-full bg-white/20 h-[1px]"/>
            <div className="">
                {order.selectedOptions?.map((item, index) => (
                    <div key={index}>
                        {item.accessories?.map((accessory, accessoryIndex) => (
                            accessory.quantity > 0 && (
                                <Card key={accessoryIndex} item={accessory}/>
                            )
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}