-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 10, 2024 at 07:31 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.12

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `online_application`
--

--
-- Truncate table before insert `applicationforms`
--

TRUNCATE TABLE `applicationforms`;
--
-- Truncate table before insert `noctypes`
--

TRUNCATE TABLE `noctypes`;
--
-- Dumping data for table `noctypes`
--

INSERT INTO `noctypes` (`id`, `title`, `description`, `hyperlink`, `createdAt`, `updatedAt`, `orgNOCInfoId`) VALUES
(1, 'Class Authorization', '<button type=\"button\" class=\"btn bg-gradient-primary\">Primary</button>', NULL, '2024-07-13 15:21:16.714', '2024-08-17 16:21:42.314', 12),
(2, 'Dispensation For COC', '<button type=\"button\" class=\"btn bg-gradient-primary\">Primary</button>', NULL, '2024-07-13 15:21:54.036', '2024-08-03 14:28:04.495', 7);

--
-- Truncate table before insert `notices`
--

TRUNCATE TABLE `notices`;
--
-- Dumping data for table `notices`
--

INSERT INTO `notices` (`id`, `title`, `description`, `hyperlink`, `createdAt`, `updatedAt`, `applicationFormsId`) VALUES
(2, 'Online Application for INLAND', '', '/application', '2024-07-11 20:05:04.640', '2024-07-11 20:05:04.640', NULL),
(3, 'Online Application for CADET EYE TEST ', '', '/application', '2024-07-11 20:37:35.200', '2024-07-11 20:37:35.200', NULL),
(4, 'sdfsdfsdf', 'test', '/application/test', '2024-08-17 16:31:21.574', '2024-08-17 16:31:21.574', NULL),
(5, 'sdfsdfsdf', 'test44', '/application/test44', '2024-08-17 16:31:41.995', '2024-08-17 16:31:41.995', NULL);

--
-- Truncate table before insert `orgnocinfo`
--

TRUNCATE TABLE `orgnocinfo`;
--
-- Dumping data for table `orgnocinfo`
--

INSERT INTO `orgnocinfo` (`id`, `title`, `description`, `hyperlink`, `nocTypesId`, `nocTypesTitle`, `orgName`, `orgAddress`, `orgEmail`, `orgMobile`, `applicantName`, `applicantPhone`, `expirationDate`, `createdAt`, `updatedAt`, `orgPaymentInfoId`) VALUES
(6, 'Class Authorization', NULL, NULL, 1, 'Class Authorization, IUB', 'IUB', 'A5, 4th Floor', 'newazbenalam@gmail.com', '01989248993', 'Newaz Ben Alam', '0178689447', '2024-07-30 00:00:00.000', '2024-08-03 14:27:02.886', '2024-08-03 14:27:02.886', NULL),
(7, 'Dispensation For COC', NULL, NULL, 2, 'Dispensation For COC, IUB', 'IUB', 'A5, 4th Floor', 'newazbenalam@gmail.com', '01989248993', 'Newaz Ben Alam', '0178689447', '2024-07-30 00:00:00.000', '2024-08-03 14:28:04.495', '2024-08-03 14:28:04.495', NULL),
(8, 'Class Authorization', NULL, NULL, 1, 'Class Authorization, IUB', 'IUB', 'A5, 4th Floor', 'newazbenalam@gmail.com', '01989248993', 'Newaz Ben Alam', '0178689447', '2024-07-30 00:00:00.000', '2024-08-12 16:13:48.861', '2024-08-12 16:13:48.861', NULL),
(9, 'Class Authorization', NULL, NULL, 1, 'Class Authorization, IUB', 'IUB', 'A5, 4th Floor', 'newazbenalam@gmail.com', '01989248993', 'Newaz Ben Alam', '0178689447', '2024-07-30 00:00:00.000', '2024-08-12 16:13:56.338', '2024-08-12 16:13:56.338', NULL),
(10, 'Class Authorization', NULL, NULL, 1, 'Class Authorization, IUB', 'IUB', 'A5, 4th Floor', 'newazbenalam@gmail.com', '01989248993', 'Newaz Ben Alam', '0178689447', '2024-07-30 00:00:00.000', '2024-08-12 16:13:56.445', '2024-08-12 16:13:56.445', NULL),
(11, 'Class Authorization', NULL, NULL, 1, 'Class Authorization, IUB', 'IUB', 'A5, 4th Floor', 'newazbenalam1@gmail.com', '01989248993', 'Newaz Ben Alam', '0178689447', '2024-07-30 00:00:00.000', '2024-08-17 16:21:37.643', '2024-08-17 16:21:37.643', NULL),
(12, 'Class Authorization', NULL, NULL, 1, 'Class Authorization, IUB', 'IUB', 'A5, 4th Floor', 'newazbenalam1@gmail.com', '01989248993', 'Newaz Ben Alam', '0178689447', '2024-07-30 00:00:00.000', '2024-08-17 16:21:42.314', '2024-08-17 16:21:42.314', NULL);

--
-- Truncate table before insert `paymentinfo`
--

TRUNCATE TABLE `paymentinfo`;
--
-- Truncate table before insert `paymenttypes`
--

