// Custom Element Sample
export default class PersonDetails extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <blockquote>
                <p style="color: blue; font-family: monospace">Person Record Component</p>
            </blockquote>`;
    }
}
customElements.define("person-details", PersonDetails);