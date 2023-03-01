class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    if (Object.entries(this.items).length > 1) {
      this.top -= 1;
      this.items = Object.entries(this.items)
        .slice(0, -1)
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
    } else {
      this.top = -1;
      this.items = {};
    }
  }
}

describe('my implementation of the stack data structure', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.peek).toBe(undefined);
    expect(stack.items).toEqual({});
  });

  it('can push to the top', () => {
    stack.push('🟢');

    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🟢');
  });

  it('can pop off', () => {
    stack.push('🟢');

    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🟢');

    stack.push('🟡');

    expect(stack.top).toBe(1);
    expect(stack.peek).toBe('🟡');

    stack.pop();

    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🟢');

    stack.pop();

    expect(stack.top).toBe(-1);
    expect(stack.peek).toBe(undefined);
    expect(stack.items).toEqual({});
  });
});
