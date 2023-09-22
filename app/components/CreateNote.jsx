export default function CreateNote() {

    const handleSubmit = async (event) => {
       
        event.preventDefault()
    }

    return (
        <>
        <h1>Crear Nota</h1>
        <form /* onClick={handleSubmit} */ >
            <label>
                Titulo:
                <input type="text" name="name" />
            </label>
            <label>
                Contenido:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        </>
    )
    }