import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["form", "input", "list"]

  connect() {
    console.log('Connected to the Search Movies controller');
    console.log(this.formTarget)
    console.log(this.inputTarget)
    console.log(this.listTarget)
  }

  update(event) {
    // TODO: send request in AJAX"
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    fetch(url, { headers: { "Accept": "text/plain" } })
      .then(response => response.text())
      .then((data) => {
        this.listTarget.outerHTML = data
      })
  }
}
