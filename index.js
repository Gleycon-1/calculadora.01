document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('.text');
  const buttons = document.querySelectorAll('button');
  const submitButton = document.querySelector('.somar');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const buttonText = button.textContent;

      if (buttonText === 'ECL') {
        input.value = input.value.length > 1 ? input.value.slice(0, -1) : '0.';
      } else if (buttonText === 'AC') {
        input.value = '0.';
      } else if (buttonText === '÷') {
        input.value += '/';
      } else if (buttonText === '×') {
        input.value += '*';
      } else if (buttonText === ',') {
        const lastChar = input.value.slice(-1);
        if (!input.value.includes(',') && !/\D$/.test(lastChar)) {
          input.value += ',';
        }
      } else if (buttonText === '(') {
        const lastChar = input.value.slice(-1);
        if (lastChar === undefined || /\D/.test(lastChar)) {
          input.value += '(';
        } else {
          input.value += '*(';
        }
      } else {
        if (input.value === '0.' && /\d/.test(buttonText)) {
          input.value = buttonText;
        } else {
          input.value += buttonText;
        }
      }
    });
  });

  submitButton.addEventListener('click', function () {
    try {
      const cleanInput = input.value.replace(/,/g, '.');
      input.value = eval(cleanInput.replace(/%/g, '/100*').replace('×', '*').replace('÷', '/'));
    } catch (error) {
      input.value = 'Erro';
    }
  });
});
