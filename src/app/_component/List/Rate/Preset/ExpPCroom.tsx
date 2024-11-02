'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import {
  presetExpRateState,
  presetExpRateStateSelector,
  presetItemDropRateState,
} from '@/app/atoms/presetRateState';
import {
  PC_ROOM_DROP_ITEMS,
  PC_ROOM_EXP_ITEMS,
  RATE_NAME,
} from '@/app/constants/rate';
import useRateSelectSync from '@/app/hooks/useRateSelectSync';

const ExpPcRoom = () => {
  const { value, handleRateChange } = useRateSelectSync({
    rateSelector: presetExpRateStateSelector,
    state: presetExpRateState,
    rateName: RATE_NAME.PC_ROOM,
    syncStates: [presetItemDropRateState],
    baseItem: PC_ROOM_EXP_ITEMS,
    syncItems: [PC_ROOM_DROP_ITEMS],
  });

  const rateOption: SelectMenuItem = {
    label: '프리미엄 PC방',
    key: RATE_NAME.PC_ROOM,
    items: PC_ROOM_EXP_ITEMS,
  };

  return (
    <RateSelectListItemUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default ExpPcRoom;