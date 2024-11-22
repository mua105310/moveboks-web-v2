//Prevent scroll
export const preventScroll = (state: boolean) => {
    document.documentElement.style.cssText = state 
        ? 'overflow: hidden; height: 100vh; touch-action: none;' 
        : '';
}

//Increase quantity
const increase = (quantity: number) => {
    return quantity + 1;
}