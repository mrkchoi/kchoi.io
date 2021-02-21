(() => {
  // DOM elements
  const accountBalanceElement = document.querySelector("#accountBalance");
  const riskPercentageElement = document.querySelector("#riskPercentage");
  const riskRewardRatioElement = document.querySelector("#riskRewardRatio");
  const entryElement = document.querySelector("#entry");
  const stopLossElement = document.querySelector("#stopLoss");
  const numSharesElement = document.querySelector("#numShares");
  const positionSizeElement = document.querySelector("#positionSize");
  const profitTargetElement = document.querySelector("#profitTarget");
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
      this.riskRewardRatio = this.getRiskRewardRatioFromLocalStorage();
      this.entry;
      this.stopLoss;
      this.isLongPos;

      // outputs
      this.profitTarget;
      this.positionSize;
      this.numShares;
    }

    getAccountBalanceFromLocalStorage() {
      return localStorage.getItem("accountBalance") ?? 100000;
    }

    getRiskPercentageFromLocalStorage() {
      return localStorage.getItem("riskPercentage") ?? 1;
    }

    getRiskRewardRatioFromLocalStorage() {
      return localStorage.getItem("riskRewardRatio") ?? 2;
    }

    updateAccountBalance(value) {
      this.accountBalance = parseFloat(value);
      localStorage.setItem("accountBalance", value);
    }

    updateRiskPercentage(value) {
      this.riskPercentage = parseFloat(value);
      localStorage.setItem("riskPercentage", value);
    }

    updateRiskRewardRatio(value) {
      this.riskRewardRatio = parseFloat(value);
      localStorage.setItem("riskRewardRatio", value);
    }

    calculateMaxRisk() {
      return (
        parseFloat(this.accountBalance) * parseFloat(this.riskPercentage / 100)
      );
    }

    calculateNumShares(maximumRiskInDollars) {
      const differenceFromEntryToStopLoss =
        parseFloat(this.entry) - parseFloat(this.stopLoss);
      this.isLongPos = differenceFromEntryToStopLoss > 0 ? true : false;
      return Math.abs(
        Math.round(maximumRiskInDollars / differenceFromEntryToStopLoss)
      );
    }

    calculatePositionSize(numShares) {
      return (numShares * parseFloat(this.entry)).toFixed(2);
    }

    calculateProfitTarget(numShares) {
      const targetRewardInDollars = (
        parseFloat(this.accountBalance) * parseFloat(this.riskRewardRatio / 100)
      ).toFixed(2);

      return (this.isLongPos
        ? parseFloat(this.entry) + targetRewardInDollars / numShares
        : parseFloat(this.entry) - targetRewardInDollars / numShares
      ).toFixed(2);
    }

    update() {
      if (
        this.accountBalance != null &&
        this.riskPercentage != null &&
        this.riskRewardRatio != null &&
        this.entry != null &&
        this.stopLoss != null
      ) {
        const maximumRiskInDollars = this.calculateMaxRisk();
        const numShares = this.calculateNumShares(maximumRiskInDollars);
        const positionSize = this.calculatePositionSize(numShares);
        const profitTarget = this.calculateProfitTarget(numShares);

        numSharesElement.textContent = numShares;
        positionSizeElement.textContent = `$${positionSize}`;
        profitTargetElement.textContent = `$${profitTarget}`;

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
  riskRewardRatioElement.value = main.riskRewardRatio;

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
  riskRewardRatioElement.addEventListener("change", (e) => {
    main.updateRiskRewardRatio(e.target.value);
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
  profitTargetElement.addEventListener("click", (e) => {
    copyTextToClipboard(e);
  });
})();
