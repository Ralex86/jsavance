-- MySQL dump 10.13  Distrib 5.7.25, for Linux (x86_64)
--
-- Host: localhost    Database: moviedb
-- ------------------------------------------------------
-- Server version	5.7.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Director`
--

DROP TABLE IF EXISTS `Director`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Director` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) COLLATE utf8_bin NOT NULL,
  `birthdate` date DEFAULT NULL,
  `nationality` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Director`
--

LOCK TABLES `Director` WRITE;
/*!40000 ALTER TABLE `Director` DISABLE KEYS */;
INSERT INTO `Director` VALUES (12,'Peter Jackson','1961-10-31','New Zealand'),(13,'John Lasseter','1957-01-12','USA'),(14,'Christopher Nolan','1970-07-30','English'),(15,'Peter Jacksons','2019-01-01','English'),(16,'Henri Verneuil','1920-10-15','French'),(17,'J J Abram','2019-01-01','American'),(18,'Dupond','2019-01-01','French'),(19,'AAO','2019-01-01','ALA'),(20,'AA','2019-01-01','French'),(21,'DKL','2019-01-01','French');
/*!40000 ALTER TABLE `Director` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Movie`
--

DROP TABLE IF EXISTS `Movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Movie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_bin NOT NULL,
  `year` year(4) DEFAULT NULL,
  `language` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `genre` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `directorId` int(11) NOT NULL,
  `poster` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `directorId` (`directorId`),
  CONSTRAINT `Movie_ibfk_1` FOREIGN KEY (`directorId`) REFERENCES `Director` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Movie`
--

LOCK TABLES `Movie` WRITE;
/*!40000 ALTER TABLE `Movie` DISABLE KEYS */;
INSERT INTO `Movie` VALUES (13,'Toy story',1995,'English','Animation, Adventure, Comedy ',13,'123download.jpg'),(14,'Interstellar',2014,'English','Adventure, Drama, Sci-Fi',14,'123MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg'),(15,'Lord of the rings',2001,'English','Fantasy',15,'12318366630.jpg');
/*!40000 ALTER TABLE `Movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Rating`
--

DROP TABLE IF EXISTS `Rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Rating` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rate` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Rating`
--

LOCK TABLES `Rating` WRITE;
/*!40000 ALTER TABLE `Rating` DISABLE KEYS */;
INSERT INTO `Rating` VALUES (1,5,13),(2,3,13),(3,4,13),(4,5,14),(5,3,14),(6,2,13),(7,1,13),(8,4,13),(9,5,13),(10,5,13),(11,5,13),(12,5,13),(13,5,13),(14,5,13),(15,5,13),(16,5,13),(17,5,13),(18,5,13),(19,5,13),(20,5,13),(21,5,15),(22,3,15),(23,1,15);
/*!40000 ALTER TABLE `Rating` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-04 16:12:58
