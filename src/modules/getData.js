const getData = () => {
    return fetch('https://test-ozon-daa30-default-rtdb.firebaseio.com/goods.jsongit')
        .then(response => response.json());
        
};

export default getData;