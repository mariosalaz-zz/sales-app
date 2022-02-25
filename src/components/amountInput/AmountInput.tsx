import "./AmountInput.scss";

type Props = {
  getAmount: (amount: string) => void;
};

const AmountInput = ({ getAmount }: Props) => (
  <div className="amount-input-container">
    <label htmlFor="amountInputId"></label>
    <input
      type="number"
      id="amountInputId"
      min="0"
      defaultValue="0"
      onChange={(e) => getAmount(e.target.value)}
    />
  </div>
);

export default AmountInput;
