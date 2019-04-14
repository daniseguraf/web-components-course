class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener('click', (event) => {
      if(!confirm('Do you really want lo leave?')) {
        event.preventDefault();
      }
    })

    // // const a = document.createElement('a');
    // // a.textContent = "Enlace";

    // // this.appendChild(a)
    // this.appendChild(document.createElement('a').innerText("Enlace"))
  }
}

customElements.define('uc-confirm-link', ConfirmLink, {extends: 'a'});