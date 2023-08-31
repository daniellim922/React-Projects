import { useState } from "react";

function App() {
    return (
        <div className="app">
            <AllFriends></AllFriends>
            <div>SPLIT BILL</div>
        </div>
    );
}
function AllFriends(params) {
    const [addFriend, setAddFriend] = useState(false);

    return (
        <div className="sidebar">
            <ul>
                <Friend></Friend>
                <Friend></Friend>
            </ul>
            {!addFriend ? (
                <Button>
                    <span onClick={() => setAddFriend(true)}>Add Friend</span>
                </Button>
            ) : (
                <NewFriend></NewFriend>
            )}
        </div>
    );
}

function NewFriend() {
    return (
        <form action="" className="form-add-friend">
            <label htmlFor="" className="">
                x Friend's Name
            </label>
            <input type="text" />
            <label htmlFor="">x Image URL</label>
            <input type="text" />
            <Button>Add</Button>
        </form>
    );
}

function Friend() {
    return (
        <li>
            <Avatar></Avatar>
            <Title></Title>
            <Subtitle></Subtitle>
            <Button>Select</Button>
        </li>
    );
}
function Avatar(params) {
    return (
        <img
            src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
            alt=""
        />
    );
}

function Title() {
    return <h3>Clark</h3>;
}
function Subtitle() {
    return <p>You owe me bij</p>;
}
function Button({ children }) {
    return <button className="button">{children}</button>;
}

export default App;
