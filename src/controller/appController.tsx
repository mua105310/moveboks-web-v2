// appController 

//prevent scroll
export const preventScroll = (state: boolean) => {
    document.body.style.overflow = state ? 'hidden' : 'auto';
}