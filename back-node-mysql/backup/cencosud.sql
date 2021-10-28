-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 27-10-2021 a las 03:08:11
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `cencosud`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `feeds`
--

CREATE TABLE IF NOT EXISTS `feeds` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_owner` int(11) NOT NULL,
  `description` varchar(100) NOT NULL,
  `image` varchar(200) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Volcado de datos para la tabla `feeds`
--

INSERT INTO `feeds` (`id`, `id_owner`, `description`, `image`, `date`) VALUES
(1, 1, 'Metro tren', 'assets/post/1.jpeg', '2021-10-21 00:00:00'),
(2, 2, 'Ramen Miso de verduras', 'assets/post/2.jpeg', '2021-10-24 08:00:00'),
(3, 3, 'Que hermoso Paisaje', 'assets/post/3.jpeg', '2021-10-22 14:11:00'),
(4, 4, 'Naranja o pomelo ?', 'assets/post/4.jpeg', '2021-10-13 08:10:23'),
(6, 5, 'Decoracion Interior', 'assets/post/5.jpeg', '2021-10-21 09:23:23'),
(7, 6, 'El hermoso michi', 'assets/post/6.jpeg', '2021-10-22 09:23:23'),
(8, 7, 'Estudiando para la PTU', 'assets/post/7.jpeg', '2021-10-22 12:17:05'),
(9, 8, 'El hermoso michi', 'assets/post/6.jpeg', '2021-10-23 05:25:12'),
(10, 9, 'Estudiando para la PTU', 'assets/post/7.jpeg', '2021-10-23 06:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `image` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `image`) VALUES
(1, 'Jose Rubilar', 'jose@jose.cl', '123456', 'assets/person/1.jpeg'),
(2, 'Alfredo Aparicio', 'alfredo@alfredo.cl', '654321', 'assets/person/2.jpeg'),
(3, 'Beatriz Contreras', 'beatriz@beatriz.cl', '123456', 'assets/person/3.jpeg'),
(4, 'Flor Marinao', 'flor@flor.cl', '654321', 'assets/person/4.jpeg'),
(6, 'Gonzalo Aguilar', 'gonzalo@gonzalo.cl', '123456', 'assets/person/5.jpeg'),
(7, 'Enzo Yañez', 'enzo@enzo.cl', '123456', 'assets/person/6.jpeg'),
(8, 'Maria Moya', 'maria@maria.cl', '123456', 'assets/person/7.jpeg'),
(9, 'Tamara antiman', 'tamara@tamara.cl', '123456', 'assets/person/8.jpeg'),
(10, 'Juan Carrasco', 'juan@juan.cl', '123456', 'assets/person/9.jpeg'),
(11, 'Andres Guzman', 'andres@andres.cl', '123456', 'assets/person/10.jpeg'),
(12, 'prisilla Rubilar', 'pri@prisilla.cl', '123456', 'assets/person/11.jpeg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
