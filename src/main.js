class ValidateForm {
  constructor() {
    this.form = document.querySelector(".forms");  
    this.events();
  }
  events() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const validFields = this.isAValidField();
    const validPassword = this.isAValidPassword();
    const filledFields = this.fieldIsFilled()
    
    if (validFields && validPassword) {
      alert("Formulário enviado!");
      this.form.submit();
    }
  }

  fieldIsFilled() {
    const name = document.querySelector('#name')
   
      name.addEventListener('blur', () => {
        classList.add('input-correct')
      })
    
  }

  isAValidField() {
    let valid = true;

    for (let errorText of this.form.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let field of this.form.querySelectorAll(".validate")) {
      const label = field.previousElementSibling.innerText;
      if (!field.value) {
        this.throwError(field, `O campo ${label.toLowerCase()} é obrigatório`);
        valid = false;
      }
      if (field.classList.contains("cpf")) {
        if (!this.validateCPF(field)) valid = false;
      }
      if (field.classList.contains("email")) {
        if (!this.validateEmail(field)) {
          valid = false;
        }
        }
      }
      return valid;
    }
  

  validateCPF(field) {
    const cpf = new ValidateCpf(field.value);
    if (field.value && !cpf.validate()) {
      this.throwError(field, "CPF inválido");
      return false;
    }
    return true;
  }

  validateEmail(field) {
    const email = field.value;
    let validEmail = true;
    if (email && !email.includes("@", ".")) {
      this.throwError(field, "Insira um e-mail válido");
      validEmail = false;
    }        
    return validEmail;
  }

  isAValidPassword() {
    let validPassword = true;
    const pass1 = document.querySelector("#password");
    const pass2 = document.querySelector("#password-repeat");

    if (pass1.value && pass1.value.length < 8) {
      this.throwError(pass1, "A senha deve ter no mínimo 8 dígitos");
      validPassword = false;
    }
    if (pass1.value !== pass2.value) {
      this.throwError(pass1, "As senhas devem ser exatamente iguais");
      this.throwError(pass2, "As senhas devem ser exatamente iguais");
      validPassword = false;
    }
 
    return validPassword;
  }

  throwError(field, message) {
    const inputs = document.querySelectorAll('.validate')
    const div = document.createElement("div");
    div.innerHTML = message;
    div.classList.add("error-text");
    field.insertAdjacentElement("afterend", div);
  }
}

const validate = new ValidateForm();

// VALIDATING CPF NUMBER

class ValidateCpf {
  constructor(sentCpf) {
    Object.defineProperty(this, "cleanCpf", {
      value: sentCpf.replace(/\D+/g, ""),
      enumerable: true,
      writable: false,
      configurable: false,
    });
    this.validate();
  }

  isSequency() {
    return (
      this.cleanCpf.charAt(0).repeat(this.cleanCpf.length) === this.cleanCpf
    );
  }

  generateNewCpf() {
    const partialCpf = this.cleanCpf.slice(0, -2);
    const firstDigit = ValidateCpf.generateDigit(partialCpf);
    const secondDigit = ValidateCpf.generateDigit(partialCpf + firstDigit);
    this.newCpf = partialCpf + firstDigit + secondDigit;
  }

  static generateDigit(partialCpf) {
    let total = 0;
    let reverse = partialCpf.length + 1;

    for (let numString of partialCpf) {
      total += reverse * Number(numString);
      reverse--;
    }

    const digit = 11 - (total % 11);
    return digit <= 9 ? String(digit) : "0";
  }

  validate() {
    if (!this.cleanCpf) return false;
    if (typeof this.cleanCpf !== "string") return false;
    if (this.cleanCpf.length !== 11) return false;
    if (this.isSequency()) return false;
    this.generateNewCpf();
    return this.newCpf === this.cleanCpf;
  }
}


// cpf mascara

const cpfInput = document.querySelector('.cpf')

cpfInput.addEventListener('keypress', () => {
  let inputLength = cpfInput.value.length
  if (inputLength === 3 || inputLength === 7){
    cpfInput.value += `.`
  }else if(inputLength === 11){
    cpfInput.value += `-`
  }
})
