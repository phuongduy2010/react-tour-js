import { getImageUrl, getLocalImageUrl } from "../utils/utils";

export default function Avatar({ person, size }) {
    // const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    //  const description = 'Gregorio Y. Zara';
    return (
        <img
            className="avatar"
            width={size}
            height={size}
            src={getLocalImageUrl(person.imageId)}
            alt={person.fullName}
        />
    );
}