-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Client :  localhost:8889
-- Généré le :  Mer 06 Janvier 2016 à 21:42
-- Version du serveur :  5.5.38
-- Version de PHP :  5.6.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `tradr`
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
  `rang` int(10) NOT NULL DEFAULT '1'
) ENGINE=InnoDB AUTO_INCREMENT=161 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `categories`
--

INSERT INTO `categories` (`id`, `id_parent`, `libelle`, `rang`) VALUES
(1, NULL, 'Home', 1),
(2, NULL, 'Informatique', 2),
(3, NULL, 'Image & Son', 3),
(4, NULL, 'Jeux & Consoles', 4),
(5, NULL, 'Qui sommes-nous', 6),
(6, NULL, 'Contact', 5),
(7, 2, 'Pièce', 5),
(8, 2, 'Périphérique', 3),
(9, 2, 'Portable', 2),
(10, 2, 'Ordinateur', 1),
(11, 2, 'Réseau', 4),
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

-- --------------------------------------------------------

--
-- Structure de la table `categories_produits`
--

CREATE TABLE `categories_produits` (
  `id_categorie` int(10) NOT NULL,
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
(39, 40);

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
-- Structure de la table `evaluations`
--

CREATE TABLE `evaluations` (
`id` int(11) NOT NULL,
  `id_utilisateur` int(11) NOT NULL,
  `id_produit` int(11) NOT NULL,
  `note` enum('1','2','3','4','5') DEFAULT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

CREATE TABLE `produits` (
`id` int(11) NOT NULL,
  `reference` varchar(255) NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `images` varchar(255) NOT NULL,
  `marque` varchar(255) NOT NULL,
  `video` varchar(255) NOT NULL,
  `statut` tinyint(1) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `produits`
--

INSERT INTO `produits` (`id`, `reference`, `libelle`, `images`, `marque`, `video`, `statut`) VALUES
(1, 'IPB1', 'UMX-3 Noir', '', 'LDLC', '', 1),
(2, 'IPB2', 'QT01 Blanc', '', 'LDLC', '', 1),
(3, 'IPB3', 'Aeolus', '', 'Advance', '', 1),
(4, 'IPB4', 'Aegis Core (Bleu)', '', 'BitFenix', '', 1),
(5, 'IPAB1', 'AK-HDA-01', '', 'Akasa', '', 1),
(6, 'IPAB2', 'AK-FC-06U3BK', '', 'Akasa', '', 1),
(7, 'IPAB3', 'Combination Laptop Lock', '', 'Kensington', '', 1),
(8, 'IPAB4', 'Alchemy 2.0 Magnetic LED-Strip (rouge, 12 cm)', '', 'BitFenix', '', 1),
(9, 'IPA1', 'BG-400 Quality Select 80PLUS Bronze', '', 'LDLC', '', 1),
(10, 'IPA2', 'Pure Power L8 600W 80PLUS Bronze', '', 'Be Quiet !', '', 1),
(11, 'IPA3', 'HX850i 80PLUS Platinum', '', 'Corsair', '', 1),
(12, 'IPA4', 'ZM700-TX 80PLUS', '', 'Zalman', '', 1),
(13, 'IPDD1', '7K4000 4 To SATA 6Gb/s', '', 'Hitachi Deskstar', '', 1),
(14, 'IPDD2', 'Extreme 1 To - Rouge', '', 'Buffalo MiniStation', '', 1),
(15, 'IPDD3', 'HDD 5 To 3.5" (4XB0G88712)', '', 'Lenovo ThinkServer', '', 1),
(16, 'IPDD4', 'SpinPoint M8 500 Go', '', 'Seagate Momentus', '', 1),
(17, 'IPSSD1', 'SSD 840 EVO 500 Go mSATA', '', 'Samsung', '', 1),
(18, 'IPSSD2', 'HyperX Predator M.2 PCIe 240 Go', '', 'Kingston', '', 1),
(19, 'IPSSD3', 'Phoenix Blade 480 Go PCI Express 8x', '', 'G.Skill', '', 1),
(20, 'IPSSD4', 'CS2111 480 Go', '', 'PNY', '', 1),
(21, 'IPCM1', '960GM-VGS3 FX', '', 'ASRock', '', 1),
(22, 'IPCM2', 'B150 PRO GAMING D3', '', 'ASUS', '', 1),
(23, 'IPCM3', 'GA-6PXSV1', '', 'Gigabyte', '', 1),
(24, 'IPCM4', 'B85-G43 GAMING', '', 'MSI', '', 1),
(25, 'IPCG1', 'DualHead2Go Analog Edition', '', 'Matrox', '', 1),
(26, 'IPCG2', 'TripleHead2Go DP Edition', '', 'Matrox', '', 1),
(27, 'IPCG3', 'GTX 980 Ti Hydro Copper', '', 'EVGA GeForce', '', 1),
(28, 'IPCG4', 'FirePro W9100 16 GB', '', 'Sapphire', '', 1),
(29, 'IPMPC1', '1 Go DDR2 533 MHz', '', 'Kingston', '', 1),
(30, 'IPMPC2', 'HyperX Impact SO-DIMM 16 Go (2 x 8 Go) DDR3 2133 MHz CL11', '', 'Kingston', '', 1),
(31, 'IPMPC3', 'ValueRAM 8 Go DDR3 1866 MHz ECC Registered CL13 DR X8', '', 'Kingston', '', 1),
(32, 'IPMPC4', '16 Go DDR3L 1600 MHz Registered CL11 DR X4', '', 'HP', '', 1),
(33, 'IPP1', 'A10-7870K (3.9 GHz) Black Edition', '', 'AMD', '', 1),
(34, 'IPP2', 'Celeron G1620 (2.7 GHz)', '', 'Intel', '', 1),
(35, 'IPP3', 'Xeon E5-2643 v2 (3.5 GHz)', '', 'Intel', '', 1),
(36, 'IPP4', 'Xeon E5-2697 v2 (2.7 GHz)', '', 'Intel', '', 1),
(37, 'IPR1', 'AK-CC7122EP01', '', 'Akasa', '', 1),
(38, 'IPR2', 'Alpine M1', '', 'Arctic', '', 1),
(39, 'IPR3', 'Seidon 120V (Ver. 2.0)', '', 'Cooler Master LTD', '', 1),
(40, 'IPR4', 'Macho Zero', '', 'Thermalright', '', 1);

-- --------------------------------------------------------

--
-- Structure de la table `produits_utilisateurs`
--

CREATE TABLE `produits_utilisateurs` (
  `id_produit` int(10) NOT NULL,
  `id_utilisateur` int(10) NOT NULL,
  `prix` decimal(10,2) NOT NULL,
  `quantité` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
`id` int(11) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `cp` varchar(10) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `id_pays` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mdp` varchar(255) NOT NULL,
  `date_naissance` datetime NOT NULL,
  `droit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
 ADD UNIQUE KEY `id_categorie` (`id_categorie`,`id_produit`), ADD KEY `id_categorie_2` (`id_categorie`), ADD KEY `id_produit` (`id_produit`);

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
-- Index pour la table `produits_utilisateurs`
--
ALTER TABLE `produits_utilisateurs`
 ADD UNIQUE KEY `id_produit` (`id_produit`,`id_utilisateur`), ADD KEY `id_produit_2` (`id_produit`), ADD KEY `id_utilisateur` (`id_utilisateur`);

--
-- Index pour la table `tags`
--
ALTER TABLE `tags`
 ADD PRIMARY KEY (`id`), ADD KEY `IDX_6FBC9426F7384557` (`id_produit`);

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
-- AUTO_INCREMENT pour la table `evaluations`
--
ALTER TABLE `evaluations`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
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
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `produits`
--
ALTER TABLE `produits`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT pour la table `tags`
--
ALTER TABLE `tags`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
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
ADD CONSTRAINT `FK_CEB90F70F7384557` FOREIGN KEY (`id_produit`) REFERENCES `produits` (`id`);

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
