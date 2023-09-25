export default function() {
    if ("fontDisplay" in document.body.style === false) {
        if ("fonts" in document) {
            console.log();
            document.fonts.load("1em YinWanZi")
            document.fonts.ready.then(() => {
                document.documentElement.className += "fonts-loaded";
            })
        }
    }
    
}