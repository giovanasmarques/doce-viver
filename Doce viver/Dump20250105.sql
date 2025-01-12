CREATE DATABASE  IF NOT EXISTS `doceviver` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `doceviver`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: doceviver
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cardapio`
--

DROP TABLE IF EXISTS `cardapio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cardapio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome_item` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `preco` decimal(5,2) NOT NULL,
  `categoria` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `detalhes` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cardapio`
--

LOCK TABLES `cardapio` WRITE;
/*!40000 ALTER TABLE `cardapio` DISABLE KEYS */;
INSERT INTO `cardapio` VALUES (1,'Pão na Chapa',4.00,'Salgados','Pão francês, manteiga'),(2,'Pão de Queijo',5.00,'Salgados','Polvilho, queijo, leite, ovos'),(3,'Coxinha de Frango',5.50,'Salgados','Frango desfiado, catupiry, massa de farinha de trigo'),(4,'Fatia de Torta de Palmito',10.00,'Vegana','Massa de grão-de-bico, palmito, tomate, cebola'),(5,'Lanche Natural',15.00,'Vegana','Pão integral, alface, tomate, cenoura ralada, tofu'),(6,'Brigadeiro',5.00,'Doces','Leite condensado, chocolate em pó, manteiga'),(7,'Cone Recheado',10.00,'Doces','Massa de cone, doce de leite, cobertura de chocolate'),(8,'Água',3.00,'Bebidas','Água mineral'),(9,'Café',5.00,'Bebidas','Café moído na hora'),(10,'Suco',10.00,'Bebidas','Frutas frescas, água, açúcar (opcional)'),(12,'Empada',5.00,'Salgados','farinha, manteiga');
/*!40000 ALTER TABLE `cardapio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `senha` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `data_nascimento` date DEFAULT NULL,
  `data_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Carlos Oliveira','carlos.oliveira@email.com','senha123','1999-07-23','2024-08-26 22:27:13'),(2,'Fernanda Souza','fernanda.souza@email.com','segura456',NULL,'2024-08-26 22:27:13'),(3,'Roberto Lima','roberto.lima@email.com','minhasenha789','1956-06-21','2024-08-26 22:27:13'),(4,'Juliana Costa','juliana.costa@email.com','password321','2001-03-09','2024-08-26 22:27:13'),(5,'Bruno Cardoso','bruno.cardoso@email.com','segura123','2002-05-19','2024-08-26 22:27:13'),(6,'Mariana Duarte','mariana.duarte@email.com','senha456','2006-01-01','2024-08-26 22:27:13'),(7,'gigi linda','gigi@email.com','minhasenha','1999-08-09','2024-08-26 22:27:15'),(8,'ester','ester.cattaneo@gmail.com','8fa0fd78d098e716c7a7eb04cebd9d8e','2004-01-21','2025-01-06 00:50:58'),(9,'ester','ester@gmail.com','8fa0fd78d098e716c7a7eb04cebd9d8e','2004-06-21','2025-01-06 00:51:46'),(10,'teste','teste@gmail.com','09151a42659cfc08aff86820f973f640','2025-01-21','2025-01-06 22:34:01');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curtida`
--

DROP TABLE IF EXISTS `curtida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curtida` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cardapio_id` int NOT NULL,
  `curtidas` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curtida`
--

LOCK TABLES `curtida` WRITE;
/*!40000 ALTER TABLE `curtida` DISABLE KEYS */;
INSERT INTO `curtida` VALUES (1,1,3),(2,2,7),(3,3,4),(4,4,7),(5,5,3),(6,6,1),(7,7,0),(8,8,1);
/*!40000 ALTER TABLE `curtida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fale_conosco`
--

DROP TABLE IF EXISTS `fale_conosco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fale_conosco` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `telefone` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mensagem` text COLLATE utf8mb4_general_ci NOT NULL,
  `data_envio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fale_conosco`
--

LOCK TABLES `fale_conosco` WRITE;
/*!40000 ALTER TABLE `fale_conosco` DISABLE KEYS */;
INSERT INTO `fale_conosco` VALUES (1,'Maria Silva','maria.silva@email.com','(11) 98765-4321','Gostaria de saber mais sobre os bolos disponíveis.','2024-08-26 22:27:13'),(2,'João Pereira','joao.pereira@email.com',NULL,'Quais são as opções de doces sem açúcar?','2024-08-26 22:27:13'),(3,'Ana Costa','ana.costa@email.com','(21) 91234-5678','Vocês fazem entregas aos domingos?','2024-08-26 22:27:13'),(4,'Lucas Almeida','lucas.almeida@email.com','(31) 99887-6543','Quais são os horários de funcionamento?','2024-08-26 22:27:13'),(5,'Beatriz Rocha','beatriz.rocha@email.com','(41) 98765-1234','Há opções sem glúten no cardápio?','2024-08-26 22:27:13'),(6,'Pedro Martins','pedro.martins@email.com','(51) 91234-4321','Aceitam encomendas para festas grandes?','2024-08-26 22:27:13'),(7,'riri','riri@gmail.com','99999999999','wwww','2024-11-14 10:58:21'),(8,'a','a','a','a','2024-11-14 10:58:58'),(9,'Adilson Cattaneo','acbe01@terra.com.br','+5519996140073','papai achou lindo','2024-11-14 16:14:01'),(10,'Adilson Cattaneo','acbe01@terra.com.br','19999999999','teste','2024-11-14 16:23:07'),(11,'f','f','f','f','2024-11-14 16:24:34'),(12,'jose','jose@gmail.com','19998762234','tste','2024-11-14 16:40:16'),(13,'Adilson Cattaneo','acbe01@terra.com.br','+5519996140073','sss','2024-11-14 16:46:41'),(14,'alice','alice@gmail.com','1996140073','aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa','2024-11-14 16:49:03');
/*!40000 ALTER TABLE `fale_conosco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faleconosco`
--

DROP TABLE IF EXISTS `faleconosco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faleconosco` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `mensagem` text NOT NULL,
  `data_envio` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faleconosco`
--

LOCK TABLES `faleconosco` WRITE;
/*!40000 ALTER TABLE `faleconosco` DISABLE KEYS */;
INSERT INTO `faleconosco` VALUES (1,'Ester Cattaneo','ester.cattaneo@aluno.ifsp.edu.br','+5519996140073','Achei o trabalho de vocês muito legal meninas.','2024-11-14 10:32:43'),(2,'teste','teste@gmail.com','19999999999','eeeeeeeeeeeeeeeeeeeeee','2024-11-14 10:34:47');
/*!40000 ALTER TABLE `faleconosco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funcionaria_adm`
--

DROP TABLE IF EXISTS `funcionaria_adm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funcionaria_adm` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `senha` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `data_contratacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcionaria_adm`
--

LOCK TABLES `funcionaria_adm` WRITE;
/*!40000 ALTER TABLE `funcionaria_adm` DISABLE KEYS */;
INSERT INTO `funcionaria_adm` VALUES (1,'Juliana Santos','juliana.santos@email.com','admsecure123','2024-08-26 22:27:14'),(2,'Paula Ferreira','paula.ferreira@email.com','senhaadm456','2024-08-26 22:27:14'),(3,'Ricardo Menezes','ricardo.menezes@email.com','admin789','2024-08-26 22:27:14'),(4,'Daniela Lopes','daniela.lopes@email.com','adminpass123','2024-08-26 22:27:14'),(5,'Eduardo Ribeiro','eduardo.ribeiro@email.com','secureadm456','2024-08-26 22:27:14');
/*!40000 ALTER TABLE `funcionaria_adm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `galeria`
--

DROP TABLE IF EXISTS `galeria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `galeria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int NOT NULL,
  `comentario` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `cardapio_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cliente_id` (`cliente_id`),
  CONSTRAINT `galeria_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `galeria`
--

LOCK TABLES `galeria` WRITE;
/*!40000 ALTER TABLE `galeria` DISABLE KEYS */;
INSERT INTO `galeria` VALUES (1,1,'Ótimo atendimento e produtos de qualidade!',0),(2,2,'Adorei a experiência, voltarei mais vezes.',0),(3,3,'Ambiente agradável e comida deliciosa.',0),(4,4,'Recomendo a todos! Atendimento excelente.',0),(5,5,'O pedido chegou rápido e estava tudo perfeito.',0),(6,7,'Amei, muito gostoso',0),(7,7,'lindo',0),(8,7,'Hmmm, muito gostoso',1),(9,7,'amo muito',8),(10,7,'o melhor que ja tomei!!',7),(11,7,'Gostei do chocolate quente',8),(12,7,'Gostei do chocolate quente',8),(13,7,'pipipopo',1),(14,7,'meu bolo preferido!!!',2),(15,7,'uma delicia',3),(16,7,'Crocanto',6),(17,7,'limdo',2),(18,7,'eee',4),(19,7,'eu amo o recheio dessa torta',5),(20,7,'hmmm que delicia!!!',4);
/*!40000 ALTER TABLE `galeria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itens_pedido`
--

DROP TABLE IF EXISTS `itens_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `itens_pedido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pedido_id` int DEFAULT NULL,
  `cardapio_id` int DEFAULT NULL,
  `quantidade` int DEFAULT NULL,
  `preco_unitario` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pedido_id` (`pedido_id`),
  KEY `cardapio_id` (`cardapio_id`),
  CONSTRAINT `itens_pedido_ibfk_1` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`),
  CONSTRAINT `itens_pedido_ibfk_2` FOREIGN KEY (`cardapio_id`) REFERENCES `cardapio` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itens_pedido`
--

LOCK TABLES `itens_pedido` WRITE;
/*!40000 ALTER TABLE `itens_pedido` DISABLE KEYS */;
INSERT INTO `itens_pedido` VALUES (1,1,2,3,700.00);
/*!40000 ALTER TABLE `itens_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int DEFAULT NULL,
  `data_pedido` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `total` decimal(10,2) NOT NULL,
  `status` varchar(50) COLLATE utf8mb4_general_ci DEFAULT 'Em processamento',
  PRIMARY KEY (`id`),
  KEY `cliente_id` (`cliente_id`),
  CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,1,'2024-08-26 22:27:14',2100.00,'oook'),(2,2,'2024-08-26 22:27:14',30.00,'Em processamento'),(3,3,'2024-08-26 22:27:14',50.00,'Cancelado'),(4,4,'2024-08-26 22:27:14',45.00,'Em processamento'),(5,5,'2024-08-26 22:27:14',20.00,'Concluído'),(6,6,'2024-08-26 22:27:14',80.00,'Concluído'),(7,1,'2024-08-26 22:27:14',500.00,'Em processamento');
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos_cardapio`
--

DROP TABLE IF EXISTS `pedidos_cardapio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos_cardapio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pedido_id` int DEFAULT NULL,
  `cardapio_id` int DEFAULT NULL,
  `quantidade` int NOT NULL,
  `preco_unitario` decimal(5,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pedido_id` (`pedido_id`),
  KEY `cardapio_id` (`cardapio_id`),
  CONSTRAINT `pedidos_cardapio_ibfk_1` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `pedidos_cardapio_ibfk_2` FOREIGN KEY (`cardapio_id`) REFERENCES `cardapio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos_cardapio`
--

LOCK TABLES `pedidos_cardapio` WRITE;
/*!40000 ALTER TABLE `pedidos_cardapio` DISABLE KEYS */;
INSERT INTO `pedidos_cardapio` VALUES (1,1,1,1,4.00),(2,1,2,2,5.00),(3,1,3,3,5.50),(4,2,4,2,10.00),(5,2,5,1,15.00),(6,3,6,5,5.00),(7,4,7,2,10.00),(8,4,9,1,5.00),(9,5,8,2,3.00),(10,5,9,1,5.00),(11,6,10,3,10.00),(12,6,7,4,10.00);
/*!40000 ALTER TABLE `pedidos_cardapio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'doceviver'
--

--
-- Dumping routines for database 'doceviver'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-08 21:25:19
