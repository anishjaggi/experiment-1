import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <header>
            <nav className="pos-fixed">
                <div className="top-bar">
                   <a href="/"><div className="sub-bar">EDYODA</div></a> 
                   <a href="/"> <p className="stories">Stories</p></a>
                   <a href="/"> <div className="catg">Explore Categories</div></a>
                </div>
            </nav>
        </header>
        <section>
            <div>
                <a href="/"><h2 className="heading">Trending Posts</h2></a> 
                <a href="/"><p className="filter">
                    Filter by Category
                </p></a>
              
                 <button className='allbutton'>All</button>
                                 <button className="buttons">Machine Learning</button>
                <button className="buttons">Lamp stack</button>
                <button className="buttons">Cloud Computing</button>
                <button className="buttons">Web Scrapping</button>
                <button className="buttons">Income Share Aggrement</button><br/>
                <button className="buttons" style={{marginLeft:95}}>Python</button>
            </div>
                
            
        </section>
        <section className="full-body">
        <div className="main-body">
            <div className="img-section">
                <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png" alt=''/>
            </div>
           <a href="/"><h2 className="sub-head">Introduction To A Machine Learning...</h2></a> 
            <div >
                <p>
                    <span className="author">Edyoda</span>
                    <span className="date">
                        | 20-May-2022
                    </span>
                </p>
            </div>
            <div >
                <p className="text">
                    We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course holds..... 
                </p>
            </div>
            
        </div>

        <div className="main-body">
            <div className="img-section">
                <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png" alt=''/>
            </div>
           <a href="/"><h2 className="sub-head">LAMP Stack VS MEAN Stack: Choosing the right platform for your web...</h2></a> 
            <div  >
                <p>
                    <span className="author">Edyoda</span>
                    <span className="date">
                        | 20-May-2022
                    </span>
                </p>
            </div>
            <div >
                <p className="text">
                    We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course holds..... 
                </p>
            </div>
            
        </div>

        <div className="main-body">
            <div className="img-section">
                <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/4.png" alt=''/>
            </div>
          <a href='/'><h2 className="sub-head">Impact of Cloud Computing in various...</h2></a>  
            <div  >
                <p>
                    <span className="author">Edyoda</span>
                    <span className="date">
                        | 20-May-2022
                    </span>
                </p>
            </div>
            <div >
                
                <p className="text">
                    We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course holds..... 
                </p>
            </div>
            
        </div>


        <div className="main-body">
            <div className="img-section">
                <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png" alt=''/>
            </div>
            <a href="/"> <h2 className="sub-head">What is Web Scarping ?</h2></a>
            <div >
                <p>
                    <span className="author">Edyoda</span>
                    <span className="date">
                        | 20-May-2022
                    </span>
                </p>
            </div>
            <div >
                <p className="text">
                    We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course holds..... 
                </p>
            </div>
            
        </div>

        <div className="main-body">
            <div className="img-section">
                <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png" alt=''/>
            </div>
           <a href="/"> <h2  className="sub-head">What is Income Share Aggrement?</h2></a> 
            <div >
                <p>
                    <span className="author">Edyoda</span>
                    <span className="date">
                        | 20-May-2022
                    </span>
                </p>
            </div>
            <div >
            
                <p className="text">
                    We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course holds..... 
                </p>
            </div>
            
        </div>


        <div className="main-body">
            <div className="img-section">
                <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png" alt=''/>
            </div>
           <a href="/"> <h2 className="sub-head">Practical Machine Learning with Python...</h2></a> 
            <div >
                <p >
                    <span className="author">Edyoda</span>
                    <span className="date">
                        | 20-May-2022
                    </span>
                </p>
            </div>
            <div >
                <p className="text">
                    We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course holds..... 
                </p>
            </div>
            
        </div>
        </section>
        <footer >
            <div className="footer">
                <div className="final-body">
                    EDYODA
                </div>
                <div className="final-body">
                   RESOURCES
                </div>
                <div className="final-body">
                   FOR ENTERPRISES
                </div>
                <div className="final-body">
                CONNECT
                </div>
             
            </div>

        </footer>
    </>
  );
}

export default App;
