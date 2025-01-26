import { ProductConstraintModel } from "@/internal/models/package";

//get mminium price from productConstraint
export const getMinimumPrice = (productConstraint: ProductConstraintModel): number => {
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

