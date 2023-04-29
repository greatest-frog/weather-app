export const displayError = (error) => {
  if (error.message === "Failed to fetch") {
    document.querySelector(".content")?.classList.add("disabled");
    document.querySelector(".error_no-page")?.classList.add("disabled");
    document
      .querySelector(".error_no-connection")
      ?.classList.remove("disabled");
  } else {
    document.querySelector(".content")?.classList.add("disabled");
    document.querySelector(".error_no-connection")?.classList.add("disabled");
    document.querySelector(".error_no-page")?.classList.remove("disabled");
  }
};
