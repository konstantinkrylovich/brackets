module.exports = function check(str, bracketsConfig) {
  // your solution

  class Stack {
    constructor() {
      this.collection = [];
    }
    push(val) {
      return this.collection.push(val);
    }
    pop() {
      return this.collection.pop();
    }
    peek() {
      return this.collection[this.collection.length - 1];
    }
    isEmpty() {
      return this.collection.length === 0;
    }
    clear() {
      return this.collection.length = 0;
    }
  }

  stackBrackets = new Stack();
  let brackets = str.split('');
  debugger;
  for(let i = 0; i < brackets.length; i++) {
    for(let j = 0; j < bracketsConfig.length; j++) {
      if (brackets[i] == bracketsConfig[j][0]) {
        if (brackets[i] == bracketsConfig[j][1] && !stackBrackets.isEmpty()) {
          let lastBracket = stackBrackets.pop();
          if (lastBracket == bracketsConfig[j][0]) {
            break;
          } else {
            stackBrackets.push(lastBracket);
            stackBrackets.push(brackets[i]);
          }
        } else{
          stackBrackets.push(brackets[i]);
          break;
        }
        
      } else if (brackets[i] == bracketsConfig[j][1]) {
        let lastBracket = stackBrackets.pop();
        if (lastBracket == bracketsConfig[j][0]) {
          break;
        } else {
          return false;
        }
      }
    }
  }
  if (stackBrackets.isEmpty()) {
    return true;
  } else {
    return false;
  }
  
}

