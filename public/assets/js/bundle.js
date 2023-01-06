(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){u=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw o}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(t,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,a=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===e(a)?a:String(a)),i)}var a}function a(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}new(function(){function e(){n(this,e),this.form=document.querySelector(".forms"),this.events()}return a(e,[{key:"events",value:function(){var e=this;this.form.addEventListener("submit",(function(t){e.handleSubmit(t)}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.isAValidField(),r=this.isAValidPassword();this.fieldIsFilled(),t&&r&&(alert("Formulário enviado!"),this.form.submit())}},{key:"fieldIsFilled",value:function(){document.querySelector("#name").addEventListener("blur",(function(){classList.add("input-correct")}))}},{key:"isAValidField",value:function(){var e,r=!0,n=t(this.form.querySelectorAll(".error-text"));try{for(n.s();!(e=n.n()).done;)e.value.remove()}catch(e){n.e(e)}finally{n.f()}var i,a=t(this.form.querySelectorAll(".validate"));try{for(a.s();!(i=a.n()).done;){var o=i.value,l=o.previousElementSibling.innerText;o.value||(this.throwError(o,"O campo ".concat(l.toLowerCase()," é obrigatório")),r=!1),o.classList.contains("cpf")&&(this.validateCPF(o)||(r=!1)),o.classList.contains("email")&&(this.validateEmail(o)||(r=!1))}}catch(e){a.e(e)}finally{a.f()}return r}},{key:"validateCPF",value:function(e){var t=new o(e.value);return!(e.value&&!t.validate()&&(this.throwError(e,"CPF inválido"),1))}},{key:"validateEmail",value:function(e){var t=e.value,r=!0;return t&&!t.includes("@",".")&&(this.throwError(e,"Insira um e-mail válido"),r=!1),r}},{key:"isAValidPassword",value:function(){var e=!0,t=document.querySelector("#password"),r=document.querySelector("#password-repeat");return t.value&&t.value.length<8&&(this.throwError(t,"A senha deve ter no mínimo 8 dígitos"),e=!1),t.value!==r.value&&(this.throwError(t,"As senhas devem ser exatamente iguais"),this.throwError(r,"As senhas devem ser exatamente iguais"),e=!1),e}},{key:"throwError",value:function(e,t){document.querySelectorAll(".validate");var r=document.createElement("div");r.innerHTML=t,r.classList.add("error-text"),e.insertAdjacentElement("afterend",r)}}]),e}());var o=function(){function e(t){n(this,e),Object.defineProperty(this,"cleanCpf",{value:t.replace(/\D+/g,""),enumerable:!0,writable:!1,configurable:!1}),this.validate()}return a(e,[{key:"isSequency",value:function(){return this.cleanCpf.charAt(0).repeat(this.cleanCpf.length)===this.cleanCpf}},{key:"generateNewCpf",value:function(){var t=this.cleanCpf.slice(0,-2),r=e.generateDigit(t),n=e.generateDigit(t+r);this.newCpf=t+r+n}},{key:"validate",value:function(){return!!this.cleanCpf&&"string"==typeof this.cleanCpf&&11===this.cleanCpf.length&&!this.isSequency()&&(this.generateNewCpf(),this.newCpf===this.cleanCpf)}}],[{key:"generateDigit",value:function(e){var r,n=0,i=e.length+1,a=t(e);try{for(a.s();!(r=a.n()).done;){var o=r.value;n+=i*Number(o),i--}}catch(e){a.e(e)}finally{a.f()}var l=11-n%11;return l<=9?String(l):"0"}}]),e}(),l=document.querySelector(".cpf");l.addEventListener("keypress",(function(){var e=l.value.length;3===e||7===e?l.value+=".":11===e&&(l.value+="-")}))})();
//# sourceMappingURL=bundle.js.map