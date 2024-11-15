import { ProductModel } from "@/models/product";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from "../card/productCard";

type ProductsSectionProps = {
    products: ProductModel[];
    packageTitle: string;
    isVisible: boolean;
    selectedProduct?: ProductModel;
    onProductSelect?: (product: ProductModel) => void;
}

export default function ProductsSection({ products, packageTitle, isVisible, selectedProduct, onProductSelect }: ProductsSectionProps) {
    return (
        <div className="mt-8 products-section">
            <h3 className="text-lg font-semibold mb-4">
                Produkter i {packageTitle}
            </h3>
            <div className="block md:hidden -mx-10">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1.2}
                    spaceBetween={20}
                    className="!px-10"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard 
                                product={product} 
                                isVisible={isVisible}
                                isSelected={selectedProduct?.id === product.id}
                                onClick={() => onProductSelect?.(product)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        isVisible={isVisible}
                        isSelected={selectedProduct?.id === product.id}
                        onClick={() => onProductSelect?.(product)}
                    />
                ))}
            </div>
        </div>
    );
}