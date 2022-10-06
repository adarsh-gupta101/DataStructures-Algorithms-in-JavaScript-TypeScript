
class MinStack {
    constructor() {
        this.elements = [];
    }
    /**
      
       @param {number} x
       @return {void}
       */
    push(x) {
        this.elements.push({
            value: x,
            min: this.elements.length === 0 ? x : Math.min(x, this.getMin()),
        });
    }
    /**
      
       @return {void}
       */
    pop() {
        this.elements.pop();
    }
    /**
      
       @return {number}
       */
    top() {
        return this.elements[this.elements.length - 1].value;
    }
    /**
      
       @return {number}
       */
    getMin() {
        return this.elements[this.elements.length - 1].min;
    }
}
  
