import { ProductModel } from "@/internal/models/product";

interface ProductProps {
  product: ProductModel;
}

export default function BusinessComponentProductCard({ product }: ProductProps) {
  if (!product) {
    return null;
  }

  return (
    <div className="relative rounded-lg h-64 overflow-hidden cursor-pointer border border-white/30 flex flex-col justify-between items-center hover:scale-95 transition-all duration-500 ease-in-out p-4">
      {/* Title at the top */}
      <h2 className="text-lg font-bold text-white mb-4">{product.title}</h2>

      {/* Image in the center */}
      <div className="flex-1 w-full flex justify-center items-center">
        <img
          src={product.image_url}
          alt={product.title}
          className="object-cover h-full max-h-32 rounded-lg"
        />
      </div>

      {/* Button at the bottom */}
      <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-all">
        View Product
      </button>
    </div>
  );
}
