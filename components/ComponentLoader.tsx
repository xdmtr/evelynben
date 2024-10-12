"use client"
import React, { useEffect } from 'react';

// HOC to wrap dynamic components and mark them as loaded
export const ComponentLoader = (Component: React.ComponentType<any>, onLoad: () => void) => {
  return function WrappedComponent(props: any) {
    useEffect(() => {
      onLoad(); // Notify that the component has loaded
    }, []);

    return <Component {...props} />; // Render the wrapped component with its props
  };
};
