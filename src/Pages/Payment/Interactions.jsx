import { React, useState } from "react";
import { ethers } from "ethers";

const Interactions = (props) => {
  const [transferHash, setTransferHash] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    sendAmount: "",
    receiverAddress: "",
  });

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const transferHandler = async (e) => {
    e.preventDefault();
    setTransferHash(null);
    setIsLoading(true);

    try {
      if (!props.contract) {
        setTransferHash("❌ Smart contract not connected.");
        setIsLoading(false);
        return;
      }

      const { sendAmount, receiverAddress } = formValues;

      if (!ethers.isAddress(receiverAddress)) {
        setTransferHash("❌ Invalid Ethereum address.");
        setIsLoading(false);
        return;
      }

      const decimals = await props.contract.decimals();
      const amountInWei = ethers.parseUnits(sendAmount.toString(), decimals);
      const tx = await props.contract.transfer(receiverAddress, amountInWei);

      setTransferHash(`✅ Transaction sent! Hash: ${tx.hash}`);
      setFormValues({ sendAmount: "", receiverAddress: "" });
    } catch (err) {
      setTransferHash(`❌ Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        backgroundColor: "#2c2c2c",
        borderRadius: "12px",
        color: "white",
        width: "100%",
        maxWidth: "450px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
        textAlign: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: "scale(1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.4)";
      }}
    >
      <form onSubmit={transferHandler}>
        <h3 style={{ fontSize: "24px", marginBottom: "20px" }}>Transfer Coins</h3>

        <p style={{ fontSize: "16px", marginBottom: "10px" }}>Receiver Address</p>
        <input
          type="text"
          id="receiverAddress"
          value={formValues.receiverAddress}
          onChange={handleInputChange}
          placeholder="0x..."
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "100%",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#333",
            color: "white",
          }}
        />

        <p style={{ fontSize: "16px", marginBottom: "10px" }}>Send Amount</p>
        <input
          type="number"
          id="sendAmount"
          value={formValues.sendAmount}
          onChange={handleInputChange}
          min="0"
          step="any"
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "100%",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#333",
            color: "white",
          }}
        />

        <button
          type="submit"
          disabled={isLoading}
          style={{
            backgroundColor: isLoading ? "#888" : "#e65100",
            color: isLoading ? "#eee" : "white",
            padding: "12px 24px",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: isLoading ? "not-allowed" : "pointer",
            width: "100%",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "black";
              e.target.style.transform = "scale(1.05)";
            }
          }}
          onMouseLeave={(e) => {
            if (!isLoading) {
              e.target.style.backgroundColor = "#e65100";
              e.target.style.color = "white";
              e.target.style.transform = "scale(1)";
            }
          }}
        >
          {isLoading ? "Sending..." : "Send"}
        </button>

        <div
          style={{
            marginTop: "20px",
            fontSize: "14px",
            color: "#ccc",
            wordWrap: "break-word",
          }}
        >
          {transferHash}
        </div>
      </form>
    </div>
  );
};

export default Interactions;
