const express = require("express");
const app = express();
const crypto = require("crypto");
const bodyparser = require("body-parser");
const cryptoRandomString = require("crypto-random-string");
const config = require("./config/config");
const requete = require("./model/requete");
const utilisateurs = [];



app.use(
    bodyparser.urlencoded({
        extended: true
    })
);
app.use(bodyparser.json());
app.use(express.static(__dirname + "/public/dist/"));
app.use((req, res, next) => {
    res.setHeader("ACCESS-CONTROL-ALLOW-ORIGIN", "*");
    res.setHeader("ACCESS-CONTROL-ALLOW-METHODS", "GET,POST,PUT,OPTIONS,DELETE,PATCH");
    res.setHeader("ACCESS-CONTROL-ALLOW-HEADERS", "content-type,x-form-data");
    next();
});
app.get("/", (req, res) => {
     res.redirect("/api/article"); 
    
});
app.get("/api", (req, res) => {
    res.redirect("/api/article");
});
app.get("/api/article", (req, res) => {
    config.sql.getConnection((err, connection) => {
        if (err) {
            return {
                erreur_connection: err
            };
        }

        connection.query(requete.sql_article_publier, function(err, articles) {
            if (err) {
                return err;
            }

            res.json(articles);
            //connection.release();
        });
    });
});
app.get("/api/allarticle/", (req, res) => {
    config.sql.getConnection((err, connection) => {
        if (err) {
            return {
                erreur_connection: err
            };
        }

        connection.query(requete.sql_list_article, function(err, allarticles) {
            if (err) {
                return err;
            }

            res.json(allarticles);
            //connection.release();
        });
    });
});
app.get("/api/utilisateurs", (req, res) => {
    config.sql.query(requete.sql_list_users, (err, utilisateurs) => {
        if (err) {
            console.log(err);
        }
        res.json(utilisateurs);
    });
});
app.post("/api/utilisateurs", (req, res) => {
    config.sql.query(requete.sql_list_users, (err, utilisateurs) => {
        if (err) {
            console.log(err);
        }
        res.json(utilisateurs);
    });
});


app.post("/api/login", (req, res) => {
    const {
        email,
        passe
    } = req.body;

    config.sql.query(requete.sql_login(email, passe), (err, dtlogin) => {
        if (err) {
            console.log(err);
        }

        res.json(dtlogin)



    });
});
app.get("/api/utilisateurs/admin", (req, res) => {
    config.sql.query(requete.sql_users_admin, (err, admin) => {
        if (err) {
            console.log(err);
        }
        res.json(admin);
    });
});

app.get("/api/utilisateurs/user", (req, res) => {
    config.sql.query(requete.sql_users_utilisateurs, (err, user) => {
        if (err) {
            console.log(err);
        }
        res.json(user);
    });
});
app.get("/api/article/:id", (req, res) => {
    config.sql.query(
        requete.sql_list_art_de(req.params.id),
        (err, art_unique) => {
            if (err) {
                console.log(err);
            }
            res.json(art_unique);
        }
    );
});
app.get("/api/recherche/:article", (req, res) => {
    config.sql.query(
        requete.sql_recherche_art(req.params.article),
        (err, rech_article) => {
            if (err) {
                console.log(err);
            }
            res.json(rech_article);
        }
    );
});
app.post("/api/article", (req, res) => {
    const id_article = cryptoRandomString(20);
    const date_creation = new Date();
    const nom_article = req.body.nom_article;
    const desc_article = req.body.description;
    const etat_article = req.body.etat;
    const auteur = req.body.auteur;
    /*  const {
         nom_article,
         desc_article,
         etat_article,
         auteur
     } = req.body; */
    console.log(req.body)
    let parametre = {
        id_article: id_article,
        nom_article: nom_article,
        description: desc_article,
        date_creation: date_creation,
        etat: etat_article,
        email: auteur
    }

    config.sql.query(requete.sql_inserer_article(), parametre,
        (err, art_unique) => {
            if (err) {
                console.log(err);
            }
            res.json(art_unique);
        }
    );
});

app.delete("/api/article/:id", (req, res) => {

    config.sql.query(requete.sql_supprimer_article(req.params.id), (err, art_supprimer) => {
        if (err) {
            console.log(err);
        }
        res.json(art_supprimer);
    });
});

app.listen(3000, () => {
    console.log(`serveur gnioos up sur le port 3000 a ${new Date().toLocalString()} `);
});