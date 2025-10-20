import React from 'react';
import { Card } from '../../molecules/card/card';
import { Button } from '../../atoms/button/button';

interface UserProfileProps {
  user: {
    imageSrc: string;
    name: string;
    bio: string;
  };
  onFollow: () => void;
  onMessage: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({
  user,
  onFollow,
  onMessage,
  ...rest
}) => {
  return (
    <div {...rest}>
      <Card
        imageSrc={user.imageSrc}
        title={user.name}
        description={user.bio}
        maxWidthClass=""
      />
      <div className="flex justify-around mt-4">
        <Button label="Follow" onClick={onFollow} />
        <Button label="Message" theme="secondary" onClick={onMessage} />
      </div>
    </div>
  );
};

export { UserProfile };
