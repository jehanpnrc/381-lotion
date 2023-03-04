function Preview() {
    return (
        <div className='main_container'>
            <div className='title_area'>
                <p className="title_pp">Title</p>
                <button className ='note_button'>Edit</button>
                <button className='note_button'>Delete</button>
            </div>
                <small>Date</small>
            <div className='text_area'>
              text
            </div>
        
        </div>
    );
}

export default Preview;