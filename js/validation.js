const doc = document;

function contactFormValidations(){
  const $form = doc.querySelector(".contact-form"),
    $inputs = doc.querySelectorAll(".contact-form *[required]");//captura solo los imputs de validacion
    $inputs.forEach( input => {
      const $span = doc.createElement("span");
      $span.id = input.name;
      $span.textContent = input.title;
      $span.classList.add("contact-form-error", "none")
      input.insertAdjacentElement("afterend", $span);
    });

    doc.addEventListener("keyup", e => {
      if(e.target.matches(".contact-form [required]")){
        let $input =e.target,
          pattern = $input.pattern || $input.dataset.pattern;
        if(pattern && $input.value !== "") {
          // console.log("tiene patron")
          let regex = RegExp(pattern)
          return !regex.exec($input.value)
            ? doc.getElementById($input.name).classList.add("is-active")
            : doc.getElementById($input.name).classList.remove("is-active")
        }
        if(!pattern){
          return $input.value === ""
            ? doc.getElementById($input.name).classList.add("is-active")
            : doc.getElementById($input.name).classList.remove("is-active")
        }
      }
    });

    doc.addEventListener("submit", e =>{
      e.stopPropagation()
      alert("Enviando Formulario");
      const $loader = doc.querySelector(".contact-form-loader"),
        $response = doc.querySelector(".contact-form-response");

        $loader.classList.remove("none");
        setTimeout(() => {
          $loader.classList.add("none");
          $response.classList.remove("none");
          $form.reset();
          setTimeout(() => $response.classList.add("none"), 16000);
        }, 3000);
    });
}
export {contactFormValidations}