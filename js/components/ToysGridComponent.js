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
              console.log('parsiusta')
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

  render = () => {
    const { loading, toys } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = `<div><img src="../../assets/loading.gif"/></div>`;
    } else if(toys.length>0) {
      this.htmlElement.innerHTML = `<div><img src="../../assets/loading.gif"/></div>`;

      }
    else {
            this.htmlElement.innerHTML = `<h1>Nera itemu</h1>`;
        
      }
  };
}
