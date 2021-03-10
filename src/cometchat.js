import { CometChat } from '@cometchat-pro/chat';

const AUTH_KEY = 'ab9ce5d1b09cdaf1e8525af87436eebeed73de17';

const loginCometChatUser = async (uid) => {
  try {
    const user = await CometChat.login(uid, AUTH_KEY);
    console.log('Login Successful:', { user });
  } catch (error) {
    console.log('Login failed with exception:', { error });
  }
};

const logoutCometChatUser = async () => {
  try {
    await CometChat.logout();
    console.log('Logout Successful:');
  } catch (error) {
    console.log('Login failed with exception:', { error });
  }
};

const registerCometChatUser = async (name, uid) => {
  var user = new CometChat.User(uid);

  user.setName(name);

  try {
    const createdUser = await CometChat.createUser(user, AUTH_KEY);
    console.log('user created', createdUser);
  } catch (error) {
    console.log('Register failed with exception:', { error });
  }
};

const addCometChatGroup = async (GUID, name, icon, participants) => {
  let membersList = participants.map(
    (participant) =>
      new CometChat.GroupMember(
        participant,
        CometChat.GROUP_MEMBER_SCOPE.PARTICIPANT
      )
  );

  var group = new CometChat.Group(
    GUID,
    name,
    CometChat.GROUP_TYPE.PRIVATE,
    '',
    icon
  );

  try {
    const createdGroup = await CometChat.createGroup(group);
    console.log('Group created successfully:', createdGroup);
    const response = await CometChat.addMembersToGroup(
      createdGroup.getGuid(),
      membersList,
      []
    );
    console.log('response', response);
  } catch (error) {
    console.log('Group creation failed with exception:', error);
  }
};

export {
  CometChat,
  loginCometChatUser,
  registerCometChatUser,
  addCometChatGroup,
  logoutCometChatUser,
};
