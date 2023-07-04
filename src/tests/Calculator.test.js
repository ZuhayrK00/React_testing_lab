import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const addButton = container.getByTestId('operator-add');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button1);
    fireEvent.click(addButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);

    expect(runningTotal.textContent).toEqual('5');
  });

  it('should subtract 4 from 7 and get 3', () => {
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const subtractButton = container.getByTestId('operator-subtract');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button7);
    fireEvent.click(subtractButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);

    expect(runningTotal.textContent).toEqual('3');
  });

  it('should multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const multiplyButton = container.getByTestId('operator-multiply');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button3);
    fireEvent.click(multiplyButton);
    fireEvent.click(button5);
    fireEvent.click(equalsButton);

    expect(runningTotal.textContent).toEqual('15');
  });

  it('should divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const divideButton = container.getByTestId('operator-divide');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divideButton);
    fireEvent.click(button7);
    fireEvent.click(equalsButton);

    expect(runningTotal.textContent).toEqual('3');
  });

  it('should concatenate multiple number button clicks', () => {
    const button1 = container.getByTestId('number1');
    const button2 = container.getByTestId('number2');
    const button3 = container.getByTestId('number3');
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button3);

    expect(runningTotal.textContent).toEqual('123');
  });

  it('should chain multiple operations together', () => {
    const button1 = container.getByTestId('number1');
    const button2 = container.getByTestId('number2');
    const button3 = container.getByTestId('number3');
    const addButton = container.getByTestId('operator-add');
    const subtractButton = container.getByTestId('operator-subtract');
    const multiplyButton = container.getByTestId('operator-multiply');
    const divideButton = container.getByTestId('operator-divide');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button1);
    fireEvent.click(addButton);
    fireEvent.click(button2);
    fireEvent.click(equalsButton);
    fireEvent.click(subtractButton);
    fireEvent.click(button3);
    fireEvent.click(equalsButton);
    fireEvent.click(multiplyButton);
    fireEvent.click(button2);
    fireEvent.click(equalsButton);
    fireEvent.click(divideButton);
    fireEvent.click(button1);
    fireEvent.click(equalsButton);

    expect(runningTotal.textContent).toEqual('2');
  });

  it('should clear the running total without affecting the calculation', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const addButton = container.getByTestId('operator-add');
    const equalsButton = container.getByTestId('operator-equals');
    const clearButton = container.getByTestId('clear');
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button2);
    fireEvent.click(addButton);
    fireEvent.click(button1);
    fireEvent.click(equalsButton);
    fireEvent.click(clearButton);

    expect(runningTotal.textContent).toEqual('0');
  });

})

