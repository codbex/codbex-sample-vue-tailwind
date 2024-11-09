// Custom Element Sample
export default class StyledTextBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <input type="text" class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2">
        `;
    }
}
customElements.define("styled-textbox", StyledTextBox);