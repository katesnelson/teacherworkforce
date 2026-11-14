// Hugo Blox JS Global Init (CSP-friendly)
// ERRE uses a fixed light reading surface with a dark hero and navigation.
// Previously saved visitor themes must not override the institutional palette.
export function initTheme() {
  const root = document.documentElement;
  root.classList.remove("dark");
  root.style.colorScheme = "light";
  root.removeAttribute("data-theme-pack");
}

export function applyHugoStyleFixes() {
  document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("li input[type='checkbox'][disabled]");
    checkboxes.forEach((e) => {
      const parent = e.parentElement?.parentElement;
      if (parent) parent.classList.add("task-list");
    });

    const liNodes = document.querySelectorAll(".task-list li");
    liNodes.forEach((nodes) => {
      const textNodes = Array.from(nodes.childNodes).filter((node) => node.nodeType === 3 && node.textContent && node.textContent.trim().length > 1);
      if (textNodes.length > 0) {
        const span = document.createElement("label");
        textNodes[0].after(span);
        const input = nodes.querySelector("input[type='checkbox']");
        if (input) span.appendChild(input);
        span.appendChild(textNodes[0]);
      }
    });
  });
}
