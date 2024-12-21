document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll("#now-nav ul li a");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            e.preventDefault();

            // Remove active class from tabs and contents
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            // Activate the clicked tab and corresponding content
            tab.classList.add("active");
            document.getElementById(tab.getAttribute("data-tab")).classList.add("active");
        });
    });
});
