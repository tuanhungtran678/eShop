const sidebar =
document.getElementById(
    "sidebar"
);

const overlay =
document.getElementById(
    "overlay"
);

const menuBtn =
document.getElementById(
    "menuBtn"
);

const closeSidebar =
document.getElementById(
    "closeSidebar"
);

function openSidebar() {

    sidebar.classList.add(
        "active"
    );

    overlay.classList.add(
        "active"
    );
}

function hideSidebar() {

    sidebar.classList.remove(
        "active"
    );

    overlay.classList.remove(
        "active"
    );
}

if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        openSidebar
    );
}

if (closeSidebar) {

    closeSidebar.addEventListener(
        "click",
        hideSidebar
    );
}

if (overlay) {

    overlay.addEventListener(
        "click",
        hideSidebar
    );
}

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            hideSidebar();
        }
    }
);