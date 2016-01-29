-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Client :  localhost:8889
-- Généré le :  Ven 29 Janvier 2016 à 14:23
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
  `rang` int(10) NOT NULL DEFAULT '1',
  `top` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=161 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `categories`
--

INSERT INTO `categories` (`id`, `id_parent`, `libelle`, `rang`, `top`) VALUES
(1, NULL, 'Home', 1, 0),
(2, NULL, 'Informatique', 2, 0),
(3, NULL, 'Image & Son', 3, 0),
(4, NULL, 'Jeux & Consoles', 4, 0),
(5, NULL, 'Qui sommes-nous', 6, 0),
(6, NULL, 'Contact', 5, 0),
(7, 2, 'Pièce', 5, 0),
(8, 2, 'Périphérique', 3, 0),
(9, 2, 'Portable', 2, 0),
(10, 2, 'Ordinateur', 1, 0),
(11, 2, 'Réseau', 4, 0),
(12, 3, 'Photo', 0, 0),
(13, 3, 'Caméra', 0, 0),
(14, 3, 'Télévision', 0, 0),
(15, 3, 'Meuble', 0, 0),
(16, 3, 'Home cinéma / Hifi', 0, 0),
(17, 3, 'Lecteur enregistreur', 0, 0),
(18, 3, 'Son numérique', 0, 0),
(19, 3, 'Hi-Fi embarquée', 0, 0),
(20, 3, 'Projection', 0, 0),
(21, 3, 'Affichage public', 0, 0),
(22, 4, 'Univers PC', 0, 0),
(23, 4, 'Univers PS4', 0, 0),
(24, 4, 'Univers PS3', 0, 0),
(25, 4, 'Univers Xbox One', 0, 0),
(26, 4, 'Univers 3DS & 2DS', 0, 0),
(27, 4, 'Univers Wii U', 0, 0),
(28, 4, 'Univers PS Vita', 0, 0),
(29, 4, 'Autres Univers', 0, 0),
(30, 7, 'Boîtier', 0, 1),
(31, 7, 'Accessoires boîtier', 0, 0),
(32, 7, 'Alimentation', 0, 0),
(33, 7, 'Disque dur', 0, 0),
(34, 7, 'Disque SSD', 0, 1),
(35, 7, 'Carte mère', 0, 0),
(36, 7, 'Carte graphique', 0, 0),
(37, 7, 'Mémoire PC', 0, 0),
(38, 7, 'Processeur', 0, 0),
(39, 7, 'Refroidissement', 0, 0),
(40, 8, 'Écran PC', 0, 0),
(41, 8, 'Clef USB', 0, 0),
(42, 8, 'Disque dur externe', 0, 0),
(43, 8, 'Clavier/souris', 0, 0),
(44, 8, 'Imprimante', 0, 0),
(45, 8, 'Onduleur', 0, 0),
(46, 8, 'Enceinte PC', 0, 0),
(47, 8, 'Casque audio', 0, 0),
(48, 8, 'Musique pro', 0, 0),
(49, 8, 'Tablette graphique', 0, 0),
(50, 9, 'PC Portable', 0, 0),
(51, 9, 'Portable LDLCD', 0, 0),
(52, 9, 'Portable Apple', 0, 0),
(53, 9, 'Ultrabook', 0, 0),
(54, 9, 'Tablette', 0, 0),
(55, 9, 'Ipad', 0, 0),
(56, 9, 'Sacs & sacoches', 0, 0),
(57, 9, 'Extension mémoire', 0, 0),
(58, 9, 'Refroidisseur', 0, 0),
(59, 9, 'Accessoires tablette', 0, 0),
(60, 10, 'Ordinateur Apple', 0, 0),
(61, 10, 'Ordinateur PC fixe', 0, 0),
(62, 10, 'Kit upgrade PC', 0, 0),
(63, 10, 'PC LDLC', 0, 0),
(64, 10, 'PC HardWare.fr', 0, 0),
(65, 10, 'Mini PC', 0, 0),
(66, 10, 'PC tout-en-un', 0, 0),
(67, 10, 'PC tactile', 0, 0),
(68, 10, 'Serveur', 0, 0),
(69, 10, 'Garanties', 0, 0),
(70, 11, 'Carte réseaux', 0, 0),
(71, 11, 'Switch', 0, 0),
(72, 11, 'Modem & routeur', 0, 0),
(73, 11, 'CPL', 0, 0),
(74, 11, 'Serveur NAS', 0, 0),
(75, 11, 'Caméra IP', 0, 0),
(76, 11, 'Domotique', 0, 0),
(77, 12, 'Compact', 0, 0),
(78, 12, 'Hybride', 0, 0),
(79, 12, 'Reflex', 0, 0),
(80, 12, 'Objectif', 0, 0),
(81, 12, 'Carte mémoire', 0, 0),
(82, 13, 'Caméscope', 0, 0),
(83, 13, 'Caméra sportive', 0, 0),
(84, 13, 'Sac, étui, dragonne', 0, 0),
(85, 14, 'TV', 0, 0),
(86, 14, 'TV 4K Ultra HD', 0, 0),
(87, 14, 'TV connectée', 0, 0),
(88, 14, 'Adaptateur TNT & Sat', 0, 0),
(89, 14, 'Télécommande', 0, 0),
(90, 15, 'Meuble TV', 0, 0),
(91, 15, 'Support mural TV', 0, 0),
(92, 15, 'Support plafond', 0, 0),
(93, 16, 'Ampli home cinéma', 0, 0),
(94, 16, 'Pack home cinéma', 0, 0),
(95, 16, 'Enceintes', 0, 0),
(96, 16, 'Chaîne Hi-Fi', 0, 0),
(97, 16, 'Ampli Hi-Fi', 0, 0),
(98, 17, 'Lecteur multimédia', 0, 0),
(99, 17, 'Lecteur Blu-ray', 0, 0),
(100, 17, 'Lecteur DVD', 0, 0),
(101, 18, 'Lecteur MP3 & iPod', 0, 0),
(102, 18, 'Casques', 0, 0),
(103, 18, 'Enceinte Bluetooth', 0, 0),
(104, 18, 'Dictaphone', 0, 0),
(105, 18, 'Radio & radio réveil', 0, 0),
(106, 19, 'Autoradio', 0, 0),
(107, 19, 'Haut-parleur', 0, 0),
(108, 19, 'Amplificateur', 0, 0),
(109, 20, 'Vidéoprojecteur', 0, 0),
(110, 20, 'Vidéoprojecteur 3D', 0, 0),
(111, 20, 'Pico projecteur', 0, 0),
(112, 20, 'Écran de projection', 0, 0),
(113, 20, 'Pointeur laser', 0, 0),
(114, 20, 'Support plafond', 0, 0),
(115, 20, 'Lampes', 0, 0),
(116, 21, 'Écran dynamique', 0, 0),
(117, 22, 'Jeux PC', 0, 0),
(118, 22, 'Joypad', 0, 0),
(119, 22, 'Joystick', 0, 0),
(120, 22, 'Volant PC', 0, 0),
(121, 22, 'Clavier Gamer', 0, 0),
(122, 22, 'Souris Gamer', 0, 0),
(123, 22, 'Micro-casque Gamer', 0, 0),
(124, 22, 'Lunettes protection', 0, 0),
(125, 23, 'Console PS4', 0, 0),
(126, 23, 'Jeux PS4', 0, 0),
(127, 23, 'Accessoire PS4', 0, 0),
(128, 24, 'Console PS3', 0, 0),
(129, 24, 'Jeux PS3', 0, 0),
(130, 24, 'Accessoire PS3', 0, 0),
(131, 25, 'Console Xbox One', 0, 0),
(132, 25, 'Jeux Xbox One', 0, 0),
(133, 25, 'Accessoire Xbox One', 0, 0),
(134, 26, 'Console 3DS & 2DS', 0, 0),
(135, 26, 'Jeux 3DS & 2DS', 0, 0),
(136, 26, 'Accessoire 3DS & 2DS', 0, 0),
(137, 27, 'Console Wii U', 0, 0),
(138, 27, 'Jeux Wii U', 0, 0),
(139, 27, 'Accessoire Wii U', 0, 0),
(140, 28, 'Console PS Vita', 0, 0),
(141, 28, 'Jeux PS Vita', 0, 0),
(142, 28, 'Accessoire PS Vita', 0, 0),
(143, 29, 'Univers 360', 0, 0),
(144, 29, 'Univers Wii', 0, 0),
(145, 29, 'Univers DS', 0, 0),
(146, 29, 'Univers PSP', 0, 0),
(147, 29, 'Univers MAC', 0, 0),
(148, 29, 'Produits dérivés', 0, 0),
(149, 148, 'T-Shirt', 0, 0),
(150, 148, 'Porte-clefs', 0, 0),
(151, 148, 'Mugs', 0, 0),
(152, 148, 'Blocs-notes', 0, 0),
(159, 149, 'Dragon Ball', 0, 0),
(160, 149, 'Final Fantasy', 0, 0);

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
(69, 131);

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `evaluations`
--

