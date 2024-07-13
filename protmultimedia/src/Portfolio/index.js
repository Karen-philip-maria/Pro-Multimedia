import './index.css'
const Portfolio = () =>{
    const pdf1 = 'https://drive.google.com/file/d/1BLS8MThp1I80CUetz-eSzzBGWB8gKg_0/view?usp=sharing'
    const pdf2 = 'https://drive.google.com/file/d/1wUzX2-_DLKDwZf_k_HgSoKnuGA5BNyf3/view?usp=sharing'
    const pdf3 = 'https://drive.google.com/file/d/1OIBqvozK9L17d_4MbRbdP6ddvUo1kBhU/view?usp=sharing'
    const pdf4 = 'https://drive.google.com/file/d/1jIaFT3tZOH81sWhAfktsSsoVOCqS4_Os/view?usp=sharing'
    const pdf5 = 'https://drive.google.com/file/d/1YpjwTn7adg2-Spc9z33A5KhCvL7D5MPB/view?usp=sharing'
    return(
        <div id='profiles'>
            <h1>About Us</h1>
            <div id='Images'>
                <div>
                <img src= "./Images/Wangesga.png" alt='fridah' className='fridah'/>
                <p>Agnes Wangesha</p>
                <button><a href ={pdf1} target='"_blank' rel='noopener nonreferrer' className='profile' >View</a></button>
                </div>
                <div>
                <img src= "./Images/Karen.png" alt='fridah' className='fridah'/>
                <p>KarenMaria Philip</p>
                <button><a href ={pdf2} target='"_blank' rel='noopener nonreferrer' className='profile' >View</a></button>
                </div>
                <div>
                <img src= "./Images/Kibaara.png" alt='fridah' className='fridah'/>
                <p>Jane Kibaara</p>
                <button><a href ={pdf3} target='"_blank' rel='noopener nonreferrer' className='profile' >View</a></button>
                </div>
                </div>
                <div id='Imagesset'>
                <div>
                <img src= "./Images/Gladwel.png" alt='fridah' className='fridah'/>
                <p>Gladwell Wanjiku</p>
                <button><a href ={pdf4} target='"_blank' rel='noopener nonreferrer' className='profile' >View</a></button>
                </div>
                <div>
                <img src= "./Images/Fridah.png" alt='fridah' className='fridah'/>
                <p>Fridah Wothaya</p>
                <button><a href ={pdf5} target='"_blank' rel='noopener nonreferrer' className='profile' >View</a></button>
                </div>
                </div>
        </div>
    )
}
export default Portfolio;