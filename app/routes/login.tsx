import ComingSoon from "~/components/ComingSoon";
import Header from "~/components/Header";

const login = () => {
  return (
    <>
      <Header />
      <div className="terminal-ui">
        <ComingSoon pageName="Authentication" />
      </div>
    </>
  );
};

export default login;
