import { ProductModel } from "@/models/product";

type DialogProps = {
    isOpen: boolean;
    onClose: () => void;
    product: ProductModel | null;
};

export default function Dialog({ isOpen, onClose, product }: DialogProps) {
    if (!isOpen || !product) return null;

    return (
        <div className="fixed inset-0 bg-[#1e1e1e] bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#151515] p-6 rounded-lg max-w-2xl w-full m-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{product.title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        ✕
                    </button>
                </div>
                {/* Add your dialog content here */}
                <div className="mt-4">
                    <p>{product.longDescription}</p>
                    {/* Add more product details as needed */}
                </div>
            </div>
        </div>
    );
} 