import React from 'react'

import PropTypes from 'prop-types'

const Statistic = (props) => {
  return (
    <>
      <div className={`statistic-statistic ${props.rootClassName} `}>
        <span className="statistic-sta">{props.Caption}</span>
        <span className="statistic-sta1">{props.Value}</span>
      </div>
      <style jsx>
        {`
          .statistic-statistic {
            gap: var(--dl-space-space-threeunits);
            width: 346px;
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: #ffffff;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            border-bottom-width: 1px;
          }
          .statistic-sta {
            color: rgb(153, 153, 153);
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 3%;
            text-transform: uppercase;
          }
          .statistic-sta1 {
            color: rgb(255, 255, 255);
            font-size: 80px;
            font-style: normal;
            font-weight: 500;
            line-height: 72px;
          }

          @media (max-width: 991px) {
            .statistic-statistic {
              gap: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .statistic-sta {
              font-size: 11px;
              line-height: 16.5px;
            }
            .statistic-sta1 {
              font-size: 40px;
              line-height: 36px;
            }
            .statistic-root-class-name {
              width: 100%;
            }
            .statistic-root-class-name1 {
              width: 100%;
            }
            .statistic-root-class-name2 {
              width: 100%;
            }
            .statistic-root-class-name3 {
              width: 100%;
            }
            .statistic-root-class-name4 {
              width: 100%;
            }
            .statistic-root-class-name5 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Statistic.defaultProps = {
  rootClassName: '',
  Value: '12',
  Caption: 'Years of growth',
}

Statistic.propTypes = {
  rootClassName: PropTypes.string,
  Value: PropTypes.string,
  Caption: PropTypes.string,
}

export default Statistic
