// appController 

//prevent scroll
export const preventScroll = (state: boolean) => {
    // Apply to both HTML and body elements
    document.documentElement.style.overflow = state ? 'hidden' : 'auto';
    document.body.style.overflow = state ? 'hidden' : 'auto';
    
    // Prevent touch scrolling on mobile
    document.body.style.position = state ? 'fixed' : 'static';
    document.body.style.width = '100%';
    
    // Optional: If you need to maintain scroll position when reopening
    if (!state) {
        document.body.style.position = '';
        document.body.style.width = '';
    }
}