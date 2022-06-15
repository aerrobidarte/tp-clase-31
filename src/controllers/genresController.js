const db=require("../database/models");
let genresController={
    list:function(req,res){
        db.Generos.findAll()
            .then(function(genres){
                res.render("genresList",{genres:genres})
            })
    },
    detail:function(req,res){
        db.Generos.findByPk(req.params.id)
        .then(function(genre){
            res.render("genresDetail",{genre:genre})
        })
    }
}
module.exports=genresController;