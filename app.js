const movies = require('./movies.js');

const moviesDH = 
    {
        listMovies: function() {
             movies.forEach(function(elemento) {
                console.log(elemento)})
        },
        
    searchMovies: function(titulo){
        const encontrada = movies.find(elemento => elemento.title === titulo);
        if (encontrada === undefined){return null}
        else if (encontrada.title === titulo){ return "Tu pelicula es " + encontrada}
        else { return null};
    },

    searchMoviesByGenre: function(genero){
        let objPorGenero = movies.filter(function(obj){ return obj.genre === genero });
        let elemento = objPorGenero[0];
        if (elemento.genre === genero){ return elemento} else { console.log('Ese genero no esta disponible.')};},

    totalPrice: function(){
        let totalPrice = this.movies.reduce(function(acum,num){ acum += movies.price ,0
        })},


    changeMovieGenre: function(id){
        let peliculaEncontrada = this.searchMovies(id, nuevoGenero);
        peliculaEncontrada.genre = nuevoGenero;
    }
    };

    module.exports = moviesDH;


    console.log(moviesDH.listMovies());
