import React from "react";
import FormatedDate from "../common/formated-date";
import _ from "lodash";
const cx = require('classnames')

export default class FailureDetails extends React.Component {
  getStacktrace(failure) {
    if (failure.backtrace == null) {
      return ""
    }
    let i = 0
    return _.map(failure.backtrace, (el)=> {
      i++
      return (
        <li key={i}>
          {el}
        </li>
      )
    })
  }

  render() {
    let {failure, onClose} = this.props;
    let content = "";
    if (!!failure) {
      content = (
        <div>
          <button className="btn btn-danger pull-right" onClick={onClose} style={{marginRight: 10}}><i className="fa fa-times"></i></button>
        <dl>
          <dt>Job</dt>
          <dd>{failure.payload.className}</dd>
          <dt>Arguments</dt>
          <dd><pre>{JSON.stringify(failure.payload.args, 1, 1)}</pre></dd>
          <dt>Queue</dt>
          <dd>{failure.queue}</dd>
          <dt>Worker</dt>
          <dd>{failure.worker}</dd>
          <dt>Time</dt>
          <dd><FormatedDate date={new Date(failure.failedAt)}/></dd>
          <dt>Exception</dt>
          <dd>{failure.throwableString}</dd>
          <dt>Message</dt>
          <dd>{failure.error}</dd>
          <dt>Stacktrace</dt>
          <dd>
            <ul className="stacktrace">{this.getStacktrace(failure)}</ul>
          </dd>
        </dl>
        </div>
      )
    }

    return (
      <div className={cx('details-container', {'visible': !!failure})}>
        {content}
      </div>
    )
  }
}
