import styles from "../styles/AlbumForm.module.css"
import { useValue } from "../albumContext";
import { useEffect, useState } from "react";

function AlbumForm() {
    const { toggleAlbumFormView } = useValue();
    const [msg, setMsg] = useState();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handeSubmit = (e) => {
        e.preventDefault();
        setMsg('New Album Added');
        setTitle('');
        setBody('');
        setTimeout(() => {
            toggleAlbumFormView();

        }, 2000)

        // You can handle the form data here
        console.log('Form submitted:', { title, body });
    }

    return (
        <div>
            <div className={styles.closeButton} onClick={toggleAlbumFormView}>
                Close
            </div>
            <h3>{msg}</h3>
            <form onSubmit={handeSubmit} className={styles.formContainer}>
                <label htmlFor="fname">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />


                <label htmlFor="lname">Body:</label>
                <input
                    type="text"
                    id="body"
                    name="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />


                <button className="btn btn-success" type="submit">Add</button>
            </form>
        </div>
    )
}

export default AlbumForm;