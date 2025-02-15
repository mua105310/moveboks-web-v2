import { ProductConstraintModel } from "@/internal/models/package";
import { AccessoryConstraints } from "@/internal/models/accessory";

//get mminium price from productConstraint
export const getMinimumPrice = (productConstraint: ProductConstraintModel | AccessoryConstraints): number => {
    let totalPrice: number = 0;
    
    if (productConstraint.type === "buy") {
        totalPrice = productConstraint.buy_price!;
    } else { 
        for(let price of productConstraint.rent_prices!){
            if (totalPrice === 0 || price.price < totalPrice) {
                totalPrice = price.price;
        }
        }
    }
    return totalPrice;
};

