import React from 'react';
import { withLayout } from '../wrappers/layout';
import { CometChatGroupListWithMessages } from '../CometChatWorkspace/src';

const InboxPage = () => {
  return (
    <div className="h-screen w-full">
      <CometChatGroupListWithMessages />
    </div>
  );
};

export default withLayout(InboxPage);
