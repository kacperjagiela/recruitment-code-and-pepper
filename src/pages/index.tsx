import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';

import { fetchPeople, fetchStarShips } from '~/services/starWarsAPI';
import Person from '~/types/Person';
import StarShip from '~/types/StarShip';

const Home: NextPage = ({ people, starShips }: InferGetStaticPropsType<typeof getStaticProps>) => (
    <>
        <Head>
            <title>StarWars Battle It Out</title>
            <meta name="description" content="Developed by Kacper Jagieła" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
    </>
);

export const getStaticProps: GetStaticProps = async () => {
    const people: Person[] = await fetchPeople();
    const starShips: StarShip[] = await fetchStarShips();

    return {
        props: {
            people,
            starShips,
        },
    };
};

export default Home;
