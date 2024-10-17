import Avatar from "./avatar";
import Profile from "./profile";

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

export default function TodoList() {
    return (
        // <div style={person.theme}>
        <div>
            <h1>{person.name}'s Todos</h1>
            <Profile></Profile>
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}
