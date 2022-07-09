import React from "react";
import GroupCSS from "./Group.css";

const Group = () => {
  const calc = () => {
    let amountInput = document.querySelector("#amount");
    let friendsInput = document.querySelector("#friends");
    let errorText = "";
    let result = "";

    let resultText = document.querySelector("#resultText");
    let messageDiv = document.querySelector(".message");
    if (amountInput.value !== "" && friendsInput.value !== "") {
      result = eval(`${amountInput.value} / ${friendsInput.value}`);

      resultText.textContent = `${result}Rs per person`;

      messageDiv.classList.remove("error");

      messageDiv.classList.add("success");

      // console.log(result);
    } else if (amountInput.value === "" && friendsInput.value === "") {
      errorText = "Amount and Number of friends needs to be filled in...";

      resultText.textContent = errorText;

      messageDiv.classList.remove("success");

      messageDiv.classList.add("error");

      // console.log(errorText);
    } else if (friendsInput.value == "") {
      errorText = "Number of friends needs to be filled in...";

      resultText.textContent = errorText;

      messageDiv.classList.remove("success");

      messageDiv.classList.add("error");

      // console.log(errorText);
    } else {
      errorText = "Amount needs to be filled in...";

      resultText.textContent = errorText;

      messageDiv.classList.remove("success");

      messageDiv.classList.add("error");

      // console.log(errorText);
    }

    // console.log(amountInput.value);
    // console.log(friendsInput.value);
  };

  return (
    <div class="backbox">
      <div class="container">
        <h4>Bill Splitter</h4>

        <section id="displayResult">
          <div class="message">
            <h3 id="resultText">Easily Calculate the split</h3>
          </div>
        </section>

        <section className="sec">
          <div>
            <input
              id="amount"
              type="number"
              placeholder="Enter the bill amount"
            />
          </div>
          <div>
            <input
              id="friends"
              type="number"
              placeholder="Enter number of friends"
            />
          </div>
          <div>
            <button className="btn222" onClick={calc}>
              Calculate
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Group;
