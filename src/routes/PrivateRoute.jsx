import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";
import { DNA } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <DNA
          visible={true}
          height="160"
          width="160"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default PrivateRoute;
