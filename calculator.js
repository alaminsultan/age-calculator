function calculateAge() {
  const input = document.getElementById("birthdate").value;
  const result = document.getElementById("result");

  if (!input) {
    result.innerHTML = "Select a birthdate!";
    return;
  }

  const birthDate = new Date(input);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.innerHTML = `Age: ${years} years, ${months} months, ${days} days`;
}

// Add event listener to the button

const btn = document.querySelector("button");

btn.addEventListener("mouseenter", () => {
  gsap.to(btn, {
    scale: 1.05,
    boxShadow: "0 8px 25px rgba(106,17,203,0.75)",
    duration: 0.3,
  });
});

btn.addEventListener("mouseleave", () => {
  gsap.to(btn, {
    scale: 1,
    boxShadow: "0 6px 15px rgba(37,117,252,0.6)",
    duration: 0.3,
  });
});
