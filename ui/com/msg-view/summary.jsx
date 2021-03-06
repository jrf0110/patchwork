'use babel'
import React from 'react'
import mlib from 'ssb-msgs'
import threadlib from 'patchwork-threads'
import { UserLink, NiceDate } from '../index'
import { Inline as Content } from '../msg-content'
import { countReplies } from '../../lib/msg-relation'
import u from '../../lib/util'

export default class Summary extends React.Component {
  onClick() {
    this.props.onSelect(this.props.msg)
  }

  render() {
    let msg = this.props.msg
    let lastMsg = !this.props.forceRaw ? threadlib.getLastThreadPost(msg) : false
    var replies = countReplies(msg)
    replies = (replies === 0) ? '' : '('+(replies+1)+')'
    return <div className={'msg-view summary'+(this.props.selected ? ' selected' : '')+(msg.hasUnread ? ' unread' : '')} onClick={this.onClick.bind(this)}>
      { this.props.ctrls ?
        <div className="ctrls">
          <a onClick={(e)=>{e.stopPropagation(); this.props.onToggleBookmark(msg)}}>
            { msg.isBookmarked ?
              <i className="fa fa-bookmark" /> :
              <i className="fa fa-bookmark-o" /> }
          </a>
        </div> : '' }
      <div className="content">
        <div className="header">
          <div className="header-left">
            { msg.plaintext ? '' : <i className="fa fa-lock"/> } <UserLink id={msg.value.author} />{' '}
            {replies} {msg.mentionsUser ? <i className="fa fa-at"/> : ''}
          </div>
          <div className="header-right"><NiceDate ts={(lastMsg||msg).value.timestamp} /></div>
        </div>
        <div className="body">
          <div className="body-line"><Content msg={msg} forceRaw={this.props.forceRaw} /></div>
          { !this.props.noReply && lastMsg && lastMsg !== msg ?
            <div className="body-line"><Content msg={lastMsg} /></div> :
            '' }
        </div>
      </div>
    </div>
  }
}