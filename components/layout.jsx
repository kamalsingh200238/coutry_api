export default function Layout({ children }) {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (typeof window !== "undefined") {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
  } else {
    console.log("you are on server");
  }

  return (
    <>
      <nav className="flex justify-between px-4 py-8 shadow-md">
        <p>Where in the world?</p>
        <button>Dark Mode</button>
      </nav>
      <main>{children}</main>
    </>
  );
}
