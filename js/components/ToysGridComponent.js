class ToyGridComponent{
    constructor() {
        this.state = {
            toys:[]
        }
        this.init();
    }
    init = () => {
            this.htmlElement = document.createElement("div");
            this.htmlElement.className = "row g-3";
        this.htmlElement.innerHTML = `<div><img src="../../assets/loading.gif"/></div>`;
    }
}