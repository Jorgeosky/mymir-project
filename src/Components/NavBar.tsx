import React from 'react';
import { Text, Input, Avatar } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { GetUser } from '../Query/Firebase';

const userValue = GetUser();

export default function NavBar() {
  return (
    <div className="NavBar">
      <Text h2>
        <Link to="/">MarketPlay</Link>
      </Text>
      <div>
        <Input
          width="500px"
          rounded
          placeholder="Search your product..."
          aria-label="Search"
          color="error"
          type="search"
        />
      </div>
      {userValue ? (
        <Avatar className="Avatar" text="xd" size="lg" />
      ) : (
        <Text h3>
          <Link to="/Login">Sign Up</Link>
        </Text>
      )}
    </div>
  );
}
