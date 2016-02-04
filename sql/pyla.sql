-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Client :  localhost:8889
-- Généré le :  Jeu 04 Février 2016 à 06:00
-- Version du serveur :  5.5.38
-- Version de PHP :  5.6.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `pyla`
--

-- --------------------------------------------------------

--
-- Structure de la table `catalogues`
--

CREATE TABLE `catalogues` (
`id` int(11) NOT NULL,
  `id_utilisateur` int(11) NOT NULL,
  `id_produit` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `prix` int(11) NOT NULL,
  `promotion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
`id` int(11) NOT NULL,
  `id_parent` int(11) DEFAULT NULL,
  `libelle` varchar(255) NOT NULL,
  `description` longtext,
  `rang` int(10) NOT NULL DEFAULT '1',
  `top` tinyint(1) DEFAULT '0',
  `home` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=168 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `categories`
--

INSERT INTO `categories` (`id`, `id_parent`, `libelle`, `description`, `rang`, `top`, `home`) VALUES
(1, NULL, 'Home', NULL, 1, 0, 1),
(2, NULL, 'Informatique', NULL, 2, 0, 0),
(3, NULL, 'Image & Son', NULL, 3, 0, 0),
(4, NULL, 'Jeux & Consoles', NULL, 4, 0, 0),
(5, NULL, 'Qui sommes-nous', NULL, 6, 0, 0),
(6, NULL, 'Contact', NULL, 5, 0, 0),
(7, 2, 'Pièce', NULL, 5, 0, 0),
(8, 2, 'Périphérique', NULL, 3, 0, 0),
(9, 2, 'Portable', NULL, 2, 0, 0),
(10, 2, 'Ordinateur', NULL, 1, 0, 0),
(11, 2, 'Réseau', NULL, 4, 0, 0),
(12, 3, 'Photo', NULL, 0, 0, 0),
(13, 3, 'Caméra', NULL, 0, 0, 0),
(14, 3, 'Télévision', NULL, 0, 0, 0),
(15, 3, 'Meuble', NULL, 0, 0, 0),
(16, 3, 'Home cinéma / Hifi', NULL, 0, 0, 0),
(17, 3, 'Lecteur enregistreur', NULL, 0, 0, 0),
(18, 3, 'Son numérique', NULL, 0, 0, 0),
(19, 3, 'Hi-Fi embarquée', NULL, 0, 0, 0),
(20, 3, 'Projection', NULL, 0, 0, 0),
(21, 3, 'Affichage public', NULL, 0, 0, 0),
(22, 4, 'Univers PC', NULL, 0, 0, 0),
(23, 4, 'Univers PS4', NULL, 0, 0, 0),
(24, 4, 'Univers PS3', NULL, 0, 0, 0),
(25, 4, 'Univers Xbox One', NULL, 0, 0, 0),
(26, 4, 'Univers 3DS & 2DS', NULL, 0, 0, 0),
(27, 4, 'Univers Wii U', NULL, 0, 0, 0),
(28, 4, 'Univers PS Vita', NULL, 0, 0, 0),
(29, 4, 'Autres Univers', NULL, 0, 0, 0),
(30, 7, 'Boîtier', NULL, 0, 1, 0),
(31, 7, 'Accessoires boîtier', NULL, 0, 0, 0),
(32, 7, 'Alimentation', NULL, 0, 0, 0),
(33, 7, 'Disque dur', NULL, 0, 0, 0),
(34, 7, 'Disque SSD', 'Un SSD est matériellement plus solide qu''un disque dur, les plateaux de ces derniers étant de plus en plus souvent en verre depuis 2003. Cette spécificité lui permet une résistance aux chocs et aux vibrations bien plus importante que les disques mécaniques.\r\n\r\nLes SSD surclassent les disques durs classiques au niveau performance (débit, latence inexistante sur les SSD, consommation). Néanmoins, le rapport prix-espace de stockage reste encore largement à l''avantage du disque mécanique, près de dix fois moins cher en 2012.\r\n\r\nUne tendance apparue en 2012 sur les ordinateurs de salon consiste à mettre le système sur un SSD d''environ 100 Go et les données sur un disque dur de capacité dix fois supérieure et de coût similaire.\r\n\r\nDepuis 2013 les capacités des SSD ont beaucoup évolué et on peut en trouver de 2 To', 0, 1, 0),
(35, 7, 'Carte mère', NULL, 0, 0, 0),
(36, 7, 'Carte graphique', NULL, 0, 0, 0),
(37, 7, 'Mémoire PC', NULL, 0, 0, 0),
(38, 7, 'Processeur', NULL, 0, 0, 0),
(39, 7, 'Refroidissement', NULL, 0, 0, 0),
(40, 8, 'Écran PC', NULL, 0, 0, 0),
(41, 8, 'Clef USB', NULL, 0, 0, 0),
(42, 8, 'Disque dur externe', NULL, 0, 0, 0),
(43, 8, 'Clavier/souris', NULL, 0, 1, 0),
(44, 8, 'Imprimante', NULL, 0, 0, 0),
(45, 8, 'Onduleur', NULL, 0, 0, 0),
(46, 8, 'Enceinte PC', NULL, 0, 0, 0),
(47, 8, 'Casque audio', NULL, 0, 0, 0),
(48, 8, 'Musique pro', NULL, 0, 0, 0),
(49, 8, 'Tablette graphique', NULL, 0, 0, 0),
(50, 9, 'PC Portable', NULL, 0, 0, 0),
(51, 9, 'Portable LDLC', NULL, 0, 0, 0),
(52, 9, 'Portable Apple', NULL, 0, 0, 0),
(53, 9, 'Ultrabook', NULL, 0, 0, 0),
(54, 9, 'Tablette', NULL, 0, 0, 0),
(55, 9, 'Ipad', NULL, 0, 0, 0),
(56, 9, 'Sacs & sacoches', NULL, 0, 0, 0),
(57, 9, 'Extension mémoire', NULL, 0, 0, 0),
(58, 9, 'Refroidisseur', NULL, 0, 0, 0),
(59, 9, 'Accessoires tablette', NULL, 0, 0, 0),
(60, 10, 'Ordinateur Apple', NULL, 0, 0, 0),
(61, 10, 'Ordinateur PC fixe', NULL, 0, 0, 0),
(62, 10, 'Kit upgrade PC', NULL, 0, 0, 0),
(63, 10, 'PC LDLC', NULL, 0, 0, 0),
(64, 10, 'PC HardWare.fr', NULL, 0, 0, 0),
(65, 10, 'Mini PC', NULL, 0, 0, 0),
(66, 10, 'PC tout-en-un', NULL, 0, 0, 0),
(67, 10, 'PC tactile', NULL, 0, 0, 0),
(68, 10, 'Serveur', NULL, 0, 0, 0),
(69, 10, 'Garanties', NULL, 0, 0, 0),
(70, 11, 'Carte réseaux', NULL, 0, 0, 0),
(71, 11, 'Switch', NULL, 0, 0, 0),
(72, 11, 'Modem & routeur', NULL, 0, 0, 0),
(73, 11, 'CPL', NULL, 0, 0, 0),
(74, 11, 'Serveur NAS', NULL, 0, 0, 0),
(75, 11, 'Caméra IP', NULL, 0, 0, 0),
(76, 11, 'Domotique', NULL, 0, 0, 0),
(77, 12, 'Compact', NULL, 0, 0, 0),
(78, 12, 'Hybride', NULL, 0, 0, 0),
(79, 12, 'Reflex', NULL, 0, 0, 0),
(80, 12, 'Objectif', NULL, 0, 0, 0),
(81, 12, 'Carte mémoire', NULL, 0, 0, 0),
(82, 13, 'Caméscope', NULL, 0, 0, 0),
(83, 13, 'Caméra sportive', NULL, 0, 0, 0),
(84, 13, 'Sac, étui, dragonne', NULL, 0, 0, 0),
(85, 14, 'TV', NULL, 0, 0, 0),
(86, 14, 'TV 4K Ultra HD', NULL, 0, 0, 0),
(87, 14, 'TV connectée', NULL, 0, 0, 0),
(88, 14, 'Adaptateur TNT & Sat', NULL, 0, 0, 0),
(89, 14, 'Télécommande', NULL, 0, 0, 0),
(90, 15, 'Meuble TV', NULL, 0, 0, 0),
(91, 15, 'Support mural TV', NULL, 0, 0, 0),
(92, 15, 'Support plafond', NULL, 0, 0, 0),
(93, 16, 'Ampli home cinéma', NULL, 0, 0, 0),
(94, 16, 'Pack home cinéma', NULL, 0, 0, 0),
(95, 16, 'Enceintes', NULL, 0, 0, 0),
(96, 16, 'Chaîne Hi-Fi', NULL, 0, 0, 0),
(97, 16, 'Ampli Hi-Fi', NULL, 0, 0, 0),
(98, 17, 'Lecteur multimédia', NULL, 0, 0, 0),
(99, 17, 'Lecteur Blu-ray', NULL, 0, 0, 0),
(100, 17, 'Lecteur DVD', NULL, 0, 0, 0),
(101, 18, 'Lecteur MP3 & iPod', NULL, 0, 0, 0),
(102, 18, 'Casques', NULL, 0, 0, 0),
(103, 18, 'Enceinte Bluetooth', NULL, 0, 0, 0),
(104, 18, 'Dictaphone', NULL, 0, 0, 0),
(105, 18, 'Radio & radio réveil', NULL, 0, 0, 0),
(106, 19, 'Autoradio', NULL, 0, 0, 0),
(107, 19, 'Haut-parleur', NULL, 0, 0, 0),
(108, 19, 'Amplificateur', NULL, 0, 0, 0),
(109, 20, 'Vidéoprojecteur', NULL, 0, 0, 0),
(110, 20, 'Vidéoprojecteur 3D', NULL, 0, 0, 0),
(111, 20, 'Pico projecteur', NULL, 0, 0, 0),
(112, 20, 'Écran de projection', NULL, 0, 0, 0),
(113, 20, 'Pointeur laser', NULL, 0, 0, 0),
(114, 20, 'Support plafond', NULL, 0, 0, 0),
(115, 20, 'Lampes', NULL, 0, 0, 0),
(116, 21, 'Écran dynamique', NULL, 0, 0, 0),
(117, 22, 'Jeux PC', NULL, 0, 0, 0),
(118, 22, 'Joypad', NULL, 0, 0, 0),
(119, 22, 'Joystick', NULL, 0, 0, 0),
(120, 22, 'Volant PC', NULL, 0, 0, 0),
(121, 22, 'Clavier Gamer', NULL, 0, 0, 0),
(122, 22, 'Souris Gamer', NULL, 0, 1, 0),
(123, 22, 'Micro-casque Gamer', NULL, 0, 0, 0),
(124, 22, 'Lunettes protection', NULL, 0, 0, 0),
(125, 23, 'Console PS4', NULL, 0, 0, 0),
(126, 23, 'Jeux PS4', NULL, 0, 0, 0),
(127, 23, 'Accessoire PS4', NULL, 0, 0, 0),
(128, 24, 'Console PS3', NULL, 0, 0, 0),
(129, 24, 'Jeux PS3', NULL, 0, 0, 0),
(130, 24, 'Accessoire PS3', NULL, 0, 0, 0),
(131, 25, 'Console Xbox One', NULL, 0, 0, 0),
(132, 25, 'Jeux Xbox One', NULL, 0, 0, 0),
(133, 25, 'Accessoire Xbox One', NULL, 0, 0, 0),
(134, 26, 'Console 3DS & 2DS', NULL, 0, 0, 0),
(135, 26, 'Jeux 3DS & 2DS', NULL, 0, 0, 0),
(136, 26, 'Accessoire 3DS & 2DS', NULL, 0, 0, 0),
(137, 27, 'Console Wii U', NULL, 0, 0, 0),
(138, 27, 'Jeux Wii U', NULL, 0, 0, 0),
(139, 27, 'Accessoire Wii U', NULL, 0, 0, 0),
(140, 28, 'Console PS Vita', NULL, 0, 0, 0),
(141, 28, 'Jeux PS Vita', NULL, 0, 0, 0),
(142, 28, 'Accessoire PS Vita', NULL, 0, 0, 0),
(143, 29, 'Univers 360', NULL, 0, 0, 0),
(144, 29, 'Univers Wii', NULL, 0, 0, 0),
(145, 29, 'Univers DS', NULL, 0, 0, 0),
(146, 29, 'Univers PSP', NULL, 0, 0, 0),
(147, 29, 'Univers MAC', NULL, 0, 0, 0),
(148, 29, 'Produits dérivés', NULL, 0, 0, 0),
(149, 148, 'T-Shirt', NULL, 0, 0, 0),
(150, 148, 'Porte-clefs', NULL, 0, 0, 0),
(151, 148, 'Mugs', NULL, 0, 0, 0),
(152, 148, 'Blocs-notes', NULL, 0, 0, 0),
(159, 149, 'Dragon Ball', NULL, 0, 0, 0),
(160, 149, 'Final Fantasy', NULL, 0, 0, 0),
(166, 29, 'Univers DS XL', NULL, 0, 0, 1),
(167, 10, 'MacBook Pro Rétina', 'Ceci est une description pour un MacBook Pro Rétina', 0, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `categories_produits`
--

CREATE TABLE `categories_produits` (
  `id_categorie` int(11) NOT NULL,
  `id_produit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `categories_produits`
--

INSERT INTO `categories_produits` (`id_categorie`, `id_produit`) VALUES
(30, 1),
(30, 2),
(30, 3),
(30, 4),
(31, 5),
(31, 6),
(31, 7),
(31, 8),
(32, 9),
(32, 10),
(32, 11),
(32, 12),
(33, 13),
(33, 14),
(33, 15),
(33, 16),
(34, 17),
(34, 18),
(34, 19),
(34, 20),
(35, 21),
(35, 22),
(35, 23),
(35, 24),
(36, 25),
(36, 26),
(36, 27),
(36, 28),
(37, 29),
(37, 30),
(37, 31),
(37, 32),
(38, 33),
(38, 34),
(38, 35),
(38, 36),
(39, 37),
(39, 38),
(39, 39),
(39, 40),
(125, 153),
(167, 154),
(77, 155),
(55, 156),
(86, 157),
(86, 158),
(43, 159),
(122, 160),
(122, 161),
(101, 162),
(101, 163),
(101, 164),
(101, 165),
(101, 166),
(101, 167);

-- --------------------------------------------------------

--
-- Structure de la table `ci_sessions`
--

CREATE TABLE `ci_sessions` (
  `session_id` varchar(40) NOT NULL DEFAULT '0',
  `ip_address` varchar(16) NOT NULL DEFAULT '0',
  `user_agent` varchar(120) NOT NULL,
  `last_activity` int(10) unsigned NOT NULL DEFAULT '0',
  `user_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `commandes`
--

CREATE TABLE `commandes` (
`id` int(11) NOT NULL,
  `id_utilisateur` int(11) NOT NULL,
  `id_pays` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `numero` int(11) NOT NULL,
  `ht` int(11) NOT NULL,
  `ttc` int(11) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `cp` varchar(10) NOT NULL,
  `ville` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `commandes_lignes`
--

CREATE TABLE `commandes_lignes` (
`id` int(11) NOT NULL,
  `id_produit` int(11) NOT NULL,
  `id_commande` int(11) NOT NULL,
  `quantite` int(11) NOT NULL,
  `tva` int(10) NOT NULL,
  `promo` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

CREATE TABLE `commentaires` (
`id` int(11) NOT NULL,
  `id_utilisateur` int(11) NOT NULL,
  `id_produit` int(11) NOT NULL,
  `contenu` longtext NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `criteres`
--

CREATE TABLE `criteres` (
`id` int(11) NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `unite` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `evaluations`
--

CREATE TABLE `evaluations` (
`id` int(11) NOT NULL,
  `id_utilisateur` int(11) NOT NULL,
  `id_produit` int(11) NOT NULL,
  `note` enum('1','2','3','4','5') DEFAULT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `evaluations`
--

INSERT INTO `evaluations` (`id`, `id_utilisateur`, `id_produit`, `note`, `date`) VALUES
(11, 1, 1, '3', '2016-02-01 00:00:00'),
(12, 1, 3, '4', '2016-02-02 00:00:00'),
(13, 1, 8, '1', '2016-02-03 00:00:00'),
(14, 1, 16, '4', '2016-02-02 00:00:00'),
(15, 1, 17, '5', '2016-02-02 00:00:00'),
(16, 1, 20, '2', '2016-02-01 00:00:00'),
(19, 1, 26, '5', '2016-02-03 00:00:00'),
(20, 1, 28, '5', '2016-02-01 00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `factures`
--

CREATE TABLE `factures` (
`id` int(11) NOT NULL,
  `id_utilisateur` int(11) NOT NULL,
  `id_pays` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `reference` int(11) NOT NULL,
  `ht` int(11) NOT NULL,
  `ttc` int(11) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `cp` varchar(10) NOT NULL,
  `ville` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `factures_lignes`
--

CREATE TABLE `factures_lignes` (
`id` int(11) NOT NULL,
  `id_produit` int(11) NOT NULL,
  `id_facture` int(11) NOT NULL,
  `quantite` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `pages`
--

CREATE TABLE `pages` (
`id` int(11) unsigned NOT NULL,
  `titre` varchar(255) NOT NULL,
  `contenu` longtext NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `pages`
--

INSERT INTO `pages` (`id`, `titre`, `contenu`) VALUES
(1, 'Devenir Vendeur', 'Morbi diam lacus, semper at euismod in, posuere non lectus. Sed non pretium risus. Nam volutpat tortor non ipsum pulvinar, et commodo augue tincidunt. Proin lobortis magna sit amet quam egestas, ut scelerisque erat imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi pellentesque velit dui, nec posuere ex imperdiet tristique. Fusce luctus urna id pellentesque lobortis. Nulla ullamcorper est eu feugiat sollicitudin. Maecenas ut urna velit. Duis consectetur finibus semper. Aliquam erat volutpat. Vivamus quis lectus enim. Etiam ut mauris mollis dui venenatis feugiat eu eget nisl. Phasellus mattis tellus a eros rutrum, at facilisis eros aliquet. Cras eget magna at mi porttitor feugiat posuere at libero.'),
(2, 'Mentions légales', 'Phasellus vel mauris convallis, pulvinar sapien vel, faucibus erat. Aenean sit amet venenatis orci. Nunc nulla lacus, elementum id quam quis, lobortis ultricies dui. In congue maximus massa, nec dictum sapien interdum in. Donec sed neque nisi. Sed a maximus ipsum. Aenean vitae ante sagittis, semper mi ac, molestie eros. Mauris id pretium sapien. Proin blandit suscipit elementum. Nam sodales odio quis mauris facilisis, sit amet placerat urna aliquam. Donec vitae egestas tortor. Nam porttitor congue orci nec fringilla. Maecenas euismod faucibus rhoncus. Pellentesque in tincidunt nisl, at varius neque. Praesent dictum laoreet ex, sed accumsan nibh posuere sed.');

-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

CREATE TABLE `pays` (
`id` int(11) NOT NULL,
  `code` varchar(5) NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `indicatif` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=250 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `pays`
--

INSERT INTO `pays` (`id`, `code`, `libelle`, `indicatif`) VALUES
(1, 'AF', 'Afghanistan', 93),
(2, 'AX', 'Aland Islands', 358),
(3, 'AL', 'Albania', 355),
(4, 'DZ', 'Algeria', 213),
(5, 'AS', 'American Samoa', 1684),
(6, 'AD', 'Andorra', 376),
(7, 'AO', 'Angola', 244),
(8, 'AI', 'Anguilla', 1264),
(9, 'AQ', 'Antarctica', 672),
(10, 'AG', 'Antigua And Barbuda', 1268),
(11, 'AR', 'Argentina', 54),
(12, 'AM', 'Armenia', 374),
(13, 'AW', 'Aruba', 297),
(14, 'AU', 'Australia', 61),
(15, 'AT', 'Austria', 43),
(16, 'AZ', 'Azerbaijan', 994),
(17, 'BS', 'Bahamas', 1242),
(18, 'BH', 'Bahrain', 973),
(19, 'BD', 'Bangladesh', 880),
(20, 'BB', 'Barbados', 1246),
(21, 'BY', 'Belarus', 375),
(22, 'BE', 'Belgium', 32),
(23, 'BZ', 'Belize', 501),
(24, 'BJ', 'Benin', 229),
(25, 'BM', 'Bermuda', 1441),
(26, 'BT', 'Bhutan', 975),
(27, 'BO', 'Bolivia', 591),
(28, 'BA', 'Bosnia And Herzegovina', 387),
(29, 'BW', 'Botswana', 267),
(30, 'BV', 'Bouvet Island', 47),
(31, 'BR', 'Brazil', 55),
(32, 'IO', 'British Indian Ocean Territory', 246),
(33, 'VG', 'British Virgin Islands', 1),
(34, 'BN', 'Brunei Darussalam', 673),
(35, 'BG', 'Bulgaria', 359),
(36, 'BF', 'Burkina Faso', 226),
(37, 'BI', 'Burundi', 257),
(38, 'KH', 'Cambodia', 855),
(39, 'CM', 'Cameroon', 237),
(40, 'CA', 'Canada', 1),
(41, 'CV', 'Cape Verde', 238),
(42, 'KY', 'Cayman Islands', 1345),
(43, 'CF', 'Central African Republic', 236),
(44, 'TD', 'Chad', 235),
(45, 'CL', 'Chile', 56),
(46, 'CN', 'China', 86),
(47, 'CX', 'Christmas Island', 61),
(48, 'CC', 'Cocos (Keeling) Islands', 61),
(49, 'CO', 'Colombia', 57),
(50, 'KM', 'Comoros', 269),
(51, 'CG', 'Congo', 242),
(52, 'CD', 'Congo (Democratic Republic)', 243),
(53, 'CK', 'Cook Islands', 682),
(54, 'CR', 'Costa Rica', 506),
(55, 'CI', 'Côte D''ivoire', 225),
(56, 'HR', 'Croatia', 385),
(57, 'CW', 'Curaçao', 599),
(58, 'CU', 'Cuba', 53),
(59, 'CY', 'Cyprus', 357),
(60, 'CZ', 'Czech Republic', 420),
(61, 'DK', 'Denmark', 45),
(62, 'DJ', 'Djibouti', 253),
(63, 'DM', 'Dominica', 1767),
(64, 'DO', 'Dominican Republic', 1809),
(65, 'EC', 'Ecuador', 593),
(66, 'EG', 'Egypt', 20),
(67, 'SV', 'El Salvador', 503),
(68, 'GQ', 'Equatorial Guinea', 240),
(69, 'ER', 'Eritrea', 291),
(70, 'EE', 'Estonia', 372),
(71, 'ET', 'Ethiopia', 251),
(72, 'FK', 'Falkland Islands (Malvinas)', 500),
(73, 'FO', 'Faroe Islands', 298),
(74, 'FJ', 'Fiji', 679),
(75, 'FI', 'Finland', 358),
(76, 'FR', 'France', 33),
(77, 'GF', 'French Guiana', 594),
(78, 'PF', 'French Polynesia', 689),
(79, 'TF', 'French Southern Territories', 262),
(80, 'GA', 'Gabon', 241),
(81, 'GM', 'Gambia', 220),
(82, 'GE', 'Georgia', 995),
(83, 'DE', 'Germany', 49),
(84, 'GH', 'Ghana', 233),
(85, 'GI', 'Gibraltar', 350),
(86, 'GR', 'Greece', 30),
(87, 'GL', 'Greenland', 299),
(88, 'GD', 'Grenada', 1473),
(89, 'GP', 'Guadeloupe', 590),
(90, 'GU', 'Guam', 1671),
(91, 'GT', 'Guatemala', 502),
(92, 'GG', 'Guernsey', 44),
(93, 'GN', 'Guinea', 224),
(94, 'GW', 'Guinea-bissau', 245),
(95, 'GY', 'Guyana', 592),
(96, 'HT', 'Haiti', 509),
(97, 'HM', 'Heard Island And Mcdonald Islands', 61),
(98, 'HN', 'Honduras', 504),
(99, 'HK', 'Hong Kong', 852),
(100, 'HU', 'Hungary', 36),
(101, 'IS', 'Iceland', 354),
(102, 'IN', 'India', 91),
(103, 'ID', 'Indonesia', 62),
(104, 'IR', 'Iran', 98),
(105, 'IQ', 'Iraq', 964),
(106, 'IE', 'Ireland', 353),
(107, 'IM', 'Isle Of Man', 44),
(108, 'IL', 'Israel', 972),
(109, 'IT', 'Italy', 39),
(110, 'JM', 'Jamaica', 1876),
(111, 'JP', 'Japan', 81),
(112, 'JE', 'Jersey', 44),
(113, 'JO', 'Jordan', 962),
(114, 'KZ', 'Kazakhstan', 7),
(115, 'KE', 'Kenya', 254),
(116, 'KI', 'Kiribati', 686),
(117, 'KP', 'Korea (Democratic People''s Republic)', 850),
(118, 'KR', 'Korea (Republic)', 82),
(119, 'KW', 'Kuwait', 965),
(120, 'KG', 'Kyrgyzstan', 996),
(121, 'LA', 'Lao (People''s Democratic Republic)', 856),
(122, 'LV', 'Latvia', 371),
(123, 'LB', 'Lebanon', 961),
(124, 'LS', 'Lesotho', 266),
(125, 'LR', 'Liberia', 231),
(126, 'LY', 'Libya', 218),
(127, 'LI', 'Liechtenstein', 423),
(128, 'LT', 'Lithuania', 370),
(129, 'LU', 'Luxembourg', 352),
(130, 'MO', 'Macao', 853),
(131, 'MK', 'Macedonia', 389),
(132, 'MG', 'Madagascar', 261),
(133, 'MW', 'Malawi', 265),
(134, 'MY', 'Malaysia', 60),
(135, 'MV', 'Maldives', 960),
(136, 'ML', 'Mali', 223),
(137, 'MT', 'Malta', 356),
(138, 'MH', 'Marshall Islands', 692),
(139, 'MQ', 'Martinique', 596),
(140, 'MR', 'Mauritania', 222),
(141, 'MU', 'Mauritius', 230),
(142, 'YT', 'Mayotte', 262),
(143, 'MX', 'Mexico', 52),
(144, 'FM', 'Micronesia', 691),
(145, 'MD', 'Moldova', 373),
(146, 'MC', 'Monaco', 377),
(147, 'MN', 'Mongolia', 976),
(148, 'ME', 'Montenegro', 382),
(149, 'MS', 'Montserrat', 1664),
(150, 'MA', 'Morocco', 212),
(151, 'MZ', 'Mozambique', 258),
(152, 'MM', 'Myanmar', 95),
(153, 'NA', 'Namibia', 264),
(154, 'NR', 'Nauru', 674),
(155, 'NP', 'Nepal', 977),
(156, 'NL', 'Netherlands', 31),
(157, 'NC', 'New Caledonia', 687),
(158, 'NZ', 'New Zealand', 64),
(159, 'NI', 'Nicaragua', 505),
(160, 'NE', 'Niger', 227),
(161, 'NG', 'Nigeria', 234),
(162, 'NU', 'Niue', 683),
(163, 'NF', 'Norfolk Island', 672),
(164, 'MP', 'Northern Mariana Islands', 1670),
(165, 'NO', 'Norway', 47),
(166, 'OM', 'Oman', 968),
(167, 'PK', 'Pakistan', 92),
(168, 'PW', 'Palau', 680),
(169, 'PS', 'Palestinian Territory (Occupied)', 970),
(170, 'PA', 'Panama', 507),
(171, 'PG', 'Papua New Guinea', 675),
(172, 'PY', 'Paraguay', 595),
(173, 'PE', 'Peru', 51),
(174, 'PH', 'Philippines', 63),
(175, 'PN', 'Pitcairn', 64),
(176, 'PL', 'Poland', 48),
(177, 'PT', 'Portugal', 351),
(178, 'PR', 'Puerto Rico', 1787),
(179, 'QA', 'Qatar', 974),
(180, 'RE', 'Reunion', 262),
(181, 'RO', 'Romania', 40),
(182, 'RU', 'Russian Federation', 7),
(183, 'RW', 'Rwanda', 250),
(184, 'BL', 'Saint Barthélemy', 590),
(185, 'SH', 'Saint Helena', 290),
(186, 'KN', 'Saint Kitts And Nevis', 1869),
(187, 'LC', 'Saint Lucia', 1758),
(188, 'MF', 'Saint Martin (French Part)', 590),
(189, 'PM', 'Saint Pierre And Miquelon', 508),
(190, 'VC', 'Saint Vincent And The Grenadines', 1784),
(191, 'WS', 'Samoa', 685),
(192, 'SM', 'San Marino', 378),
(193, 'ST', 'Sao Tome And Principe', 239),
(194, 'SA', 'Saudi Arabia', 966),
(195, 'SN', 'Senegal', 221),
(196, 'RS', 'Serbia', 381),
(197, 'SC', 'Seychelles', 248),
(198, 'SL', 'Sierra Leone', 232),
(199, 'SG', 'Singapore', 65),
(200, 'BQ', 'Sint Eustatius And Saba Bonaire', 599),
(201, 'SX', 'Sint Maarten (Dutch Part)', 590),
(202, 'SK', 'Slovakia', 421),
(203, 'SI', 'Slovenia', 386),
(204, 'SB', 'Solomon Islands', 677),
(205, 'SO', 'Somalia', 252),
(206, 'ZA', 'South Africa', 27),
(207, 'GS', 'South Georgia And The South Sandwich Islands', 500),
(208, 'SS', 'South Sudan', 211),
(209, 'ES', 'Spain', 34),
(210, 'LK', 'Sri Lanka', 94),
(211, 'SD', 'Sudan', 249),
(212, 'SR', 'Suriname', 597),
(213, 'SJ', 'Svalbard And Jan Mayen', 47),
(214, 'SZ', 'Swaziland', 268),
(215, 'SE', 'Sweden', 46),
(216, 'CH', 'Switzerland', 41),
(217, 'SY', 'Syrian Arab Republic', 963),
(218, 'TW', 'Taiwan', 886),
(219, 'TJ', 'Tajikistan', 992),
(220, 'TZ', 'Tanzania', 255),
(221, 'TH', 'Thailand', 66),
(222, 'TL', 'Timor-leste', 670),
(223, 'TG', 'Togo', 228),
(224, 'TK', 'Tokelau', 690),
(225, 'TO', 'Tonga', 676),
(226, 'TT', 'Trinidad And Tobago', 1868),
(227, 'TN', 'Tunisia', 216),
(228, 'TR', 'Turkey', 90),
(229, 'TM', 'Turkmenistan', 993),
(230, 'TC', 'Turks And Caicos Islands', 1649),
(231, 'TV', 'Tuvalu', 688),
(232, 'UG', 'Uganda', 256),
(233, 'UA', 'Ukraine', 380),
(234, 'AE', 'United Arab Emirates', 971),
(235, 'GB', 'United Kingdom', 44),
(236, 'US', 'United States', 1),
(237, 'UM', 'United States Minor Outlying Islands', 1),
(238, 'UY', 'Uruguay', 598),
(239, 'UZ', 'Uzbekistan', 998),
(240, 'VU', 'Vanuatu', 678),
(241, 'VA', 'Vatican City', 39),
(242, 'VE', 'Venezuela', 58),
(243, 'VN', 'Viet Nam', 84),
(244, 'VI', 'U.S. Virgin Islands', 1),
(245, 'WF', 'Wallis And Futuna', 681),
(246, 'EH', 'Western Sahara', 212),
(247, 'YE', 'Yemen', 967),
(248, 'ZM', 'Zambia', 260),
(249, 'ZW', 'Zimbabwe', 263);

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

CREATE TABLE `produits` (
`id` int(11) NOT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `libelle` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `marque` varchar(255) NOT NULL,
  `description` mediumtext,
  `video` varchar(255) DEFAULT NULL,
  `statut` tinyint(1) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=168 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `produits`
--

INSERT INTO `produits` (`id`, `reference`, `libelle`, `image`, `marque`, `description`, `video`, `statut`, `date`) VALUES
(1, 'IPB1', 'UMX-3 Noir', '', 'LDLC', 'Le boîtier PC LDLC UMX-3 est un boîtier Mini Tour au design superbe bénéficiant d''une qualité de fabrication supérieure. Conçu pour être fonctionnel, ergonomique et efficace, il se destine à tous les types de configurations compactes : PC Gamer mono-GPU, PC Multimédia, Configuration avancée (pour power user), PC bureautique et Station de travail.', '', 1, '0000-00-00'),
(2, 'IPB2', 'QT01 Blanc', '', 'LDLC', NULL, '', 0, '0000-00-00'),
(3, 'IPB3', 'Aeolus', '', 'Advance', NULL, '', 1, '0000-00-00'),
(4, 'IPB4', 'Aegis Core (Bleu)', '', 'BitFenix', NULL, '', 1, '0000-00-00'),
(5, 'IPAB1', 'AK-HDA-01', '', 'Akasa', NULL, '', 1, '0000-00-00'),
(6, 'IPAB2', 'AK-FC-06U3BK', '', 'Akasa', NULL, '', 1, '0000-00-00'),
(7, 'IPAB3', 'Combination Laptop Lock', '', 'Kensington', NULL, '', 1, '0000-00-00'),
(8, 'IPAB4', 'Alchemy 2.0 Magnetic LED-Strip (rouge, 12 cm)', '', 'BitFenix', NULL, '', 1, '0000-00-00'),
(9, 'IPA1', 'BG-400 Quality Select 80PLUS Bronze', '', 'LDLC', NULL, '', 1, '0000-00-00'),
(10, 'IPA2', 'Pure Power L8 600W 80PLUS Bronze', '', 'Be Quiet !', NULL, '', 1, '0000-00-00'),
(11, 'IPA3', 'HX850i 80PLUS Platinum', '', 'Corsair', NULL, '', 1, '0000-00-00'),
(12, 'IPA4', 'ZM700-TX 80PLUS', '', 'Zalman', NULL, '', 1, '0000-00-00'),
(13, 'IPDD1', '7K4000 4 To SATA 6Gb/s', '', 'Hitachi Deskstar', NULL, '', 1, '0000-00-00'),
(14, 'IPDD2', 'Extreme 1 To - Rouge', '', 'Buffalo MiniStation', NULL, '', 1, '0000-00-00'),
(15, 'IPDD3', 'HDD 5 To 3.5" (4XB0G88712)', '', 'Lenovo ThinkServer', NULL, '', 1, '0000-00-00'),
(16, 'IPDD4', 'SpinPoint M8 500 Go', '', 'Seagate Momentus', NULL, '', 1, '0000-00-00'),
(17, 'IPSSD1', 'SSD 840 EVO 500 Go mSATA', '', 'Samsung', NULL, '', 1, '0000-00-00'),
(18, 'IPSSD2', 'HyperX Predator M.2 PCIe 240 Go', '', 'Kingston', NULL, '', 1, '0000-00-00'),
(19, 'IPSSD3', 'Phoenix Blade 480 Go PCI Express 8x', '', 'G.Skill', NULL, '', 1, '0000-00-00'),
(20, 'IPSSD4', 'CS2111 480 Go', '', 'PNY', 'Ceci est un test de description', '', 1, '0000-00-00'),
(21, 'IPCM1', '960GM-VGS3 FX', '', 'ASRock', NULL, '', 1, '0000-00-00'),
(22, 'IPCM2', 'B150 PRO GAMING D3', '', 'ASUS', NULL, '', 1, '0000-00-00'),
(23, 'IPCM3', 'GA-6PXSV1', '', 'Gigabyte', NULL, '', 1, '0000-00-00'),
(24, 'IPCM4', 'B85-G43 GAMING', '', 'MSI', NULL, '', 1, '0000-00-00'),
(25, 'IPCG1', 'DualHead2Go Analog Edition', '', 'Matrox', NULL, '', 1, '0000-00-00'),
(26, 'IPCG2', 'TripleHead2Go DP Edition', '', 'Matrox', NULL, '', 1, '0000-00-00'),
(27, 'IPCG3', 'GTX 980 Ti Hydro Copper', '', 'EVGA GeForce', NULL, '', 1, '0000-00-00'),
(28, 'IPCG4', 'FirePro W9100 16 GB', '', 'Sapphire', NULL, '', 1, '0000-00-00'),
(29, 'IPMPC1', '1 Go DDR2 533 MHz', '', 'Kingston', NULL, '', 1, '0000-00-00'),
(30, 'IPMPC2', 'HyperX Impact SO-DIMM 16 Go (2 x 8 Go) DDR3 2133 MHz CL11', '', 'Kingston', NULL, '', 1, '0000-00-00'),
(31, 'IPMPC3', 'ValueRAM 8 Go DDR3 1866 MHz ECC Registered CL13 DR X8', '', 'Kingston', NULL, '', 1, '0000-00-00'),
(32, 'IPMPC4', '16 Go DDR3L 1600 MHz Registered CL11 DR X4', '', 'HP', NULL, '', 1, '0000-00-00'),
(33, 'IPP1', 'A10-7870K (3.9 GHz) Black Edition', '', 'AMD', NULL, '', 1, '0000-00-00'),
(34, 'IPP2', 'Celeron G1620 (2.7 GHz)', '', 'Intel', NULL, '', 1, '0000-00-00'),
(35, 'IPP3', 'Xeon E5-2643 v2 (3.5 GHz)', '', 'Intel', NULL, '', 1, '0000-00-00'),
(36, 'IPP4', 'Xeon E5-2697 v2 (2.7 GHz)', '', 'Intel', NULL, '', 1, '0000-00-00'),
(37, 'IPR1', 'AK-CC7122EP01', '', 'Akasa', NULL, '', 1, '0000-00-00'),
(38, 'IPR2', 'Alpine M1', '', 'Arctic', NULL, '', 1, '0000-00-00'),
(39, 'IPR3', 'Seidon 120V (Ver. 2.0)', '', 'Cooler Master LTD', NULL, '', 1, '0000-00-00'),
(40, 'IPR4', 'Macho Zero', '', 'Thermalright', NULL, '', 1, '0000-00-00'),
(153, 'PS412016', 'PS4 Blanche 1To', NULL, 'Sony', 'Le système PlayStation 4 est le meilleur espace pour profiter d''expériences vidéo ludiques dynamiques, connectées, rapides et d''une forte puissance graphique, de possibilités de personnalisation intelligentes, d''applications sociales riches et intégrées, et d''innovantes fonctionnalités de second écran. Ses contenus sont d''une richesse inouïe, ses expériences de jeu plus prenantes que jamais, et chacun peut profiter d''exclusivités PlayStation et de toutes ses applications de divertissement numériques préférées. Le système PS4 a vraiment pensé à tout.', NULL, 0, '2016-02-04'),
(154, '', 'MacBook Pro avec écran Retina 15 pouces 512 Go', NULL, 'Apple', 'Processeur à 2,5 GHz\r\n512 Go de stockage\r\nIntel Core i7 quadricœur à 2,5 GHz\r\nTurbo Boost jusqu’à 3,7 GHz\r\n16 Go de mémoire à 1 600 MHz\r\n512 Go de stockage flash PCIe\r\nIntel Iris Pro Graphics\r\nAMD Radeon R9 M370X avec 2 Go de mémoire GDDR5\r\nBatterie intégrée (9 heures)\r\nTrackpad Force Touch', NULL, 0, '2016-02-04'),
(155, '', 'Cyber-shot DSC-RX100M4', NULL, 'Sony', 'Bienvenue dans le nouvel univers incroyable de la prise de vue ultrarapide ! L''appareil photo Cyber-Shot DSC-RX100M4 de Sony vous dévoile la beauté de tous ces instants qui comptent grâce à des technologies renversantes intégrées dans un format de poche.', NULL, 0, '2016-02-04'),
(156, '', 'Apple iPad Pro 128 Go Wi-Fi + Cellular Or', NULL, 'Apple', 'Un iPad est un objet singulier, à la fois extrêmement simple et terriblement immersif. Avec un superbe écran Retina de 12,9 pouces, ce n''est pas simplement un iPad plus grand. C''est un iPad qui vous donne les moyens de développer votre productivité et votre créativité à une échelle insoupçonnée !', NULL, 1, '2016-02-04'),
(157, '', 'LG 43UF772V', NULL, 'LG', 'Plongez sans plus attendre dans une réalité sublimée grâce au téléviseur 43UF772V de LG ! Avec lui, profitez d''incroyables images 4K associées à un son surprenant ainsi qu''à un design exceptionnel. Derrière son design slim, ce téléviseur 4K LG ouvre les portes d''un grand divertissement.', NULL, 0, '2016-02-04'),
(158, '', 'LG 43UF772V', NULL, 'LG', 'Plongez sans plus attendre dans une réalité sublimée grâce au téléviseur 43UF772V de LG ! Avec lui, profitez d''incroyables images 4K associées à un son surprenant ainsi qu''à un design exceptionnel. Derrière son design slim, ce téléviseur 4K LG ouvre les portes d''un grand divertissement.', NULL, 0, '2016-02-04'),
(159, '', 'Razer BlackWidow Ultimate Chroma', NULL, 'Razer', 'Le Razer BlackWidow Ultimate est de retour avec cette version Chroma du premier clavier mécanique développé par le plus célèbre constructeur de périphériques pour gamers. Au programme de cette nouvelle mouture : les toutes nouvelles touches mécaniques Razer, une meilleure résistance et un rétro-éclairage multicolore personnalisable.', NULL, 1, '2016-02-04'),
(160, '', '3Dconnexion CadMouse', NULL, '3Dconnexion', 'La souris 3Dconnexion CadMouse est spécialement conçue pour la CAO. Les clics répétitifs font place à la précision et au confort grâce au capteur laser avancé et au bouton central dédié. Gardez le contrôle à l''aide de la molette de défilement adaptative. Vous vous demanderez comment vous avez pu travailler sans la fonction intelligente QuickZoom qui vous permet de zoomer sans effort en un seul clic.', NULL, 1, '2016-02-04'),
(161, '', 'Acer Predator Gaming Mouse', NULL, 'Acer', 'La souris 3Dconnexion CadMouse est spécialement conçue pour la CAO. Les clics répétitifs font place à la précision et au confort grâce au capteur laser avancé et au bouton central dédié. Gardez le contrôle à l''aide de la molette de défilement adaptative. Vous vous demanderez comment vous avez pu travailler sans la fonction intelligente QuickZoom qui vous permet de zoomer sans effort en un seul clic.', NULL, 0, '2016-02-04'),
(162, '', 'Apple iPod nano 16 Go Argent (2015)', NULL, 'Apple', 'Toujours plus coloré, plus performant et plus personnel, l''iPod nano place le divertissement musical à un niveau encore jamais égalé ! Pour jouer vos titres favoris, il suffit d''un simple geste sur l''écran ou alors de secouer l''iPod pour passer à un autre morceau de manière aléatoire.', NULL, 1, '2016-02-04'),
(163, '', 'Apple iPod nano 16 Go Bleu (2015)', NULL, 'Apple', 'Toujours plus coloré, plus performant et plus personnel, l''iPod nano place le divertissement musical à un niveau encore jamais égalé ! Pour jouer vos titres favoris, il suffit d''un simple geste sur l''écran ou alors de secouer l''iPod pour passer à un autre morceau de manière aléatoire.', NULL, 1, '2016-02-04'),
(164, '', 'Apple iPod nano 16 Go Gris Sidéral (2015)', NULL, 'Apple', 'Toujours plus coloré, plus performant et plus personnel, l''iPod nano place le divertissement musical à un niveau encore jamais égalé ! Pour jouer vos titres favoris, il suffit d''un simple geste sur l''écran ou alors de secouer l''iPod pour passer à un autre morceau de manière aléatoire.', NULL, 1, '2016-02-04'),
(165, '', 'Apple iPod nano 16 Go Or (2015)', NULL, 'Apple', 'Toujours plus coloré, plus performant et plus personnel, l''iPod nano place le divertissement musical à un niveau encore jamais égalé ! Pour jouer vos titres favoris, il suffit d''un simple geste sur l''écran ou alors de secouer l''iPod pour passer à un autre morceau de manière aléatoire.', NULL, 0, '2016-02-04'),
(166, '', 'Apple iPod nano 16 Go Rose', NULL, 'Apple', 'Épais de seulement 5,4 mm et pas plus grand qu''une carte de crédit, le nouvel iPod nano est l''iPod le plus fin de tous les temps. Grâce à son écran Multi-Touch de 2,5 pouces, votre musique, vos photos et vos vidéos vous en mettent plein la vue.', NULL, 0, '2016-02-04'),
(167, '', 'Apple iPod nano 16 Go Rose (2015)', NULL, 'Apple', 'Toujours plus coloré, plus performant et plus personnel, l''iPod nano place le divertissement musical à un niveau encore jamais égalé ! Pour jouer vos titres favoris, il suffit d''un simple geste sur l''écran ou alors de secouer l''iPod pour passer à un autre morceau de manière aléatoire.', NULL, 0, '2016-02-04');

-- --------------------------------------------------------

--
-- Structure de la table `produits_criteres`
--

CREATE TABLE `produits_criteres` (
  `id_produit` int(11) NOT NULL,
  `id_critere` int(11) NOT NULL,
  `critere` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `produits_utilisateurs`
--

CREATE TABLE `produits_utilisateurs` (
`id` int(11) NOT NULL,
  `id_produit` int(10) NOT NULL,
  `id_utilisateur` int(10) NOT NULL,
  `prix` decimal(10,2) NOT NULL,
  `quantite` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `produits_utilisateurs`
--

INSERT INTO `produits_utilisateurs` (`id`, `id_produit`, `id_utilisateur`, `prix`, `quantite`) VALUES
(1, 1, 2, 90.00, 1),
(2, 2, 2, 80.00, 1),
(3, 3, 2, 85.00, 1),
(4, 4, 2, 99.00, 1),
(5, 5, 2, 75.00, 1),
(6, 6, 2, 85.00, 1),
(10, 7, 2, 75.00, 1),
(11, 8, 2, 70.00, 1),
(12, 9, 2, 70.00, 1),
(13, 10, 2, 70.00, 1),
(14, 11, 2, 70.00, 1),
(15, 12, 2, 70.00, 1),
(16, 13, 2, 70.00, 1),
(17, 14, 2, 70.00, 1),
(18, 15, 2, 70.00, 1),
(19, 16, 2, 70.00, 1),
(20, 17, 2, 70.00, 1),
(21, 18, 2, 70.00, 1),
(22, 19, 2, 70.00, 1),
(23, 20, 2, 70.00, 1),
(24, 21, 2, 70.00, 1),
(25, 22, 2, 70.00, 1),
(26, 23, 2, 70.00, 1),
(27, 24, 2, 70.00, 1),
(28, 25, 2, 70.00, 1),
(29, 26, 2, 70.00, 1),
(30, 27, 2, 70.00, 1),
(31, 28, 2, 70.00, 1),
(32, 29, 2, 70.00, 1),
(33, 30, 2, 70.00, 1),
(34, 31, 2, 70.00, 1),
(35, 32, 2, 70.00, 1),
(36, 33, 2, 70.00, 1),
(37, 34, 2, 70.00, 1),
(38, 35, 2, 70.00, 1),
(39, 36, 2, 70.00, 1),
(40, 37, 2, 70.00, 1),
(41, 38, 2, 70.00, 1),
(42, 39, 2, 70.00, 1),
(43, 40, 2, 70.00, 1),
(44, 153, 2, 375.00, 1),
(45, 154, 1, 2799.00, 1),
(46, 155, 287, 1069.95, 1),
(47, 156, 288, 1239.95, 1),
(48, 157, 290, 679.95, 1),
(49, 158, 290, 679.95, 1),
(50, 159, 1, 169.95, 1),
(51, 160, 1, 119.85, 1),
(52, 161, 1, 69.95, 1),
(53, 162, 290, 188.95, 1),
(54, 163, 290, 188.95, 1),
(55, 164, 290, 188.95, 1),
(56, 165, 290, 188.95, 1),
(57, 166, 290, 169.95, 1),
(58, 167, 290, 169.95, 1);

-- --------------------------------------------------------

--
-- Structure de la table `site`
--

CREATE TABLE `site` (
`id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `cp` varchar(255) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `id_pays` int(11) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `date_creation` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `site`
--

INSERT INTO `site` (`id`, `nom`, `adresse`, `cp`, `ville`, `id_pays`, `email`, `telephone`, `logo`, `date_creation`) VALUES
(1, 'Pylos', '18 rue Claude Tillier', '75013', 'PARIS', 61, 'contact@pila.fr', '01.74.25.12.25', NULL, '2016-02-03 02:05:45');

-- --------------------------------------------------------

--
-- Structure de la table `statut`
--

CREATE TABLE `statut` (
`id` int(11) NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `statut`
--

INSERT INTO `statut` (`id`, `libelle`, `description`) VALUES
(1, 'Administrateur', ''),
(2, 'Client', 'L''accès à cette partie de Pyla est restreint'),
(3, 'Vendeur', 'L''accès à cette partie de Pyla est restreint'),
(4, 'Vendeur malhonnête', 'Nombre de ventes non honorées trop élevé<br>Pour en savoir plus, <a href=''mailto:contact@pyla.fr''> contactez-nous</a>'),
(5, 'Payeur malhonnête', 'Nombre de paiements non honorés trop élevé<br>Pour en savoir plus, <a href=''mailto:contact@pyla.fr''> contactez-nous</a>'),
(6, 'Bloqué', 'Compte bloqué');

-- --------------------------------------------------------

--
-- Structure de la table `tags`
--

CREATE TABLE `tags` (
`id` int(11) NOT NULL,
  `id_produit` int(11) NOT NULL,
  `libelle` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `token`
--

CREATE TABLE `token` (
`id` int(11) unsigned NOT NULL,
  `token` varchar(30) DEFAULT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `token`
--

INSERT INTO `token` (`id`, `token`, `date`) VALUES
(1, 'EifvlKJ6cW', '2016-02-01 14:32:28'),
(2, 'PS2pz2u2RV', '2016-02-01 17:09:22'),
(3, 'dUbbUjeK1Y', '2016-02-01 21:37:07'),
(4, '5bVCAOVz5h', '2016-02-02 02:43:05'),
(5, 'hq43QV3W5Q', '2016-02-02 03:54:04'),
(6, NULL, '2016-02-03 22:58:13'),
(7, NULL, '2016-02-04 03:50:17'),
(8, NULL, '2016-02-04 03:54:39'),
(9, NULL, '2016-02-04 05:05:29'),
(10, NULL, '2016-02-04 05:17:02');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
`id` int(11) NOT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `cp` varchar(10) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `id_pays` int(11) DEFAULT '0',
  `email` varchar(255) NOT NULL,
  `mdp` varchar(255) NOT NULL,
  `date_naissance` date DEFAULT NULL,
  `statut` int(11) DEFAULT NULL,
  `date_entree` datetime NOT NULL,
  `id_token` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=291 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `prenom`, `nom`, `adresse`, `telephone`, `cp`, `ville`, `id_pays`, `email`, `mdp`, `date_naissance`, `statut`, `date_entree`, `id_token`) VALUES
(1, NULL, 'Pylos', NULL, NULL, NULL, NULL, 0, 'admin@pila.fr', 'oJNsONhhFOsZt71nPutPanzhIol5rvbVeS0JbaWs9GsL3l+tjH2neG6tjA3EPy1U5JSqL92mYAIjiR66P+VALQ==', NULL, 1, '2016-02-04 03:16:16', NULL),
(2, 'Ludovic', 'SIRE', '2 rue de Pajol', '0174569910', '75019', 'PARIS', 76, 'ludo@gmail.com', 'EpKyYZg+OuZ/Dxb0ndnpLI2p2W/SjO45yqFDffbJpbSgbvBCRv/yDl0OOpVlKTqDxJIuJMTiejaJmbS0L9Bd5A==', NULL, 2, '2016-02-03 22:58:13', NULL),
(287, 'Améline', 'BREBION', '', '', '', 'ORLÉANS', 76, 'Crect1957@teleworm.us', '+E62KkLRvKYvkluwCReIoLEDMp2Vpmv1TP6DRe4j+dHacd/Wp3YuP2pS+7z6XWBBm9lZeJfrAeSXbzEc0lAkjQ==', NULL, 2, '2016-02-04 03:50:17', NULL),
(288, 'Vincent', 'DIJOUX', '', '', '', '', 76, 'Sooppeed1963@cuvox.de', 'qa73W9RXnew+JJRglJCZ2F9YMrOCRvt8Omc+LVkolFFZdGkVok7ITZcLNcjb+r8Jsh6wn7gwV742eNS0NrtotA==', NULL, 2, '2016-02-04 03:54:39', NULL),
(289, 'Guillaume', 'APOLLINAIRE', '', '', '', '', 76, 'Wharand@jourrapide.com', 'K+lo/btPEEOta5JWyvojaJ4A98GCSU6FtPWdRqnWWTIhlsFwggqBLFB/gmMITrPJAdeFBuBlSLZazGAUT3EnhQ==', NULL, 2, '2016-02-04 05:05:29', NULL),
(290, 'Louis', 'DE FUNES', '', '', '', '', 0, 'Pleen1937@teleworm.us', 'FEo13nL2HBf4tdu+hq7wzK4sQ5JNXhpvBv7Yawqb2DlEyzKIYXcutPSiBa1QhYhGlsnuFJAHdwJYg9yDWf0caA==', NULL, 3, '2016-02-04 05:17:02', NULL);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `catalogues`
--
ALTER TABLE `catalogues`
 ADD PRIMARY KEY (`id`), ADD KEY `IDX_D6806F0150EAE44` (`id_utilisateur`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
 ADD PRIMARY KEY (`id`), ADD KEY `IDX_3AF346681BB9D5A2` (`id_parent`);

--
-- Index pour la table `categories_produits`
--
ALTER TABLE `categories_produits`
 ADD KEY `id_produit` (`id_produit`), ADD KEY `id_categorie` (`id_categorie`);

--
-- Index pour la table `ci_sessions`
--
ALTER TABLE `ci_sessions`
 ADD PRIMARY KEY (`session_id`), ADD KEY `last_activity_idx` (`last_activity`);

--
-- Index pour la table `commandes`
--
ALTER TABLE `commandes`
 ADD PRIMARY KEY (`id`), ADD KEY `IDX_35D4282C50EAE44` (`id_utilisateur`), ADD KEY `IDX_35D4282CBFBF20AC` (`id_pays`);

--
-- Index pour la table `commandes_lignes`
--
ALTER TABLE `commandes_lignes`
 ADD PRIMARY KEY (`id`), ADD KEY `IDX_CEB90F70F7384557` (`id_produit`), ADD KEY `IDX_CEB90F703E314AE8` (`id_commande`);

--
-- Index pour la table `commentaires`
--
ALTER TABLE `commentaires`
 ADD PRIMARY KEY (`id`), ADD KEY `IDX_D9BEC0C450EAE44` (`id_utilisateur`), ADD KEY `IDX_D9BEC0C4F7384557` (`id_produit`);

--
-- Index pour la table `criteres`
--
ALTER TABLE `criteres`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `evaluations`
--
ALTER TABLE `evaluations`
 ADD PRIMARY KEY (`id`), ADD KEY `IDX_3B72691D50EAE44` (`id_utilisateur`), ADD KEY `IDX_3B72691DF7384557` (`id_produit`);

--
-- Index pour la table `factures`
--
ALTER TABLE `factures`
 ADD PRIMARY KEY (`id`), ADD KEY `IDX_647590B50EAE44` (`id_utilisateur`), ADD KEY `IDX_647590BBFBF20AC` (`id_pays`);

--
-- Index pour la table `factures_lignes`
--
ALTER TABLE `factures_lignes`
 ADD PRIMARY KEY (`id`), ADD KEY `IDX_70E5DC89F7384557` (`id_produit`), ADD KEY `IDX_70E5DC89201BCD60` (`id_facture`);

--
-- Index pour la table `pages`
--
ALTER TABLE `pages`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `pays`
--
ALTER TABLE `pays`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `produits`
--
ALTER TABLE `produits`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `produits_criteres`
--
ALTER TABLE `produits_criteres`
 ADD KEY `id_produit` (`id_produit`) COMMENT 'id_critere', ADD KEY `id_critere` (`id_critere`);

--
-- Index pour la table `produits_utilisateurs`
--
ALTER TABLE `produits_utilisateurs`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `id_produit` (`id_produit`,`id_utilisateur`), ADD KEY `id_produit_2` (`id_produit`), ADD KEY `id_utilisateur` (`id_utilisateur`);

--
-- Index pour la table `site`
--
ALTER TABLE `site`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `statut`
--
ALTER TABLE `statut`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tags`
--
ALTER TABLE `tags`
 ADD PRIMARY KEY (`id`), ADD KEY `IDX_6FBC9426F7384557` (`id_produit`);

--
-- Index pour la table `token`
--
ALTER TABLE `token`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `catalogues`
--
ALTER TABLE `catalogues`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=168;
--
-- AUTO_INCREMENT pour la table `commandes`
--
ALTER TABLE `commandes`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `commandes_lignes`
--
ALTER TABLE `commandes_lignes`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `commentaires`
--
ALTER TABLE `commentaires`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `criteres`
--
ALTER TABLE `criteres`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `evaluations`
--
ALTER TABLE `evaluations`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT pour la table `factures`
--
ALTER TABLE `factures`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `factures_lignes`
--
ALTER TABLE `factures_lignes`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `pages`
--
ALTER TABLE `pages`
MODIFY `id` int(11) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `pays`
--
ALTER TABLE `pays`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=250;
--
-- AUTO_INCREMENT pour la table `produits`
--
ALTER TABLE `produits`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=168;
--
-- AUTO_INCREMENT pour la table `produits_utilisateurs`
--
ALTER TABLE `produits_utilisateurs`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=59;
--
-- AUTO_INCREMENT pour la table `site`
--
ALTER TABLE `site`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `statut`
--
ALTER TABLE `statut`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `tags`
--
ALTER TABLE `tags`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `token`
--
ALTER TABLE `token`
MODIFY `id` int(11) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=291;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `catalogues`
--
ALTER TABLE `catalogues`
ADD CONSTRAINT `FK_D6806F0150EAE44` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id`);

--
-- Contraintes pour la table `categories`
--
ALTER TABLE `categories`
ADD CONSTRAINT `FK_3AF346681BB9D5A2` FOREIGN KEY (`id_parent`) REFERENCES `categories` (`id`);

--
-- Contraintes pour la table `categories_produits`
--
ALTER TABLE `categories_produits`
ADD CONSTRAINT `fk_categories_produits1` FOREIGN KEY (`id_categorie`) REFERENCES `categories` (`id`),
ADD CONSTRAINT `fk_categories_produits2` FOREIGN KEY (`id_produit`) REFERENCES `produits` (`id`);

--
-- Contraintes pour la table `commandes`
--
ALTER TABLE `commandes`
ADD CONSTRAINT `FK_35D4282C50EAE44` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id`),
ADD CONSTRAINT `FK_35D4282CBFBF20AC` FOREIGN KEY (`id_pays`) REFERENCES `pays` (`id`);

--
-- Contraintes pour la table `commandes_lignes`
--
ALTER TABLE `commandes_lignes`
ADD CONSTRAINT `FK_CEB90F703E314AE8` FOREIGN KEY (`id_commande`) REFERENCES `commandes` (`id`),
ADD CONSTRAINT `FK_CEB90F70F7384557` FOREIGN KEY (`id_produit`) REFERENCES `produits_utilisateurs` (`id`);

--
-- Contraintes pour la table `commentaires`
--
ALTER TABLE `commentaires`
ADD CONSTRAINT `FK_D9BEC0C450EAE44` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id`),
ADD CONSTRAINT `FK_D9BEC0C4F7384557` FOREIGN KEY (`id_produit`) REFERENCES `produits` (`id`);

--
-- Contraintes pour la table `evaluations`
--
ALTER TABLE `evaluations`
ADD CONSTRAINT `FK_3B72691D50EAE44` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id`),
ADD CONSTRAINT `FK_3B72691DF7384557` FOREIGN KEY (`id_produit`) REFERENCES `produits` (`id`);

--
-- Contraintes pour la table `factures`
--
ALTER TABLE `factures`
ADD CONSTRAINT `FK_647590B50EAE44` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id`),
ADD CONSTRAINT `FK_647590BBFBF20AC` FOREIGN KEY (`id_pays`) REFERENCES `pays` (`id`);

--
-- Contraintes pour la table `factures_lignes`
--
ALTER TABLE `factures_lignes`
ADD CONSTRAINT `FK_70E5DC89201BCD60` FOREIGN KEY (`id_facture`) REFERENCES `factures` (`id`),
ADD CONSTRAINT `FK_70E5DC89F7384557` FOREIGN KEY (`id_produit`) REFERENCES `produits` (`id`);

--
-- Contraintes pour la table `produits_criteres`
--
ALTER TABLE `produits_criteres`
ADD CONSTRAINT `fk_produits_critere1` FOREIGN KEY (`id_produit`) REFERENCES `produits` (`id`),
ADD CONSTRAINT `fk_produits_critere2` FOREIGN KEY (`id_critere`) REFERENCES `criteres` (`id`);

--
-- Contraintes pour la table `produits_utilisateurs`
--
ALTER TABLE `produits_utilisateurs`
ADD CONSTRAINT `fk_produits_utilisateurs1` FOREIGN KEY (`id_produit`) REFERENCES `produits` (`id`),
ADD CONSTRAINT `fk_produits_utilisateurs2` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id`);

--
-- Contraintes pour la table `tags`
--
ALTER TABLE `tags`
ADD CONSTRAINT `FK_6FBC9426F7384557` FOREIGN KEY (`id_produit`) REFERENCES `produits` (`id`);
