const res = require("express/lib/response");
const { Sequelize } = require("../database/models");
const db=require("../database/models");
const op=Sequelize.Op;

let moviesController={
    list: function(req,res){
        console.log("LLegue");
        db.Peliculas.findAll()
            .then(function(peliculas){
                res.render("moviesList",{peliculas:peliculas})
            })
    },
    detail: function(req,res){
        db.Peliculas.findByPk(req.params.id)
            .then(function(movie){
                res.render("moviesDetail",{movie:movie})
            })
    },
    new: function(req,res){
        db.Peliculas.findAll({
            order:[
                ["release_date","ASC"]
            ]
        })
            .then(function(movies){
                res.render("newestMovies",{movies:movies})
            })
    },
    recomended: function(req,res){
        db.Peliculas.findAll({
            order:[
                ["rating","DESC"]
            ],
            limit:5,
        })
            .then(function(movies){
                res.render("recommendedMovies",{movies:movies})
            })
    }
};
module.exports=moviesController;
