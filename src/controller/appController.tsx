// appController 

//prevent scroll
export const preventScroll = (state: boolean) => {
    document.documentElement.style.cssText = state 
        ? 'overflow: hidden; height: 100vh; touch-action: none;' 
        : '';
}