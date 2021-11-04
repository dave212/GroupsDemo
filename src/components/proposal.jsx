import React, { Component } from "react";
import BidPrompt from "./bidPrompt";

class Proposal extends Component {
    state = {
        nft: this.props.value,
    };

    render() {
        return (
            <div>
                <div
                    className="card w-75 mx-auto"
                    style={{
                        borderRadius: 30,
                        margin: 24,
                        boxShadow: `3px 3px 3px gray`,
                    }}
                >
                    <img
                        className="card-img-top"
                        src={`${process.env.PUBLIC_URL}/assets/images/${this.state.nft.imageSource}`}
                        alt="..."
                        style={{
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                        }}
                    />
                    <div
                        className="card-body"
                        style={{
                            fontFamily: "Montserrat",
                            padding: 8,
                            paddingLeft: 16,
                            paddingRight: 16,
                        }}
                    >
                        <h3 className="card-title" style={{ marginBottom: 0 }}>
                            <strong>{this.state.nft.title}</strong>
                        </h3>
                        <h6
                            className="card-text"
                            style={{ color: "gray", paddingTop: 0 }}
                        >
                            {"by " + this.state.nft.creator}
                        </h6>
                        <h4 className="card-title">
                            {"Current bid $" + this.state.nft.price}
                        </h4>

                        <BidPrompt />
                    </div>
                </div>
            </div>
        );
    }
}

export default Proposal;
