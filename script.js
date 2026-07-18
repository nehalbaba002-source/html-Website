const cartCount = document.getElementById('cart-count');
const buttons = document.querySelectorAll('.add-to-cart');
let count = 0;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    count += 1;
    cartCount.textContent = count;
    button.textContent = 'Added';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = 'Add to Cart';
      button.disabled = false;
    }, 1200);
  });
});
