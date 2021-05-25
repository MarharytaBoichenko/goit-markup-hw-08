// ;(() => {
//   const menuBtnRef = document.querySelector("[data-menu-button]")
//   const mobileMenuRef = document.querySelector("[data-menu]")

//   menuBtnRef.addEventListener("click", () => {
//     const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false

//     menuBtnRef.classList.toggle("is-open")
//     menuBtnRef.setAttribute("aria-expanded", !expanded)

//     mobileMenuRef.classList.toggle("is-open")
//     // document.body.classList.toggle("is-hiden");
//   })
// })()

;(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]")
  const mobileMenuRef = document.querySelector("[data-menu]")
  const page = document.querySelector("[data-menu-page]");

  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false

    menuBtnRef.classList.toggle("is-open")
    menuBtnRef.setAttribute("aria-expanded", !expanded)

    mobileMenuRef.classList.toggle("is-open");
    page.classList.toggle("menu-is-open");
    
    })
})()