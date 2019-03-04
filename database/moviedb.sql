-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 04, 2019 at 08:02 AM
-- Server version: 8.0.15
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `moviedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `Director`
--

CREATE TABLE `Director` (
  `id` int(11) NOT NULL,
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `birthdate` date DEFAULT NULL,
  `nationality` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Director`
--

INSERT INTO `Director` (`id`, `name`, `birthdate`, `nationality`) VALUES
(12, 'Peter Jackson', '1961-10-31', 'New Zealand'),
(13, 'John Lasseter', '1957-01-12', 'USA'),
(14, 'Christopher Nolan', '1970-07-30', 'English'),
(15, 'Peter Jacksons', '2019-01-01', 'English'),
(16, 'Henri Verneuil', '1920-10-15', 'French'),
(17, 'J J Abram', '2019-01-01', 'American');

-- --------------------------------------------------------

--
-- Table structure for table `Movie`
--

CREATE TABLE `Movie` (
  `id` int(11) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `year` year(4) DEFAULT NULL,
  `language` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `genre` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `directorId` int(11) NOT NULL,
  `poster` varchar(250) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Movie`
--

INSERT INTO `Movie` (`id`, `title`, `year`, `language`, `genre`, `directorId`, `poster`) VALUES
(13, 'Toy story', 1995, 'English', 'Animation, Adventure, Comedy ', 13, '123509771.jpg-r_1280_720-f_jpg-q_x-xxyxx.jpg'),
(14, 'Interstellar', 2014, 'English', 'Adventure, Drama, Sci-Fi', 14, '123MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg'),
(15, 'Lord of the rings', 2001, 'English', 'Fantasy', 15, '12318366630.jpg'),
(16, 'Un singe en hiver', 1963, 'French', 'Drama', 16, '123images.jpeg'),
(17, 'Star wars le réveil de la force', 2015, 'USA', 'Science Fiction', 17, '123starwars.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `Rating`
--

CREATE TABLE `Rating` (
  `id` int(11) NOT NULL,
  `rate` int(11) NOT NULL,
  `movieId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Director`
--
ALTER TABLE `Director`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Movie`
--
ALTER TABLE `Movie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `directorId` (`directorId`);

--
-- Indexes for table `Rating`
--
ALTER TABLE `Rating`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Director`
--
ALTER TABLE `Director`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `Movie`
--
ALTER TABLE `Movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Movie`
--
ALTER TABLE `Movie`
  ADD CONSTRAINT `Movie_ibfk_1` FOREIGN KEY (`directorId`) REFERENCES `Director` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
