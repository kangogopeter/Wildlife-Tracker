--
-- PostgreSQL database dump
--

-- Dumped from database version 10.8 (Ubuntu 10.8-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.8 (Ubuntu 10.8-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: animals; Type: TABLE; Schema: public; Owner: peter
--

CREATE TABLE public.animals (
    id integer NOT NULL,
    name character varying
);


ALTER TABLE public.animals OWNER TO peter;

--
-- Name: animals_id_seq; Type: SEQUENCE; Schema: public; Owner: peter
--

CREATE SEQUENCE public.animals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.animals_id_seq OWNER TO peter;

--
-- Name: animals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: peter
--

ALTER SEQUENCE public.animals_id_seq OWNED BY public.animals.id;


--
-- Name: endagered_animals; Type: TABLE; Schema: public; Owner: peter
--

CREATE TABLE public.endagered_animals (
    id integer NOT NULL,
    name character varying,
    personid integer,
    health character varying,
    age character varying
);


ALTER TABLE public.endagered_animals OWNER TO peter;

--
-- Name: endagered_animals_id_seq; Type: SEQUENCE; Schema: public; Owner: peter
--

CREATE SEQUENCE public.endagered_animals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.endagered_animals_id_seq OWNER TO peter;

--
-- Name: endagered_animals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: peter
--

ALTER SEQUENCE public.endagered_animals_id_seq OWNED BY public.endagered_animals.id;


--
-- Name: sightings; Type: TABLE; Schema: public; Owner: peter
--

CREATE TABLE public.sightings (
    id integer NOT NULL,
    animal_id integer,
    location character varying,
    ranger_name character varying
);


ALTER TABLE public.sightings OWNER TO peter;

--
-- Name: sightings_id_seq; Type: SEQUENCE; Schema: public; Owner: peter
--

CREATE SEQUENCE public.sightings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sightings_id_seq OWNER TO peter;

--
-- Name: sightings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: peter
--

ALTER SEQUENCE public.sightings_id_seq OWNED BY public.sightings.id;


--
-- Name: animals id; Type: DEFAULT; Schema: public; Owner: peter
--

ALTER TABLE ONLY public.animals ALTER COLUMN id SET DEFAULT nextval('public.animals_id_seq'::regclass);


--
-- Name: endagered_animals id; Type: DEFAULT; Schema: public; Owner: peter
--

ALTER TABLE ONLY public.endagered_animals ALTER COLUMN id SET DEFAULT nextval('public.endagered_animals_id_seq'::regclass);


--
-- Name: sightings id; Type: DEFAULT; Schema: public; Owner: peter
--

ALTER TABLE ONLY public.sightings ALTER COLUMN id SET DEFAULT nextval('public.sightings_id_seq'::regclass);


--
-- Data for Name: animals; Type: TABLE DATA; Schema: public; Owner: peter
--

COPY public.animals (id, name) FROM stdin;
\.


--
-- Data for Name: endagered_animals; Type: TABLE DATA; Schema: public; Owner: peter
--

COPY public.endagered_animals (id, name, personid, health, age) FROM stdin;
\.


--
-- Data for Name: sightings; Type: TABLE DATA; Schema: public; Owner: peter
--

COPY public.sightings (id, animal_id, location, ranger_name) FROM stdin;
\.


--
-- Name: animals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: peter
--

SELECT pg_catalog.setval('public.animals_id_seq', 1, false);


--
-- Name: endagered_animals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: peter
--

SELECT pg_catalog.setval('public.endagered_animals_id_seq', 1, false);


--
-- Name: sightings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: peter
--

SELECT pg_catalog.setval('public.sightings_id_seq', 1, false);


--
-- Name: animals animals_pkey; Type: CONSTRAINT; Schema: public; Owner: peter
--

ALTER TABLE ONLY public.animals
    ADD CONSTRAINT animals_pkey PRIMARY KEY (id);


--
-- Name: endagered_animals endagered_animals_pkey; Type: CONSTRAINT; Schema: public; Owner: peter
--

ALTER TABLE ONLY public.endagered_animals
    ADD CONSTRAINT endagered_animals_pkey PRIMARY KEY (id);


--
-- Name: sightings sightings_pkey; Type: CONSTRAINT; Schema: public; Owner: peter
--

ALTER TABLE ONLY public.sightings
    ADD CONSTRAINT sightings_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

