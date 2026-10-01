-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: lmui-website
-- ------------------------------------------------------
-- Server version	26.7.0

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ 'f8f85f71-ba65-11f1-8c43-ee2e0df6108e:1-45';

--
-- Table structure for table `about_lmui_history`
--

DROP TABLE IF EXISTS `about_lmui_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_lmui_history` (
  `history_year` varchar(5) NOT NULL,
  `history_discription` varchar(800) NOT NULL,
  PRIMARY KEY (`history_year`,`history_discription`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_lmui_history`
--

LOCK TABLES `about_lmui_history` WRITE;
/*!40000 ALTER TABLE `about_lmui_history` DISABLE KEYS */;
INSERT INTO `about_lmui_history` VALUES ('2005','Legacy International College of Arts and Sciences (LICAS) was the foundation of LANDMARK which was established in 2005. LICAS started providing professional educational training after it creation on Association of Chartered Accountants (ACCA, Association of Business Executives (ABE) ABE, Association of Business Managers and Administrators (ABMA, Computerized accounting and practical bookkeeping program in collaboration with the Association of Practical Accounts (APA) UK, CISCO Networking programs in certification exams, International language classes such as GRE, German, Spanish, TOEFL, IELTS English for international opportunities to work easily, The institution also helped find admissions for students to study abroad to successful students.'),('2013','Legacy International College of Arts and Sciences (LICAS) became LANDMARK Higher Institute (LHI) LANDMARK and started running Cameroon national programs such as HND and HPD. We have as Authorization number to create: 13/0413 MINESUP/SG/DDES, and Authorization to open: 14/01320/L/MINESUP/DDES/ESUP/SDA/OAGS and our campuses where Campus A: Molyko Buea Opposite Unics Plc. above UB Junction P.O Box 318, and Campus B: Commercial Avenue Bamenda North West Region of Cameroon. But today, LANDMARK University has campuses not only in Cameroon but in Toronto-Canada and New York USA.\n\nIn 2013 still we produced the Best ABE student in the world and Africa was indeed proud of LANDMARK Buea and so we were honored as “The Pride of Africa”'),('2019','Being a visionary man the President of LANDMARK Metropolitan University Institute created the Canada, Toronto and USA, New York campuses through LANDMARK Technology after a briliant performance of the students at the Cameroon HND session results in 2019. LANDMARK Metropolitan University Institute in 2019 produced the Best student in Engineering and Technology department, in the whole Republic of Cameroon, and First three Best students from South West Region. The Canada and USA campuses have trained over Five thousand (5000) students from over twenty (20) countries including Cameroon, Nigeria, South Africa, Kenya, USA, UK, Canada, India, Germany , Holland, Philippines since their creation and these gradautes are among the highest paid IT Engineers in the world today.'),('2021','In 2021, the President of LANDMARK launched The LANDMARK President’s fully funded Scholarship Scheme. This scholarship is awarded to the best performing GCE Advance Level students and IDPs in Cameroon to study HND, BSC, MSC Degree programs in Computer Engineering, Software Engineering and other related Engineering field of study and 12 beneficiaries were offered the scholarships that worth over twelve million (12000,000FCFA). In 2022 academic year, the scholarship schemes was increased to over fifty million (50,000,000FCFA) to 40 students.'),('2022','In 2022 HND session results, LANDMARK Metropolitan University Institute produced the Best students in Computer Graphics and web designs in the whole Republic of Cameroon, and the President launched LANDMARK Constructions and Logistics Company and also the construction of a second Campus in Buea. The institution started accepting students from other Universities like the University of Buea, CUIB, IUG Douala into LANDMARK Technologies as interns.');
/*!40000 ALTER TABLE `about_lmui_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `about_pillars`
--

DROP TABLE IF EXISTS `about_pillars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_pillars` (
  `title` varchar(20) NOT NULL,
  `description` mediumtext NOT NULL,
  PRIMARY KEY (`title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_pillars`
--

LOCK TABLES `about_pillars` WRITE;
/*!40000 ALTER TABLE `about_pillars` DISABLE KEYS */;
INSERT INTO `about_pillars` 
VALUES ('Mission','Our mission is to make high-quality education affordable and accessible to all, balance theory with meaningful hands-on practice, and prepare every student to graduate with the skills and experience to succeed in the world of work.'),
('Policies','We are committed to widening access through affordable education, maintaining high academic standards, and embedding practical experience throughout our programs. We support students to become work-ready graduates and foster holistic development guided by Christian values.'),
('Vision','Our vision is to create an academic institution that is holistic and reserve to the core values of Christaininty.');
/*!40000 ALTER TABLE `about_pillars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `about_staff`
--

DROP TABLE IF EXISTS `about_staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_staff` (
  `staff_matricule` varchar(20) NOT NULL,
  `staff_name` varchar(45) NOT NULL,
  `staff_title` varchar(255) NOT NULL,
  `staff_bio` mediumtext,
  `staff_image` varchar(200) DEFAULT NULL,
  `staff_grade` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`staff_matricule`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_staff`
--

LOCK TABLES `about_staff` WRITE;
/*!40000 ALTER TABLE `about_staff` DISABLE KEYS */;
INSERT INTO `about_staff` VALUES ('WEB0001','Prof. Simon LEGAH','Founder /President /Chancellor','','https://landmark.cm/static/media/prof-simon-legah-1.7e48a25f.jpg','board management'),('WEB0002','Prof. Vincen P. K. TITANJI','Vice Chancellor /Rector','','https://landmark.cm/static/media/vc3.e9d85f36.jpg','board management'),('WEB0003','Dr. Nde NINGO','DVC','','https://landmark.cm/assets/img/lmu-img/dr-ningo.jpg','board management'),('WEB0004','Dr. Ruth MUGRI','Rigistrar /Director of Human Resource','','https://landmark.cm/assets/img/lmu-img/dr-ruth.jpg','board management'),('WEB0005','Madam. Lekeufack VALERIE FONKEM','Director LSBSS/ Director Post Graduate Programs','','https://landmark.cm/assets/img/lmu-img/madam%20lekufac.jpg','top management'),('WEB0006','Dr. Tameh JUDE','Director of Academics Affairs','',NULL,'top management'),('WEB0007','Mr. Ngwesse KELVIN','Dean of Students Affaires','','https://landmark.cm/assets/img/lmu-img/mrngwesse1.jpg','top management'),('WEB0008','Eng. Kah KISSINGER','Director LSSET','','https://landmark.cm/assets/img/lmu-img/Mr-Kah.png','top management'),('WEB0009','Eng. Kang MODEST','Director of Computer Sciences /HOD Software Engineering','','https://landmark.cm/assets/img/lmu-img/Mr-Modest.png','top management'),('WEB0010','Mr. Emmanuel ACHUA','Director of Marketing','','https://landmark.cm/assets/img/lmu-img/mr-achua.png','top management'),('WEB0011','Madam. Vubo NELLY','Sub Director of Academic Affairs','','https://landmark.cm/assets/img/lmu-img/madamnelly.jpg','top management'),('WEB0012','Mr. Cliff YANDE','Sub Director of Admissions /Store Accountant','',NULL,'top management'),('WEB0013','Madam. Vanessa FIEMNA','Sub Director of Landmark Strategic Businesses','','https://landmark.cm/assets/img/lmu-img/madamvanessa1.jpg','top management'),('WEB0014','Mr. Samjella BLAISE','Sub Director of Exams /PA to the Vice Chancellor','',NULL,'top management'),('WEB0015','Madam. Grace EBONGUE','Sub Director of Marketing','','https://landmark.cm/assets/img/lmu-img/madamgrace1.jpg','top management'),('WEB0016','Madam. Atemkeng ETIENDEM WILMAR','Finance Manager','',NULL,'top management'),('WEB0017','Mr. Lai EMMANUEL','FO LSBMS /HOD Accounting /Banking & Finance','','https://landmark.cm/assets/img/lmu-img/mrlia1.jpg','top management'),('WEB0018','Eng. Ayuk VALERY TAKANG','FO LSSET /HOD Civil & Mechanical Engineering','',NULL,'top management'),('WEB0019','Madam. Dinayen CYNTHIA','FO LSMBS','','https://landmark.cm/assets/img/lmu-img/madam-cynthia.jpg','top management'),('WEB0020','Mr. Sunday BURNYUY','HOD Transport & Logistics /Port & Shipping','','https://landmark.cm/assets/img/lmu-img/pa%20sunday.jpg','management'),('WEB0021','Mr. Ernest NGULEFACK FORGHAB','HOD Agriculture and Food Technology','',NULL,'management'),('WEB0022','Eng. Ndonwi DERICK','HOD Computer Graphics & Web Design','',NULL,'management'),('WEB0023','Eng. Bisong MERREYLYNE','HOD Networks & Telecom','','https://landmark.cm/assets/img/lmu-img/madam-bisong.jpg','management'),('WEB0024','Eng. Tamoh VITALIS','HOD E-commerce and Digital Marketing /Database Management','','https://landmark.cm/assets/img/lmu-img/mr-vitalis.jpg','management'),('WEB0025','Mr. Mbachig DENZEL','Cordinator Medical Laboratory Sciences','','https://landmark.cm/assets/img/lmu-img/mr-denzel.jpg','management'),('WEB0026','Eng. Carlrich SAMA','Technology Officer','','https://landmark.cm/assets/img/lmu-img/mr-sama.jpg','management'),('WEB0027','Eng. Meh AMSTRON','Lecturer','','https://landmark.cm/assets/img/lmu-img/eng-amstrong.jpg','management'),('WEB0028','Mr. Nzo DESMOND','Lecturer /Graphic Designer','',NULL,'management'),('WEB0029','Mr. Acha JEREMIAH','Cordinator of Landmark Driving School','',NULL,'management'),('WEB0030','Madam. Dioni CHRISTABEL','LSMBMS Lecturer','','https://landmark.cm/assets/img/lmu-img/madam-dioni.jpg','management'),('WEB0031','Madam. Donfack KAZE ARIANE','Academic Affairs Officer','',NULL,'management'),('WEB0032','Mr. Tambe THOMAS BAYE','Driver','',NULL,'management'),('WEB0033','Madam. Nchang BERYL','AA LSBSS','','https://landmark.cm/assets/img/lmu-img/madam-nchang.jpg','management'),('WEB0034','Madam. Bridget FONCHAM','Chief Genitor','',NULL,'management'),('WEB0035','Madam. Njiforti EVELYN','Genitor','',NULL,'management'),('WEB0036','Mr. Ehabe DANIEL','Security Guard','',NULL,'management');
/*!40000 ALTER TABLE `about_staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admission_deadline`
--

DROP TABLE IF EXISTS `admission_deadline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admission_deadline` (
  `round` varchar(60) NOT NULL,
  `date` date NOT NULL,
  `note` varchar(100) NOT NULL,
  PRIMARY KEY (`round`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admission_deadline`
--

LOCK TABLES `admission_deadline` WRITE;
/*!40000 ALTER TABLE `admission_deadline` DISABLE KEYS */;
INSERT INTO `admission_deadline` VALUES ('Early Action','2026-11-15','Non-binding — decisions released mid-January'),('Early Decision','2026-11-01','Binding — decisions released mid-December'),('Regular Decision','2027-01-15','Decisions released by March 31'),('Transfer Applicants','2027-03-01','For fall admission');
/*!40000 ALTER TABLE `admission_deadline` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admission_steps`
--

DROP TABLE IF EXISTS `admission_steps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admission_steps` (
  `number` int NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(200) NOT NULL,
  PRIMARY KEY (`number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admission_steps`
--

LOCK TABLES `admission_steps` WRITE;
/*!40000 ALTER TABLE `admission_steps` DISABLE KEYS */;
INSERT INTO `admission_steps` VALUES (1,'Explore your program','Browse all 150+ programs across four schools. Most applicants shortlist two or three before starting an application.'),(2,'Submit your application','One application covers every undergraduate program. Graduate and professional programs each have a dedicated supplement.'),(3,'Financial aid & scholarships','92% of first-year students receive some form of aid. The Bridge Scholars program covers full tuition for qualifying students.'),(4,'Admission decision','Early Decision applicants hear back by mid-December. Regular Decision applicants receive a decision by the end of March.');
/*!40000 ALTER TABLE `admission_steps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `campus_gallery`
--

DROP TABLE IF EXISTS `campus_gallery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `campus_gallery` (
  `gallery_label` varchar(50) NOT NULL,
  `gallery_size` char(2) NOT NULL,
  `gallery_pattern` varchar(45) NOT NULL,
  `gallery_image` varchar(200) NOT NULL,
  `campus` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`gallery_label`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campus_gallery`
--

LOCK TABLES `campus_gallery` WRITE;
/*!40000 ALTER TABLE `campus_gallery` DISABLE KEYS */;
/*!40000 ALTER TABLE `campus_gallery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations`
--

DROP TABLE IF EXISTS `knex_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knex_migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int DEFAULT NULL,
  `migration_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations`
--

LOCK TABLES `knex_migrations` WRITE;
/*!40000 ALTER TABLE `knex_migrations` DISABLE KEYS */;
INSERT INTO `knex_migrations` VALUES (1,'013_add_staff_grade_to_about_staff.js',1,'2026-09-27 14:06:37'),(2,'014_widen_about_staff_title.js',2,'2026-09-27 15:50:28'),(3,'015_widen_about_history_description.js',3,'2026-09-27 16:57:46'),(4,'016_add_campus_to_campus_gallery.js',4,'2026-09-27 18:11:58');
/*!40000 ALTER TABLE `knex_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations_lock`
--

DROP TABLE IF EXISTS `knex_migrations_lock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knex_migrations_lock` (
  `index` int unsigned NOT NULL AUTO_INCREMENT,
  `is_locked` int DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations_lock`
--

LOCK TABLES `knex_migrations_lock` WRITE;
/*!40000 ALTER TABLE `knex_migrations_lock` DISABLE KEYS */;
INSERT INTO `knex_migrations_lock` VALUES (1,0);
/*!40000 ALTER TABLE `knex_migrations_lock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `landmark_schools`
--

DROP TABLE IF EXISTS `landmark_schools`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `landmark_schools` (
  `school_name` varchar(200) NOT NULL,
  `school_short_name` varchar(45) NOT NULL,
  `school_slug` varchar(255) NOT NULL,
  `school_route` varchar(100) NOT NULL,
  `school_tag_line` varchar(45) NOT NULL,
  `school_description` json NOT NULL COMMENT 'description is a json object with schema as follows {description: []}\nthe discription list or array is a list of the description paragraphs in string',
  `school_stat` json NOT NULL COMMENT 'school_stat is a json object with the following schema {value: "int value'', label: ''string for it label''}',
  `school_pattern` varchar(10) NOT NULL,
  `school_logo` varchar(255),
  PRIMARY KEY (`school_slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `landmark_schools`
--

LOCK TABLES `landmark_schools` WRITE;
/*!40000 ALTER TABLE `landmark_schools` DISABLE KEYS */;
INSERT INTO `landmark_schools` VALUES ('School of Agriculture and Food Sciences','School of Agriculture and Food Sciences','agriculture','/academics/lsafs','LSAFS','{\"description\": [\"The School of Agriculture is an academic institution that focuses on providing education and training in the field of agriculture. Its primary goal is to equip students with the knowledge and skills necessary for a successful career in various aspects of agriculture, including crop production, animal husbandry, agricultural management, agribusiness, and sustainable farming practices.\", \"The school offers a diverse range of programs and courses, catering to both undergraduate and postgraduate students. These programs cover disciplines such as agronomy, animal science, agricultural economics, horticulture, soil science, agricultural engineering, and agricultural extension.\", \"The curriculum of the School of Agriculture combines theoretical knowledge with practical hands-on experiences. Students have the opportunity to engage in fieldwork, laboratory work, farm management, and internships, giving them exposure to real-world agricultural practices. The faculty comprises experienced professionals and experts in the agricultural field, who bring their wisdom and industry connections to the classroom, ensuring a well-rounded education.\", \"In addition to academic pursuits, the school places emphasis on research and innovation in agriculture. It encourages students to undertake research projects that address key challenges and explore emerging trends in the agricultural sector. The school also collaborates with agricultural organizations, farming communities, and government agencies to facilitate practical research and contribute to the development of the agricultural industry.\", \"The School of Agriculture is dedicated to promoting sustainable and environmentally friendly practices within the agricultural sector. It emphasizes the importance of resource management, conservation, and the adoption of climate-smart techniques. Students are encouraged to develop a holistic understanding of agriculture, considering economic, social, and environmental aspects to ensure a balanced and sustainable approach.\", \"Overall, the School of Agriculture prepares students for diverse careers in the agricultural industry, be it as farmers, researchers, extension workers, or agribusiness professionals. It equips them with the knowledge, practical skills, and problem-solving abilities required to contribute to the global food security and sustainable agriculture goals.\"]}','{\"label\": \"Rooted in Science. Growing the Future\", \"value\": \"\"}','wave'),
('School of Business & Social Sciences','School of Business & Social Sciences','business','/academics/lsbss','LSBSS','{\"description\": [\"At Landmark Metropolitan University, our School of Business is more than just an institution – it\'s a vibrant community of innovative minds, passionate learners, and future leaders. With a dynamic learning environment and unparalleled opportunities for growth, we\'re proud to offer a one-of-a-kind experience for our students. Innovative Curriculum: Our cutting-edge curriculum is designed to provide students with a strong foundation in business fundamentals while encouraging critical thinking and creativity. We offer a variety of specializations tailored to meet the demands of the ever-evolving business world, ensuring our graduates are well-prepared for the challenges of tomorrow.\", \"Expert Faculty: Our faculty comprises seasoned professionals and industry experts who bring their real-world experiences into the classroom. Through their guidance and mentorship, students gain invaluable insights into the intricacies of the business landscape and learn from the best in their respective fields.\", \"Vibrant Student Life: At the heart of our School of Business lies an energetic student community that fosters personal and professional growth. With numerous clubs, organizations, and networking events, students have ample opportunities to connect with like-minded peers, collaborate on projects, and create lasting relationships. This vibrant atmosphere not only enriches the overall educational experience but also equips students with essential skills for success in their careers.\", \"Experience the unique blend of academic excellence, experiential learning, and a dynamic student community at Landmark Metropolitan University\'s School of Business.\"]}','{\"label\": \"Data-Driven. Human-Centered. Future-Focused.\", \"value\": \"\"}','diagonal'),
('School of Medical and Biomedical Sciences','School of Medical and Biomedical Sciences','biomedical','/academics/lsmbs','LSMBS','{\"description\": [\"The School of Medical and Biomedical Sciences is an esteemed school that offers a range of academic programs and courses focused on Medical and Biomedical Sciences. It aims to provide students with a solid foundation in the medical field, equipping them with the necessary knowledge and skills to pursue careers in healthcare and scientific research.\", \"The school offers a diverse range of programs, including undergraduate and postgraduate degrees, diplomas, and certificate courses. These programs cover various disciplines such as nursing, medical laboratory sciences, pharmacy technology, midwifery. The curriculum is designed to blend theoretical knowledge with practical applications, incorporating laboratory work, clinical rotations, and research projects.\", \"The faculty members of the School of Medical and Biomedical Sciences are accomplished professionals with expertise in their respective fields. They bring a wealth of experience and knowledge to the classroom, ensuring that students receive a comprehensive education. The school also collaborates with healthcare institutions and research centers to provide students with opportunities for hands-on learning experiences and exposure to real-world medical practices.\", \"Beyond academics, the school emphasizes the importance of ethical practice, patient care, and interprofessional collaboration. It strives to instill in students a sense of compassion, professionalism, and the ability to work effectively in interdisciplinary healthcare teams.\", \"The School of Medical and Biomedical Sciences is committed to producing highly skilled and knowledgeable healthcare professionals who can address the evolving challenges of the medical field. It aims to promote innovation, research, and critical thinking among its students to contribute to advancements in healthcare and medical science.\"]}','{\"label\": \"Innovating Bio-Medicine. Transforming Human Lives.\", \"value\": \"\"}','radial'),
('School of Science, Engineering & Technology','School of Science, Engineering & Technology','engineering','/academics/lsset','LSSET','{\"description\": [\"The school of engineering is an academic division within the university that focuses on providing education and conducting research in various fields of engineering. It offers undergraduate and graduate programs in disciplines such as civil engineering, mechanical engineering, electrical engineering, chemical engineering, and computer engineering, among others.\", \"The school of engineering typically emphasizes a hands-on and practical approach to learning, combining theoretical knowledge with real-world applications. Students are exposed to a wide range of technical subjects that help them understand the fundamental principles and concepts of engineering.\", \"In addition to classroom instruction, the school of engineering often provides students with opportunities for experiential learning through labs, research projects, internships, and co-op programs. These practical experiences help students develop problem-solving skills and gain valuable industry experience.\", \"Beyond academics, the school of engineering often fosters a collaborative and supportive community. It offers various student organizations, clubs, and societies that allow students to network, engage in extracurricular activities, and explore their interests.\", \"Overall, the school of engineering provides a comprehensive educational experience that equips students with the skills, knowledge, and practical experiences necessary to pursue successful careers in the field of engineering.\"]}','{\"label\": \"Highlights forward-thinking creation and problem-solving.\", \"value\": \"\"}','grid');
/*!40000 ALTER TABLE `landmark_schools` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-09-30  6:55:57
