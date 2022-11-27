export const handleFadeOut = (component, callback, navTo) => {
    if(component){
        component.classList = ''
        component.classList = 'fade-out'

        if(callback){
            setTimeout(() => {
                callback(navTo)
            }, 1000)
        }
    }
}