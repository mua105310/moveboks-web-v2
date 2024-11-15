import { ProductModel } from "@/models/product";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from "../card/productCard";
import { useEventContext } from "@/provider/eventProvider";
import { useOrderContext } from "@/provider/orderProvider";

type ProductsSectionProps = {
    products: ProductModel[];
    packageTitle: string;
    onProductSelect: (product: ProductModel) => void;
}

export default function ProductsSection({ products, packageTitle, onProductSelect }: ProductsSectionProps) {
    const { setIsVisible } = useEventContext();
    const { order, updateOrder } = useOrderContext();

    const handleProductSelect = (product: ProductModel) => {
        setIsVisible(false);
        onProductSelect(product);
        setTimeout(() => {
            updateOrder({ 
                product: order.product?.id === product.id ? null : product 
            });
            setIsVisible(true);
        }, 100);
    };

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
                                onClick={() => handleProductSelect(product)}
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
                        onClick={() => handleProductSelect(product)}
                    />
                ))}
            </div>
        </div>
    );
}