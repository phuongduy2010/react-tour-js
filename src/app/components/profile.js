import Avatar from "./avatar";


export default function Profile({ person, size }) {
    return (
        <section className="profile">
            <h2>
                {person.fullName}
            </h2>
            <Avatar person={person} size={size}></Avatar>
            <ul>
                <li>
                    <b>Position: </b>
                    {person.position}
                </li>
                <li>
                    <b>Year Experience: {person.yearExperience} </b>
                    ({person.experienceDetail})
                </li>
                <li>
                    <b>Date Join: </b>
                    {person.dateJoin}
                </li>
            </ul>
        </section>
    );
}