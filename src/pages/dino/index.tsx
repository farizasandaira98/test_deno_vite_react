import { useEffect, useMemo, useState } from "react";
import { Dino } from "../../models/dino.ts";

export default function Index() {
    const [dinosaurs, setDinosaurs] = useState<Dino[]>([]);

    useEffect(() => {
        const fetchDinosaurs = async () =>
            (await fetch("http://localhost:8000/api/dinosaurs/")).json() as Promise<Dino[]>;

        fetchDinosaurs().then(setDinosaurs);
    }, []);

    const dinosaurLinks = useMemo(
        () =>
          dinosaurs.map((dino : Dino) => (
            <li key={dino.name} style={{ listStyle: "none", padding: "10px"}}>
              <a
                href={`/${dino.name.toLowerCase()}`}
                className="dinosaurs"
                style={{ textDecoration: "none", color: "white"}}
              >
                {dino.name}
              </a>
            </li>
          )),
        [dinosaurs]
      );

    return (
        <main>
            <h1>Welcome to the dinosaurs App</h1>
            <p>Click on dinosaur below to learn more.</p>
            <ul style={{ listStyle: "none", padding: 0}}>{dinosaurLinks}</ul>
        </main>
    );
}
