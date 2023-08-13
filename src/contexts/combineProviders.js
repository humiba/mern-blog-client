// JavaScript Code
export const combineProviders = (...providers) => {
  return providers.reduce(
    (AccumulatedProviders, CurrentProvider) => {
      return ({ children }) => {
        return (
          <AccumulatedProviders>
            <CurrentProvider>{children}</CurrentProvider>
          </AccumulatedProviders>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};

// TypeScript Code
/********
export const combineComponents = (...components: FC[]): FC => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }: ComponentProps<FC>): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};
********/
