class ToysCardComponent {
  constructor(props) {
    this.props = props;
    this.init();
  }
  init = () => {
    const { id, title, price, ageRestriction, discount, imgSrc } = this.props;
    const { currency, amount } = price;

    this.htmlElement = document.createElement("article");
    this.htmlElement.className = "card mb-3";
    this.htmlElement.innerHTML = `
        <div class="row g-0">
    <div class="col-md-4 my-auto">
      <img src=${imgSrc} class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text">${amount} ${currency}</p>
      </div>
    </div>
  </div>
        `;
  };
}
