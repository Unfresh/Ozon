const cart = () => {
    const cartModal = document.querySelector('.cart');
    const  cartBtn = document.querySelector('#cart');
    const  cartClose = cartModal.querySelector('.cart-close');


    function openModal() {
        cartModal.style.display = 'block';
    }

    function closeModal() {
        cartModal.style.display = 'none';
    }


    cartBtn.addEventListener('click', openModal);

    cartClose.addEventListener('click', closeModal);
};

export default cart;