export default function Admin(){
    return(
    <>
    <div className="heading-2">
        <h1>Admin Panel</h1>
    </div>
    <div className="admin-panel">
            <form action="">
                <h2>Add Title</h2>
                <div className="title-input">
                    <input type="text" required/>
                </div>
                <h2>Add Paragraphs</h2>
                <div className="para-input">
                    <input type="text" required/>
                </div>
                <div className="submit-button">
                    <button className="new-article-button">Add article</button>
                </div>
            </form>
    </div>
    </>
    )
}