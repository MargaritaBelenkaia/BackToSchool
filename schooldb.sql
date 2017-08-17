-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 17, 2017 at 09:42 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `schooldb`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `name`, `description`, `image`) VALUES
(1, 'math', 'super course', '32429796.png'),
(2, 'chem', 'super course', ''),
(3, 'bio', 'super mega course', ''),
(5, 'IT', 'The best course ever', '1274241202.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `phone` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `phone`, `email`, `image`) VALUES
(2, 'Noa', '789', 'noa@mail.com', '1749777555.png'),
(8, 'Ram', '567', 'ram@mail.com', ''),
(9, 'Adam', '456', 'adam@mail.com', '1294913814.png'),
(10, 'Itay', '345', 'itay@mail.com', '1249058011.jpg'),
(12, 'Lily', '456', 'lily@mail.com', '1139478355.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `permission` varchar(128) NOT NULL,
  `name` varchar(128) NOT NULL,
  `phone` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `pwd` varchar(128) NOT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `permission`, `name`, `phone`, `email`, `pwd`, `image`) VALUES
(1, 'owner', 'Minnie Mouse', '123', 'minnie@mail.com', 'b3cd915d758008bd19d0f2428fbb354a', '92781873.jpg'),
(6, 'admin', 'Mickey Mouse', '123', 'mickey@mail.com', 'b3cd915d758008bd19d0f2428fbb354a', '1274724315.jpeg'),
(29, 'sales', 'Anna', '234', 'anna@mail.com', '4124bc0a9335c27f086f24ba207a4912', ''),
(44, 'admin', 'Karol', '567', 'karol@mail.com', 'dc468c70fb574ebd07287b38d0d0676d', '1617134561.jpg'),
(53, 'sales', 'Malka', '456', 'malka@mail.com', 'b3cd915d758008bd19d0f2428fbb354a', '1978080461.png'),
(54, 'sales', 'Mary', '579', 'mary@mail.com', 'b3cd915d758008bd19d0f2428fbb354a', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
