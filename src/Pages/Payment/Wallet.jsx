import React, { useState, useEffect } from "react";
import simple_token_abi from "./Contract/simple_token_abi.json";
import Interactions from "./Interactions.jsx";
import { ethers } from "ethers";

const Wallet = () => {
  const contractAddress = "0x979CFdF632cD8ec155364fd9562690581355F54D";

  const [tokenName, setTokenName] = useState("Token");
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  const connectWalletHandler = async () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        accountChangedHandler(accounts[0]);
        setConnButtonText("Wallet Connected");
      } catch (error) {
        setErrorMessage(error.message);
      }
    } else {
      console.log("Please install MetaMask");
      setErrorMessage("Please install MetaMask");
    }
  };

  const accountChangedHandler = async (newAddress) => {
    setDefaultAccount(newAddress);
    await updateEthers();
  };

  const updateEthers = async () => {
    try {
      const tempProvider = new ethers.BrowserProvider(window.ethereum);
      const tempSigner = await tempProvider.getSigner();
      const tempContract = new ethers.Contract(
        contractAddress,
        simple_token_abi,
        tempSigner
      );
      setProvider(tempProvider);
      setSigner(tempSigner);
      setContract(tempContract);
    } catch (error) {
      console.error("Error initializing ethers:", error);
      setErrorMessage("Failed to initialize ethers.");
    }
  };

  useEffect(() => {
    if (contract != null) {
      updateBalance();
      updateTokenName();
    }
  }, [contract]);

  const updateBalance = async () => {
    try {
      const balanceBigN = await contract.balanceOf(defaultAccount);
      const decimals = await contract.decimals();
      const tokenBalance = ethers.formatUnits(balanceBigN, decimals);
      setBalance(tokenBalance);
    } catch (error) {
      console.error("Error fetching balance:", error);
      setErrorMessage("Failed to fetch token balance.");
    }
  };

  const updateTokenName = async () => {
    try {
      const name = await contract.name();
      setTokenName(name);
    } catch (error) {
      console.error("Error fetching token name:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        textAlign: "center",
        padding: "30px",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "10px",
          color: "black",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Welcome to Decentralized Crypto Transfer
      </h1>

      <p style={{ color: "#e65100", fontWeight: "bold" }}>
        ⚠️ Please ensure you have MetaMask installed.
      </p>
      <p style={{ color: "#e65100", fontWeight: "bold" }}>
        ⚠️ Receiver address must be valid (e.g., start with 0x...).
      </p>

      <button
        onClick={connectWalletHandler}
        style={{
          backgroundColor: "#e65100",
          color: "white",
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "10px",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "black";
          e.target.style.color = "white";
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#e65100";
          e.target.style.color = "white";
          e.target.style.transform = "scale(1)";
        }}
      >
        {connButtonText}
      </button>

      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "#1e1e1e",
          borderRadius: "10px",
          color: "white",
        }}
      >
        <h3>Address: {defaultAccount}</h3>
        <h3>
          {tokenName} Balance: {balance}
        </h3>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>

      <Interactions contract={contract} />
    </div>
  );
};

export default Wallet;
