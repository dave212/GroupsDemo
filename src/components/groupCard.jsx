import React, { Component } from "react";

class GroupCard extends Component {
    state = {
        circleColor: this.props.value.circleColor,
        circleText: this.props.value.circleText,
        name: this.props.value.name,
        moto: this.props.value.moto,
        memberCount: this.props.value.memberCount,
        profit: this.props.value.profit,
    };

    render() {
        return (
            <div
                className="card"
                style={{
                    fontFamily: "Montserrat",
                    margin: "1% 8% 8% 8%",
                    borderRadius: 15,
                    borderWidth: 0,
                    boxShadow: `0px 0px 6px lightgray`,
                    padding: 10,
                    backgroundColor: "#fafafa",
                }}
            >
                <div
                    className="d-flex align-items-top"
                    style={{ display: "flex", flexDirection: "row" }}
                >
                    <div>
                        <span
                            className="square rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                                backgroundColor: `${this.state.circleColor}`,
                                width: 50,
                                height: 50,
                                margin: 10,
                                verticalAlign: "top",
                            }}
                        >
                            <h4
                                style={{
                                    fontWeight: 800,
                                    marginTop: 8,
                                    color: "white",
                                }}
                            >
                                {this.state.circleText}
                            </h4>
                        </span>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            flexGrow: 1,
                        }}
                    >
                        <h4
                            className="card-title"
                            style={{
                                marginTop: 10,
                                fontWeight: 800,
                                color: "black",
                                marginBottom: 4,
                            }}
                        >
                            {this.state.name}
                        </h4>
                        <h6
                            style={{
                                fontSize: 12,
                                color: "black",
                                marginBottom: 4,
                            }}
                        >
                            {this.state.moto}
                        </h6>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <h6
                                style={{
                                    fontSize: 12,
                                    color: "gray",
                                    flexGrow: 2,
                                    flexBasis: 0,
                                    margin: 0,
                                }}
                            >
                                {this.state.memberCount} Members
                            </h6>
                            <h6
                                style={{
                                    fontSize: 12,
                                    fontWeight: 800,
                                    color:
                                        this.state.profit >= 0
                                            ? "green"
                                            : "red",
                                    flexGrow: 2,
                                    flexBasis: 0,
                                    textAlign: "right",
                                    margin: 0,
                                }}
                            >
                                {this.state.profit + "%"}
                            </h6>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/caret.png`}
                                alt="..."
                                style={{
                                    flexGrow: 1,
                                    flexBasis: 0,
                                    objectFit: "scale-down",
                                    height: 16,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GroupCard;
