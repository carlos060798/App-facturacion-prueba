-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-08-2024 a las 06:27:30
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `facturacion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `nombreCliente` varchar(191) NOT NULL,
  `tipoIdentificacion` varchar(191) NOT NULL,
  `numeroIdentificacion` varchar(191) NOT NULL,
  `observaciones` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id`, `nombreCliente`, `tipoIdentificacion`, `numeroIdentificacion`, `observaciones`) VALUES
(1, 'sdsd', 'CC', '1004997117', 'ninguna'),
(2, 'dssdsdtdfergesg', 'NIT', '997895789', 'cdmdc'),
(3, 'pablo apez', 'CC', '884785231', '555dnindsi');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `id` int(11) NOT NULL,
  `fecha` datetime(3) NOT NULL,
  `nombreProducto` varchar(191) NOT NULL,
  `precio` double NOT NULL,
  `idCliente` int(11) NOT NULL,
  `total` double NOT NULL,
  `valorDescuento` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`id`, `fecha`, `nombreProducto`, `precio`, `idCliente`, `total`, `valorDescuento`) VALUES
(1, '2024-08-19 00:00:00.000', 'papa', 15000, 1, 17850, 48),
(2, '2024-08-20 00:00:00.000', 'papa', 6500, 2, 4615, 45),
(3, '2024-08-19 00:00:00.000', 'lapiz', 15633, 1, 18603.27, 23),
(4, '2024-08-12 00:00:00.000', 'papa', 15256, 3, 18154.64, 15),
(5, '2024-08-12 00:00:00.000', 'papa 23', 23000, 3, 27370, 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('07aa5a5f-5557-4197-a88f-ca288e8b63b1', 'b2aa4f5df8395907fb3cd02d9faa39e7eb1bdceaf89616827a963ffc199766cc', '2024-08-12 00:53:29.221', '20240812005329_add_valor_descuento_field', NULL, NULL, '2024-08-12 00:53:29.199', 1),
('b169c1f3-8296-48e4-94c5-8bcd233e4e7f', '6893879b73b2193824d8692044489c79bfae2b47c411f9b1f0e3fcca4c3d4b61', '2024-08-11 23:39:07.489', '20240811233907_init', NULL, NULL, '2024-08-11 23:39:07.281', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Cliente_nombreCliente_key` (`nombreCliente`),
  ADD UNIQUE KEY `Cliente_numeroIdentificacion_key` (`numeroIdentificacion`);

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Factura_idCliente_fkey` (`idCliente`);

--
-- Indices de la tabla `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `factura`
--
ALTER TABLE `factura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `Factura_idCliente_fkey` FOREIGN KEY (`idCliente`) REFERENCES `cliente` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
