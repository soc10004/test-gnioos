-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  ven. 22 nov. 2019 à 14:16
-- Version du serveur :  10.4.8-MariaDB
-- Version de PHP :  7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `gnioos_test`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `id_article` varchar(20) NOT NULL,
  `nom_article` varchar(50) NOT NULL,
  `description` longtext NOT NULL,
  `date_creation` datetime NOT NULL,
  `etat` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`id_article`, `nom_article`, `description`, `date_creation`, `etat`, `email`) VALUES
('164ed7b696d0a4004b23', 'Testassasa', 'asssssssdddddddddddddddddddddd', '2019-11-22 02:41:00', 'publier', '\"azizvrss@gmail.com\"'),
('1ec268fec853f6e32bf3', 'Comment integrer SOLIDARITY WORLD??', 'outer Event: ResolveStart\nplatform-browser.js:211 ResolveStart(id: 1, url: \'/ajouter-article\', urlAfterRedirects: \'/ajouter-article\', state: Route(url:\'\', path:\'\') { Route(url:\'ajouter-article\', path:\'ajouter-article\') } )', '2019-11-22 02:11:20', 'publier', '\"azizvrss@gmail.com\"'),
('2cd6770402fd4c137610', 'Pourquoi le projet GNIOOS??', 'Router Event: ResolveStart\nplatform-browser.js:211 ResolveStart(id: 2, url: \'/ajouter-article\', urlAfterRedirects: \'/ajouter-article\', state: Route(url:\'\', path:\'\') { Route(url:\'ajouter-article\', path:\'aj', '2019-11-22 02:09:28', 'publier', '\"azizvrss@gmail.com\"'),
('a7a586cd36123f7e9a65', 'Que savez vous de GNIOOS', 'Gnioos est un projet etc...,', '2019-11-21 02:18:22', 'attente', 'azizvrss@gmail.com'),
('a7a896cd36123f7e9a65', 'Bonjour tous le monde', 'Ceci est juste un article test pour le test gnioos', '2019-11-20 00:00:00', 'publier', 'azizvrss@gmail.com'),
('a7a896cd36452f7e9a65', 'Bonjour tous le GNIOOS', 'Bonjour les menbre du gnioos team', '2019-11-20 00:00:00', 'publier', 'azizvrss@gmail.com'),
('a7a896cdsa123f7e9a65', 'Regle GNIOOS', 'Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes. For example, we reboot some <table> styles for a simpler baseline and later provide .table, .table-bordered, and more.', '2019-11-21 03:18:22', 'publier', 'azizvrss@gmail.com'),
('deb8623a76406bfe0f6d', 'Donnee de POSTMAN', 'Bonjour tous le monde, Ce formulaire a ete envoyer depuis postman', '2019-11-21 20:38:01', 'publier', 'ghost403@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `email` varchar(50) NOT NULL,
  `emprunte` varchar(50) NOT NULL,
  `type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`email`, `emprunte`, `type`) VALUES
('azizvrss@gmail.com', '1234', 'admin'),
('test@gmail.com', '1234', 'admin');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id_article`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
