function loadPage(page, showLoader = true) {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");

  if (showLoader) {
    loader.classList.add("active"); // show loader
  }

  fetch(page)
    .then(res => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.text();
    })
    .then(data => {
      mainContent.innerHTML = data; // inject page content
    })
    .catch(err => {
      mainContent.innerHTML = "<p class='text-danger'>Error loading page.</p>";
      console.error("❌ Fetch error:", err);
    })
    .finally(() => {
      loader.classList.remove("active"); // hide loader
    });
}

// ✅ Load home.html automatically when site first loads
window.addEventListener("DOMContentLoaded", () => {
  loadPage("home.html", false); // don't show loader for first load
});

function showRegister() {
    document.getElementById('login-form').classList.add('d-none');
    document.getElementById('register-form').classList.remove('d-none');
  }
  function showLogin() {
    document.getElementById('register-form').classList.add('d-none');
    document.getElementById('login-form').classList.remove('d-none');
  }

  