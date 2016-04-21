import UserEditor from './UserEditor.js'
import ChangePasswordModal from './ChangePasswordModal.js'
import NewUserModal from './NewUserModal.js'
import AuthenticationButton from './AuthenticationButton.js'
import ChangePasswordButton from './ChangePasswordButton.js'

Studio.initializeListeners.push(async () => {
  const response = await Studio.api.get('/api/settings')
  Studio.authentication = { user: response.tenant }

  if (Studio.authentication.user.isAdmin) {
    Studio.registerEntitySet({
      name: 'users',
      faIcon: 'fa-user',
      visibleName: 'user',
      nameAttribute: 'username',
      onNew: () => Studio.openModal('NEW_USER_MODAL')
    })
    Studio.registerTabEditorComponent('users', UserEditor)
    Studio.registerToolbarComponent(ChangePasswordButton)
  }

  Studio.registerRightToolbarComponent(AuthenticationButton)
  Studio.registerModal('CHANGE_PASSWORD_MODAL', ChangePasswordModal)
  Studio.registerModal('NEW_USER_MODAL', NewUserModal)
})