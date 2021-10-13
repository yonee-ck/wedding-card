// import logo from './logo.svg';
import React, {Component} from "react";
import './App.css';
import Todo from './components/Todo';
import Main from './components/Main';
import FilterButton from "./components/FilterButton";
import Gallery from "./components/Gallery";
import Connect from "./components/Connect";
import Location from "./components/Location";
import Intro from "./components/Intro";
import KaKaoShareButton from "./components/KakaoShareButton";
import CopyUrl from "./components/CopyUrl";
import Account from "./components/Account";
import ProfileImg from "./assets/images/profile.png";
import GalleryImg from "./assets/images/gallery.png";
import LocationImg from "./assets/images/location.png";
import HeartImg from "./assets/images/heart.png";
import ContactImg from "./assets/images/contact.png";

class App extends Component {
    state = {
        copyComplete: false,
    }
    // console.log('pp ', props);
    // const subject = props.subject;
    // const taskList = props.tasks.map(task => task.name);
    // const taskList = props.tasks.map(task => <Todo />);
    // const taskList = props.tasks.map(task => (
    //         <Todo
    //             id={task.id}
    //             name={task.name}
    //             completed={task.completed}
    //             key={task.id}
    //         />
    //     )
    // );
    handleCopyCompleteClick = (data) => {
        this.state.copyComplete = data;
        setTimeout(() => { this.state.copyComplete = false}, 1000);
    }

    render() {
        return (
            <div className='container'>
                {/*<h1>TodoMatic</h1>*/}
                <div className='btnGroup'>
                    <KaKaoShareButton />
                    <CopyUrl onCreate={this.handleCopyCompleteClick} />
                </div>
                <Main/>
                {/*<div className="filters btn-group stack-exception">*/}
                {/*<FilterButton />*/}
                {/*<FilterButton />*/}
                {/*<FilterButton />*/}
                {/*</div>*/}
                {/*<h2 id="list-heading">*/}
                {/*    3 tasks remaining*/}
                {/*</h2>*/}
                {/*<ul*/}
                {/*    role="list"*/}
                {/*    className="todo-list stack-large stack-exception"*/}
                {/*    aria-labelledby="list-heading"*/}
                {/*>*/}
                {/*{taskList}*/}
                {/*</ul>*/}
                <img className='section__banner' src={ProfileImg} alt='프로필' />
                <Intro />
                <img className='section__banner' src={GalleryImg} alt='갤러리' />
                <Gallery />
                <img className='section__banner' src={ContactImg} alt='연락하기' />
                <Connect />
                <img className='section__banner' src={LocationImg} alt='길찾기' />
                <Location />
                <img className='section__banner' src={HeartImg} alt='마음전하기' />
                <Account />
            </div>
        );
    }
}

export default App;
