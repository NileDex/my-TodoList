import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    return ( 
        <div className="list">
            <h4>List</h4>
            <form className="search">
                <input type='text' placeholder='Search List'></input>
                <button type="submit" className="search-button">
                <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            <div className="list-item-div">
                <section className="list-item">
                    <p>1. Learn Scrimba</p>
                </section>
                <section className="list-item">
                    <p>2. Learn React</p>
                </section>
                <section className="list-item">
                    <p>3. Learn BackEnd</p>
                </section>
                <h4 className='add-new-todo'>Add New Todo...</h4>
            </div>
            
            <form className='new-list'>
                <input type='text' placeholder='Input New Todo List'></input>
                
            </form>
            <section className='submit-btn-submit'>
                <button className='submit-btn'>Submit</button>
            </section>
            
            
        </div>
     );
}
 
export default Home;