class ToysCardComponent {
  static USD_EUR = 0.87;
  constructor(props) {
    this.props = props;
    this.init();
  }
  init = () => {
    const { id, title, price, ageRestriction, discount, imgSrc, onDelete } =
      this.props;
    const { currency, amount } = price;

    const finalPrice =
      currency === "$" ? amount * ToysCardComponent.USD_EUR : amount;
    const formatedPrice = Math.round(100 * finalPrice) / 100 + " €";
    const agee =
      ageRestriction.from === null ? "Neribojamas" : `${ageRestriction.from} +`;
    this.htmlElement = document.createElement("article");
    this.htmlElement.className = "card mb-3 h-100";
    this.htmlElement.innerHTML = `
<div class="row g-0 d-flex h-100">
  <div class="h-50">
  <img src="${imgSrc}" class="card-img-top" alt="...">
  </div>
  <div class="card-body  justify-content-end">
    <h5 class="card-title ">${title}</h5>
    <span class="card-text">Kaina: ${formatedPrice}</span></br>
    <span class="card-text my-1">Amžius: ${agee}</span>
    <div class="text-center mt-2 ">
        <button class="btn btn-danger w-100">Ištrinti</button>
      </div>
  </div>
</div> `;
    const btn = this.htmlElement.querySelector(".btn");
    btn.addEventListener("click", onDelete);
  };
}
