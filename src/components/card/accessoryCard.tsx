import { AccessoryModel } from "@/models/accessory";

interface AccessoryCardProps {
    item: AccessoryModel;
    mode: 'add' | 'quantity';
    quantity?: number;
    onAdd?: () => void;
    onQuantityChange?: (quantity: number) => void;
    maxQuantity?: number;
    onRemove?: () => void;
}

export default function AccessoryCard({ 
    item, 
    mode = 'add',
    quantity = 0,
    onAdd,
    onQuantityChange,
    maxQuantity = 99,
    onRemove
}: AccessoryCardProps) {
    const renderAction = () => {
        if (mode === 'add') {
            return (
                <button 
                    onClick={onAdd}
                    className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                    Add
                </button>
            );
        }

        return (
            <div className="flex items-center gap-2">
                <button 
                    onClick={() => {
                        const newQuantity = Math.max(0, quantity - 1);
                        if (newQuantity === 0 && onRemove) {
                            onRemove();
                        } else {
                            onQuantityChange?.(newQuantity);
                        }
                    }}
                    className="px-2 py-1 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    disabled={quantity <= 0}
                >
                    -
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button 
                    onClick={() => onQuantityChange?.(Math.min(maxQuantity, quantity + 1))}
                    className="px-2 py-1 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    disabled={quantity >= maxQuantity}
                >
                    +
                </button>
            </div>
        );
    };

    return (
        <div className="flex items-center justify-between gap-4 p-3 bg-[#1e1e1e] rounded-lg">
            <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                    <img
                        src={item.images[0]}
                        alt={item.title}
                        className="object-cover rounded-md"
                        width={48}
                        height={48}
                    />
                </div>
                <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.rentPrice?.[0]?.price ?? 0} kr</p>
                </div>
            </div>
            {renderAction()}
        </div>
    );
} 