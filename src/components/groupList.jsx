import React, { Component } from "react";
import GroupCard from "./groupCard";
import { Link } from "react-router-dom";

class GroupList extends Component {
    state = {
        groups: [
            {
                id: 1,
                circleColor: "blue",
                circleText: "AA",
                name: "A-Listers",
                moto: "We Are all about them celebrities & their stuff",
                memberCount: 4,
                profit: 5.9,
            },
            {
                id: 2,
                circleColor: "green",
                circleText: "WS",
                name: "Speculating Apes",
                moto: "Find the right pick and we're off to the moon! 🚀🚀🚀",
                memberCount: 8,
                profit: 27.2,
            },
            {
                id: 3,
                circleColor: "pink",
                circleText: "LP",
                name: "Awesome Audiophiles",
                moto: "We can't wait to hear all of the earliest releases!!",
                memberCount: 25,
                profit: -72.2,
            },
            {
                id: 4,
                circleColor: "black",
                circleText: "NF",
                name: "NFT4Life",
                moto: "We can stand some losses as long as we're on the Crypto bleeding edge",
                memberCount: 2,
                profit: -353.1,
            },
            {
                id: 5,
                circleColor: "red",
                circleText: "ST",
                name: "SuperStarz",
                moto: "We sure do love our sports stuff!!!",
                memberCount: 17,
                profit: 48.9,
            },
            {
                id: 6,
                circleColor: "blue",
                circleText: "GC",
                name: "Garbage Collectors",
                moto: `"One man's trash, that's another man's come up" - Macklemore`,
                memberCount: 5,
                profit: -3.4,
            },
            {
                id: 7,
                circleColor: "purple",
                circleText: "CS",
                name: "Clueless Spenders",
                moto: "We may not know art, but we know what we like!!!",
                memberCount: 327,
                profit: 66.7,
            },
        ],
    };

    render() {
        return (
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {this.state.groups.map((group) => (
                    <li key={group.id}>
                        <Link
                            to={`/groups/${parseInt(group.id) - 1}`}
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            <GroupCard value={group} />
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }
}

export default GroupList;
