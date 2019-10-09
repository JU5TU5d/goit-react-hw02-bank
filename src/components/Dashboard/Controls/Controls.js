import React from 'react';
import PropTypes from 'prop-types';
import css from './Controls.module.css';

const Controls = ({ handleChange, handleMinus, handlePlus, value }) => (
  <section className={css.controls}>
    <div className={css.wrap}>
      <input
        className={css.theamount}
        type="number"
        name="amount"
        onChange={handleChange}
        step="100"
        placeholder=" Top-up Amount ..."
        value={value}
      />
      <button
        className={`${css.depositbutton} ${css.key}`}
        type="button"
        name="Deposit"
        onClick={handlePlus}
      >
        Deposit
      </button>
      <button
        className={`${css.withdrawbutton} ${css.key}`}
        type="button"
        name="Withdraw"
        onClick={handleMinus}
      >
        Withdraw
      </button>
    </div>
  </section>
);
Controls.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleMinus: PropTypes.func.isRequired,
  handlePlus: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Controls;
