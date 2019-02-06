import React, {useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTitle from "./components/PageTitle";
import Sidebar from "./components/Sidebar"
import Content from "./components/Content"
import "./_App.scss";

export default function App() {
    const [content, setContent] = useState(0);

    return (
        <div className="App">
            <Header />
            <PageTitle />
            <Content active={content} />
            <Sidebar
                handleClick={(e) => setContent(e) }
                active={content}
            />
            <Footer />
        </div>
    );
};
