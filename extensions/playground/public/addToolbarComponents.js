import React from 'react'
import ChangeNameModal from './ChangeNameModal.js'
import ShareModal from './ShareModal.js'

const buttonsForFull = () => {
  Studio.addToolbarComponent((props) => <div
    className='toolbar-button' onClick={() => Studio.workspaces.save()}>
    <i className='fa fa-floppy-o' />Save All</div>)

  Studio.addToolbarComponent((props) => <div
    className={'toolbar-button ' + (!props.canRemove ? 'disabled' : '')} onClick={() => Studio.removeEntity(Studio.getActiveEntity()._id)}>
    <i className='fa fa-trash' />Remove</div>)

  const currentDefault = () => Studio.getActiveEntity() && Studio.getActiveEntity().shortid === Studio.workspaces.current.default
  Studio.addToolbarComponent((props) => <div
    className='toolbar-button' style={{color: currentDefault() ? 'yellow' : 'inherit'}} onClick={Studio.workspaces.setDefault}>
    <i className='fa fa-star' />Default</div>)

  Studio.addToolbarComponent((props) => <div
    className='toolbar-button'
    onClick={() => Studio.openModal(ShareModal, { workspace: Studio.workspaces.current })}>
    <i className='fa fa-unlock' />Share
  </div>, 'right')

  Studio.addToolbarComponent((props) => <div
    className='toolbar-button' onClick={() => (window.location = '/')}>
    <i className='fa fa-plus' />New
  </div>, 'right')

  Studio.addToolbarComponent((props) => <div
    className='toolbar-button'
    onClick={() => (Studio.openTab({ key: 'Help', editorComponentKey: 'Help', title: 'Get Started' }))}>
    <i className='fa fa-question' />
  </div>, 'right')
}

const buttonsForEmbed = () => {
  Studio.addToolbarComponent((props) => <div
    className='toolbar-button' onClick={() => (window.open(window.location.href.split('?')[0], '_blank'))}>
    <i className='fa fa-desktop' />Full
  </div>, 'right')
}

export default (isEmbed) => {
  Studio.toolbarVisibilityResolver = (text) => {
    return text === 'Run'
  }

  Studio.addToolbarComponent((props) => <div
    className='toolbar-button' onClick={() => Studio.openModal(ChangeNameModal, {})}>
    <i className='fa fa-pencil' />
    <span id='workspaceName'>{Studio.workspaces.current.name || 'Anonymous'}</span>
  </div>, 'right')

  if (isEmbed) {
    buttonsForEmbed()
  } else {
    buttonsForFull()
  }
}