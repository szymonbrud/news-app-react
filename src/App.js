import "./styles.css";
import News from './components/News/News';

export default function App(props) {
    return (
        <>
            <h1>header</h1>
            <News title="Amazon is reportedly using Chinese suppliers with ties to forced labor"/>
            <News title="Why These 10 Stocks Are Moving on Monday"/>
            <h1>footer</h1>
        </>
    );
}
