function updateHTMLTheme(mode: "light" | "dark") {
    const themeColorMetaTag = document.head.querySelector(
        'meta[name="theme-color"]',
    );

    if (mode === "dark") {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        if (themeColorMetaTag) {
            // @ts-ignore
            themeColorMetaTag.content = "#262626";
        }
    } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        if (themeColorMetaTag) {
            // @ts-ignore
            themeColorMetaTag.content = "#ffffff";
        }
    }
}
function updateStorageTheme(mode: "light" | "dark") {
    if (mode === "dark") {
        sessionStorage.setItem("theme", "dark");
    } else {
        sessionStorage.setItem("theme", "light");
    }
}
class ModeToggle extends HTMLElement {
    constructor() {
        super();
        let currentMode: "light" | "dark" =
            document.documentElement.classList.contains("dark")
                ? "dark"
                : "light";

        const toggle = this.querySelector("button");
        const iconElem = toggle?.querySelector("#mode-circle");

        if (iconElem) {
            // set the toggle mode based on the html classname set in ThemeScript.astro
            if (currentMode === "dark") {
                iconElem.classList.remove("light");
                iconElem.classList.add("dark");
            }

            // we load the toggle invisible to prevent flash
            // remove visibility class after setting initial dark/light class
            iconElem.classList.remove("invisible");

            // Each time the button is clicked, update the count.
            toggle?.addEventListener("click", () => {
                if (currentMode === "dark") {
                    const modeToSwitch = "light";
                    iconElem.classList.remove("dark");
                    iconElem.classList.add("light");
                    updateHTMLTheme(modeToSwitch);
                    updateStorageTheme(modeToSwitch);
                    currentMode = modeToSwitch;
                } else {
                    const modeToSwitch = "dark";
                    iconElem.classList.remove("light");
                    iconElem.classList.add("dark");
                    updateHTMLTheme(modeToSwitch);
                    updateStorageTheme(modeToSwitch);
                    currentMode = modeToSwitch;
                }

                // prevent slide animation on page load for dark mode
                if (!iconElem.classList.contains("duration-300")) {
                    iconElem.classList.add("duration-300");
                }
            });
        }
    }
}

customElements.define("mode-toggle", ModeToggle);