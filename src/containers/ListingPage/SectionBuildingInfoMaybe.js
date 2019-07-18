import React from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import css from './SectionBuildingInfoMaybe.css';

const SectionBuildingInfoMaybe = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  return publicData && publicData.buildingInfo ? (
    <div className={classes}>
      <h2 className={css.title}>
        <FormattedMessage id="ListingPage.buildingInfoTitle" />
      </h2>
      <p className={css.buildingInfo}>{publicData.buildingInfo}</p>
    </div>
  ) : null;
};

SectionBuildingInfoMaybe.defaultProps = { className: null, rootClassName: null, buildingInfo: null };

SectionBuildingInfoMaybe.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    buildingInfo: string,
  }),
};

export default SectionBuildingInfoMaybe;
