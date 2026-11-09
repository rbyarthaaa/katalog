const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.card');
const buyButtons = document.querySelectorAll('.buy');

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((item) => item.classList.remove('active'));
    chip.classList.add('active');

    const selected = chip.textContent.trim();

    cards.forEach((card) => {
      const tag = card.querySelector('.tag')?.textContent.trim();
      const shouldShow = selected === 'Semua' || tag === selected;
      card.style.display = shouldShow ? 'block' : 'none';
    });
  });
});

buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.closest('.card')?.querySelector('h3')?.textContent.trim() || 'produk';
    button.textContent = 'Ditambahkan';
    button.disabled = true;
    button.style.opacity = '0.7';
    alert(`${productName} berhasil ditambahkan ke keranjang.`);
  });
});