TRUNCATE TABLE `paymenttypes`;
--
-- Truncate table before insert `subforms`
--

TRUNCATE TABLE `subforms`;
--
-- Truncate table before insert `users`
--

TRUNCATE TABLE `users`;
--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `mobile`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(8, 'Newaz Ben Alam', 'johnsstocks10@gmail.com', '0178689447', 'johnsstocks10@gmail.com', '0178689447', '2024-08-03 14:06:43.445', '2024-08-03 14:06:43.445'),
(9, 'Newaz Ben Alam', 'johnsstocks10@gmail.com', '0178689447', 'johnsstocks10@gmail.com', '0178689447', '2024-08-03 14:07:40.757', '2024-08-03 14:07:40.757'),
(10, 'Newaz Ben Alam', 'johnsstocks10@gmail.com', '0178689447', 'johnsstocks10@gmail.com', '0178689447', '2024-08-03 14:08:08.718', '2024-08-03 14:08:08.718'),
(11, 'Newaz Ben Alam', 'johnsstocks10@gmail.com', '0178689447', 'johnsstocks10@gmail.com', '0178689447', '2024-08-03 14:09:14.707', '2024-08-03 14:09:14.707'),
(12, 'Newaz Ben Alam', 'johnsstocks10@gmail.com', '0178689447', 'johnsstocks10@gmail.com', '0178689447', '2024-08-03 14:10:07.714', '2024-08-03 14:10:07.714'),
(13, 'Newaz Ben Alam', 'johnsstocks10@gmail.com', '0178689447', 'johnsstocks10@gmail.com', '0178689447', '2024-08-03 14:10:21.075', '2024-08-03 14:10:21.075'),
(14, 'Newaz Ben Alam', 'johnsstocks10@gmail.com', '0178689447', 'johnsstocks10@gmail.com', '0178689447', '2024-08-03 14:11:27.129', '2024-08-03 14:11:27.129'),
(15, 'Newaz Ben Alam', 'johnsstocks10@gmail.com', '0178689447', 'johnsstocks10@gmail.com', '0178689447', '2024-08-03 14:11:43.536', '2024-08-03 14:11:43.536'),
(16, 'Newaz Ben Alam', 'johnsstocks10@gmail.com', '0178689447', 'johnsstocks10@gmail.com', '0178689447', '2024-08-03 14:12:46.034', '2024-08-03 14:12:46.034'),
(17, 'Newaz Ben Alam', 'johnsstocks10@gmail.com', '0178689447', 'johnsstocks10@gmail.com', '0178689447', '2024-08-03 14:14:16.847', '2024-08-03 14:14:16.847'),
(18, 'Newaz Ben Alam', 'johnsstocks10@gmail.com', '0178689447', 'johnsstocks10@gmail.com', '0178689447', '2024-08-03 14:15:15.881', '2024-08-03 14:15:15.881'),
(19, 'Newaz Ben Alam', 'johnsstocks10@gmail.com', '0178689447', 'johnsstocks10@gmail.com', '0178689447', '2024-08-03 14:16:15.236', '2024-08-03 14:16:15.236'),
(20, 'Newaz Ben Alam', 'johnsstocks10@gmail.com', '0178689447', 'johnsstocks10@gmail.com', '0178689447', '2024-08-03 14:23:18.592', '2024-08-03 14:23:18.592'),
(21, 'Newaz Ben Alam', 'johnsstocks10@gmail.com', '0178689447', 'johnsstocks10@gmail.com', '0178689447', '2024-08-03 14:25:09.556', '2024-08-03 14:25:09.556'),
(22, 'Newaz Ben Alam', 'johnsstocks10@gmail.com', '0178689447', 'johnsstocks10@gmail.com', '0178689447', '2024-08-03 14:27:02.834', '2024-08-03 14:27:02.834'),
(23, 'Newaz Ben Alam', 'johnsstocks10@gmail.com', '0178689447', 'johnsstocks10@gmail.com', '0178689447', '2024-08-03 14:28:04.484', '2024-08-03 14:28:04.484'),
(24, 'Newaz Ben Alam', 'johnsstocks10@gmail.com', '0178689447', 'johnsstocks10@gmail.com', '0178689447', '2024-08-12 16:13:48.821', '2024-08-12 16:13:48.821'),
(25, 'Newaz Ben Alam', 'johnsstocks10@gmail.com', '0178689447', 'johnsstocks10@gmail.com', '0178689447', '2024-08-12 16:13:56.331', '2024-08-12 16:13:56.331'),
(26, 'Newaz Ben Alam', 'johnsstocks10@gmail.com', '0178689447', 'johnsstocks10@gmail.com', '0178689447', '2024-08-12 16:13:56.428', '2024-08-12 16:13:56.428'),
(27, 'Newaz Ben Alam', 'johnsstocks10@gmail.com', '0178689447', 'johnsstocks10@gmail.com', '0178689447', '2024-08-17 16:21:37.507', '2024-08-17 16:21:37.507'),
(28, 'Newaz Ben Alam', 'johnsstocks10@gmail.com', '0178689447', 'johnsstocks10@gmail.com', '0178689447', '2024-08-17 16:21:42.307', '2024-08-17 16:21:42.307');
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
