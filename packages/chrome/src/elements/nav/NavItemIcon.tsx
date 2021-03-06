/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, HTMLAttributes } from 'react';
import { StyledNavItemIcon } from '../../styled';

export const NavItemIcon: React.FC<HTMLAttributes<any>> = ({ children, ...props }) => {
  // The `forwardRef` API is not needed in this element since we are cloning the provided child.
  const Element: React.FC<unknown> = elementProps =>
    React.cloneElement(Children.only(children as any), { ...elementProps, ...props });

  return <StyledNavItemIcon as={Element as any} {...props} />;
};
