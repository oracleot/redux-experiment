# Redux Experiment

Just playing with Redux...using React with purely Functional Components.

Find below the features I'm experimenting with inside the app, and how I brief explanations on how I'm mixing redux state and local state.

### 1. Account Balance
This dude here is totally managed by redux. I'm also balanceReducer to exlusively manage this.

### 2. Toggle Account Balance
Because this only manipulates the component, I decided to keep the state manipulated in the local, no need for redux. Although, I might eventually move it into the user's preferences which will be managed by redux (in future updates).

### 3. Amount To Deposit or Withdraw (The Input)
The value change is compeletely managed in the local state; however, I push it's value to redux after the user clicks on the Deposit or Withdraw button.

### 4. Deposit and Withdraw buttons
Niggas are maintained in the local. Especially for the Withdraw button which has a clause to remain disabled if the users are attempting to bite more than they can chew (trying to withdraw more than they have in their wallet).

### 5. Transactions
This is managed by redux. Amounts deposited or withdrawn by users are being pushed into the transactions array which is inside the transactionsReducer.