--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.3
-- Dumped by pg_dump version 9.6.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Gabs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "Gabs" (
    id integer NOT NULL,
    likes integer,
    messages text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


--
-- Name: Gabs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "Gabs_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Gabs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "Gabs_id_seq" OWNED BY "Gabs".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "SequelizeMeta" (
    name character varying(255) NOT NULL
);


--
-- Name: Users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "Users" (
    id integer NOT NULL,
    username character varying(255),
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "Users_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "Users_id_seq" OWNED BY "Users".id;


--
-- Name: Gabs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Gabs" ALTER COLUMN id SET DEFAULT nextval('"Gabs_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Users" ALTER COLUMN id SET DEFAULT nextval('"Users_id_seq"'::regclass);


--
-- Data for Name: Gabs; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "Gabs" (id, likes, messages, "createdAt", "updatedAt") FROM stdin;
1	\N	gabadabadoo	2017-07-01 17:33:27.644-05	2017-07-01 17:33:27.644-05
2	\N	yo yo yo	2017-07-01 17:35:56.364-05	2017-07-01 17:35:56.364-05
3	\N	HI meggy	2017-07-01 17:42:50.847-05	2017-07-01 17:42:50.847-05
4	\N	As soon as I hit save, the text is sent to the database, rendered onto the gabble page, and I'm redirected to the gabble page	2017-07-01 17:44:07.552-05	2017-07-01 17:44:07.552-05
\.


--
-- Name: Gabs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"Gabs_id_seq"', 4, true);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "SequelizeMeta" (name) FROM stdin;
20170629200944-create-users.js
20170629234910-create-user.js
20170630033637-create-user.js
20170630181740-removing-name-email-column.js
20170630190116-removing-likes-messages-column.js
20170630191121-create-gab.js
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "Users" (id, username, password, "createdAt", "updatedAt") FROM stdin;
1	Colleen_Bode	#4b1957	2017-06-30 10:48:50.833-05	2017-06-30 10:48:50.833-05
2	Aditya.Hahn96	#5c6730	2017-06-30 10:48:50.836-05	2017-06-30 10:48:50.836-05
3	Jamir_Gaylord10	#060b17	2017-06-30 10:48:50.836-05	2017-06-30 10:48:50.836-05
4	Angelita.Nolan	#165550	2017-06-30 10:48:50.836-05	2017-06-30 10:48:50.836-05
5	Tanner.Durgan84	#705e30	2017-06-30 10:48:50.837-05	2017-06-30 10:48:50.837-05
6	Zena8	#7d6a68	2017-06-30 10:54:14.947-05	2017-06-30 10:54:14.947-05
7	Daniela5	#0f2c48	2017-06-30 10:54:14.951-05	2017-06-30 10:54:14.951-05
8	Nyasia49	#720606	2017-06-30 10:54:14.951-05	2017-06-30 10:54:14.951-05
9	Vicky.Bergnaum	#427266	2017-06-30 10:54:14.951-05	2017-06-30 10:54:14.951-05
10	Ethel37	#1c004d	2017-06-30 10:54:14.951-05	2017-06-30 10:54:14.951-05
11	john	123	2017-06-30 13:06:33.129-05	2017-06-30 13:06:33.129-05
12	tater	123	2017-06-30 15:05:17.281-05	2017-06-30 15:05:17.281-05
13	tater	123	2017-06-30 15:06:14.65-05	2017-06-30 15:06:14.65-05
14	tater	123	2017-06-30 15:07:14.425-05	2017-06-30 15:07:14.425-05
15	megan	123	2017-06-30 15:11:55.17-05	2017-06-30 15:11:55.17-05
\.


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"Users_id_seq"', 15, true);


--
-- Name: Gabs Gabs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Gabs"
    ADD CONSTRAINT "Gabs_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

