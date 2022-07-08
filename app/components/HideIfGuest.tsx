import useStores from "~/hooks/useStores";

type Props = {
  reverse?: boolean;
  children: JSX.Element;
};

export default function HideIfGuest({ reverse, children }: Props) {
  const { auth } = useStores();
  const hideContent = reverse
    ? !auth.authenticatedAsGuest
    : auth.authenticatedAsGuest;

  if (hideContent) {
    return null;
  }

  return children;
}