INSERT INTO `evaluations` (`id`, `id_utilisateur`, `id_produit`, `note`, `date`) VALUES
(1, 193, 1, '4', '0000-00-00 00:00:00'),
(2, 195, 2, '1', '0000-00-00 00:00:00'),
(3, 195, 3, '2', '0000-00-00 00:00:00'),
(4, 193, 20, '4', '0000-00-00 00:00:00');

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
  `reference` varchar(255) NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `marque` varchar(255) NOT NULL,
  `video` varchar(255) DEFAULT NULL,
  `statut` tinyint(1) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=132 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `produits`
--

INSERT INTO `produits` (`id`, `reference`, `libelle`, `image`, `marque`, `video`, `statut`, `date`) VALUES
(1, 'IPB1', 'UMX-3 Noir', '', 'LDLC', '', 1, '0000-00-00'),
(2, 'IPB2', 'QT01 Blanc', '', 'LDLC', '', 1, '0000-00-00'),
(3, 'IPB3', 'Aeolus', '', 'Advance', '', 1, '0000-00-00'),
(4, 'IPB4', 'Aegis Core (Bleu)', '', 'BitFenix', '', 1, '0000-00-00'),
(5, 'IPAB1', 'AK-HDA-01', '', 'Akasa', '', 1, '0000-00-00'),
(6, 'IPAB2', 'AK-FC-06U3BK', '', 'Akasa', '', 1, '0000-00-00'),
(7, 'IPAB3', 'Combination Laptop Lock', '', 'Kensington', '', 1, '0000-00-00'),
(8, 'IPAB4', 'Alchemy 2.0 Magnetic LED-Strip (rouge, 12 cm)', '', 'BitFenix', '', 1, '0000-00-00'),
(9, 'IPA1', 'BG-400 Quality Select 80PLUS Bronze', '', 'LDLC', '', 1, '0000-00-00'),
(10, 'IPA2', 'Pure Power L8 600W 80PLUS Bronze', '', 'Be Quiet !', '', 1, '0000-00-00'),
(11, 'IPA3', 'HX850i 80PLUS Platinum', '', 'Corsair', '', 1, '0000-00-00'),
(12, 'IPA4', 'ZM700-TX 80PLUS', '', 'Zalman', '', 1, '0000-00-00'),
(13, 'IPDD1', '7K4000 4 To SATA 6Gb/s', '', 'Hitachi Deskstar', '', 1, '0000-00-00'),
(14, 'IPDD2', 'Extreme 1 To - Rouge', '', 'Buffalo MiniStation', '', 1, '0000-00-00'),
(15, 'IPDD3', 'HDD 5 To 3.5" (4XB0G88712)', '', 'Lenovo ThinkServer', '', 1, '0000-00-00'),
(16, 'IPDD4', 'SpinPoint M8 500 Go', '', 'Seagate Momentus', '', 1, '0000-00-00'),
(17, 'IPSSD1', 'SSD 840 EVO 500 Go mSATA', '', 'Samsung', '', 1, '0000-00-00'),
(18, 'IPSSD2', 'HyperX Predator M.2 PCIe 240 Go', '', 'Kingston', '', 1, '0000-00-00'),
(19, 'IPSSD3', 'Phoenix Blade 480 Go PCI Express 8x', '', 'G.Skill', '', 1, '0000-00-00'),
(20, 'IPSSD4', 'CS2111 480 Go', '', 'PNY', '', 1, '0000-00-00'),
(21, 'IPCM1', '960GM-VGS3 FX', '', 'ASRock', '', 1, '0000-00-00'),
(22, 'IPCM2', 'B150 PRO GAMING D3', '', 'ASUS', '', 1, '0000-00-00'),
(23, 'IPCM3', 'GA-6PXSV1', '', 'Gigabyte', '', 1, '0000-00-00'),
(24, 'IPCM4', 'B85-G43 GAMING', '', 'MSI', '', 1, '0000-00-00'),
(25, 'IPCG1', 'DualHead2Go Analog Edition', '', 'Matrox', '', 1, '0000-00-00'),
(26, 'IPCG2', 'TripleHead2Go DP Edition', '', 'Matrox', '', 1, '0000-00-00'),
(27, 'IPCG3', 'GTX 980 Ti Hydro Copper', '', 'EVGA GeForce', '', 1, '0000-00-00'),
(28, 'IPCG4', 'FirePro W9100 16 GB', '', 'Sapphire', '', 1, '0000-00-00'),
(29, 'IPMPC1', '1 Go DDR2 533 MHz', '', 'Kingston', '', 1, '0000-00-00'),
(30, 'IPMPC2', 'HyperX Impact SO-DIMM 16 Go (2 x 8 Go) DDR3 2133 MHz CL11', '', 'Kingston', '', 1, '0000-00-00'),
(31, 'IPMPC3', 'ValueRAM 8 Go DDR3 1866 MHz ECC Registered CL13 DR X8', '', 'Kingston', '', 1, '0000-00-00'),
(32, 'IPMPC4', '16 Go DDR3L 1600 MHz Registered CL11 DR X4', '', 'HP', '', 1, '0000-00-00'),
(33, 'IPP1', 'A10-7870K (3.9 GHz) Black Edition', '', 'AMD', '', 1, '0000-00-00'),
(34, 'IPP2', 'Celeron G1620 (2.7 GHz)', '', 'Intel', '', 1, '0000-00-00'),
(35, 'IPP3', 'Xeon E5-2643 v2 (3.5 GHz)', '', 'Intel', '', 1, '0000-00-00'),
(36, 'IPP4', 'Xeon E5-2697 v2 (2.7 GHz)', '', 'Intel', '', 1, '0000-00-00'),
(37, 'IPR1', 'AK-CC7122EP01', '', 'Akasa', '', 1, '0000-00-00'),
(38, 'IPR2', 'Alpine M1', '', 'Arctic', '', 1, '0000-00-00'),
(39, 'IPR3', 'Seidon 120V (Ver. 2.0)', '', 'Cooler Master LTD', '', 1, '0000-00-00'),
(40, 'IPR4', 'Macho Zero', '', 'Thermalright', '', 1, '0000-00-00'),
(131, 'Reference 1', 'Produit 1', NULL, 'Marque 1', NULL, 1, '2016-01-28');

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
  `quantité` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `mdp` varchar(255) NOT NULL,
  `date_creation` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `site`
