const addtocart = () => {
    let name = document.querySelector('.name').value;
    // let price = document.querySelector('.card-text').value;
    fetch('http://localhost:3000/product', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            'name': `${name}`,
            // 'price': `${price}`
        })
    });
    window.location.href = 'cart.html'
}