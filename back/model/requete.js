module.exports = {
    sql_list_users: `SELECT * FROM utilisateurs`,
    sql_list_article: `SELECT * FROM article`,
    sql_list_art_de: function(id) {
        return `SELECT * FROM article WHERE id_article='${id}'`;
    },
    sql_recherche_art: function(nom_article) {
        return `SELECT * FROM article WHERE nom_article LIKE'%${nom_article}%'`;
    },
    sql_login: function(email, passe) {
        return `SELECT * FROM utilisateurs WHERE email='${email}' AND emprunte='${passe}'`;
    },
    sql_inserer_article: function() {

        return `INSERT INTO article SET ?`;
    },
    sql_supprimer_article: function(id) {

        return `DELETE FROM article where id_article = '${id}'`;
    },
    sql_article_publier: `SELECT * FROM article where etat="publier"`,
    sql_users_admin: `SELECT * FROM utilisateurs where type="admin"`,
    sql_users_utilisateurs: `SELECT * FROM utilisateurs where type="user"`,
    sql_inserer_user: function(
        email,
        emprunte,
        type

    ) {
        return `INSERT INTO utilisateurs (emai,emprunte,type) VALUES (${email},${emprunte},${type})`;
    },
};
/* DELETE FROM`article` WHERE`article`.`id_article` = 'efa9ab2439bd824c2d4c' */