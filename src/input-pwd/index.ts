export class InputPwd extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.appendChild(this.getStyleEle());
    shadow.appendChild(this.getWrapperEle());
  }

  wrapperElement?: HTMLDivElement;

  styleElement?: HTMLStyleElement;

  attributeChangedCallback() {}

  handleFocus() {}

  handleBlur() {}
  handlePaste(event: ClipboardEvent) {
    if (event.clipboardData?.files.length) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    // const text = event.clipboardData?.getData('')
  }

  getWrapperEle() {
    if (this.wrapperElement) {
      return this.wrapperElement;
    }

    this.wrapperElement = window.document.createElement('div');
    this.wrapperElement.className = 'wrapper';
    this.wrapperElement.setAttribute('tabindex', '0');
    this.wrapperElement.addEventListener('keydown', (event: KeyboardEvent) => {
      console.log(event.key);
    });
    this.wrapperElement.addEventListener('focus', () => {
      this.handleFocus();
    });
    this.wrapperElement.addEventListener('blur', () => {
      this.handleBlur();
    });
    this.wrapperElement.addEventListener('paste', this.handlePaste);

    return this.wrapperElement;
  }

  getStyleEle() {
    if (this.styleElement) {
      return this.styleElement;
    }
    this.styleElement = document.createElement('style');

    this.styleElement.textContent = `
        :host{
          border:solid 1px rgb(118,118,118);
         box-sizing:border-box;
         width:147px;
         display:inline-block;
         height:21px;
         vertical-align:middle;
        }
        .wrapper {
          position: relative;
          width:100%;
          height:100%;
         }
       `;
    return this.styleElement;
  }
}

window.customElements.define('input-pwd', InputPwd);
