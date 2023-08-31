export type PropsWithoutRef<T extends P, P> = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<T>, P>,
  'ref'
>;