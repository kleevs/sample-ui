class KInput extends HTMLElement {
    private input: HTMLInputElement;

    constructor() {
        super();
        this.input = document.createElement('input');
        ['w-full', 'border', 'border-gray-300', 'dark:border-gray-600', 'p-2', 'rounded', 'shadow-sm', 'bg-white', 'dark:bg-gray-700', 'dark:text-white']
            .forEach(c => this.input.classList.add(c));
    }

    connectedCallback() {
        const input = this.input;
        this.appendChild(input);
    }
}

["id", "name", "value", "placeholder"].forEach(attribute => {
    if (!(attribute in KInput.prototype)) {
        Object.defineProperty(KInput.prototype, attribute, {
            get: function () {
                return this.input[attribute];
            },
            set: function(value: string) {
                this.input.setAttribute(attribute, value);
                this.input[value] = value;
            }
        });
    }
});

// Register the custom element
if (!customElements.get("k-input")) {
    customElements.define("k-input", KInput);
}