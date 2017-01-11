module.exports = {

     getToken() {
         return localStorage.getItem('token')
     },

     logout(cb) {
         localStorage.removeItem('token')
         if (cb) cb()
     }
};
