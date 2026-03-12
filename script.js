      const resetBtn = document.getElementById("reset-btn");

      resetBtn.addEventListener("click", () => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((cb) => (cb.checked = false));
      });