class CarApi {
    static getAll() {
        return  fetch('http://127.0.0.1:3000/api/cars').then( resp => {
            return resp.json();
        }).catch(err => {
            return err;
        })
    }
}

export default CarApi;
