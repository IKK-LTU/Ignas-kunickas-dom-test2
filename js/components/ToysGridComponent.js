class ToyGridComponent {
  constructor() {
    this.state = {
      loading: false,
      toys: [],
    };
    this.init();
  }

  initFetch = () => {
    setTimeout(() => {
      API.fetchToys(
        (toys) => {
          this.state.loading = false;
          this.saveToys(toys);
          console.log("parsiusta");
        },
        (err) => {
          alert(err);
          this.state.loading = false;
          this.render();
        }
      );
    }, 1000);
  };
  saveToys = (toys) => {
    this.state.toys = toys;
    console.log(toys);

    this.render();
  };

  init = () => {
    this.state.loading = true;
    this.htmlElement = document.createElement("div");
    this.htmlElement.className = "row g-3";
    this.initFetch();
    this.render();
  };
  wrapInColumn = (element) => {
    const column = document.createElement("div");
    column.className = "col-12 col-sm-6 col-lg-4 col-xl-3";
    column.appendChild(element);
    return column;
  };
  render = () => {
    const { loading, toys } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = `<div class="text-center"><img src="../../assets/loading.gif"/></div>`;
    } else if (toys.length > 0) {
      this.htmlElement.innerHTML = "";
      const toysElements = toys
        //      destruring + rest params
        .map(
          ({ id, ...props }) =>
            new ToysCardComponent({
              ...props,
              onDelete: () => this.deleteCar(id),
            })
        )
        .map((x) => x.htmlElement)
        .map(this.wrapInColumn);
      this.htmlElement.append(...toysElements);
    } else {
      this.htmlElement.innerHTML = `<h1 class="m-auto">Žaislų šiuo metu nėra</h1>`;
    }
  };
}
