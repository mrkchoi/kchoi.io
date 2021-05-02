---
layout: trade
title: "Trade Calculator"
author: "Kenneth"
permalink: /trade/
---

<div class="main">
      <h2>Risk/Reward</h2>
      <form class="ui equal width form mini" autocomplete="off">
        <div class="ui segment">
          <h4 class="ui dividing header">Setup</h4>
          <div class="ui two column grid">
            <div class="column">
              <div class="field">
                <label for="accountBalance">Account Balance:</label>
                <input
                  type="text"
                  inputmode="decimal"
                  class="pure-input-1"
                  id="accountBalance"
                  placeholder="Account Balance"
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label for="riskPercentage">Risk %:</label>
                <input
                  type="text"
                  inputmode="decimal"
                  class="pure-input-1"
                  id="riskPercentage"
                  placeholder="Risk %"
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
          <h4 class="ui dividing header">Trade</h4>
          <div class="ui three column grid" id="tradeContainer">
            <div class="column">
              <div class="field">
                <label for="entry">Entry:</label>
                <input
                  type="text"
                  inputmode="decimal"
                  class="pure-input-1"
                  id="entry"
                  placeholder="Entry"
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label for="stopLoss">Stop Loss:</label>
                <input
                  type="text"
                  inputmode="decimal"
                  class="pure-input-1"
                  id="stopLoss"
                  placeholder="Stop Loss"
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="column">
              <table class="ui celled table unstackable">
                <thead>
                  <tr>
                    <th>Spread</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      id="spreadInDollars"
                      data-tooltip="Click to copy"
                      data-position="bottom center"
                      data-variation="mini"
                    >
                      -
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </form>
      <div class="ui segment">
        <h4 class="ui dividing header">Sizing</h4>
        <table class="ui celled table unstackable">
          <thead>
            <tr>
              <th>1/4</th>
              <th>1/2</th>
              <th>Full</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                id="numShares_1_4"
                data-tooltip="Click to copy"
                data-position="bottom center"
                data-variation="mini"
              >
                -
              </td>
              <td
                id="numShares_1_2"
                data-tooltip="Click to copy"
                data-position="bottom center"
                data-variation="mini"
              >
                -
              </td>
              <td
                id="numSharesFull"
                data-tooltip="Click to copy"
                data-position="bottom center"
                data-variation="mini"
              >
                -
              </td>
            </tr>
          </tbody>
        </table>
        <h4 class="ui dividing header">Profit Targets</h4>
        <table class="ui celled table unstackable">
          <thead>
            <tr>
              <th>1:1</th>
              <th>2:1</th>
              <th>3:1</th>
              <th>4:1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                id="profitTarget1_1"
                data-tooltip="Click to copy"
                data-position="bottom center"
                data-variation="mini"
              >
                -
              </td>
              <td
                id="profitTarget2_1"
                data-tooltip="Click to copy"
                data-position="bottom center"
                data-variation="mini"
              >
                -
              </td>
              <td
                id="profitTarget3_1"
                data-tooltip="Click to copy"
                data-position="bottom center"
                data-variation="mini"
              >
                -
              </td>
              <td
                id="profitTarget4_1"
                data-tooltip="Click to copy"
                data-position="bottom center"
                data-variation="mini"
              >
                -
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="ui segment">
        <table class="ui celled table unstackable">
          <thead>
            <tr>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                id="positionSize"
                data-tooltip="Click to copy"
                data-position="bottom center"
                data-variation="mini"
              >
                -
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="ui warning message positionSizeWarningMessage">
        Position size greater than 50% of account balance
      </div>
      <div class="ui negative message positionSizeErrorMessage">
        Position size exceeds account balance
      </div>
    </div>
