import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useCounterValue();
  const { t } = useTranslation();
  const { increment, decrement, add } = useCounterActions();

  const handleInc = () => {
    // dispatch(counterActions.increment());
    increment();
  };

  const handleDec = () => {
    // dispatch(counterActions.decrement());
    decrement();
  };

  const handleAddFive = () => {
    add(5);
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button data-testid="increment-btn" onClick={handleInc}>
        {t('increment')}
      </Button>
      <Button data-testid="increment-five-btn" onClick={handleAddFive}>
        +5
      </Button>
      <Button data-testid="decrement-btn" onClick={handleDec}>
        {t('decrement')}
      </Button>
    </div>
  );
};
