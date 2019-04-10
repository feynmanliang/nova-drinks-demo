import "aframe";

window.handleCustomLogoUpload = files => {
  const FR = new FileReader();
  FR.addEventListener("load", e => {
    document.getElementById("logo-custom").setAttribute("src", e.target.result);
    handleLogoChanged("logo-custom");
  });

  const logoFile = files[0];
  FR.readAsDataURL(logoFile);
};

const handleLogoChanged = logoId => {
  document.getElementById("drink").removeAttribute("material");
  document.getElementById("drink").setAttribute("material", `src: #${logoId}`);
};

document
  .querySelectorAll("input[type=radio][name=logo-select]")
  .forEach(radio => {
    radio.addEventListener("change", e => {
      handleLogoChanged(e.target.value);
    });
  });
