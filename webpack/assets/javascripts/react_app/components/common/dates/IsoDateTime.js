import React from 'react';
import PropTypes from 'prop-types';
import { FormattedDate, intlShape } from 'react-intl';
import { isoCompatibleDate } from '../../../common/helpers';

const IsoDateTime = (props, context) => {
  const { date, defaultValue } = props;
  if (date) {
    const isoDate = isoCompatibleDate(date);
    const title = context.intl.formatRelative(isoDateTime);

    return (
      <span title={title}>
        <FormattedDate
          value={isoDate}
          year="numeric"
          month="2-digit"
          day="2-digit"
          hour="2-digit"
          minute="2-digit"
          second={seconds}
        />
      </span>
    );
  }
  return <span>{defaultValue}</span>;
};

IsoDateTime.contextTypes = {
  intl: intlShape,
};

IsoDateTime.propTypes = {
  date: PropTypes.any,
  defaultValue: PropTypes.string,
};

IsoDateTime.defaultProps = {
  date: null,
  defaultValue: '',
};

export default IsoDateTime;
