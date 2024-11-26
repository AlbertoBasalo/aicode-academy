// Font loading optimization
(function() {
    // Optimization for Repeat Views
    if (sessionStorage.fontsLoadedFoutWithClass) {
        document.documentElement.className += " fonts-loaded";
        return;
    }

    if ("fonts" in document) {
        Promise.all([
            document.fonts.load("1em Share Tech Mono"),
            document.fonts.load("1em Major Mono Display")
        ]).then(function () {
            document.documentElement.className += " fonts-loaded";
            // Optimization for Repeat Views
            sessionStorage.fontsLoadedFoutWithClass = true;
        });
    }
})(); 