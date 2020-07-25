function getTemplate(data = [], placeholder = 'Placeholder по умолчанию') {
  
 return `
  <div class="select__input" data-type="input">${placeholder}</div>
    <div class="select__dropdown">
      <div class="select__list">
        <div class="select__item">hi</div>
        <div class="select__item">man</div>
      </div>
    </div>
  </div>
 `
}

export class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.options = options
    
    this.#render()
    this.#setup()
  }
  
  #render() {
    this.$el.innerHTML = getTemplate()
  }
  
  #setup() {
    this.clickHandler = this.clickHandler.bind(this)
    this.$el.addEventListener('click', this.clickHandler)
  }
  
  get isOpen() {
    return this.$el.classList.contains('open')
  }
  
  clickHandler(event) {
    const {type} = event.target.dataset
    
    if (type === 'input') {
      this.toggle()
    }
  }
  
  toggle() {
    this.isOpen ? this.close() : this.open()
  }
  
  open() {
    this.$el.classList.add('open')
  }
  
  close() {
    this.$el.classList.remove('open')
  }
}
