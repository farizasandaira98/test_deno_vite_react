import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Dino } from "../../models/dino.ts";


export default function Dinosaur() {
    const { selectedDinosaur } = useParams();

    const [dino, setDino] = useState<Dino>({ name: "", description: "" });

    console.log(selectedDinosaur);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:8000/api/dinosaurs/${selectedDinosaur}`);
            const dino = await res.json() as Dino;
            setDino(dino);
        })();
    }, [selectedDinosaur]);

    return (
        <div>
            <h1>{dino.name}</h1>
            <p>{dino.description}</p>
            <Link to="/">Back to all dinosaurs</Link>
        </div>
    )
}