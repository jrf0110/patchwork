'use babel'
import React from 'react'
import { Link } from 'react-router'
import { InviteModalBtn } from '../modals'

export class NewsFeed extends React.Component {
  render() {
    return <div className="card">
      <h2><i className="fa fa-newspaper-o" /> Newsfeed</h2>
      <p>Public conversations and content in your network.</p>
    </div>
  }
}

export class Notifications extends React.Component {
  render() {
    return <div className="card">
      <h2><i className="fa fa-rss" /> Updates</h2>
      <p>See when people follow you, like your posts, or mention you in a message.</p>
    </div>
  }
}

export class Inbox extends React.Component {
  render() {
    return <div className="card">
      <h2><i className="fa fa-inbox" /> Inbox</h2>
      <p>Private, encrypted messages between you and your contacts.</p>
    </div>
  }
}

export class Bookmarks extends React.Component {
  render() {
    return <div className="card">
      <h2><i className="fa fa-bookmark-o" /> Saved</h2>
      <p>{"Posts you've bookmarked by pressing the "}<i className="fa fa-bookmark-o" /> button. Bookmarks are not shared with the network.</p>
    </div>
  }
}

export class Pubs extends React.Component {
  render() {
    return <div className="card">
      <h2>{"You're in WiFi mode."}</h2>
      <p>To reach the global network, you need to join a Pub.</p>
      <div className="card-well">
        <InviteModalBtn className="btn" />
      </div>
    </div>
  }
}

export class Contacts extends React.Component {
  render() {
    return <div className="card">
      <h2>Looking for Someone?</h2>
      <p>Find other users in the <Link to="/profile">Contacts</Link> page.</p>
      <div className="card-well" style={{textAlign: 'left', padding: '1px 14px'}}>
        <p>If you're having trouble finding a friend, you can:</p>
        <ol>
          <li>Join their Pub, or</li>
          <li>Get on the same WiFi as them.</li>
        </ol>
      </div>
    </div>
  }
}