class Elementor {
    constructor(selector) {
      this.element = document.querySelector(selector);
      if (!this.element) {
        throw new Error(`Element with selector "${selector}" not found`);
      }
    }
  
    attribute(key, value) {
      this.element.setAttribute(key, value);
      return this;
    }
  
    click(handler) {
      this.element.addEventListener('click', handler);
      return this;
    }
  
    on(eventName, handler) {
      this.element.addEventListener(eventName, handler);
      return this;
    }
  
    text(content) {
      this.element.textContent = content;
      return this;
    }
  
    class(className) {
      if (Array.isArray(className)) {
        this.element.classList.add(...className);
      } else {
        this.element.classList.add(className);
      }
      return this;
    }
  
    removeClass(className) {
      this.element.classList.remove(className);
      return this;
    }
  }
  
  function elementor(selector) {
    return new Elementor(selector);
  }
  
  // نمونه استفاده
  elementor('#some-id')
    .click(() => console.log('HI'))
    .text('Click Me')
    .attribute('title', 'a click button')
    .on('mouseenter', () => console.log('Mouse Entered'))
    .class(['text-bold', 'class2']);
  