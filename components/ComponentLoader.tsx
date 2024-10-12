"use client"

import React, { useEffect } from 'react';
import { useComponentLoad } from '@/context/ComponentLoadContext';

export const ComponentLoader = (Component: React.ComponentType, componentName: string) => {
    return function WrappedComponent(props: any) {
      const { markComponentAsLoaded } = useComponentLoad();
  
      useEffect(() => {
        markComponentAsLoaded(componentName);
      }, [componentName, markComponentAsLoaded]);
  
      return <Component {...props} />;
    };
  };