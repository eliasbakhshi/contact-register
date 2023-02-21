-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Värd: 127.0.0.1
-- Tid vid skapande: 21 feb 2023 kl 10:38
-- Serverversion: 10.4.27-MariaDB
-- PHP-version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `contact_register`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) DEFAULT '',
  `contact_persons_id` varchar(200) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumpning av Data i tabell `companies`
--

INSERT INTO `companies` (`id`, `name`, `address`, `contact_persons_id`) VALUES
(13, 'Company name 5555', 'Company address', '14'),
(14, 'Company name', 'Company address', '\"\"'),
(15, 'Company name', 'Company address', '\"\"'),
(16, 'Company name', 'Company address', '\"\"'),
(17, 'Company name', 'Company address', '\"\"'),
(19, 'Company name', 'Company address', '2,10,13,15,21'),
(38, 'Company name', 'Company address', '10'),
(40, 'Company name', 'Company address', NULL),
(41, 'Company name', 'Company address', ''),
(42, 'Company name', 'Company address', ''),
(43, 'Company name', 'Company address', ''),
(44, 'Company name', 'Company address', ''),
(45, 'Company name', 'Company address', ''),
(47, 'Company name', 'Company address', '11,21'),
(49, 'Company name', 'Company address', ''),
(50, 'Company name', 'Company address', '15'),
(51, 'Company name', 'Company address', '2,10'),
(52, 'Company name', 'Company address', '10'),
(53, 'Company name', 'Company address', '2');

-- --------------------------------------------------------

--
-- Tabellstruktur `persons`
--

CREATE TABLE `persons` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumpning av Data i tabell `persons`
--

INSERT INTO `persons` (`id`, `name`, `title`, `phone`) VALUES
(14, 'Person name 4444', 'Position in the company', ' 46788888888'),
(15, 'Person name', 'Position in the company', '+46788888888'),
(17, 'Person name 3', 'Position in the company', ' 46788888888'),
(18, 'Person name', 'Position in the company', '+46788888888'),
(19, 'Person name 2222', 'Position in the company', ' 46788888888'),
(20, 'Person name', 'Position in the company', '+46788888888'),
(21, 'Person name', 'Position in the company', '+46788888888');

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `persons`
--
ALTER TABLE `persons`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT för tabell `persons`
--
ALTER TABLE `persons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
