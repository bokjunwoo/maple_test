'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import {
  presetExpRateStateSelector,
  presetExpRateState,
} from '@/app/atoms/presetRateState';
import { RATE_NAME } from '@/app/constants/rate';
import useRateSelect from '@/app/hooks/useRateSelcet';

const VIPCoupon = () => {
  const { value, handleRateChange } = useRateSelect({
    rateSelector: presetExpRateStateSelector,
    state: presetExpRateState,
    rateName: RATE_NAME.VIP_COUPON,
  });

  const rateOption: SelectMenuItem = {
    label: 'VIP 쿠폰',
    key: RATE_NAME.VIP_COUPON,
    items: [
      { value: 0, label: '미적용' },
      { value: 15, label: '적용 (+15%)' },
    ],
  };

  return (
    <RateSelectListItemUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default VIPCoupon;