const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;

      if (value === 'C') {
        // Clear display
        display.textContent = '0';
      } else if (value === '=') {
        // Evaluate expression
        try {
          display.textContent = eval(display.textContent);
        } catch {
          display.textContent = 'Error';
        }
      } else {
        // Append value to display (replace 0 initially)
        if (display.textContent === '0') {
          display.textContent = value;
        } else {
          display.textContent += value;
        }
      }
    });
  });