--

INSERT INTO `site` (`id`, `nom`, `adresse`, `cp`, `ville`, `id_pays`, `email`, `telephone`, `logo`, `mdp`, `date_creation`) VALUES
(1, 'Pyla', '25 rue Claude Tillier', '75012', 'PARIS', 76, 'contact@pyla.fr', '01 74 67 36 79', NULL, '', '2016-01-28 22:19:00');

-- --------------------------------------------------------

--
-- Structure de la table `statut`
--

CREATE TABLE `statut` (
`id` int(11) NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `statut`
--

INSERT INTO `statut` (`id`, `libelle`, `description`) VALUES
(1, 'Administrateur', ''),
(2, 'Client', 'L''accès à cette partie de Pyla est restreint'),
(3, 'Vendeur', 'L''accès à cette partie de Pyla est restreint'),
(4, 'Vendeur malhonnête', 'Nombre de ventes non honorées trop élevé<br>Pour en savoir plus, <a href=''mailto:contact@pyla.fr''> contactez-nous</a>'),
(5, 'Payeur malhonnête', 'Nombre de paiements non honorés trop élevé<br>Pour en savoir plus, <a href=''mailto:contact@pyla.fr''> contactez-nous</a>');

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
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `token`
--

INSERT INTO `token` (`id`, `token`, `date`) VALUES
(1, NULL, '2016-01-27 11:09:36'),
(2, 'MktfG4O70a', '2016-01-27 11:53:51'),
(3, 'MQr6UZuj6k', '2016-01-27 11:53:54'),
(4, 'vOyBhXuDW2', '2016-01-27 11:54:07'),
(5, 'dGJynGxJm9', '2016-01-27 11:56:16'),
(6, 'uqL0xMc1Tx', '2016-01-27 11:56:28'),
(7, 'ymMsFLxP3V', '2016-01-27 11:56:43'),
(8, 'ippwdPRvyP', '2016-01-27 11:58:56'),
(35, '00za9i9Ql1', '2016-01-27 12:55:50'),
(36, '4EleDKs63P', '2016-01-27 12:56:17'),
(37, '16SdpSResr', '2016-01-27 12:56:35'),
(38, 'IeHpMLc2tI', '2016-01-27 12:57:41'),
(39, 'ZTSvybRzgw', '2016-01-27 12:58:01'),
(40, 'xLG8GAubbb', '2016-01-27 12:58:36'),
(41, 'F8TKBNfgFu', '2016-01-27 12:59:15'),
(43, 'y6nqyottOS', '2016-01-27 13:53:39'),
(44, 'yy8OHhk9NS', '2016-01-27 14:00:11'),
(45, 'P2cgOaNaO4', '2016-01-27 14:00:36'),
(49, NULL, '2016-01-27 14:02:58'),
(51, NULL, '2016-01-27 14:21:13'),
(52, NULL, '2016-01-27 14:25:13'),
(53, NULL, '2016-01-27 14:26:13'),
(54, NULL, '2016-01-27 14:30:10'),
(55, NULL, '2016-01-27 15:20:23'),
(56, NULL, '2016-01-27 15:56:02'),
(57, NULL, '2016-01-27 16:53:40'),
(59, NULL, '2016-01-27 22:05:04'),
(60, NULL, '2016-01-28 10:09:43'),
(61, NULL, '2016-01-28 11:30:09'),
(62, NULL, '2016-01-28 15:09:07'),
(63, NULL, '2016-01-28 20:54:51'),
(68, 'sja0x2WZNa', '2016-01-28 20:58:29'),
(69, '8cn6edmBhd', '2016-01-28 20:59:22'),
(70, 'nKJ3Ujf4fT', '2016-01-28 21:08:20'),
(75, NULL, '2016-01-28 21:27:32'),
(87, 'GCRUb78IHA', '2016-01-28 21:56:44'),
(92, NULL, '2016-01-28 22:03:45'),
(93, NULL, '2016-01-28 22:29:23'),
(94, NULL, '2016-01-28 23:04:21'),
(96, NULL, '2016-01-28 23:08:53'),
(97, NULL, '2016-01-28 23:26:41'),
(98, NULL, '2016-01-28 23:29:38'),
(99, NULL, '2016-01-28 23:31:11'),
(100, NULL, '2016-01-28 23:36:21'),
(102, NULL, '2016-01-28 23:47:02'),
(105, NULL, '2016-01-29 09:25:26');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
`id` int(11) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `cp` varchar(10) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `id_pays` int(11) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `mdp` varchar(255) NOT NULL,
  `date_naissance` date DEFAULT NULL,
  `statut` int(11) DEFAULT NULL,
  `date_entree` datetime NOT NULL,
  `id_token` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=250 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `prenom`, `nom`, `adresse`, `telephone`, `cp`, `ville`, `id_pays`, `email`, `mdp`, `date_naissance`, `statut`, `date_entree`, `id_token`) VALUES
