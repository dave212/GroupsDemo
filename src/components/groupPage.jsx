import React, { Component } from "react"; // imrc

class GroupPage extends Component {
    state = {
        id: this.props.match.params.id,
        groupName: "",
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
        date: new Date(),
    };

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <div>
                <div
                    className="card"
                    style={{
                        fontFamily: "Montserrat",
                        margin: 0,
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        borderWidth: 0,
                        boxShadow: `0px 0px 10px gray`,
                        padding: 10,
                        backgroundColor: "#fafafa",
                    }}
                >
                    <div className="d-flex align-items-center justify-content-center">
                        <span
                            className="square rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                                backgroundColor: `${
                                    this.state.groups[this.state.id].circleColor
                                }`,
                                width: 70,
                                height: 70,
                                margin: 10,
                                verticalAlign: "top",
                            }}
                        >
                            <h4
                                style={{
                                    fontWeight: 800,
                                    marginTop: 8,
                                    color: "white",
                                    fontSize: 30,
                                }}
                            >
                                {this.state.groups[this.state.id].circleText}
                            </h4>
                        </span>
                    </div>

                    <h1
                        style={{
                            marginTop: 10,
                            fontWeight: 800,
                            color: "black",
                            marginBottom: 4,
                            textAlign: "center",
                        }}
                    >
                        {this.state.groups[this.state.id].name}
                    </h1>

                    <div
                        className="d-flex align-items-top"
                        style={{ display: "flex", flexDirection: "row" }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                            }}
                        >
                            <div
                                className="w-75 mx-auto"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    margin: 10,
                                }}
                            >
                                <h5
                                    style={{
                                        flexGrow: 2,
                                        flexBasis: 0,
                                        textAlign: "center",
                                    }}
                                >
                                    $11,572
                                </h5>
                                <h5
                                    style={{
                                        fontWeight: 700,
                                        color:
                                            this.state.groups[this.state.id]
                                                .profit >= 0
                                                ? "green"
                                                : "red",
                                        flexGrow: 2,
                                        flexBasis: 0,
                                        textAlign: "center",
                                    }}
                                >
                                    {this.state.groups[this.state.id].profit +
                                        "%"}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            textAlign: "center",
                            marginRight: "5%",
                            marginLeft: "5%",
                            fontSize: 8,
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                flexBasis: 0,
                            }}
                        >
                            <h6 style={{ fontSize: 12, color: "gray" }}>
                                Owns
                            </h6>
                            <h6 style={{ fontSize: 12, color: "black" }}>
                                34%
                            </h6>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                flexBasis: 0,
                            }}
                        >
                            <h6 style={{ fontSize: 12, color: "gray" }}>
                                Proposals
                            </h6>
                            <h6 style={{ fontSize: 12, color: "black" }}>3</h6>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                flexBasis: 0,
                            }}
                        >
                            <h6 style={{ fontSize: 12, color: "gray" }}>
                                Last Updated
                            </h6>
                            <h6 style={{ fontSize: 12, color: "black" }}>
                                {this.state.date.toLocaleTimeString("he-IL", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                }) +
                                    " " +
                                    this.state.date
                                        .toLocaleDateString
                                        // "he-IL",
                                        // {
                                        //     day: "2-digit",
                                        //     month: "2-digit",
                                        //     year: "numeric",
                                        // }
                                        ()}
                            </h6>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                flexBasis: 0,
                            }}
                        >
                            <h6 style={{ fontSize: 12, color: "gray" }}>
                                Members
                            </h6>
                            <h6 style={{ fontSize: 12, color: "black" }}>
                                {this.state.groups[this.state.id].memberCount}
                            </h6>
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        fontFamily: "Montserrat",
                        margin: 0,
                        padding: 20,
                    }}
                >
                    <button
                        //type="button"
                        className="btn btn-primary w-100"
                        onClick={() => this.nextPath("/proposals")}
                        style={{
                            borderRadius: 20,
                            height: 60,
                            marginTop: 40,
                            fontSize: 22,
                            fontWeight: 800,
                        }}
                    >
                        Submit a new proposal
                    </button>
                    <button
                        //type="button"
                        className="btn btn-secondary w-100"
                        style={{
                            borderRadius: 20,
                            height: 60,
                            marginTop: 20,
                            fontSize: 22,
                            fontWeight: 800,
                        }}
                        disabled
                    >
                        Join an existing proposal
                    </button>
                </div>
            </div>
        );
    }
}

export default GroupPage;
