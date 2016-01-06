-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Client :  localhost:8889
-- Généré le :  Dim 22 Novembre 2015 à 21:12
-- Version du serveur :  5.5.38
-- Version de PHP :  5.6.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `tradr`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
`id` int(11) NOT NULL,
  `id_parent` int(11) DEFAULT NULL,
  `libelle` varchar(255) NOT NULL,
  `rang` int(10) NOT NULL DEFAULT '1'
) ENGINE=InnoDB AUTO_INCREMENT=163 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `categories`
--

INSERT INTO `categories` (`id`, `id_parent`, `libelle`, `rang`) VALUES
(1, NULL, 'Home', 0),
(2, NULL, 'Informatique', 0),
(3, NULL, 'Image & Son', 0),
(4, NULL, 'Jeux & Consoles', 0),
(5, NULL, 'Qui sommes-nous', 0),
(6, NULL, 'Contact', 0),
(7, 2, 'Pièce', 0),
(8, 2, 'Périphérique', 0),
(9, 2, 'Portable', 0),
(10, 2, 'Ordinateur', 0),
(11, 2, 'Réseau', 0),
(12, 3, 'Photo', 0),
(13, 3, 'Caméra', 0),
(14, 3, 'Télévision', 0),
(15, 3, 'Meuble', 0),
(16, 3, 'Home cinéma / Hifi', 0),
(17, 3, 'Lecteur enregistreur', 0),
(18, 3, 'Son numérique', 0),
(19, 3, 'Hi-Fi embarquée', 0),
(20, 3, 'Projection', 0),
(21, 3, 'Affichage public', 0),
(22, 4, 'Univers PC', 0),
(23, 4, 'Univers PS4', 0),
(24, 4, 'Univers PS3', 0),
(25, 4, 'Univers Xbox One', 0),
(26, 4, 'Univers 3DS & 2DS', 0),
(27, 4, 'Univers Wii U', 0),
(28, 4, 'Univers PS Vita', 0),
(29, 4, 'Autres Univers', 0),
(30, 7, 'Boîtier', 0),
(31, 7, 'Accessoires boîtier', 0),
(32, 7, 'Alimentation', 0),
(33, 7, 'Disque dur', 0),
(34, 7, 'Disque SSD', 0),
(35, 7, 'Carte mère', 0),
(36, 7, 'Carte graphique', 0),
(37, 7, 'Mémoire PC', 0),
(38, 7, 'Processeur', 0),
(39, 7, 'Refroidissement', 0),
(40, 8, 'Écran PC', 0),
(41, 8, 'Clef USB', 0),
(42, 8, 'Disque dur externe', 0),
(43, 8, 'Clavier/souris', 0),
(44, 8, 'Imprimante', 0),
(45, 8, 'Onduleur', 0),
(46, 8, 'Enceinte PC', 0),
(47, 8, 'Casque audio', 0),
(48, 8, 'Musique pro', 0),
(49, 8, 'Tablette graphique', 0),
(50, 9, 'PC Portable', 0),
(51, 9, 'Portable LDLCD', 0),
(52, 9, 'Portable Apple', 0),
(53, 9, 'Ultrabook', 0),
(54, 9, 'Tablette', 0),
(55, 9, 'Ipad', 0),
(56, 9, 'Sacs & sacoches', 0),
(57, 9, 'Extension mémoire', 0),
(58, 9, 'Refroidisseur', 0),
(59, 9, 'Accessoires tablette', 0),
(60, 10, 'Ordinateur Apple', 0),
(61, 10, 'Ordinateur PC fixe', 0),
(62, 10, 'Kit upgrade PC', 0),
(63, 10, 'PC LDLC', 0),
(64, 10, 'PC HardWare.fr', 0),
(65, 10, 'Mini PC', 0),
(66, 10, 'PC tout-en-un', 0),
(67, 10, 'PC tactile', 0),
(68, 10, 'Serveur', 0),
(69, 10, 'Garanties', 0),
(70, 11, 'Carte réseaux', 0),
(71, 11, 'Switch', 0),
(72, 11, 'Modem & routeur', 0),
(73, 11, 'CPL', 0),
(74, 11, 'Serveur NAS', 0),
(75, 11, 'Caméra IP', 0),
(76, 11, 'Domotique', 0),
(77, 12, 'Compact', 0),
(78, 12, 'Hybride', 0),
(79, 12, 'Reflex', 0),
(80, 12, 'Objectif', 0),
(81, 12, 'Carte mémoire', 0),
(82, 13, 'Caméscope', 0),
(83, 13, 'Caméra sportive', 0),
(84, 13, 'Sac, étui, dragonne', 0),
(85, 14, 'TV', 0),
(86, 14, 'TV 4K Ultra HD', 0),
(87, 14, 'TV connectée', 0),
(88, 14, 'Adaptateur TNT & Sat', 0),
(89, 14, 'Télécommande', 0),
(90, 15, 'Meuble TV', 0),
(91, 15, 'Support mural TV', 0),
(92, 15, 'Support plafond', 0),
(93, 16, 'Ampli home cinéma', 0),
(94, 16, 'Pack home cinéma', 0),
(95, 16, 'Enceintes', 0),
(96, 16, 'Chaîne Hi-Fi', 0),
(97, 16, 'Ampli Hi-Fi', 0),
(98, 17, 'Lecteur multimédia', 0),
(99, 17, 'Lecteur Blu-ray', 0),
(100, 17, 'Lecteur DVD', 0),
(101, 18, 'Lecteur MP3 & iPod', 0),
(102, 18, 'Casques', 0),
(103, 18, 'Enceinte Bluetooth', 0),
(104, 18, 'Dictaphone', 0),
(105, 18, 'Radio & radio réveil', 0),
(106, 19, 'Autoradio', 0),
(107, 19, 'Haut-parleur', 0),
(108, 19, 'Amplificateur', 0),
(109, 20, 'Vidéoprojecteur', 0),
(110, 20, 'Vidéoprojecteur 3D', 0),
(111, 20, 'Pico projecteur', 0),
(112, 20, 'Écran de projection', 0),
(113, 20, 'Pointeur laser', 0),
(114, 20, 'Support plafond', 0),
(115, 20, 'Lampes', 0),
(116, 21, 'Écran dynamique', 0),
(117, 22, 'Jeux PC', 0),
(118, 22, 'Joypad', 0),
(119, 22, 'Joystick', 0),
(120, 22, 'Volant PC', 0),
(121, 22, 'Clavier Gamer', 0),
(122, 22, 'Souris Gamer', 0),
(123, 22, 'Micro-casque Gamer', 0),
(124, 22, 'Lunettes protection', 0),
(125, 23, 'Console PS4', 0),
(126, 23, 'Jeux PS4', 0),
(127, 23, 'Accessoire PS4', 0),
(128, 24, 'Console PS3', 0),
(129, 24, 'Jeux PS3', 0),
(130, 24, 'Accessoire PS3', 0),
(131, 25, 'Console Xbox One', 0),
(132, 25, 'Jeux Xbox One', 0),
(133, 25, 'Accessoire Xbox One', 0),
(134, 26, 'Console 3DS & 2DS', 0),
(135, 26, 'Jeux 3DS & 2DS', 0),
(136, 26, 'Accessoire 3DS & 2DS', 0),
(137, 27, 'Console Wii U', 0),
(138, 27, 'Jeux Wii U', 0),
(139, 27, 'Accessoire Wii U', 0),
(140, 28, 'Console PS Vita', 0),
(141, 28, 'Jeux PS Vita', 0),
(142, 28, 'Accessoire PS Vita', 0),
(143, 29, 'Univers 360', 0),
(144, 29, 'Univers Wii', 0),
(145, 29, 'Univers DS', 0),
(146, 29, 'Univers PSP', 0),
(147, 29, 'Univers MAC', 0),
(148, 29, 'Produits dérivés', 0),
(149, 148, 'T-Shirt', 0),
(150, 148, 'Porte-clefs', 0),
(151, 148, 'Mugs', 0),
(152, 148, 'Blocs-notes', 0),
(159, 149, 'Dragon Ball', 0),
(160, 149, 'Final Fantasy', 0);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
 ADD PRIMARY KEY (`id`), ADD KEY `IDX_3AF346681BB9D5A2` (`id_parent`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=163;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `categories`
--
ALTER TABLE `categories`
ADD CONSTRAINT `FK_3AF346681BB9D5A2` FOREIGN KEY (`id_parent`) REFERENCES `categories` (`id`);