(171, 'Damien', 'LERY', '112 rue Damrémont', '0174568900', '75018', 'PARIS', 0, 'Burminfely78@einrot.com', 'hZQqzgn3bglM44fYUUrgKMw14j8ptsNHcQxIbfU98bkLdY/oPRofqMrPli1+YdZCBPolZDA6ZAlPf0dyIQ4hmw==', NULL, 2, '2016-01-27 00:00:00', 27),
(193, 'Damien', 'LERY', '12 rue Damrémont', '0174567899', '75018', 'PARIS', 0, 'Burminfely78@einro.com', 'YSPWe58pWLqDFvXJHW6+y7QZhx0hOrJU9rEItduXFekK7zRuL/abofXgyf4a7CCXDsIdUY3zJwhJJeN2qSkfqA==', NULL, 2, '2016-01-27 00:00:00', 49),
(195, 'Damien', 'LERY', '12 rue Damrémont', '0174567899', '75018', 'PARIS', 0, 'Burminfely78@enro.com', 'JKyOw5O8uSC2QNawXipgnPZ22/ICn6qYnhjvaFrmKmTekun9Ii1YpuW7Z+U3GbLJiV0YjVafpfD6Cy3TSCZFEw==', NULL, 2, '2016-01-27 00:00:00', 51),
(196, 'Damien', 'LERY', '12 rue Damrémont', '0174567899', '75018', 'PARIS', 0, 'Burminfely78@eno.com', 'swTH2ZzmHlss2a4JKecELysoKbJ3qaF4u1Gh1Z1rlN2YePRrMf7DBlz/Y4SPfrRPflogBNJ/FZT9fPBSQJQTNw==', NULL, 2, '2016-01-27 00:00:00', 52),
(197, 'Damien', 'LERY', '12 rue Damrémont', '0174567899', '75018', 'PARIS', 0, 'Burminfely78@en.com', '6ikylg1m6w/0ChxdrgwMG8JIg/nn11pBkXpuauZmE1dRyC06jHDu7/YNAmzBmFayjM7abCjxQzWtlsOwCfJqvQ==', NULL, 2, '2016-01-27 00:00:00', NULL),
(198, 'Damien', 'LERY', '12 rue Damrémont', '0174567899', '75018', 'PARIS', 0, 'Burminfely@en.com', 'DMEVx0Esvm302XBogDq2pZVUsuZOBvRx2jlW8Cx4R0nlI94TmVrVFr2xt1tPXfGnexcQ1HLfhePXY0wZ9WcAug==', NULL, 2, '2016-01-27 00:00:00', NULL),
(199, 'Damien', 'LERY', '12 rue Damrémont', '0174567899', '75018', 'PARIS', 0, 'Burminfely@hey.com', '49QA2C474PgZEyN46ct19lwziWULLBaCc4eZZfn4uw34bItjJcIDaJXMDN5OYEekPQPh3cJywtDoBmdkgu5H9A==', NULL, 2, '2016-01-27 00:00:00', NULL),
(200, 'Damien', 'LERY', '12 rue Damrémont', '0174567899', '75018', 'PARIS', 76, 'Burminfel@hey.com', 'JZURDkh9lK0T2vdwnLiYtFAzI0uUwkd13JSDbdCkcRp9TsUAL7i+UgNzNZeZUKLbp2SlQwfrFuCMXDKacnDEfA==', NULL, 2, '2016-01-27 00:00:00', NULL),
(201, 'Antoine', 'BROSSARD', '1é place des Halles', '0254990077', '41500', 'MER', 76, 'antoine@free.fr', 'Damien@2016', NULL, 2, '2016-01-27 00:00:00', NULL),
(203, 'Priscille', 'LIBEAUT', '', '', '', '', 0, 'priss@sfr.fr', 'S5birPK99KpfuFdRsdBZMd+jLAYd2S8kwd5BeRCQnqJSFxbDhbFXTA1e7d2QS3m7Sozn05xLcXdIBkWEMiBlQg==', NULL, 2, '2016-01-27 22:05:04', NULL),
(204, 'Brice', 'DENICE', '34 rue des grands champs', '0174567890', '92300', 'LEVALLOIS', 76, 'brice.denice@free.fr', '+IG3kwchs7/OkPSzvs+bC9cntaARSed9ubwq+ppAsGllH430vTyw1+CWF9Lf1MlT2/LL1CYsiK1r6qdrXdy+lQ==', NULL, 2, '2016-01-28 10:09:43', NULL),
(205, 'Roger', 'FEDERER', '117 rue Damrémont', '0174567890', '75018', 'PARIS', 76, 'roger@free.fr', 'oe4PL0fCxIYenyBuzmW/Rsn2Aqo8OmAi363W8SqPC3TsUMrgLD/WpirvYCc5XmvXa6U3jaztYHlMMFJTAf5f4w==', NULL, 2, '2016-01-28 11:30:09', NULL),
(206, 'Ludovic', 'SIRE', '', '0174567899', '', '', 76, 'ludovic.sire@gmail.com', 'vLPEjkZBbBBp5NGMi4VPHIK8dAFuLuGWAx5SBp1swjJHHSPvbuY4D+aMrXoCM/BSczqsfFEF4CHoJgCB4LI1Lg==', NULL, 2, '2016-01-28 15:09:07', NULL),
(207, 'Améline', 'BREBION', '12 place des Halles', '0254231441', '45000', 'ORLÉANS', 76, 'ame@free.fr', 'bk5KoFnhXTDtg4HoYpT7JIzacAF670Tu05fGyQfcZNAijhFd92xN7OzGY2hXyRFfjLiN690fqtlPFf/6dmUIgg==', NULL, 2, '2016-01-28 20:54:51', NULL),
(219, 'Améline', 'BREBION', '12 place des Halles', '0254231441', '45000', 'ORLÉANS', 76, 'damien.lery@sfr.fr', '59R5WLF9jhtYGCvwM71N1yv5sntTSsCAR/pXbJfmcpJ2vwyGA16c3fGmTsFRu/iWgxDpM4KwhY/vWMzG9wzkkw==', NULL, 2, '2016-01-28 21:27:32', NULL),
(231, 'Priscille', 'LIBEAUT', '31 rue de la chamelle vitrifiée', '0174567890', '75011', 'PARIS', 76, 'Noing1942@einrot.com', 'KmWIzSBpBVKTLrMekmM4HgBLj8YDpMvqbnjFmyCflmEoXa4MdprJheLGWe3DcYk6eIts+jB6cQ4O+Ui9x0OYjw==', NULL, NULL, '2016-01-28 21:56:44', 87),
(236, 'Priscille', 'LIBEAUT', '31 rue de la chamelle vitrifiée', '0174567890', '75011', 'PARIS', 76, 'Andill1946@jourrapide.com', 'FOo4M6wBaMHOx9jw+duAjW/4d+WRZDG6Tq8Nx/23sOO54UV0T2I+kGEfDj7GHY5xQTDiRiVFfxwM8VQ0d94NKg==', NULL, 2, '2016-01-28 22:03:45', NULL),
(237, 'Priscille', 'LIBEAUT', '31 rue de la chamelle vitrifiée', '0174567890', '75011', 'PARIS', 76, 'Aralience1986@jourrapide.com', 'PymAt4rKIsPUTtQj20pYpijDuPHuw5RMTLDvR6j7U4zmLxWgcvlm3XiXWmvASMWPtWFH0irA90MeIEgyyHjfLQ==', NULL, 2, '2016-01-28 22:29:23', NULL),
(238, 'Loïc', 'CABOUR', '12 place des Halles', '0178820254', '75019', 'PARIS', 0, 'Appis1969@teleworm.us', 'VirIjuEf/EEsJOTQKgzvpdW9bEUNvutUV2hi+4TQPcw0bzaBo0XpcirRB3LYlnwV9sippvnVzrboDBWAqmLJBg==', NULL, 2, '2016-01-28 23:04:21', NULL),
(240, 'Loïc', 'CABOUR', '12 place des Halles', '0178820254', '75019', 'PARIS', 0, 'Keire1970@cuvox.de', 'VteJlfPvkZLdEqVfn7IXOUrrQXVw/gu/i5/vAaBW+8VvZcryzb+Be/yVGxeVgAOTocXGEpi7+EeDrU2Kv+xXQQ==', NULL, 2, '2016-01-28 23:08:53', NULL),
(241, 'Loïc', 'CABOUR', '12 place des Halles', '0178820254', '75019', 'PARIS', 0, 'Scap1987@cuvox.de', 'd3PAFrOlt1fYsG/yD2aVGQtadLRSBjYq/GZ3xAhILGNyT7Alziod8/rx5s/JY9jCYChYWh9DNnO0eklXyT6UIg==', NULL, 2, '2016-01-28 23:26:41', NULL),
(242, 'Loïc', 'CABOUR', '12 place des Halles', '0178820254', '75019', 'PARIS', 0, 'Fiect1960@teleworm.us', 'bHhJBhI+Jf5KGw4IDv8ni5/40HPX5N97/UF5n96WhWltDgFCwDHiotNjeWd7DABBtJEGPw4KQSVqXWU7qGLvgw==', NULL, 2, '2016-01-28 23:29:38', NULL),
(243, 'Loïc', 'CABOUR', '12 place des Halles', '0178820254', '75019', 'PARIS', 0, 'Deens1952@jourrapide.com', 'J9uGnpyOAkLvWrd4+N9ojL3+AzC6TDA+DGcQWoXr4Y0Aqki+Vfc/VL5+L+xOF2MQe7qM3qt7jyempXC7zaQV3A==', NULL, 2, '2016-01-28 23:31:11', NULL),
(244, 'Loïc', 'CABOUR', '12 place des Halles', '0178820254', '75019', 'PARIS', 0, 'Fromed1927@cuvox.de', '63CxDo6hh1eLpOkYvbztiYrPfUY69udHVmpzwIgvAd/c2wzZnKraQ4R/IJHr66s04gcGeXU5wouKH40JpPnovQ==', NULL, 2, '2016-01-28 23:36:21', NULL),
(246, 'Loïc', 'CABOUR', '12 place des Halles', '0178820254', '75019', 'PARIS', 0, 'Duld1986@dayrep.com', 'woceUD9WullFbcrrVQisFUxblc7K4uKaB7x8q11O0nXsKjrXAyYDSzOXvnnq702Xo+ClwsIfYVRk02Te42AiHw==', NULL, 2, '2016-01-28 23:47:02', NULL),
(249, 'Loïc', 'CABOUR', '', '', '', '', 76, 'Andereliked@einrot.com', '+cw9il22nAjeMb+VaQI/4QLlvOG+0OGqzY1bwFXbK3J9pvbbuCzmkWENgTTlgxwA4OL3quEn125TX11wvUuAuQ==', NULL, 2, '2016-01-29 09:25:26', NULL);

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
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=161;
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
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
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
-- AUTO_INCREMENT pour la table `pays`
--
ALTER TABLE `pays`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=250;
--
-- AUTO_INCREMENT pour la table `produits`
--
ALTER TABLE `produits`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=132;
--
-- AUTO_INCREMENT pour la table `produits_utilisateurs`
--
ALTER TABLE `produits_utilisateurs`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `site`
--
ALTER TABLE `site`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `statut`
--
ALTER TABLE `statut`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `tags`
--
ALTER TABLE `tags`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `token`
--
ALTER TABLE `token`
MODIFY `id` int(11) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=106;
--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=250;
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
