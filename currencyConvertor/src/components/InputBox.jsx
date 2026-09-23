import React, { useId } from "react";
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-xl text-sm flex shadow-sm border border-gray-100 ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/50 mb-2 inline-block font-medium">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 text-black font-semibold"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/50 mb-2 w-full font-medium">Currency Type</p>
                <select
                    className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none text-black hover:bg-gray-200 transition-colors"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                            </option>
                        ))}
                </select>       
            </div>
        </div>
    );
}

export default InputBox;