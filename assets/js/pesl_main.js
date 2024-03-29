(() => {
  // DOM elements
  const accountBalanceElement = document.querySelector("#accountBalance");
  const riskPercentageElement = document.querySelector("#riskPercentage");
  const entryElement = document.querySelector("#entry");
  const stopLossElement = document.querySelector("#stopLoss");
  const numSharesElement = document.querySelector("#numSharesFull");
  const positionSizeElement = document.querySelector("#positionSize");
  const spreadInDollarsElement = document.querySelector("#spreadInDollars");
  const numShares_1_4_Element = document.querySelector("#numShares_1_4");
  const numShares_1_2_Element = document.querySelector("#numShares_1_2");
  const numSharesFull_Element = document.querySelector("#numSharesFull");
  const ProfitTarget1_1_Element = document.querySelector("#profitTarget1_1");
  const ProfitTarget2_1_Element = document.querySelector("#profitTarget2_1");
  const ProfitTarget3_1_Element = document.querySelector("#profitTarget3_1");
  const ProfitTarget4_1_Element = document.querySelector("#profitTarget4_1");
  const positionSizeWarningElement = document.querySelector(
    ".positionSizeWarningMessage"
  );
  const positionSizeErrorElement = document.querySelector(
    ".positionSizeErrorMessage"
  );

  class PESL {
    constructor() {
      // inputs
      this.accountBalance = this.getAccountBalanceFromLocalStorage();
      this.riskPercentage = this.getRiskPercentageFromLocalStorage();
      this.entry;
      this.stopLoss;
      this.isLongPos;

      // outputs
      this.spreadInDollars;
      this.profitTarget1_1;
      this.profitTarget2_1;
      this.profitTarget3_1;
      this.profitTarget4_1;
      this.positionSize;
      this.numSharesTenth;
      this.numSharesQuarter;
      this.numSharesHalf;
      this.numSharesFull;
    }

    getAccountBalanceFromLocalStorage() {
      return localStorage.getItem("accountBalance") ?? 100000;
    }

    getRiskPercentageFromLocalStorage() {
      return localStorage.getItem("riskPercentage") ?? 1;
    }

    updateAccountBalance(value) {
      this.accountBalance = parseFloat(value);
      localStorage.setItem("accountBalance", value);
    }

    updateRiskPercentage(value) {
      this.riskPercentage = parseFloat(value);
      localStorage.setItem("riskPercentage", value);
    }

    calculateMaxRisk() {
      return (
        parseFloat(this.accountBalance) * parseFloat(this.riskPercentage / 100)
      );
    }

    calculateNumShares(maximumRiskInDollars) {
      const differenceFromEntryToStopLoss =
        parseFloat(this.entry) - parseFloat(this.stopLoss);
      this.spreadInDollars = Math.abs(differenceFromEntryToStopLoss);
      this.isLongPos = differenceFromEntryToStopLoss > 0 ? true : false;
      let numShares = Math.abs(
        Math.round(maximumRiskInDollars / differenceFromEntryToStopLoss)
      );

      const remainder = numShares % 40;
      if (remainder != 0) {
        numShares -= remainder;
      }

      this.numSharesFull = numShares;
      this.numSharesTenth = numShares / 10;
      this.numSharesQuarter = numShares / 4;
      this.numSharesHalf = numShares / 2;

      numSharesFull_Element.textContent = this.numSharesFull;
      numShares_1_4_Element.textContent = this.numSharesQuarter;
      numShares_1_2_Element.textContent = this.numSharesHalf;

      return numShares;
    }

    calculatePositionSize(numShares) {
      return (numShares * parseFloat(this.entry)).toFixed(2);
    }

    calculateAndRenderSpreadInDollars() {
      spreadInDollarsElement.textContent = this.spreadInDollars.toFixed(2);
    }

    calculateAndRenderProfitTargets(numShares) {
      const targetRewardInDollars = (
        parseFloat(this.accountBalance) * parseFloat(1 / 100)
      ).toFixed(2);

      const baseProfitMargin = targetRewardInDollars / numShares;

      if (this.isLongPos) {
        ProfitTarget1_1_Element.textContent = this.getProfitTarget(
          baseProfitMargin,
          1,
          true
        );
        ProfitTarget2_1_Element.textContent = this.getProfitTarget(
          baseProfitMargin,
          2,
          true
        );
        ProfitTarget3_1_Element.textContent = this.getProfitTarget(
          baseProfitMargin,
          3,
          true
        );
        ProfitTarget4_1_Element.textContent = this.getProfitTarget(
          baseProfitMargin,
          4,
          true
        );
      } else {
        ProfitTarget1_1_Element.textContent = this.getProfitTarget(
          baseProfitMargin,
          1,
          false
        );
        ProfitTarget2_1_Element.textContent = this.getProfitTarget(
          baseProfitMargin,
          2,
          false
        );
        ProfitTarget3_1_Element.textContent = this.getProfitTarget(
          baseProfitMargin,
          3,
          false
        );
        ProfitTarget4_1_Element.textContent = this.getProfitTarget(
          baseProfitMargin,
          4,
          false
        );
      }
    }

    getProfitTarget(baseProfitMargin, RiskRewardRatio, isLong) {
      if (isLong) {
        return `${(
          parseFloat(this.entry) +
          baseProfitMargin * RiskRewardRatio
        ).toFixed(2)}`;
      } else {
        return `${(
          parseFloat(this.entry) -
          baseProfitMargin * RiskRewardRatio
        ).toFixed(2)}`;
      }
    }

    update() {
      if (
        this.accountBalance != null &&
        this.riskPercentage != null &&
        this.entry != null &&
        this.stopLoss != null
      ) {
        const maximumRiskInDollars = this.calculateMaxRisk();
        this.calculateNumShares(maximumRiskInDollars);
        const positionSize = this.calculatePositionSize(this.numSharesFull);
        this.calculateAndRenderProfitTargets(this.numSharesFull);
        this.calculateAndRenderSpreadInDollars();

        numSharesElement.textContent = this.numSharesFull;
        numSharesElement.textContent = this.numSharesFull;
        numSharesElement.textContent = this.numSharesFull;
        numSharesElement.textContent = this.numSharesFull;
        positionSizeElement.textContent = `${positionSize}`;

        this.renderWarnings(positionSize);
      }
    }

    renderWarnings(positionSize) {
      this.resetMessageState();
      if (parseFloat(positionSize) > parseFloat(this.accountBalance)) {
        positionSizeElement.classList.add("negative");
        positionSizeErrorElement.classList.add("isErrorShown");
      } else if (
        parseFloat(positionSize) > parseFloat(this.accountBalance / 2)
      ) {
        positionSizeElement.classList.add("positionSizeWarningCell");
        positionSizeWarningElement.classList.add("isWarningShown");
      }
    }

    resetMessageState() {
      positionSizeElement.classList.remove("negative");
      positionSizeErrorElement.classList.remove("isErrorShown");
      positionSizeWarningElement.classList.remove("isWarningShown");
      positionSizeElement.classList.remove("positionSizeWarningCell");
    }
  }

  const main = new PESL();

  // default values
  accountBalanceElement.value = main.accountBalance;
  riskPercentageElement.value = main.riskPercentage;

  // copy helper function
  const copyTextToClipboard = (e) => {
    const currentNode = e.target;
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(currentNode);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();

    currentNode.classList.add("isCopied");
    const originalTooltipMessage = currentNode.dataset.tooltip;
    currentNode.dataset.tooltip = "Copied!";

    setTimeout(() => {
      currentNode.classList.remove("isCopied");
    }, 100);

    setTimeout(() => {
      currentNode.dataset.tooltip = originalTooltipMessage;
    }, 1000);
  };

  // event listeners
  accountBalanceElement.addEventListener("change", (e) => {
    main.updateAccountBalance(e.target.value);
    main.update();
  });
  riskPercentageElement.addEventListener("change", (e) => {
    main.updateRiskPercentage(e.target.value);
    main.update();
  });
  entryElement.addEventListener("change", (e) => {
    main.entry = e.target.value;
    main.update();
  });
  stopLossElement.addEventListener("change", (e) => {
    main.stopLoss = e.target.value;
    main.update();
  });
  numSharesElement.addEventListener("click", (e) => {
    copyTextToClipboard(e);
  });
  positionSizeElement.addEventListener("click", (e) => {
    copyTextToClipboard(e);
  });
  ProfitTarget1_1_Element.addEventListener("click", (e) => {
    copyTextToClipboard(e);
  });
  ProfitTarget2_1_Element.addEventListener("click", (e) => {
    copyTextToClipboard(e);
  });
  ProfitTarget3_1_Element.addEventListener("click", (e) => {
    copyTextToClipboard(e);
  });
  ProfitTarget4_1_Element.addEventListener("click", (e) => {
    copyTextToClipboard(e);
  });
  spreadInDollarsElement.addEventListener("click", (e) => {
    copyTextToClipboard(e);
  });
  numShares_1_4_Element.addEventListener("click", (e) => {
    copyTextToClipboard(e);
  });
  numShares_1_2_Element.addEventListener("click", (e) => {
    copyTextToClipboard(e);
  });
  numSharesFull_Element.addEventListener("click", (e) => {
    copyTextToClipboard(e);
  });
})();
