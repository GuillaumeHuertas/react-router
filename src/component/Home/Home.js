import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Bienvenue sur l'USM plongée</h1>
            <Link
            to="/contact"
            state ={{fromHome: "Coucou c'est moi"}}
            >Contact</Link>
        </div>
    )
}
