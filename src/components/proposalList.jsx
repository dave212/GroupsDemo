import React, { Component } from "react";
import Proposal from "./proposal";

class ProposalList extends Component {
    state = {
        proposals: [
            {
                id: 1,
                imageSource: "nft1.jpeg",
                title: "Astronaut Crystal",
                creator: "Bobby Bob",
                price: 1500,
            },
            {
                id: 2,
                imageSource: "nft2.jpeg",
                title: "Comics - Post-Covid",
                creator: "Nobby Nob",
                price: 200,
            },
            {
                id: 3,
                imageSource: "nft3.jpeg",
                title: "Patience",
                creator: "Robby Rob",
                price: 250,
            },
            {
                id: 4,
                imageSource: "nft4.jpeg",
                title: "Coming Alive",
                creator: "Bob Ross",
                price: 500,
            },
            {
                id: 5,
                imageSource: "nft5.jpeg",
                title: "Meme Army",
                creator: "Kirk Lee",
                price: 150,
            },
        ],
    };

    render() {
        return (
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {this.state.proposals.map((proposal) => (
                    <li key={proposal.id}>
                        <Proposal value={proposal} />
                    </li>
                ))}
            </ul>
        );
    }
}

export default ProposalList;
