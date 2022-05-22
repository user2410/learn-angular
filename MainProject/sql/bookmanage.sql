-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2022 at 04:50 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookmanage`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `BookID` int(11) NOT NULL,
  `Title` varchar(50) DEFAULT NULL,
  `Author` varchar(300) DEFAULT NULL,
  `View_time` int(11) DEFAULT NULL,
  `Like_time` int(11) DEFAULT NULL,
  `Img` blob DEFAULT NULL,
  `ImgType` enum('JPEG','PNG','GIF','TIFF','PSD','PDF','EPS','AI','INDD','RAW') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`BookID`, `Title`, `Author`, `View_time`, `Like_time`, `Img`, `ImgType`) VALUES
(1, 'Book1', 'Author1, Author2, Author3', 10, 6, NULL, NULL),
(2, 'Book2', 'Author2, Author4', 13, 7, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `ID_PL` int(11) NOT NULL,
  `Name` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`ID_PL`, `Name`) VALUES
(1, 'Sci-fi'),
(2, 'Fantasy'),
(3, 'Psychological');

-- --------------------------------------------------------

--
-- Table structure for table `phan_loai`
--

CREATE TABLE `phan_loai` (
  `ID_PL` int(11) NOT NULL,
  `BookID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `phan_loai`
--

INSERT INTO `phan_loai` (`ID_PL`, `BookID`) VALUES
(3, 1),
(1, 2),
(2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `reader`
--

CREATE TABLE `reader` (
  `UserID` int(11) NOT NULL,
  `AccountName` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `reserved`
--

CREATE TABLE `reserved` (
  `BookID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `ReservedDate` date DEFAULT NULL,
  `DueDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`BookID`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`ID_PL`);

--
-- Indexes for table `phan_loai`
--
ALTER TABLE `phan_loai`
  ADD PRIMARY KEY (`BookID`,`ID_PL`),
  ADD KEY `ID_PL` (`ID_PL`);

--
-- Indexes for table `reader`
--
ALTER TABLE `reader`
  ADD PRIMARY KEY (`UserID`);

--
-- Indexes for table `reserved`
--
ALTER TABLE `reserved`
  ADD PRIMARY KEY (`BookID`,`UserID`),
  ADD KEY `UserID` (`UserID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `phan_loai`
--
ALTER TABLE `phan_loai`
  ADD CONSTRAINT `phan_loai_ibfk_1` FOREIGN KEY (`ID_PL`) REFERENCES `category` (`ID_PL`),
  ADD CONSTRAINT `phan_loai_ibfk_2` FOREIGN KEY (`BookID`) REFERENCES `book` (`BookID`);

--
-- Constraints for table `reserved`
--
ALTER TABLE `reserved`
  ADD CONSTRAINT `reserved_ibfk_1` FOREIGN KEY (`BookID`) REFERENCES `book` (`BookID`),
  ADD CONSTRAINT `reserved_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `reader` (`UserID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
