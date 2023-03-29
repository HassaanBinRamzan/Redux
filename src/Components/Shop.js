import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const act = bindActionCreators(actions, dispatch);
  return (
    <>
      <div className="my-5">
        <h2 style={{ display: "inline-block", marginRight: "20px" }}>
          Deposit
        </h2>
        <button
          className="btn btn-primary mx-3"
          style={{ display: "inline-block" }}
          onClick={() => act.depositMoney(1000)}
        >
          +
        </button>
      </div>

      <div className="my-5">
        <h2 style={{ display: "inline-block", marginRight: "20px" }}>
          Withdraw
        </h2>
        <button
          className="btn btn-primary mx-3"
          style={{ display: "inline-block" }}
          onClick={() => act.withdrawMoney(1000)}
        >
          -
        </button>
      </div>
    </>
  );
};

export default Shop;
