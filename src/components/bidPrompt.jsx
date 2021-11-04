import { Prompt, Alert } from "react-st-modal";

function BidPrompt() {
    return (
        <div>
            <button
                className="btn btn-success w-100"
                style={{ borderRadius: 30 }}
                onClick={async () => {
                    const bid = await Prompt("How much do you want to bid?", {
                        isRequired: true,
                        defaultValue: 100,
                    });

                    if (bid) {
                        Alert(
                            `Your bid of $${bid} has been registered`,
                            "Success!"
                        );
                    }
                }}
            >
                <strong>Make a Bid</strong>
            </button>
        </div>
    );
}

export default BidPrompt;
