class InputPwd extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const span = window.document.createElement('div');

    span.innerText = '1234';
    shadow.appendChild(span);
  }
}

window.customElements.define('input-pwd', InputPwd);
