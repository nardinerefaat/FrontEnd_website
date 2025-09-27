let team_member = document.querySelectorAll(".team_member");

team_member.forEach(box => {
  let icons = box.querySelector(".icons");

  box.addEventListener("mouseenter", () => {
    icons.hidden = false;
  });

  box.addEventListener("mouseleave", () => {
    icons.hidden = true;
  });
});
