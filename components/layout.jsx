export default function Layout({ children }) {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (typeof window !== "undefined") {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      // localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      // localStorage.setItem("color-theme", "light");
    }
  } else {
    console.log("you are on server");
  }

  function toggleTheme() {
    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  }

  return (
    <>
      <nav className="flex justify-between px-4 lg:px-8 py-8 shadow-md dark:bg-elements-d dark:text-white">
        <p className="font-bold">Where in the world?</p>
        <button
          className="focus:ring focus:ring-gray-600 rounded-md"
          onClick={toggleTheme}
        >
          Dark Mode
        </button>
      </nav>
      <main>{children}</main>
    </>
  );
}
