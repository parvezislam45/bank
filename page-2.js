document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput =document.getElementById('deposit-amount');
    const newDepositText = depositInput.value ;
    const newDepositAmount = parseFloat(newDepositText);
    const depositTotal = document.getElementById('deposit-Tk');
    const previousDepositText = depositTotal.innerText;
    const previousAmount = parseFloat (previousDepositText);
    const newDepositTotal = previousAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    // Update Balance Total
    const balanceTotal = document.getElementById('balance-Tk');
    const balnceText = balanceTotal.innerText;
    const previusBalance = parseFloat (balnceText);
    const newTotalBalance = previusBalance + newDepositAmount;
    balanceTotal.innerText = newTotalBalance;
    depositInput.value = '';
})

document.getElementById('withdrow-btn').addEventListener ('click', function (){
    const withdrowInput = document.getElementById ('withdrow-amount');
    const newWithdrowText = withdrowInput.value;
    const newWithdrowAmount = parseFloat (newWithdrowText);
    const withdrowTotal = document.getElementById ('withdrow-Tk')
    const previousWithdrowText = withdrowTotal.innerText;
    const previousTotalAmount = parseFloat (previousWithdrowText);
    const newWithdrowTotal = previousTotalAmount + newWithdrowAmount;
    withdrowTotal.innerText = newWithdrowTotal;
    // Update Balance Total
    const totalBalance = document.getElementById ('balance-Tk');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat (totalBalanceText);
    const newTotalBalance = totalBalanceAmount - newWithdrowAmount;
    totalBalance.innerText = newTotalBalance;
    withdrowInput.value ='';

})
 