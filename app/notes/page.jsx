import Link from "next/link";


async function getNotes() {
    const res = await fetch('http://127.0.0.1:8090/api/');
    const { data } = await res.json();
    return data
}

export default async function Notes(){
    const notes = await getNotes();
    return (
        <>
            <h1>Listado de Notas</h1>
            <ul>
                {notes.map(note => (
                    <li key={note.id}>
                        <h2>{note.title}</h2>
                        <p>{note.description}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

function note({note}){
    return (
        <>
            <Link href={`/notes/${id}`}>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            </Link>
        </>
    )
}